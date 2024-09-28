/**
 * @license
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * All contributors who participated in development before September 26, 2024, retain full copyright over their contributions.
 * These contributors are granted the right, under a Contributor License Agreement (CLA), to use, modify, and distribute their contributions
 * under additional or alternative licensing terms of their choosing, while the project as a whole remains licensed under the MPL 2.0.
 *
 * Any contributions made after September 26, 2024, are subject to the terms of the MPL 2.0 and are licensed accordingly.
 */

const fs = require("fs");
const path = require("path");

const LICENSE_TEXT  = `/**
 * @license
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 * 
 * All contributors who participated in development before September 26, 2024, retain full copyright over their contributions.
 * These contributors are granted the right, under a Contributor License Agreement (CLA), to use, modify, and distribute their contributions 
 * under additional or alternative licensing terms of their choosing, while the project as a whole remains licensed under the MPL 2.0.
 * 
 * Any contributions made after September 26, 2024, are subject to the terms of the MPL 2.0 and are licensed accordingly.
 */
`;

const UNIQUE_LICENSE_STRING = "This Source Code Form";
const TARGET_EXTENSIONS = [".ts", ".tsx"];
const MAX_FILE_CONTENT_PREVIEW = 100;

function hasLicense(fileContent) {
  return fileContent.slice(0, MAX_FILE_CONTENT_PREVIEW).includes(UNIQUE_LICENSE_STRING);
}

function prependLicense(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, "utf8").trim();

    if (!hasLicense(fileContent)) {
      const updatedContent = LICENSE_TEXT + "\n" + fileContent;
      fs.writeFileSync(filePath, updatedContent, "utf8");
      console.log(`License added to: ${filePath}`);
    } else {
      console.log(`License already present in: ${filePath}`);
    }
  } catch (err) {
    console.error(`Error processing file: ${filePath} - ${err.message}`);
  }
}

function processDirectory(directory) {
  try {
    const items = fs.readdirSync(directory);

    items.forEach((item) => {
      const itemPath = path.join(directory, item);
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory() && item !== "node_modules") {
        processDirectory(itemPath);
      } else if (TARGET_EXTENSIONS.some(ext => item.endsWith(ext))) {
        prependLicense(itemPath);
      }
    });
  } catch (err) {
    console.error(`Error processing directory: ${directory} - ${err.message}`);
  }
}

function main() {
  const srcDirectory = path.join(__dirname, "src");
  processDirectory(srcDirectory);
}

main();