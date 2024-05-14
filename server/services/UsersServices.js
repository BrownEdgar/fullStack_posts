class UsersService {
  constructor(models) {
    this.models = models;
  }

  async getAllUsers() {
    const users = await this.models.users.aggregate([
      { $match: {} }
    ])
    return users;
  }
  async addUser(body, file) {
    const user = await this.models.users({
      ...body,
      image: file?.filename
    });
    await user.save();
    return user;
  }
};

module.exports = UsersService;