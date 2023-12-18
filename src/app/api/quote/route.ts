import { type NextRequest } from "next/server";
import { openAiClient } from "../../../service/chatClient";
import { Quotes } from "../../../service/config";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const recipientName = searchParams.get("recipientName");
  const occasion = searchParams.get("occasion");
  const characterTraits = searchParams.get("characterTraits");

  try {
    const response = await openAiClient(
      `
      Write the text of maximum 100 words for a short greetings card.
      Start the greetings card with an inspiring quote (only one) from this list ${JSON.stringify(
        Quotes
      )} based on the following meta data:
      recipient name: ${recipientName}
      The occasion for the greeting is: ${occasion}
      The recipient can be described as: ${characterTraits}
      `
    );

    return Response.json(response);
  } catch (e) {
    const quote = Quotes[Math.floor(Math.random() * Quotes.length)];

    return Response.json(
      `Dear ${recipientName},\n\n\"${quote}"\n\nOn this special occasion of ${occasion}, I wanted to take a moment to send you warm greetings and best wishes. \n\n[Your Name]`
    );
  }
}
