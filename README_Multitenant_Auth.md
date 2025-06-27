# 🏢 Multitenant Authentication System (Node.js + MongoDB)

This is a full-stack multitenant authentication project using Node.js, Express, MongoDB, and JWT. It supports multiple tenants (e.g., client1, client2) with isolated user data and authentication per tenant based on subdomains.

---

## 🚀 Features

- 🗃️ Dynamic MongoDB connection per tenant (via subdomain)
- 🔐 Secure JWT authentication
- 🧍‍♂️ Per-tenant user isolation
- 🌐 Subdomain routing (`client1.localhost`, `client2.localhost`)
- 🚫 Token revocation simulation
- 🧾 Simple frontend (HTML pages for register, login, secure page)

---

## 📁 Folder Structure

```
multitenant-auth-app/
├── config/
│   └── dbManager.js
├── controllers/
│   └── authController.js
├── middleware/
│   ├── authMiddleware.js
│   └── subdomainRouter.js
├── models/
│   └── userModel.js
├── public/
│   ├── auth.html
│   └── secure.html
├── revokedTokens/
│   └── list.json
├── routes/
│   └── authRoutes.js
├── services/
│   └── tokenService.js
├── .env
├── .gitignore
├── server.js
└── package.json
```

---

## ⚙️ How to Run the Server Locally

### ✅ 1. Clone the Repository

```bash
git clone https://github.com/your-username/multitenant-auth-app.git
cd multitenant-auth-app
```

### ✅ 2. Install Dependencies

```bash
npm install
```

### ✅ 3. Setup Environment Variables

Create a `.env` file in the root folder with:

```
PORT=3000
JWT_SECRET=yourSuperSecretKey
```

### ✅ 4. Simulate Subdomains (Local Setup)

Edit your `hosts` file:

#### Windows
```
C:\Windows\System32\drivers\etc\hosts
```

#### macOS/Linux
```
/etc/hosts
```

Add:

```
127.0.0.1 client1.localhost
127.0.0.1 client2.localhost
```

### ✅ 5. Start the Server

```bash
node server.js
```

---

## 🌐 Test in Browser

| Tenant | URL |
|--------|-----|
| Client 1 | http://client1.localhost:3000/auth.html |
| Client 2 | http://client2.localhost:3000/auth.html |

After login, test:

- `http://client1.localhost:3000/secure.html`
- `http://client2.localhost:3000/secure.html`

---

## 🔒 Security Highlights

- JWTs include tenant ID to prevent cross-tenant access
- Middleware verifies token & tenant on protected routes
- Revoked tokens are stored in a blacklist (`list.json`)
- Same email/password can exist in both tenants (fully isolated databases)

---

## 📦 Notes

- `node_modules/` and `.env` are excluded from Git via `.gitignore`
- On first run, MongoDB databases will be created dynamically (e.g., `client1_db`, `client2_db`)
- You must have MongoDB Atlas or a local MongoDB instance accessible

---

## 📌 Future Improvements

- Use Redis for token revocation
- Add refresh tokens & logout
- Extend to support full user data per tenant (e.g., dashboards, resources)

---

## 👨‍💻 Author

Made with ❤️ for multitenant architecture demo using MERN-style technologies.

---

```
To deploy this project, make sure subdomain support is enabled on your domain/DNS setup.
```