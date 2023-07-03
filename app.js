const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//connect to mongodb
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please insert username"]
        },
        password: {
            type: String,
            required: [true, "Please insert user password"]
        }
    },
    {
        timestamps: true    
    }
);

const user = mongoose.model('user', userSchema);
//

//ROUTES
app.get('/', (req, res) => {
    res.send('Masuk ke situs ini http://localhost:3000/login');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
}); 

app.get('/signup', (req, res) => {
    res.render('signup.ejs');
});

app.post('/newaccount', async(req, res) => {
    try {
        const userBaru = await user.create(req.body);
        res.redirect('/login');
    } 
    catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
});

app.get('/berhasil', (req, res) => {
    res.render('berhasil.ejs');
});


app.post("/login", async(req, res) => {
    try {
        const akunDiTemukan = await user.findOne({ username: req.body.username });
        if (akunDiTemukan) {
            //check password
            const result = (req.body.password === akunDiTemukan.password);
            if (result) {
                res.redirect('/berhasil');
            }
            else {
                res.status(200).json({ error: "username exist but password doesnt match with username" });
            }
        }
        else {
            res.status(200).json({ error: "username doesn't exist" });
        }
    } 
    catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
});
///

mongoose.connect('mongodb+srv://kematian:kematian123@cluster0.t3ydebj.mongodb.net/nasi?retryWrites=true&w=majority')
.then(() => {
    console.log('Success connect to MongkontolDB');
    app.listen(3000, () => {
        console.log('Running in localhost:3000');
    });
}).catch((error) => {
    console.log(error);
});