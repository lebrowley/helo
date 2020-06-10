require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      massive = require('massive'),
      app = express(),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      authCtrl = require('./authControl')

//Top-level Middleware
app.use(express.json())
app.use(session({
    resave: false, 
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24}, 
    secret: SESSION_SECRET
}))

//Endpoints
//auth endpoints
app.post('/api/auth/register', authCtrl.register ) 
app.post('/api/auth/login', authCtrl.login) 
app.delete('/api/auth/logout', authCtrl.logout) 
app.get('/api/auth/user', authCtrl.getUser)

 
//post endpoints
// app.get('/api/posts/:userid') (send: [{title: '', author: '', authorPic: ''}])
// app.get('/api/post/:postid) (send: {title: '', img: '', content: '', author: '', authorPic:''})
// app.post('/api/post/:userid) (send: status 200)


//DB and Server Connection
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB connected')
    app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))
})