import { useEffect, useState } from "react";
import { Button } from "../components/Button.component";
import { OptionCard } from "../components/OptionCard.component";
import { QuestionSummary } from "./QuestionSummaryScreen.component";
import { ErrorScreen } from "../Errors/ErrorsScreen.component";
import { Loading } from "./Loading.component";
import { QuestionsResponse } from "~/interfaces/QuestionsResponse.interface";

export function Questionnaire({ questionTexts }: QuestionsResponse) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selections, setSelections] = useState<number[]>(
    new Array(questionTexts.length).fill(-1)
  );
  const [showSummary, setShowSummary] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  useEffect(() => {
    initializeQuestions();
  }, [retryCount]);

  const initializeQuestions = () => {
    try {
      setIsLoading(true);
      setError(null);

      // Simulate async loading
      setTimeout(() => {
        if (questionTexts && questionTexts.length > 0) {
          setSelections(new Array(questionTexts.length).fill(-1));
          setIsLoading(false);
        } else {
          throw new Error("No se pudieron cargar las preguntas");
        }
      }, 1000);
    } catch (error) {
      setError("Error al cargar las preguntas");
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    if (retryCount < MAX_RETRIES) {
      setRetryCount((prev) => prev + 1);
    }
  };

  if (error) {
    return (
      <ErrorScreen
        message={error}
        retryCount={retryCount}
        maxRetries={MAX_RETRIES}
        onRetry={handleRetry}
      />
    );
  }

  if (isLoading) {
    return <Loading message="Cargando preguntas..." />;
  }

  const handleSelect = (optionIndex: number) => {
    const newSelections = [...selections];
    newSelections[currentQuestion] =
      questionTexts[currentQuestion].options[optionIndex].id;
    setSelections(newSelections);
  };

  const isLastQuestion = currentQuestion === questionTexts.length - 1;
  const canProceed = selections[currentQuestion] !== -1;
  const allQuestionsAnswered = selections.every(
    (selection) => selection !== -1
  );

  const getSelectionsSummary = () => {
    return selections.map((selectionId, index) => {
      const question = questionTexts[index];
      const selectedOption = question.options.find(
        (opt) => opt.id === selectionId
      );

      if (!selectedOption) {
        return {
          questionId: question.id,
          question: question.category,
          answer: "No seleccionado",
        };
      }

      return {
        questionId: question.id,
        question: question.category,
        answer: selectedOption.description,
      };
    });
  };

  if (showSummary) {
    return (
      <QuestionSummary
        selections={getSelectionsSummary()}
        onBack={() => setShowSummary(false)}
        onConfirm={() => console.log("Answers confirmed:", selections)}
      />
    );
  }

  return (
    <div className="min-h-screen p-8 bg-blue-300 flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto justify-center items-center">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-4">
          {questionTexts[currentQuestion].questionText}
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          {questionTexts[currentQuestion].supplementaryText}
        </p>

        <div className="container_options flex gap-8 mb-12 justify-center items-center">
          {questionTexts[currentQuestion].options.map((option, index) => (
            <OptionCard
              key={option.id}
              {...option}
              isSelected={selections[currentQuestion] === option.id}
              onSelect={() => handleSelect(index)}
            />
          ))}
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {Array.from({ length: questionTexts.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (selections[index] !== -1 || index === currentQuestion) {
                  setCurrentQuestion(index);
                }
              }}
              disabled={selections[index] === -1 && index !== currentQuestion}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium 
                transition-all duration-200 hover:scale-110
                ${
                  index === currentQuestion
                    ? "bg-sky-vivid text-white"
                    : selections[index] !== -1
                    ? "bg-blue-200 text-gray-700 cursor-pointer hover:bg-sky-700 hover:text-white"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center gap-[40rem]">
        <Button
          text="Anterior"
          variant="secondary"
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
          disabled={currentQuestion === 0}
        />
        <div className="flex-1 flex justify-end">
          <Button
            text={isLastQuestion ? "Verificar respuestas" : "Siguiente"}
            onClick={() => {
              if (!isLastQuestion) {
                setCurrentQuestion((currentQuestion) => currentQuestion + 1);
              } else if (allQuestionsAnswered) {
                setShowSummary(true);
              }
            }}
            disabled={!canProceed || (isLastQuestion && !allQuestionsAnswered)}
          />
        </div>
      </div>
    </div>
  );
}
