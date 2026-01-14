---
sidebar_position: 15
---

# Environment Variables

Configure your MCP servers using environment variables.

## Overview

Environment variables are the recommended way to configure your MCP servers. They allow you to change configuration without modifying code.

## Setting Environment Variables

### During Deployment

1. In the deployment configuration form
2. Click **"Add Environment Variable"**
3. Enter the variable name (e.g., `NOTION_API_KEY`)
4. Enter the value
5. Mark as secret if it's sensitive
6. Add more variables as needed

### After Deployment

1. Go to your server dashboard
2. Click **"Settings"** → **"Environment Variables"**
3. Click **"Add Variable"**
4. Enter name and value
5. Save changes
6. Redeploy if needed

## Common Environment Variables

### API Keys

```bash
NOTION_API_KEY=secret_xxx
OPENAI_API_KEY=sk-xxx
DATABASE_URL=postgresql://...
```

### Configuration

```bash
LOG_LEVEL=info
DEBUG=false
PORT=8080
```

### Service URLs

```bash
EXTERNAL_API_URL=https://api.example.com
WEBHOOK_URL=https://your-app.com/webhook
```

## Secret Variables

Mark sensitive variables as secrets:
- They're encrypted at rest
- Hidden in the UI (shown as `****`)
- Never logged or exposed
- Secure storage

## Best Practices

1. **Use descriptive names**: Clear variable names help understanding
2. **Document required variables**: List them in README
3. **Never commit secrets**: Use `.env.example` for documentation
4. **Rotate regularly**: Update secrets periodically
5. **Use defaults**: Provide sensible defaults where possible

## Accessing in Code

### Python

```python
import os

api_key = os.getenv('NOTION_API_KEY')
database_url = os.getenv('DATABASE_URL', 'default_value')
```

### Node.js

```javascript
const apiKey = process.env.NOTION_API_KEY;
const databaseUrl = process.env.DATABASE_URL || 'default_value';
```

## Environment-Specific Configuration

You can use different variables for different environments:
- Development: Local `.env` file
- Production: Set in agnexus dashboard

## Next Steps

- [Learn about deployment](/docs/getting-started)
- [Read security guidelines](/docs/user-guide/security)
- [Check best practices](/docs/user-guide/best-practices)
