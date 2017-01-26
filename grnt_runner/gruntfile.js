module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      js: {
        src: ['src/js/*.js'],
        dest: 'dist/js/script.js',
      },
      css: {
        src: ['src/css/*.css'],
        dest: 'dist/css/style.css',
      },
    },
    uglify: {
      dist: {
        files: {
          'dist/js/script.min.js' : ['dist/js/script.js']
        } 
      }
    },
    cssmin: {
      dist: {
        files: {
          'dist/css/style.min.css' : ['dist/css/style.css']
        } 
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};