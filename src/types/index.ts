export type MentorType =
  | 'local-coach'
  | 'local-athlete'
  | 'college-athlete'
  | 'pro-athlete'
  | 'business-professional'
  | 'teacher-educator'
  | 'military-veteran'
  | 'overcome-challenges'
  | 'counselor';

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  recipientAge?: string;
  topic?: string;
}

export interface Mentor {
  id: string;
  name: string;
  photo: string;
  location: string;
  state: string;
  zipCode: string;
  mentorType: MentorType;
  currentRole: string;
  accomplishments: string[];
  bio: string;
  bestFor: string[];
  toneTags: string[];
  sportProfession: string;
  ageGroups: string[];
  basePrice: number;
  rushPrice48h: number;
  rushPrice24h: number;
  sameDayPrice?: number;
  standardTurnaround: string;
  availability: 'available' | 'busy' | 'unavailable';
  rating: number;
  reviewCount: number;
  reviews: Review[];
  featured: boolean;
  categories: string[];
}

export interface MatchFlowAnswers {
  recipient: string;
  age: string;
  messageType: string;
  localPreference: string;
  zipCode: string;
  mentorType: string;
  tone: string;
}
