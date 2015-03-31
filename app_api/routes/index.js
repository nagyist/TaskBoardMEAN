
/*
 * Application Routes
 */

module.exports = function(app) {
	require('./board')(app);
	require('./item')(app);
	require('./user')(app);
}