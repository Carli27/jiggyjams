DROP TABLE if exists product_list;

CREATE TABLE `product_list`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `ingredients` LONGTEXT NOT NULL,
    `description` LONGTEXT NOT NULL,
    `quantity` INT UNSIGNED NOT NULL,
    `price` INT UNSIGNED NOT NULL, PRIMARY KEY(`id`)
);
