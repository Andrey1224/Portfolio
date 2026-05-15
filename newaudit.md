Я проверил, что пишут UX/дизайн-источники. Главный вывод: **в neo-brutalism украшения и анимации должны быть грубыми, заметными, но функциональными**. Не “красивые плавные эффекты”, а **сигналы интерфейса**: press, stamp, alert, scan, reveal, system status.

NN/g описывает neobrutalism как стиль с high contrast, blocky layouts, bold colors, thick borders и intentionally unpolished elements, но подчёркивает, что его надо балансировать с usability, иначе интерфейс становится overwhelming/confusing. ([Nielsen Norman Group][1]) SVGator тоже выделяет strongly defined shapes, thick/black sharp shadows, huge fonts, animation effects и function over form как ключевые признаки стиля. ([SVGator][2])

---

# 1. Главный принцип украшений

Для твоего сайта украшение должно отвечать на вопрос:

```txt id="t97cau"
Это усиливает ощущение technical report / system briefing?
Или это просто декор ради декора?
```

Тебе подходят:

```txt id="41o4ge"
system labels
warning stamps
browser-window frames
terminal/status bars
hard shadows
ticker/marquee
scan lines
grid lines
case ID tags
progress indicators
before/after handles
sharp hover states
```

Тебе хуже подходят:

```txt id="du10dl"
soft blobs
glass blur
smooth floating cards
liquid morphing
cute stickers
random emoji
много parallax
постоянный glitch
плавные luxury-анимации
```

---

# 2. Украшения, которые реально используют в neo-brutalism

## A. Stamp labels / system tags

Это один из самых сильных приёмов для твоего “Intel Briefing”.

Примеры:

```txt id="73y2cz"
[ SYSTEM WARNING ]
[ CASE STUDY 01 ]
[ 404 UX ]
[ FATAL ]
[ VERIFIED ]
[ ALABAMA BASED ]
[ RESPONSE: 24–48H ]
```

Визуально:

```css id="cuw9m8"
.system-stamp {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border: 2px solid #000;
  background: #fff;
  color: #000;
  font-family: "IBM Plex Mono", monospace;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  box-shadow: 3px 3px 0 #000;
  transform: rotate(-1deg);
}
```

Используй их **как metadata**, не как конфетти.

Хорошо:

```txt id="f590i5"
1–2 stamp labels на секцию
```

Плохо:

```txt id="6z2dwy"
5–8 label/sticker элементов в каждом блоке
```

---

## B. Fake browser windows / terminal panels

Ты уже используешь это в hero. Это очень хорошо для твоего позиционирования.

Подходящие элементы:

```txt id="ei6o7w"
browser chrome
three dots
address bar
terminal cursor
status row
file tabs
grid panels
diagnostic table
```

Пример:

```html id="3akhjg"
<div class="terminal-panel">
  <div class="terminal-header">
    <span></span><span></span><span></span>
    <code>SYSTEM_AUDIT.LOG</code>
  </div>

  <div class="terminal-body">
    <p>> Checking page speed...</p>
    <p>> SEO structure found.</p>
    <p>> Lead capture: missing.</p>
  </div>
</div>
```

```css id="iif6ux"
.terminal-panel {
  border: 2px solid #000;
  background: #fff;
  box-shadow: 6px 6px 0 #000;
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 2px solid #000;
  padding: 8px 12px;
  font-family: monospace;
  font-size: 11px;
  text-transform: uppercase;
}

.terminal-header span {
  width: 7px;
  height: 7px;
  border: 1px solid #000;
  border-radius: 999px;
}
```

Это не просто decoration — это поддерживает идею: **ты диагностируешь сайт как систему**.

---

## C. Sharp shadows / shadow play

SVGator отдельно отмечает, что в neobrutalism тени обычно sharp/black, без blur, часто как будто под кнопкой лежит чёрный прямоугольник. ([SVGator][2])

Для твоего сайта:

```txt id="yw8nlw"
normal card: 5–6px
important card: 8px
rare hero/CTA: 10px max
```

Анимация hover:

