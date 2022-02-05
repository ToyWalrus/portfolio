const path = require('path');

module.exports = {
	transpileDependencies: ['vuetify'],
	pages: {
		index: {
			entry: path.resolve(__dirname, 'src', 'main.js'),
			template: path.resolve(__dirname, 'public', 'index.html'),
			title: "Trevor's Portfolio Site",
		},
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
	},
};
