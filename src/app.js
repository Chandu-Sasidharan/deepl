import React, { useState } from "react";
import Select from "react-select";
import Translate from "./utils/translate";
import { languages } from "./utils/languages";
import SelectTheme from "./utils/selectTheme";
import { SubmitButton } from "./components/button";
import { InputTextArea } from "./components/inputTextArea";
import { OutputTextArea } from "./components/outputTextArea";
import { PrimaryHeading } from "./components/primaryHeading";

import {
  MainContainer,
  InputWrpper,
  InputLabel,
  SelectButtonWrapper,
  SelectButtonShadow,
  OutputWrapper,
  OutputLabel,
  ContentWrapper,
} from "./styles/appStyles";

function Home() {
  const [language, setLanguage] = useState({});
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);

  let message = "Enter text in English";
  if (error) message = error;

  function handleTranslate() {
    Translate(language, inputText, setOutput, setError);
  }

  return (
    <MainContainer id="main">
      <PrimaryHeading id="heading">Simple Text Translator</PrimaryHeading>
      <ContentWrapper id="contentWrapper">
        <InputWrpper id="inputWrapper">
          <InputLabel isError={error} isOutput={output}>
            {message}
          </InputLabel>
          <InputTextArea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></InputTextArea>
          <SelectButtonWrapper id="SelectWrapper">
            <SelectButtonShadow>
              <Select
                options={languages}
                theme={SelectTheme}
                onChange={setLanguage}
                placeholder="Translate to ..."
              ></Select>
            </SelectButtonShadow>
            <SubmitButton onClick={handleTranslate}>Submit</SubmitButton>
          </SelectButtonWrapper>
        </InputWrpper>
        <OutputWrapper id="outputWrapper" isOutput={output}>
          <OutputLabel id="outHeading">Translation</OutputLabel>
          <OutputTextArea>{output}</OutputTextArea>
        </OutputWrapper>
      </ContentWrapper>
    </MainContainer>
  );
}

export default Home;
