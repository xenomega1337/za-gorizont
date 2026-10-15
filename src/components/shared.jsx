import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Clock3,
  Mountain,
  Compass,
} from "lucide-react";
import { photo } from "../data.js";
export const navigation = [
  ["/", "Главная"],
  ["/destinations", "Направления"],
  ["/routes", "Маршруты"],
  ["/about", "О нас"],
  ["/contacts", "Контакты"],
];
export function Tag({ children }) {
  return (
    <span className="eyebrow">
      <span className="tiny-line" />
      {children}
    </span>
  );
}

export function DestinationCard({ item }) {
  return (
    <Link to={`/destinations?place=${item.id}`} className="destination-card">
      <div className="card-image">
        <img
          src={photo(item.image)}
          alt={`${item.name} — пейзаж направления`}
          loading="lazy"
        />
        <span className="image-tag">
          <MapPin size={12} />
          {item.region}
        </span>
        <span className="card-arrow">
          <ArrowUpRight size={20} />
        </span>
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{item.name}</h3>
          <span>
            <Clock3 size={14} />
            {item.days}
          </span>
        </div>
        <p>{item.subtitle}</p>
      </div>
    </Link>
  );
}

export function PageIntro({ label, title, text }) {
  return (
    <div className="page-intro container">
      <Tag>{label}</Tag>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export function Callout() {
  return (
    <section className="container callout">
      <div>
        <span className="eyebrow">
          ПЛАНЫ МОГУТ ПОДОЖДАТЬ. ВПЕЧАТЛЕНИЯ — НЕТ.
        </span>
        <h2>А что, если просто поехать?</h2>
        <p>Первый шаг — найти место, которое отзовётся.</p>
      </div>
      <Link className="button light" to="/destinations">
        Выбрать направление <ArrowUpRight size={19} />
      </Link>
      <Compass className="callout-decoration" aria-hidden="true" />
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <Link className="brand" to="/">
            <span className="brand-icon">
              <Mountain size={24} />
            </span>
            <span>
              за горизонт<span className="brand-dot">.</span>
            </span>
          </Link>
          <p>
            Места, люди и дороги,
            <br />
            которые остаются с нами.
          </p>
        </div>
        <div className="footer-links">
          {navigation.slice(1).map(([path, label]) => (
            <Link key={path} to={path}>
              {label}
            </Link>
          ))}
        </div>
        <div className="footer-signoff">
          Вдохновляйтесь.
          <br />
          Исследуйте. <span>Чувствуйте.</span>
          <ArrowUpRight size={23} />
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} За горизонт · Учебный проект</span>
        <span>С любовью к дороге и маленьким открытиям</span>
      </div>
    </footer>
  );
}
