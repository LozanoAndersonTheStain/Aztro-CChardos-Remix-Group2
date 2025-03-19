export interface QuestionSummaryProps {
    selections: {
        questionId: number;
        question: string;
        answer: string;
    }[];
    onBack: () => void;
    onConfirm: () => void; 
}