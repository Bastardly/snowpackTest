import { render, html } from "/app/web_modules/lit-html.js";
import { tester } from "/app/creator/tester";

(async () => {
  interface IStore {
    update: any;
  }

  const store: IStore = {
    update: async () => {
      const app = html`<div>Hello World!</div>`;
      render(app, document.getElementById("mountusr"));
    },
  };

  tester();

  store.update();
})();
