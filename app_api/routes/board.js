var ctrl = require('../controllers/board');

module.exports = function(app) {

	// Get the list of active boards
	app.get('/api/boards', ctrl.getBoards);

	// Create new board.
	app.post('/api/boards', ctrl.createBoard);

	// Update existing board.
	app.put('/api/boards/:boardId', ctrl.updateBoard);

	// Remove a board
	app.delete('/api/boards/:boardId', ctrl.deleteBoard);


	// Board Autoactions
	// Create an autoaction
	app.post('/api/boards/:boardId/autoaction', ctrl.createAutoaction);

	// Get autoactions
	app.get('/api/boards/:boardId/autoaction', ctrl.getAutoactions);

	// Delete Autoaction
	app.delete('/api/boards/:boardId/autoaction/:autoactionId', ctrl.deleteAutoaction);

	// Toggle the expand/collapse state of a lane for the current user.
	app.post('/api/lanes/:laneId/toggle', ctrl.laneToggle);

}