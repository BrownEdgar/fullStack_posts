class PostsService {
  constructor(models) {
    this.models = models;
  }
  async getAllPosts() {

    const posts = await this.models.posts.find({}).populate('user', { name: 1, _id: 0, email: 1, image: 1 })
    return posts
  }

  async addPost(body, file) {
    const post = await this.models.posts({
      ...body,
      image: file?.filename,
    });
    await post.save();
    return post;
  }
  async getPostById(id) {
    const post = await this.models.posts.findOne({_id:id}) .populate('user', { name: 1, _id: 0, email: 1, image: 1 });
    return post;
  }
  async deletePostById(id) {
    const post = await this.models.posts.deleteOne({_id:id})
    return post;
  }
}

module.exports = PostsService