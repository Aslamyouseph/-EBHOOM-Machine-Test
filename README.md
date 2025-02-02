# Real-Time Chat Application 🚀  

A real-time chat application built using the **MERN (MongoDB, Express.js, React.js, Node.js) stack**.  
This app allows users to chat in real-time, share media, and receive notifications.

---

## 📌 Features  
✅ **User Authentication** – Secure login & registration
✅ **Real-Time Messaging** – One-to-one chat using Socket.IO  
✅ **Media Sharing** – Supports image and document uploads  
✅ **Notifications** – Real-time & email notifications (Nodemailer)  
✅ **Responsive UI** – Clean and modern interface  

---

## 🛠️ Technologies Used  
- **Frontend**: React.js, Tailwind CSS , Bootstrap
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Real-Time**: Socket.IO  
- **Authentication**: bcrypt  
- **File Uploads**: Multer 
- **Deployment**: AWS (EC2 / Elastic Beanstalk)  

---

##  ⚙️ Installation
1 - Clone the repository:

git clone https://github.com/Aslamyouseph/-EBHOOM-Machine-Test.git

2 - Navigate to the project directory:

cd MT

3 - Install dependencies:

npm install

---

##  🚀 Running the Project Locally
1 - Start the backend server:

npm start

The app should now be running at http://localhost:5000.

2 - Start the frontend client:

npm start

The app should now be running at http://localhost:3000.

---

📂 Project Structure


/MT
 ├── client/ (Frontend - React.js)
 |   ├── node_modules
 |   ├── public/
 |   |   ├──favicon.ico
 |   |   ├──index.html
 |   |   ├──mainfest.json
 │   ├── src/
 │   │   ├── assets
 │   │   ├── chatApp
 |   │   │   ├── chatApp.js
 |   │   │   ├── chatApp.css
 │   │   ├── components
 |   │   │   ├── Button
 |   │   │   ├── Input
 │   │   ├── home
 |   │   │   ├── home.js
 |   │   │   ├── home.css
 │   │   ├── NavBar
 │   │   ├── UserAccount
 |   │   │   ├── editProfile
 |   │   │   |  ├── editProfile.js
 |   │   │   |  ├── editProfile.css
 |   │   │   ├── login
 |   │   │   |  ├── login.js
 |   │   │   |  ├── login.css
 |   │   │   ├── signUp
 |   │   │   |  ├── signUp.js
 |   │   │   |  ├── sign.css
 |   │   │   ├── UserProfile
 |   │   │   |  ├── UserProfile.js
 |   │   │   |  ├── UserProfile.css
 │   │   ├── userPage
 |   │   │   ├── chatApp.js
 |   │   │   ├── editProfile.js
 |   │   │   ├── home.js
 |   │   │   ├── login.js
 |   │   │   ├── profile.js
 |   │   │   ├── signup.js
 │   │   ├── App.css
 │   │   ├── App.js
 │   │   ├── index.css
 │   │   └── index.js
 │   ├── package-lock.json
 │   ├── package.json
 │   └── tailwind.config.js
 │
 ├── server/ (Backend - Node.js)
 │   ├── DB-configiration
 │   |   ├── DB-connection.js
 │   ├── DB-models
 │   |   ├──Conversation.js
 │   |   ├── Message.js
 │   |   ├── User-Account.js
 │   ├── helpers
 │   |   ├── UserHelpers.js
 │   ├── node_modules
 │   ├── routes
 │   |   ├── UserRoutes.js
 │   ├── index.js
 │   ├── package-lock.json
 │   └── package.json
 ├── README.md
 ├── .gitignore
 ├── package.json
 └── .env


---

🛠️ Authentication Routes

Method	         Endpoint	                 Description
POST	           /api/user/register	       User registration
POST	           /api/user/login	         User login
GET	             /api/user/logout	         User logout

---


🏆 Future Enhancements
🚀 Group Chat Feature – Add support for group messaging
🔒 End-to-End Encryption – Secure chats using encryption
📞 Voice & Video Calls – Integrate WebRTC for calls
🌎 Multi-Language Support – Add localization support











