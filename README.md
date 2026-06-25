# 🚀 CreatorFlow AI

An AI-powered YouTube Content Studio that generates complete YouTube content including SEO titles, video scripts, descriptions, thumbnail prompts, tags, and alternative video ideas using Google Gemini API.

---

## ✨ Features

* 🤖 AI-powered content generation using Google Gemini API
* 📝 Generates 2–3 minute YouTube video scripts
* 🎯 SEO-optimized video titles
* 📄 YouTube video descriptions
* 🖼️ AI thumbnail prompts
* 🏷️ Relevant tags and SEO keywords
* 💡 Alternative content ideas
* 📚 Stores generation history in MongoDB Atlas
* 📋 One-click copy functionality
* 📱 Responsive modern user interface

---

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript
* Axios
* CSS3

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### AI

* Google Gemini API

### Deployment

* Vercel

---

## 📂 Project Structure

```
CreatorFlow-AI
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/mandeeproy999999-commits/CreatorFlow-AI.git
```

### Backend Setup

```bash
cd CreatorFlow-AI/server

npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_URI
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Run the backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd ../client

npm install

npm run dev
```

---

## 🌐 Live Demo

**https://creator-flow-ai-youtube-tool.vercel.app**

---

## 📌 API Endpoints

### Generate AI Content

```
POST /api/generate
```

Example Request

```json
{
  "topic": "French Revolution",
  "audience": "General",
  "tone": "Educational",
  "category": "History"
}
```

---

### Fetch Generation History

```
GET /api/history
```

---

## 🚀 Future Improvements

* User Authentication
* Export Script as PDF
* Download Generated Content
* Favorite Saved Projects
* Search & Filter History
* Multi-language Script Generation
* AI Image Generation for Thumbnails
* Content Templates
* Voice Script Generation
* Team Collaboration

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
