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
  async getPostById(req, res) {
    const { id } = req.params;
    try {
      const post = await req.app.locals.services.posts.getPostById(id);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      };
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    };
  };
  async deletePostById(req, res) {
    const { id } = req.params;
    try {
      const post = await req.app.locals.services.posts.deletePostById(id);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      };
      res.json('post deleted');
    } catch (error) {
      res.status(500).json({ error: error.message });
    };
  };
};

module.exports = PostsController;