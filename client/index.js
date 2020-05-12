(async () => {
  const {
    render
  } = await import("/src/web_modules/lit-html.js");
  const {
    fancyButton
  } = await import("/src/fancyButton");
  const store = {
    color: "green",
    onClick: color => {
      store.color = color;
      store.update();
    },
    update: () => {
      render(fancyButton(store), document.getElementById("mountLitHere"));
    }
  };
  store.update();
})();