import axios from "axios";
import qs from "qs";

async function Translate(language, inputText, setOutput) {
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
  const response = await axios(options);

  return setOutput(response.data.translations[0]["text"]);
}

export default Translate;
