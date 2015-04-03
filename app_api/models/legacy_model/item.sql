-- item.sql

CREATE TABLE `item` 
( 
	`id` INTEGER PRIMARY KEY AUTOINCREMENT  ,
	`title` TEXT,
	`description` TEXT,
	`assignee` INTEGER,
	`category` INTEGER,
	`color` TEXT,
	`due_date` INTEGER,
	`points` INTEGER,
	`position` INTEGER,
	`lane_id` INTEGER
);