```css id="r4uh8c"
.brutal-card {
  border: 2px solid #000;
  box-shadow: 6px 6px 0 #000;
  transition:
    transform 120ms ease,
    box-shadow 120ms ease;
}

.brutal-card:hover {
  transform: translate(2px, 2px);
  box-shadow: 3px 3px 0 #000;
}
```

Это один из лучших micro-interactions для твоего стиля: грубо, понятно, интерактивно.

---

## D. Offset/tilted cards

Лёгкий rotate работает хорошо, если он выглядит как “stamped document” или “evidence card”.

Хорошо:

```css id="uqlsrl"
.rotate-card-a {
  transform: rotate(-1deg);
}

.rotate-card-b {
  transform: rotate(1deg);
}
```

Плохо:

```css id="iz9bxf"
transform: rotate(7deg);
```

Для твоего сайта правило такое:

```txt id="0v6131"
tilt только для маленьких карточек, labels, badges, proof/evidence elements.
Не наклонять большие текстовые секции.
```

---

## E. Marquee / broadcast ticker

У тебя уже есть marquee. Это сильный приём. Он подходит под system terminal / broadcast vibe.

Но профессиональное правило: **движение притягивает внимание**, поэтому его надо использовать дозированно. NN/g пишет, что moving elements сильно привлекают внимание, и при проектировании анимации надо учитывать цель, частоту появления и механику. ([Nielsen Norman Group][3])

Для тебя:

```txt id="dwt0rs"
1 marquee на странице — хорошо.
2 marquee — осторожно.
3+ marquee — уже шум.
```

Обязательно:

```css id="jucqrl"
.marquee:hover {
  animation-play-state: paused;
}
```

И желательно:

```css id="wwhevc"
@media (prefers-reduced-motion: reduce) {
  .marquee {
    animation: none;
  }
}
```

---

# 3. Анимации, которые подходят твоему стилю

NN/g рекомендует использовать animation для feedback, state changes, navigation metaphors и signifiers — не просто ради красоты. Также они подчёркивают, что animation должна быть brief, subtle и unobtrusive. ([Nielsen Norman Group][4]) Для твоего neo-brutalism это значит: **анимации могут быть резкими, но короткими и понятными**.

## A. Button press animation

Самая обязательная.

```css id="9dgx5y"
.brutal-button {
  border: 2px solid #000;
  box-shadow: 5px 5px 0 #000;
  transition:
    transform 100ms ease,
    box-shadow 100ms ease,
    background-color 100ms ease;
}

.brutal-button:hover {
  transform: translate(2px, 2px);
  box-shadow: 3px 3px 0 #000;
}

.brutal-button:active {
  transform: translate(5px, 5px);
  box-shadow: 0 0 0 #000;
}
```

Это должно быть на CTA, cards, FAQ rows, nav links.

---

## B. Stamp-in reveal

Хорошо для labels:

```css id="sn1tp9"
@keyframes stampIn {
  0% {
    transform: scale(1.2) rotate(-3deg);
    opacity: 0;
  }
  70% {
    transform: scale(0.96) rotate(-1deg);
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(-1deg);
  }
}

.stamp-in {
  animation: stampIn 180ms steps(2, end) both;
}
```

Где использовать:

```txt id="o05eg8"
SYSTEM WARNING
CASE STUDY labels
FATAL / 404 UX tags
READY TO SCALE
```

Не использовать на длинном тексте.

---

## C. Block wipe reveal

Очень подходит под brutal/system стиль: не fade-in, а “панель открылась”.

```css id="68lzaq"
@keyframes blockWipe {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

.block-reveal {
  animation: blockWipe 320ms steps(4, end) both;
}
```

Где использовать:

```txt id="4ejhmu"
hero highlight WEBSITES
section headings
CTA headline
case study image panel
```

Это лучше, чем мягкий opacity fade.

---

## D. Hard slide-in

Для карточек:

```css id="dl60sz"
@keyframes brutalSlideUp {
  from {
    transform: translate(0, 24px);
    opacity: 0;
  }
  to {
    transform: translate(0, 0);
    opacity: 1;
  }
}

.card-enter {
  animation: brutalSlideUp 260ms cubic-bezier(.2, .8, .2, 1) both;
}
```

