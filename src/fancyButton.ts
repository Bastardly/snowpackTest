import { html } from "/web_modules/lit-html";

export function fancyButton(store) {
  const handleClick = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    store.onClick(randomColor);
  };

  return html`
    <style>
      .uhFancy {
        transition: background-color 0.5s ease;
        background-color: ${store.bgcolor};
        padding: 8px 12px;
        border: 1px solid #eee;
        border-radius: 5px;
        cursor: pointer;
        margin: auto;
        display: block;
        outline: white;
      }
      .uhFancyText {
        color: ${store.bgcolor};
        font-weight: bolder;
        filter: invert(100%);
      }
    </style>
    <button class="uhFancy" @click=${handleClick}>
      <span class="uhFancyText">Behold, a fancy button!</span>
    </button>
  `;
}
