---
sidebar_position: 7
---

# Subdomain Access

Each deployed MCP server gets its own subdomain for clean, direct access.

## How It Works

When you deploy an MCP server, agnexus automatically assigns it a subdomain:

```
https://your-server-name.agnexus.ai
```

This subdomain is:
- **Unique**: Each server has its own subdomain
- **Persistent**: It stays the same across deployments
- **Direct**: No path prefixes needed
- **HTTPS**: Automatically secured with SSL

## Accessing Your Server

### From MCP Clients

Connect your MCP server to AI assistants like Claude Desktop:

```json
{
  "mcpServers": {
    "my-server": {
      "url": "https://my-server.agnexus.ai",
      "transport": "sse"
    }
  }
}
```

### From Applications

Use your server's subdomain in any HTTP client:

```bash
curl https://my-server.agnexus.ai/tools/list
```

### From Browsers

Open the subdomain in your browser to see server information (if your server exposes a web interface).

## Subdomain Format

Subdomains follow this pattern:

- Based on your server name
- Lowercase and alphanumeric
- Hyphens allowed
- Unique across all agnexus servers

Example: If you name your server "My Notion MCP", the subdomain might be `my-notion-mcp-abc123.agnexus.ai`.

## Custom Domains (Coming Soon)

We're working on support for custom domains. Soon you'll be able to use your own domain like:

```
https://mcp.yourdomain.com
```

## Security

All subdomains are:
- **HTTPS only**: Encrypted connections required
- **Authenticated**: Use access keys for private servers
- **Monitored**: Traffic and usage tracked

## Troubleshooting

### Can't Access Server

- Check that your server is deployed (not paused)
- Verify the subdomain URL is correct
- Check server logs for errors
- Ensure your server is listening on port 8080

### Subdomain Not Working

- Wait a few minutes after deployment for DNS propagation
- Clear your DNS cache
- Try accessing from a different network

## Next Steps

- [Learn about managing deployments](/docs/user-guide/managing-deployments)
- [Read about authentication](/docs/user-guide/authentication)
- [Check troubleshooting guide](/docs/user-guide/troubleshooting)
