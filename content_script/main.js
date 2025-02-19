chrome.runtime.onMessage.addListener(function (request) {
  if (request.action === "enter_text") {
    enterTextIntoFocusedTextbox(request.text);
  }
});

window.addEventListener("input", function (event) {
  if (!event.data || event.data.length > 1) return;

  const lastChar = event.data;
  const value = event.target.value;
  const caratPos = event.target.selectionStart;

  if (lastChar === " " && caratPos >= 4) {
    const comment = getCommentFromCommand(value.slice(caratPos - 4, caratPos));
    if (comment) {
      enterTextIntoFocusedTextbox(comment, [caratPos - 4, caratPos]);
    }
  }
});

function enterTextIntoFocusedTextbox(text, replace) {
  const focusedElement = document.activeElement;
  const caratPos = focusedElement.selectionStart;
  if (
    focusedElement &&
    (focusedElement.tagName === "INPUT" ||
      focusedElement.tagName === "TEXTAREA")
  ) {
    let newVal = focusedElement.value;
    if (replace && replace.length === 2) {
      newVal = newVal.slice(0, replace[0]) + text + newVal.slice(replace[1]);
    } else {
      newVal = newVal.slice(0, caratPos) + text + newVal.slice(caratPos);
    }

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

function getCommentFromCommand(commandText) {
  return COMMENT_COMMANDS.find((t) => t.command + "  " === commandText)?.text;
}
