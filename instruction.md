# MONAER Uzbekistan — Auto Parts E-Commerce

## Loyiha haqida
MONAER — O'zbekistonda avtomobil ehtiyot qismlarini sotish uchun onlayn do'kon. Glassmorphism dizayn, tez ishlaydigan frontend va xavfsiz backend.

---

## Texnologiyalar

### Frontend
| Texnologiya | Maqsad |
|---|---|
| React 19 | UI framework |
| Vite 7 | Build tool |
| Tailwind CSS 4 | Utility CSS |
| Framer Motion | Animatsiyalar |
| React Router 7 | Client-side routing |
| Lucide React | Ikonkalar |

### Backend
| Texnologiya | Maqsad |
|---|---|
| Node.js + Express | Server |
| JWT (jsonwebtoken) | Autentifikatsiya |
| bcryptjs | Parolni hashlash |
| Helmet | HTTP header xavfsizligi |
| CORS | Cross-Origin Resource Sharing |
| express-rate-limit | Rate Limiting |
| express-mongo-sanitize | NoSQL Injection himoyasi |
| xss-clean | XSS himoyasi |
| hpp | HTTP Parameter Pollution |
| dotenv | Environment variables |
| morgan | HTTP logging |

### Xavfsizlik qatlamlari
1. **JWT Auth** — Token-based autentifikatsiya, 15 daqiqa access + 7 kun refresh
2. **XSS Protection** — `xss-clean` + DOMPurify (frontend sanitization)
3. **CORS** — Faqat ruxsat etilgan origin'lardan so'rovlar
4. **Rate Limiting** — 15 daqiqada 100 ta so'rov (API), 5 ta (login)
5. **Helmet** — 15+ xavfsizlik header'lari (CSP, HSTS, X-Frame-Options...)
6. **Honeypot** — Botlarni aniqlash uchun yashirin form field
7. **Input Validation** — express-validator bilan barcha kirishlarni tekshirish
8. **HTTP Parameter Pollution** — `hpp` middleware
9. **NoSQL Injection** — `express-mongo-sanitize`
10. **Brute Force** — Login uchun maxsus rate limit (5 urinish/15 daqiqa)

---

## Papka tuzilishi

```
mmonaer/
├── src/                          # Frontend (React)
│   ├── components/
│   │   ├── card/                 # Card sub-components
│   │   │   ├── CardModal.jsx
│   │   │   └── CartStepper.jsx
│   │   ├── cart/                 # Cart sub-components
│   │   │   ├── CartEmpty.jsx
│   │   │   └── CartItem.jsx
│   │   ├── home/                 # Home page sections
│   │   │   ├── Banner.jsx
│   │   │   ├── BrandStrip.jsx
│   │   │   ├── CTA.jsx
│   │   │   ├── Engineering.jsx
│   │   │   ├── FeaturedProducts.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Stats.jsx
│   │   │   └── Testimonials.jsx
│   │   ├── ui/                   # Shared UI components
│   │   │   ├── AmbientBackground.jsx
│   │   │   ├── CountUpStat.jsx
│   │   │   ├── FontStyles.jsx
│   │   │   ├── LazySection.jsx
│   │   │   ├── RouteDivider.jsx
│   │   │   ├── SectionLabel.jsx
│   │   │   └── Stars.jsx
│   │   ├── CardDesign.jsx        # Main product card
│   │   ├── CardSkeleton.jsx      # Loading skeleton
│   │   └── LoadingSpinner.jsx    # Route loading spinner
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── AuthProvider.jsx
│   │   ├── CartContext.jsx        # useSyncExternalStore
│   │   └── useAuth.js
│   ├── data/
│   │   └── product.json           # 12 ta mahsulot
│   ├── layout/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Backet.jsx
│   │   ├── Catalog.jsx
│   │   ├── Contact.jsx
│   │   ├── Favorites.jsx
│   │   ├── Home.jsx
│   │   └── Login.jsx
│   ├── assets/
│   │   ├── MonaerImg1.png
│   │   └── placeholder.png
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── server/                       # Backend (Express)
│   ├── config/
│   │   └── env.js                # Environment variables validation
│   ├── middleware/
│   │   ├── auth.js               # JWT verification
│   │   ├── security.js           # Helmet, CORS, Rate Limit, XSS
│   │   ├── validate.js           # express-validator rules
│   │   └── honeypot.js           # Bot detection
│   ├── routes/
│   │   ├── auth.js               # /api/auth/*
│   │   ├── products.js           # /api/products/*
│   │   ├── cart.js               # /api/cart/*
│   │   └── orders.js             # /api/orders/*
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── cartController.js
│   │   └── orderController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Cart.js
│   │   └── Order.js
│   ├── .env.example
│   ├── package.json
│   └── server.js                 # Entry point
│
├── .env.example                  # Frontend env
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

---

## API Endpoints

### Auth
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/api/auth/register` | Ro'yxatdan o'tish | Yo'q |
| POST | `/api/auth/login` | Tizimga kirish | Yo'q |
| POST | `/api/auth/refresh` | Token yangilash | Yo'q |
| GET | `/api/auth/me` | Foydalanuvchi ma'lumotlari | Ha |

