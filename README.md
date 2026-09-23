# Express & MongoDB CRUD API

A RESTful API built with Node.js, Express, and Mongoose for managing user data. This backend service connects to a MongoDB Atlas cluster and follows a standard MVC (Model-View-Controller) architecture.

## 🚀 Technologies Used

* **Node.js** - JavaScript runtime
* **Express.js** - Web framework for routing and middleware
* **MongoDB & Mongoose** - Database and Object Data Modeling (ODM)
* **ES Modules** - Modern JavaScript `import`/`export` syntax

## 📂 Project Structure

```text
├── controllers/
│   └── userController.js   # Contains the database logic for user operations
├── models/
│   └── user.model.js       # Mongoose schema and model definition
├── routes/
│   └── users.js            # Express router mapping URLs to controllers
├── index.js                # Entry point, middleware, and database connection
├── package.json            # Project dependencies and scripts
└── .env                    # Environment variables (do not commit this file)
```

## 🛠️ Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <your-project-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory of your project and add your MongoDB Atlas connection string.
   ```env
   PORT=3000
   MONGO_URI=mongodb://kehyzgroup_db_user:oJZ9WiHQkgeTPugo@ac-n5pzn9q-shard-00-00.vilktae.mongodb.net:27017,ac-n5pzn9q-shard-00-01.vilktae.mongodb.net:27017,ac-n5pzn9q-shard-00-02.vilktae.mongodb.net:27017/?ssl=true&replicaSet=atlas-2xgxye-shard-0&authSource=admin&appName=Cluster0
   ```

4. **Start the server:**
   ```bash
   npm start
   ```
   *The server should log that it is running on port 3000 and successfully connected to MongoDB.*

## 🛣️ API Endpoints

All routes are prefixed with `/api/users`.

| Method | Endpoint | Description | Request Body (JSON) |
|---|---|---|---|
| **GET** | `/` | Retrieve all users | None |
| **GET** | `/:id` | Retrieve a single user by ID | None |
| **POST** | `/` | Create a new user | `{ "name": "...", "email": "...", "password": "..." }` |
| **PUT** | `/:id` | Update an existing user | `{ "name": "...", "email": "...", "password": "..." }` |
| **DELETE** | `/:id` | Delete a user by ID | None |

## ⚠️ Security Notes

* Never hardcode your MongoDB connection string or passwords directly into your source code.
* Always ensure your `.env` file is added to your `.gitignore` before pushing to GitHub.
* Make sure your MongoDB Atlas Network Access is configured to allow your IP address.