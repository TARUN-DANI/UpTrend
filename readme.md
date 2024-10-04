# UpTrend: The Ultimate Bag Selling E-Commerce Website

## 🌟 Overview
Uptrend is a feature-packed e-commerce website tailored for selling bags, designed with a responsive and eye-catching **neumorphic theme**. It comes with a complete user authentication and authorization system and offers a seamless shopping experience through a fully functional cart, account management, and more.

## 🛠️ Tech Stack
- **Frontend**: EJS (Embedded JavaScript)
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt, Cookie-Parser
- **File Upload**: Multer
- **Testing**: Postman

## 🚀 Features
- **Authentication & Authorization**: 
  - Secure user registration and login using **bcrypt** for hashing passwords.
  - Token-based authentication using **JWT** (JSON Web Tokens) for secure session management.
  - **CookieParser** for parsing HTTP cookies.

- **Product Management**: 
  - Comprehensive product pages for browsing bags.
  - Full **cart functionality** to manage items before checkout.

- **Account Management**:
  - View and edit account information.
  - Easy logout and session handling.

- **Neumorphic Theme**:
  - A modern, visually appealing design with a smooth, soft-shadow UI that enhances user experience.
  - Fully responsive for mobile and desktop devices.

## 🔧 Dependencies
```json
{
    "bcrypt": "^5.1.1",
    "config": "^3.3.12",
    "connect-flash": "^0.1.1",
    "cookie-parser": "^1.4.6",
    "debug": "^4.3.7",
    "dotenv": "^16.4.5",
    "ejs": "^3.1.10",
    "express": "^4.19.2",
    "express-session": "^1.18.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.6.1",
    "multer": "^1.4.5-lts.1"
}
```

## 🔧 Dev Dependencies
```json
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.11"
```

## 🔄 API Testing with Postman
To test the API, use **Postman** to send requests to the endpoints. You can test the following features:
- **User Registration**: `POST /register`
- **User Login**: `POST /login`
- **Add to Cart**: `POST /cart`
- **View Cart**: `GET /cart`
- **Logout**: `POST /logout`

Make sure to include **JWT** tokens in the headers for authenticated routes.


## 🧪 Testing
Use **Postman** to test all API routes. Ensure proper tokens are used for protected routes.

## 👤 Author
Developed by Tarun Dani.

## 📧 Contact
For inquiries, feel free to reach out to [TARUNDANI2005@outlook.com](mailto:TARUNDANI2005@outlook.com).

---
