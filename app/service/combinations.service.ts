import { API_URL_DESTINATIONS, TOKEN } from "~/config/api.config";
import type { DestinationResponse } from "~/interfaces/DestinationResponse.interface";

export async function getCombinations(answerIds: number[]): Promise<DestinationResponse> {
  try {
    console.log('Sending answer IDs:', answerIds);
    
    const response = await fetch(`${API_URL_DESTINATIONS}/getMatchingDestinations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TOKEN}`
      },
      body: JSON.stringify(answerIds),
    });

    if (!response.ok) {
      console.error('Response status:', response.status);
      const errorText = await response.text();
      console.error('Response body:', errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Response data:', data);

    // Validate the response data
    if (!data.firstCity || !data.secondCity) {
      throw new Error('Invalid response data structure');
    }

    return data;
  } catch (error) {
    console.error("Error in getCombinations:", error);
    throw new Response("Failed to fetch combinations", { status: 404 });
  }
}