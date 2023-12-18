import { useState, useCallback } from "react";

type Params = {
  recipientName: string;
  occasion: string;
  characterTraits: string;
};

export function useGenerateGreeting() {
  const [greeting, setGreeting] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const generateGreeting = useCallback(async (params: Params) => {
    setIsLoading(true);
    setGreeting(undefined);
    const response = await fetch(
      `/api/quote?recipientName=${params.recipientName}&occasion=${params.occasion}&characterTraits=${params.characterTraits}`
    );
    const data = (await response.json()) as string;
    setGreeting(data);
    setIsLoading(false);
  }, []);

  return {
    greeting,
    isLoading,
    generateGreeting,
  };
}
