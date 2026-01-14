---
slug: agnexus-launch
title: agnexus is Live!
authors:
  - name: Pedro Fonseca
    title: Creator of agnexus
    image_url: https://github.com/pedr0fonseca.png
tags: [announcement, launch]
---

I'm thrilled to announce that agnexus is now live! After months of development, we're launching version **0.2.6** in early access.

<!--truncate-->

## What is agnexus?

agnexus is a platform for deploying and managing Model Context Protocol (MCP) servers. Upload your code, connect your GitHub repositories, or browse our marketplace—then deploy to production with one click.

## What's Included

### Core Features

**MCP Server Deployment**
- Upload ZIP files or connect GitHub repositories
- Automatic language detection (Python/Node.js)
- One-click deployment to production
- Real-time deployment logs and monitoring

**AI-Powered Configuration**
- Automatic Dockerfile generation (experimental)
- Smart configuration detection
- Environment variable management
- Health check setup

**GitHub Integration**
- Connect repositories for automatic deployments
- Deploy on every push to your tracked branch
- Track commits and deployment history
- Cancel in-progress deployments automatically

**Marketplace**
- Discover pre-built MCP server templates
- Browse by category or search by name
- Save favorites for quick access
- Deploy templates with one click

**Subdomain-Based Access**
- Each deployed server gets its own subdomain
- Clean URLs like `your-server.agnexus.ai`
- Direct access without path prefixes
- Works with standard MCP clients

**Subscription Plans**
- Free tier for getting started
- Starter, Pro, and Enterprise plans
- Flexible resource allocation
- Scale as you grow

**Docker Deployment**
- All servers deployed as Docker containers
- Manual Dockerfiles recommended (AI-generated ones are experimental)
- Automatic image building and registry management
- Container orchestration handled for you

### Platform Requirements

For developers building MCP servers:
- **HTTP and SSE-based only** - Must use Streamable HTTP transport with Server-Sent Events
- **Port 8080** - Servers must listen on port 8080
- **Docker** - All deployments use Docker containers
- **Manual Dockerfiles recommended** - AI-generated Dockerfiles are not bulletproof for production

## Early Access

This is an early access release. We're launching with core functionality, but there's still work to do:

- Built-in debugging and troubleshooting tools (coming soon)
- More marketplace templates
- Enhanced monitoring and analytics
- Additional deployment options
- Performance optimizations

We're actively developing these features and more. Your feedback will help shape the platform.

## The Marketplace

The marketplace is a key part of agnexus, and we need your help building it! I'm calling on the community to:

- Submit your MCP server templates
- Improve existing template descriptions
- Share use cases and examples
- Help others discover great MCPs

I'll also be building it up myself, adding templates and improving the experience. Together, we can create a comprehensive resource for the MCP ecosystem.

## Future Ideas

Here are some ideas we're exploring:

- **Multi-region deployments** - Deploy closer to your users
- **Custom domains** - Use your own domain for MCP servers
- **Advanced monitoring** - Detailed metrics and alerting
- **WebSocket support** - Additional transport options
- **Team collaboration** - Share servers with your team
- **API access** - Programmatic server management
- **CI/CD integration** - Deploy from your existing pipelines

These are just ideas for now, but they represent the direction we're heading. What would you like to see? Let us know!

## Getting Started

Ready to deploy your first MCP server?

1. [Sign up](https://agnexus.ai/signup) for an account
2. Check out our [Getting Started guide](/docs/getting-started)
3. Try the [Notion MCP example](/docs/user-guide/notion-example)
4. Explore the [marketplace](https://agnexus.ai/marketplace)

## Documentation

We've put together comprehensive documentation:
- [User Guide](/docs/user-guide) - Complete feature documentation
- [Developer Guide](/docs/developer-guide) - Build and deploy MCP servers
- [Platform Requirements](/docs/developer-guide/platform-requirements) - What you need to know

## Thank You

Thank you to everyone who has supported this project, provided feedback, or helped test early versions. This is just the beginning, and I'm excited to see what we build together.

If you have questions, feedback, or ideas, please reach out. Let's make deploying MCP servers as easy as it should be.

**Welcome to agnexus! 🎉**
