import axios from "axios";

async function Translate(language, inputText, setOutput, setError) {
  if (!inputText) return setError("Please enter text");
  if (!language.value) return setError("Please select a language");
  setError(null);

  const data = {
    text: [inputText],
    target_lang: language.value,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
    url: import.meta.env.VITE_PROXY_URL,
  };

  try {
    const response = await axios(options);
    if (response.data.translations && response.data.translations.length > 0) {
      return setOutput(response.data.translations[0].text);
    } else {
      throw new Error("No translations returned.");
    }
  } catch (error) {
    setError(`Error: ${error.message}`);
  }
}

export default Translate;
