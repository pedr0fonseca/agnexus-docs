---
sidebar_position: 5
---

# Deployment Architecture

Understand how agnexus deploys your MCP servers.

## Overview

agnexus uses Docker containers to deploy MCP servers. This document explains the deployment architecture and process.

## Deployment Flow

### 1. Code Upload

- **ZIP Upload**: Code is uploaded and extracted
- **GitHub**: Code is cloned from repository
- **Marketplace**: Template code is retrieved

### 2. Validation

- Language detection (Python/Node.js)
- Entry point detection
- Dependency file validation
- Structure validation

### 3. Docker Build

- Dockerfile generation (if not provided)
- Docker image build
- Dependency installation
- Image optimization

### 4. Container Registry

- Image pushed to registry
- Tagged with deployment ID
- Stored for deployment

### 5. Deployment

- Container orchestration
- Resource allocation
- Network configuration
- Health check setup

### 6. Runtime

- Container starts
- Health checks begin
- Server becomes accessible
- Monitoring begins

## Container Architecture

### Base Images

- **Python**: `python:3.11-slim`
- **Node.js**: `node:18-slim`

### Container Configuration

- **Port**: 8080 (required)
- **Health Check**: `/health` endpoint
- **Resource Limits**: Based on subscription plan

## Network Architecture

### Subdomain Routing

Each server gets a unique subdomain:
- DNS configuration
- SSL/TLS certificates
- Load balancing
- Request routing

### Internal Networking

- Container-to-container communication
- Service discovery
- Internal load balancing

## Resource Management

### CPU Allocation

- Shared CPU (Free, Starter)
- Dedicated CPU (Pro, Enterprise)

### Memory Allocation

- 256MB - 2GB+ based on plan
- Memory limits enforced
- OOM protection

### Scaling

- Automatic scaling based on load
- Min/max instance configuration
- Scale-to-zero for lower tiers

## Monitoring

### Metrics Collected

- CPU usage
- Memory usage
- Request count
- Response times
- Error rates

### Logging

- Deployment logs
- Runtime logs
- Error logs
- Access logs

## Security

### Container Security

- Isolated containers
- Resource limits
- Network policies
- Security scanning

### Data Security

- Encrypted connections (HTTPS)
- Secret management
- Access control
- Audit logging

## Next Steps

- [Learn about platform requirements](/docs/developer-guide/platform-requirements)
- [Read about building MCPs](/docs/developer-guide/building-mcps)
- [Check best practices](/docs/developer-guide/best-practices)
