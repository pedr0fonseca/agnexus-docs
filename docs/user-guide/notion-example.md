---
sidebar_position: 2
---

# Notion MCP Example

This guide walks you through deploying a Notion MCP server from the agnexus marketplace. This real-world example demonstrates how to connect an MCP server to Notion's API to enable AI assistants to interact with your Notion workspace.

## What We're Deploying

The Notion MCP Server provides 21 tools that enable:
- Querying and managing data sources (databases)
- Creating, retrieving, and updating pages
- Searching content across your workspace
- Commenting on pages
- Uploading files
- And more

## Prerequisites

- An agnexus account ([sign up](https://agnexus.ai/signup))
- A Notion workspace
- A Notion integration token

## Step 1: Set Up Your Notion Integration Token

Before deploying, you need to create a Notion integration and get your token:

1. Go to [Notion Integrations](https://www.notion.so/profile/integrations)
2. Click **"New integration"** or select an existing one
3. Choose **"Internal integration"**
4. Give it a name (e.g., "My MCP Server")
5. Go to the **"Configuration"** tab
6. Copy the **Integration Secret** - this is your `NOTION_TOKEN` value

Save this token - you'll need it during deployment.

## Step 2: Find the Notion MCP in Marketplace

1. Log in to your [agnexus dashboard](https://agnexus.ai/dashboard)
2. Navigate to the [Marketplace](https://agnexus.ai/marketplace)
3. Search for "Notion" or browse the available templates
4. Click on the **Notion MCP Server** to view details

## Step 3: Deploy from Marketplace

1. On the Notion MCP Server page, click the **"Deploy"** button
2. You'll be guided through the deployment workflow with step-by-step instructions
3. Follow the prompts to configure your deployment

## Step 4: Configure Deployment

During the deployment workflow, you'll be asked to configure:

### Server Name

Enter a name for your server (e.g., `my-notion-mcp`)

### Description (Optional)

Add a description if you'd like

### Environment Variables

This is the crucial step! You need to add your Notion token:

1. Navigate to the **Environment Variables** section
2. Click **"Add Environment Variable"**
3. Enter the variable name: `NOTION_TOKEN`
4. Enter the value: `ntn_<your_integration_secret>`
   - Replace `<your_integration_secret>` with the actual token you copied from Notion
   - The token should start with `ntn_`
5. Mark it as a secret (recommended)
6. Click **"Save"**

### Other Configuration

- **Region**: Select the region closest to you
- **Dockerfile**: The marketplace template includes a Dockerfile, so you can use the provided one

## Step 5: Complete Deployment

1. Review all your settings
2. Click **"Deploy"** to start the deployment
3. You'll be redirected to the deployment page where you can watch the progress
4. Wait for the deployment to complete (usually takes a few minutes)

## Step 6: Connect Content to Your Integration

After deployment, you need to grant your Notion integration access to the pages and databases you want to use:

### Option 1: Grant Access via Integration Settings

1. Go back to [Notion Integrations](https://www.notion.so/profile/integrations)
2. Click on your integration
3. Go to the **"Access"** tab
4. Click **"Edit access"**
5. Select the pages and databases you want the server to access
6. Click **"Save"**

### Option 2: Connect Individual Pages

1. Open a page in Notion that you want to connect
2. Click the **3 dots menu** (⋯) in the top right
3. Select **"Connect to integration"**
4. Choose your integration from the list

Repeat this for each page or database you want to access.

## Step 7: Access Your Server

Once deployed, your Notion MCP server will be available at:

```
https://your-server-name.agnexus.ai
```

### Testing Your Server

You can test your MCP server using the MCP Inspector:

```bash
npx @modelcontextprotocol/inspector https://your-server-name.agnexus.ai
```

## Step 8: Connect to Your AI Assistant

Now you can connect your Notion MCP server to AI assistants like Claude Desktop:

1. Add to your MCP configuration:
   ```json
   {
     "mcpServers": {
       "notion": {
         "url": "https://your-server-name.agnexus.ai"
       }
     }
   }
   ```

2. Restart your AI assistant
3. Your assistant can now interact with your Notion workspace!

## Common Use Cases

### Use Case 1: AI-Powered Note Taking

Your AI assistant can:
- Create new pages in Notion
- Search existing pages
- Update page content
- Organize information across databases

### Use Case 2: Knowledge Base Management

- Query your Notion knowledge base
- Update documentation automatically
- Create structured content from unstructured data
- Manage databases programmatically

### Use Case 3: Task Management

- Create tasks from conversations
- Update task status
- Search and filter tasks
- Add comments and updates

## Troubleshooting

### Server Not Starting

- Check logs in the agnexus dashboard
- Verify `NOTION_TOKEN` environment variable is set correctly
- Ensure the token starts with `ntn_`
- Check deployment logs for specific errors

### Notion API Errors

- Verify your `NOTION_TOKEN` is correct
- Check that pages/databases are connected to your integration
- Review Notion API rate limits
- Ensure your integration has the necessary capabilities

### "No Access" Errors

- Make sure you've connected pages to your integration (Step 6)
- Check the integration's access settings in Notion
- Verify the integration has the right permissions

### Deployment Failures

- Check that your environment variable is set correctly
- Review deployment logs for specific errors
- Verify the Dockerfile is valid
- Contact support if issues persist

## Next Steps

- [Learn about GitHub integration](/docs/user-guide/github-integration) - Set up automatic deployments
- [Explore more marketplace templates](/docs/user-guide/marketplace) - Discover other MCP servers
- [Manage your deployments](/docs/user-guide/managing-deployments) - Pause, update, and monitor

## Additional Resources

- [Notion API Documentation](https://developers.notion.com/)
- [MCP Protocol Specification](https://modelcontextprotocol.io)
- [Notion Integrations Guide](https://developers.notion.com/docs/getting-started)
