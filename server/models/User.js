import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Ism kiritilishi kerak.'],
    trim: true,
    minlength: [2, 'Ism kamida 2 ta belgi.'],
    maxlength: [50, 'Ism 50 tadan oshmasin.'],
  },
  email: {
    type: String,
    required: [true, 'Email kiritilishi kerak.'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Email noto\'g\'ri formatda.'],
  },
  password: {
    type: String,
    required: [true, 'Parol kiritilishi kerak.'],
    minlength: [8, 'Parol kamida 8 ta belgi.'],
    select: false,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  phone: {
    type: String,
    trim: true,
    default: '',
  },
}, { timestamps: true })

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 12)
  next()
})

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password)
}

userSchema.methods.toJSON = function () {
  const obj = this.toObject()
  delete obj.password
  delete obj.__v
  return obj
}

export default mongoose.model('User', userSchema)
