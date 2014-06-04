// Generated on 2014-03-11 using generator-webapp 0.4.8
'use strict';


module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({
        // Project settings
        config: {
            app: 'app',
            dist: 'dist'
        },

        replace: {
            /**
             * Clean generated css files :
             * - clean the :after:before generated when override from icons
             */
            'css-clean': {
                src: ['dist/**/*.css'],
                overwrite: true,
                replacements: [
                    // cleanup :after:before class caused by icon mixin
                    { from: /:after:before/g, to: ':after'},
                    // clean -less-property: property;
                    { from: /\s*\-less-property:\s*property;/g, to: ''}
                ]
            }
        },

        webfont: {
            icons: {
                src: '<%= config.app %>/images/icons-svg/*.svg',
                dest: '<%= config.app %>/fonts',
                destCss: '<%= config.app %>/styles/fonts',
                options: {
                    baseClass: "icon",
                    classPrefix: "icon_",
                    hashes: false,
                    destHtml: '<%= config.app %>/images/icons-svg',
                    htmlDemoTemplate: './tools/icons-webfont-templates/_template.html',
                    template: './tools/icons-webfont-templates/_template.css',
                    stylesheet: 'less'
                }
            }
        }
    });

};
