var liveServer = require("live-server");

var params = {
	port: 8181,
	ignore: './',
	ignorePattern: './'
};
liveServer.start(params);