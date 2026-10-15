import React, { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Compass,
  Mail,
  Sun,
  Check,
} from "lucide-react";
import { PageIntro } from "../components/shared.jsx";

export default function Contacts() {
  const [sent, setSent] = useState(false);
  function submit(e) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <>
      <PageIntro
        label="ХОРОШИЕ РАЗГОВОРЫ — ТОЖЕ ПУТЕШЕСТВИЕ"
        title="Давайте знакомиться"
        text="Есть идея, вопрос или любимое место, о котором хочется рассказать? Начните с пары строк."
      />
      <section className="container contact-layout page-section">
        <div className="contact-info">
          <span className="contact-symbol">
            <Mail size={32} />
          </span>
          <h2>
            Любая история
            <br />
            начинается с «привет»
          </h2>
          <p>
            Расскажите о маршруте, предложите новое направление или поделитесь
            впечатлениями от сайта.
          </p>
          <div className="contact-fact">
            <Compass size={20} />
            <div>
              <strong>Путешествуем по России</strong>
              <p>От коротких прогулок до больших дорог</p>
            </div>
          </div>
          <div className="contact-fact">
            <Sun size={20} />
            <div>
              <strong>Открыты новым идеям</strong>
              <p>Особенно тем, в которых есть немного приключения</p>
            </div>
          </div>
          <div className="demo-note">
            Учебный сайт. Форма демонстрирует проверку полей: сообщения не
            отправляются и не сохраняются.
          </div>
        </div>
        <div className="contact-form-card">
          {sent ? (
            <div className="success-state" role="status">
              <span>
                <Check size={30} />
              </span>
              <h2>Всё заполнено верно!</h2>
              <p>
                Демонстрация завершена. Сообщение никуда не отправлено и не
                сохранено.
              </p>
              <button className="button" onClick={() => setSent(false)}>
                Заполнить ещё раз <ArrowRight size={17} />
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <h2>Напишите нам</h2>
              <label>
                Ваше имя
                <input
                  name="name"
                  required
                  minLength={2}
                  maxLength={80}
                  placeholder="Как к вам обращаться?"
                  autoComplete="name"
                />
              </label>
              <label>
                Электронная почта
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={160}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </label>
              <label>
                Тема
                <select name="topic" defaultValue="idea">
                  <option value="idea">Предложить идею</option>
                  <option value="route">Вопрос о маршруте</option>
                  <option value="feedback">Отзыв о сайте</option>
                </select>
              </label>
              <label>
                Сообщение
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={5}
                  placeholder="Расскажите немного подробнее…"
                />
              </label>
              <label className="checkbox-label">
                <input type="checkbox" required />Я понимаю, что это
                демонстрационная форма без отправки данных.
              </label>
              <button className="button" type="submit">
                Проверить сообщение <ArrowUpRight size={18} />
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
