import "./home.css";

export function appHome(element: HTMLElement) {
  const homeInnerHTML = `
        <div>
            component home
        </div>
    `;

  element.innerHTML = homeInnerHTML;
}
