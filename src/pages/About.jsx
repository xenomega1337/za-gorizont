import React, { useState } from "react";
import { Compass, Leaf, Heart } from "lucide-react";
import { photo } from "../data.js";
import { Tag, PageIntro, Callout } from "../components/shared.jsx";

export default function About() {
  return (
    <>
      <PageIntro
        label="ПРИВЕТ, МЫ — «ЗА ГОРИЗОНТ»"
        title="Любопытство — наш компас"
        text="Небольшой проект о больших впечатлениях. Для тех, кто любит дорогу не меньше, чем пункт назначения."
      />
      <section className="container about-story">
        <img src={photo("valley.jpg")} alt="Тихая долина среди гор" />
        <div>
          <Tag>НАША ИДЕЯ</Tag>
          <h2>
            Близкое тоже может
            <br />
            быть удивительным
          </h2>
          <p>
            Чтобы почувствовать себя путешественником, не обязательно лететь на
            другой конец мира. Иногда достаточно свернуть с привычной дороги,
            увидеть озеро на рассвете или провести выходные в незнакомом городе.
          </p>
          <p>
            «За горизонт» помогает найти такую идею. Здесь собраны направления
            по России, простые маршруты и вдохновение для самостоятельных
            поездок.
          </p>
          <p>
            Это учебный проект: мы не продаём туры и не принимаем оплату. Все
            путешествия вы планируете и бронируете самостоятельно.
          </p>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <Tag>ТО, ЧТО ВАЖНО</Tag>
            <h2>Три простых принципа</h2>
          </div>
        </div>
        <div className="values-grid">
          {[
            [
              Compass,
              "Идти своим путём",
              "Не соревноваться в количестве стран и километров. Выбирать то, что откликается именно вам.",
            ],
            [
              Leaf,
              "Оставлять только следы",
              "Убирать за собой, беречь тропы и уважать жизнь мест, в которые приезжаем.",
            ],
            [
              Heart,
              "Замечать маленькое",
              "Знакомиться с людьми, пробовать местную еду и находить красоту в обычном.",
            ],
          ].map(([Icon, title, text]) => (
            <article className="value-card" key={title}>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <Callout />
    </>
  );
}
