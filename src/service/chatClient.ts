import OpenAI from "openai";

interface OpenAiClient {
  (promptString: string): Promise<string>;
}

const openai = new OpenAI({
  apiKey:
    process.env.OPEN_AI_API_KEY ||
    "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", // adding the api key fallback only for the demo purpose
});

export const openAiClient: OpenAiClient = async (promptString: string) => {
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: promptString }],
    temperature: 0,
    max_tokens: 500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
  });

  return chatCompletion.choices[0].message.content as string;
};
