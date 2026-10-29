export const destinations = [
  {
    id: "altai",
    name: "Алтай",
    subtitle: "Там, где горы встречают небо",
    category: "Горы",
    region: "Сибирь",
    days: "7–10 дней",
    image: "mountains.jpg",
    description:
      "Бирюзовая Катунь, бескрайние долины и тишина, которую хочется забрать с собой. Начните с Чемала и Чуйского тракта.",
    season: "Июнь — сентябрь",
  },
  {
    id: "dagestan",
    name: "Дагестан",
    subtitle: "Выше гор — только впечатления",
    category: "Горы",
    region: "Кавказ",
    days: "5–7 дней",
    image: "valley.jpg",
    description:
      "Глубокие каньоны, старинные аулы и невероятное гостеприимство. Включите в маршрут Дербент и Сулакский каньон.",
    season: "Май — октябрь",
  },
  {
    id: "karelia",
    name: "Карелия",
    subtitle: "Своя история у каждого озера",
    category: "Природа",
    region: "Северо-Запад",
    days: "4–6 дней",
    image: "forest.png",
    description:
      "Сосновые леса, гладь озёр и уютные вечера у воды. Отправляйтесь в Сортавалу и прогуляйтесь по парку Рускеала.",
    season: "Июнь — сентябрь",
  },
  {
    id: "baikal",
    name: "Байкал",
    subtitle: "Место, где можно услышать себя",
    category: "Природа",
    region: "Сибирь",
    days: "6–8 дней",
    image: "coast.png",
    description:
      "Прогулки вдоль озера, остров Ольхон и открытые горизонты. Планируйте переезды заранее: расстояния здесь большие.",
    season: "Июль — август",
  },
  {
    id: "petersburg",
    name: "Санкт-Петербург",
    subtitle: "Город для долгих прогулок",
    category: "Города",
    region: "Северо-Запад",
    days: "3–5 дней",
    image: "ridge.jpg",
    description:
      "Набережные, тихие дворы и маленькие кофейни. Оставьте время на Эрмитаж и прогулку без маршрута.",
    season: "Май — сентябрь",
  },
  {
    id: "sochi",
    name: "Сочи",
    subtitle: "Море, горы и немного солнца",
    category: "Море",
    region: "Юг",
    days: "5–7 дней",
    image: "lake.png",
    description:
      "Утром — тропы Красной Поляны, вечером — закат у моря. Удобная база для первого путешествия на юг.",
    season: "Май — октябрь",
  },
];
export const routes = [
  {
    id: "altai-road",
    title: "По Чуйскому тракту",
    destination: "Алтай",
    duration: "7 дней",
    difficulty: "Средний",
    image: "mountains.jpg",
    stops: [
      "Горно-Алтайск · знакомство с городом",
      "Чемал · прогулка вдоль Катуни",
      "Семинский перевал · горные панорамы",
      "Чике-Таман · серпантин и смотровые",
      "Акташ · поездка к Гейзерному озеру",
      "Курайская степь · день среди гор",
      "Обратная дорога · остановки по настроению",
    ],
  },
  {
    id: "karelia-weekend",
    title: "Карельская перезагрузка",
    destination: "Карелия",
    duration: "4 дня",
    difficulty: "Лёгкий",
    image: "forest.png",
    stops: [
      "Сортавала · прогулка по старому городу",
      "Рускеала · мраморный каньон",
      "Ладожские шхеры · экскурсия с местным гидом",
      "Лесные тропы · спокойное возвращение",
    ],
  },
  {
    id: "city-walk",
    title: "Петербург без спешки",
    destination: "Санкт-Петербург",
    duration: "3 дня",
    difficulty: "Лёгкий",
    image: "ridge.jpg",
    stops: [
      "Невский проспект · набережные и дворы",
      "Эрмитаж · Новая Голландия",
      "Петроградская сторона · кофе и архитектура",
    ],
  },
];
export const photo = (filename) =>
  `${import.meta.env.BASE_URL}images/${filename}`;
export function filterDestinations(items, category, query) {
  const term = query.trim().toLocaleLowerCase("ru");
  return items.filter(
    (item) =>
      (category === "Все" || item.category === category) &&
      `${item.name} ${item.region}`.toLocaleLowerCase("ru").includes(term),
  );
}
