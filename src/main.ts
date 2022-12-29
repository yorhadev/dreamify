import "./assets/style.css";
import { appHome } from "./pages/home/home";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main id="main"></main>
`;

appHome(document.querySelector<HTMLElement>("#main")!);
