import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import qs from "qs";
import { languages } from "./utils/languages";

import {
  MainContainer,
  InputWrpper,
  Heading,
  Label,
  Input,
  SelectWrapper,
  Submitbutton,
  OutputWrapper,
  Outheading,
  Output,
} from "./styles/homeStyles";

function Home() {
  const [language, setLanguage] = useState({});
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState(null);

  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#F9A796",
        primary: "#FF7043",
      },
    };
  }

  async function handleTranslate() {
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
    const result = await axios(options);
    setOutput(result.data.translations[0]["text"]);
  }

  return (
    <MainContainer id="main">
      <InputWrpper id="contentWrapper">
        <Heading id="heading">Simple Text Translator</Heading>
        <Label>Enter text in English</Label>
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></Input>
        <SelectWrapper id="SelectWrapper">
          <Select
            options={languages}
            theme={customTheme}
            onChange={setLanguage}
            placeholder="Translate to ..."
          ></Select>
        </SelectWrapper>
        <Submitbutton onClick={handleTranslate}>Submit</Submitbutton>
      </InputWrpper>
      <OutputWrapper isOutput={output}>
        <Outheading>Translation</Outheading>
        <Output>{output}</Output>
      </OutputWrapper>
    </MainContainer>
  );
}

export default Home;
