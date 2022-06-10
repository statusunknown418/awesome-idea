export const fetcher = async <T>(path: string, payload?: string): Promise<T> => {
  const data = await fetch(`${path}`, {
    method: payload ? "POST" : "GET",
    headers: {
      Authorization: `Token token=${process.env.NEXT_PUBLIC_API_KEY}`,
      "Content-Type": "application/json",
    },
    ...(payload && { body: payload }),
  });
  return await data.json();
};
