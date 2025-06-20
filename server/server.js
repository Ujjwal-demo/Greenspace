const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../dist')));

// In-memory storage for consultation requests (in production, use a database)
const consultationRequests = [];

// API Routes
app.post('/api/consultation', (req, res) => {
  try {
    const { name, email, phone, company, message, preferredDate } = req.body;
    
    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ 
        error: 'Name and email are required fields' 
      });
    }
    
    // Create consultation request object
    const consultationRequest = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || '',
      company: company || '',
      message: message || '',
      preferredDate: preferredDate || '',
      submittedAt: new Date().toISOString(),
      status: 'pending'
    };
    
    // Store the request (in production, save to database)
    consultationRequests.push(consultationRequest);
    
    // Log the request for demonstration
    console.log('New consultation request received:', consultationRequest);
    
    // Send success response
    res.status(200).json({ 
      message: 'Consultation request submitted successfully',
      requestId: consultationRequest.id
    });
    
  } catch (error) {
    console.error('Error processing consultation request:', error);
    res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    });
  }
});

// Get all consultation requests (for admin purposes)
app.get('/api/consultations', (req, res) => {
  try {
    res.status(200).json({
      consultations: consultationRequests,
      total: consultationRequests.length
    });
  } catch (error) {
    console.error('Error fetching consultation requests:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'Greenspace Orbital API'
  });
});

// Catch all handler: send back React's index.html file for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Something went wrong!' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Greenspace Orbital server running on port ${PORT}`);
  console.log(`📡 API endpoints available at http://localhost:${PORT}/api`);
  console.log(`🌟 Frontend served at http://localhost:${PORT}`);
});

module.exports = app;