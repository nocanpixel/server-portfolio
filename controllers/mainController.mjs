class mainController {
  async welcome(req, res) {
    // You can access Morgan data from the `req` object
    const clientIpAddress = req.ip; // IP address of the client
    const httpMethod = req.method; // HTTP method (GET, POST, etc.)
    const url = req.originalUrl; // Requested URL
    const statusCode = res.statusCode; // Response status code
    const responseTime = res.getHeader("X-Response-Time"); // Response time in milliseconds
    
    res.json(
     {
        response: {
            clientIP: clientIpAddress,
            method: httpMethod,
            url: url,
            statusCode: statusCode,
            responseTime: responseTime,
        }
     }
    );
  }
}

export default mainController;
