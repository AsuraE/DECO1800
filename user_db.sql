CREATE TABLE `users`
(
    `email`              VARCHAR(255) NOT NULL,
    `username`           VARCHAR(255) NOT NULL ,
    `password`           VARCHAR(255) NOT NULL ,
    `time` DATETIME NOT NULL,
    `attempts` INT NOT NULL,
    `mem_times_played`   INT NOT NULL ,
    `mem_average_time`   INT NOT NULL ,
    `mem_best_time`      INT NOT NULL ,
    `quiz_times_played`  INT NOT NULL ,
    `quiz_average_score` FLOAT NOT NULL ,
    `quiz_best_score`    INT NOT NULL ,
    `languages_visited`  INT NOT NULL ,

    PRIMARY KEY (`email`)
);