import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Search,
  Compass,
  ChevronDown,
  Leaf,
  Route as RouteIcon,
} from "lucide-react";
import { destinations, photo } from "../data.js";
import { Tag, DestinationCard, Callout } from "../components/shared.jsx";

export default function Home() {
  const [query, setQuery] = useState("");
  return (
    <>
      <section className="hero container">
        <img
          className="hero-photo"
          src={photo("mountains.jpg")}
          alt="Горный хребет в утреннем тумане"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="hero-label">
            <span /> БЛИЖЕ К ПРИРОДЕ. БЛИЖЕ К СЕБЕ.
          </span>
          <h1>
            Самое интересное —<br />
            за <em>горизонтом.</em>
          </h1>
          <p>
            Откройте места, в которых хочется остаться.
            <br className="desktop-break" /> Путешествия по России, вдохновение
            и немного свободы.
          </p>
          <Link className="button hero-button" to="/destinations">
            Начать путешествие <ArrowUpRight size={19} />
          </Link>
          <div className="hero-bottom">
            <span>
              <MapPin size={15} /> Где-то среди гор. Там, где хорошо.
            </span>
            <span className="hero-scroll">
              ЛИСТАЙТЕ ЗА ВДОХНОВЕНИЕМ <ChevronDown size={16} />
            </span>
          </div>
        </div>
        <div className="hero-coordinate">50°18′ N &nbsp; 87°36′ E</div>
      </section>
      <section className="container search-wrap">
        <form className="travel-search" action="/destinations">
          <div className="search-intro">
            <Compass size={24} />
            <span>
              Куда зовёт
              <br />
              <strong>ваше сердце?</strong>
            </span>
          </div>
          <label className="search-field">
            <span>ВАШЕ СЛЕДУЮЩЕЕ ОТКРЫТИЕ</span>
            <div>
              <Search size={18} />
              <input
                name="q"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Горы, озёра или любимый город?"
                aria-label="Поиск направления"
              />
            </div>
          </label>
          <button className="button" type="submit">
            Найти направление <ArrowRight size={18} />
          </button>
        </form>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <Tag>МЕСТА С ХАРАКТЕРОМ</Tag>
            <h2>Куда отправимся?</h2>
            <p>Совсем рядом или на другом краю страны — выбирайте своё.</p>
          </div>
          <Link className="text-link" to="/destinations">
            Все направления <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="destination-grid home-grid">
          {destinations.slice(0, 3).map((item) => (
            <DestinationCard key={item.id} item={item} />
          ))}
        </div>
      </section>
      <section className="philosophy container">
        <div className="philosophy-image">
          <img
            src={photo("valley.jpg")}
            alt="Горы и туман в долине"
            loading="lazy"
          />
          <span className="photo-note">Меньше спешки. Больше жизни.</span>
        </div>
        <div className="philosophy-content">
          <Tag>НЕ ПРОСТО ТОЧКИ НА КАРТЕ</Tag>
          <h2>
            Не собирать места.
            <br />
            Собирать <em>моменты.</em>
          </h2>
          <p>
            Мы верим, что лучшие путешествия — те, в которых есть место
            случайным поворотам, новым знакомствам и чашке чая с красивым видом.
          </p>
          <div className="value-row">
            <span>
              <Compass size={21} />
            </span>
            <div>
              <h3>Маршруты с душой</h3>
              <p>Идеи, которые легко превратить в своё приключение.</p>
            </div>
          </div>
          <div className="value-row">
            <span>
              <Leaf size={21} />
            </span>
            <div>
              <h3>Бережно к миру</h3>
              <p>Уважение к природе, людям и местным традициям.</p>
            </div>
          </div>
          <Link className="text-link" to="/about">
            Чуть больше о нас <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <Tag>ОТ ИДЕИ ДО ПЕРВОГО ШАГА</Tag>
            <h2>Ваш маршрут уже ждёт</h2>
          </div>
          <Link className="text-link" to="/routes">
            Выбрать маршрут <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="route-preview">
          <span className="route-preview-icon">
            <RouteIcon size={30} />
          </span>
          <div>
            <span className="eyebrow">АЛТАЙ · 7 ДНЕЙ</span>
            <h3>По Чуйскому тракту</h3>
            <p>Из города — к перевалам, бирюзовой реке и большим открытиям.</p>
          </div>
          <Link
            className="round-link"
            to="/routes"
            aria-label="Смотреть маршрут по Чуйскому тракту"
          >
            <ArrowUpRight />
          </Link>
        </div>
      </section>
      <Callout />
    </>
  );
}
