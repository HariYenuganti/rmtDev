# RmtDev - Remote Developer Jobs

A modern, responsive web application for finding remote developer jobs. Built with React, TypeScript, and Vite.

## 🚀 Features

- **Job Search**: Real-time job search with debouncing.
- **Bookmarks**: Save interesting jobs to your bookmarks for later.
- **Sorting**: Sort results by **Relevance** or **Recency**.
- **Pagination**: Navigate through pages of job listings.
- **Detailed Views**: View detailed job descriptions and requirements.
- **Responsive Design**: Optimized for various screen sizes.
- **State Management**: efficient global state management using React Context API (`JobItemsContext`, `BookmarksContext`).
- **Data Fetching**: Robust data fetching and caching with TanStack Query.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **State Management**: React Context API & [TanStack Query](https://tanstack.com/query/latest)
- **Styling**: CSS Modules / Vanilla CSS
- **Icons**: [Radix UI Icons](https://icons.radix-ui.com/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

## 📦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/HariYenuganti/rmtDev.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd rmtDev
    ```

3.  Install dependencies:
    ```bash
    npm install
    ```

### Running the App

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Build the app for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📂 Project Structure

- `src/components`: Reusable UI components.
- `src/context`: React Context providers for global state.
- `src/lib`: Utilities, hooks, types, and constants.
- `src/App.tsx`: Main application layout.
- `src/main.tsx`: Entry point.