### Products
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| GET | `/api/products` | Barcha mahsulotlar | Yo'q |
| GET | `/api/products/:id` | Bitta mahsulot | Yo'q |
| GET | `/api/products/search?q=...` | Qidiruv | Yo'q |
| GET | `/api/products/category/:cat` | Kategoriya bo'yicha | Yo'q |

### Cart (Backend-sync)
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| GET | `/api/cart` | Savatni olish | Ha |
| POST | `/api/cart/add` | Mahsulot qo'shish | Ha |
| PUT | `/api/cart/update` | Miqdorni o'zgartirish | Ha |
| DELETE | `/api/cart/:itemId` | Mahsulotni o'chirish | Ha |
| DELETE | `/api/cart` | Savatni tozalash | Ha |

### Orders
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/api/orders` | Buyurtma berish | Ha |
| GET | `/api/orders` | Buyurtmalar tarixi | Ha |
| GET | `/api/orders/:id` | Bitta buyurtma | Ha |

---

## Xavfsizlik — Batafsil

### 1. JWT Authentication
```
Access Token:  15 daqiqa muddat, HTTP-only cookie
Refresh Token: 7 kun, HTTP-only cookie, rotation
```
- Parol: `bcryptjs` bilan 12 rounds hash
- Token payload: `{ id, email, role }`
- Har bir auth so'rovda token tekshiriladi

### 2. XSS (Cross-Site Scripting)
- Backend: `xss-clean` — barcha kirishlarni tozalaydi
- Frontend: React avtomatik escape qiladi
- CSP header: `script-src 'self'` — faqat o'z scriptlari

### 3. CORS
```javascript
origin: ['http://localhost:5173', 'https://monaer.uz'],
credentials: true,
methods: ['GET', 'POST', 'PUT', 'DELETE'],
```

### 4. Rate Limiting
| Limit | Chegarasi | Davomiylik |
|---|---|---|
| Umumiy API | 100 so'rov | 15 daqiqa |
| Login | 5 ta urinish | 15 daqiqa |
| Register | 3 ta | 1 soat |
| Buyurtma | 10 ta | 1 soat |

### 5. Helmet
```
Content-Security-Policy: default-src 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 0 (CSP o'rniga)
Strict-Transport-Security: max-age=31536000
Referrer-Policy: strict-origin-when-cross-origin
```

### 6. Bot Security (Honeypot)
- Formaga yashirin `website` field qo'shiladi
- Botlar avtomatik to'ldiradi → request rad etiladi
- CSS bilan `position: absolute; left: -9999px` qilinadi
- JavaScript bilan `tabindex: -1` + `autocomplete: off`

---

## Cart Tizimi
- **Frontend**: `useSyncExternalStore` pattern — localStorage + session
- **Backend**: Foydalanuvchi authenticated bo'lsa → serverda saqlanadi
- **Sinxronlash**: Login bo'lganda localStorage → serverga merge
- **Offline**: localStorage da saqlanadi, online bo'lganda sync

---

## Scripts

### Frontend
```bash
npm run dev      # Dev server (port 5173)
npm run build    # Production build
npm run preview  # Build ni ko'rish
npm run lint     # ESLint tekshirish
```

### Backend
```bash
cd server
npm run dev      # Dev server (port 5000)
npm run start    # Production
npm run seed     # Mahsulotlarni DB ga yuklash
```

---

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=MONAER
```

### Backend (server/.env)
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/monaer
JWT_SECRET=your-super-secret-key-min-32-chars
JWT_REFRESH_SECRET=your-refresh-secret-key-min-32-chars
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
CORS_ORIGIN=http://localhost:5173
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=100
```
