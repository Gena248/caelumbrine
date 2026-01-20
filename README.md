# Caelumbrine — A Magical Glossary of Worlds

Final Project • Stage 1 • Frontend + Third‑Party API

Caelumbrine is a magical glossary and world‑building companion inspired by Justine Sears's book universe. Users can browse entries, filter by theme or letter, search dynamically, and explore illustrations on a separate (future) route. The project includes a simulated authentication flow and integrates a third‑party weather API to display dynamic quotes based on current conditions.

---

## 🌐 Live Demo

**Deployed via GitHub Pages:**  
[https://gena248.github.io/caelumbrine/]

**Demo Video:**  
[https://youtu.be/cPwYDOpkVlg]

Note: I currently do not have access to a camera. To fulfill the project requirements, I recorded my pitch using available tools without video footage. The content still covers the project overview and challenges as requested.

---

## 📌 Features

### 🔮 Glossary Browser

- Browse a collection of magical terms and definitions
- Filter by theme (Creatures, Magic, Places, etc.)
- Filter by starting letter
- Search dynamically with a controlled input
- “Random Entry” button scrolls smoothly to a random card

### 🌤 Weather‑Based Dynamic Quote

- Integrates the **OpenWeatherMap API**
- Fetches real‑time weather data on page load
- Displays a mystical quote based on the current weather
- Includes a preloader while data loads

### 🗺 Routing

- Built with **React Router**
- Two routes:
  - `/` — Main glossary page
  - `/books` — Current and future books
- Navigation links work correctly and use semantic routing

---

## 🛠 Tech Stack

- **React (functional components + hooks)**
- **Vite**
- **React Router**
- **Fetch API**
- **Lucide React** for icons
- **Custom fonts via @font-face**
- **CSS with BEM methodology**
