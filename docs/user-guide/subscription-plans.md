---
sidebar_position: 6
---

# Subscription Plans

Choose the plan that fits your needs and scale as you grow.

## Available Plans

### Free Tier

Perfect for getting started and testing MCP servers.

- **RAM**: 256MB
- **CPU**: Shared
- **Idle Timeout**: Immediate (scale to zero)
- **Concurrency**: 25-50 requests per instance
- **Min Instances**: 0
- **Max Instances**: 1

**Best for**: Learning, testing, and small personal projects.

### Starter

Ideal for small projects and development environments.

- **RAM**: 512MB
- **CPU**: Shared
- **Idle Timeout**: 2 hours
- **Concurrency**: 50-100 requests per instance
- **Min Instances**: 0
- **Max Instances**: 1

**Best for**: Development servers and small applications.

### Pro

Perfect for production workloads and growing applications.

- **RAM**: 1GB
- **CPU**: Dedicated
- **Idle Timeout**: 6 hours
- **Concurrency**: 100-250 requests per instance
- **Min Instances**: 0
- **Max Instances**: 5

**Best for**: Production applications and moderate traffic.

### Enterprise

For high-traffic applications and mission-critical deployments.

- **RAM**: 2GB+
- **CPU**: Dedicated
- **Idle Timeout**: Never (always-on)
- **Concurrency**: 200-500+ requests per instance
- **Min Instances**: 1+
- **Max Instances**: 20+

**Best for**: Enterprise applications, high availability, and custom requirements.

## Choosing a Plan

Consider these factors:

1. **Traffic**: How many requests do you expect?
2. **Uptime**: Do you need always-on or can you scale to zero?
3. **Resources**: How much memory does your MCP server need?
4. **Growth**: Will you need to scale up soon?

## Upgrading or Downgrading

You can change your plan at any time:

1. Go to **Settings** → **Billing**
2. Click **"Change Plan"**
3. Select your new plan
4. Confirm the change

Changes take effect immediately. You'll be charged or credited proportionally.

## Resource Limits

Each plan has resource limits. If you exceed them:

- You may experience throttling
- Deployments may fail
- You'll be prompted to upgrade

Monitor your usage in the dashboard to stay within limits.

## Next Steps

- [Learn about billing](/docs/user-guide/billing)
- [Manage your account](/docs/user-guide/managing-deployments)
- [Contact support](https://agnexus.ai/support) for custom plans
