import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Questionnaire } from "~/components/QuestionnaireScreen.component";
import type { QuestionsResponse } from "~/interfaces/QuestionsResponse.interface";
import { getAllQuestions } from "~/service/questions.service";

export const meta: MetaFunction = () => {
  return [
    { title: "Amadeus - Questionnaire" },
    {
      name: "description",
      content:
        "Aquí es donde seleccionarás las preguntas que te ayudarán a escoger la mejor opción de viaje para ti",
    },
  ];
};

export const loader: LoaderFunction = async () => {
  return getAllQuestions();
};

export default function QuestionnaireRoute() {
  const data = useLoaderData<QuestionsResponse>();
  return <Questionnaire questionTexts={data.questionTexts} />;
}
