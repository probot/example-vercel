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

### Considerations
- Make sure you configure [the environment variables for your GitHub App](https://probot.github.io/docs/configuration/) in Vercel. You can read more about how to do it in [their docs](https://vercel.com/docs/concepts/projects/environment-variables).
- Vercel [expects to find your lambda functions under `/api` folder]([url](https://vercel.com/docs/concepts/functions/serverless-functions#deploying-serverless-functions)). Make sure your functions are placed there and double check Vercel detected your Lambda Functions during the deployment process by checking the logs:

![image](https://user-images.githubusercontent.com/2574275/187179364-b0019f95-be41-462a-97d5-facf4de39095.png)

## How it works

The [api/github/webhooks/index.js](api/github/webhooks/index.js) file is handling requests to `POST /api/github/webhooks`, make sure to configure your GitHub App registration's webhook URL accordingly.

## Other examples[^1]
- [Using TypeScript + Vercel](https://github.com/oscard0m/example-vercel-ts) by [@oscard0m](https://github.com/oscard0m)

[^1]: Do you have any other examples you would like to share? Feel free to open a Pull Request and share yours!

## License

[ISC](LICENSE)
