export function renderLoading(
  button,
  isLoading,
  buttonText = button.textContent,
  loadingText = `${buttonText.slice(0, -1)}ing...`
) {
  if (isLoading) {
    button.dataset.originalText = button.textContent;
    button.textContent = loadingText;
  } else {
    button.textContent = button.dataset.originalText || buttonText;
  }
}
