## Welcome to Flight Service 

## Project Setup
- clone the project on your local 
- Exucute `npx install` on the same path as of your root directory
- Create a .env file in the root directory and add the following enviornment variables 
    - `PORT=3000`
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


