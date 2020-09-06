const fileChanges = require("@trilom/file-changes-action");

fileChanges().then((resp) => {
  console.log("result of file changes", resp);
  console.log("Done running action");
});
