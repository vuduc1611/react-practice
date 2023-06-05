import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import Container from "react-bootstrap/Container";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Container>
          <TableUsers />
        </Container>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
