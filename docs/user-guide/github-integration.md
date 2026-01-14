---
sidebar_position: 3
---

# GitHub Integration

Connect your GitHub repositories to agnexus for automatic deployments on every push.

## Overview

GitHub integration allows you to:
- Deploy MCP servers directly from GitHub repositories
- Automatically deploy when you push to your tracked branch
- Track specific commits for each deployment
- Cancel in-progress deployments when new pushes arrive

## Connecting Your GitHub Account

1. Navigate to **Deploy** → **GitHub** in your dashboard
2. Click **"Connect with GitHub"**
3. Authorize agnexus to access your repositories
4. You'll be redirected back to the deployment page

## Deploying from GitHub

### Option 1: Browse Your Repositories

1. After connecting GitHub, click **"Browse Repositories"**
2. Select your repository from the list
3. Choose the branch you want to deploy
4. Configure deployment settings:
   - Server name
   - Environment variables
   - Resource allocation
5. Click **"Deploy"**

### Option 2: Public Repository URL

You can deploy public repositories without connecting your GitHub account:

1. Enter the repository URL (e.g., `https://github.com/user/repo`)
2. Select the branch
3. Configure and deploy

## Automatic Deployments

Once deployed, webhooks are automatically configured. When you push to the tracked branch:

1. GitHub sends a webhook to agnexus
2. Any in-progress deployments are cancelled
3. A new deployment is created with the latest commit
4. Code is cloned, built, and deployed automatically

## Managing GitHub Deployments

### Update Deployment Settings

1. Go to your server dashboard
2. Click **"Settings"** → **"GitHub"**
3. Update:
   - Tracked branch
   - Auto-deploy toggle
   - Environment variables

### View Deployment History

Each deployment shows:
- Commit SHA
- Commit message
- Author
- Deployment status
- Deployment logs

### Manual Deployment

You can trigger a manual deployment at any time:
1. Go to your server dashboard
2. Click **"Deploy"**
3. Select the commit you want to deploy

## Disconnecting GitHub

To disconnect your GitHub account:

1. Go to **Settings** → **GitHub**
2. Click **"Disconnect"**
3. Confirm the action

Note: This will remove webhooks but won't delete your deployed servers.

## Troubleshooting

### "GitHub account not connected" error

- Navigate to Deploy → GitHub
- Click "Connect with GitHub"
- Complete the OAuth flow

### Auto-deploy not working

- Check that `auto_deploy_enabled` is enabled in settings
- Verify webhook exists in GitHub repository settings
- Check webhook delivery history in GitHub
- Review deployment logs for errors

### Repository not found

- Verify repository URL is correct
- For private repos, ensure GitHub is connected
- Check that your GitHub token has repository access

## Best Practices

- Use branch protection rules for production deployments
- Test deployments on feature branches first
- Monitor webhook delivery in GitHub settings
- Keep your GitHub token secure

## Next Steps

- [Learn about managing deployments](/docs/user-guide/managing-deployments)
- [Explore the marketplace](/docs/user-guide/marketplace)
- [Read the developer guide](/docs/developer-guide)
