function SelectTheme(theme) {
  console.log(theme);
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#F9A796",
      primary: "#F9A796",
      neutral80: "555",
    },
  };
}

export default SelectTheme;
