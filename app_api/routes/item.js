var ctrl = require('../controllers/item');

module.exports = function(app) {

	// Create a new item
	app.post('/api/boards/:boardId/item', ctrl.itemCreate);

	// Update an existing item
	app.put('/api/item/:itemId', ctrl.itemUpdate);

	// Delete an item
	app.delete('/api/item/:itemId', ctrl.itemDelete);

	// Update item posistions
	app.put('/api/item/position', ctrl.itemUpdatePos);

	// Add a comment to an item
	app.post('/api/item/:itemId/comment', ctrl.createComment);

	// Update an existing comment
	app.put('/api/comment/:commentId', ctrl.updateComment);

	// Remove a comment from an item
	app.delete('/api/item/:itemId/comment/:commentId', ctrl.removeComment);

	// Add an attachment to an item
	app.post('/api/item/:itemId/attachment', ctrl.createAttachment);

	// Get an item attachment's information
	app.get('/api/item/:itemId/attachement/:attachmentId', ctrl.getAttachment);

	// Remove an attachment from an item
	app.delete('/api/item/:itemId/attachement/:attachementId', ctrl.deleteAttachment);

};