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
      github: 'https://github.com/yourusername/ai-gym-bro',
      testflight: '#',
    },
    image: '/images/gym-bro-mockup.png',
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
      github: 'https://github.com/yourusername/dietpalai',
      live: '#',
    },
    image: '/images/dietpal-mockup.png',
  },
  {
    id: 'future-project',
    title: 'Your Next Big Thing',
    tagline: 'Coming Soon',
    description: 'Building something amazing. Stay tuned!',
    features: ['Innovative features', 'User-focused design', 'Modern tech stack'],
    techStack: ['React', 'TypeScript', 'Next.js'],
    status: 'Planning',
    links: {},
    image: '/images/placeholder.png',
  },
];

export const techStack = {
  mobile: ['Flutter', 'iOS', 'Android', 'React Native'],
  frontend: ['React', 'Next.js', 'TypeScript', 'HTML/CSS', 'Tailwind'],
  backend: ['Python', 'Flask', 'Node.js', 'REST APIs'],
  databases: ['PostgreSQL', 'Firebase', 'SQLite'],
  aiml: ['OpenAI API', 'GPT Integration', 'Prompt Engineering'],
  devops: ['Git', 'GitHub', 'CI/CD', 'Render', 'Vercel', 'Netlify'],
  tools: ['VS Code', 'Cursor', 'Xcode', 'Android Studio'],
};
