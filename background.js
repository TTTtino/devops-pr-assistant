const COMMENT_TYPES = [
  {
    id: "praise",
    title: "👏 praise",
    text: "**👏 praise:** ",
  },
  {
    id: "nitpick",
    title: "🤓 nitpick",
    text: "**🤓 nitpick:** ",
  },
  {
    id: "suggestion",
    title: "🎯 suggestion",
    text: "**🎯 suggestion:** ",
  },
  {
    id: "issue",
    title: "🔨 issue",
    text: "**🔨 issue:** ",
  },
  {
    id: "question",
    title: "❔question",
    text: "**❔question:** ",
  },
  {
    id: "thought",
    title: "💭 thought",
    text: "**💭 thought:** ",
  },
  {
    id: "chore",
    title: "💣 chore",
    text: "**💣 chore:** ",
  },
];

chrome.runtime.onInstalled.addListener(async () => {
  chrome.contextMenus.create({
    id: "comment-types",
    title: "Comment Types",
    contexts: ["editable"],
  });
  for (const commentType of COMMENT_TYPES) {
    chrome.contextMenus.create({
      id: commentType.id,
      title: commentType.title,
      contexts: ["editable"],
      parentId: "comment-types",
    });
  }
});

chrome.contextMenus.onClicked.addListener((info) => {
  const commentType = COMMENT_TYPES.find((t) => t.id === info.menuItemId);
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "enter_comment",
      comment: commentType.text,
    });
  });
});
