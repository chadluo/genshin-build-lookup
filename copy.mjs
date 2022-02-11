import * as fs from "fs";

const output = "./public/";

fs.copyFile("./src/index.html", `${output}index.html`, log);
fs.copyFile("./src/style.css", `${output}style.css`, log);
fs.copyFile("./CNAME", `${output}CNAME`, log);

function log(e) {
  if (e) {
    console.error(e);
  }
}
