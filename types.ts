
export interface Book {
  id: string;
  title: string;
  author: string;
  recommendedBy: string[];
  coverUrl: string;
  shortDescription: string;
}

export interface BookSummary {
  introduction: string;
  mainContent: string;
  lessons: string;
  caseStudies: string;
  criticalAnalysis: string;
  billionaireConnection: string;
  finalSummary: string;
  recommendations: string;
}

export enum AppState {
  HOME = 'HOME',
  LOADING = 'LOADING',
  VIEWING = 'VIEWING',
  ERROR = 'ERROR'
}
