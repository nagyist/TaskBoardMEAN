// common.js
// common routines used by all controllers

module.exports.sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

