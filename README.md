# Restauraunt Onboarding

It is a web application designed for restaurant self-onboarding. It enables new restaurants to fill in their details, submit them, and receive notifications for the response.

## Technology Used

The following technologies were used to develop this project:

- MongoDB
- Express.js
- React.js
- Node.js
- HTML/CSS

## Here are the steps to set up the backend:

1. Begin by cloning the repository.
2. Open the terminal or command prompt and navigate to the `backend` directory.
3. Use the command `npm install` to install all the required dependencies for the backend.
4. Create a new file called `.env` inside the `backend` directory.
5. In the `.env` file, add the following variables:
   - `MONGO_USERNAME`: Your MongoDB database username.
   - `MONGO_PASSWORD`: Your MongoDB database password.
   - `MONGO_DB_NAME`: The name of your MongoDB database.
   - `MONGO_HOST`: The host of your MongoDB database.
   - `PORT`: The port number on which the server will run.
6. Save the `.env` file.
7. To start the server, run the command `npm start` in the terminal or command prompt.

By following these steps, you will have the backend set up and running for your project.

## To set up the frontend, follow these steps:

1. Go to the `frontend` directory in your project.
2. Use the command `npm install` to install all the necessary dependencies for the frontend.
3. Once the dependencies are installed, start the development server by running the command `npm start`.

By following these steps, the frontend of your project will be set up and the development server will be running.

## API Documentation

- Documentation for the API endpoints included in the project, such as:
  - POST /restaurant
  - Body
  ```BASH    
     {
        "restaurantName" : "Oberoi",
        "contactName" : "Vivek",
        "pincode" : 234561,
        "location" : "Mumbai",
        "website" : "Oberoi.com",
        "phoneNumber" : "9876543211",
        "avgDailyTransactions" : 96
     }    
  ```    
  - Response of API
  ```js
  {
    "message": "Form submitted successfully."
   }
  ```
    

## Usage

Once the server and client are running, navigate to `http://localhost:3000` to use the application.

## Contributors

- [Snehal Chandra](https://github.com/Yellowflash7392)
