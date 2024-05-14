class PostsController {
  async getAllPosts(req, res) {
    try {
      const posts = await req.app.locals.services.posts.getAllPosts();
      res.json(posts)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  };
  async addPost(req, res) {
    const { body, file } = req;
    console.log('body', body)
    try {
      await req.app.locals.services.posts.addPost(body, file);
      res.json({ message: 'post is added!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  async sortPostsByDate(req, res) {
    const { date } = req.query;
    console.log('date', date);
    try {
      const datePosts = await req.app.locals.services.posts.sortPostsByDate();
      res.json({ datePosts });
    } catch (error) {
      res.status(403).json({ error: error.message });
    }
  };
  async sortPostsByTitle(req, res) {
    const { title } = req.query;
    console.log('title', title);
    try {
      const titlePosts = await req.app.locals.services.posts.sortPostsByTitle();
      res.json({ titlePosts });
    } catch (error) {
      res.status(403).json({ error: error.message });
    }
  };
  async showPostsByLastMonth(req, res) {
    const { date } = req.query;
    console.log('date', date);
    try {
      const lastMonthPosts = await req.app.locals.services.posts.showPostsByLastMonth();
      res.json({ lastMonthPosts });
    } catch (error) {
      res.status(403).json({ error: error.message });
    }
  }
}

module.exports = PostsController;