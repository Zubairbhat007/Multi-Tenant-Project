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


