-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th8 02, 2024 lúc 04:58 PM
-- Phiên bản máy phục vụ: 10.6.18-MariaDB
-- Phiên bản PHP: 8.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `raptorcy_raptor`
--
CREATE DATABASE IF NOT EXISTS `raptorcy_raptor` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `raptorcy_raptor`;

DELIMITER $$
--
-- Thủ tục
--
DROP PROCEDURE IF EXISTS `AddBikeSpec`$$
CREATE DEFINER=`raptorcy`@`localhost` PROCEDURE `AddBikeSpec` (IN `ref_code` VARCHAR(50), IN `color` VARCHAR(50), IN `weight_kg` DECIMAL(5,2), IN `drivetrain` VARCHAR(100), IN `frame` VARCHAR(100), IN `fork` VARCHAR(100), IN `derailleur_rear` VARCHAR(100), IN `derailleur_front` VARCHAR(100), IN `shifter` VARCHAR(100), IN `crankset` VARCHAR(100), IN `cassette` VARCHAR(100), IN `chain` VARCHAR(100), IN `brakes` VARCHAR(100), IN `disc` VARCHAR(100), IN `wheel_front` VARCHAR(100), IN `wheel_rear` VARCHAR(100), IN `tire_front` VARCHAR(100), IN `tire_rear` VARCHAR(100), IN `grip` VARCHAR(100), IN `handlebar` VARCHAR(100), IN `stem` VARCHAR(100), IN `headset` VARCHAR(100), IN `saddle` VARCHAR(100), IN `seatpost` VARCHAR(100), IN `description_txt` TEXT)   BEGIN
    INSERT INTO bike_specs (
        ref_code, color, weight_kg, drivetrain, frame, fork, derailleur_rear, derailleur_front,
        shifter, crankset, cassette, chain, brakes, disc, wheel_front, wheel_rear, tire_front,
        tire_rear, grip, handlebar, stem, headset, saddle, seatpost, description_txt
    ) VALUES (
        ref_code, color, weight_kg, drivetrain, frame, fork, derailleur_rear, derailleur_front,
        shifter, crankset, cassette, chain, brakes, disc, wheel_front, wheel_rear, tire_front,
        tire_rear, grip, handlebar, stem, headset, saddle, seatpost, description_txt
    );
END$$

DROP PROCEDURE IF EXISTS `DeleteBikeSpec`$$
CREATE DEFINER=`raptorcy`@`localhost` PROCEDURE `DeleteBikeSpec` (IN `productIdsString` VARCHAR(250))   BEGIN
    SET @sql = CONCAT('DELETE FROM bike_specs WHERE FIND_IN_SET(product_id, ?)');
    PREPARE stmt FROM @sql;
    EXECUTE stmt USING productIdsString;
    DEALLOCATE PREPARE stmt;
END$$

DROP PROCEDURE IF EXISTS `GetAllBikeSpecs`$$
CREATE DEFINER=`raptorcy`@`localhost` PROCEDURE `GetAllBikeSpecs` ()   BEGIN
    SELECT * FROM products;
END$$

DROP PROCEDURE IF EXISTS `GetBikeById`$$
CREATE DEFINER=`raptorcy`@`localhost` PROCEDURE `GetBikeById` (IN `product_id` INT)   BEGIN
    SELECT 
        bk.product_id,
        bk.ref_code,
        bk.color,
        bk.weight_kg,
        bk.drivetrain,
        bk.frame,
        bk.fork,
        bk.derailleur_rear,
        bk.derailleur_front,
        bk.shifter,
        bk.crankset,
        bk.cassette,
        bk.chain,
        bk.brakes,
        bk.disc,
        bk.wheel_front,
        bk.wheel_rear,
        bk.tire_front,
        bk.tire_rear,
        bk.grip,
        bk.handlebar,
        bk.stem,
        bk.headset,
        bk.saddle,
        bk.seatpost,
        bk.price,
        bk.stock,
        bk.product_name, 
        GROUP_CONCAT(ct.category_name SEPARATOR ', ') AS categories 
    FROM products AS bk
    JOIN product_categories AS pc ON pc.product_id = bk.product_id
    JOIN category AS ct ON ct.category_id = pc.category_id
    WHERE bk.product_id = product_id
    GROUP BY 
        bk.product_id,
        bk.ref_code,
        bk.color,
        bk.weight_kg,
        bk.drivetrain,
        bk.frame,
        bk.fork,
        bk.derailleur_rear,
        bk.derailleur_front,
        bk.shifter,
        bk.crankset,
        bk.cassette,
        bk.chain,
        bk.brakes,
        bk.disc,
        bk.wheel_front,
        bk.wheel_rear,
        bk.tire_front,
        bk.tire_rear,
        bk.grip,
        bk.handlebar,
        bk.stem,
        bk.headset,
        bk.saddle,
        bk.seatpost,
        bk.price,
        bk.stock,
        bk.product_name;
