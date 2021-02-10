# Probot & Vercel example

This repository is an example of how to deploy the "Hello, World" of probot apps to [Vercel](https://vercel.com).

## Local setup

Install dependencies

```
npm install
```

Start the server

```
npm start
```

Follow the instructions to register a new GitHub app.

## Deployment

The app is continuously deployed using [Vercel's GitHub app](https://github.com/apps/vercel).

## How it works

The [api/github/webhooks/index.js](api/github/webhooks/index.js) file is handling requests to `POST /api/github/webhooks`, make sure to configure your GitHub App registration's webhook URL accordingly.

## License

[ISC](LICENSE)
