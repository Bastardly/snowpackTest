(async () => {
  const { render } = await import("/app/web_modules/lit-html.js");
  const { fancyButton } = await import("./fancyButton");
  interface IStore {
    update: () => void;
    color: string;
    onClick: (color: string) => void;
  }

  const store: IStore = {
    color: "green",
    onClick: (color) => {
      store.color = color;
      store.update();
    },
    update: () => {
      render(fancyButton(store), document.getElementById("mountusr"));
    },
  };

  store.update();
})();
