export interface PersonalInfo {
  name: string;
  headline: string;
  subHeadline: string;
  statusText: string;
  statusAvailable: boolean;
  university: string;
  degree: string;
  period: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  aboutText: string;
  interests: string[];
}

export type SkillLevel = 'Exploring' | 'Intermediate' | 'Proficient' | 'Advanced';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  tag?: string;
  iconName?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export type ProjectCategory = 'All' | 'AI/ML' | 'Web' | 'Academic' | 'Hackathon' | 'Other';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory[];
  problem: string;
  idea: string;
  solution: string;
  technologies: string[];
  features: string[];
  myContribution: string;
  outcome: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  image: string;
  featured: boolean;
  status: 'Completed' | 'In Progress' | 'Prototype' | 'Maintained';
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
  iconName: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  skills?: string[];
  highlight?: boolean;
}

export interface CurrentlyBuildingData {
  building: {
    title: string;
    description: string;
  };
  learning: {
    title: string;
    description: string;
  };
  goal: {
    title: string;
    description: string;
  };
  exploring: {
    title: string;
    description: string;
  };
}

export type AchievementCategory = 'All' | 'Hackathons' | 'Internships' | 'Certifications' | 'Workshops' | 'Fellowships' | 'Other';

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date?: string;
  category: AchievementCategory;
  description: string;
  verificationUrl?: string;
  certificateImage?: string;
  badge?: string;
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  duration: string;
  location: string;
  type: 'Internship' | 'Training' | 'Simulation' | 'Leadership';
  responsibilities: string[];
  skillsGained: string[];
  certificateUrl?: string;
}

export interface BeyondCodeQuality {
  category: 'Leadership' | 'Communication' | 'Creativity' | 'Problem Solving';
  title: string;
  description: string;
  highlights: string[];
}

export interface GithubData {
  username: string;
  profileUrl: string;
  publicRepos: number;
  topLanguages: { name: string; percentage: number; color: string }[];
  featuredRepos: {
    name: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
    url: string;
  }[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: SkillCategory[];
  projects: Project[];
  impactMetrics: ImpactMetric[];
  timeline: TimelineEntry[];
  currentlyBuilding: CurrentlyBuildingData;
  achievements: Achievement[];
  experiences: Experience[];
  beyondCode: BeyondCodeQuality[];
  github: GithubData;
  qaPairs: {
    keywords: string[];
    question: string;
    answer: string;
  }[];
}
