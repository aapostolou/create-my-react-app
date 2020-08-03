#!/usr/bin/env node

"use strict";

const fs = require("fs");
const path = require("path");
const cp = require("child_process");

const download = require("download");

const unzipper = require("unzipper");

const url = "https://github.com/aapostolou/React-Redux/archive/master.zip";

console.log();
console.log("===========================");

// Not eneough arguments
if (process.argv.length < 3) {
  console.log(" Please specify 'app name'");
} // Thats the spot !
else if (process.argv.length < 4) {
  const targetDir = path.join(__dirname, process.argv[2]);

  // Check if folder exists
  if (!fs.existsSync(targetDir)) {
    console.log(` Doing Magic Stuff ...`);

    (async () => {
      // Download files
      await download(url, __dirname, { filename: "temp.zip" });

      // Unzip them
      await fs.createReadStream(`${__dirname}/temp.zip`).pipe(
        unzipper.Extract({ path: `${__dirname}` }).on("finish", (data) => {
          setTimeout(
            () =>
              // Rename to target dir name
              fs.rename(`${__dirname}/React-Redux-master`, targetDir, (err) => {
                if (err) throw err;

                // Delete Zip
                fs.unlink(`${__dirname}/temp.zip`, (err2) => {
                  if (err2) throw err2;
                });
              }),
            1000
          );
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

console.log("===========================");
console.log();
