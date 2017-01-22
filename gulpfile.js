"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var server = require("browser-sync").create();
var run = require("run-sequence");

gulp.task("serve", function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("css/*").on("change", server.reload);
  gulp.watch("*.html").on("change", server.reload);
});
