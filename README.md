# Nutrition Food App 🥗

A full-stack nutrition and diet management application that enables users to track food intake, monitor nutritional values, create personalized meal plans, and achieve health goals through an interactive and responsive platform with secure authentication and real-time data management.

## ✨ Features

- 🔐 **User Authentication** - Secure register/login with JWT tokens
- 🍎 **Food Database** - Track and manage food items with nutritional data
- 🍽️ **Meal Planning** - Create and manage personalized meal plans
- 🤖 **AI Recommendations** - Get personalized nutrition suggestions based on health goals
- 📊 **Nutrition Statistics** - View detailed nutrition analytics
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🔄 **Real-time Data Management** - Instant updates and synchronization

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - Secure authentication tokens
- **bcryptjs** - Password hashing and security

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Vite** - Fast build tool

## 📁 Project Structure

```
nutrition-food-app/
├── config/                  # Configuration files
│   └── db.js               # MongoDB connection setup
├── controllers/            # Business logic & request handlers
│   ├── authController.js   # Authentication logic
│   ├── aiController.js     # AI recommendations
│   └── statsController.js  # Statistics calculations
├── models/                 # Mongoose database schemas
│   ├── User.js            # User schema
│   ├── Food.js            # Food items schema
│   └── Meal.js            # Meal plans schema
├── routes/                 # API route definitions
│   ├── authRoutes.js      # Auth endpoints
│   ├── foodRoutes.js      # Food endpoints
│   ├── mealRoutes.js      # Meal endpoints
│   ├── aiRoutes.js        # AI endpoints
│   └── statsRoutes.js     # Stats endpoints
├── utils/                  # Utility functions
│   └── generateToken.js   # JWT token generation
├── server.js              # Express server entry point
├── package.json           # Dependencies & scripts
├── .env.example           # Environment variables template
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** v14 or higher
- **npm** or **yarn**
- **MongoDB** (local or MongoDB Atlas cloud)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/ipsasingh13/Nutrition-food-.git
cd Nutrition-food-
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env
```

4. **Configure your .env file**
Edit `.env` with your settings:
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/nutrition-db?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-key-change-in-production
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

5. **Start the development server**
```bash
npm run dev
```

Server will run at `http://localhost:5000`

## 📡 API Endpoints

### Authentication (`/api/auth`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register new user |
| POST | `/login` | Login with email & password |

**Example Register Request:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securePassword123"
  }'
```

### Food (`/api/foods`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all foods |
| POST | `/` | Add new food |
| GET | `/:id` | Get specific food |

### Meals (`/api/meals`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/` | Create new meal |
| GET | `/:userId` | Get user's meals |
| PUT | `/:id` | Update meal |
| DELETE | `/:id` | Delete meal |

### AI Recommendations (`/api/ai`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/recommend` | Get nutrition recommendation |

### Statistics (`/api/stats`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get nutrition statistics |

## 🌍 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | Required |
| `JWT_SECRET` | Secret key for JWT tokens | Required |
| `PORT` | Server port number | 5000 |
| `NODE_ENV` | Environment (development/production) | development |
| `FRONTEND_URL` | Frontend application URL | http://localhost:5173 |

## 📦 npm Scripts

```bash
npm start        # Start production server
npm run dev      # Start development server with auto-reload
npm run build    # Build frontend for production
npm run preview  # Preview production build
```

## 🐛 Troubleshooting

### MongoDB Connection Failed
- ✅ Verify `MONGO_URI` is correct in `.env`
- ✅ Check MongoDB Atlas cluster is running
- ✅ Whitelist your IP in MongoDB Atlas security settings
- ✅ Ensure connection string includes username:password

### Port Already in Use
```bash
# Change PORT in .env or use:
PORT=5001 npm start
```

### JWT Token Errors
- ✅ Verify `JWT_SECRET` is set in `.env`
- ✅ Check token hasn't expired (7 days default)
- ✅ Ensure token is sent in Authorization header

### CORS Issues
- ✅ Check `FRONTEND_URL` matches your frontend URL
- ✅ Verify CORS middleware is enabled in server.js
- ✅ Check request headers include proper Content-Type

## 🚀 Deployment

### Deploy to Heroku

1. **Install Heroku CLI**
```bash
npm install -g heroku
```

2. **Login to Heroku**
```bash
heroku login
```

3. **Create Heroku app**
```bash
heroku create your-app-name
```

4. **Set environment variables**
```bash
heroku config:set MONGO_URI="your-mongo-uri"
heroku config:set JWT_SECRET="your-secret-key"
heroku config:set NODE_ENV=production
```

5. **Deploy**
```bash
git push heroku main
```

### Deploy to Render

1. Connect your GitHub repository to Render
2. Create new Web Service
3. Set Build Command: `npm install`
4. Set Start Command: `npm start`
5. Add environment variables in Render dashboard
6. Deploy!

## 🔒 Security Best Practices

- ✅ Change `JWT_SECRET` to a strong, random string in production
- ✅ Use environment variables for all sensitive data
- ✅ Never commit `.env` file (already in .gitignore)
- ✅ Use HTTPS in production
- ✅ Validate and sanitize all user inputs
- ✅ Keep dependencies updated: `npm audit fix`
- ✅ Use strong passwords with bcryptjs hashing
- ✅ Enable MongoDB authentication

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 💬 Support

- Create an issue on GitHub for bugs or feature requests
- Check existing issues before creating a new one
- Provide clear description and reproduction steps

---

**Happy coding! 🚀 Build amazing nutrition apps with this starter template.**
