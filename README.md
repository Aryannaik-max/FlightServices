## Welcome to Flight Service 

## Project Setup
- clone the project on your local 
- Exucute `npx install` on the same path as of your root directory
- Create a .env file in the root directory and add the following enviornment variables 
    - `PORT=3000`
    - `DB_SYNC=true` when want to sync your database remove it once synced
- Inside the `src/config` folder create a new file `config.json` and then add the following json

```
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "flight_search_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- Once you've added your db config as listed above, go to the `src` folder from your terminal and run `npx sequelize db:create` and then execute `npx sequelize db:migrate`
 

