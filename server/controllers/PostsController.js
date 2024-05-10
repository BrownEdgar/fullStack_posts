class PostsController { 
    async getAllPosts(req,res,next){
        try {
            const posts = await req.app.locals.services.posts.getAllPosts();
            res.json(posts)
        } catch (error) {
            res.status(500).json({ error: error.message})
        }
    }
}

module.exports = PostsController