const fetchWordData = async (word: string) => {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  return (await response.json())[0];
};

export default fetchWordData;
