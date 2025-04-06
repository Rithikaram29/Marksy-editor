# marksy 📝  
*A clean, real-time Markdown editor with live preview and caching.*

## 🚀 Features

- Live Markdown to HTML preview
- Local caching for repeated markdown content
- Sanitized HTML output for security
- Express.js backend with API support
- Built with React + Vite on the frontend

## 🖥️ Tech Stack

- **Frontend**: React + Vite + Axios + Tailwind (optional)
- **Backend**: Node.js + Express + TypeScript
- **Markdown Parsing**: `marked` or `markdown-it`
- **Security**: `sanitize-html` / `dompurify`
- **Caching**: NodeCache

## 🛠️ Environment Setup (Backend)

Create a `.env` file inside the `markdown-backend` folder with a port of your choice.
This allows the backend to run on your preferred port. If not set, it defaults to port 7231.


## 📦 Installation

```bash
git clone https://github.com/your-username/marksy.git
cd Markdown_Editor

cd markdown-backend
npm install
npm run dev

cd ../markdown-frontend
npm install
npm run dev
