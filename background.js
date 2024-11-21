import {
  COMMENT_TYPES,
  commentsContextMenuStructure,
} from "./conventionalComments.js";
import {
  reviewerChecklistContextMenu,
  idChecklistMapping,
} from "./reviewerChecklist/reviewerChecklist.js";

chrome.runtime.onInstalled.addListener(async () => {
  createContextMenus(commentsContextMenuStructure);
  createContextMenus(reviewerChecklistContextMenu);
});

chrome.contextMenus.onClicked.addListener((info) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const commentType = COMMENT_TYPES.find((t) => t.id === info.menuItemId);
    commentType !== undefined &&
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "enter_text",
        text: commentType.text,
      });
    idChecklistMapping[info.menuItemId] !== undefined &&
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "enter_text",
        text: idChecklistMapping[info.menuItemId],
      });
  });
});

function createContextMenus({ title, id, children, parentId }) {
  chrome.contextMenus.create({
    id: id,
    title: title,
    contexts: ["editable"],
    documentUrlPatterns: ["*://dev.azure.com/*"],
    ...(parentId && { parentId }),
  });
  if (!children) return;
  for (const childMenu of children) {
    createContextMenus({
      title: childMenu.title,
      id: childMenu.id,
      children: childMenu.children,
      parentId: id,
    });
  }
}
