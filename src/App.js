import "./App.scss";
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";
import ReactRouterRoutes from "./ReactRouterRoutes";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div id="App">
      <Helmet>
        <title>Peter Gilliam's Portfolio</title>
        <meta name="" content="" />
      </Helmet>
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
