module.exports = function(grunt) {

    grunt.initConfig({
        pkg: '<json:package.json>',

        // clean : {
        //     "dist" : "dist/"
        // },
        
        less: {
          development: {
            options: {
              paths: ["src/css"]
            },
            files: {
              "css/admin/main.css": "css/admin/main.less",
              "css/site/main.css": "css/site/main.less"
            }
          },
          production: {
            options: {
              paths: ["src/css"],
              yuicompress: true
            },
            files: {
              "css/admin/main.min.css": "css/admin/main.less",
              "css/site/main.min.css": "css/site/main.less"
            }
          }
        }

        // concat: {
        //   options: {
        //     separator: ';'
        //   },
        //   dist: {
        //     src: [
        //     'src/js/**'
        //     ],
        //     dest: 'dist/js/main.js'
        //   }
        // },

        // uglify: {
        //   options: {
        //     banner: '/*! PLUI <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        //   },
        //   dist: {
        //     files: {
        //       'dist/js/main.min.js': ['<%= concat.dist.dest %>']
        //     }
        //   }
        // },

        // copy: {
        //   main: {
        //     files: [
        //       {expand: true, flatten: true, src: ['src/css/img/*'], dest: 'dist/css/img/', filter: 'isFile'},
        //       {expand: true, flatten: true, src: ['src/css/fonts/**'], dest: 'dist/css/fonts/'},
        //       {expand: true, flatten: true, src: ['src/js/*.swf'], dest: 'dist/js/'},
        //       {expand: true, flatten: true, src: ['src/js/*.gif'], dest: 'dist/js/'},
        //       {expand: true, flatten: true, src: ['src/js/*.xap'], dest: 'dist/js/'}
        //     ]
        //   }
        // }
    });

  grunt.loadNpmTasks("grunt-contrib-less");
  // grunt.loadNpmTasks("grunt-contrib-clean");
  // grunt.loadNpmTasks("grunt-contrib-copy");
  // grunt.loadNpmTasks("grunt-contrib-uglify");
  // grunt.loadNpmTasks("grunt-contrib-concat");

  grunt.registerTask('default', ['less']);

};
