import "./home.css";
import { appForm } from "../../components/app-form/app-form";

export function appHome(element: HTMLElement) {
  const homeInnerHTML = `
    <div class="home">
      <div class="home__title">
        <h1>dreamify</h1>
        <p>Create images from scratch based on a text prompt</p>
      </div>

      <div id="home__container" class="home__container">
        <div>Your image will appear here</div>
      </div>

      <form id="home__form" class="home__form"></form>
    </div>
  `;

  element.innerHTML = homeInnerHTML;

  appForm(document.querySelector<HTMLFormElement>("#home__form")!);
}
