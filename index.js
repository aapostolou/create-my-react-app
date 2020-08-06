#!/usr/bin/env node

"use strict";

const fs = require("fs");
const ncp = require("ncp").ncp;
const path = require("path");
const cp = require("child_process");

const download = require("download");

const unzipper = require("unzipper");

const url =
  "https://github.com/aapostolou/create-my-react-app/archive/master.zip";
const fname = "create-my-react-app-master";

const rootDir = process.cwd();

console.log(rootDir);

console.log();
console.log("===========================");
console.log();

// Not eneough arguments
if (process.argv.length < 3) {
  console.log(" Please specify 'app name'");
} // Thats the spot !
else if (process.argv.length < 4) {
  const targetDir = path.join(rootDir, process.argv[2]);

  // Check if folder exists
  if (!fs.existsSync(targetDir)) {
    console.log(` Doing Magic Stuff ...`);

    (async () => {
      // Download files
      await download(url, rootDir, { filename: "temp.zip" });

      // Unzip them
      await fs.createReadStream(`${rootDir}/temp.zip`).pipe(
        unzipper.Extract({ path: `${rootDir}` }).on("finish", (data) => {
          setTimeout(() => {
            // Rename to target dir name
            fs.rename(
              `${rootDir}/create-my-react-app-master`,
              targetDir,
              (err) => {
                if (err) throw err;

                // Delete Zip
                fs.unlinkSync(`${rootDir}/temp.zip`, (err2) => {
                  if (err2) throw err2;
                });
                // Delete .gitignore
                fs.unlinkSync(`${targetDir}/.gitignore`, (err2) => {
                  if (err2) throw err2;
                });
                //Delete index.js
                fs.unlinkSync(`${targetDir}/index.js`, (err2) => {
                  if (err2) throw err2;
                });
                // Delete package.json
                fs.unlinkSync(`${targetDir}/package.json`, (err2) => {
                  if (err2) throw err2;
                });

                // Moving files around !?!?!
                ncp(`${targetDir}/create-my-react-app`, targetDir, function (
                  err3
                ) {
                  if (err3) throw err3;

                  // Delete the last folder
                  fs.rmdir(
                    `${targetDir}/create-my-react-app`,
                    { recursive: true },
                    (err4) => {
                      if (err4) throw err4;
                    }
                  );
                });
              }
            );
          }, 1000);
        })
      );
    })();
  } else {
    console.log(`Folder ${targetDir} allready exists.`);
  }
} // Too many arguments
else {
  console.log(" Too many arguments :");
  console.log(process.argv.slice(2));
}

console.log();
console.log("===========================");
console.log();
