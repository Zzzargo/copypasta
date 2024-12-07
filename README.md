# 🍽️ # Proba IT 2024 - Copy Pasta

**Copy Pasta** is a web application where users can browse, filter, sort, add and rate recipes. This app is designed to offer an intuitive user experience, with dynamic interactions on the front-end and a robust back-end for managing recipes.

## 🌟 Features
- 🕵️ **Search Recipes**: Quickly find recipes by title, rating, or popularity.
- 🎛️ **Filter and Sort**: Filter recipes by rating and sort them by different criteria (e.g., top-rated, most-rated).
- ⭐ **Rate Recipes**: Users can rate recipes on a scale of 1 to 5 stars. Each user can rate a recipe only once.
- 📖 **Detailed Recipe View**: View recipe descriptions, ratings, and author details in an interactive pop-up.

---

## 🖥️ Front-End

The front-end is built with **React + Vite** and styled for an attractive and responsive user experience.

### Pages and Components

#### 🏠 Homepage
- On the homepage the logo reigns on the first half, while on the second half there is a form for contacting the team (me. Don't contact me. I haven't made it to work yet.)
- **Footer**: Includes icons that redirect users to external links.

#### 🔎 Recipes Page
- **Search and Filter**:
  - A dynamic search bar and filter options to search recipes by title and filter them based on rating (1-5 stars).
- **Recipe Cards**:
  - Each card displays:
    - The recipe image (haven't added the possibility to add images to the recipes but maybe I'll do that sometime)
    - Title
    - Author
    - Rating (1-5 stars. The rating from the database is rounded so the front can render it easily)
    - Number of ratings
- **Recipe Pop-up**:
  - Clicking on a recipe displays detailed recipe information:
    - Title, description, and author
    - Rating (again, rounded)
    - Rate section
    
#### :heavy_plus_sign: Add Recipe Page
- On this page any user can add their recipe, with the title and description.
- The 'Guest' user is the default user

#### :coin: Login Page
- On this page you can, surprise, log in.
- The app uses a database so don't worry, you will still be logged in if you close your browser or even shut down your PC.
- To login, an user must put into the textboxes their email and password

#### :floppy_disk: Register Page
- If there is a login page, there must be a register page
- **Security**:
  - The app uses bcrypt to hash passwords, so if you have access to the server - goodluck getting those passwords
- To register, the user must type their desired username, email, phone number, and to choose a password
- If you do everything nice, a pop-up will tell you that you registered a user successfully

#### :person_white_hair: Profile Page
- Here the user can view their credenitals excluding the password.
- Below the two cards there is a 'Add Recipe' button that takes the user to the 'Add Recipe' page

---

## 🌐 Back-End

The back-end is built using **Express.js** and connected to a **MongoDB** database. It provides RESTful APIs for managing recipes.


### Models
- The models that MongoDB uses are User and Recipe
- Both can be found in express-server/models directory

### Endpoints

####  Recipes
1. /users
- This endpoint accepts POST, GET, DELETE
  - With GET you can get all the users. This is just for developing. The request can be made from REST Client
  - With POST you can register a new user. This user is then saved on the database
  - With DELETE you can remove an existing user. This is not implemented yet but can be done easily and I will probably do that soon
2. /users/login
- This endpoint accepts only POST
  - With POST you can try to log in. If the given credentials are correct, the client receives the message to log in and the credentials to store for the current user session
3. /recipes
- This endpoint accepts GET, POST, PATCH, DELETE
  - With GET you can get all the recipes. This is used by the client when accesing the search page
  - With POST you can add a new recipe. It is then stored on the database to be fetched when the client is on the search page
  - With PATCH you can rate a recipe. A new rating is calculated based on the existing one from the database and the rating given by the current request, then it is stored on the database
  - With DELETE you can remove a recipe. This is just for developing so far

---

## 🛠️ Tech Stack
- Frontend: **React**, **Vite**
- Backend: **Express.js**
- Database: **MongoDB**
- Styling: **CSS**
- Edtior: **Visual Studio Code**
- HTTP Client: **Axios**
- Useful tool: **REST Client** from Visual Studio Code

