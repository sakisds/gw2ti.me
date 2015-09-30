module.exports = function (grunt) {
    /**
     * Configuration
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jade: {
            dev: {
                files: {
                    'dist/index.html': 'src/index.jade'
                }
            }
        },
        clean: ['dist/'],
        less: {
            dev: {
                files: {
                    'dist/style.css': 'src/less/main.less'
                }
            }
        },
        autoprefixer: {
            dev: {
                files: {
                    'dist/style.css': 'dist/style.css'
                }
            }
        },
        cssmin: {
            release: {
                files: {
                    'dist/style.css': 'dist/style.css'
                }
            }
        },
        copy: {
            dev: {
                files: [
                    // Images
                    {expand: true, cwd: 'src/img/', src: ['**'], dest: 'dist/img/'},
                    // Favicon
                    {expand: true, cwd: 'src/favicon/', src: ['**'], dest: 'dist/'},
                    // Bower Components
                    // - Angular
                    {expand: true, cwd: 'bower_components/angular/', src: 'angular.js', dest: 'dist/js/'},
                    // - ngDialog
                    {expand: true, cwd: 'bower_components/ngDialog/js', src: 'ngDialog.js', dest: 'dist/js/'},
                    // - angular-hovercard
                    {
                        expand: true,
                        cwd: 'bower_components/angular-tooltips/dist/',
                        src: 'angular-tooltips.min.js',
                        dest: 'dist/js/'
                    }
                ]
            }
        },
        uglify: {
            dev: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false
                },
                src: 'src/**/*.js',
                dest: 'dist/js/app.js'
            },
            release: {
                options: {
                    beautify: false,
                    mangle: false,
                    compress: true
                },
                src: 'src/**/*.js',
                dest: 'dist/js/app.js'
            }
        }
    });

    /**
     * Plugins
     */
    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-autoprefixer");
    grunt.loadNpmTasks("grunt-contrib-cssmin");

    /**
     * Tasks
     */
    grunt.registerTask('dev-style', [
        'less:dev',
        'autoprefixer:dev'
    ]);

    grunt.registerTask('dev-page', [
        'jade:dev',
        'dev-style'
    ]);

    grunt.registerTask('dev', [
        'clean',
        'copy',
        'dev-page',
        'uglify:dev'
    ]);

    grunt.registerTask('release', [
        'clean',
        'copy',
        'dev-page',
        'cssmin',
        'uglify:release'
    ]);
};