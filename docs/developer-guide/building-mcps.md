---
sidebar_position: 3
---

# Building MCP Servers

A comprehensive guide to building Model Context Protocol (MCP) servers.

## What is MCP?

The Model Context Protocol (MCP) is a standardized protocol that enables AI systems to connect to external tools, data sources, and computational resources. Developed by Anthropic, MCP solves the combinatorial complexity problem: instead of requiring M × N custom integrations between M AI models and N tools, MCP provides a single protocol that reduces this to M + N implementations.

## Why MCP Matters

Before MCP, integrating an LLM with external capabilities required custom solutions for each combination. MCP establishes a standardized protocol that any AI host and any data source can implement once and then interoperate seamlessly.

### Core Philosophy

MCP is deliberately narrow in scope: it defines only the protocol for exchanging context between AI systems and external resources. It does not dictate how applications should use LLMs, manage prompts, structure agent logic, or handle responses. This design keeps the protocol focused and enables maximum flexibility.

## MCP Architecture

MCP consists of two distinct layers:

### Data Layer: The Protocol Definition

The data layer implements the actual communication protocol and defines what resources can be shared. Built on JSON-RPC 2.0, this layer includes:

**Lifecycle Management:**
- Connection initialization
- Capability negotiation during handshakes
- Graceful termination

**Core Primitives:**
- **Tools**: Executable functions the LLM can invoke
- **Resources**: Data sources providing context to the LLM
- **Prompts**: Reusable templates structuring interactions

**Client Features:**
- **Sampling**: Request LLM completions from the client's AI application
- **Elicitation**: Request additional information or confirmation from users
- **Logging**: Send structured logs to clients for debugging

**Notifications:**
- Real-time updates allowing servers to inform clients about changes

### Transport Layer: The Communication Mechanism

The transport layer manages how messages physically travel between clients and servers:

**STDIO Transport:**
- Uses standard input/output streams for local communication
- Optimal performance with zero network overhead
- Typical for desktop applications like Claude Desktop

**Streamable HTTP Transport:**
- Enables remote server communication
- Uses HTTP POST for client-to-server messages
- Server-Sent Events (SSE) for streaming server responses
- Supports standard HTTP authentication
- **Recommended for production deployments** (required for agnexus)

## The Three Core Primitives

### Tools: Action Execution

Tools are executable functions that LLMs can invoke to perform actions in the external world. They represent the "doing" capability of MCP.

**Characteristics:**
- Model-controlled: The LLM decides when to invoke them
- Discovered via `tools/list` request
- Executed via `tools/call` method with JSON-RPC
- Include input schema for type validation and documentation
- Can wrap around functions, API interactions, database operations, or custom logic

**When to Use Tools:**
- Automating repetitive tasks
- Performing computations or transformations
- Writing data to external systems
- Triggering workflows or processes
- Integrating with third-party APIs

**Example Implementation Philosophy:**
A tool wrapping a database query should be self-contained—each invocation includes all necessary connection parameters rather than relying on connections established at server startup. This design allows flexible client connection patterns and simplifies state management.

### Resources: Data Access and Context

Resources provide read-only data sources that inform the LLM's reasoning without performing side effects. They represent the "knowing" capability of MCP.

**Characteristics:**
- Application-controlled: Clients determine what data is available
- Include both static resources (fixed data) and dynamic templates (parameterized data)
- Discovered via `resources/list` request
- Retrieved via `resources/read` method
- Can reference local files, database records, API responses, or computed data

**When to Use Resources:**
- Exposing document contents or knowledge bases
- Providing database schemas or current data
- Making configuration files available
- Sharing logs, error traces, or diagnostic data
- Offering reference materials or context

**Dynamic Resources:**
Particularly powerful are resource templates that accept parameters (e.g., `file://{path}` or `db://{table}/{id}`), allowing clients to request specific data without the server pre-computing all possibilities.

### Prompts: Interaction Templates

Prompts are reusable templates that help structure interactions with language models. They represent the "guiding" capability of MCP.

**Characteristics:**
- User-controlled: Users explicitly invoke prompts
- Can be static templates or dynamically generated with context
- Include parameters that clients fill in at runtime
- Support references to available tools and resources
- Version-controlled and centrally maintainable
- Can chain multiple interactions for complex workflows

**When to Use Prompts:**
- Creating consistent interaction patterns across teams
- Defining system prompts for specialized assistants
- Providing few-shot examples for complex tasks
- Guiding multi-step workflows
- Acting as a frontend interface for complex operations

**Advanced Pattern:**
Context-aware prompts that dynamically reference current resources and tools. For instance, a code debugging prompt could automatically include relevant code files (resources) and debugging tools (tools) in its template.

## Communication Flow

### Initialization and Discovery

When an MCP host starts, it creates MCP clients for configured servers. These clients perform an initialization handshake:

1. Client sends `initialize` request with protocol version and supported capabilities
2. Server responds with its protocol version and declared capabilities
3. Both parties understand what features they can use
4. Client sends `notifications/initialized` notification

### Capability Discovery

Once connected, clients discover available capabilities:

1. Client requests `tools/list` to see available functions
2. Server responds with tool metadata (name, description, input schema)
3. Client requests `resources/list` and `prompts/list` similarly
4. Host application registers these capabilities for the LLM

### Runtime Execution

When the LLM decides to use a tool:

1. Host translates LLM intent into an MCP `tools/call` request
2. Client sends request to server with tool name and arguments
3. Server validates inputs against schema, executes logic
4. Server returns structured result as JSON-RPC response
5. Client returns result to host application
6. Host integrates result into LLM context for final response

### Real-Time Updates

Servers can proactively notify clients about changes:

