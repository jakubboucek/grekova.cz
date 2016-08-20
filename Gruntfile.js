module.exports = function(grunt) {

	grunt.initConfig({
		less: {
			production: {
				options: {
					compress: true,
				},
				files: {
					'www/www/css/style.css': [
						'assets/less/style.less',
					],
				}
			}
		},
		uglify: {
			production: {
				options: {
				},
				files: {
					'www/www/js/app.js': [
						'bower_components/jquery/dist/jquery.js',
						'bower_components/bootstrap/dist/js/bootstrap.js',
						'assets/js/app.js',
					],
				}
			}
		},
		copy: {
			target: {
				expand: true,
				cwd: 'bower_components/bootstrap/fonts/',
				src: ['**'],
				dest: 'www/www/fonts/'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['less', 'uglify', 'copy']);

};