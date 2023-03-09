# Clothes Manager Frontend

## 1. Develope locally

Add `.env`:

```bash
ADMIN_PWD="password"
ADMIN_USER="username"
NEXTAUTH_URL="http://localhost:3000/"
NEXTAUTH_SECRET="8GYrPDgw9wj5213UHWIm"
BACKEND_URL="http://api.deuterium.wiki:8000/"
```

Install packages:

```bash
npm run build
```

Start development:

```bash
npm start
```

## 2. Deploy containerizedly

Add `.env`:

```bash
ADMIN_PWD="password"
ADMIN_USER="username"
NEXTAUTH_URL="https://your.domain.com/"
NEXTAUTH_SECRET="8GYrPDgw9wj5213UHWIm"
BACKEND_URL="http://api.deuterium.wiki:8000/"
```

Deploy to docker container:

```bash
docker-compose up -d
```
