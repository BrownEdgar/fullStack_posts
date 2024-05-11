class UsersController {
  async getAllUsers(req, res) {
    try {
      const users = await req.app.locals.services.users.getAllUsers();
      res.json(users)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}

module.exports = UsersController