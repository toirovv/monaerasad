import Order from '../models/Order.js'
import Cart from '../models/Cart.js'
import Product from '../models/Product.js'

export const createOrder = async (req, res) => {
  try {
    const { shippingAddress, phone, note } = req.body

    const cart = await Cart.findOne({ user: req.user.id }).populate('items.product')
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ error: 'Savat bo\'sh.' })
    }

    const orderItems = cart.items.map((item) => ({
      product: item.product._id,
      name: item.product.name,
      price: item.product.price,
      qty: item.qty,
    }))

    const totalPrice = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0)
    const totalPriceUZS = cart.items.reduce(
      (sum, item) => sum + (item.product.priceUZS || 0) * item.qty, 0
    )

    const order = await Order.create({
      user: req.user.id,
      items: orderItems,
      totalPrice,
      totalPriceUZS,
      shippingAddress,
      phone,
      note,
    })

    // Stockni kamaytirish
    for (const item of cart.items) {
      await Product.findByIdAndUpdate(item.product._id, {
        $inc: { stock: -item.qty },
      })
    }

    // Savatni tozalash
    cart.items = []
    await cart.save()

    res.status(201).json({ order })
  } catch {
    res.status(500).json({ error: 'Server xatosi.' })
  }
}

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .populate('items.product', 'name image')
    res.json({ orders })
  } catch {
    res.status(500).json({ error: 'Server xatosi.' })
  }
}

export const getOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.id, user: req.user.id })
      .populate('items.product', 'name image')
    if (!order) {
      return res.status(404).json({ error: 'Buyurtma topilmadi.' })
    }
    res.json({ order })
  } catch {
    res.status(500).json({ error: 'Server xatosi.' })
  }
}
