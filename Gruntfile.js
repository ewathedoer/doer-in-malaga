module.exports = function(grunt) {

  grunt.initConfig({
    cssmin: {
      css: {
        files: {
          'build/css/styles.min.css': ['css/normalize.css', 'css/pure-min.js', 'css/grids-responsive-min.css', 'css/font-awesome.min.css', 'css/animate.css', 'css/main.css']
        }
      }
    },
    uglify: {
      js: {
        files: {
          'build/js/scripts.min.js': ['js/jquery.min.js', 'js/main.js']
        }
      }
    },
    watch: {
      css: {
        files: ['css/**/*.css'],
        tasks: ['cssmin'],
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['uglify'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['cssmin', 'uglify']);

};
