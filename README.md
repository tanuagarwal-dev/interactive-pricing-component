# Frontend Mentor - Interactive Pricing Component Solution

This is a solution to the [Interactive Pricing Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8).  
Frontend Mentor challenges help you improve your coding skills by building realistic projects. ✨

---

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Features](#features)
  - [What I learned](#what-i-learned)
- [Author](#author)

---

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers
- Toggle dark/light mode

### Screenshot


<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/771fb118-d409-4423-abf8-07ea434476ae" />
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/3aec8b13-1892-4ad0-b710-e5cc9d9f8957" />


---
<img width="651" height="892" alt="image" src="https://github.com/user-attachments/assets/7f5b698c-72b8-4aba-8e07-af150bd9c64f" />
<img width="613" height="895" alt="image" src="https://github.com/user-attachments/assets/7cea1d33-2a0a-4b2d-b9fd-34bb8cffc70a" />



---

### Links

- Solution URL: [here]([https://your-solution-url.com](https://github.com/tanuagarwal-dev/interactive-pricing-component)
- Live Site URL: [here](https://interactive-pricing-component-chi-peach.vercel.app/)

---

## My process

### Built with

- Semantic **HTML5**
- **CSS custom properties**
- **Flexbox**
- **CSS Grid**
- **Mobile-first workflow**
- **React** + **Next.js 13 App Router**
- **Tailwind CSS** with **shadcn/ui**
- **next-themes** for dark mode toggle

---

### Features

- 🎚️ Interactive pricing slider with gradient fill
- 🌗 Dark/Light theme toggle (switch with emoji ☀️ 🌙)
- 🎨 Custom styled slider thumb with shadow & icon
- ✨ Animated floating background circles
- 📱 Responsive design (mobile → desktop)

---

### What I learned

- How to implement a **custom range slider** with a gradient background and a glowing thumb:

```css
input[type="range"]::-webkit-slider-thumb {
  background-color: #10d5c2;
  box-shadow: 0 0 15px #10d5c2; /* custom glow */
}
```
Using next-themes to toggle dark mode without hydration issues:

```
const { theme, setTheme } = useTheme();
<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
  {theme === "dark" ? "☀️" : "🌙"}
</button>
```
Applying dark mode filters to background SVGs:

```
<div className="dark:invert dark:brightness-50"></div>

```
## Author

- Frontend Mentor - [@tanuagarwal](https://www.frontendmentor.io/profile/tanu-agarwal0101)  
- GitHub - [TanuAgarwal02](https://github.com/tanuagarwal-dev)  
