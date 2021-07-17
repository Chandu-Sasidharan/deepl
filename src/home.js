import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import qs from "qs";
import { languages } from "./languages";

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
} from "./homeStyles";

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
      auth_key: "5652c0b9-adcf-7f2e-f6a2-3a577f700dc9:fx",
      text: inputText,
      target_lang: language.value,
    };
    const options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(data),
      url: "https://api-free.deepl.com/v2/translate",
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
