# LoginDanSignUp
Buat Folder baru dulu
Jalankan command berikut ini

npm init -y
npm install express
npm install nodemon -D
npm install mongoose
npm install ejs

Pada File package.json bagian scripts ubah jadi gini

  "scripts": { <br/>
    "test": "echo \"Error: no test specified\" && exit 1", <br/>
    "serve": "node app.js", <br/>
    "dev": "nodemon app.js" <br/>
  }, <br/>



Jalankan command ini

npm run dev

terus masuk ke localhost:3000

