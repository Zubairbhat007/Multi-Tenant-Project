Getting Started
### ✅ 1. Clone the repository.

### ✅ 2. Install dependencies:
npm install

### ✅ 3. Setup Environment Variables

Create a `.env` file in the root folder with:

```
PORT= ""
JWT_SECRET= ""
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


