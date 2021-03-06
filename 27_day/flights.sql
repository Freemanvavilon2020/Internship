-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Окт 20 2021 г., 11:18
-- Версия сервера: 5.7.33
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `flights`
--

-- --------------------------------------------------------

--
-- Структура таблицы `flights`
--

CREATE TABLE `flights` (
  `id` int(11) NOT NULL,
  `sp` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ep` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sdt` datetime NOT NULL,
  `edt` datetime NOT NULL,
  `flightnum` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `flights`
--

INSERT INTO `flights` (`id`, `sp`, `ep`, `sdt`, `edt`, `flightnum`) VALUES
(1, 'ISP', 'BWI', '2019-10-21 09:50:00', '2019-10-21 13:30:00', '335'),
(2, 'ISP', 'BWI', '2019-10-21 03:35:00', '2019-10-21 07:40:00', '3231'),
(3, 'ISP', 'BWI', '2019-10-21 08:40:00', '2019-10-21 14:40:00', '448'),
(4, 'ISP', 'BWI', '2019-10-21 16:00:00', '2019-10-21 20:05:00', '1746'),
(5, 'ISP', 'BWI', '2019-10-21 21:05:00', '2019-10-21 03:05:00', '3920'),
(6, 'ISP', 'BWI', '2019-10-21 15:00:00', '2019-10-21 18:45:00', '378'),
(7, 'ISP', 'BWI', '2019-10-21 19:45:00', '2019-10-21 23:25:00', '509'),
(8, 'ISP', 'FLL', '2019-10-21 02:15:00', '2019-10-21 06:20:00', '535'),
(9, 'LAS', 'PHX', '2019-10-21 07:20:00', '2019-10-21 13:20:00', '11'),
(10, 'LAS', 'PIT', '2020-10-21 04:05:00', '2020-10-21 07:50:00', '810'),
(11, 'LAS', 'PIT', '2020-10-21 08:50:00', '2020-10-21 12:30:00', '100'),
(12, 'LAS', 'PVD', '2020-10-21 02:15:00', '2020-10-21 06:20:00', '1333'),
(13, 'LAS', 'RDU', '2020-10-21 07:20:00', '2020-10-21 13:20:00', '829'),
(14, 'LAS', 'RDU', '2020-10-21 03:25:00', '2020-10-21 07:30:00', '1016'),
(15, 'LAS', 'RNO', '2020-10-21 08:30:00', '2020-10-21 14:30:00', '1827'),
(16, 'LAS', 'RNO', '2020-10-21 04:15:00', '2020-10-21 08:20:00', '2272'),
(17, 'LAS', 'RNO', '2020-10-21 09:20:00', '2020-10-21 15:20:00', '675'),
(18, 'LAS', 'RNO', '2021-10-21 17:45:00', '2021-10-21 21:30:00', '1144'),
(19, 'LAX', 'LAS', '2021-10-21 22:30:00', '2021-10-21 02:10:00', '4'),
(20, 'LAX', 'LAS', '2021-10-21 07:25:00', '2021-10-21 11:10:00', '54'),
(21, 'LAX', 'LAS', '2021-10-21 12:10:00', '2021-10-21 15:50:00', '68'),
(22, 'LAX', 'LAS', '2021-10-21 15:40:00', '2021-10-21 19:25:00', '623'),
(23, 'LAX', 'LAS', '2021-10-21 20:30:00', '2021-10-21 00:10:00', '717'),
(24, 'LAX', 'LAS', '2021-10-21 04:10:00', '2021-10-21 08:15:00', '1244'),
(25, 'LAX', 'LAS', '2021-10-21 09:15:00', '2021-10-21 15:15:00', '2101'),
(26, 'LAX', 'MCI', '2021-10-21 03:15:00', '2021-10-21 07:20:00', '2553'),
(27, 'LAX', 'MCI', '2021-10-21 12:10:00', '2021-10-21 15:50:00', '188'),
(28, 'LAX', 'MCI', '2022-10-21 15:00:00', '2022-10-21 18:45:00', '1754'),
(29, 'LAX', 'MCI', '2022-10-21 19:00:00', '2022-10-21 01:00:00', '2275'),
(30, 'LAX', 'MDW', '2023-10-21 02:15:00', '2023-10-21 06:20:00', '550'),
(31, 'LAX', 'MDW', '2023-10-21 07:20:00', '2023-10-21 13:20:00', '362'),
(32, 'LAX', 'MDW', '2024-10-21 04:15:00', '2024-10-21 08:00:00', '300'),
(33, 'LAX', 'STL', '2024-10-21 09:00:00', '2024-10-21 12:40:00', '422'),
(34, 'LAX', 'TUS', '2025-10-21 04:40:00', '2025-10-21 08:25:00', '1837'),
(35, 'LAX', 'TUS', '2025-10-21 09:40:00', '2025-10-21 13:20:00', '2871'),
(36, 'LAX', 'TUS', '2025-10-21 15:45:00', '2025-10-21 19:30:00', '1056'),
(37, 'LAX', 'TUS', '2025-10-21 20:30:00', '2025-10-21 00:10:00', '2175'),
(38, 'LAX', 'TUS', '2026-10-21 05:05:00', '2026-10-21 08:50:00', '3319'),
(39, 'LAX', 'TUS', '2026-10-21 09:50:00', '2026-10-21 13:30:00', '3667'),
(40, 'LBB', 'ABQ', '2026-10-21 02:15:00', '2026-10-21 06:20:00', '2006'),
(41, 'LBB', 'AUS', '2026-10-21 07:20:00', '2026-10-21 13:20:00', '3858'),
(42, 'LBB', 'AUS', '2027-10-21 17:00:00', '2027-10-21 20:45:00', '3928'),
(43, 'LBB', 'DAL', '2028-10-21 14:15:00', '2028-10-21 18:00:00', '534'),
(44, 'LBB', 'DAL', '2028-10-21 19:00:00', '2028-10-21 22:40:00', '3244'),
(45, 'LBB', 'DAL', '2028-10-21 15:40:00', '2028-10-21 19:25:00', '186'),
(46, 'LBB', 'DAL', '2028-10-21 20:30:00', '2028-10-21 00:10:00', '971'),
(47, 'LBB', 'DAL', '2028-10-21 15:55:00', '2028-10-21 20:00:00', '2124'),
(48, 'LBB', 'DAL', '2028-10-21 21:00:00', '2028-10-21 02:55:00', '3154'),
(49, 'LBB', 'DAL', '2029-10-21 04:15:00', '2029-10-21 08:00:00', '1035'),
(50, 'LBB', 'DAL', '2029-10-21 09:00:00', '2029-10-21 12:40:00', '205'),
(51, 'LBB', 'ELP', '2030-10-21 16:30:00', '2030-10-21 20:15:00', '449'),
(52, 'LBB', 'LAS', '2030-10-21 21:15:00', '2030-10-21 00:55:00', '3430'),
(53, 'LIT', 'BWI', '2030-10-21 02:15:00', '2030-10-21 06:20:00', '1580'),
(54, 'LIT', 'DAL', '2030-10-21 07:20:00', '2030-10-21 13:20:00', '2195'),
(55, 'LIT', 'DAL', '2030-10-21 03:35:00', '2030-10-21 07:40:00', '2804'),
(56, 'LIT', 'DAL', '2030-10-21 08:40:00', '2030-10-21 14:40:00', '3428'),
(57, 'LIT', 'PHX', '2030-10-21 21:05:00', '2030-10-21 03:05:00', '433'),
(58, 'LIT', 'STL', '2030-10-21 00:00:00', '2030-10-21 00:00:00', '1331'),
(59, 'LIT', 'STL', '2030-10-21 08:30:00', '2030-10-21 14:30:00', '3504'),
(60, 'MAF', 'ABQ', '2030-10-21 02:15:00', '2030-10-21 06:20:00', '378'),
(61, 'MAF', 'AUS', '2030-10-21 07:20:00', '2030-10-21 13:20:00', '640'),
(62, 'MAF', 'AUS', '2030-10-21 16:00:00', '2030-10-21 20:05:00', '1396'),
(63, 'MAF', 'DAL', '2030-10-21 21:05:00', '2030-10-21 03:05:00', '2189'),
(64, 'MAF', 'DAL', '2031-10-21 17:30:00', '2031-10-21 21:15:00', '3312'),
(65, 'MAF', 'DAL', '2031-10-21 22:15:00', '2031-10-21 01:55:00', '3948'),
(66, 'MAF', 'DAL', '2031-10-21 00:00:00', '2031-10-21 00:00:00', '54'),
(67, 'MAF', 'DAL', '2031-10-21 19:40:00', '2031-10-21 01:40:00', '2272'),
(68, 'MAF', 'DAL', '2001-11-21 04:10:00', '2001-11-21 08:15:00', '549'),
(69, 'MAF', 'HOU', '2001-11-21 09:15:00', '2001-11-21 15:15:00', '3604'),
(70, 'MAF', 'HOU', '2002-11-21 06:10:00', '2002-11-21 10:15:00', '23'),
(71, 'MAF', 'LAS', '2003-11-21 02:25:00', '2003-11-21 06:30:00', '1232'),
(72, 'MCI', 'ABQ', '2003-11-21 07:30:00', '2003-11-21 13:30:00', '977'),
(73, 'MCI', 'ABQ', '2004-11-21 03:15:00', '2004-11-21 07:00:00', '1574'),
(74, 'MCI', 'BNA', '2004-11-21 08:00:00', '2004-11-21 11:40:00', '2019'),
(75, 'MCI', 'BNA', '2006-11-21 02:25:00', '2006-11-21 06:30:00', '500'),
(76, 'MCO', 'ABQ', '2006-11-21 07:30:00', '2006-11-21 13:30:00', '778'),
(77, 'MCO', 'ALB', '2006-11-21 14:05:00', '2006-11-21 18:10:00', '890'),
(78, 'MCO', 'ALB', '2006-11-21 19:10:00', '2006-11-21 01:10:00', '1171'),
(79, 'MCO', 'ALB', '2007-11-21 17:30:00', '2007-11-21 21:15:00', '1320'),
(80, 'MCO', 'AUS', '2007-11-21 22:15:00', '2007-11-21 01:55:00', '1925'),
(81, 'MCO', 'BDL', '2007-11-21 05:10:00', '2007-11-21 09:15:00', '2457'),
(82, 'MCO', 'BDL', '2007-11-21 10:15:00', '2007-11-21 16:15:00', '302'),
(83, 'MCO', 'BDL', '2007-11-21 00:00:00', '2007-11-21 00:00:00', '1079'),
(84, 'MCO', 'BHM', '2007-11-21 00:00:00', '2007-11-21 00:00:00', '155'),
(85, 'MCO', 'BHM', '2007-11-21 19:40:00', '2007-11-21 01:40:00', '2021'),
(86, 'MCO', 'BHM', '2008-11-21 21:15:00', '2008-11-21 00:55:00', '3222'),
(87, 'MCO', 'BNA', '2008-11-21 00:00:00', '2008-11-21 00:00:00', '1018'),
(88, 'MCO', 'BNA', '2008-11-21 00:00:00', '2008-11-21 00:00:00', '3948'),
(89, 'MCO', 'BNA', '2008-11-21 14:35:00', '2008-11-21 18:40:00', '249'),
(90, 'MCO', 'BNA', '2008-11-21 19:40:00', '2008-11-21 01:40:00', '419'),
(91, 'MCO', 'BNA', '2010-11-21 05:25:00', '2010-11-21 09:30:00', '2032'),
(92, 'MCO', 'BUF', '2010-11-21 10:30:00', '2010-11-21 16:30:00', '3940'),
(93, 'MCO', 'BUF', '2010-11-21 02:25:00', '2010-11-21 06:30:00', '71'),
(94, 'MCO', 'BUF', '2010-11-21 07:30:00', '2010-11-21 13:30:00', '538'),
(95, 'MCO', 'BWI', '2011-11-21 03:15:00', '2011-11-21 07:00:00', '2383'),
(96, 'MCO', 'FLL', '2011-11-21 08:00:00', '2011-11-21 11:40:00', '136'),
(97, 'MCO', 'FLL', '2011-11-21 05:25:00', '2011-11-21 09:30:00', '219'),
(98, 'MCO', 'FLL', '2011-11-21 10:30:00', '2011-11-21 16:30:00', '391'),
(99, 'MCO', 'FLL', '2011-11-21 11:30:00', '2011-11-21 18:30:00', '392');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `flights`
--
ALTER TABLE `flights`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `flights`
--
ALTER TABLE `flights`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
cabincabin