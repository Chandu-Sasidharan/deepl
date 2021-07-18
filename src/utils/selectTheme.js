function SelectTheme(theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#F9A796",
      primary: "#FF7043",
    },
  };
}

export default SelectTheme;
