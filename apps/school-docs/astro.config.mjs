// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Академия Миссии Шехина",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        // 1. СПРАВОЧНИК (Поднят выше "Школы")
        {
          label: "Справочник",
          autogenerate: { directory: "reference" },
        },
        // 2. ГИДЫ
        {
          label: "Гиды",
          items: [
            { label: "Гид по обучению", slug: "guides/example" },
            { label: "Помощь Миссии", slug: "guides/help_mission" },
          ],
        },
        // 3. ШКОЛА (Со всеми модулями)
        {
          label: "Школа",
          items: [
            // --- ТОМ 1 (VOL.1) ---
            {
              label: "Том 1",
              items: [
                // ЯВНО ПРОПИСАНЫ ВСЕ 7 МОДУЛЕЙ
                { label: "01. Конфликт", autogenerate: { directory: "school/VOL.1/01_conflict" } },
              { label: "02. Школа Христа", autogenerate: { directory: "school/VOL.1/02_school_of_christ" } },
              { label: "03. Личность Иисуса", autogenerate: { directory: "school/VOL.1/03_person_jesus" } },
              { label: "04. Всемогущая Кровь", autogenerate: { directory: "school/VOL.1/04_almighty_blood" } },
              { label: "05. Покаяние", autogenerate: { directory: "school/VOL.1/05-repentanse" } },
              { label: "06. Крест", autogenerate: { directory: "school/VOL.1/06_croos" } },
              { label: "07. Вера", autogenerate: { directory: "school/VOL.1/07_faith" } },
              ],
            },
            // --- ТОМ 2 (VOL.2) ---
            {
              label: "Том 2",
              items: [
                // ЯВНО ПРОПИСАНЫ ВСЕ 8 МОДУЛЕЙ
                { label: "08. Молитва", autogenerate: { directory: "school/VOL.2/08.PRAYER" } },
              { label: "09. Управление", autogenerate: { directory: "school/VOL.2/09.STEWARDSHIP" } },
              { label: "10. Духовная война", autogenerate: { directory: "school/VOL.2/10. THE_WARFARE" } },
              { label: "11. Ученичество", autogenerate: { directory: "school/VOL.2/11. DISCIPLESHIP" } },
              { label: "12. Освящение", autogenerate: { directory: "school/VOL.2/12. SANCTIFICATION" } },
              { label: "13. Церковь", autogenerate: { directory: "school/VOL.2/13. CHURCH" } },
              { label: "14. Восстановление врат", autogenerate: { directory: "school/VOL.2/14. REBUILDING_THE_GATES" } },
              { label: "15. Единство Церкви", autogenerate: { directory: "school/VOL.2/15. UNITY_OF_CHURCH" } },
              ],
            },
            // --- ТОМ 3 (VOL.3) ---
            {
              label: "Том 3",
              items: [
                // ЯВНО ПРОПИСАНЫ ВСЕ 3 МОДУЛЯ
                { label: "16. Святой Дух", autogenerate: { directory: "school/VOL.3/16. HOLY_SPIRIT" } },
              { label: "17. Пробуждение", autogenerate: { directory: "school/VOL.3/17. REVIVAL" } },
              { label: "18. Пути к силе", autogenerate: { directory: "school/VOL.3/18. PATHS_TO_POWER" } },
              ],
            },
          ],
        },
        // 4. БИБЛИОТЕКА
        {
          label: "Библиотека",
          autogenerate: { directory: "laybrari" }
        }
      ],
      customCss: ["./src/styles/global.css"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
