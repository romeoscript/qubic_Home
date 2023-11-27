import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PureChatWidget from "./components/PureChat";
import Create from "./Pages/Create";
// import ProjectCard from "./components/projects";

const Home = lazy(() => import("./Pages/Home"));
const Privacy = lazy(() => import("./Pages/Privacy"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={null}>
          <GlobalStyle />
          {/* Hi There! */}
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/create" element={<Create />} />
          </Routes>
          <PureChatWidget />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
