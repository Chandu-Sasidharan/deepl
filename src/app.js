import React, { useState } from "react";
import Select from "react-select";
import Translate from "./utils/Translate";
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
  function handleTranslate() {
    Translate(language, inputText, setOutput);
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
