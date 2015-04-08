// Gruntfile.js

module.exports = function (grunt) {

	grunt.initConfig({
		jshint: {
			server: ['Gruntfile.js', './app_api/**/*.js']
		},

		nodemon: {
			dev: {
				script: 'app.js'
			}
		},
		watch: {
			livereload: {
				options: {
					livereload: true
				}
			}
		},
		concurrent: {
			dev: {
				tasks: ['nodemon', 'watch']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['jshint', 'watch', 'nodemon', 'concurrent']); // register a default task alias
};