const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");
const babel = require("gulp-babel");

function buildStyles() {
   return src("scss/**/*.scss")
      .pipe(sass({
         outputStyle: "expanded"
      }))
      .pipe(purgecss({ content: ["*.html"] }))
      .pipe(dest("css"));
};

function buildJavascript() {
   return src("./js/**/*.js")    //**alle undermapper - *.js alle js filer*/
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(dest("babel-js"));
}

function watchTask() {
   watch(["scss/**/*.scss", "*.html"], series(buildStyles, buildJavascript));
}

exports.default = series(buildJavascript, buildStyles, watchTask);