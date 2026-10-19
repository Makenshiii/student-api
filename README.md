# Student Records API

## 1. Project Description

The Student Records API is a RESTful API developed using Node.js and Express.js. It allows users to manage student records by creating, retrieving, updating, and deleting student information.

Each student record contains a unique ID, name, course, and year level. The API returns JSON responses and validates the data submitted by users.

This project was developed for Laboratory Activity 9 in Integrative Programming & Technology (ITPE101).

## 2. Technologies Used

- Node.js
- Express.js
- JavaScript
- Postman
- Git and GitHub
- Render

## 3. Installation and Local Execution

### Prerequisites

- Node.js and npm installed
- Visual Studio Code
- Postman (for API testing)

### Installation Steps

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Open the terminal inside the project folder.
4. Install the dependencies:

   npm install

5. Start the server:

   npm start

6. Open the following URL in your browser:

   http://localhost:3000/

The API should return a message confirming that the Student Records API is running.



## 4. API Endpoints

The API provides the following endpoints:

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | / | Check API status |
| GET | /api/students | Retrieve all students |
| GET | /api/students/:id | Retrieve a student by ID |
| POST | /api/students | Create a new student |
| PUT | /api/students/:id | Update an existing student |
| DELETE | /api/students/:id | Delete a student by ID |

## 5. Example Requests

### A. Retrieve All Students

Method: GET

Endpoint: /api/students

Example URL:

http://localhost:3000/api/students

Returns the list of available student records.

### B. Retrieve One Student

Method: GET

Endpoint: /api/students/1

Returns the student whose ID is 1.

### C. Create a Student

Method: POST

Endpoint: /api/students

In Postman, select Body > raw > JSON and enter:

{
  "name": "Pedro Reyes",
  "course": "BSIT",
  "year": 3
}

The API generates an ID for the new student and returns a success message with the created record.

### D. Update a Student

Method: PUT

Endpoint: /api/students/1

In Postman, select Body > raw > JSON and enter:

{
  "name": "Juan Dela Cruz",
  "course": "BSIT",
  "year": 4
}

All three fields are required when updating a student. The API returns the updated record if the request is successful.

### E. Delete a Student

Method: DELETE

Endpoint: /api/students/1

Deletes the student with ID 1 and returns a success message with the deleted record.


## 6. Github Repository URL

https://github.com/Makenshiii/student-api.git





## 7. Render Deployment

https://student-api-oi8j.onrender.com

## 8. Known Limitations

This project stores student records in an in-memory JavaScript array. The initial records are loaded when the server starts, and changes made through API requests are temporary.

Student records may be lost when the server restarts or the deployment instance is replaced. The project does not currently use a database for permanent storage.
