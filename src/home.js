import React, { useState } from "react";
import Select from "react-select";

import {
  MainContainer,
  ContentWrpper,
  Heading,
  Label,
  Input,
  SelectWrapper,
  Submitbutton,
} from "./homeStyles";

const languages = [
  { value: "german", label: "German" },
  { value: "spanish", label: "Spanish" },
  { value: "dutch", label: "Dutch" },
];

function Home() {
  const [language, setLanguage] = useState({});
  const [inputText, setInputText] = useState("");
  if (inputText) console.log(inputText);
  if (language.label) console.log(language.label);

  //   let img_obj = apodobject.data.valueOf()[0];
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
  return (
    <MainContainer id="main">
      <ContentWrpper id="contentWrapper">
        <Heading id="heading"> Simple Text Translator</Heading>
        <Label>Enter text in English</Label>
        <Input onChange={(e) => setInputText(e.target.value)}></Input>
        <SelectWrapper id="SelectWrapper">
          <Select
            options={languages}
            theme={customTheme}
            onChange={setLanguage}
            placeholder="Translate to ..."
          ></Select>
        </SelectWrapper>
        <Submitbutton>Submit</Submitbutton>
      </ContentWrpper>
    </MainContainer>
  );
}

export default Home;
