import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Portfolio from './models/Portfolio.js';

dotenv.config();

const testData = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');
    console.log(`Database: ${mongoose.connection.name}`);
    
    // Get portfolio data
    const portfolio = await Portfolio.findOne();
    
    if (!portfolio) {
      console.log('❌ No portfolio data found in database');
      console.log('Run: npm run migrate');
      process.exit(1);
    }
    
    console.log('\n=== Portfolio Data in MongoDB ===');
    console.log(`Name: ${portfolio.name}`);
    console.log(`Role: ${portfolio.role}`);
    console.log(`Email: ${portfolio.email}`);
    console.log(`Projects: ${portfolio.projects?.length || 0}`);
    console.log(`Certifications: ${portfolio.certifications?.length || 0}`);
    console.log(`Education: ${portfolio.education?.length || 0}`);
    console.log(`Coding Platforms: ${portfolio.codingPlatforms?.length || 0}`);
    console.log('\n=== Recent Changes ===');
    console.log(`Created: ${portfolio.createdAt}`);
    console.log(`Updated: ${portfolio.updatedAt}`);
    console.log('========================\n');
    
    // Check if data looks recent
    const lastUpdated = new Date(portfolio.updatedAt);
    const now = new Date();
    const diffMinutes = Math.floor((now - lastUpdated) / 1000 / 60);
    
    if (diffMinutes < 5) {
      console.log('✅ Data was updated recently (within 5 minutes)');
    } else {
      console.log(`⚠️  Data was last updated ${diffMinutes} minutes ago`);
    }
    
    await mongoose.connection.close();
    console.log('Connection closed.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

testData();

