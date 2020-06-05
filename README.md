# MVP
- register new user
- login functionality
- view profile (picture and username when logged in)


**icebox- extras** 
- view all posts
- remove my own posts from the feed
- search through the posts by title
- reset the search to view all the posts again
- click on any of the posts in the feed to navigate to the detailed view of that post
- navigate to the new post form
- enter values for a new post, including title, image URL and content
 
## Database
**dependencies**
- massive
- dotenv
- bcrypt

User 
```SQL
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),  --this will be the hash password
    profile_pic TEXT
);
```
Post
```SQL
CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT, 
    author_id INT REFERENCES users(user_id)
);
```
**SQL Queries**


## Server
**dependencies**
- express
- express-session??

**controllers**
- auth controller
    - register
    - login
    - logout
    - getUser
- post controller

**endpoints**
- auth:
    - app.post('/api/auth/register') (req.body: username: '', password: '') (send: {username: '', profilePic: '', userId: #})
    - app.post('/api/auth/login') (req.body: username: '', password: '') (send: {username: '', profilePic: '', userId: #})
    - app.delete('/auth/logout')  (destroy session)?? 
        - or does this need to be a post request since we might not be using express-session?? 
    - app.get('/auth/user')??  

- post: 
    - app.get('/api/posts/:userid') (send: [{title: '', author: '', authorPic: ''}])
    - app.get('/api/post/:postid) (send: {title: '', img: '', content: '', author: '', authorPic:''})
    - app.post('/api/post/:userid) (send: status 200)

## Client
**dependencies**
- axios
- react-router-dom
- react-redux
- redux
- redux-promise-middleware??

**routes**
- landing view (/)  (where user can login or register)
- register view (/register) (where user can register and be redirected to login)
- profile view (/profile)   (home where user can see list of their posts)  (Dashboard.js??)
- post view (/post) (where user can see one individual post) (Post.js??)
- new post view (/newpost) (where user can make a new post) (Form.js??)

**file structure**
- src/
    - App.js
    - App.css
    - index.js
    - reset.css (add this and all below)
    - .env (put in .gitignore)
    - routes.js
    - redux/ 
        - store
        - reducer
    - components/
        - Nav.js / .css
        - Auth.js / .css
        - Dashboard.js / .css
        - Post.js / .css
        - Form.js /.css
        