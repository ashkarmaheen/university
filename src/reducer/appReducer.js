export const initial = {
  theme: {
    mode: "dark",
    bgColor: "#FFFFFF",
    fontColor: "#000000",
    selectBg: "#0000000f",
    borderClo: "#0000003b",
    selectborder: "#0000006b",
    toggle: false,
  },
  api: {
    countryAPI: "",
    universitiesAPI: "",
  },
};

export const appReducer = (value, action) => {
  switch (action.type) {
    case "theme-mode":
      return {
        ...value,
        theme: {
          bgColor:
            action.payload.target.checked === false ? "#FFFFFF" : "#000000",
          fontColor:
            action.payload.target.checked === false ? "#000000" : "#FFFFFF",
          selectBg:
            action.payload.target.checked === false ? "#0000000f" : "#707070",
          borderClo:
            action.payload.target.checked === false ? "#00000014" : "#A5A3FF",
          borderShide:
            action.payload.target.checked === false ? "#0000001f" : "#A5A3FF",
          selectborder:
            action.payload.target.checked === false ? "#0000006b" : "#A5A3FF",

          mode: action.payload.target.checked === false ? "light" : "dark",
          toggle: action.payload.target.checked,
        },
      };

    case "country-list":
      return {
        ...value,

        api: { ...value.api, countryAPI: action?.payload },
      };

    case "university-list":
      return {
        ...value,
        api: { ...value.api, universitiesAPI: action?.payload },
      };

    default:
  }
};
