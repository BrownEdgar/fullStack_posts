class UsersController {
  async getAllUsers(req, res) {
    try {
      const users = await req.app.locals.services.users.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    };
  };
  async addUser(req, res) {
    const { body, file } = req;
    try {
      await req.app.locals.services.users.addUser(body, file);
      res.json({ message: 'user added' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    };
  };
};

module.exports = UsersController;