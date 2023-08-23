import "./App.scss";
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";
import ReactRouterRoutes from "./ReactRouterRoutes";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div id="App">
      <Helmet>
        {/* Basic HTML tags */}
        <title>Peter Gilliam - Developer Portfolio</title>
        <meta
          name="description"
          content="Peter Gilliam's professional portfolio, showcasing skills, projects, and experiences in software development and web technologies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />

        {/* Open Graph tags for rich media sharing on platforms like Facebook, LinkedIn, etc. */}
        <meta
          property="og:title"
          content="Peter Gilliam - Software Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Dive into the world of Peter Gilliam, a proficient software developer showcasing a range of projects from web development to complex algorithms. Explore, learn, and get in touch."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="petergilliam.com" />
        <meta
          property="og:image"
          content="https://petergilliam.com/og_image.png"
        />

        {/* Twitter Card data for sharing on Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Peter Gilliam - Software Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Discover the portfolio of Peter Gilliam, where software development meets creativity. Explore projects, read articles, and connect."
        />
        <meta
          name="twitter:image"
          content="https://petergilliam.com/og_image.png"
        />

        {/* Theme color for browsers that support it */}
        <meta name="theme-color" content="#091405" />

        {/* Link to your favicon */}
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
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
