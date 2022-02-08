import * as fs from "fs";

fs.copyFile("./src/index.html", "./public/index.html", log);
fs.copyFile("./src/style.css", "./public/style.css", log);

function log(e) {
  if (e) {
    console.error(e);
  }
}
