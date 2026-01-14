---
sidebar_position: 4
---

# Local Development

Set up your development environment for building and testing MCP servers.

## Overview

Before deploying to agnexus, it's important to test your MCP server locally. This guide helps you set up a local development environment.

## Prerequisites

- **Node.js** 18+ (for TypeScript/Node.js servers)
- **Python** 3.11+ (for Python servers)
- **Docker** (optional, for testing containerized deployments)

## Setting Up Your Project

### Python Project

1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Install FastMCP:
   ```bash
   pip install mcp
   ```

### Node.js Project

1. Initialize project:
   ```bash
   npm init -y
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install MCP SDK:
   ```bash
   npm install @modelcontextprotocol/sdk
   ```

## Running Locally

### Python Server

```bash
python main.py
```

Or with FastMCP:
```bash
mcp dev
```

### Node.js Server

```bash
node index.js
```

Or with npm scripts:
```bash
npm start
```

## Testing with MCP Inspector

Use the MCP Inspector to test your server:

```bash
# For HTTP/SSE servers
npx @modelcontextprotocol/inspector http://localhost:8080

# For STDIO servers
npx @modelcontextprotocol/inspector node index.js
```

## Testing Docker Build

Test your Dockerfile locally:

```bash
# Build image
docker build -t my-mcp-server .

# Run container
docker run -p 8080:8080 \
  -e NOTION_API_KEY=your_key \
  my-mcp-server

# Test
curl http://localhost:8080/health
```

## Environment Variables

Create a `.env` file for local development:

```bash
NOTION_API_KEY=your_key_here
DATABASE_URL=postgresql://localhost:5432/mydb
DEBUG=true
```

Load in your code:
- Python: Use `python-dotenv`
- Node.js: Use `dotenv`

## Next Steps

- [Learn about building MCPs](/docs/developer-guide/building-mcps)
- [Read platform requirements](/docs/developer-guide/platform-requirements)
- [Check best practices](/docs/developer-guide/best-practices)
