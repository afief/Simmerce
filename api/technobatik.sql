-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Inang: 127.0.0.1
-- Waktu pembuatan: 03 Mei 2015 pada 06.16
-- Versi Server: 5.5.27
-- Versi PHP: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Basis data: `technobatik`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `me_login`
--

CREATE TABLE IF NOT EXISTS `me_login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `key` varchar(200) NOT NULL,
  `ip` varchar(25) NOT NULL,
  `browser` varchar(200) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `last_login` datetime NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=34 ;

--
-- Dumping data untuk tabel `me_login`
--

INSERT INTO `me_login` (`id`, `id_user`, `key`, `ip`, `browser`, `status`, `last_login`, `created`) VALUES
(18, 7, 'rUd65LJIQB5544309e808b2BSBnsfHyn7', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 0, '2015-05-02 04:37:35', '2015-05-02 02:04:14'),
(19, 8, 'Y8Y7LviuVH554438f37286911Nb9PcViH', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 0, '2015-05-02 04:42:43', '2015-05-02 02:39:47'),
(20, 8, '4KV3Kxxzve554441d7116ddRfvFREvb3S', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 0, '2015-05-02 06:04:08', '2015-05-02 03:17:43'),
(21, 8, 'KFiYsK9Dp055444d4537525nmOJZLnQrV', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 0, '2015-05-02 06:06:30', '2015-05-02 04:06:29'),
(22, 8, 'wmBQAuCXJM55444d743a306tgNbJw0buT', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 0, '2015-05-02 06:07:17', '2015-05-02 04:07:16'),
(23, 8, 'ALl9vlprJW55444d84e11b9fyA1YGXuaw', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 0, '2015-05-02 06:11:55', '2015-05-02 04:07:32'),
(24, 8, 'HjRi37pjYx55445426d4662h4jB6bqLSZ', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 0, '2015-05-02 10:09:38', '2015-05-02 04:35:50'),
(25, 8, 'itj25IBZ5q554486b27c58esCnQKSBGOd', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 0, '2015-05-02 10:27:38', '2015-05-02 08:11:30'),
(26, 8, '_eoPjt7c2f55448c9c63001cOlNxBUPs4', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 0, '2015-05-02 10:37:30', '2015-05-02 08:36:44'),
(27, 8, 'MyO8zHWgmt55448ce359686FuLDmeQlSt', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 0, '2015-05-02 13:58:26', '2015-05-02 08:37:55'),
(28, 8, 'P_tCFZ8ybo5544bcdbb549dyZ170obiIJ', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 0, '2015-05-02 14:04:00', '2015-05-02 12:02:35'),
(29, 8, 'dmvHYT_QHE5544bdb4b38699ouRgjXeW6', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 0, '2015-05-02 14:06:13', '2015-05-02 12:06:12'),
(30, 9, 'juB0roaHOc5544bec95999bCy3CgbbQYA', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 0, '2015-05-02 14:10:50', '2015-05-02 12:10:49'),
(31, 9, 'TD6bdapYMb5544beda936aekpFVGtr6OD', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 0, '2015-05-02 14:11:07', '2015-05-02 12:11:06'),
(32, 9, 'eRyRD1eBII5544bf0239a21KR7Jo5Qg3d', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 0, '2015-05-02 14:26:49', '2015-05-02 12:11:46'),
(33, 8, 'lLCsAEHAuJ55457b7eb7b58ix0ahi0KYl', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36', 1, '2015-05-03 06:10:58', '2015-05-03 01:35:58');

-- --------------------------------------------------------

--
-- Struktur dari tabel `me_users`
--

CREATE TABLE IF NOT EXISTS `me_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '10',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data untuk tabel `me_users`
--

