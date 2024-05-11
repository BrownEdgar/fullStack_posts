class UsersAuthService {
    constructor(models) {
        this.models = models;
    }
    async addUser(body,file) {
        const user = await this.models.users({
            ...body,
            image:file?.filename
        });
        await user.save()
        return user
    }
}

module.exports = UsersAuthService;