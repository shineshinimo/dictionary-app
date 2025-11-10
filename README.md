# 🧠 Dictionary — React + Vite Project

A simple React application for saving, displaying, and deleting terms with descriptions.  
All data is stored in **LocalStorage**, so your term list persists even after page reloads.

---

## 🚀 Tech Stack
- **React 18**  
- **Vite 4**  
- **JavaScript (ES6+)**  
- **CSS (modular structure)**  
- **LocalStorage API**

---

## 📂 Project Structure

```
src/
│
├── main.jsx          # Entry point handling saving & rendering logic
├── TermList.jsx      # Component that displays the list of term cards
├── TermCard.jsx      # Component representing a single term card with a delete button
│
├── index.css         # Global styles
├── TermList.css      # Styles for term list
└── TermCard.css      # Styles for term cards
```

---

## ⚙️ Installation & Run

1. **Clone the repository**
   ```bash
   https://github.com/shineshinimo/dictionary-app.git
   cd dictionary-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the project**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 💡 Features

✅ Add new terms via form  
✅ Automatic alphabetical sorting  
✅ Delete terms with a single click  
✅ Automatic saving to **LocalStorage**  
✅ Restore saved terms on page reload  

---

## 🧩 How It Works

1. On form submit, a new term object is created:
   ```js
   {
     id: Date.now(),
     title: 'Title',
     descr: 'Description'
   }
   ```
2. The term is added to the `terms` array and sorted alphabetically.  
3. The updated list is saved to `localStorage`.  
4. The `TermList` component re-renders all `TermCard` components.

---

## 📸 Preview

Currently in progress...

---
