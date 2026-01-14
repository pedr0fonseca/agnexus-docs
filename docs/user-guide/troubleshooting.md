---
sidebar_position: 8
---

# Troubleshooting

Common issues and solutions for deploying and managing MCP servers on agnexus.

## Deployment Issues

### Deployment Fails Immediately

**Symptoms**: Deployment fails right after starting

**Possible Causes**:
- Invalid Dockerfile
- Missing dependencies in requirements.txt/package.json
- Syntax errors in code
- Port not configured correctly

**Solutions**:
1. Check deployment logs for specific error messages
2. Verify your Dockerfile is valid
3. Test your code locally first
4. Ensure port 8080 is exposed and your app listens on it

### Build Timeout

**Symptoms**: Deployment times out during build phase

**Possible Causes**:
- Large dependencies taking too long to install
- Network issues downloading packages
- Complex build steps

**Solutions**:
1. Optimize your Dockerfile (use multi-stage builds)
2. Pre-build dependencies if possible
3. Reduce image size
4. Contact support if consistently timing out

### Server Won't Start

**Symptoms**: Deployment succeeds but server doesn't respond

**Possible Causes**:
- Application crashing on startup
- Wrong entry point
- Missing environment variables
- Port configuration issue

**Solutions**:
1. Check runtime logs
2. Verify environment variables are set
3. Test locally with same configuration
4. Review health check endpoint

## Runtime Issues

### Server Returns 502 Errors

**Symptoms**: Requests return 502 Bad Gateway

**Possible Causes**:
- Server crashed
- Health check failing
- Resource limits exceeded

**Solutions**:
1. Check server logs
2. Verify health check endpoint works
3. Review resource usage
4. Restart the server

### High Memory Usage

**Symptoms**: Server using too much memory

**Possible Causes**:
- Memory leaks in code
- Large data processing
- Inefficient algorithms

**Solutions**:
1. Profile your application
2. Optimize data structures
3. Implement pagination for large datasets
4. Consider upgrading plan

### Slow Response Times

**Symptoms**: Requests take too long

**Possible Causes**:
- Blocking I/O operations
- External API delays
- Database query issues
- Resource constraints

**Solutions**:
1. Use async/await patterns
2. Implement caching
3. Optimize database queries
4. Review external API calls

## GitHub Integration Issues

### Auto-Deploy Not Working

**Symptoms**: Pushes to GitHub don't trigger deployments

**Possible Causes**:
- Webhook not configured
- Auto-deploy disabled
- Webhook delivery failures

**Solutions**:
1. Check GitHub webhook settings
2. Verify auto-deploy is enabled
3. Review webhook delivery history
4. Reconnect GitHub if needed

### "Repository Not Found" Error

**Symptoms**: Can't find repository when browsing

**Possible Causes**:
- Private repo without GitHub connection
- Incorrect repository URL
- Token permissions issue

**Solutions**:
1. Connect your GitHub account
2. Verify repository URL
3. Check token has repo access
4. Try public repository URL format

## Authentication Issues

### "Authentication Required" Errors

**Symptoms**: Requests fail with auth errors

**Possible Causes**:
- Missing access key
- Invalid access key
- Key expired or revoked

**Solutions**:
1. Verify access key is included in requests
2. Check key is valid and not expired
3. Regenerate key if needed
4. Review authentication documentation

## Platform-Specific Issues

### Port 8080 Not Working

**Symptoms**: Can't connect to server on port 8080

**Possible Causes**:
- Server not listening on 8080
- Wrong port in Dockerfile
- Firewall blocking

**Solutions**:
1. Verify `EXPOSE 8080` in Dockerfile
2. Check app listens on `0.0.0.0:8080`
3. Test locally first
4. Review platform requirements

### HTTP/SSE Transport Errors

**Symptoms**: MCP client can't connect

**Possible Causes**:
- Server not using HTTP/SSE transport
- Wrong transport configuration
- Protocol errors

**Solutions**:
1. Verify server uses Streamable HTTP with SSE
2. Check transport configuration
3. Review MCP protocol requirements
4. Test with MCP Inspector

## Getting Help

If you're still experiencing issues:

1. **Check Logs**: Review deployment and runtime logs
2. **Documentation**: Search our docs for specific topics
3. **Community**: Ask in our community forums
4. **Support**: Contact support through the dashboard

## Next Steps

- [Review platform requirements](/docs/developer-guide/platform-requirements)
- [Check best practices](/docs/user-guide/best-practices)
- [Read deployment guide](/docs/getting-started)
