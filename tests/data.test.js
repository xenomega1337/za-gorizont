import test from "node:test";
import assert from "node:assert/strict";
import { destinations, routes, filterDestinations } from "../src/data.js";
test("поиск учитывает регистр и пробелы", () => {
  assert.deepEqual(
    filterDestinations(destinations, "Все", "  аЛтАй ").map((x) => x.id),
    ["altai"],
  );
});
test("категория и регион работают вместе", () => {
  assert.deepEqual(
    filterDestinations(destinations, "Природа", "Сибирь").map((x) => x.id),
    ["baikal"],
  );
});
test("неизвестное направление возвращает пустой результат", () => {
  assert.equal(
    filterDestinations(destinations, "Все", "несуществующий город").length,
    0,
  );
});
test("маршруты связаны с направлениями и имеют программу", () => {
  for (const route of routes) {
    assert.ok(destinations.some((d) => d.name === route.destination));
    assert.ok(route.stops.length >= 3);
  }
});
