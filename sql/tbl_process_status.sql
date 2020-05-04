-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 06, 2020 at 05:14 PM
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
-- Table structure for table `tbl_process_status`
--

CREATE TABLE `tbl_process_status` (
  `process_id` int(11) NOT NULL,
  `process_name` varchar(100) NOT NULL,
  `process_detail` int(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_process_status`
--

INSERT INTO `tbl_process_status` (`process_id`, `process_name`, `process_detail`) VALUES
(1, 'แจ้งผู้ดำเนินการ', NULL),
(2, 'ปัญญายุติ', NULL),
(3, 'ประสานงาน', NULL),
(4, 'ปัญญายุติ', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_process_status`
--
ALTER TABLE `tbl_process_status`
  ADD PRIMARY KEY (`process_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_process_status`
--
ALTER TABLE `tbl_process_status`
  MODIFY `process_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