INSERT INTO `me_users` (`id`, `username`, `password`, `email`, `status`, `created`) VALUES
(8, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@admin.com', 10, '2015-05-02 02:39:46'),
(9, 'eka', '79ee82b17dfb837b1be94a6827fa395a', 'eka@gmail.com', 10, '2015-05-02 12:10:48');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tik_batiks`
--

CREATE TABLE IF NOT EXISTS `tik_batiks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(200) NOT NULL,
  `keterangan` text NOT NULL,
  `image` varchar(200) NOT NULL,
  `kategori` varchar(200) NOT NULL,
  `parent` int(11) NOT NULL DEFAULT '-1',
  `harga_dewasa` int(11) NOT NULL,
  `harga_anak` int(11) NOT NULL,
  `stok` int(11) NOT NULL DEFAULT '3',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

--
-- Dumping data untuk tabel `tik_batiks`
--

INSERT INTO `tik_batiks` (`id`, `nama`, `keterangan`, `image`, `kategori`, `parent`, `harga_dewasa`, `harga_anak`, `stok`, `timestamp`) VALUES
(1, 'Batik Sarimbit Santai', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec justo et nulla aliquam cursus. Vestibulum vulputate volutpat venenatis. Proin nibh sapien, rhoncus non dui ac, rhoncus fringilla ex. Nam massa erat, aliquam ut ornare at, efficitur a sem. Maecenas vel purus sit amet ligula tincidunt consectetur in nec massa. Suspendisse euismod sagittis justo, id viverra ante lacinia quis. Sed fermentum lobortis mattis.', 'uploads/sarimbit_1_1.jpg', 'Sarimbit', -1, 117500, 67500, 3, '2015-05-02 10:10:12'),
(2, 'Batik Sarimbit Santai', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec justo et nulla aliquam cursus. Vestibulum vulputate volutpat venenatis. Proin nibh sapien, rhoncus non dui ac, rhoncus fringilla ex. Nam massa erat, aliquam ut ornare at, efficitur a sem. Maecenas vel purus sit amet ligula tincidunt consectetur in nec massa. Suspendisse euismod sagittis justo, id viverra ante lacinia quis. Sed fermentum lobortis mattis.', 'uploads/sarimbit_1_2.jpg', 'Sarimbit', 1, 117500, 67500, 3, '2015-05-02 10:10:12'),
(3, 'Batik Sarimbit Santai', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec justo et nulla aliquam cursus. Vestibulum vulputate volutpat venenatis. Proin nibh sapien, rhoncus non dui ac, rhoncus fringilla ex. Nam massa erat, aliquam ut ornare at, efficitur a sem. Maecenas vel purus sit amet ligula tincidunt consectetur in nec massa. Suspendisse euismod sagittis justo, id viverra ante lacinia quis. Sed fermentum lobortis mattis.', 'uploads/sarimbit_1_3.jpg', 'Sarimbit', 1, 117500, 67500, 3, '2015-05-02 10:10:12'),
(4, 'Batik Sarimbit Tionghoa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec justo et nulla aliquam cursus. Vestibulum vulputate volutpat venenatis. Proin nibh sapien, rhoncus non dui ac, rhoncus fringilla ex. Nam massa erat, aliquam ut ornare at, efficitur a sem. Maecenas vel purus sit amet ligula tincidunt consectetur in nec massa. Suspendisse euismod sagittis justo, id viverra ante lacinia quis. Sed fermentum lobortis mattis.', 'uploads/sarimbit_2_1.jpg', 'Sarimbit', -1, 117500, 67500, 3, '2015-05-02 10:10:12'),
(5, 'Batik Sarimbit Tionghoa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec justo et nulla aliquam cursus. Vestibulum vulputate volutpat venenatis. Proin nibh sapien, rhoncus non dui ac, rhoncus fringilla ex. Nam massa erat, aliquam ut ornare at, efficitur a sem. Maecenas vel purus sit amet ligula tincidunt consectetur in nec massa. Suspendisse euismod sagittis justo, id viverra ante lacinia quis. Sed fermentum lobortis mattis.', 'uploads/sarimbit_2_2.jpg', 'Sarimbit', 4, 117500, 67500, 3, '2015-05-02 10:10:12'),
(6, 'Batik Sarimbit Tionghoa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec justo et nulla aliquam cursus. Vestibulum vulputate volutpat venenatis. Proin nibh sapien, rhoncus non dui ac, rhoncus fringilla ex. Nam massa erat, aliquam ut ornare at, efficitur a sem. Maecenas vel purus sit amet ligula tincidunt consectetur in nec massa. Suspendisse euismod sagittis justo, id viverra ante lacinia quis. Sed fermentum lobortis mattis.', 'uploads/sarimbit_2_3.jpg', 'Sarimbit', 4, 117500, 67500, 3, '2015-05-02 10:10:12'),
(7, 'Batik Sarimbit Tionghoa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec justo et nulla aliquam cursus. Vestibulum vulputate volutpat venenatis. Proin nibh sapien, rhoncus non dui ac, rhoncus fringilla ex. Nam massa erat, aliquam ut ornare at, efficitur a sem. Maecenas vel purus sit amet ligula tincidunt consectetur in nec massa. Suspendisse euismod sagittis justo, id viverra ante lacinia quis. Sed fermentum lobortis mattis.', 'uploads/sarimbit_2_4.jpg', 'Sarimbit', 4, 117500, 67500, 3, '2015-05-02 10:10:12'),
(8, 'Batik Sarimbit Tionghoa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec justo et nulla aliquam cursus. Vestibulum vulputate volutpat venenatis. Proin nibh sapien, rhoncus non dui ac, rhoncus fringilla ex. Nam massa erat, aliquam ut ornare at, efficitur a sem. Maecenas vel purus sit amet ligula tincidunt consectetur in nec massa. Suspendisse euismod sagittis justo, id viverra ante lacinia quis. Sed fermentum lobortis mattis.', 'uploads/sarimbit_2_5.jpg', 'Sarimbit', 4, 117500, 67500, 3, '2015-05-02 10:10:12'),
(9, 'Batik Sarimbit Modern', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec justo et nulla aliquam cursus. Vestibulum vulputate volutpat venenatis. Proin nibh sapien, rhoncus non dui ac, rhoncus fringilla ex. Nam massa erat, aliquam ut ornare at, efficitur a sem. Maecenas vel purus sit amet ligula tincidunt consectetur in nec massa. Suspendisse euismod sagittis justo, id viverra ante lacinia quis. Sed fermentum lobortis mattis.', 'uploads/sarimbit_3_1.jpg', 'Sarimbit', -1, 117500, 37500, 3, '2015-05-02 10:10:12'),
(10, 'Batik Sarimbit Modern', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec justo et nulla aliquam cursus. Vestibulum vulputate volutpat venenatis. Proin nibh sapien, rhoncus non dui ac, rhoncus fringilla ex. Nam massa erat, aliquam ut ornare at, efficitur a sem. Maecenas vel purus sit amet ligula tincidunt consectetur in nec massa. Suspendisse euismod sagittis justo, id viverra ante lacinia quis. Sed fermentum lobortis mattis.', 'uploads/sarimbit_3_2.jpg', 'Sarimbit', 9, 117500, 67500, 3, '2015-05-02 10:10:12'),
(11, 'Batik Sarimbit Modern', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec justo et nulla aliquam cursus. Vestibulum vulputate volutpat venenatis. Proin nibh sapien, rhoncus non dui ac, rhoncus fringilla ex. Nam massa erat, aliquam ut ornare at, efficitur a sem. Maecenas vel purus sit amet ligula tincidunt consectetur in nec massa. Suspendisse euismod sagittis justo, id viverra ante lacinia quis. Sed fermentum lobortis mattis.', 'uploads/sarimbit_3_3.jpg', 'Sarimbit', 9, 117500, 67500, 3, '2015-05-02 10:10:12'),
(12, 'Batik Sarimbit Modern', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec justo et nulla aliquam cursus. Vestibulum vulputate volutpat venenatis. Proin nibh sapien, rhoncus non dui ac, rhoncus fringilla ex. Nam massa erat, aliquam ut ornare at, efficitur a sem. Maecenas vel purus sit amet ligula tincidunt consectetur in nec massa. Suspendisse euismod sagittis justo, id viverra ante lacinia quis. Sed fermentum lobortis mattis.', 'uploads/sarimbit_3_4.jpg', 'Sarimbit', 9, 117500, 67500, 3, '2015-05-02 10:10:12'),
(13, 'Batik Sarimbit Eropa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec justo et nulla aliquam cursus. Vestibulum vulputate volutpat venenatis. Proin nibh sapien, rhoncus non dui ac, rhoncus fringilla ex. Nam massa erat, aliquam ut ornare at, efficitur a sem. Maecenas vel purus sit amet ligula tincidunt consectetur in nec massa. Suspendisse euismod sagittis justo, id viverra ante lacinia quis. Sed fermentum lobortis mattis.', 'uploads/sarimbit_4_1.jpg', 'Sarimbit', -1, 117500, 67500, 3, '2015-05-02 10:10:12'),
(14, 'Batik Sarimbit Eropa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec justo et nulla aliquam cursus. Vestibulum vulputate volutpat venenatis. Proin nibh sapien, rhoncus non dui ac, rhoncus fringilla ex. Nam massa erat, aliquam ut ornare at, efficitur a sem. Maecenas vel purus sit amet ligula tincidunt consectetur in nec massa. Suspendisse euismod sagittis justo, id viverra ante lacinia quis. Sed fermentum lobortis mattis.', 'uploads/sarimbit_4_2.jpg', 'Sarimbit', 13, 117500, 67500, 3, '2015-05-02 10:10:12'),
(15, 'Batik Sarimbit Eropa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec justo et nulla aliquam cursus. Vestibulum vulputate volutpat venenatis. Proin nibh sapien, rhoncus non dui ac, rhoncus fringilla ex. Nam massa erat, aliquam ut ornare at, efficitur a sem. Maecenas vel purus sit amet ligula tincidunt consectetur in nec massa. Suspendisse euismod sagittis justo, id viverra ante lacinia quis. Sed fermentum lobortis mattis.', 'uploads/sarimbit_4_3.jpg', 'Sarimbit', 13, 117500, 67500, 3, '2015-05-02 10:10:12'),
(16, 'Batik Sarimbit Eropa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec justo et nulla aliquam cursus. Vestibulum vulputate volutpat venenatis. Proin nibh sapien, rhoncus non dui ac, rhoncus fringilla ex. Nam massa erat, aliquam ut ornare at, efficitur a sem. Maecenas vel purus sit amet ligula tincidunt consectetur in nec massa. Suspendisse euismod sagittis justo, id viverra ante lacinia quis. Sed fermentum lobortis mattis.', 'uploads/sarimbit_4_4.jpg', 'Sarimbit', 13, 117500, 67500, 3, '2015-05-02 10:10:12');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
