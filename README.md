# jiggyjams

This is a full stack website to show the products available at jiggy jams. Jiggy jams are Scotch Bonnet Chilli Jam that can be a condiment, sauce, with cheese or incoporated into a marinade to give a spicy kick,

## Setup

### Dependencies - I don't understand what dependencies means in this scenario - is this everytime or just once?

- Run `npm install` in project directory. This will install server-related dependencies such as `express`. //DONE
- `cd client` and run `npm install`. This will install client dependencies (React). //DONE

###

# I actually want the database to be called jiggyjams - but at the moment it is called test like the video tutorial Sofia shared - but I don't know how to change, I tried changing on line 14 database but it didn't update

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called test: `create database test`. To check this has bee done in mysql type command `show databases`;

- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=test
  DB_PASS=root
```

// change password to root and don't have anything else in this file - is this correct?

Ensure you created the env in the project folder and not a sub folder or the file will not work.

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create a table called 'products' in your database.

- Make sure you understand how the `products` table is constructed. In your MySQL console, you can run `use test;` and then `describe students;` to see the structure of the students table.

### products and test isn't right you need to amend the order

### Development

- Run `npm start` in project directory to start the Express server on port 4000
- In another terminal, do `cd client` and run `npm run dev` to start the client in development mode with hot reloading in port 5173.

### what does this hot reloading mean? Don't understand took from milestone 5

### Basic Requirments (to do everytime you open this project)

- Run `npm start` in project directory
