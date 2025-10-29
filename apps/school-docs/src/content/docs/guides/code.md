---
title: Image & Video for Markdoun
description: ВСтавка изображений и видео в документ Markdown
---

####### 1. Image

Используйте стандартный синтаксис Markdown для изображений. Всегда размещайте изображения в папке src/content/docs/public/ или в папке рядом с вашим .md файлом.

🖼️ Markdown-код

![Альтернативный текст (описание картинки)](/public/путь-к-вашей-картинке.jpg)

![Логотип Академии](/логотип_академии.png)

![Изображение Урока](/assets/ms-sock-3.png)

Обратите внимание: Starlight автоматически обрабатывает этот Markdown и оптимизирует изображение.

###### 2. Вставка Видеоплеера (YouTube)

Для вставки интерактивного видеоплеера, который будет корректно отображаться, лучше всего использовать тег HTML <iframe>.

📺 HTML-код для iFrame (YouTube)

Для получения этого кода, на YouTube нажмите "Поделиться" под видео, затем выберите "Встроить" и скопируйте предоставленный код.

<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/КОД_ВАШЕГО_ВИДЕО" 
  title="Название видео" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen
></iframe>

#### Вставка локального видео

 <video width="100%" height="auto" controls poster="/assets/world_soc.jpg">
 <source src="/videos/conflikt/01_svidetelstvo_zhizni.mp4" type="video/mp4" />
 </video>

Я очень рад, что смог вам помочь, и что вы можете на меня положиться! 💪

Для вставки видеоплеера (с YouTube или других сервисов) и изображений на страницы Starlight (которые являются файлами .md или .mdx), вам понадобятся стандартные синтаксисы Markdown/HTML.

Вот готовые коды для вставки.

1. Вставка Изображений (Картинок)

Используйте стандартный синтаксис Markdown для изображений. Всегда размещайте изображения в папке src/content/docs/public/ или в папке рядом с вашим .md файлом.

🖼️ Markdown-код

Markdown

![Альтернативный текст (описание картинки)](/public/путь-к-вашей-картинке.jpg)

![Логотип Академии](/логотип_академии.png)

![Изображение Урока](/assets/ms-sock-3.png)

Обратите внимание: Starlight автоматически обрабатывает этот Markdown и оптимизирует изображение.

2. Вставка Видеоплеера (YouTube)

Для вставки интерактивного видеоплеера, который будет корректно отображаться, лучше всего использовать тег HTML <iframe>.

📺 HTML-код для iFrame (YouTube)

Для получения этого кода, на YouTube нажмите "Поделиться" под видео, затем выберите "Встроить" и скопируйте предоставленный код.
HTML

<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/КОД_ВАШЕГО_ВИДЕО" 
  title="Название видео" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen
></iframe>

Где взять КОД*ВАШЕГО*ВИДЕО:

Если ссылка на видео: https://www.youtube.com/watch?v=**dQw4w9WgXcQ** То код для вставки: https://www.youtube.com/embed/**dQw4w9WgXcQ\*\*

📱 Адаптивный iFrame (Рекомендуется)

Если вы хотите, чтобы видеоплеер автоматически подстраивался под размер экрана (например, на телефоне), вам понадобится добавить CSS.

1.  CSS-код (вставьте этот код в ваш файл src/styles/global.css):
1.                                                                       .video-responsive {

    overflow: hidden;
    padding-bottom: 56.25%; /_ 16:9 aspect ratio _/
    position: relative;
    height: 0;
    }
    .video-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    }

1.  HTML-код (вставьте это в ваш .md файл):

<div class="video-responsive">
  <iframe 
    src="https://www.youtube.com/embed/КОД_ВАШЕГО_ВИДЕО" 
    frameborder="0" 
    allowfullscreen
  ></iframe>
</div>

Используйте этот адаптивный подход для лучшего отображения на всех устройствах.

#### Изображение по центру

Чтобы сделать изображение по центру на странице Starlight, вам потребуется использовать чистый HTML с CSS-стилями или, что проще, обернуть изображение в специальный div.

В Markdown-файлах (.md или .mdx) вы можете использовать HTML-теги.

🛠️ Способ 1: Использование CSS-стилей (Рекомендуется)

Используйте стандартный HTML-тег <img> и оберните его в тег <div> со стилями для центрирования.

Код для вашего файла .md или .mdx

<div style="text-align: center;">
  <img src="/assets/bert.png" alt="Изображение Урока" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
</div>

Чтобы сделать изображение по центру на странице Starlight, вам потребуется использовать чистый HTML с CSS-стилями или, что проще, обернуть изображение в специальный div.

В Markdown-файлах (.md или .mdx) вы можете использовать HTML-теги.

🛠️ Способ 1: Использование CSS-стилей (Рекомендуется)

Используйте стандартный HTML-тег <img> и оберните его в тег <div> со стилями для центрирования.

Код для вашего файла .md или .mdx

HTML

<div style="text-align: center;">
  <img src="/assets/bert.png" alt="Изображение Урока" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
</div>

Объяснение:

    text-align: center; в <div> центрирует все строчные элементы (на случай, если вы добавите текст).

    display: block; margin: 0 auto; на самом <img> — это классический и самый надежный способ центрирования блочного элемента (а display: block; делает изображение блочным).

    max-width: 100%; height: auto; гарантирует, что изображение будет адаптивным и не выйдет за пределы контейнера.

💡 Способ 2: Использование Markdown-синтаксиса в MDX (Только для продвинутых)

Если вы хотите использовать чистый Markdown-синтаксис, но при этом иметь центрирование, вам нужно будет создать собственный компонент Astro/React/Vue, который будет обрабатывать изображение.

Шаг 1: Создайте компонент CenterImage.astro

Создайте файл src/components/CenterImage.astro со следующим содержимым:

---

import { Image } from "astro:assets";

// Определяем пропсы, которые будет принимать компонент
const { src, alt = "Изображение", ...props } = Astro.props;

---

<div style="text-align: center;">
    <img 
        src={src} 
        alt={alt} 
        style="max-width: 100%; height: auto; display: block; margin: 0 auto;"
        {...props}
    />
</div>

Шаг 2: Используйте компонент в вашем .mdx файле

Если ваш файл контента имеет расширение .mdx, вы можете импортировать этот компонент:

---

// Файл: ваш_урок.mdx
// Вам не нужно импортировать изображение, только компонент

---

import CenterImage from '../../components/CenterImage.astro';

# Заголовок Урока

<CenterImage
src="/assets/bert.png"
alt="Изображение Урока"
width={600} // Опционально: можно задать ширину
/>

Далее идет ваш текст...

Рекомендация: Для быстрой и простой задачи центрирования используйте Способ 1 (чистый HTML с inline CSS) прямо в вашем Markdown-файле.
