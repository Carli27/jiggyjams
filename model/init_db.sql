DROP TABLE if exists products;

CREATE TABLE `products`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `ingredients` LONGTEXT NOT NULL,
    `description` LONGTEXT NOT NULL,
    `quantity` INT UNSIGNED NOT NULL,
    `price` FLOAT UNSIGNED NOT NULL, `size` VARCHAR(255) NOT NULL,PRIMARY KEY(`id`)
);

