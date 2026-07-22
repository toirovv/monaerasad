import Product from '../models/Product.js'

export const getProducts = async (req, res) => {
  try {
    const { q, category, page = 1, limit = 12 } = req.query
    const filter = { isActive: true }

    if (category && category !== 'all') {
      filter.category = category
    }

    if (q) {
      filter.$or = [
        { name: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { carModel: { $regex: q, $options: 'i' } },
      ]
    }

    const skip = (parseInt(page) - 1) * parseInt(limit)
    const [products, total] = await Promise.all([
      Product.find(filter).sort({ createdAt: -1 }).skip(skip).limit(parseInt(limit)),
      Product.countDocuments(filter),
    ])

    res.json({
      products,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit)),
      },
    })
  } catch {
    res.status(500).json({ error: 'Server xatosi.' })
  }
}

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ error: 'Mahsulot topilmadi.' })
    }
    res.json({ product })
  } catch {
    res.status(500).json({ error: 'Server xatosi.' })
  }
}
