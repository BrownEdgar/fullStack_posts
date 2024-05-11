class UsersService {
    constructor(models) {
        this.models = models;
    }
    async getAllUsers() {
      const users = await this.models.users.aggregate([
        {$match:{}}
      ])
        return users;
    }
}

module.exports = UsersService;