import Model from './Model.js';

class Reviews extends Model {
  getName() {
    return this.get('name');
  }

  getProfilePic() {
    return this.get('profilePic');
  }

  getDate() {
    return this.get('date');
  }

  getComment() {
    return this.get('comment');
  }

  getPhoto() {
    return this.get('photo');
  }

  getDescription() {
    return this.get('description');
  }

  getLink() {
    return this.get('link');
  }
}

export default Reviews;
