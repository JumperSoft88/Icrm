-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 09, 2020 at 07:11 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `icrm`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_news_complaint`
--

CREATE TABLE `tbl_news_complaint` (
  `news_complaint_id` int(11) NOT NULL,
  `title_news` varchar(50) DEFAULT NULL,
  `news_firstname` varchar(100) DEFAULT NULL,
  `news_lastname` varchar(100) DEFAULT NULL,
  `news_tel` varchar(20) DEFAULT NULL,
  `news_province_id` int(11) DEFAULT NULL,
  `news_province_name` varchar(100) DEFAULT NULL,
  `police_station` varchar(250) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `category_name` varchar(100) DEFAULT NULL,
  `sub_category_id` int(11) DEFAULT NULL,
  `sub_category_name` varchar(100) DEFAULT NULL,
  `news_dated` varchar(50) DEFAULT NULL,
  `news_locale` varchar(100) DEFAULT NULL,
  `locale_province_id` int(11) DEFAULT NULL,
  `locale_province_name` varchar(50) DEFAULT NULL,
  `locale_amphur_id` int(11) DEFAULT NULL,
  `locale_amphur_name` varchar(100) DEFAULT NULL,
  `locale_district_id` int(11) DEFAULT NULL,
  `locale_district_name` varchar(100) DEFAULT NULL,
  `locale_title` varchar(100) DEFAULT NULL,
  `locale_detail` varchar(255) DEFAULT NULL,
  `createdDate` date DEFAULT NULL,
  `modifiedDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_news_complaint`
--
ALTER TABLE `tbl_news_complaint`
  ADD PRIMARY KEY (`news_complaint_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_news_complaint`
--
ALTER TABLE `tbl_news_complaint`
  MODIFY `news_complaint_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
