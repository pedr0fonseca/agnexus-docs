---
sidebar_position: 11
---

# Deployment Best Practices

Tips and recommendations for successful MCP server deployments on agnexus.

## Before Deployment

### Test Locally First

Always test your MCP server locally before deploying:
- Run it on your machine
- Test with MCP Inspector
- Verify all functionality works
- Check resource usage

### Optimize Your Code

- Remove unused dependencies
- Minimize image size
- Use efficient algorithms
- Implement proper error handling

### Prepare Your Dockerfile

- Use appropriate base images
- Leverage Docker layer caching
- Keep images small
- Include health checks

## During Deployment

### Environment Variables

- Use environment variables for configuration
- Never commit secrets to code
- Document required variables
- Set defaults where possible

### Resource Allocation

- Choose the right plan for your needs
- Monitor resource usage
- Scale up if needed
- Optimize to reduce costs

## After Deployment

### Monitor Your Server

- Check logs regularly
- Monitor resource usage
- Watch for errors
- Review performance metrics

### Keep Updated

- Update dependencies regularly
- Apply security patches
- Test updates before deploying
- Keep documentation current

## Common Mistakes to Avoid

1. **Forgetting port 8080**: Always ensure your server listens on port 8080
2. **Missing health checks**: Implement a `/health` endpoint
3. **Large Docker images**: Optimize to reduce build time
4. **Hardcoded secrets**: Always use environment variables
5. **No error handling**: Implement proper error responses

## Next Steps

- [Read security guidelines](/docs/user-guide/security)
- [Learn about performance optimization](/docs/user-guide/performance)
- [Check troubleshooting guide](/docs/user-guide/troubleshooting)
