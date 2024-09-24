export const initial = {
  theme: { mode: "dark", bgColor: "white", fontColor: "black", toggle: true },
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
          bgColor: action.payload.target.checked === false ? "white" : "black",
          fontColor:
            action.payload.target.checked === false ? "black" : "white",
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
