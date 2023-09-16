DROP TABLE if exists products;

CREATE TABLE `products`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `ingredients` LONGTEXT NOT NULL,
    `description` LONGTEXT NOT NULL,
    `quantity` INT UNSIGNED NOT NULL,
    `price` FLOAT UNSIGNED NOT NULL, 
    `size` INT UNSIGNED NOT NULL,
    `image` VARCHAR(999) NOT NULL,PRIMARY KEY(`id`)
);

INSERT INTO products (name, ingredients, description, quantity, price, size, image) VALUES ('Scotch Bonnet Chilli Jam', 'Sugar, Scotch Bonnet Chilli, Salt, Red Peppers, Dried Apricot, Garlic, Ginger, Cider Vinegar', 'Super spicy jam that goes great on burgers, fries, cold meats, with cheese or to add a spicy kick to sauce or marinade. Jiggy Jams will always have you spicing up your life (can you tell I’m a Spice girls fan). Store in a cool dry place, once opened keep refrigerated and consume within 8 weeks', 50, 5.99, 240, 'https://www.sowerbuttsveg.co.uk/wp-content/uploads/2020/08/scothc_bonnet.jpg');
    INSERT INTO products (name, ingredients, description, quantity, price, size, image) VALUES ('Scotch Bonnet Chilli Jam x3', 'Sugar, Scotch Bonnet Chilli, Salt, Red Peppers, Dried Apricot, Garlic, Ginger, Cider Vinegar', 'You have tasted our jam and you know you 1 is not enough you need a back stock so you never run out. So 3 is the magic number, or you simply want to try and share the love. Store in a cool dry place, once opened keep refrigerated and consume within 8 weeks', 30, 16.99, 240, 'https://www.sowerbuttsveg.co.uk/wp-content/uploads/2020/08/scothc_bonnet.jpg');
    INSERT INTO products (name, ingredients, description, quantity, price, size, image) VALUES ('Scotch Bonnet Chilli Jam Taster', 'Sugar, Scotch Bonnet Chilli, Salt, Red Peppers, Dried Apricot, Garlic, Ginger, Cider Vinegar','Whether you are a newcomer to the world of Jiggy jams, eager to savor a small taste or you could be seeking a distinctive touch for your wedding or party favors, our delightful mini-jars of goodness have something special in store for you. Indulge in a sample to discover if our Jiggy Jam captures your palate. Store in a cool dry place, once opened keep refrigerated and consume within 8 weeks.', 40, 2.99, 50, 'https://www.sowerbuttsveg.co.uk/wp-content/uploads/2020/08/scothc_bonnet.jpg');
    