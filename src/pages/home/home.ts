import "./home.css";

export function appHome(element: HTMLElement) {
  const homeInnerHTML = `
    <div class="home">
      <div class="home__title">
        <h1>dreamify</h1>
        <p>Create images from scratch based on a text prompt</p>
      </div>
    </div>
  `;

  element.innerHTML = homeInnerHTML;
}
