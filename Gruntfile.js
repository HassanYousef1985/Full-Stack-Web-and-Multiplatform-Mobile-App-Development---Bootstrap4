
'use strict';

const sass = require('node-sass');

module.exports = function (grunt) {
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt, {
        sprite: 'grunt-spritesmith',
        foo: '@abc/grunt-foo',        // for private modules.
        bar: 'custom/bar.js'          // for custom tasks.
    });

    // Define the configuration for all the tasks
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    implementation: sass,
                    outputStyle: 'compact'
                },
                files: {
                    'css/style.css': 'css/style.scss'
                }
            }
        }
    });

    grunt.registerTask('css', ['sass']);

};