export interface OptionCardProps {
    image: string;
    description: string;
    fact?: string;
    isSelected: boolean;
    onSelect: () => void;
}