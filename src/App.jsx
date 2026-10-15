import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import { Mountain, ArrowUpRight, ArrowRight, X, Menu } from "lucide-react";
import { navigation, Footer } from "./components/shared.jsx";
import Home from "./pages/Home.jsx";
import Destinations from "./pages/Destinations.jsx";
import TravelRoutes from "./pages/TravelRoutes.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";

export default function App() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenu(false);
    document.title = `${navigation.find(([path]) => path === location.pathname)?.[1] || "Страница не найдена"} — За горизонт`;
  }, [location.pathname]);
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Link className="brand" to="/" aria-label="За горизонт — главная">
            <span className="brand-icon">
              <Mountain size={25} />
            </span>
            <span>
              за горизонт<span className="brand-dot">.</span>
            </span>
          </Link>
          <button
            className="menu-toggle"
            aria-label={menu ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
          <nav
            className={menu ? "nav is-open" : "nav"}
            aria-label="Основная навигация"
          >
            {navigation.map(([path, label]) => (
              <NavLink key={path} to={path} end={path === "/"}>
                {label}
              </NavLink>
            ))}
          </nav>
          <Link className="button small header-cta" to="/destinations">
            Найти своё место <ArrowUpRight size={16} />
          </Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/routes" element={<TravelRoutes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="*"
            element={
              <div className="container empty-page">
                <span className="eyebrow">404 · СБИЛИСЬ С МАРШРУТА</span>
                <h1>Здесь пока нет тропы</h1>
                <p>Но впереди ещё много красивых мест.</p>
                <Link className="button" to="/">
                  На главную <ArrowRight size={18} />
                </Link>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
