// Copy phone number to the clipboard and show a short confirmation message.
const copyButton = document.querySelector(".copy-button");
const copyStatus = document.querySelector(".copy-status");

function showCopyStatus(message) {
  copyStatus.textContent = message;

  window.setTimeout(() => {
    copyStatus.textContent = "";
  }, 2500);
}

copyButton.addEventListener("click", async () => {
  const phoneNumber = copyButton.dataset.copy;

  try {
    await navigator.clipboard.writeText(phoneNumber);
    showCopyStatus("Phone number copied.");
  } catch (error) {
    showCopyStatus("Copy failed. Please select the phone number manually.");
  }
});
