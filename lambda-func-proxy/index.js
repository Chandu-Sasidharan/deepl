import axios from "axios";

export const handler = async (event) => {
  // based on the API trigger config, handler may recieve an event object,
  // or simply the request body
  let data;
  if (typeof event.body === "string")
    data = JSON.parse(event.body);
  else
    data = event;

  const { text, target_lang } = data;
  const authKey = process.env.DEEPL_API_KEY;
  const deeplUrl = process.env.DEEPL_API_URL;

  try {
    const response = await axios({
      method: "POST",
      url: deeplUrl,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `DeepL-Auth-Key ${authKey}`,
      },
      data: {
        text,
        target_lang,
      },
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
