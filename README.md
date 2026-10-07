# Renta API

Helping people find affordable living with convenience.

This is the backend RESTful API for the Renta application. It is built using Node.js and Express, utilizing MongoDB for data storage, Cloudinary for media management, and Google Gemini AI for advanced features.

## 🚀 Technologies & Libraries

* **Framework:** Node.js with Express.js (v5)
* **Database:** MongoDB & Mongoose
* **Security:** Helmet (HTTP headers), CORS (Cross-Origin Resource Sharing), bcryptjs (password hashing), and jsonwebtoken (JWT authentication)
* **Logging:** Morgan
* **External Services:** Cloudinary (Image hosting), Google Gemini (AI integration)

## 📂 Project Structure

* `index.js` - Main entry point, server configuration, and middleware setup.
* `config/` - Contains configuration files (e.g., `config.js`, `dbConfig.js`).
* `routes/` - Express routers mapping endpoints to controllers (e.g., `user.routes.js`).
* `controllers/` - Business logic for handling API requests.
* `models/` - Mongoose database schemas.
* `middlewares/` - Custom Express middlewares (e.g., `errors.middleware.js`).

## 🛠️ Setup and Installation

**Clone the repository and navigate into it:**
```bash
git clone <your-repo-url>
cd renta

npm install

# Server Config
PORT=3000
NODE_ENV=development
CLIENT_URL=http://localhost:3000

# MongoDB Config
MONGODB_USERNAME="<your_db_username>"
MONGODB_PASSWORD="<your_db_password>"
MONGODB_URI="<your_mongodb_connection_string>"

# Gemini AI Config
GEMINI_API_KEY="<your_gemini_api_key>"
GEMINI_MODEL="gemini_3.7"

# Cloudinary Config
CLOUDINARY_CLOUD_NAME="<your_cloud_name>"
CLOUDINARY_API_KEY="<your_cloudinary_key>"
CLOUDINARY_API_SECRET="<your_cloudinary_secret>"

#Development
npm run dev
#Production
npm start

Base API Endpoints
GET / - Health check endpoint. Returns {"status": "ok", "service": "Renta is working fine"}.

USE /api/users - Base route for all user-related operations (Create, Read, Update, Delete).

🛡️ Security & Architecture Notes
CORS Protection: The API restricts access to trusted origins defined by the CLIENT_URL environment variable.

Error Handling: A custom error middleware (errors.middleware.js) is implemented to format and return predictable error responses across the entire application.

Proxy Trust: The server is configured to trust the first proxy (app.set('trust proxy', 1)), which is essential when deploying on modern cloud hosting platforms.