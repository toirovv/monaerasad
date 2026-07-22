import Cart from '../models/Cart.js'

export const getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user.id }).populate('items.product')
    if (!cart) {
      cart = await Cart.create({ user: req.user.id, items: [] })
    }
    res.json({ cart })
  } catch {
    res.status(500).json({ error: 'Server xatosi.' })
  }
}

export const addItem = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body
    let cart = await Cart.findOne({ user: req.user.id })

    if (!cart) {
      cart = new Cart({ user: req.user.id, items: [] })
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId
    )

    if (existingItem) {
      existingItem.qty = Math.min(existingItem.qty + quantity, 99)
    } else {
      cart.items.push({ product: productId, qty: quantity })
    }

    await cart.save()
    cart = await Cart.findOne({ user: req.user.id }).populate('items.product')

    res.json({ cart })
  } catch {
    res.status(500).json({ error: 'Server xatosi.' })
  }
}

export const updateItem = async (req, res) => {
  try {
    const { productId, quantity } = req.body
    const cart = await Cart.findOne({ user: req.user.id })

    if (!cart) {
      return res.status(404).json({ error: 'Savat topilmadi.' })
    }

    if (quantity < 1) {
      cart.items = cart.items.filter(
        (item) => item.product.toString() !== productId
      )
    } else {
      const item = cart.items.find(
        (item) => item.product.toString() === productId
      )
      if (item) item.qty = Math.min(quantity, 99)
    }

    await cart.save()
    const updatedCart = await Cart.findOne({ user: req.user.id }).populate('items.product')

    res.json({ cart: updatedCart })
  } catch {
    res.status(500).json({ error: 'Server xatosi.' })
  }
}

export const removeItem = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id })
    if (!cart) {
      return res.status(404).json({ error: 'Savat topilmadi.' })
    }

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== req.params.itemId
    )
    await cart.save()
    const updatedCart = await Cart.findOne({ user: req.user.id }).populate('items.product')

    res.json({ cart: updatedCart })
  } catch {
    res.status(500).json({ error: 'Server xatosi.' })
  }
}

export const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id })
    if (cart) {
      cart.items = []
      await cart.save()
    }
    res.json({ cart: { items: [] } })
  } catch {
    res.status(500).json({ error: 'Server xatosi.' })
  }
}
