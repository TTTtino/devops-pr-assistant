chrome.runtime.onMessage.addListener(function (request) {
  if (request.action === "enter_comment") {
    enterTextIntoFocusedTextbox(request.comment);
  }
});

function enterTextIntoFocusedTextbox(text) {
  const focusedElement = document.activeElement;
  if (
    focusedElement &&
    (focusedElement.tagName === "INPUT" ||
      focusedElement.tagName === "TEXTAREA")
  ) {
    let newVal = focusedElement.value;
    if (newVal !== "" && newVal.slice(-1) !== "\n") {
      newVal += "\n";
    }
    newVal += text;
    focusedElement.value = newVal;

    const event = new InputEvent("input", {
      data: newVal,
      bubbles: true,
    });
    focusedElement.dispatchEvent(event);
  } else {
    console.log("No text input or textarea is currently focused.");
  }
}
