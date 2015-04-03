-- board_user.sql

CREATE TABLE `board_user` 
( 
	`id` INTEGER PRIMARY KEY AUTOINCREMENT  ,
	`user_id` INTEGER,
	`board_id` INTEGER
);