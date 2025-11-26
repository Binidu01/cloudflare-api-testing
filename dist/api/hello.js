// Netlify Function for hello.ts

// Execute the source code to get the handler
const handlerModule = {};
(function() {
  const exports = handlerModule;
  const module = { exports: handlerModule };
  
  "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
// Example TypeScript API route
function handler(req, _res) {
    return {
        message: 'Hello from Bini.js TypeScript!',
        timestamp: new Date().toISOString(),
        method: req.method,
        working: true,
        typeScript: true
    };
}

  
  // Make sure we have a handler
  if (!handlerModule.default && typeof module.exports === 'function') {
    handlerModule.default = module.exports;
  }
})();

const originalHandler = handlerModule.default || handlerModule.handler;

if (!originalHandler || typeof originalHandler !== 'function') {
  throw new Error('Handler not found or not a function');
}

exports.handler = async (event, context) => {
  try {
    // Parse request
    const method = event.httpMethod || 'GET';
    const headers = event.headers || {};
    const pathname = event.path || '/';
    
    let body = {};
    if (event.body) {
      try {
        body = JSON.parse(event.body);
      } catch (e) {
        body = {};
      }
    }

    const queryParams = event.queryStringParameters || {};

    // Create Node.js style request object
    const req = {
      method,
      headers,
      body,
      query: queryParams,
      params: {},
      ip: headers['x-forwarded-for'] || headers['client-ip'] || 'unknown',
      url: pathname
    };

    // Response handler
    let statusCode = 200;
    let responseHeaders = { 'Content-Type': 'application/json' };
    let responseBody = null;

    const res = {
      status: (code) => {
        statusCode = code;
        return res;
      },
      setHeader: (name, value) => {
        responseHeaders[name] = value;
        return res;
      },
      json: (data) => {
        responseBody = data;
      },
      send: (data) => {
        responseBody = data;
      },
      end: (data) => {
        if (data) responseBody = data;
      }
    };

    // Call original handler
    const result = await Promise.resolve().then(() => originalHandler(req, res));

    // Use responseBody if set by res methods, otherwise use result
    const finalBody = responseBody !== null ? responseBody : result;

    // Return Netlify Function response
    return {
      statusCode,
      headers: responseHeaders,
      body: typeof finalBody === 'string' ? finalBody : JSON.stringify(finalBody || {})
    };

  } catch (error) {
    console.error('API Error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: 'Internal Server Error',
        message: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};
