class UsersAuthController {
    async addUser(req, res, next) {
        console.log(req.file);
        const {body,file} = req
        try {
            await req.app.locals.services.users.addUser(body,file);
            res.json({ message: 'user added' })
        } catch (error) {
            res.status(500).json({ error: error.message})
        }
    }
}

module.exports = UsersAuthController;