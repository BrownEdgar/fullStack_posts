const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "this email is already exist!"]
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 99
  },
  password: {
    type: String,
    required: true,
    validate: (value) => {
      const startWithUppercase = /^[A-Z]/.test(value);
      const hasNumber = /\d/.test(value);
      if (startWithUppercase && hasNumber && value.length > 6) {
        return true
      }
    },
    message: "invalid password",
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('user', userSchema)