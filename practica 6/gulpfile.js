
//se usa para crear las tareas (funciones de js)

const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));         
const plumber = require ('gulp-plumber');                  

function css (done) {
    src("src/scss/**/**.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest("build/css"))

    done();
}

//Agregar un watch
function dev(done) {

    watch('src/scss/**/*.scss', css);
   
 
    done();
}


exports.css = css;
exports.dev = dev;