
# Booking System

A simple booking system built with **Node.js**, **Express.js**, **Sequelize ORM**, and **SQLite**. The system allows customers to book services, manage their appointments, and more. It provides a clean API for interacting with the system.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [API Endpoints](#api-endpoints)
  - [Fetch Available Services](#fetch-available-services)
  - [Create a Booking](#create-a-booking)
- [Sequelize Models](#sequelize-models)
- [Running the Application](#running-the-application)
- [License](#license)

---

## Project Overview

This booking system is designed to help users schedule appointments for various services. The system is built using **Node.js** for the backend, **Sequelize ORM** to interact with the SQLite database, and **Express.js** to manage routing and API functionality.

---

## Technologies Used

- **Node.js**: JavaScript runtime for server-side applications.
- **Express.js**: Web framework for building the REST API.
- **Sequelize ORM**: Object-relational mapper for interacting with SQL databases.
- **SQLite**: Lightweight database for development and testing.
- **Nodemon**: Development tool that automatically restarts the server on file changes.
- **TypeScript**: Superset of JavaScript that allows type annotations and improved developer experience.

---

## Setup and Installation

### Prerequisites

Before starting, ensure that you have the following installed on your machine:
- **Node.js** (v14+)
- **npm** (Node Package Manager)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/booking-system.git
cd booking-system
```

### 2. Install dependencies

Install the required dependencies using npm:

```bash
npm install
```

### 3. Database Setup

- The application uses **SQLite** as the database, which is bundled with Sequelize ORM.
- The database will be automatically created when you run the application for the first time.


---

## API Endpoints

The API provides a set of RESTful endpoints to interact with the booking system.

### **1. Fetch Available Services**

- **Endpoint**: `GET /services/providers`
- **Method**: `GET`
- **Description**: Retrieves all available services that can be booked by users.

**Example Response**:
```json
[
  {
    "id": 1,
    "name": "Haircut",
    "description": "Basic haircut service."
  },
  {
    "id": 2,
    "name": "Massage",
    "description": "Relaxing massage service."
  }
]
```

### **2. Create a Booking**

- **Endpoint**: `POST /bookings`
- **Method**: `POST`
- **Description**: Creates a new booking for a service with customer details.

**Request Body**:
```json
{
  "serviceId": 1,
  "customer_name": "John Doe",
  "customer_email": "john@example.com",
  "customer_phone": "+123456789",
  "booking_date": "2025-05-01T10:00:00Z",
  "notes": "Please be on time."
}
```

**Example Response**:
```json
{
  "id": 1,
  "serviceId": 1,
  "customer_name": "John Doe",
  "customer_email": "john@example.com",
  "customer_phone": "+123456789",
  "booking_date": "2025-05-01T10:00:00Z",
  "notes": "Please be on time.",
  "status": "Booking Created"
}
```

---

## Sequelize Models

The system uses **Sequelize ORM** to interact with the database. Below are the models:

### **1. Service Model**

- Represents the services available for booking.
- Attributes: `id`, `name`, `description`.

### **2. Booking Model**

- Represents a booking made by a customer.
- Attributes: `id`, `serviceId`, `customer_name`, `customer_email`, `customer_phone`, `booking_date`, `notes`.

---

## Running the Application

### Development Mode (with Nodemon)

To start the application in development mode, run:

```bash
npm run start:dev
```
```bash
npm start
```

This will start the server using **Nodemon**, which will automatically restart the application whenever changes are made to the code.

### Production Mode

To start the application in production mode (after compiling TypeScript):

```bash
npm run start
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
