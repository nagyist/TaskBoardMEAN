-- activity.sql
CREATE TABLE `activity` 
( 
	id INTEGER PRIMARY KEY AUTOINCREMENT , 
	`comment` TEXT, 
	`old_value` TEXT, 
	`new_value` TEXT, 
	`timestamp` INTEGER, 
	`item_id` INTEGER
);