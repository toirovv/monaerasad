import mongoose from 'mongoose'

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  qty: {
    type: Number,
    required: true,
    min: 1,
    max: 99,
    default: 1,
  },
}, { _id: false })

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  items: [cartItemSchema],
}, { timestamps: true })

cartSchema.virtual('totalPrice').get(function () {
  return this.items.reduce((sum, item) => {
    return sum + (item.product?.price || 0) * item.qty
  }, 0)
})

cartSchema.set('toJSON', { virtuals: true })

export default mongoose.model('Cart', cartSchema)
