--user.sql

CREATE TABLE `user` 
( 
	id INTEGER PRIMARY KEY AUTOINCREMENT , 
	`username` TEXT, 
	`is_admin` INTEGER, 
	`logins` INTEGER, 
	`last_login` INTEGER, 
	`default_board` INTEGER, 
	`salt` TEXT, 
	`password` TEXT, 
	`token` TEXT
);
