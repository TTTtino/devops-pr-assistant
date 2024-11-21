export const COMMENT_TYPES = [
  {
    id: "praise",
    title: "👏 Praise",
    text: "**👏 Praise:** ",
  },
  {
    id: "nitpick",
    title: "🤓 Nitpick",
    text: "**🤓 Nitpick:** ",
  },
  {
    id: "suggestion",
    title: "🎯 Suggestion",
    text: "**🎯 Suggestion:** ",
  },
  {
    id: "issue",
    title: "🔨 Issue",
    text: "**🔨 Issue:** ",
  },
  {
    id: "question",
    title: "❔Question",
    text: "**❔Question:** ",
  },
  {
    id: "thought",
    title: "💭 Thought",
    text: "**💭 Thought:** ",
  },
  {
    id: "chore",
    title: "💣 Chore",
    text: "**💣 Chore:** ",
  },
];

export const commentsContextMenuStructure = {
  id: "comment-types",
  title: "💬 Comment Types",
  children: COMMENT_TYPES,
};
