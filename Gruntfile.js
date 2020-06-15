module.exports = function (grunt) {

  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {},
    sass: {
      options: {
        includePaths: ['.', 'src'],
        sourceMap: true
      },
      dev: {
        files: {
          'dist/css/main.css': 'src/main.scss',
          'dist/css/main.min.css': 'src/main.scss'
        }
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'dist/css/main.min.css': 'src/main.scss',
        }
      }
    },
    webfont: {
      icons: {
        src: 'src/icons/*.svg',
        dest: 'src/core',
        options: {
          font: 'icon-font',
          optimize: false,
          engine: 'node',
          codepointsFile: 'icon-mapping.json',
          normalize: true,
          startCodepoint: 0xf000,
          types: 'woff2,woff',
          embed: 'woff2,woff',
          htmlDemo: false,
          fontPathVariables: false,
          template: 'vendor/icon-fonts.template.css',
          templateOptions: {
            fontPathVariables: false
          },
          stylesheets: ['scss']
        }
      }
    },
    watch: {
      css: {
        files: ['src/**/*.scss'],
        tasks: ['sass:dev']
      },
    }
  });

  // Load grunt tasks from NPM packages.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Register grunt tasks
  grunt.registerTask('default', ['webfont', 'sass:dev', 'sass:dist']);
};
