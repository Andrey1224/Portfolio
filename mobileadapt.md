Да. Правильная адаптивность — это не “поставить пару media queries”, а **заранее определить, как каждый блок меняет layout от desktop → tablet → mobile**.

Тебе нужно думать не “как сжать desktop”, а:

> **Как сохранить смысл секции на меньшем экране, даже если визуальная композиция меняется.**

Ниже — практичесная система именно для твоего сайта.

---

# 1. Главный принцип: desktop ≠ mobile

Не пытайся буквально сжать desktop-версию в телефон.

У тебя desktop сейчас построен на:

```txt
large typography
horizontal layouts
wide cards
brutalist offsets
marquee
big whitespace
side-by-side sections
```

На мобильном это должно стать:

```txt
single column
меньше декоративных смещений
меньше rotations
меньше огромных шрифтов
сначала смысл, потом визуал
CTA сразу виден
карточки идут вертикально
```

То есть на mobile ты сохраняешь **контент и стиль**, но меняешь **композицию**.

---

# 2. Базовые breakpoint’ы

Я бы использовал такие:

```css
/* Mobile first by default */
/* 0–639px: mobile */

/* 640px+ */
@media (min-width: 640px) {
  /* large mobile / small tablet */
}

/* 768px+ */
@media (min-width: 768px) {
  /* tablet */
}

/* 1024px+ */
@media (min-width: 1024px) {
  /* laptop */
}

/* 1280px+ */
@media (min-width: 1280px) {
  /* desktop */
}

/* 1536px+ */
@media (min-width: 1536px) {
  /* large desktop */
}
```

Если Tailwind:

```txt
base = mobile
sm = 640px
md = 768px
lg = 1024px
xl = 1280px
2xl = 1536px
```

Главное: **пиши mobile-first**.
Не делай desktop, а потом пытайся всё “чинить” на mobile.

---

# 3. Контейнер сайта

Сейчас у тебя много широких секций. Сделай единый container system.

```css
.container {
  width: min(100% - 40px, 1180px);
  margin-inline: auto;
}

@media (min-width: 768px) {
  .container {
    width: min(100% - 64px, 1180px);
  }
}

@media (min-width: 1280px) {
  .container {
    width: min(100% - 96px, 1180px);
  }
}
```

Для Tailwind:

```html
<div class="mx-auto w-[calc(100%-40px)] max-w-[1180px] md:w-[calc(100%-64px)] xl:w-[calc(100%-96px)]">
```

Но лучше завести utility класс.

---

# 4. Fluid typography: чтобы текст не ломался

Для твоего сайта это критично, потому что у тебя огромные headings.

Используй `clamp()`.

## Hero heading

```css
.hero-title {
  font-size: clamp(3.25rem, 8vw, 7.5rem);
  line-height: 0.92;
  letter-spacing: -0.06em;
}
```

## Section headings

```css
.section-title {
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  line-height: 0.95;
  letter-spacing: -0.05em;
}
```

## Body

```css
.body-text {
  font-size: clamp(1rem, 1.1vw, 1.125rem);
  line-height: 1.6;
}
```

Это лучше, чем вручную писать:

```txt
text-8xl md:text-9xl lg:text-[120px]
```

Tailwind тоже может:

```html
<h1 class="text-[clamp(3.25rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.06em]">
```

---

# 5. Desktop → Mobile: правила по секциям

## Header

### Desktop

```txt
logo | work | services | about | empty spacer | Alabama based | book call
```

### Mobile

Должно стать:

```txt
logo | hamburger
```

В drawer/menu:

```txt
Work
Services
About
FAQ
Book Call
Get Site Review
```

Не пытайся уместить все nav items на mobile.

Tailwind пример:

```html
<header class="fixed top-0 z-50 w-full border-b-2 border-black bg-white">
  <div class="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[auto_auto_auto_auto_1fr_auto_auto]">
    <a class="bg-blue-600 text-white px-5 py-4">ANDRII.DEV</a>

    <nav class="hidden lg:flex">
      ...
    </nav>

    <button class="lg:hidden px-5 py-4">
      Menu
    </button>
  </div>
</header>
```

---

## Hero

### Desktop

```txt
2 columns:
left = badge, headline, copy, buttons
right = website mockup
```

### Tablet

```txt
headline top
mockup below or smaller right
CTA below text
```

### Mobile

```txt
badge
headline
subheadline
buttons stacked
mockup below
trust-row
```

Важно: на mobile mockup не должен быть справа. Он должен идти **после CTA**, иначе будет давить первый экран.

Пример:

```html
<section class="min-h-[100svh] pt-28 pb-16">
  <div class="container grid items-center gap-10 lg:grid-cols-2">
    <div>
      <!-- text -->
    </div>

    <div class="order-last lg:order-none">
      <!-- mockup -->
    </div>
  </div>
</section>
```

