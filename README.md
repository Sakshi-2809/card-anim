# 🃏 Interactive Card Stack Animation

An interactive **card stack UI animation** built using HTML, CSS, and JavaScript.  
Cards are layered in a stacked layout and rotate forward when clicked, creating a smooth and engaging visual effect.

---

## 📝 About the Project

This project demonstrates how **CSS transforms, z-index layering, and JavaScript DOM manipulation** can be combined to create an interactive card-based interface.

On each click, the top card moves to the back and the next card comes forward, simulating a rotating card stack.

---

## ✨ Features

- Stacked card layout with rotation
- Smooth hover and click animations
- Dynamic z-index handling
- Looping card navigation
- Clean and modern UI design

---

## 🛠️ Technologies Used

- **HTML5** – Structure
- **CSS3**
  - Flexbox
  - Transform & Transition
  - Z-index layering
- **JavaScript (Vanilla JS)**
  - DOM selection
  - Event handling
  - Dynamic styling

---

## 🎯 How It Works

- Cards are positioned absolutely and layered using `z-index`
- CSS handles rotation, scaling, and hover effects
- JavaScript tracks the currently active card
- On click, the top card moves to the back and the next card comes forward

---

## 📂 Project Structure

```text
Card-Stack-Animation/
│
├── cards.html   # Main HTML file
├── cards.css    # Styling and animations
├── cards.js     # Card rotation logic
├── images/      # Card images (optional folder)
└── README.md
