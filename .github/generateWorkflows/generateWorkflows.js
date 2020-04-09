const fs = require("fs-extra");
const jsYaml = require("js-yaml");
const { resolve } = require("path");

const workflowsDir = resolve(__dirname, "..", "workflows");

["master", "tag"].forEach(workflow => {
  fs.writeFileSync(
    resolve(workflowsDir, `${workflow}.yml`),
    jsYaml.safeDump(require(`./${workflow}`)),
    { encoding: "utf8" },
  );
});
