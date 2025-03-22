import { json } from "@remix-run/node";
import type { QuestionsResponse } from "../interfaces/QuestionsResponse.interface";
import { API_URL_QUESTIONS, TOKEN } from "../config/api.config";

export async function getAllQuestions() {
  try {
    const response = await fetch(`${API_URL_QUESTIONS}/getAllQuestions`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return json<QuestionsResponse>({
      questionTexts: data,
    });
  } catch (error) {
    throw new Response("Failed to fetch questions", { status: 404 });
  }
}
