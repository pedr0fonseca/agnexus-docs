---
sidebar_position: 7
---

# Best Practices

Patterns and recommendations for building MCP servers on agnexus.

## Overview

Follow these best practices to build reliable, secure, and performant MCP servers.

## Code Organization

### Project Structure

Organize your code clearly:
- Separate concerns (tools, resources, prompts)
- Use modules/packages appropriately
- Keep entry point simple
- Document your code

### Error Handling

Implement robust error handling:
- Catch and handle errors gracefully
- Return meaningful error messages
- Log errors appropriately
- Don't expose sensitive information

## Performance

### Async Operations

Use async/await for I/O operations:
- Database queries
- API calls
- File operations
- Network requests

### Caching

Implement caching where appropriate:
- Cache API responses
- Cache database queries
- Cache computed results

### Resource Management

- Close connections properly
- Release resources
- Use connection pooling
- Monitor memory usage

## Security

### Authentication

- Implement proper authentication
- Use bearer tokens
- Validate all requests
- Never trust client input

### Secrets Management

- Use environment variables
- Never commit secrets
- Rotate keys regularly
- Use secure storage

### Input Validation

- Validate all inputs
- Sanitize user data
- Use parameterized queries
- Implement rate limiting

## Docker

### Dockerfile Best Practices

- Use slim base images
- Leverage layer caching
- Minimize layers
- Use .dockerignore
- Set proper working directory

### Image Optimization

- Remove unnecessary files
- Use multi-stage builds
- Minimize dependencies
- Keep images small

## Testing

### Local Testing

- Test locally before deploying
- Use MCP Inspector
- Test with different inputs
- Verify error handling

### Integration Testing

- Test with real services
- Test error scenarios
- Test edge cases
- Verify performance

## Monitoring

### Logging

- Use structured logging
- Include context
- Log at appropriate levels
- Don't log secrets

### Metrics

- Track key metrics
- Monitor performance
- Watch for errors
- Alert on issues

## Next Steps

- [Learn about building MCPs](/docs/developer-guide/building-mcps)
- [Read platform requirements](/docs/developer-guide/platform-requirements)
- [Check deployment architecture](/docs/developer-guide/deployment-architecture)
