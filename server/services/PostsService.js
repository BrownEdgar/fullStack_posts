class PostsService  {
    constructor(models) {
        this.models = models;
    }
    async getAllPosts(){
        try {
            const posts = await this.models.posts.aggregate([{$match:{}}])
            return posts
        } catch (error) {
            res.status(500).json({ error: error.message})
        }
    }
}

module.exports = PostsService