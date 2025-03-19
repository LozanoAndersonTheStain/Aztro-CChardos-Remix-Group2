export interface ErrorProps {
  message: string;
  retryCount: number;
  maxRetries: number;
  onRetry: () => void;
}
