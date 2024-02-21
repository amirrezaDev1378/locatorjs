import setupLocatorUI from "@amirrezadev1378/runtime";

if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
