import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const testConnection = async () => {
  try {
    console.log('Testing MongoDB connection...');
    console.log('Connection String:', process.env.MONGODB_URI ? 'Found' : 'NOT FOUND');
    
    if (!process.env.MONGODB_URI) {
      console.error('❌ ERROR: MONGODB_URI is not set in .env file');
      console.log('\nPlease create a .env file in the server directory with:');
      console.log('MONGODB_URI=your_connection_string');
      process.exit(1);
    }

    // Try to connect
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('✅ MongoDB connection successful!');
    console.log(`Connected to: ${mongoose.connection.host}`);
    console.log(`Database: ${mongoose.connection.name}`);
    
    // Close connection
    await mongoose.connection.close();
    console.log('Connection closed.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Connection failed!');
    console.error('Error:', error.message);
    console.log('\nTroubleshooting:');
    console.log('1. Check if MongoDB is running (for local MongoDB)');
    console.log('2. Verify your connection string in .env file');
    console.log('3. Check your username and password (for Atlas)');
    console.log('4. Verify your IP is whitelisted (for Atlas)');
    process.exit(1);
  }
};

testConnection();