1. Server's tools change (new tool added, tool modified, permissions changed)
2. Server sends `notifications/tools/list_changed` notification
3. Client receives notification and refreshes tool list
4. Host updates available capabilities for the LLM
5. LLM now has access to the updated tool set without manual refresh

## Building MCP Servers

### Choosing Your SDK

Two primary SDKs dominate the ecosystem:

**Python with FastMCP:**
- Optimized for rapid development
- Excellent for data science and AI workflows
- Simple, intuitive API
- Great for prototyping and production

**TypeScript/Node.js with @modelcontextprotocol/sdk:**
- Type-safe development
- Excellent for web integrations
- Strong ecosystem support
- Ideal for JavaScript/TypeScript projects

### Project Structure

A typical MCP server project:

```
my-mcp-server/
├── main.py (or index.js)
├── requirements.txt (or package.json)
├── Dockerfile
├── README.md
└── .env.example
```

### Python Example (FastMCP)

```python
from mcp import FastMCP
import httpx

mcp = FastMCP("My MCP Server")

@mcp.tool()
def create_page(title: str, content: str) -> dict:
    """Create a new page with title and content."""
    # Implementation
    return {"id": "123", "title": title}

@mcp.resource("page://{page_id}")
def get_page(page_id: str) -> str:
    """Get a specific page by ID."""
    # Implementation
    return f"Page content for {page_id}"

@mcp.prompt()
def summarize_prompt(text: str) -> str:
    """Generate a summary prompt."""
    return f"Summarize the following text: {text}"

if __name__ == "__main__":
    mcp.run(transport="sse", port=8080)
```

### TypeScript Example

```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server({
  name: "my-mcp-server",
  version: "1.0.0",
}, {
  capabilities: {
    tools: {},
    resources: {},
    prompts: {},
  },
});

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "create_page",
      description: "Create a new page",
      inputSchema: {
        type: "object",
        properties: {
          title: { type: "string" },
          content: { type: "string" },
        },
      },
    },
  ],
}));

// Add more handlers...

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main();
```

## Best Practices

### Namespacing

Group related tools with prefixes:
- `database_query`
- `database_schema`
- `database_config`

This helps organize large tool sets and prevents naming conflicts.

### Multiple Specialized Servers

Instead of one monolithic server, deploy separate servers by domain:
- Analytics server
- Database server
- API gateway server

Clients can connect to multiple servers simultaneously. This mirrors microservices architecture.

### Streamable HTTP for Production

For remotely deployed servers (like on agnexus), use Streamable HTTP instead of STDIO:
- Supports load balancing
- Enables horizontal scaling
- Works with standard HTTP infrastructure
- Required for agnexus deployments

### Error Handling

Implement robust error handling:

```python
@mcp.tool()
def my_tool(param: str) -> dict:
    try:
        # Your logic
        return {"success": True, "result": result}
    except ValueError as e:
        return {"success": False, "error": str(e)}
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
        return {"success": False, "error": "Internal server error"}
```

### Authentication and Authorization

Secure your MCP servers:

```python
from mcp import FastMCP
from functools import wraps

mcp = FastMCP("My MCP Server")

def require_auth(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        # Check authentication
        if not is_authenticated():
            raise ValueError("Authentication required")
        return func(*args, **kwargs)
    return wrapper

@mcp.tool()
@require_auth
def protected_tool() -> dict:
    return {"result": "success"}
```

## Debugging

### MCP Inspector

The official MCP Inspector tool is invaluable for development:

```bash
npx @modelcontextprotocol/inspector http://localhost:8080
```

This launches a web interface where you can:
- Test tool execution with various inputs
- Inspect resource contents
- View all available capabilities
- Debug protocol messages in real-time
- Validate responses match expected schema

### Logging Best Practices

**Structured Logging:**
Use consistent formats with timestamps and context:

```python
import logging
logger = logging.getLogger(__name__)
logger.info("Processing tool call", extra={
    "tool_name": name,
    "user_id": user_id,
    "duration_ms": elapsed
})
```

**Avoid Output to Stdout:**
For STDIO-based servers, any output to stdout corrupts protocol messages. Always log to stderr or files:

```python
# ❌ Bad for STDIO servers
print("Processing request")

# ✅ Good for STDIO servers
import logging
logging.info("Processing request")
```

### Common Issues and Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| Server not appearing | Invalid config path | Use absolute path, verify syntax |
| Tool calls fail silently | Server crashes or protocol error | Check logs, validate JSON-RPC format |
| Random failures | External API rate limiting | Implement retry logic with exponential backoff |
| High latency | Blocking I/O operations | Convert to async/await patterns |
| Memory leaks | Unclosed connections | Implement proper resource cleanup and pooling |

## Platform-Specific Notes for agnexus

When building MCP servers for agnexus:

1. **Use HTTP/SSE transport** - Required for remote deployment
2. **Listen on port 8080** - Hard requirement
3. **Provide a Dockerfile** - Manual Dockerfiles recommended over AI-generated
4. **Implement health checks** - `/health` endpoint for monitoring
5. **Handle environment variables** - Use env vars for configuration
6. **Test locally first** - Use MCP Inspector before deploying

## Next Steps

- [Read platform requirements](/docs/developer-guide/platform-requirements)
- [Learn about deployment architecture](/docs/developer-guide/deployment-architecture)
- [Check best practices](/docs/developer-guide/best-practices)
- [Explore the MCP protocol specification](https://modelcontextprotocol.io)

## Additional Resources

- [MCP Protocol Documentation](https://modelcontextprotocol.io/docs)
- [FastMCP Documentation](https://gofastmcp.com)
- [TypeScript MCP SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [MCP Inspector](https://github.com/modelcontextprotocol/inspector)
