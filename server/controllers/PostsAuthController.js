class PostsAuthController {
    async addPost(req, res) {
        const {body, file} = req;
        try {
            await req.app.locals.services.posts.addPost(body, file);
            res.json({ message: 'post is added!' });
        } catch (error) {
            res.status(500).json({ error: error.message});
        }
    }
}

module.exports = PostsAuthController;