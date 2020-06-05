const bcrypt = require('bcrypt')

module.exports = {
    // register  (req.body: username: '', password: '') (send: {username: '', profilePic: '', userId: #})
    register: async (req, res) => {
        const dbInstance = req.app.get('db')
        const {username, password} = req.body

        const existingUser = await dbInstance.check_user(username)

        if(existingUser[0]) {
            return res.status(409).send('User already exists')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = await dbInstance.register_user([username, hash])

        req.session.user = {
            username: newUser[0].username,
            profilePic: newUser[0].profile_pic,
            userId: newUser[0].user_id
        }
        res.status(200).send(req.session.user)
    },
    // login  (req.body: username: '', password: '') (send: {username: '', profilePic: '', userId: #})
    login: async (req, res) => {
        const dbInstance = req.app.get('db')
        const {username, password} = req.body

        const user = await dbInstance.check_user(username)

        if(!user[0]) {
            return res.status(404).send('User does not exist')
        } else {
            const authenticated = bcrypt.compareSync(password, user[0].password)
            if(authenticated) {
                req.session.user = {
                    username: user[0].username,
                    profilePic: user[0].profile_pic,
                    userId: user[0].user_id
                }
                res.status(200).send(req.session.user)
            } else {
                res.status(403).send('Incorrect email or password')
            }
        }
    }
    // logout  (destroy session)?? 
    // - or does this need to be a post request since we might not be using express-session?? 
}