---
sidebar_position: 14
---

# Uploading Code

Upload your MCP server code as a ZIP file to deploy on agnexus.

## Overview

You can deploy your MCP server by uploading a ZIP file containing your code. This is useful for quick deployments or when you don't want to use GitHub.

## Preparing Your Code

### Project Structure

Your ZIP file should include:
- Main entry point file (`main.py` or `index.js`)
- Dependencies file (`requirements.txt` or `package.json`)
- All source code files
- Dockerfile (optional, but recommended)
- Configuration files

### What to Include

**Required:**
- Main application file
- Dependencies file (`requirements.txt` for Python, `package.json` for Node.js)

**Recommended:**
- Dockerfile
- README.md
- `.env.example` (for documentation)

**Don't Include:**
- `node_modules/` or `venv/` (will be installed during build)
- `.git/` directory
- Large files or assets
- Secrets or API keys

## Creating the ZIP File

### On macOS/Linux

```bash
cd your-mcp-server
zip -r ../mcp-server.zip . -x "*.git*" -x "node_modules/*" -x "venv/*"
```

### On Windows

1. Select all files in your project folder
2. Right-click → "Send to" → "Compressed (zipped) folder"
3. Remove `node_modules` and `.git` if included

## Uploading

1. In the deployment flow, choose **"Deploy via File Upload"**
2. Click **"Choose File"** or drag and drop
3. Select your ZIP file
4. Wait for upload and validation

## Validation

agnexus will automatically:
- Extract your ZIP file
- Detect the language (Python/Node.js)
- Find the entry point
- Check for required files
- Validate the structure

## After Upload

Once validated, you'll proceed to configuration:
- Server name
- Description
- Environment variables
- Region
- Dockerfile options

## File Size Limits

- Maximum file size: 100MB
- Recommended: Keep under 50MB for faster uploads

For larger projects, consider using GitHub integration instead.

## Troubleshooting

### Upload Fails

- Check file size limits
- Verify ZIP file is not corrupted
- Ensure all required files are included

### Validation Errors

- Missing `requirements.txt` or `package.json`
- No entry point file found
- Invalid project structure

## Best Practices

1. **Test locally first**: Ensure your code works before uploading
2. **Use .dockerignore**: Exclude unnecessary files
3. **Keep it small**: Remove large files and dependencies
4. **Include Dockerfile**: Manual Dockerfiles are more reliable
5. **Document dependencies**: Clear requirements help validation

## Next Steps

- [Learn about GitHub integration](/docs/user-guide/github-integration)
- [Read deployment guide](/docs/getting-started)
- [Check best practices](/docs/user-guide/best-practices)
