# Bee Banking App

A modern, responsive banking frontend application built with Next.js, Material UI, and TypeScript. Features include user authentication, account management, and transaction tracking — all backed by a clean UI and modular architecture.

I spent approximately 5 to 6 hours on this project, focusing on delivering all the required tasks while leaving room for future UI improvements. I also made an effort to modularize the code as much as possible.

##  Tech Stack

*   Next.js 14
*   React 18
*   TypeScript
*   Material UI (MUI)
*   Zustand (state management)
*   React Query (server state)
*   React Hook Form &#43; Yup (form handling & validation)
*   Axios (HTTP client)
*   Prettier & ESLint (code formatting & linting)

## ️ Project Structure

```
src/
├── app/                   # App routes and pages 
├── components/            # Reusable UI components 
├── hooks/                 # Custom hooks 
├── models/                # Types, enums, and interfaces
├── services/              # API layer 
├── store/                 # Zustand state stores
├── public/                # Static assets

```

##  Scripts

| Command         | Description                 |
| :-------------- | :-------------------------- |
| `yarn dev`      | Start local dev server      |
| `yarn build`    | Build production app        |
| `yarn start`    | Start production server     |
| `yarn lint`     | Run ESLint                  |
| `yarn format`   | Format code using Prettier  |

##  Environment Variables

Create a `.env.local` file and define the following:

```
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_API_KEY=your_api_key
NEXT_PUBLIC_TRANSACTIONS_API=https://my-json-server.typicode.com/marcosTulli/transactions/transactions
```

️ Node.js version is specified in `.nvmrc`. Use Node 20.x.

##  Features

*    Authentication (Login/Signup)
*    Accounts Overview
*    Transaction Table with Filtering & Sorting

```