END$$

DROP PROCEDURE IF EXISTS `GetBikeSpecFilter`$$
CREATE DEFINER=`raptorcy`@`localhost` PROCEDURE `GetBikeSpecFilter` (IN `category_id` INT, IN `min_price` DECIMAL(10,2), IN `max_price` DECIMAL(10,2), IN `color_id` VARCHAR(20))   BEGIN
    WITH FirstImage AS (
        SELECT 
            img.product_id, 
            img.color_id, 
            img.link, 
            img.des_code,
            ROW_NUMBER() OVER (PARTITION BY img.product_id, img.color_id ORDER BY img.des_code) AS rn
        FROM images AS img
    )
    SELECT 
        bk.product_id, 
        bk.product_name, 
        bk.drivetrain,
        bk.price,
        cl.color, 
        img.link, 
        img.des_code, 
        GROUP_CONCAT(ct.category_name SEPARATOR ', ') AS categories 
    FROM 
        products AS bk
        JOIN product_categories AS pc ON pc.product_id = bk.product_id
        JOIN category AS ct ON ct.category_id = pc.category_id
        JOIN product_colors AS pcl ON pcl.product_id = bk.product_id
        JOIN colors AS cl ON cl.color_id = pcl.color_id
        JOIN FirstImage AS img ON img.product_id = bk.product_id AND img.color_id = cl.color_id AND img.rn = 1
    WHERE 
        bk.product_id IN (
            SELECT 
                bk.product_id 
            FROM 
                products AS bk
                JOIN product_categories AS pc ON pc.product_id = bk.product_id
                JOIN category AS ct ON ct.category_id = pc.category_id
                JOIN product_colors AS pcl ON pcl.product_id = bk.product_id
                JOIN colors AS cl ON cl.color_id = pcl.color_id
            WHERE 
                (bk.price BETWEEN min_price AND max_price OR min_price IS NULL OR max_price IS NULL)
                AND (color_id IS NULL OR color_id = '' OR FIND_IN_SET(cl.color_id, color_id))
                AND (category_id IS NULL OR category_id = '' OR pc.category_id = category_id)
            GROUP BY 
                bk.product_id
        )
        AND (color_id IS NULL OR color_id = '' OR FIND_IN_SET(cl.color_id, color_id))
    GROUP BY 
        bk.product_id, 
        bk.product_name, 
        cl.color, 
        bk.drivetrain, 
        bk.price, 
        img.link, 
        img.des_code 
    ORDER BY 
        bk.product_id;
END$$

DROP PROCEDURE IF EXISTS `UpdateBikeSpec`$$
CREATE DEFINER=`raptorcy`@`localhost` PROCEDURE `UpdateBikeSpec` (IN `product_id` INT, IN `ref_code` VARCHAR(50), IN `color` VARCHAR(50), IN `weight_kg` DECIMAL(5,2), IN `drivetrain` VARCHAR(100), IN `frame` VARCHAR(100), IN `fork` VARCHAR(100), IN `derailleur_rear` VARCHAR(100), IN `derailleur_front` VARCHAR(100), IN `shifter` VARCHAR(100), IN `crankset` VARCHAR(100), IN `cassette` VARCHAR(100), IN `chain` VARCHAR(100), IN `brakes` VARCHAR(100), IN `disc` VARCHAR(100), IN `wheel_front` VARCHAR(100), IN `wheel_rear` VARCHAR(100), IN `tire_front` VARCHAR(100), IN `tire_rear` VARCHAR(100), IN `grip` VARCHAR(100), IN `handlebar` VARCHAR(100), IN `stem` VARCHAR(100), IN `headset` VARCHAR(100), IN `saddle` VARCHAR(100), IN `seatpost` VARCHAR(100), IN `description_txt` TEXT)   BEGIN
    UPDATE bike_specs
    SET 
        ref_code = ref_code,
        color = color,
        weight_kg = weight_kg,
        drivetrain = drivetrain,
        frame = frame,
        fork = fork,
        derailleur_rear = derailleur_rear,
        derailleur_front = derailleur_front,
        shifter = shifter,
        crankset = crankset,
        cassette = cassette,
        chain = chain,
        brakes = brakes,
        disc = disc,
        wheel_front = wheel_front,
        wheel_rear = wheel_rear,
        tire_front = tire_front,
        tire_rear = tire_rear,
        grip = grip,
        handlebar = handlebar,
        stem = stem,
        headset = headset,
        saddle = saddle,
        seatpost = seatpost,
        description_txt = description_txt
    WHERE product_id = product_id;
END$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
