import React, { useState } from "react";
import Select from "react-select";
import Translate from "./utils/translate";
import { languages } from "./utils/languages";
import SelectTheme from "./utils/selectTheme";

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
  ContentWrapper,
} from "./styles/homeStyles";

function Home() {
  const [language, setLanguage] = useState({});
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);

  let message = "Enter text to Translate";
  if (error) message = error;

  function handleTranslate() {
    Translate(language, inputText, setOutput, setError);
  }

  return (
    <MainContainer id="main">
      <Heading id="heading">Simple Text Translator</Heading>
      <ContentWrapper id="contentWrapper">
        <InputWrpper id="inputWrapper">
          <Label isError={error} isOutput={output}>
            {message}
          </Label>
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></Input>
          <SelectWrapper id="SelectWrapper">
            <Select
              options={languages}
              theme={SelectTheme}
              onChange={setLanguage}
              placeholder="Translate to ..."
            ></Select>
          </SelectWrapper>
          <Submitbutton onClick={handleTranslate}>Submit</Submitbutton>
        </InputWrpper>
        <OutputWrapper id="outputWrapper" isOutput={output}>
          <Outheading id="outHeading">Translation</Outheading>
          <Output>{output}</Output>
        </OutputWrapper>
      </ContentWrapper>
    </MainContainer>
  );
}

export default Home;
