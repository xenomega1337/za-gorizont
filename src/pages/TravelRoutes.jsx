import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock3, Navigation, ChevronDown } from "lucide-react";
import { routes, photo } from "../data.js";
import { Tag, PageIntro } from "../components/shared.jsx";

export default function TravelRoutes() {
  return (
    <>
      <PageIntro
        label="ПУТЕШЕСТВИЕ НАЧИНАЕТСЯ С ИДЕИ"
        title="Меньше планов. Больше открытий."
        text="Три маршрута для первого шага. Берите за основу, меняйте темп и оставляйте время на неожиданное."
      />
      <section className="container page-section routes-list">
        {routes.map((route, index) => (
          <article className="route-card" key={route.id}>
            <img
              src={photo(route.image)}
              alt={`Атмосфера маршрута: ${route.destination}`}
              loading="lazy"
            />
            <div className="route-card-content">
              <Tag>
                МАРШРУТ 0{index + 1} · {route.destination}
              </Tag>
              <h2>{route.title}</h2>
              <div className="route-meta">
                <span>
                  <Clock3 size={16} />
                  {route.duration}
                </span>
                <span>
                  <Navigation size={16} />
                  {route.difficulty}
                </span>
              </div>
              <details>
                <summary>
                  Программа по дням <ChevronDown size={18} />
                </summary>
                <ol className="itinerary">
                  {route.stops.map((stop, i) => (
                    <li key={stop}>
                      <span>{i + 1}</span>
                      <div>
                        <small>ДЕНЬ {i + 1}</small>
                        <p>{stop}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </details>
              <Link className="text-link" to="/contacts">
                Задать вопрос о маршруте <ArrowUpRight size={17} />
              </Link>
            </div>
          </article>
        ))}
        <p className="editorial-note">
          Это идеи самостоятельных поездок, а не туры с бронированием. Проверьте
          расписания, условия посещения и прогноз перед выездом. Для водных и
          сложных горных участков выбирайте квалифицированного местного гида.
        </p>
      </section>
    </>
  );
}
