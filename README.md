# 📧 Email Writer – Full Stack App with AI

Email Writer is a full-stack, AI-powered email generation platform that helps users craft professional, personalized, and context-aware emails. It combines a modern React + Vite frontend with a robust Spring Boot backend, and leverages Gemini 2.5 Flash as the intelligence layer to generate human-like, high-quality email drafts.

---

🚀 Features

- ✍️ AI-Powered Email Writing – Uses Gemini 2.5 Flash to generate clear, professional, and context-aware emails.

- 🎨 Modern UI – Built with React + Vite for a fast, responsive, and user-friendly experience.

- 🔄 REST API Integration – Frontend communicates with backend using Axios for smooth data exchange.

- ⚡ Scalable Backend – Spring Boot provides reliable REST APIs for email processing, templates, and user management.

- 🔧 Customizable & Extensible – Easily adapt templates, tones, and workflows.

- 🔐 Separation of Concerns – Clean full-stack architecture with dedicated frontend and backend.

---

🛠️ Tech Stack

- Frontend: React, Vite, Axios, ESLint, npm

- Backend: Spring Boot, Java, REST APIs

- AI Agent: Gemini 2.5 Flash (for natural language email generation)

- Build Tools: Maven/Gradle

- Optional: Database integration for storing templates, history, and users

---

## 📁 Project Structure
```
email-writer/
│── email-writer-react/         # Frontend (React + Vite)
│   ├── src/                    # Components, Axios API calls
│   ├── public/                 # Static assets
│   └── package.json        

│── email-writer-sb/            # Backend (Spring Boot)
│   ├── src/main/java           # Java REST APIs
│   ├── src/main/resources      # Config & properties
│   └── pom.xml / build.gradle
```

---

## ⚙️ Installation & Setup

### 🔹 **Backend (Spring Boot)** 
```
  - cd email-writer/email-writer-sb
  - ./mvnw spring-boot:run   # For Maven projects
  # OR
  - ./gradlew bootRun        # For Gradle projects
```
Backend runs on: [http://localhost:8080]


### 🔹 **Frontend (React + Vite)** 
```
  - cd email-writer/email-writer-react
  - npm install
  - npm run dev
```

Frontend runs on: [http://localhost:5173]

---

## 🌟 Use Cases

* Professionals writing formal or client emails

* Students/job seekers drafting applications and cover letters

* Teams sending bulk template-driven communication

* Anyone who wants AI-assisted writing support

---

## 👤 Author

**Karipireddy Surya Teja Gopal Reddy**  
Dept. of Computer Science and Engineering,
National Institute of Technology Meghalaya  
Contact: karipireddysuryateja@gmail.com

---

## 📜 License

This project is developed for academic and Skill Development use. Open for non-commercial contributions.  

Attribution is appreciated.

