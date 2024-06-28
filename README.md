# Email Scheduler

## Project Overview

This project implements a backend API service for scheduling and sending emails using Node.js, Express.js, MongoDB, Agenda, and Nodemailer. The API allows users to schedule emails to be sent after a specified time, leveraging Agenda for job scheduling and Nodemailer for sending emails.

## Features

- Scheduling API: Provides a POST endpoint to schedule emails with parameters including time, email address, subject, and body.
- Job Scheduling: Uses Agenda to schedule email sending tasks to execute after 1 hour from the requested time.
- Email Sending: Utilizes Nodemailer for sending emails with customizable subject and body content.
- Authentication: Supports authentication to secure the scheduling API endpoints.
## Technologies Used

- Node.js
- Express.js
- MongoDB
- Agenda
- Nodemailer
- JWT (JSON Web Token)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MySQL database


# Run Locally

### Clone the repository:
   ```sh
   git clone https://github.com/Atmalviya/Email_Scheduler-BE.git
   cd Email_Scheduler-BE
```

### Install dependencies:

```bash
  npm install

```
    
## Environment Variables

Set up your environment variables:

```bash
PORT=3000
EMAIL= your Email Address 
EMAIL_PASSWORD= email password || App password or email if 2FA is enabled
JWT_SECRET= your secret key
MONGODB_URI= your mongoDB URL
```
## Start the server

```bash
  npm start
```


## API Endpoints

- **POST /auth/signUp**
  - Registers a new user with email and password.
  - Request Body:
    ```json
    {
      "email": "user@example.com",
      "password": "password"
    }
    ```
  - Response:
    ```json
    {
      "message": "User created successfully"
    }
    ```

- **POST /auth/signIn**
  - Authenticates a user and generates a JWT token.
  - Request Body:
    ```json
    {
      "email": "user@example.com",
      "password": "password"
    }
    ```
  - Response:
    ```json
    {
      "message": "Signed in successfully",
      "success": true,
      "token": "<JWT_TOKEN>"
    }
    ```

- **POST /api/schedule-email**
  - Endpoint to schedule an email to be sent after 1 hour.
  - Request Body:
    ```json
    {
      "time": "2024-06-30T10:00:00Z",
      "email": "recipient@example.com",
      "subject": "Meeting Reminder",
      "body": "Don't forget our meeting today!"
    }
    ```
  - Response:
    ```json
    {
      "message": "Email scheduled successfully",
      "success": true
    }
    ```


## Deployment

The application is hosted on Render. You can access it at:

### Endpoint: 
```bash
  https://email-scheduler-be.onrender.com
```


## Feedback

If you have any feedback, please reach out to us at atulmalviyawork1@gmail.com


# Hi, I'm Atul! 👋


## 🚀 About Me


Hey! I'm Atul Malviya, a software developer and Computer Science graduate from Jabalpur Engineering College. Currently, I'm gaining valuable experience as a Software Developer at Opensense Labs. Apart from coding, I've served as the TPO of my college and have a passion for karate, having represented India and won three national gold medals. Let's connect and code together! 🚀

Reach me at [email](mailto:atulmalviyawork@gmail.com) or find me on [LinkedIn](https://www.linkedin.com/in/atul-malviya/).


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/atul-malviya/)



## 🛠 Skills
Javascript, TypeScript, SQL, MERN/MEAN, GIt, Bit Bucket, PHP


## 
👩‍💻 I'm currently working on MERN & MEAN Stack

🧠 I'm currently learning Node.js

📫 How to reach me...-> https://www.linkedin.com/in/atul-malviya/

