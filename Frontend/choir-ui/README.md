# 🎵 Choir Website (Full Stack Project)

A full-stack web application for managing a church choir team.
Built using **Angular (frontend)**, **.NET Web API (backend)**, and **AWS DynamoDB (cloud database)**.

---

## 🚀 Features

* 🎶 Choir Home Page
* 👥 About / Team Information
* ⏰ Practice Schedule
* 📝 Join Choir Form
* 📋 View Members List (from AWS DynamoDB)
* ☁️ Cloud data storage (AWS)

---

## 🏗️ Tech Stack

### Frontend

* Angular (Standalone Components)
* HTML, CSS

### Backend

* .NET 8 Web API
* REST API

### Cloud

* AWS DynamoDB
* AWS IAM (authentication & permissions)

---

## 📂 Project Structure

```
MyChoir/
│
├── Backend/
│   └── Choir.API/
│       ├── Controllers/
│       ├── Models/
│       ├── Services/
│       └── Program.cs
│
└── Frontend/
    └── choir-ui/
        ├── src/app/pages/
        ├── src/app/services/
        └── main.ts
```

---

## ⚙️ Setup Instructions

### Clone Repository

```
git clone https://github.com/your-username/choir-website.git
cd choir-website
```

---

### Backend Setup (.NET)

```
cd Backend/Choir.API
dotnet restore
dotnet run
```

API runs at:

```
http://localhost:5000/api/join
```

---

### Frontend Setup (Angular)

```
cd Frontend/choir-ui
npm install
ng serve
```

App runs at:

```
http://localhost:4200
```

---

### AWS Setup

* Create DynamoDB table:

  * Table name: `ChoirMembers`
  * Partition key: `Id (String)`

* Configure AWS CLI:

```
aws configure
```

---

## API Endpoints

### POST `/api/join`

Add a new choir member

### GET `/api/join`

Get all choir members

---

## Screens

* Home page
* Join form
* Members list (live data from AWS)

---

## 🧠 Key Learnings

* Full-stack development (Angular + .NET)
* REST API integration
* AWS DynamoDB integration
* Handling CORS and HTTP requests
* Git & GitHub workflow

