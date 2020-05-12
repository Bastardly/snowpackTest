import { html } from "/app/web_modules/lit-html.js";

export function fancyButton(store) {
  const handleClick = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    store.onClick(randomColor);
  };

  return html`
    <style>
      .uhFancy {
        background-color: ${store.color};
      }
    </style>
    <button class="uhFancy" @click=${handleClick}>Behold, a button!</button>
  `;
}
