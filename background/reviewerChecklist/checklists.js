export const APP_REVIEW_US =
  "## PR\n" +
  "- [ ] PR has an accurate and identifiable title\n" +
  "- [ ] PR description describes what has changed and in which areas.\n" +
  "\n" +
  "## Work Item\n" +
  "- [ ] Work item has a clear title suitable for inclusion on release notes.\n" +
  "- [ ] Documentation field is set correctly.\n" +
  "- [ ] Work item well defined acceptance criteria.\n" +
  "- [ ] Iteration and Area Paths are correct.\n" +
  "- [ ] 'Spec Template' has been used on the US and filled in with details on what has changed.\n" +
  "- [ ] Post Review has been done in the User Story Review channel in Teams and has been recorded.\n" +
  "- [ ] User story state is set to 'Resolved'.\n" +
  "\n" +
  "## Functionality\n" +
  "- [ ] Check code structure and logic / syntax.\n" +
  "- [ ] All elements of the US visuals in all themes match the mock/designs.\n" +
  "- [ ] Changes meet the Acceptance Criteria described on the US.\n" +
  "\n" +
  "## Sign-off checks\n" +
  "- [ ] Security implications have been considered and signed off e.g. new packages added, new personal info accessible etc.\n" +
  "- [ ] Any new packages have been audited and been discussed.\n" +
  "- [ ] Any breaking changes have been documented/discussed.";

export const APP_REVIEW_BUG =
  "## PR\n" +
  "- [ ] PR has an accurate and identifiable title?\n" +
  "- [ ] PR description clearly describes what has changed and in which areas.\n" +
  "\n" +
  "## Work Item\n" +
  "- [ ] Work item has a clear title suitable for inclusion on release notes.\n" +
  "- [ ] Iteration and Area Paths are correct.\n" +
  "- [ ] Work item state is left as 'Active'.\n" +
  "- [ ] Duplication plan is easy to follow.\n" +
  "- [ ] Documentation field is set correctly.\n" +
  "\n" +
  "## Functionality\n" +
  "- [ ] Check code structure and logic / syntax.\n" +
  "- [ ] Code changes meet the expected result described.\n" +
  "- [ ] Visuals for all themes still match the design/mocks.\n" +
  "\n" +
  "## Sign-off checks\n" +
  "- [ ] Any breaking changes have been documented/discussed.\n" +
  "- [ ] Any new packages have been audited and been discussed.\n" +
  "- [ ] Security implications have been considered and signed off e.g. new packages added, new personal info accessible etc.";

export const PACKAGE_REVIEW_NEW =
  "- [ ] Component is valid as a new component\n" +
  "- [ ] Component is added to the export file\n" +
  "- [ ] Component has types defined\n" +
  "- [ ] Component imports React\n" +
  "- [ ] Component documentation is added and is sufficient\n" +
  "- [ ] Check for console.log and debuggers\n" +
  "- [ ] Check code structure and logic\n" +
  "- [ ] Component matches signed off design\n" +
  "- [ ] Component works in both light and dark theme\n" +
  "- [ ] Component works on mobile\n" +
  "- [ ] PR Template is used\n" +
  "- [ ] Controls are added for relevant props\n" +
  "- [ ] Unit tests are written and added";

export const PACKAGE_REVIEW_CHANGE =
  "- [ ] Component change is valid and not additional functionality\n" +
  "- [ ] Component documentation is up to date with any changes\n" +
  "- [ ] Controls and types are added for relevant props\n" +
  "- [ ] Check for console.log and debuggers\n" +
  "- [ ] Check code structure and logic\n" +
  "- [ ] Component matches signed off design\n" +
  "- [ ] Component works in both light and dark theme\n" +
  "- [ ] Component works on mobile\n" +
  "- [ ] PR Template is used\n" +
  "- [ ] Unit tests pass\n" +
  "- [ ] No breaking changes affecting Rep Gen\n" +
  "- [ ] No breaking changes affecting Patient Portal\n" +
  "- [ ] No breaking changes affecting Medical Records\n" +
  "- [ ] No breaking changes affecting Compucare Homepage\n" +
  "- [ ] No breaking changes affecting Clinician Portal";

export const PACKAGE_REVIEW_BUG =
  "- [ ] Component documentation is up to date with any changes\n" +
  "- [ ] Controls are added for relevant props\n" +
  "- [ ] Check for console.log and debuggers\n" +
  "- [ ] Check code structure and logic\n" +
  "- [ ] Component matches signed off design\n" +
  "- [ ] Component works in both light and dark theme\n" +
  "- [ ] Component works on mobile\n" +
  "- [ ] PR Template is used\n" +
  "- [ ] The code changes meet the expected result described on the bug\n" +
  "- [ ] Unit tests pass";
