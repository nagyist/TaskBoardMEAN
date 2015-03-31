var ctrl = require('../controllers/user');

module.exports = function(app) {

	// Validate a user and store token (and return in response).
	app.post('/api/login', ctrl.userLogin);

	// Log a user out
	app.get('/api/logout', ctrl.userLogout);

	// Update the current user's password
	app.put('/api/user/:userId/updatePasswd', ctrl.userUpdatePasswd);

	// Update the current user's username if not taken.
	app.put('/api/user/:userId/updateUsername', ctrl.userUpdateUsername);

	// Update the current user's default board.
	app.put('/api/user/:userId/updateDefaultBoard', ctrl.userUpdateDefaultBoard);

	// Get all user actions
	app.get('/api/user/:userId/actions', ctrl.getUserActions);

	// Get current user
	app.get('/api/user/:userId', ctrl.getCurrentUser);

	// Get all users
	app.get('/api/user', ctrl.getAllUsers);

	// Create a new user
	app.post('/api/user', ctrl.createNewUser);

	// Update a user
	app.put('/api/user/:userId', ctrl.updateUser);

	// Delete a user
	app.delete('/api/user/:userId', ctrl.deleteUser);	

}