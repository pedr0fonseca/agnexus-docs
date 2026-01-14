---
sidebar_position: 9
---

# Authentication

Secure your MCP servers with access keys and authentication.

## Overview

By default, deployed MCP servers on agnexus are publicly accessible. For private servers, you can add authentication using access keys.

## Access Keys

Access keys allow you to control who can access your MCP server.

### Generating Access Keys

1. Go to your server dashboard
2. Click **"Settings"** → **"Access Keys"**
3. Click **"Generate New Key"**
4. Copy and save your access key immediately (it won't be shown again)

### Using Access Keys

Include the access key in your requests:

```bash
curl -H "Authorization: Bearer agn_your_key_here" \
     https://your-server.agnexus.ai/tools/list
```

### Revoking Access Keys

1. Go to **"Settings"** → **"Access Keys"**
2. Find the key you want to revoke
3. Click **"Revoke"**
4. Confirm the action

Revoked keys immediately stop working.

## Best Practices

- **Keep keys secure**: Never commit access keys to version control
- **Rotate regularly**: Generate new keys periodically
- **Use environment variables**: Store keys in environment variables, not in code
- **Revoke unused keys**: Remove keys that are no longer needed

## Next Steps

- [Learn about subdomain access](/docs/user-guide/subdomain-access)
- [Read security guidelines](/docs/user-guide/security)
- [Check best practices](/docs/user-guide/best-practices)
