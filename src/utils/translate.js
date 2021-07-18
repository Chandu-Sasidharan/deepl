import axios from "axios";
import qs from "qs";

async function Translate(language, inputText, setOutput, setError) {
  if (!inputText) return setError("Error: Please enter text");
  if (!language.value) return setError("Error: Please select a language");
  setError(null);
  const data = {
    Auth_Key: process.env.REACT_APP_AUTH_KEY,
    text: inputText,
    target_lang: language.value,
  };
  const options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: qs.stringify(data),
    url: process.env.REACT_APP_URL,
  };

  try {
    const response = await axios(options);
    return setOutput(response.data.translations[0]["text"]);
  } catch (ex) {
    return setError(`Error: ${ex.message}`);
  }
}

export default Translate;
