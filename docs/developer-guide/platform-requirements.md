---
sidebar_position: 2
---

# Platform Requirements

Understand what your MCP server needs to work on agnexus.

## Overview

agnexus has specific requirements for MCP servers to ensure compatibility and reliable deployment. Make sure your server meets these requirements before deploying.

## Transport Requirements

### HTTP and SSE Only

**Your MCP server must use HTTP with Server-Sent Events (SSE) transport.**

agnexus currently supports only Streamable HTTP transport with SSE. STDIO transport is not supported for deployed servers.

### Why HTTP/SSE?

- Enables remote deployment
- Supports load balancing and scaling
- Works with standard HTTP infrastructure
- Allows monitoring and debugging

### Implementation

Your MCP server should:

1. Accept HTTP POST requests for client-to-server messages
2. Stream responses using Server-Sent Events (SSE)
3. Handle JSON-RPC 2.0 protocol messages
4. Support standard HTTP authentication (bearer tokens, API keys)

## Port Requirements

### Port 8080

**Your MCP server must listen on port 8080.**

This is a hard requirement. agnexus routes traffic to port 8080 in your container.

### Dockerfile Configuration

Make sure your Dockerfile exposes port 8080:

```dockerfile
EXPOSE 8080
```

And your application listens on port 8080:

```python
# Python example
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
```

```javascript
// Node.js example
app.listen(8080, '0.0.0.0', () => {
  console.log('Server running on port 8080');
});
```

## Deployment Method

### Docker Deployment

**All deployments use Docker containers.**

Your code will be:
1. Built into a Docker image
2. Pushed to a container registry
3. Deployed as a containerized service

### Dockerfile Requirements

You can provide your own Dockerfile, or agnexus can generate one automatically.

#### Recommended: Manual Dockerfile

**We strongly recommend providing your own Dockerfile** for production deployments. AI-generated Dockerfiles are experimental and may not be bulletproof.

A good Dockerfile should:
- Use appropriate base images
- Install dependencies efficiently
- Set up proper working directories
- Expose port 8080
- Configure health checks
- Follow security best practices

#### Example Dockerfile (Python)

```dockerfile
FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s \
  CMD python -c "import requests; requests.get('http://localhost:8080/health')"

# Run application
CMD ["python", "main.py"]
```

#### Example Dockerfile (Node.js)

```dockerfile
FROM node:18-slim

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy application code
COPY . .

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s \
  CMD node -e "require('http').get('http://localhost:8080/health')"

# Run application
CMD ["node", "index.js"]
```

## Health Checks

Your MCP server should implement a health check endpoint:

```python
# Python example
@app.get("/health")
def health_check():
    return {"status": "healthy"}
```

```javascript
// Node.js example
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});
```

## Environment Variables

Use environment variables for configuration:

- API keys
- Database connections
- Service URLs
- Feature flags

Set these in the agnexus dashboard before deploying.

## Resource Limits

Your server's resource allocation depends on your subscription plan:

- **Free**: 256MB RAM, shared CPU
- **Starter**: 512MB RAM, shared CPU
- **Pro**: 1GB RAM, dedicated CPU
- **Enterprise**: 2GB+ RAM, dedicated CPU

Design your server to work within these constraints.

## Security

### Authentication

Implement proper authentication:
- Use bearer tokens for API access
- Validate all incoming requests
- Never expose sensitive data in logs

### Secrets Management

- Store secrets in environment variables
- Never commit secrets to version control
- Use agnexus environment variable management

## Best Practices

1. **Use manual Dockerfiles** for production
2. **Test locally** before deploying
3. **Implement health checks** for monitoring
4. **Handle errors gracefully** with proper error responses
5. **Log appropriately** (but not sensitive data)
6. **Optimize your Docker image** size
7. **Follow MCP protocol** specifications

## Testing Locally

Before deploying, test your server locally:

```bash
# Build Docker image
docker build -t my-mcp-server .

# Run container
docker run -p 8080:8080 \
  -e NOTION_API_KEY=your_key \
  my-mcp-server

# Test with MCP Inspector
npx @modelcontextprotocol/inspector http://localhost:8080
```

## Next Steps

- [Learn about building MCP servers](/docs/developer-guide/building-mcps)
- [Read deployment architecture](/docs/developer-guide/deployment-architecture)
- [Check best practices](/docs/developer-guide/best-practices)
