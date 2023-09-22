import express from 'express';
import morgan from 'morgan';
import {appiRouter} from './api/index.mjs';
import cors from 'cors';

const app = express();

const allowedOrigins = ['http://localhost:3000', 'https://camilo.vercel.app']

app.use(cors({
  origin: allowedOrigins,
}));

// Set up Morgan to log requests with the 'combined' format.
app.use(
  morgan(':remote-addr :method :url :status :res[content-length] bytes - :response-time ms', {
    skip: (req) => {
      // Define a condition to skip logging (e.g., if the same IP made a request within the last minute)
      // You can use a data structure (e.g., a Set) to keep track of IPs and timestamps
      const ip = req.ip;
      const now = Date.now();
      const lastRequestTime = ipToLastRequestTime.get(ip) || 0;
      const timeDifference = now - lastRequestTime;
      
      // Adjust the time window as needed (e.g., 1 minute)
      const timeWindow = 60 * 1000; // 1 minute in milliseconds

      if (timeDifference < timeWindow) {
        return true; // Skip logging for repetitive requests within the time window
      }

      // Update the last request time for the IP
      ipToLastRequestTime.set(ip, now);

      return false; // Log the request
    },
  })
);

// Initialize a data structure to store the last request time for each IP
const ipToLastRequestTime = new Map();

// Main route api list

app.use("/api", appiRouter);



// Your other middleware and routes go here.

// Start your Express server on a specific port.
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




