import type { MetaFunction } from "@remix-run/node";
import { Questionnaire } from "../components/QuestionnaireScreen.component";

export const meta: MetaFunction = () => {
  return [
    { title: "Amadeus - Questionnaire" },
    { name: "description", content: "Aquí es donde selecionaras las preguntas que te ayudaran a escoger la mejor opcción de viaje para ti" },
  ];
};

export default function QuestionnaireRoute() {
  return <Questionnaire />;
}