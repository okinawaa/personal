const path = require("path");

const buildPrettierCommand = () => `yarn prettier --write .`;

const buildEslintCommand = filenames =>
  `yarn lint --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildPrettierCommand, buildEslintCommand]
  // 他に実行したいコマンドをここに書く
};
