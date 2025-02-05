## Ecommerce Follow Along Project

Welcome to the **Ecommerce Follow Along Project**, this is a hands-on project where we will build a complete e-commerce application using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The goal is to learn how to develop a full-stack web application step by step.

## Milestone 1: Project Overview

### 1. Understanding the MERN Stack:

**MongoDB:** A database for storing application data in a flexible, document-based format.
**Express.js:** A backend web application framework for building APIs and handling server logic.
**React.js:** A frontend JavaScript library for building user interfaces.
**Node.js:** A runtime environment that allows JavaScript to run on the server.

### 2. REST API Structure

REST APIs are used to allow communication between the frontend and backend.

We'll create APIs for:

- **User Authentication**: Allowing users to register and log in.
- **Product Management**: Adding, updating, and retrieving product data.
- **Order Handling**: Managing customer orders..

### 3. Database Schema Design

We'll learn how to design and organize data using MongoDB. A schema helps us define how the data is stored and related.

### 4. Authentication

Authentication ensures only the right people can access certain features. For example:

- Users need to log in to place orders or see their personal data.
- It keeps the app secure by verifying users' identities.

# milestone 2:
In the repo that I have already created for Ecommerce_follow_along I cloned and created a cra app and installed tailwindcss and I created the login page UI .

## Milestone 3:

- Set up dedicated folders for organizing backend code effectively.
- Initialized and configured a Node.js server to handle API requests.
- Connected the application to MongoDB to store and manage data.
- Implemented basic error handling to ensure smooth server operation.

## Milestone 4:

- Created a User Model to define how user data is structured in the database.
- Developed a User Controller to manage user interactions, like adding or retrieving data.
- Configured Multer to handle file uploads, allowing users to store files such as images.

## Milestone 5: 
In this milestone, I built the Sign-Up page for user registration using HTML and CSS. I implemented form validation to ensure valid inputs, like email format and password security. This enhances user experience and prevents errors. All changes have been committed and pushed to the repository. 

## Milestone 6 :
In this milestone, I created a backend signup API that securely stores user data. Passwords are encrypted using bcrypt before saving to MongoDB. The API ensures secure user authentication and data privacy. All changes are committed and pushed.

## Milestone 7
In this milestone, we implemented user login authentication by validating credentials and comparing encrypted passwords using bcrypt. The process involves retrieving user data, hashing the entered password, and matching it with the stored hash. If authenticated, access is granted; otherwise, an error is returned. This enhances security and protects user data. 

## Milestone 8
In this milestone, we created a reusable product card component and designed a homepage to display multiple cards dynamically. The component receives product details as props and is rendered using array mapping. This improves UI consistency, enhances user experience, and maintains an organized layout for showcasing products effectively.
# Milestone 9 - Creating a Product Form

## Why Create a Product Form?
The Product Form is essential for adding new products to the database. It allows users to input product details, which will be stored in MongoDB Atlas and displayed on the Products Home Page.

## Key Features of the Product Form:
- *Product Details Input:* The form collects essential details like:
  - Product Name  
  - Price  
  - Category  
  - Description  
  - Stock Availability  
- *Data Storage:* The entered data will be saved in MongoDB Atlas.  
- *Future Enhancements (for experimentation):*  
  - *Admin Access:* Only admins can upload products.  
  - *Shop Profiles:* A user with a "Shop Profile" can add and manage products.  

## Steps to Implement:
1. *Create a Product Form* in *React/HTML* to collect product details.  
2. *Handle Form Submission* to store the product data in MongoDB.  
3. *Restrict Access* (Optional Enhancements) based on user roles (Admin/Shop).  

This milestone helps in understanding how to structure and manage product data efficiently.

# Milestone 10 Summary

In this milestone, you'll learn how to create a *mongoose schema* for products and build an *endpoint* to store product details in MongoDB. The main steps include:

## 1. Product Schema
- Define the structure for product data (e.g., name, description, price) with validation for required fields and correct data types.

## 2. Endpoint Creation
- Build a POST endpoint to receive product data, validate it, and save it to MongoDB.

## 3. Validation
- Ensure only valid data is saved, which helps maintain data integrity and prevent errors.