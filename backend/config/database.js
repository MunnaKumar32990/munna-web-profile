import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
  try {
    const conn = await mongoose.connect(uri);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`Database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    console.log('\nTroubleshooting tip: Ensure local MongoDB service is running or provide a valid MONGODB_URI (e.g. MongoDB Atlas) in backend/.env');
    process.exit(1);
  }
};

export default connectDB;

