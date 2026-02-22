# Chitranshu Pandey | Developer Portfolio

A highly interactive, motion-driven, and physics-based developer portfolio. This project was engineered from scratch without templates, pushing the boundaries of creative web development by blending raw WebGL with buttery-smooth scroll animations.

[**View Live Demo →**](https://chitranshu234.vercel.app/)

---

## ✨ Key Features

* **FluidGlass Hero Section:** A custom 3D refractive glass lens effect built with React Three Fiber (`@react-three/fiber`, `@react-three/drei`) that beautifully tracks the user's cursor.
* **InfiniteMenu (3D Skills Grid):** A custom-engineered, raw WebGL 2 draggable spherical icon grid. Utilizes instanced rendering and texture atlases to render a 3D globe of the tech stack with high performance.
* **Cinematic Scroll-Telling:** Replaced standard browser snapping with momentum-based smooth scrolling (`@studio-freight/lenis`) orchestrated alongside `framer-motion` for stagger animations and seamless section transitions.
* **MagicBento Architecture:** A custom, fully responsive asymmetric grid layout for projects, experience, and educational certifications. Features interactive hover states, dynamic link routing, and internal GSAP particle effects.
* **Zero Templates & High Performance:** Engineered from the ground up prioritizing 60fps rendering across both mobile and desktop views by carefully managing canvas geometry and React re-renders.

---

## 🛠️ Tech Stack

### Core
* React (`react`, `react-dom`)
* TypeScript
* Vite

### Styling
* Tailwind CSS
* PostCSS
* Vanilla CSS Modules

### 3D & WebGL
* Three.js
* React Three Fiber (`@react-three/fiber`)
* React Three Drei (`@react-three/drei`)
* `gl-matrix`

### Animation & Motion
* Framer Motion (`framer-motion`)
* GSAP (`gsap`)
* Lenis (`@studio-freight/lenis`)
* `maath`

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v16+) and `npm` installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/portfolio-v2.git
   cd portfolio-v2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   *The site will be available at `http://localhost:5173`.*

### Building for Production

To create an optimized production build:
```bash
npm run build
```
This will compile the TypeScript, bundle the application, and output the static files to the `dist` directory, ready to be deployed to platforms like Vercel or Netlify.

---

## 📂 Project Structure

```text
src/
├── assets/         # 3D models (.glb), images, and global assets
├── components/     # Reusable UI elements (MagicBento, FluidGlass, InfiniteMenu, SmoothScroll)
├── sections/       # Primary page sections (Hero, About, Experience, Skills, Education, Projects)
├── App.tsx         # Main application assembly and routing wrapper
├── index.css       # Global styles and Tailwind imports
└── main.tsx        # React DOM entry point
```

---

## 🤝 Contact

* **Chitranshu Pandey** - Software Engineer
* [LinkedIn](https://www.linkedin.com/in/chitranshupandey/)

---
*If you find this project interesting, feel free to give it a ⭐!*