Но не делай все карточки одновременно. Лучше stagger:

```css id="ekesos"
.card-enter:nth-child(1) { animation-delay: 0ms; }
.card-enter:nth-child(2) { animation-delay: 60ms; }
.card-enter:nth-child(3) { animation-delay: 120ms; }
.card-enter:nth-child(4) { animation-delay: 180ms; }
```

NN/g отдельно отмечает, что чем чаще пользователь встречает анимацию, тем короче и тоньше она должна быть. ([Nielsen Norman Group][5])

---

## E. Line drawing animation

Очень подходит для твоих browser illustrations, process lines и diagnostic UI.

```css id="40o76g"
@keyframes drawLine {
  from {
    stroke-dashoffset: 100;
  }
  to {
    stroke-dashoffset: 0;
  }
}

.line-draw {
  stroke-dasharray: 100;
  animation: drawLine 500ms steps(6, end) both;
}
```

Где использовать:

```txt id="nvmyrq"
hero browser illustration
process horizontal lines
before/after divider
icons
```

---

## F. Accordion snap

Для FAQ:

```css id="p8rlgg"
.faq-icon {
  transition: transform 120ms steps(2, end);
}

.faq-item[data-open="true"] .faq-icon {
  transform: rotate(90deg);
}
```

FAQ не должен открываться luxury-smooth. Лучше:

```txt id="p52haz"
quick snap
clear state change
visible border
```

---

## G. Scanline / system sweep

Очень аккуратно. Это может усилить Intel vibe, особенно в Services или final CTA.

```css id="5udcwf"
.scan-panel {
  position: relative;
  overflow: hidden;
}

.scan-panel::after {
  content: "";
  position: absolute;
  inset: 0;
  transform: translateY(-100%);
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(255,255,255,0.18),
    transparent
  );
  animation: scan 4s linear infinite;
  pointer-events: none;
}

@keyframes scan {
  to {
    transform: translateY(100%);
  }
}
```

Но это надо использовать **только на 1–2 panel elements**, не на всей странице.

---

## H. Minimal glitch

Glitch подходит, но это самый опасный эффект.

Хорошо:

```txt id="6s1oe0"
на hero word
на system warning
на final CTA
1 раз при появлении
```

Плохо:

```txt id="2aulop"
постоянно glitch-ится весь заголовок
glitch на body text
мигающие цвета
```

NN/g предупреждает, что excessive motion может быть accessibility issue, а flashing и резкие цветовые переходы могут быть опасны для части пользователей. ([Nielsen Norman Group][5])

---

# 4. Motion rules для твоего сайта

## Длительность

```txt id="ibw1mh"
Hover / press: 80–140ms
FAQ / small state change: 120–180ms
Card enter: 220–320ms
Section reveal: 300–500ms
Marquee: медленно, но не агрессивно
```

NN/g пишет, что даже десятая доля секунды может заметно менять качество UX-анимации: слишком долгая анимация начинает раздражать. ([Nielsen Norman Group][5])

---

## Easing

Для твоего стиля лучше:

```txt id="x66nik"
steps()
linear
short cubic-bezier
sharp snap
```

Хуже:

```txt id="6jd4qy"
bouncy spring
elastic
slow luxury easing
smooth floating motion
```

Material Design отдельно описывает easing/duration как систему, которая помогает motion быть responsive and expressive; для твоего стиля это значит, что easing должен быть последовательным, а не случайным от компонента к компоненту. ([Material Design][6])

---

## Reduced motion

Обязательно добавить:

```css id="5lv0q5"
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }

  .marquee {
    animation: none !important;
    transform: none !important;
  }
}
```

MDN и web.dev описывают `prefers-reduced-motion` как media feature, позволяющий учитывать системную настройку пользователя на минимизацию motion. ([MDN Web Docs][7]) W3C также говорит, что motion animation from interaction должна иметь возможность быть отключённой, если она не essential. ([W3C][8])

---

# 5. Что конкретно добавить в твой текущий сайт

