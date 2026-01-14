---
sidebar_position: 5
---

# Managing Deployments

Learn how to manage your deployed MCP servers on agnexus.

## Overview

Once your MCP server is deployed, you can manage it through the agnexus dashboard. This includes pausing, resuming, updating, and monitoring your deployments.

## Viewing Your Servers

1. Navigate to **Dashboard** in the main menu
2. See all your deployed servers:
   - Server name
   - Status (deployed, paused, failed)
   - Last updated
   - Resource usage

## Server Status

Your servers can have these statuses:

- **Deployed**: Running and accessible
- **Paused**: Stopped but not deleted
- **Building**: Currently deploying
- **Failed**: Deployment encountered an error

## Updating a Server

### Update Code

1. Push to GitHub (Code Upload does not allow for updates)
2. Click **"Deploy"** to update
3. Wait for deployment to complete

### Update Configuration

1. Go to **Settings** in your server dashboard
2. Update:
   - Environment variables
   - Resource allocation
   - Health check settings
3. Click **"Save"**
4. Redeploy if needed

## Viewing Logs

### Deployment Logs

1. Go to your server dashboard
2. Click **"Deployments"** tab
3. Select a deployment
4. View build and deployment logs

### Runtime Logs

1. Go to your server dashboard
2. Click **"Logs"** tab
3. View real-time application logs

## Deleting a Server

To permanently delete a server:

1. Go to your server dashboard
2. Click **"Settings"** → **"Delete Server"**
3. Type the server name to confirm
4. Click **"Delete"**

Warning: This action cannot be undone. All data and configuration will be permanently deleted.

## Monitoring

### Resource Usage

View resource consumption:
- CPU usage
- Memory usage
- Network traffic
- Request count

### Health Checks

Monitor server health:
- Health check status
- Response times
- Error rates
- Uptime

## Best Practices

- **Monitor regularly**: Check logs and metrics frequently
- **Update carefully**: Test updates in staging before production
- **Use pauses**: Pause unused servers to save resources
- **Keep backups**: Export important configuration

## Troubleshooting

### Server Won't Start

- Check deployment logs for errors
- Check terminal logs for lower level logs
- Verify environment variables are set
- Review resource allocation limits
- Check health check configuration

### High Resource Usage

- Review your server's code for inefficiencies
- Consider upgrading your subscription plan
- Optimize your Docker image
- Check for memory leaks

### Deployment Failures

- Review build logs
- Verify Dockerfile is correct
- Check dependency installation
- Review error messages

## Next Steps

- [Learn about subscription plans](/docs/user-guide/subscription-plans)
- [Read about subdomain access](/docs/user-guide/subdomain-access)
- [Explore troubleshooting guide](/docs/user-guide/troubleshooting)
