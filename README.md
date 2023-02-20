# Notes-API

This repo contains the api collection for a simple note app


## Requirements
1. User should be able to register
2. User should be able to login 
3. User should be able to logout
3. Implement basic auth
4. User should be able to create note
5. Users should be able to get all notes
6. Users should be able to get a note
7. Users should be able to update and delete note


## Setup
Install NodeJS, mongodb
pull this repo
Open the folder on your local computer
At the terminal, run `npm install` to install all packages
run `npm run start:dev` or `nodemon` to start the server

## Base URL
[https://notes-api-w63j.onrender.com](https://notes-api-w63j.onrender.com)


# Models
### User
| Field  | Data type | constraint
| ------------- | ------------- |------------- |
| Email  | String  | unique, required |
| id | String | required |
| firstName | String | required |
| lastName | String | required |
| Password | String | required |
| timestamps | String | required |


### Notes
| Field  | Data type | constraint
| ------------- | ------------- |------------- |
| id | String | required |
| name | String | required |
| descriptions | String | required |
| userId | String | required |

## API Routes
All routes and API details can be found at the documentation [here](https://documenter.getpostman.com/view/19697282/2s935uFfif#b6613990-d95b-4682-b0cb-3ad8c6462972)
