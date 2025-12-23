export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  status: string;
  links: {
    github?: string;
    live?: string;
    testflight?: string;
  };
  image?: string;
  video?: string;
  hideImage?: boolean;
}

export const projects: Project[] = [
  {
    id: 'ai-gym-bro',
    title: 'AI Gym Bro',
    tagline: 'Your AI Fitness Companion',
    description:
      'Built a conversational AI fitness tracker where users log workouts by chatting with an enthusiastic "gym bro" personality. Uses GPT-4o-mini to parse natural language into structured workout data, track personal records, and provide motivational feedback.',
    features: [
      'Natural language workout logging',
      'AI-powered exercise parsing',
      'Personal record tracking with smart detection',
      'Progress visualization with charts',
      'Motivational feedback system',
    ],
    techStack: ['Flutter', 'Python Flask', 'PostgreSQL', 'OpenAI API', 'Render'],
    status: 'Live on TestFlight',
    links: {
      github: 'https://github.com/nocean99/ai-gym-bro',
      testflight: '#',
    },
    image: '/images/gym-bro-screenshot.png',
  },
  {
    id: 'dietpalai',
    title: 'DietPalAI',
    tagline: 'Smart Nutrition Tracking',
    description:
      'Developed a nutrition tracking application that uses AI to parse natural language meal descriptions and automatically calculate calories and macros. Designed for both web and mobile to make healthy eating effortless.',
    features: [
      'AI meal parsing (natural language input)',
      'Automatic calorie and macro calculation',
      'Daily nutrition tracking',
      'Web and mobile support',
      'Meal history and trends',
    ],
    techStack: ['React', 'Flutter', 'Serverless Functions', 'OpenAI API', 'Netlify'],
    status: 'In Development',
    links: {
      github: 'https://github.com/nocean99/dietpalai',
      live: '#',
    },
    image: '/images/dietpal-mockup.png',
  },
  {
    id: 'snowball-runner',
    title: 'Snowball Runner',
    tagline: 'Endless Downhill Mayhem',
    description:
      'Developed an addictive endless runner game where players guide a snowball down a procedurally generated mountain slope. The snowball dynamically grows with speed and shrinks upon collision, creating a unique risk-reward gameplay loop. Features spawning obstacles including trees and skiers that challenge players to maintain momentum while navigating the chaotic descent.',
    features: [
      'Dynamic snowball physics with size variation',
      'Procedural mountain generation',
      'Progressive difficulty with increasing speed',
      'Obstacle avoidance gameplay with trees and skiers',
      'Score tracking and high score system',
    ],
    techStack: ['Unity', 'C#', 'Unity Physics'],
    status: 'Completed',
    links: {
      github: 'https://github.com/nocean99/snowball-runner',
    },
    image: '/images/snowball-runner-mockup.png',
  },
  {
    id: 'ai-image-detector',
    title: 'AI Image Detector',
    tagline: 'Detect AI-Generated Content',
    description:
      'Created a machine learning application that analyzes and identifies AI-generated images with high accuracy. The tool helps users distinguish between authentic and AI-created visual content, addressing growing concerns about digital authenticity and deepfakes.',
    features: [
      'Real-time image analysis',
      'High-accuracy AI detection algorithm',
      'Support for multiple AI generation models',
      'Detailed confidence scoring',
      'Batch processing capabilities',
    ],
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React'],
    status: 'Completed',
    links: {
      github: 'https://github.com/nocean99/ai-image-detector',
    },
    hideImage: true,
  },
];

export const techStack = {
  mobile: ['Flutter', 'iOS', 'Android', 'React Native'],
  frontend: ['React', 'Next.js', 'TypeScript', 'HTML/CSS', 'Tailwind'],
  backend: ['Python', 'Flask', 'Node.js', 'REST APIs'],
  databases: ['PostgreSQL', 'Firebase', 'SQLite'],
  aiml: ['OpenAI API', 'GPT Integration', 'TensorFlow', 'Machine Learning'],
  gamedev: ['Unity', 'C#', 'Unity Physics'],
  devops: ['Git', 'GitHub', 'CI/CD', 'Render', 'Vercel', 'Netlify'],
  tools: ['VS Code', 'Cursor', 'Xcode', 'Android Studio', 'Unity Editor'],
};
