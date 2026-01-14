---
sidebar_position: 2
---

# Notion MCP Example

This guide walks you through deploying a Notion MCP server on agnexus. This real-world example demonstrates how to connect an MCP server to Notion's API to enable AI assistants to read and write Notion pages.

## What We're Building

A Notion MCP server that provides:
- **Tools**: Create pages, update pages, search pages
- **Resources**: Access Notion database schemas and page contents
- **Prompts**: Templates for common Notion workflows

## Prerequisites

- An agnexus account
- A Notion integration token ([create one here](https://www.notion.so/my-integrations))
- Basic understanding of MCP servers

## Step 1: Prepare Your Notion MCP Code

### Project Structure

Your Notion MCP server should have this structure:

```
notion-mcp/
├── main.py (or index.js)
├── requirements.txt (or package.json)
├── Dockerfile (optional, will be generated)
└── README.md
```

### Example Python Implementation

Here's a minimal Notion MCP server using FastMCP:

```python
from mcp import FastMCP
import httpx

mcp = FastMCP("Notion MCP")

@mcp.tool()
def create_notion_page(title: str, parent_id: str, content: str = "") -> dict:
    """Create a new page in Notion."""
    # Implementation here
    pass

@mcp.tool()
def search_notion_pages(query: str) -> list:
    """Search for pages in Notion."""
    # Implementation here
    pass

@mcp.resource("notion://page/{page_id}")
def get_notion_page(page_id: str) -> str:
    """Get a specific Notion page."""
    # Implementation here
    pass

if __name__ == "__main__":
    mcp.run()
```

### Environment Variables

Your server will need:
- `NOTION_API_KEY`: Your Notion integration token
- `NOTION_DATABASE_ID`: (Optional) Default database ID

## Step 2: Create Server on agnexus

1. Log in to [agnexus dashboard](https://agnexus.ai/dashboard)
2. Navigate to **Deploy** → **Create New Server**
3. Name it: `notion-mcp-server`
4. Click **Create**

## Step 3: Upload Your Code

### Option A: ZIP Upload

1. Zip your Notion MCP code:
   ```bash
   cd notion-mcp
   zip -r notion-mcp.zip .
   ```

2. In the agnexus dashboard, click **Upload Code**
3. Select `notion-mcp.zip`
4. Wait for validation

### Option B: GitHub Integration

1. Push your code to GitHub
2. In agnexus, click **Connect GitHub**
3. Authorize and select your repository
4. Choose the branch (usually `main`)

## Step 4: Configure Environment Variables

1. In the server configuration, go to **Environment Variables**
2. Add:
   - `NOTION_API_KEY`: Your Notion integration token
   - `NOTION_DATABASE_ID`: (Optional) Your default database ID
3. Click **Save**

## Step 5: Review Configuration

agnexus will auto-detect:
- **Language**: Python (from `requirements.txt`)
- **Entry Point**: `main.py`
- **Port**: 8080 (required for MCP servers)
- **Dockerfile**: Generated automatically (or use your own)

### Important Notes

- **Port 8080**: Your MCP server must listen on port 8080
- **HTTP/SSE**: Your server must use HTTP with Server-Sent Events (SSE) transport
- **Dockerfile**: While AI-generated Dockerfiles are available, we recommend using a manual Dockerfile for production

## Step 6: Deploy

1. Click the **Deploy** button
2. Watch the deployment progress:
   - Building Docker image
   - Pushing to registry
   - Deploying to production
3. Wait for "Deployed" status

## Step 7: Access Your Server

Once deployed, your Notion MCP server will be available at:

```
https://notion-mcp-server.agnexus.ai
```

### Testing Your Server

You can test your MCP server using the MCP Inspector or by connecting it to an MCP client:

```bash
# Using MCP Inspector
npx @modelcontextprotocol/inspector https://notion-mcp-server.agnexus.ai
```

## Step 8: Connect to Your AI Assistant

Now you can connect your Notion MCP server to AI assistants like Claude Desktop:

1. Add to your MCP configuration:
   ```json
   {
     "mcpServers": {
       "notion": {
         "url": "https://notion-mcp-server.agnexus.ai",
         "transport": "sse"
       }
     }
   }
   ```

2. Restart your AI assistant
3. Your assistant can now interact with Notion!

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

### Use Case 3: Task Management

- Create tasks from conversations
- Update task status
- Search and filter tasks

## Troubleshooting

### Server Not Starting

- Check logs in the agnexus dashboard
- Verify port 8080 is exposed in your Dockerfile
- Ensure HTTP/SSE transport is configured

### Notion API Errors

- Verify your `NOTION_API_KEY` is correct
- Check that your integration has access to the databases
- Review Notion API rate limits

### Deployment Failures

- Check that your Dockerfile is valid
- Verify all dependencies are in `requirements.txt`
- Review deployment logs for specific errors

## Next Steps

- [Learn about GitHub integration](/docs/user-guide/github-integration) - Set up automatic deployments
- [Explore the marketplace](/docs/user-guide/marketplace) - Find more MCP templates
- [Read the developer guide](/docs/developer-guide/building-mcps) - Build your own MCP servers

## Additional Resources

- [Notion API Documentation](https://developers.notion.com/)
- [MCP Protocol Specification](https://modelcontextprotocol.io)
- [FastMCP Documentation](https://gofastmcp.com)
