class PostsService {
  constructor(models) {
    this.models = models;
  };
  async getAllPosts() {
    const posts = await this.models.posts.find({}).populate('user', { name: 1, _id: 0, email: 1, image: 1 });
    return posts;
  };
  async addPost(body, file) {
    const post = await this.models.posts({
      ...body,
      image: file?.filename,
    });
    await post.save();
    return post;
  };
  async sortAllPosts(sortField) {
    if (sortField === "date") {
      const datePosts = await this.models.posts.find({createdAt: sortField}).populate('user', { name: 1, _id: 0, email: 1, image: 1 });
      return datePosts;
    };
    const posts = await this.models.posts.find({}).populate('user', { name: 1, _id: 0, email: 1, image: 1 }).sort({ [sortField]: 1 });
    return posts;
  };
};

module.exports = PostsService;