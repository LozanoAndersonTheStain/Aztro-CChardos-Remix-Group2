import { json, redirect, type ActionFunction } from "@remix-run/node";
import { useActionData, useNavigation } from "@remix-run/react";
import { DestinationsScreen } from "~/components/DestinationsScreen.component";
import { getCombinations } from "~/service/combinations.service";
import { Loading } from "~/components/Loading.component";
import { useEffect, useState } from "react";

export const action: ActionFunction = async ({ request }) => {
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const formData = await request.formData();
  const answerIdsString = formData.get("answerIds");
  
  if (!answerIdsString || typeof answerIdsString !== 'string') {
    return redirect("/questionnaire");
  }

  try {
    const answerIds = JSON.parse(answerIdsString);
    const destinations = await getCombinations(answerIds);
    return json(destinations);
  } catch (error) {
    console.error("Error processing destinations:", error);
    return json({ error: "Failed to load destinations" }, { status: 500 });
  }
};

export default function DestinationsRoute() {
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(actionData) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [actionData]);

  if (navigation.state === "submitting" || (actionData && isLoading)) {
    return (
      <div className="min-h-screen bg-sky-dark">
        <Loading message="Buscando los destinos perfectos para ti..." />
      </div>
    );
  }

  if (actionData?.error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sky-dark">
        <p className="text-2xl text-white">{actionData.error}</p>
      </div>
    );
  }

  if (actionData && 'firstCity' in actionData) {
    return <DestinationsScreen destinations={actionData} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-dark">
      <p className="text-2xl text-white">Selecciona tus preferencias primero</p>
    </div>
  );
}