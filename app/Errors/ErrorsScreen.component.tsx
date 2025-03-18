import { Button } from '../components/Button.component';
import { ErrorProps } from '../interfaces/Error.interface';

export function ErrorScreen({ message, retryCount, maxRetries, onRetry }: ErrorProps) {
  return (
    <div className="min-h-screen bg-sky-dark flex flex-col items-center justify-center p-8">
      <div className="max-w-md w-full bg-white/10 rounded-xl p-8 backdrop-blur-sm">
        <div className="text-center mb-8">
          <svg 
            className="w-16 h-16 text-red-500 mx-auto mb-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
          <h2 className="text-2xl font-bold text-white mb-2">
            ¡Ups! Algo salió mal
          </h2>
          <p className="text-sky-200/80 mb-6">
            {message}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button
            text={`Reintentar (${retryCount}/${maxRetries})`}
            onClick={onRetry}
            disabled={retryCount >= maxRetries}
            variant="primary"
          />
          {retryCount >= maxRetries && (
            <p className="text-sky-200/60 text-sm">
              Número máximo de intentos alcanzado. Por favor, inténtalo más tarde.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}