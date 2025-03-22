export interface QuestionSummaryProps {
    selections: {
        questionId: number;
        answerId: number;
        question: string;
        answer: string;
    }[];
    onBack: () => void;
    onConfirm: () => void;
}