export interface AsmaName {
  arabic: string;
  transliteration: string;
  meaning: string;
  dua: string;
  explanation: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}