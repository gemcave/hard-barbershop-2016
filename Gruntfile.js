module.exports = funtion(grunt) {
  grunt.loadNpmTasks("grunt-contrib-less")

  grunt.initConfig({
    less: {
      style: {
        "css/style.css": "less/style.less"
      }
    }

  });

};
