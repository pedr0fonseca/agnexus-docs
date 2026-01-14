---
sidebar_position: 12
---

# Security Guidelines

Keep your MCP servers secure on agnexus.

## Overview

Security is important for protecting your data and your users. Follow these guidelines to keep your servers secure.

## Access Control

### Use Access Keys

For private servers, always use access keys:
- Generate strong access keys
- Rotate keys regularly
- Revoke unused keys
- Never share keys publicly

### Environment Variables

Store sensitive data in environment variables:
- API keys
- Database credentials
- Service tokens
- Configuration secrets

Never commit secrets to version control.

## Code Security

### Dependencies

- Keep dependencies updated
- Review dependency security advisories
- Use trusted packages
- Remove unused dependencies

### Input Validation

- Validate all inputs
- Sanitize user data
- Use parameterized queries
- Implement rate limiting

## Network Security

### HTTPS Only

All agnexus subdomains use HTTPS:
- Encrypted connections
- SSL/TLS certificates
- Secure data transmission

### Authentication

Implement proper authentication:
- Use bearer tokens
- Validate all requests
- Implement authorization checks
- Log access attempts

## Best Practices

1. **Principle of Least Privilege**: Grant minimum necessary permissions
2. **Defense in Depth**: Use multiple security layers
3. **Regular Updates**: Keep everything updated
4. **Monitor Access**: Watch for suspicious activity
5. **Backup Data**: Keep backups of important data

## Incident Response

If you suspect a security issue:
1. Revoke affected access keys immediately
2. Review logs for suspicious activity
3. Update credentials
4. Contact support if needed

## Next Steps

- [Learn about authentication](/docs/user-guide/authentication)
- [Read deployment best practices](/docs/user-guide/best-practices)
- [Check troubleshooting guide](/docs/user-guide/troubleshooting)
