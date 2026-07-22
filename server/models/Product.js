import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Mahsulot nomi kerak.'],
    trim: true,
    maxlength: [200, 'Nom 200 tadan oshmasin.'],
  },
  description: {
    type: String,
    trim: true,
    maxlength: [1000, 'Tavsif 1000 tadan oshmasin.'],
    default: '',
  },
  price: {
    type: Number,
    required: [true, 'Narx kerak.'],
    min: [0, 'Narx manfiy bo\'lmasin.'],
  },
  oldPrice: {
    type: Number,
    default: null,
  },
  priceUZS: {
    type: Number,
    default: 0,
  },
  oldPriceUZS: {
    type: Number,
    default: null,
  },
  currency: {
    type: String,
    default: '$',
  },
  currencyUZS: {
    type: String,
    default: "so'm",
  },
  image: {
    type: String,
    default: '',
  },
  rating: {
    type: Number,
    default: 4.8,
    min: 0,
    max: 5,
  },
  reviews: {
    type: Number,
    default: 0,
  },
  badge: {
    type: String,
    enum: ['Bestseller', 'New', 'Popular', null],
    default: null,
  },
  category: {
    type: String,
    required: [true, 'Kategoriya kerak.'],
    enum: ['opor', 'brake-pads', 'brake-discs'],
  },
  carModel: {
    type: String,
    required: [true],
    trim: true,
  },
  stock: {
    type: Number,
    default: 100,
    min: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true })

productSchema.index({ name: 'text', description: 'text', carModel: 'text' })
productSchema.index({ category: 1 })
productSchema.index({ price: 1 })

export default mongoose.model('Product', productSchema)
