export function showSpinner() {
  const button = document.querySelector<HTMLButtonElement>("button")!;
  button.disabled = true;
  button.innerHTML = 'Dreaming... <span class="spinner">😴</span>';
}

export function hideSpinner() {
  const button = document.querySelector<HTMLButtonElement>("button")!;
  button.disabled = false;
  button.innerHTML = "Dream";
}
