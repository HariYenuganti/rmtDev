<div align="center">

  <h1>RmtDev - Remote Developer Jobs</h1>

  <p>
    A modern, responsive web application for finding remote developer jobs. Built with strong typing and performance in mind.
  </p>

  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#license">License</a>
  </p>

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query/latest)

</div>

<br />

## 🚀 Features

<div align="center">
  <table>
    <tr>
      <td>🔍 <b>Smart Search</b></td>
      <td>Real-time job filtering with debouncing for a smooth user experience.</td>
    </tr>
    <tr>
      <td>🔖 <b>Bookmarks</b></td>
      <td>Save jobs locally to review later—never lose track of an opportunity.</td>
    </tr>
    <tr>
      <td>⚡ <b>Performance</b></td>
      <td>Optimized rendering, caching with React Query, and fast Vite build.</td>
    </tr>
     <tr>
      <td>↔️ <b>Sorting & Pagination</b></td>
      <td>Sort by <b>Relevance</b> or <b>Recency</b> and navigate lists easily.</td>
    </tr>
  </table>
</div>

## 🛠️ Tech Stack

This project uses a modern frontend stack to ensure scalability and maintainability.

- **Core**: [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build & Tooling**: [Vite](https://vitejs.dev/), [ESLint](https://eslint.org/)
- **State Management**:
  - **Context API**: For global UI state (`JobItemsContext`, `BookmarksContext`).
  - **TanStack Query**: For server state management and caching.
- **Styling**: Vanilla CSS / CSS Modules
- **Components**: [Radix UI Icons](https://icons.radix-ui.com/), [React Hot Toast](https://react-hot-toast.com/)

## 📦 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/HariYenuganti/rmtDev.git
    cd rmtDev
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser.

## 📂 Project Structure

```bash
src/
├── components/       # Reusable UI components
├── context/          # Global state (Context API)
├── lib/              # Hooks, types, constants, utils
├── App.tsx           # Main application layout
└── main.tsx          # Application entry point
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
