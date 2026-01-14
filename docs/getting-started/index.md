---
sidebar_position: 1
---

# Getting Started

Deploy your first MCP server in minutes. This guide walks you through the complete deployment process on agnexus.

## Prerequisites

- An agnexus account ([sign up](https://agnexus.ai/signup))
- An MCP server codebase (or use a template from the marketplace)

## Step 1: Start Deployment

1. Log in to your [agnexus dashboard](https://agnexus.ai/dashboard)
2. Click **"Deploy New MCP"** button
3. Choose your deployment method:
   - **Marketplace**: Browse and deploy pre-built templates
   - **GitHub**: Deploy from a GitHub repository
   - **File Upload**: Upload a ZIP file with your code

## Step 2: Choose Deployment Method

### Option A: Deploy from Marketplace

1. Click **"Browse Marketplace"**
2. Browse available MCP templates
3. Click on a template to view details
4. Click **"Deploy"** to use this template
5. Continue to Step 3

### Option B: Deploy from GitHub

1. Click **"Deploy via GitHub"**
2. Choose repository type:
   - **Public Repository**: Enter the GitHub repository URL directly
   - **Private Repository**: Connect your GitHub account first
     - Click **"Connect GitHub Account"**
     - Authorize agnexus to access your repositories
     - Select your repository from the list
3. Select the branch you want to deploy (usually `main` or `master`)
4. Continue to Step 3

### Option C: Upload ZIP File

1. Click **"Deploy via File Upload"**
2. Prepare your MCP server code:
   - Zip your project directory (include all files)
   - Make sure it includes `requirements.txt` (Python) or `package.json` (Node.js)
   - Include your main entry point file
3. Click **"Choose File"** and select your ZIP file
4. Wait for the file to upload and validate
5. Continue to Step 3

## Step 3: Configure Your MCP Server

After choosing your deployment method, you'll be asked to configure your server:

### 1. Server Name

Enter a name for your MCP server:
- Use lowercase letters, numbers, and hyphens
- Must be unique across your account
- Example: `my-notion-mcp` or `weather-api-server`

### 2. Description (Optional)

Add a description of what your MCP server does:
- Helps you identify servers later
- Visible in your dashboard
- Example: "Connects AI assistants to my Notion workspace"

### 3. Environment Variables

Configure any environment variables your server needs:
- Click **"Add Environment Variable"**
- Enter the variable name (e.g., `NOTION_API_KEY`)
- Enter the value (or mark as secret)
- Add multiple variables as needed

Common environment variables:
- API keys for external services
- Database connection strings
- Configuration flags
- Service URLs

### 4. Region

Select the deployment region:
- Choose the region closest to your users
- Affects latency and data residency
- Can be changed later

### 5. Dockerfile

Choose how to handle the Dockerfile:

- **Use Generated Dockerfile**: Let agnexus generate a Dockerfile automatically (experimental)
- **Use Custom Dockerfile**: Provide your own Dockerfile (recommended for production)
  - If uploading ZIP: Include `Dockerfile` in your ZIP
  - If using GitHub: Ensure `Dockerfile` is in your repository

**Note**: While AI-generated Dockerfiles are available, we strongly recommend using a manual Dockerfile for production deployments as they are more reliable and bulletproof.

## Step 4: Deploy

1. Review all your configuration settings
2. Click **"Deploy"** button
3. You'll be redirected to the MCP dashboard, specifically to your deployment page

## Step 5: Monitor Deployment

On the deployment page, you can watch your server deploy in real-time:

### High-Level Information

The dashboard shows:
- **Deployment Status**: Building, deploying, deployed, or failed
- **Progress Indicators**: Visual progress of each deployment stage
- **Current Stage**: What's happening right now (e.g., "Building Docker image")
- **Estimated Time**: How long the deployment might take

### Detailed Information

For detailed logs and technical information:
- Click **"View Terminal"** or **"View Logs"**
- See low-level build and deployment logs
- Debug any issues that occur during deployment

### Deployment Stages

Your deployment goes through these stages:

1. **Validating**: Checking your code and configuration
2. **Building**: Creating the Docker image
3. **Pushing**: Uploading to the container registry
4. **Deploying**: Starting your server in production
5. **Health Check**: Verifying your server is running

## Step 6: Deployment Complete

Once deployment finishes, you'll see one of two outcomes:

### Success ✅

Your server is now live! You'll see:
- **Deployment Status**: "Deployed"
- **Server URL**: Your subdomain (e.g., `https://my-server.agnexus.ai`)
- **Access Information**: How to connect to your server

### Failure ❌

If deployment fails:
- **Deployment Status**: "Failed"
- **Error Message**: What went wrong
- **Logs**: Detailed error information in the terminal view
- **Actions**: Options to retry or fix issues

## Step 7: Access Your Server

### Using the Subdomain

Your deployed MCP server is accessible at its subdomain:

```
https://your-server-name.agnexus.ai
```

You can:
- Access it directly in a browser (if your server has a web interface)
- Connect it to MCP clients (like Claude Desktop)
- Use it in your applications

### Adding Access Keys (Optional)

For private servers, you can add access keys:

1. Go to your server dashboard
2. Click **"Settings"** → **"Access Keys"**
3. Click **"Generate New Key"**
4. Copy and save your access key
5. Use it in requests: `Authorization: Bearer agn_your_key_here`

## Next Steps

- [Deploy a Notion MCP example](/docs/user-guide/notion-example) - See a complete walkthrough
- [Learn about GitHub integration](/docs/user-guide/github-integration) - Set up automatic deployments
- [Explore the marketplace](/docs/user-guide/marketplace) - Discover pre-built templates
- [Manage your deployments](/docs/user-guide/managing-deployments) - Pause, update, and monitor

## Need Help?

- Check the [User Guide](/docs/user-guide) for detailed feature documentation
- Review [troubleshooting guide](/docs/user-guide/troubleshooting) for common issues
- Contact support through the dashboard