## Hero

Добавить можно:

```txt id="rvbo2r"
- block wipe reveal на WEBSITES
- лёгкий line-draw для browser illustration
- hover press на CTA
- маленький мигающий status dot у AVAILABLE IN ALABAMA
```

Не надо:

```txt id="16g9yq"
- floating hero illustration
- parallax hero
- постоянный glitch headline
```

---

## Marquee

Оставить, но:

```txt id="h3kh52"
- pause on hover
- reduced motion fallback
- не добавлять второй большой marquee ниже
```

---

## Problem cards

Добавить:

```txt id="jzzhys"
- warning labels stamp-in
- hover card press
- возможно, маленький “evidence source” tooltip
```

Для твоей идеи со сносками при hover это идеально. Главное — сделать tooltip brutal:

```css id="z1jgzu"
.data-tooltip {
  border: 2px solid #000;
  background: #fff;
  box-shadow: 4px 4px 0 #000;
  font-family: monospace;
  font-size: 12px;
}
```

---

## Proof section

Добавить:

```txt id="gtutsk"
- before/after handle micro-animation
- case study card hover press
- “VERIFIED RESULT” stamp
- small diagnostic metric panel
```

---

## Services / HOW I BUILD

Если оставляешь чёрный фон, добавь больше “system panel” логики:

```txt id="4o0c31"
- terminal header сверху
- faint grid lines
- scanline только внутри заголовочного panel
- cards slightly larger
- один featured service card
```

Но не добавляй туда ещё glitch, marquee и большие тени одновременно.

---

## Process

Тут идеально зайдёт:

```txt id="ewtm0n"
- line drawing animation для горизонтальных линий
- step numbers appear one by one
- labels stamp-in
```

Эта секция уже сильная. Анимация должна быть минимальной.

---

## FAQ

Добавить:

```txt id="q522mj"
- плюсик поворачивается на 90°
- accordion opens with quick snap
- active row получает blue/orange micro-border
```

Не надо:

```txt id="iac9r7"
- плавное раскрытие на 700ms
- bouncing plus icon
```

---

## Final CTA

Добавить:

```txt id="xuttzc"
- READY TO SCALE? stamp
- block wipe на LET’S FIX YOUR SITE
- кнопки с сильным press interaction
- маленький system status: AVAILABLE FOR NEW PROJECTS
```

Синий фон можно оставить. Он работает как brand block.

---

# 6. Мой “approved effects list” для твоего проекта

```txt id="sqb0ts"
✅ hard shadow hover
✅ button press
✅ block wipe reveal
✅ stamp-in labels
✅ line draw illustrations
✅ marquee / ticker
✅ scanline inside panels
✅ terminal/browser chrome
✅ outline typography
✅ rotated evidence cards
✅ system status dots
✅ diagnostic tooltips
✅ before/after handles
✅ FAQ snap accordion
```

# 7. “Forbidden / use very carefully”

```txt id="x5scyk"
❌ постоянный glitch
❌ heavy parallax
❌ scroll-jacking
❌ floating soft cards
❌ blurred glass panels
❌ animated gradients
❌ bouncing playful motion
❌ too many stickers
❌ animated body text
❌ flashing red/blue alerts
```

NN/g прямо предупреждает быть осторожным с parallax и scroll-jacking, потому что такие эффекты часто раздражают и могут вызывать дискомфорт у пользователей. ([Nielsen Norman Group][5])

---

# Финальная формула для твоего стиля

Тебе нужен не просто neo-brutalism, а:

```txt id="t6sir1"
Neo-brutal system interface:
raw typography
hard borders
sharp shadows
technical labels
diagnostic motion
brief animations
no soft luxury effects
no random decoration
```

Самые сильные эффекты для твоего сайта:

```txt id="g9835t"
1. Button/card press
2. Stamp labels
3. Block wipe reveal
4. Line-draw system illustrations
5. Diagnostic tooltips
6. Scanline only inside selected panels
7. FAQ snap interactions
```

Это даст ощущение “developer opened a technical briefing”, а не “designer added trendy animations”.
