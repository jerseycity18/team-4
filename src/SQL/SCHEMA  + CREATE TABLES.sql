CREATE DATABASE `team4` /*!40100 DEFAULT CHARACTER SET latin1 */$$

CREATE TABLE `book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1$$

delimiter $$delimiter $$

CREATE TABLE `buddy` (
  `buddy_id` int(11) DEFAULT NULL,
  `member_id` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1$$

delimiter $$

CREATE TABLE `buddy_volunteer` (
  `id` int(11) NOT NULL,
  `buddy_id` int(11) DEFAULT NULL,
  `volunteer_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1$$

delimiter $$

CREATE TABLE `location` (
  `zip` int(11) NOT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `county` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `longtitude` varchar(45) DEFAULT NULL,
  `latitude` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`zip`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1$$

delimiter $$

CREATE TABLE `member` (
  `member_id` int(11) NOT NULL,
  `member_fname` varchar(45) DEFAULT NULL,
  `member_lname` varchar(45) DEFAULT NULL,
  `member_email` varchar(45) DEFAULT NULL,
  `member_phone` varchar(45) DEFAULT NULL,
  `member_phone1` varchar(45) DEFAULT NULL,
  `member_phone2` varchar(45) DEFAULT NULL,
  `member_roles` int(11) DEFAULT NULL,
  `member_status` int(11) DEFAULT NULL,
  `member_priority` varchar(45) DEFAULT NULL,
  `member_picture` blob,
  `member_address1` varchar(45) DEFAULT NULL,
  `member_address2` varchar(45) DEFAULT NULL,
  `member_gender` varchar(45) DEFAULT NULL,
  `member_zip` varchar(45) DEFAULT NULL,
  `member_join_date` datetime DEFAULT NULL,
  `member_last_match_date` datetime DEFAULT NULL,
  PRIMARY KEY (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1$$

delimiter $$

CREATE TABLE `member_questions` (
  `member_id` int(11) DEFAULT NULL,
  `question_id` int(11) DEFAULT NULL,
  `member_answers` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1$$

delimiter $$

CREATE TABLE `questions` (
  `Question_id` int(11) NOT NULL,
  `Questions_description` varchar(100) NOT NULL,
  PRIMARY KEY (`Question_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1$$

delimiter $$

CREATE TABLE `ratings` (
  `id` int(11) NOT NULL,
  `buddy_id` varchar(45) DEFAULT NULL,
  `volunteer_id` varchar(45) DEFAULT NULL,
  `ratings` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `description1` varchar(45) DEFAULT NULL,
  `priority` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1$$

delimiter $$

CREATE TABLE `roles` (
  `role_id` int(11) NOT NULL,
  `Type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1$$

delimiter $$

CREATE TABLE `volunteer` (
  `volunteer_id` int(11) NOT NULL,
  `member_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`volunteer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1$$

delimiter $$

CREATE TABLE `buddy_volunteer` (
  `id` int(11) NOT NULL,
  `buddy_id` int(11) DEFAULT NULL,
  `volunteer_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1$$

