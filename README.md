# LoginDanSignUp
Buat Folder baru dulu

Terus masuk ke foldernya pake cd

Jalankan command berikut ini

# command
npm init -y

npm install express

npm install nodemon -D

npm install mongoose

npm install ejs
# berhenti
Pada File package.json bagian scripts ubah jadi gini

&nbsp;&nbsp;"scripts": { <br/>
&nbsp;&nbsp;&nbsp;&nbsp;    "test": "echo \"Error: no test specified\" && exit 1", <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;"serve": "node app.js", <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;"dev": "nodemon app.js" <br/>
&nbsp;&nbsp;}, <br/>



Jalankan command ini
#command
npm run dev
#berhenti
terus masuk ke localhost:3000

