import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  X,
  Compass,
  Mountain,
  Trees,
  Building2,
  Waves,
  Search,
} from "lucide-react";
import { destinations, photo, filterDestinations } from "../data.js";
import {
  Tag,
  DestinationCard,
  PageIntro,
  Callout,
} from "../components/shared.jsx";

export default function Destinations() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [query, setQuery] = useState(params.get("q") || "");
  const [category, setCategory] = useState("Все");
  const selected = destinations.find((item) => item.id === params.get("place"));
  const icons = {
    Все: Compass,
    Горы: Mountain,
    Природа: Trees,
    Города: Building2,
    Море: Waves,
  };
  const filtered = filterDestinations(destinations, category, query);
  return (
    <>
      <PageIntro
        label="ВАША КАРТА ВПЕЧАТЛЕНИЙ"
        title="Место найдётся для каждого"
        text="Прислушайтесь к себе. Иногда для нового начала достаточно выбрать направление."
      />
      <section className="container page-section">
        {selected && (
          <article className="destination-detail">
            <img src={photo(selected.image)} alt={selected.name} />
            <div>
              <Tag>{selected.region}</Tag>
              <h2>{selected.name}</h2>
              <p>{selected.description}</p>
              <p>
                <strong>Лучший сезон:</strong> {selected.season}
              </p>
              <p>
                <strong>На поездку:</strong> {selected.days}
              </p>
              <Link className="text-link" to="/destinations">
                Закрыть описание <X size={16} />
              </Link>
            </div>
          </article>
        )}
        <div className="filter-bar">
          <div className="filter-tabs" aria-label="Категории направлений">
            {Object.entries(icons).map(([name, Icon]) => (
              <button
                key={name}
                className={category === name ? "filter active" : "filter"}
                aria-pressed={category === name}
                onClick={() => setCategory(name)}
              >
                <Icon size={16} />
                {name}
              </button>
            ))}
          </div>
          <label className="compact-search">
            <Search size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Название или регион"
              aria-label="Поиск по названию или региону"
            />
          </label>
        </div>
        <p className="result-count">Найдено направлений: {filtered.length}</p>
        <div className="destination-grid">
          {filtered.map((item) => (
            <DestinationCard key={item.id} item={item} />
          ))}
        </div>
        {!filtered.length && (
          <div className="empty-state">
            <Compass size={36} />
            <h2>Пока ничего не нашлось</h2>
            <p>Попробуйте другое название или сбросьте фильтры.</p>
            <button
              className="button"
              onClick={() => {
                setQuery("");
                setCategory("Все");
              }}
            >
              Сбросить фильтры
            </button>
          </div>
        )}
        <p className="editorial-note">
          Фотографии передают атмосферу путешествий и могут не изображать
          конкретную локацию. Перед поездкой уточняйте погоду и доступность
          мест.
        </p>
      </section>
      <Callout />
    </>
  );
}
