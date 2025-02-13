# **User Registration & Authentication Backend**

This project is a backend web application built using **Express.js**, **MongoDB**, and **JWT** for user registration, login, and searching. It supports user registration with essential details such as username, password, full name, gender, date of birth, and country. Additionally, it includes functionality to search users by their username or email and retrieve their full details after login.

## **Features:**
- **User Registration:** Allows users to register with username, password, full name, gender, date of birth, and country.
- **User Login:** Authenticates users with email and password, returning a JWT token for further authentication.
- **Search User:** Allows searching for users by username or email and retrieving their details.

## **Tech Stack:**
- **Backend:** Express.js (Node.js)
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Middleware:** `express.json()` for parsing JSON, `cors` for handling cross-origin requests

## **Endpoints:**
1. **User Registration (POST)**  
   `POST /api/auth/register`  
   - Request body: 
     ```json
     {
       "username": "exampleUser",
       "password": "examplePassword",
       "email": "exampleEmail",
       "fullName": "John Doe",
       "gender": "Male",
       "dob": "1990-05-10",
       "country": "USA"
     }
     ```
   - Success response:  
     ```json
     {
       "message": "User registered successfully"
     }
     ```

2. **User Login (POST)**  
   `POST /api/auth/login`  
   - Request body:
     ```json
     {
       "username": "exampleUser",
       "password": "examplePassword"
     }
     ```
   - Success response:
     ```json
     {
      "token": "jwtTokenHere",
      "user": {
        "username": "username",
        "email": "email",
        "fullName": "fullName",
        "gender": "gender",
        "dob": "dob",
        "country": "country"
      }
     }
     ```
   - This JWT token is used for authentication in subsequent API requests.

3. **Search User (GET)**  
   `GET /api/user/search`  
   - Query parameters:
     - `username` (optional)
     - `email` (optional)
   - Example: `GET /api/user/search?email=example@example.com`
   - Success response:  
     ```json
     {
       "_id": "id",
       "username": "username",
       "email": "email",
       "fullName": "fullName",
       "gender": "gender",
       "dob": "dob",
       "country": "country",
     }
     ```
