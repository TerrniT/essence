export interface Card {
  id: number;
  question: string;
  level: 1 | 2 | 3;
}

export interface GameState {
  answeredQuestions: Set<number>;
  skippedQuestions: Set<number>;
}

export const cards: Card[] = [
  // Level 1 - Light and Fun
  { id: 1, question: "What was your first impression of me?", level: 1 },
  { id: 2, question: "What's your favorite memory of us together?", level: 1 },
  { id: 3, question: "What's the cutest thing I do without realizing it?", level: 1 },
  
  // Level 2 - Deeper Connection
  { id: 4, question: "What makes you feel most loved in our relationship?", level: 2 },
  { id: 5, question: "What's one thing you'd like us to work on together?", level: 2 },
  { id: 6, question: "How has our relationship changed you as a person?", level: 2 },
  
  // Level 3 - Deep and Intimate
  { id: 7, question: "What are your deepest fears about our relationship?", level: 3 },
  { id: 8, question: "Where do you see us in 5 years?", level: 3 },
  { id: 9, question: "What's something you've never told anyone else?", level: 3 },
];