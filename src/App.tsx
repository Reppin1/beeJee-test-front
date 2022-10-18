import React from 'react';
import { Provider } from 'react-redux'
import { store } from "./store/Store";
import { Main, setupGlobalStyles } from "./styles";
import { Header } from "./components/Header/Header";
import { MainPage } from "./components/MainPage/MainPage";
import { LoginDialog } from "./components/Dialog/LoginDialog/LoginDialog";
import 'react-toastify/dist/ReactToastify.css';
import { CreateTaskDialog } from "./components/Dialog/CreateTaskDialog/CreateTaskDialog";
import { UpdateTaskDialog } from "./components/Dialog/UpdateTaskDialog/UpdateTaskDialog";
import { ToastContainer } from "react-toastify";

function App() {
  setupGlobalStyles()

  return (
    <Provider store={store}>
      <Header />
      <Main>
        <MainPage />
      </Main>
      <LoginDialog />
      <CreateTaskDialog />
      <UpdateTaskDialog />
      <ToastContainer
        theme="light"
      />
    </Provider>
  );
}

export default App;
