import { showSpinner, hideSpinner } from "../../composables/useSpinner";

export function appForm(element: HTMLFormElement) {
  const formInnerHTML = `
    <label for="prompt">Prompt</label>
    <textarea name="prompt" maxlength="160"></textarea>
    <button type="submit">Dream</button>
  `;

  element.innerHTML = formInnerHTML;

  element.addEventListener("submit", async (event: SubmitEvent) => {
    event.preventDefault();

    showSpinner();

    const baseUrl = "https://dreamify-api.netlify.app/";

    const data = new FormData(element);

    const response = await fetch(baseUrl + ".netlify/functions/api/v1/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: data.get("prompt") }),
    });

    if (response.ok) {
      const { image } = await response.json();

      const wrap = document.querySelector<HTMLFormElement>("#home__container")!;

      wrap.innerHTML = `<img src="${image}" alt="" />`;
    } else {
      const err = await response.text();
      alert(err);
    }

    hideSpinner();
  });
}
