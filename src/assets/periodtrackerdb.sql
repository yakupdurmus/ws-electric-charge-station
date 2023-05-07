-- -------------------------------------------------------------
-- Database: periodtrackerdb
-- Generation Time: 2022-02-15 23:40:16.5680
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE TABLE `log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `activity` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `note` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `title` text,
  `content` text,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `period` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `period_type_id` int NOT NULL,
  `start_date` timestamp NULL DEFAULT NULL,
  `end_date` timestamp NULL DEFAULT NULL,
  `cycle_lenght` int DEFAULT NULL,
  `predicted_start` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `period_symptom` (
  `id` int NOT NULL AUTO_INCREMENT,
  `period_id` int NOT NULL,
  `symptom_id` int NOT NULL,
  `date` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `period_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `period_type_translation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `period_type_id` int DEFAULT NULL,
  `language_code` text NOT NULL,
  `type` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `symptom` (
  `id` int NOT NULL AUTO_INCREMENT,
  `severity` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `symptom_translation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `symptom_id` int NOT NULL,
  `language_code` text NOT NULL,
  `type` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text,
  `user_name` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` text NOT NULL,
  `active_period_type` int NOT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

INSERT INTO `log` (`id`, `user_id`, `activity`) VALUES
(1, 5, 'log test ediliyor');

INSERT INTO `note` (`id`, `user_id`, `title`, `content`, `date`) VALUES
(1, 4, 'Test Titile', 'Test Not', '2022-02-15 23:37:54');

INSERT INTO `period` (`id`, `user_id`, `period_type_id`, `start_date`, `end_date`, `cycle_lenght`, `predicted_start`) VALUES
(1, 4, 1, NULL, NULL, 10, NULL);

INSERT INTO `period_symptom` (`id`, `period_id`, `symptom_id`, `date`) VALUES
(1, 1, 1, '2010-10-20 21:00:00');

INSERT INTO `period_type` (`id`) VALUES
(1),
(2),
(3);

INSERT INTO `period_type_translation` (`id`, `period_type_id`, `language_code`, `type`) VALUES
(1, 1, 'tr', 'Regil'),
(2, 2, 'tr', 'Hamile Kalmak İstiyorum'),
(3, 3, 'tr', 'Hamile');

INSERT INTO `symptom` (`id`, `severity`) VALUES
(1, '1'),
(2, '1'),
(3, '2'),
(4, '2');

INSERT INTO `symptom_translation` (`id`, `symptom_id`, `language_code`, `type`) VALUES
(1, 1, 'tr', 'Öksürük'),
(2, 2, 'tr', 'Mide Bulantısı'),
(3, 3, 'tr', 'Baş Dönmesi'),
(4, 4, 'tr', 'Kızarıklık');

INSERT INTO `user` (`id`, `name`, `user_name`, `password`, `active_period_type`, `date`, `is_active`) VALUES
(4, 'Yakup', 'yakuppdurmus@gmail.com', '?Yakup5488', 1, '2022-02-13 01:05:06', 1),
(5, 'Mehmet', 'mehmet@gmail.com', '12345', 1, '2022-02-13 01:33:27', 1);



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;