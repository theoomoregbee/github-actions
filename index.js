const fileChanges = require("@trilom/file-changes-action/dist/index.js");

fileChanges().then((resp) => {
  console.log("result of file changes", resp);
  console.log("Done running action");
});
