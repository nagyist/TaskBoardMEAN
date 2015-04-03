-- common.js
-- common routines used by all controllers

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
}

