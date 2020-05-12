import { render } from "/web_modules/lit-html";
import { fancyButton } from "./fancyButton";

(async () => {
  // const { render } = await import("/web_modules/lit-html");
  // const { fancyButton } = await import("/src/fancyButton");
  interface IStore {
    update: () => void;
    bgcolor: string;
    onClick: (color: string) => void;
  }

  const store: IStore = {
    bgcolor: "hotpink",
    onClick: (color) => {
      store.bgcolor = color;
      store.update();
    },
    update: () => {
      render(fancyButton(store), document.getElementById("mountLitHere"));
    },
  };

  store.update();
})();
