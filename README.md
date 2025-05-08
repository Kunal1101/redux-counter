## 🚀 Project Overview

This is a **React + Vite** project that demonstrates the use of **React Redux** and **Redux Toolkit** for state management. It serves as a beginner-friendly example to understand how to manage application state using Redux in a modern React app.

---

## ⚙️ Technologies Used

- **React** – JavaScript library for building user interfaces
- **Vite** – Fast frontend build tool
- **Tailwind CSS** – Utility-first CSS framework for styling
- **Redux** – State management library
- **Redux Toolkit** – Official, recommended way to write Redux logic

---

## 🛠️ Getting Started

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/Kunal1101/redux-counter
cd redux-counter
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Start the Development Server

```sh
npm run dev
```

The app will be available at **[http://localhost:5173/](http://localhost:5173/)** (default Vite port).

---

## 🔄 How Redux Works in This Project

1. **Installation**: Installed `@reduxjs/toolkit` and `react-redux` packages.

2. **Creating a Slice**: In `CounterSlice.js`, a slice is created using `createSlice`, which includes:

   - Initial state
   - Reducers (increment, decrement, etc.)

3. **Configuring Store**: In `store.js`, the Redux store is configured using `configureStore` and the counter slice reducer is added.

4. **Providing the Store**: In `main.jsx`, the app is wrapped with `<Provider>` from `react-redux` and passed the store as a prop.

5. **Using Redux State in Components**:

   - `useSelector` is used to access the state.
   - `useDispatch` is used to dispatch actions like increment and decrement.

---

## 🤝 Contributing

Feel free to fork this repo, make improvements, and submit a **pull request**. All contributions are welcome! 🎉

---

### ⭐ Happy Coding! 🚀
