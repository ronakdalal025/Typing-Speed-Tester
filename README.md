# 🧠 Typing Speed Tester

A responsive and interactive web app to test and improve your typing speed! This application fetches random paragraphs and tracks your typing accuracy, speed, and highest score using `localStorage`.

---

## 🚀 Live Demo

👉 [Click here to try the Typing Speed Tester](https://ronakdalal025.github.io/Typing-Speed-Tester/)  

---

## 📸 Preview

![image](https://github.com/user-attachments/assets/e03656a0-71e8-44e7-9756-67ac4f2bf70e)

---

## 🛠 Features

- ⏱️ **Countdown Timer** (60 seconds)
- 💬 **Real-Time Typing Feedback**
  - Blue text for correct characters
  - Red background for incorrect characters
- 💯 **WPM (Words Per Minute) Calculation**
- 🏆 **Highest Speed Tracking** (saved in `localStorage`)
- 🔁 **Restart Button** to try again with a new paragraph

---

## 🧩 Tech Stack

- **HTML**
- **CSS** (with Bootstrap 5.3)
- **JavaScript (ES6)**
- **Axios** (for API calls)
- **[Bacon Ipsum API](https://baconipsum.com/json-api/)** – for generating sample text

---

## 📂 Project Structure

```plaintext
Typing-Speed-Tester/
├── index.html         # Main HTML structure and UI layout
├── style.css          # Custom styles and caret animation
├── app.js             # JavaScript logic: typing, scoring, rendering
└── README.md          # Project documentation

## Setup Instruction
# 1. Clone the repository
git clone https://github.com/your-username/Typing-Speed-Tester.git

# 2. Navigate into the project directory
cd Typing-Speed-Tester

# 3. Open the app in your browser
# You can either double-click index.html or use a live server extension
