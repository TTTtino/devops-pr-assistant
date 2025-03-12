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

window.addEventListener("keyup", function (e) {
  if (e.target.tagName.toLowerCase() !== "input" && e.target.tagName.toLowerCase() !== "textarea") return;

  // Strikethrough the current line or the current checklist item
  if (e.ctrlKey && e.code === "Slash") {
    let str = e.target.value;
    const index = e.target.selectionStart;
    const left = str.lastIndexOf("\n", index - 1);
    const leftCR = str.lastIndexOf("\r\n", index - 2);
    const leftCB = str.lastIndexOf("- [ ] ", index - 6);
    const right = str.indexOf("\n", index);
    const rightCR = str.indexOf("\r\n", index);

    const start = ((leftCR !== -1 && leftCB > leftCR) || (left !== -1 && leftCB > left)) ? leftCB + 5 : ( leftCR !== -1 ? leftCR : (left === -1 ? 0 : left))
    const end = rightCR !== -1 ? rightCR : (right === -1 ? str.length : right);

    const newVal = [str.slice(0, start + 1), '~~', str.slice(start + 1, end), '~~', str.slice(end)].join('');


    e.target.value = newVal;
    const event = new InputEvent("input", {
      data: newVal,
      bubbles: true,
    });
    e.target.dispatchEvent(event);

    let newIndex = index + 2;
    if (index === start ) newIndex = index;
    e.target.setSelectionRange(newIndex, newIndex);
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
