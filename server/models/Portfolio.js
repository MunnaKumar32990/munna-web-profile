import mongoose from 'mongoose';

const EducationSchema = new mongoose.Schema({
  year: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
}, { _id: false });

const TimelineItemSchema = new mongoose.Schema({
  year: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
}, { _id: false });

const AboutSchema = new mongoose.Schema({
  description: { type: String, required: true },
  timeline: [TimelineItemSchema]
}, { _id: false });

const ProjectSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  tags: [String],
  liveUrl: { type: String, default: "#" },
  githubUrl: { type: String, required: true },
  details: { type: String, required: true }
}, { _id: false });

const SkillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: Number, required: true, min: 0, max: 100 }
}, { _id: false });

const SkillsSchema = new mongoose.Schema({
  frontend: [SkillSchema],
  backend: [SkillSchema],
  tools: [SkillSchema]
}, { _id: false });

const CertificationSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  date: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true }
}, { _id: false });

const CodingPlatformSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  stats: { type: String, default: "" },
  icon: { type: String, required: true },
  url: { type: String, required: true }
}, { _id: false });

const PortfolioSchema = new mongoose.Schema({
  initials: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  tagline: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  profileImage: { type: String, required: true },
  education: [EducationSchema],
  about: AboutSchema,
  projects: [ProjectSchema],
  skills: SkillsSchema,
  certifications: [CertificationSchema],
  codingPlatforms: [CodingPlatformSchema]
}, {
  timestamps: true
});

// Create a model - will use "portfolios" collection
// We'll only have one portfolio document
const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

export default Portfolio;

