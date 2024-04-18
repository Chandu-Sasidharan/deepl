# Simple Text Translation App with DeepL API using AWS Lambda Proxy

This repository contains a project designed to demonstrate the integration between a frontend application and a backend AWS Lambda function serving as a proxy to the DeepL API for translations. This setup is intended for educational purposes, aimed at helping learners understand web development, API usage, serverless architecture, and AWS deployment.

## Project Structure

- **frontend**: Contains the web application that users interact with.
- **lambda-func-proxy**: Houses the AWS Lambda function that acts as a proxy between the frontend and the DeepL translation API.

## Prerequisites

- An active AWS account.
- A DeepL API account with a generated API key.
- [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html) installed for local testing and deployment.
- Docker installed for local Lambda function invocation through the SAM CLI.

## Setting Up

### 1. Create a DeepL API Account

- Visit [DeepL Subscription](https://www.deepl.com/pro-api?cta=header-pro-api) and sign up for a free plan.
- Generate an API key in your account settings. Keep this key secure as it will be needed for your Lambda function's environment variables.

### 2. Clone the Repository

```bash
git clone git@github.com:Chandu-Sasidharan/deepl-text-translator.git
cd deepl-text-translator
```

### 3. Lambda Function Setup

Navigate to the `lambda-func-proxy` directory and install dependencies:

```bash
cd lambda-func-proxy
npm install
```

#### Configure Environment Variables in `template.yml`

Add the following environment variables to your `template.yml`

```yaml
Environment:
  Variables:
    DEEPL_API_KEY: "Your DeepL API Key"
    DEEPL_API_URL: "https://api-free.deepl.com/v2/translate"
```

#### Local Testing

```bash
sam local invoke "TranslateFunction" -e event.json
```

#### Lambda Function Deployment

1. **Package the application**:
   ```bash
   npm run zip
   ```

2. **Upload to AWS Lambda**:
   - Navigate to the AWS Lambda console, create a new function, and upload the zip file.

3. **Set up AWS API Gateway**:
   - Configure API Gateway as a trigger for the Lambda function.
   - Select REST API, enable CORS, and remember to deploy the API after every modification.

### 4. Frontend Setup

Navigate to the `frontend` directory and install the dependencies:

```bash
cd frontend
npm install
```

Create a `.env` file with the URL of your deployed API Gateway:

```plaintext
VITE_PROXY_URL=https://your-api-gateway-url
```

#### Running the Frontend Locally

```bash
npm run dev
```

### Frontend Deployment

Deploy your frontend to AWS Amplify or any other preferred service.

## Educational Objectives

- **Understanding Client-Server Architecture**: Learn how the frontend interacts with a backend service using HTTP requests.
- **Exploring Serverless with AWS Lambda**: Gain insights into deploying and managing serverless functions.
- **API Integration**: Understand how to integrate third-party APIs securely using serverless functions as proxies.
- **Environment Management**: Learn how to manage and secure API keys and other sensitive information.

## Note

Secure your proxy API in a production environment.

## Support

For support, questions, or feedback, reach out to me via email at [mail@chandu-sasidharan.de](mailto:mail@chandu-sasidharan.de).







