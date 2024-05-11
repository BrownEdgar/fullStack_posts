class PostsAuthService {
  constructor(models) {
    this.models = models;
  }
  async addPost(body, file) {
    const post = await this.models.posts({
      ...body,
      image: file?.filename,
    });
    await post.save();
    return post;
  }
}

module.exports = PostsAuthService;