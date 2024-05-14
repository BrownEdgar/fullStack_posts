class PostsService {
  constructor(models) {
    this.models = models;
  };
  async getAllPosts() {
    const posts = await this.models.posts.find({}).populate('user', { name: 1, _id: 0, email: 1, image: 1 })
    return posts
  };
  async addPost(body, file) {
    const post = await this.models.posts({
      ...body,
      image: file?.filename,
    });
    await post.save();
    return post;
  };
  async sortPostsByDate() {
    const posts = await this.models.posts.find({}).populate('user', { name: 1, _id: 0, email: 1, image: 1 }).sort({createdAt: 1});
    return posts;
  };
  async sortPostsByTitle() {
    const posts = await this.models.posts.find({}).populate('user', { name: 1, _id: 0, email: 1, image: 1 }).sort({title: -1});
    return posts;
  };
  async showPostsByLastMonth() {
    const lastMonthPosts = await this.models.posts.find({createdAt: new Date().setMonth(new Date().getMonth() - 1)});
    return lastMonthPosts;
  };
};

module.exports = PostsService;