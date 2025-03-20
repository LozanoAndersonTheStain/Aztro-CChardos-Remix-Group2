import { useEffect, useState } from "react";
import { Button } from "../components/Button.component";
import { OptionCard } from "../components/OptionCard.component";
import { QuestionSummary } from "./QuestionSummaryScreen.component";
import { ErrorScreen } from "../Errors/ErrorsScreen.component";
import { Loading } from "./Loading.component";
import { QuestionsResponse } from "~/interfaces/QuestionsResponse.interface";

// const questions = [
//   {
//     id: 1,
//     category: "Preferencia de destino",
//     questionText: "¿Qué tipo de entorno prefieres para tus vacaciones?",
//     supplementaryText:
//       "Piensa en el ambiente donde te sientes más relajado. ¿Te gusta el mar, la naturaleza o la vida urbana?",
//     options: [
//       {
//         id: 1,
//         image:
//           "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheWFzfGVufDB8fDB8fHww",
//         description: "Playa",
//         fact: "Las playas son perfectas para relajarse y disfrutar del sol",
//       },
//       {
//         id: 2,
//         image:
//           "https://i0.wp.com/travelandleisure-es.com/wp-content/uploads/2024/01/senderismo-colombia-trekking-caminata-vacaciones-turismo.jpg?resize=1000%2C670&ssl=1",
//         description: "Montaña",
//         fact: "Las montañas ofrecen aventuras y vistas espectaculares",
//       },
//       {
//         id: 3,
//         image:
//           "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l1ZGFkfGVufDB8fDB8fHww",
//         description: "Ciudad",
//         fact: "Las ciudades están llenas de cultura y entretenimiento",
//       },
//     ],
//   },
//   {
//     id: 2,
//     category: "Preferencia de clima",
//     questionText: "¿Qué clima prefieres durante tus vacaciones?",
//     supplementaryText:
//       "Imagina el clima ideal para tus días de descanso. ¿Prefieres calor, frío o algo intermedio?",
//     options: [
//       {
//         id: 4,
//         image:
//           "https://www.wradio.com.co/resizer/v2/AD4XTVSSZBCELFUMO77SZRI2RY.jpg?auth=bf4c9cfc8645ac2f8a9bb58e81e53deb06160bdc20974df3a75deff10e50d792&width=650&height=488&quality=70&smart=true",
//         description: "Caluroso",
//         fact: "El clima cálido es perfecto para actividades al aire libre",
//       },
//       {
//         id: 5,
//         image:
//           "https://upload.wikimedia.org/wikipedia/commons/5/50/Tamshiyacu_Tahuayo_Regional_Conservation_Area_Iquitos_Amazon_Rainforest_Peru.jpg",
//         description: "Templado",
//         fact: "El clima templado es ideal para explorar todo el día",
//       },
//       {
//         id: 6,
//         image:
//           "https://img.freepik.com/fotos-premium/vista-ciudad-clima-nevado-calles-ciudad-invierno_215924-1594.jpg",
//         description: "Frío",
//         fact: "El clima frío es perfecto para deportes de invierno",
//       },
//     ],
//   },
//   {
//     id: 3,
//     category: "Preferencia de actividad",
//     questionText: "¿Qué tipo de actividades prefieres hacer durante tus vacaciones?",
//     supplementaryText: "Reflexiona sobre cómo te gustaría pasar tus días. ¿Aventuras emocionantes, cultura o simplemente relajarte?",
//     options: [
//       {
//         id: 7,
//         image:
//           "https://cdn.getyourguide.com/img/tour/3a8426e8f7674d474a897742bc481d0da76c7b9a450a3adc4bba3c0b56a238b2.jpg/145.jpg",
//         description: "Deportes y Aventura",
//         fact: "Las actividades de aventura te llenan de adrenalina",
//       },
//       {
//         id: 8,
//         image:
//           "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/e9/5d/c7.jpg",
//         description: "Cultura y Museos",
//         fact: "La relajación ayuda a recargar energías",
//       },
//       {
//         id: 9,
//         image:
//           "https://images.pexels.com/photos/3060324/pexels-photo-3060324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         description: "Relax y Bienestar",
//         fact: "Las actividades culturales enriquecen tu experiencia",
//       },
//     ],
//   },
//   {
//     id: 4,
//     category: "Preferencia de alojamiento",
//     questionText: "¿Qué tipo de alojamiento prefieres?",
//     supplementaryText: "Imagina el lugar donde te gustaría descansar después de un día de actividades. ¿Lujo, comodidad o algo más económico?",
//     options: [
//       {
//         id: 10,
//         image:
//           "https://www.lafincaresort.com/sites/default/files/inline-images/timthumb%20%282%29.jpeg",
//         description: "Hotel de Lujo",
//         fact: "Los hoteles ofrecen comodidad y servicios completos",
//       },
//       {
//         id: 11,
//         image:
//           "https://albergue-casa-jurado-el-paso.hotelmix.es/data/Photos/OriginalPhoto/16006/1600664/1600664512/Casa-Jurado-Hostel-El-Paso-Exterior.JPEG",
//         description: "Hostal o Albergue",
//         fact: "Las cabañas te conectan con la naturaleza",
//       },
//       {
//         id: 12,
//         image:
//           "https://ba.scene7.com/is/image/ba/airbnb-mountain-house-sunset:16-9?ts=1740587057838&dpr=off",
//         description: "Airbnb o Apartamento",
//         fact: "Los apartamentos te dan más independencia",
//       },
//     ],
//   },
//   {
//     id: 5,
//     category: "Duración del viaje",
//     questionText: "¿Cuánto tiempo planeas quedarte de vacaciones?",
//     supplementaryText: "Piensa en cuánto tiempo tienes para desconectar y disfrutar. ¿Un fin de semana, unas semanas o más?",
//     options: [
//       {
//         id: 13,
//         image:
//           "https://res.cloudinary.com/dy6jglszo/image/upload/v1742156292/Amadeus/findesemana_ywh0x2.jpg",
//         description: "Menos de una semana",
//         fact: "Perfectos para escapadas cortas y renovadoras",
//       },
//       {
//         id: 14,
//         image:
//           "https://res.cloudinary.com/dy6jglszo/image/upload/v1742156292/Amadeus/dosemanas_krsknj.jpg",
//         description: "Una a dos semanas",
//         fact: "Tiempo ideal para explorar un destino",
//       },
//       {
//         id: 15,
//         image:
//           "https://res.cloudinary.com/dy6jglszo/image/upload/v1742156292/Amadeus/calendario_yckjly.jpg",
//         description: "Más de dos semanas",
//         fact: "Para una experiencia completa y sin prisas",
//       },
//     ],
//   },
//   {
//     id: 6,
//     category: "Rango de Edad",
//     questionText: "¿Cuál es tu rango de edad?",
//     supplementaryText: "Tu edad puede influir en el tipo de viaje que prefieres. ¿Eres joven, estás en la mediana edad o disfrutas de la madurez?",
//     options: [
//       {
//         id: 16,
//         image: "https://res.cloudinary.com/dy6jglszo/image/upload/v1742157124/Amadeus/veinte_zxxaqv.jpg",
//         description: "Menos de 30 años",
//         fact: "Perfecto para viajes llenos de energía y diversión",
//       },
//       {
//         id: 17,
//         image: "https://huakai.es/wp-content/uploads/2020/04/29cc678f-cd74-48b9-b73d-dd249c503f2f.jpg",
//         description: "30-50 años",
//         fact: "La edad media es ideal para viajes de todo tipo",
//       },
//       {
//         id: 18,
//         image: "https://res.cloudinary.com/dy6jglszo/image/upload/v1742157027/Amadeus/17060178286204_ffprlh.jpg",
//         description: "Más de 50 años",
//         fact: "Las personas mayores disfrutan de viajes tranquilos y relajados",
//       },
//     ],
//   },
// ];

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
