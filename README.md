# 🏡 MERNestate

MERNestate is a full-stack real estate marketplace web application built using the **MERN stack** (MongoDB, Express.js, React, Node.js). It allows users to **create, browse, and manage property listings** for sale or rent. The app features **JWT-based authentication**, **Redux Toolkit** for state management, **Firebase integration** for image uploads, and **email communication** between users and listing owners.

## ✨ Features

- 🔐 **Authentication**: Secure user sign-up and login using JWT
- 🏠 **Listings**: Create, edit, and delete listings for sale or rent
- 🖼️ **Image Uploads**: Upload and store listing images via Firebase Storage
- 📧 **Contact Owners**: Send emails to listing owners directly from the app
- 🔍 **Search & Filter**: Browse listings with custom filters
- 💡 **State Management**: Managed using Redux Toolkit
- 💻 **Responsive UI**: Clean and mobile-friendly design with CSS

## 🛠️ Tech Stack

- **Frontend**: React, Redux Toolkit, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Storage**: Firebase
- **Email**: EmailJS / Nodemailer (based on your implementation)

Installation
Clone the repository:

bash git clone https://github.com/ShIvAm1248/mern-estate.git

Change into the project directory: bash cd Real-estate-Booking-Website

Install server dependencies:

npm install

Install client dependencies:

cd client npm install

Create a .env file in the root directory with your configuration settings.

MONGO = "MONGODB URI" JWT_SECRET = "JWTSECRET"

Start the development server:

npm run dev

