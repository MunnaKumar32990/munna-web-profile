import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Portfolio from '../models/Portfolio.js';
import { personalData } from './data.js';

dotenv.config();

const migrateData = async () => {
  try {
    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully!');
    console.log(`Database: ${mongoose.connection.name}`);
    console.log(`Host: ${mongoose.connection.host}`);

    // Check if portfolio data already exists
    const existingPortfolio = await Portfolio.findOne();
    
    if (existingPortfolio) {
      console.log('Portfolio data already exists. Updating...');
      await Portfolio.findOneAndUpdate({}, personalData, { 
        new: true, 
        runValidators: true 
      });
      console.log('Portfolio data updated successfully!');
    } else {
      console.log('Creating new portfolio document...');
      const portfolio = new Portfolio(personalData);
      await portfolio.save();
      console.log('Portfolio data migrated successfully!');
    }

    // Verify the data
    const portfolio = await Portfolio.findOne();
    console.log('\n=== Migration Summary ===');
    console.log(`Name: ${portfolio.name}`);
    console.log(`Role: ${portfolio.role}`);
    console.log(`Projects: ${portfolio.projects.length}`);
    console.log(`Certifications: ${portfolio.certifications.length}`);
    console.log(`Education: ${portfolio.education.length}`);
    console.log(`Coding Platforms: ${portfolio.codingPlatforms.length}`);
    
    // Show first timeline entry to verify update
    if (portfolio.about?.timeline?.length > 0) {
      console.log('\n=== First Timeline Entry ===');
      console.log(`Title: ${portfolio.about.timeline[0].title}`);
      console.log(`Description: ${portfolio.about.timeline[0].description.substring(0, 100)}...`);
      console.log('========================\n');
    }
    
    console.log('========================\n');

    console.log('Migration completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Migration error:', error);
    process.exit(1);
  }
};

migrateData();

