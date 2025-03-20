import { Option } from "./Option.interface";

export interface Question {
    id: number;
    category: string;
    questionText: string;
    supplementaryText: string;
    options: Option[];
  }