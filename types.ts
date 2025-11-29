export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
}
