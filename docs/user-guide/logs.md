---
sidebar_position: 17
---

# Logs & Monitoring

View deployment and runtime logs for your MCP servers.

## Overview

agnexus provides comprehensive logging for both deployment and runtime operations. Monitor your servers and debug issues with detailed logs.

## Deployment Logs

### Viewing Deployment Logs

1. Go to your server dashboard
2. Click **"Deployments"** tab
3. Select a deployment
4. View build and deployment logs

### Log Information

Deployment logs include:
- Build process output
- Docker image creation
- Dependency installation
- Deployment steps
- Error messages

### High-Level vs Detailed

- **Dashboard view**: High-level progress and status
- **Terminal view**: Detailed build and deployment logs

## Runtime Logs

### Viewing Runtime Logs

1. Go to your server dashboard
2. Click **"Logs"** tab
3. View real-time application logs

### Log Information

Runtime logs include:
- Application output
- Error messages
- Request logs
- Debug information

## Log Levels

Your application can use different log levels:
- **DEBUG**: Detailed debugging information
- **INFO**: General informational messages
- **WARN**: Warning messages
- **ERROR**: Error messages
- **CRITICAL**: Critical errors

## Best Practices

### Logging Guidelines

1. **Use structured logging**: Include context and metadata
2. **Don't log secrets**: Never log API keys or passwords
3. **Include timestamps**: Helpful for debugging
4. **Log errors properly**: Include stack traces
5. **Use appropriate levels**: Don't over-log

### Python Example

```python
import logging

logger = logging.getLogger(__name__)
logger.info("Processing request", extra={
    "user_id": user_id,
    "request_id": request_id
})
```

### Node.js Example

```javascript
const logger = require('winston');
logger.info('Processing request', {
  userId: userId,
  requestId: requestId
});
```

## Monitoring

### Metrics

Monitor key metrics:
- Request count
- Response times
- Error rates
- Resource usage

### Alerts

Set up alerts for:
- High error rates
- Slow response times
- Resource exhaustion
- Deployment failures

## Log Retention

- **Deployment logs**: Retained for 30 days
- **Runtime logs**: Retained for 7 days
- **Download logs**: Export logs for longer retention

## Next Steps

- [Read troubleshooting guide](/docs/user-guide/troubleshooting)
- [Check best practices](/docs/user-guide/best-practices)
