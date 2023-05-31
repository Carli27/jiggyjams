# jiggyjams

This is a full stack website to show the products available at jiggy jams. Jiggy jams are Scotch Bonnet Chilli Jam that can be a condiment, sauce, with cheese or incoporated into a marinade to give a spicy kick if that's your jam (see what I did there)

### Basic Requirments (to do everytime you open this project - but ONLY after you've followed the steps below)

- Run `npm start` in project directory from terminal
- In another terminal run `npm run dev` in project directory from terminal to run the server
- In aother termincal run `cd client` then `npm run dev` to view the front end (local host browser view) go into project folder

## Setup

### 1. Dependencies - I don't understand what dependencies means in this scenario - is this everytime or just once?

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React). //DONE

###

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

- Make sure you understand how the `products` table is constructed. In your MySQL console, you can run `use test;` and then `describe products;` to see the structure of the products table.

### WILL will they have test or just products when the access my database? is use test and describe products correct?

****\*\*****//// - development down here doesn't make sense to me

### Development

- Run `npm start` in project directory to start the Express server on port 4000
- In another terminal, do `cd client` and run `npm run dev` to start the client in development mode with hot reloading in port 5173.

\*\*\*/////// what does this hot reloading mean? Don't understand took from milestone 5

### Basic Requirments (to do everytime you open this project)

- Run `npm start` in project directory

ADD info about what database looks like
