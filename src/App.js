// import "./App.scss";
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";
import ReactRouterRoutes from "./ReactRouterRoutes";

function App() {
  return (
    <div id="App">
      {/* Navigation Bar Compoment */}
      <NavBar />

      {/* Responsible for rendering page body content */}
      <ReactRouterRoutes />

      {/* Footer Component */}
      <FooterBar />
    </div>
  );
}

export default App;