Кнопки:

```html
<div class="flex flex-col gap-3 sm:flex-row">
  <a class="w-full sm:w-auto">Get a Free Site Review</a>
  <a class="w-full sm:w-auto">See Recent Projects</a>
</div>
```

---

## Marquee

На desktop можно оставить крупную бегущую строку.

На mobile:

```txt
уменьшить высоту
уменьшить font-size
замедлить скорость
```

Или вообще заменить на статичный horizontal scroll/chips.

```css
.marquee-text {
  font-size: clamp(2rem, 6vw, 4.5rem);
}
```

---

## Trust section

### Desktop

```txt
left heading
right 4 small cards
```

### Mobile

```txt
heading
2x2 cards или vertical stack
```

Лучший mobile:

```txt
LOCAL. RELIABLE. REAL COMMUNICATION.
[Local Partner]
[Direct Access]
[No Ghosting]
[Long-Term]
```

Tailwind:

```html
<section>
  <div class="container grid gap-10 lg:grid-cols-[1.1fr_1fr]">
    <h2>...</h2>
    <div class="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
      ...
    </div>
  </div>
</section>
```

На совсем маленьких экранах лучше:

```txt
grid-cols-2
```

Не делай 4 в ряд на mobile.

---

## Problem section

### Desktop

```txt
heading left
warning box right
4 cards in row
```

### Tablet

```txt
heading + warning
cards 2x2
```

### Mobile

```txt
heading
warning box
cards stacked
```

Ключ:

```html
<div class="grid gap-6 lg:grid-cols-2">
  <h2>...</h2>
  <WarningBox />
</div>

<div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
  <ProblemCard />
</div>
```

Для stickers на mobile:

```css
.problem-sticker {
  transform: rotate(-2deg);
}

@media (max-width: 640px) {
  .problem-sticker {
    transform: none;
    position: static;
    margin-bottom: 12px;
  }
}
```

Потому что rotated labels на маленьком экране могут ломать layout.

---

## Proof / Case Studies

Это самая важная адаптивная секция.

### Desktop

```txt
main case = left text + right before/after
secondary cases = 2 columns
```

### Tablet

```txt
main case = vertical
image below text
secondary = 2 columns
```

### Mobile

```txt
heading
main case text
before/after image
button
secondary case 1
secondary case 2
```

Не пытайся держать before/after рядом с текстом на mobile.

```html
<div class="grid overflow-hidden border-4 border-black lg:grid-cols-[0.8fr_1.2fr]">
  <div class="p-6 md:p-10">
    ...
  </div>

  <div class="min-h-[260px] lg:min-h-[420px]">
    ...
  </div>
</div>
```

Для before/after:

```css
.before-after {
  aspect-ratio: 16 / 10;
}

@media (max-width: 640px) {
  .before-after {
    aspect-ratio: 4 / 3;
  }
}
```

---

## Services

### Desktop

```txt
4 cards in row
Modernization featured
black section
```

### Tablet

```txt
2x2 grid
```

### Mobile

```txt
stacked cards
featured card first or second
```

Если Modernization — основной оффер, на mobile можно поставить его первым:

```txt
1. Modernization Engine
2. Diagnostic Audit
3. Technical Rescue
4. AI Edge
```

Но если сохранить логику “Audit first”, оставь порядок:

```txt
Audit → Modernization → Rescue → AI
```

Tailwind:

```html
<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
```

Для featured card:

```html
<article class="md:col-span-2 xl:col-span-1">
```

Но если у тебя featured card шире на desktop:

```html
<div class="grid gap-6 xl:grid-cols-[1fr_1.3fr_1fr_1fr]">
```

На mobile это всё станет stack.

---

## Process

Текущий vertical process отлично адаптируется.

### Desktop

```txt
large outline numbers left
text/line right
```

### Mobile

На mobile большие `01/02/03/04` могут быть слишком огромными.

Сделай:

```txt
01 AUDIT
text
02 BUILD
text
...
```

То есть numbers меньше и в одной строке с title.

CSS/Tailwind:

```html
<div class="grid gap-6 md:grid-cols-[220px_1fr]">
  <div class="text-[clamp(4rem,12vw,9rem)]">01</div>
  <div>...</div>
</div>
```

На mobile:

```html
<div class="grid gap-3 md:grid-cols-[220px_1fr]">
```

Можно через CSS:

```css
.process-number {
  font-size: clamp(4rem, 14vw, 9rem);
  line-height: 0.85;
}
```

---

## About / Guarantee

Если выберешь Variant 4:

### Desktop

```txt
photo left
black promise card right
```

### Mobile

```txt
heading
photo
promise card
bullets
```

Важно: фото не должно быть огромным на mobile.

```html
<div class="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
  <div>
    <img class="aspect-square w-full max-w-[420px] object-cover" />
  </div>
  <div>
    ...
  </div>
</div>
```

