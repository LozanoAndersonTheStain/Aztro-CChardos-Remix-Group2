import { getQuestionIcon } from "../interfaces/Icons.interface";
import { QuestionSummaryProps } from "../interfaces/QuestionSummary.interface";
import { Button } from "./Button.component";

export function QuestionSummary({
  selections,
  onBack,
  onConfirm,
}: QuestionSummaryProps) {
  return (
    <div className="min-h-screen p-8 bg-sky-dark flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-white mb-[6rem]">Tus Preferencias</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-[5rem] mb-[5rem] w-full max-w-7xl">
        {selections.map((selection, index) => {
          const Icon = getQuestionIcon(selection.questionId);
          return (
            <div key={index} className="rounded-xl p-4 flex items-start space-x-4">
              {/* Icon container */}
              <div className="w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center">
                <Icon />
              </div>
              {/* Text container */}
              <div className="flex-1 flex flex-col justify-center min-h-[4rem] gap-2">
                <h3 className="text-xl font-semibold text-white">
                  {selection.question}
                </h3>
                <p className="text-base text-sky-200/80">
                  {selection.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between w-full max-w-[86rem] mr-5">
        <Button
          text="Volver a las preguntas"
          variant="secondary"
          onClick={onBack}
        />
        <Button text="Confirmar" onClick={onConfirm} />
      </div>
    </div>
  );
}
