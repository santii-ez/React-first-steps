-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 01, 2022 at 04:49 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tecnomundo`
--

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price_product`, `discount`, `category`, `image_product`, `section`, `brand`) VALUES
(1, 'Samsung Galaxy M23 5G', 'Pantalla: 6.6 , 1080 x 2408 pixels, Procesador: Octa-core 2.2GHz, RAM: 4GB, Almacenamiento: 128GB, Expansión: microSD, Cámara: Triple, 50MP+8MP+2MP, Batería: 5000 mAh, OS: Android 1', 134000, '15', 'phones', 'samsung-Galaxy-m23.jpg', 'celulares', 'Samsung'),
(2, 'Samsung Galaxy A22 128 GB', 'Pantalla: 6.4, 720 x 1600 pixels, Procesador: Mediatek Helio G80 2GHz, RAM: 4GB/6GB, Almacenamiento: 64GB/128GB, xpansión: microSD, Cámara: Cuádruple, 48MP+8MP +2MP+2MP, Batería: 5000 mAh, OS: Android 11', 59500, '0', 'phones', 'samsung-galaxy-A22.jpg', 'celulares', 'Samsung'),
(3, 'Samsung Galaxy A03 Rojo', 'at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in', 45959, '10', 'phones', 'Samsung-Galaxy-A03.jpg', 'celulares', 'Samsung'),
(4, 'Xiaomi Redmi Note 11 128 GB azul ocaso', 'Pantalla: 6.5, 1080 x 2400 pixels, Procesador: Mediatek Dimensity 700 2.2GHz, RAM: 4GB/8GB,Almacenamiento: 128GB, Expansión: sin microSD, Cámara: Dual, 48MP+2MP, Batería: 5000 mAh, OS: Android 11', 83999, '0', 'phones', 'xiaomi-note11.jpg', 'lo mas buscado', 'Xiaomi'),
(5, 'Xiaomi Poco M3  128 GB negro ', 'sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit', 89995, '15', 'phones', 'xiaomi-poco.jpg', 'celulares', 'Xiamoi'),
(6, 'Xiaomi Poco F3 5G 128 GB blanco ártico', 'Pantalla: 6.67, 1080 x 2400 pixels, Procesador: Snapdragon 870 5G 3.2GHz, RAM: 6GB/8GB, Almacenamiento: 128GB/256GB, Expansión: sin microSD, Cámara: Triple, 48MP+8MP+5MP, Batería: 4520 mAh, OS: Android 11', 148000, '0', 'phones', 'xiaomi-poco-F3.jpg', 'celulares', 'Xiaomi'),
(7, 'Huawei Mate 30 Pro 256 GB púrpura cósmico ', 'Pantalla: 6.53, 1176 x 2400 pixels, Procesador: Kirin 990E 5G 2.86GHz, RAM: 8GB, Almacenamiento: 128GB/256GB, Expansión: NM, Cámara: Cuádruple, 40MP+8MP +40MP+TOF 3D, Batería: 4500 mAh, OS: Android 10', 499000, '15', 'phones', 'huawei-mate30.jpg', 'lo mas buscado', 'Huawei'),
(8, 'Huawei 30E Pro 256 GB black', 'Pantalla: 6.53, 1176 x 2400 pixels, Procesador: Kirin 990E 5G 2.86GHz, RAM: 8GB, Almacenamiento: 128GB/256GB, Expansión: NM, Cámara: Cuádruple, 40MP+8MP +40MP+TOF 3D, Batería: 4500 mAh, OS: Android 10', 449500, '10', 'phones', 'huawei-p30.jpg', 'celulares', 'Huawei'),
(9, 'Huawei P50 Pro Dual SIM 512 GB cocoa gold', 'Pantalla: 6.6, 1228 x 2700 pixels, Procesador: Snapdragon 888 2.84GHz / Kirin 9000 3.13GHz, RAM: 8GB/12GB, Almacenamiento: 128GB/256GB/512GB, Expansión: NM, Cámara: Cuádruple, 50MP+64MP +13MP+40MP, Batería: 4360 mAh, OS: HarmonyOS 2.0', 370000, '0', 'phones', 'huawei-P50.jpg', 'celulares', 'Huawei'),
(10, 'Samsung Galaxy Tab A8', 'Pantalla: 10.5, 1200 x 1920 pixels, Procesador: Unisoc T618 2GHz,RAM: 3GB/4GB, Almacenamiento: 32GB/64GB/128GB, Expansión: microSD, Cámara: 8 MP, Batería: 7040 mAh, OS: Android 11', 61999, '0', 'tablets', 'galaxy-tab8.png', 'lo mas buscado', 'Samsung'),
(11, 'Samsung Galaxy Tab S8 128gb', 'Pantalla: 14.6, 1848 x 2960 pixels, Procesador: Snapdragon 8 Gen 1 3GHz, RAM: 8GB/12GB/16GB, Almacenamiento: 128GB/256GB/512GB, Expansión: microSD, Cámara: Dual, 13MP+6MP, Batería: 11200 mAh, OS: Android 12', 289999, '15', 'tablets', 'galaxy-tabS8.jpg', 'tablets', 'Samsung'),
(12, 'Tablet Samsung Galaxy Tab S7 256GB black', 'Pantalla: 11, 1668 x 2560 pixels, Procesador: Snapdragon 865+ 3.09GHz, RAM: 6GB/8GB, Almacenamiento: 128GB/256GB, Expansión: microSD, Cámara: Dual, 13MP+5MP, Batería: 8000 mAh, OS: Android 10', 155000, '10', 'tablets', 'galaxy-tabS7.jpg', 'tablets', 'Samsung'),
(13, 'Tablet Lenovo Tab P11', 'Pantalla: 11, 2.000 x 1.200 pixels, Procesador: Snapdragon 662, RAM: 4GB/6GB, Almacenamiento: 68GB/128GB, Expansión: microSD, Cámara: Dual, 13MP+5MP, Batería: 7.500 mAh, OS: Android 10', 78000, '0', 'tablets', 'lenovo-P11.jpg', 'tablets', 'Lenovo'),
(14, 'Tablet Xiaomi Pad 5 pearl white', 'Pantalla: 11, 2560 x 1600 pixels, Procesador: Qualcomm Adreno 640, RAM: 6GB, Almacenamiento: 1256GB, Expansión: microSD, Cámara: Dual, 13MP+8MP, Batería: 8720 mAh, OS: Android 11', 100000, '10', 'tablets', 'xiaomi-pad5.jpg', 'tablets', 'Xiaomi'),
(15, 'Notebook Lenovo IdeaPad 14IIL05 platinum gray', 'Pantalla: 14, 1366 x 768 pixels, Procesador: Intel Core i5, RAM: 4GB/12GB, Almacenamiento: 256GB, Expansión: SSD,Cámara:0.3 Mpx, Conectividad: HDMI y USB  , Batería: 7.7 h , OS: Windows 11', 110500, '0', 'laptops', 'lenovo-ideaPad.jpg', 'lo mas buscado', 'Lenovo'),
(16, 'Notebook Dell Inspiron 3505 gris', 'Pantalla: 15.6, 1366 x 768 pixels, Procesador: AMD Radeon RX Vega 8 (Ryzen 2000/3000), RAM: 16GB, Almacenamiento: 256GB, Expansión: SSD, Cámara: 0.92 Mpx, Conectividad: HDMI y USB  , Tipo de Batería: Polímero de litio , OS: Windows 10', 174999, '10', 'laptops', 'dell-inspiron3505.jpg', 'laptops', 'Dell'),
(17, 'Notebook Lenovo IdeaPad 15IIL05 almond', 'Pantalla: 15.6, 1366 x 768 pixels, Procesador: Intel Core i3, RAM: 8GB/16GB, Almacenamiento: 256GB, Expansión: SSD, Cámara:0.3 Mpx, Conectividad: HDMI y USB  , Batería: 7h , OS: Windows 10', 131999, '0', 'tablets', 'Lenovo-IdeaPad-15IIL05.jpg', 'tablets', 'Lenovo'),
(18, 'Apple Macbook Air ', 'Pantalla: 13.3, 2560 x 1600 pixels, Procesador: Apple M1 8-Core GPU, RAM: 8GB/16GB, Almacenamiento: 256GB, Expansión: SSD, Cámara:0.3 Mpx, Conectividad: USB  , Batería: 18h , OS: macOS', 185999, '15', 'laptops', 'apple-macbookAir.jpg', 'laptops', 'Apple'),
(19, 'Apple MacBook Pro ', 'Pantalla: 16.2, 3456 x 2234 pixels, Procesador: Apple M1 Pro, RAM: 8GB/16GB, Almacenamiento: 512GB, Expansión: SSD, Cámara:0.3 Mpx, Conectividad: HDMI y USB  , Batería: 21h , OS: macOS', 520999, '0', 'laptops', 'apple-macbookPro.jpg', 'laptops', 'Apple');

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `user_id`, `date`, `payment_method`, `total`) VALUES
(1, 3, '0000-00-00 00:00:00', 'Credit Card', 1800.00),
(2, 5, '0000-00-00 00:00:00', 'Cash', 2000.00);

