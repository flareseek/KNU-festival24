const fs = require("fs");
const path = require("path");

const licenseText = `/**
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

const directoryPath = path.join(__dirname, "src");

function addLicenseToFile(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf8");
  if (!fileContent.startsWith("/* This Source Code Form")) {
    const newContent = licenseText + "\n" + fileContent;
    fs.writeFileSync(filePath, newContent, "utf8");
    console.log(`License added to: ${filePath}`);
  } else {
    console.log(`License already present in: ${filePath}`);
  }
}

function processDirectory(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) return;

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory() && file !== "node_modules") {
        processDirectory(filePath);
      } else if (file.endsWith(".ts") || file.endsWith(".tsx")) {
        addLicenseToFile(filePath);
      }
    });
  });
}

processDirectory(directoryPath);
