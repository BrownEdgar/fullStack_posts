const jwt = require("jsonwebtoken")
const bcryptjs = require("bcryptjs")

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
    const hashPassword = bcryptjs.hashSync(user.password, 10)
    user.password = hashPassword
    const token = jwt.sign({id: user.id}, process.env.SECRET_PRIVATE_KEY)
    await user.save()
    return token
  }
}

module.exports = UsersService;