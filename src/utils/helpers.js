export function renderLoading(
  button,
  isLoading,
  buttonText = "Save",
  loadingText = "Saving..."
) {
  if (isLoading) {
    button.textContent = loadingText;
  } else {
    button.textContent = buttonText;
  }
}