Для rotated photo:

```css
.about-photo {
  transform: rotate(-2deg);
}

@media (max-width: 768px) {
  .about-photo {
    transform: none;
  }
}
```

---

## FAQ

### Desktop

```txt
centered width 700–900px
```

### Mobile

```txt
full width
font smaller
padding меньше
```

```html
<div class="mx-auto max-w-3xl">
```

FAQ вопросы на mobile не должны быть слишком мелкими:

```css
.faq-question {
  font-size: clamp(1rem, 2vw, 1.125rem);
}
```

---

## Final CTA

### Desktop

```txt
big centered heading
buttons row
```

### Mobile

```txt
heading smaller
solid + outline mix
buttons stacked
micro trust row wraps
```

```html
<h2 class="text-[clamp(3rem,10vw,8rem)] leading-[0.9]">
```

Кнопки:

```html
<div class="flex flex-col gap-3 sm:flex-row sm:justify-center">
```

Micro row:

```html
<div class="flex flex-wrap justify-center gap-x-4 gap-y-2">
```

---

# 6. Не делай адаптивность через fixed widths

Плохой паттерн:

```css
.card {
  width: 320px;
}
```

Лучше:

```css
.card {
  width: 100%;
  max-width: 360px;
}
```

Или grid:

```css
grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
```

Для карточек:

```html
<div class="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
```

Это очень удобно для problem cards / outcome cards.

---

# 7. Проверяй не только “mobile/desktop”, а реальные размеры

Минимум протестировать:

```txt
375x812 — iPhone mobile
390x844 — modern mobile
430x932 — large mobile
768x1024 — tablet
1024x768 — small laptop/tablet landscape
1366x768 — minimum desktop
1440x900 — common laptop
1920x1080 — desktop
```

Особенно для твоего сайта важно:

```txt
1366x768
```

Потому что у тебя много больших заголовков и section spacing.

---

# 8. Используй container queries, если карточки сложные

Если компонент может жить в разной ширине, лучше не привязывать только к screen size.

Например service card может быть:

```txt
narrow → vertical layout
wide → split layout
```

CSS:

```css
.service-card {
  container-type: inline-size;
}

@container (min-width: 420px) {
  .service-card-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
```

Это advanced, но очень полезно для сложных reusable cards.

---

# 9. Правильный порядок работы

Делай так:

## Шаг 1

Открой desktop и выпиши для каждой секции:

```txt
Что главное?
Что можно убрать на mobile?
Что должно идти первым?
```

## Шаг 2

Собери mobile layout отдельно:

```txt
Header
Hero
Trust
Problem
Proof
Services
Process
About
FAQ
CTA
Footer
```

## Шаг 3

Потом расширяй к tablet и desktop.

Не наоборот.

---

# 10. Как дать задачу агенту

Вот готовый brief:

```txt
Make the current neo-brutalist desktop design fully responsive using a mobile-first approach.

Do not simply shrink the desktop layout. Preserve the same content and visual identity, but restructure sections for smaller screens.

Rules:
- Use a shared max-width container.
- Use fluid typography with clamp() for hero and section headings.
- Use mobile-first breakpoints: base, sm, md, lg, xl, 2xl.
- Desktop can use multi-column layouts; mobile must be single-column.
- Remove or reduce rotations/offset stickers on small screens if they cause overflow.
- Buttons should stack on mobile and sit inline on tablet/desktop.
- Cards should stack on mobile, become 2-column on tablet, and full desktop grids on xl.
- Header should collapse to logo + menu button on mobile.
- Large mockups should move below text on mobile.
- Before/after case study should stack vertically on mobile.
- Process section should keep the vertical story but scale down the large outline numbers on mobile.
- About section should stack photo above promise copy on mobile.
- CTA buttons should stack on mobile.
- Respect prefers-reduced-motion.

Test the following widths:
375, 390, 430, 768, 1024, 1366, 1440, 1920.

Acceptance:
- No horizontal overflow.
- No text clipping.
- No section requires awkward zooming.
- CTA buttons are always visible and tappable.
- Headings remain dramatic but readable.
- Cards keep the neo-brutalist style without crowding.
```

---

# 11. Самое важное правило для твоего сайта

У тебя сильный desktop. Но mobile должен быть не “мини-версия desktop”, а:

```txt
та же история,
но в вертикальном порядке.
```

То есть:

```txt
desktop = poster / editorial layout
mobile = stacked story / cards
```

Сохраняешь:

```txt
thick borders
hard shadows
blue/orange/black accents
big headings
stickers, но аккуратно
```

Упрощашь:

```txt
columns
rotations
huge empty spacing
side-by-side mockups
oversized numbers
```

Тогда сайт будет выглядеть профессионально на всех экранах, а не только на твоём desktop.
