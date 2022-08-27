<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'foxgroup' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'root' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', 'root' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Z~1]1U!WeGeOT]}tk:&l$o8nbmG6hWE9HGM_Bkz$@@>uJz4M_bS<_83QO9xQo}=Q' );
define( 'SECURE_AUTH_KEY',  '!$E% e%_0Y@#2?{%JH>mFQO+@sDva1KwMXyw$RRERP&z2MPY>&iu$h4vzvAgS>xE' );
define( 'LOGGED_IN_KEY',    'uf!*Wyc]LcG|R@,,y! hC)Ngnym0{ZG+0?$b2;-/+vU}js?cXC!s~WGN$!luq}FE' );
define( 'NONCE_KEY',        'B__0S`*-e1=VN#oQ||VMEmhg./-h{f@3G5b(I9p*`I(9kr%hDyx 1ydk,nhpk&,Z' );
define( 'AUTH_SALT',        'PG[Y(m2A%=U;TG~R|^qt<F^@{ShAtzH7.@-w@t!X9]n;iR~rtg6_;R2c];<^bD6c' );
define( 'SECURE_AUTH_SALT', '.5<B{C2jxlN7w?}ijLN2tSQ+uW~o0@;H>9P/6lR:|qjaosGbrg$mJR/?)G0)~JL@' );
define( 'LOGGED_IN_SALT',   '20f0AE$DL9L;)~|Ww:AVS6JN} Fc~-p!rW^p[nT:zrUMZB`Urtip/..C^XtBHk!u' );
define( 'NONCE_SALT',       'L0xJAyUyE*Fq:4b1W!EbPpx%{I<wz1p&)Q9tdq,f]$_dnK_nriyzm(O@t*8k`cF(' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
