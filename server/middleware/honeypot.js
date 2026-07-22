// Honeypot middleware — botlarni aniqlash
export const honeypotCheck = (req, res, next) => {
  // Agar honeypot field to'ldirilgan bo'lsa — bu bot
  if (req.body?.honeypot || req.body?.website || req.body?.fax) {
    // Bot aniqlandi — 200 qaytar, lekin hech narsa qilmaymiz
    // (403 qaytarsak, botlar tushunib qolishi mumkin)
    console.warn(`🤖 Bot detected from ${req.ip}: honeypot filled`)
    return res.status(200).json({ success: true })
  }
  next()
}

// Timestamp validation — form submit 3 soniyadan tez bo'lsa, bot
export const timestampCheck = (req, res, next) => {
  const formTimestamp = req.body?.formTimestamp
  if (formTimestamp) {
    const elapsed = Date.now() - parseInt(formTimestamp, 10)
    if (elapsed < 3000) {
      // 3 sondan tez — bot ehtimoli yuqori
      console.warn(`🤖 Fast submit detected from ${req.ip}: ${elapsed}ms`)
      return res.status(200).json({ success: true })
    }
  }
  next()
}

// Honeypot + timestamp ni formga qo'shish uchun helper
export const getHoneypotFields = () => ({
  honeypot: '',
  website: '',
  fax: '',
  formTimestamp: Date.now().toString(),
})
