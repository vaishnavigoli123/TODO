const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routers/todoRoutes');
const cors = require('cors'); // Importing CORS

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies
// Allow CORS for all domains or specific frontend domain
app.use(cors({
    origin: 'http://localhost:3001', // Allow requests from the React frontend running on port 3001
  }));
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todo-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})      
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error: ', err));

// Use routes
app.use('/api/todos', todoRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});