class PostsController {
  async getAllPosts(req, res) {
    try {
      const posts = await req.app.locals.services.posts.getAllPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    };
  };
  async addPost(req, res) {
    const { body, file } = req;
    console.log('body', body);
    try {
      await req.app.locals.services.posts.addPost(body, file);
      res.json({ message: 'post is added!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    };
  };
  async sortAllPosts(req, res) {
    const { sort } = req.query;
    console.log('sort', sort);
    try {
      const sortedPosts = await req.app.locals.services.posts.sortAllPosts(sort);
      res.json({ sortedPosts });
    } catch (error) {
      res.status(403).json({ error: error.message });
    };
  };
};

module.exports = PostsController;