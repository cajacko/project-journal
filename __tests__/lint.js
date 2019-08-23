var vfile = require("to-vfile");
var report = require("vfile-reporter");
var { join } = require("path");
var remark = require("remark");
var links = require("remark-validate-links");
var glob = require("glob-fs")({ gitignore: true });
var files = glob.readdirSync("**/*.md");

const promises = files.map(path => {
  return new Promise((resolve, reject) => {
    const fullPath = join(__dirname, "../", path);

    remark()
      .use(links)
      .process(vfile.readSync(fullPath), (err, file) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(file.messages.length ? [file, undefined] : [undefined, file]);
      });
  });
});

Promise.all(promises)
  .then(results => {
    let shouldError = false;

    results.forEach(([err, file]) => {
      if (err) {
        shouldError = true;
        console.error(report(err));
      }
    });

    if (shouldError)
      throw new Error("There was an error, check logs above for more details");
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