--
-- Dumping data for table `sales_detail`
--

INSERT INTO `sales_detail` (`id`, `sale_id`, `product_id`, `quantity`, `price`) VALUES
(1, 1, 4, 1, 900.00),
(2, 1, 5, 1, 900.00),
(3, 2, 10, 1, 1500.00),
(4, 2, 15, 1, 500.00);

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `image_product`, `role`) VALUES
(1, 'Nataniel', 'Isaksen', 'nisaksen0@a8.net', 'd3MZ36RlRf', 'user_1.jpg', 1),
(2, 'Lissa', 'Andrea', 'landrea1@geocities.jp', 'GEZ8AqWXj', 'user_2.jpg', 1),
(3, 'Margaux', 'Pippard', 'mpippard2@seattletimes.com', '2SXDw8P', 'user_3.jpg', 1),
(4, 'Reggy', 'Mulryan', 'rmulryan3@bigcartel.com', 'jz5whrX', 'user_4.jpg', 1),
(5, 'Ally', 'Tremblay', 'atremblay4@wunderground.com', 'eQOkoyWvn', 'user_5.jpg', 1),
(6, 'Evangelin', 'Acreman', 'eacreman5@google.nl', 'DLmjhS8rmUb', 'user_6.jpg', 1),
(7, 'Marmaduke', 'Farren', 'mfarren6@e-recht24.de', 'Y210UwnQ', 'user_7.jpg', 1),
(8, 'Zacherie', 'Karlsson', 'zkarlsson7@ucoz.com', 'Jl1MJPvmvHN', 'user_8.jpg', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
