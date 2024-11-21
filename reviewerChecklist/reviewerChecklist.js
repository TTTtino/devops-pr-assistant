import {
  APP_REVIEW_BUG,
  APP_REVIEW_US,
  PACKAGE_REVIEW_NEW,
  PACKAGE_REVIEW_BUG,
  PACKAGE_REVIEW_CHANGE,
} from "./checklists.js";

export const CHECKLIST_APP_USER_STORY_ID = "app-user-story";
export const CHECKLIST_APP_BUG_ID = "app-bug";
export const CHECKLIST_PACKAGE_NEW_COMP_ID = "package-new-component";
export const CHECKLIST_PACKAGE_CHANGE_COMP_ID = "package-change-component";
export const CHECKLIST_PACKAGE_BUG_FIX_ID = "package-bug-fix";

export const reviewerChecklistContextMenu = {
  id: "reviewer-checklist",
  title: "✅ Reviewer Checklist",
  children: [
    {
      id: "app",
      title: "App",
      children: [
        { title: "User story", id: CHECKLIST_APP_USER_STORY_ID },
        { title: "Bug", id: CHECKLIST_APP_BUG_ID },
      ],
    },
    {
      id: "package",
      title: "Packages",
      children: [
        { title: "New component", id: CHECKLIST_PACKAGE_NEW_COMP_ID },
        { title: "Changed component", id: CHECKLIST_PACKAGE_CHANGE_COMP_ID },
        { title: "Bug fix", id: CHECKLIST_PACKAGE_BUG_FIX_ID },
      ],
    },
  ],
};

export const idChecklistMapping = {
  [CHECKLIST_APP_USER_STORY_ID]: APP_REVIEW_US,
  [CHECKLIST_APP_BUG_ID]: APP_REVIEW_BUG,
  [CHECKLIST_PACKAGE_NEW_COMP_ID]: PACKAGE_REVIEW_NEW,
  [CHECKLIST_PACKAGE_CHANGE_COMP_ID]: PACKAGE_REVIEW_CHANGE,
  [CHECKLIST_PACKAGE_BUG_FIX_ID]: PACKAGE_REVIEW_BUG,
};
