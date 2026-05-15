Да, этот план **правильный по направлению**. Сейчас проблема не в UI-стиле, а в **conversion architecture**: сайт выглядит сильно, но путь пользователя пока слишком примитивный.

Сейчас воронка фактически такая:

```txt id="ynw49e"
Смотрю сайт → нажимаю CTA → открывается email → мне надо самому придумать, что написать
```

Для клиента малого бизнеса это лишнее трение. Особенно если он не технический человек.

Правильнее:

```txt id="39bbn4"
Смотрю сайт → понимаю проблему → вижу кейс → заполняю короткую форму → ты получаешь структурированный лид
```

---

# Мой вердикт по каждому пункту

## 1. Technical Audit / Strategy Call page — да, обязательно

Это главный недостающий элемент.

Я бы сделал **не модалку**, а отдельную страницу:

```txt id="44dgo6"
/audit
```

Почему отдельная страница лучше:

```txt id="qkdno3"
- можно дать прямую ссылку клиенту
- можно использовать в визитке / QR-code
- можно продвигать через SEO/соцсети
- меньше отвлечений
- выглядит серьёзнее, чем pop-up
```

Модалка может быть позже, но базово лучше `/audit`.

## Минимальная форма

Не делай форму слишком длинной. Цель — не собрать всю спецификацию, а получить лид.

```txt id="jxzze2"
Name
Business name
Website URL
Email
Phone optional
What do you need help with?
Budget range optional
Message optional
```

Чекбоксы для проблемы:

```txt id="0ou8zg"
☐ My website is slow
☐ My website looks outdated
☐ I need a new website
☐ Forms / calls / leads are not working
☐ I need local SEO
☐ I need ongoing support
```

CTA:

```txt id="v1efj8"
REQUEST TECHNICAL AUDIT
```

Не “Submit”. В твоём стиле лучше:

```txt id="2jrvq8"
[ SEND AUDIT REQUEST ]
[ REQUEST SITE REVIEW ]
[ START DIAGNOSTIC ]
```

---

## 2. Case Study pages — да, это критично

Тут я полностью согласен с аудитом.

Если кнопка называется:

```txt id="27ldwy"
View Case Study
```

она **не должна вести на #contact**.

Это ломает доверие. Пользователь ожидает увидеть кейс, а его сразу кидают на контакт. Это ощущается как bait.

Правильная структура:

```txt id="9bvktd"
/cases/veterinary-clinic
/cases/accessibility-redesign
/cases/bulldog-breeder
```

Даже если пока кейсы короткие — всё равно лучше дать отдельную страницу.

## Структура case study

```txt id="6nyukt"
1. [ CASE FILE 001 ]
2. Business / industry
3. Problem
4. What was broken
5. What I changed
6. Tech stack
7. Before / after screenshots
8. Results / metrics
9. CTA: Request similar audit
```

Для твоего Intel Briefing стиля это прям идеально. Можно оформить как dossier/report:

```txt id="de4mii"
CASE FILE: VETERINARY CLINIC MODERNIZATION
STATUS: DEPLOYED
OBJECTIVE: Replace outdated site with fast lead system
RESULT: 100/100 performance score
```

---

## 3. 404 page — да, но это ниже по приоритету

404 страница хорошо подходит стилю, но она не влияет на воронку так сильно, как `/audit` и case pages.

Я бы поставил приоритет так:

```txt id="hmpgmj"
1. /audit page
2. real case study pages
3. update all CTA links
4. 404 page
```

404 можно сделать быстро, но она не должна отвлекать от главных conversion-задач.

Пример:

```txt id="cmkfe0"
[ 404 UX FATAL ERROR ]

PAGE MISSING.
The requested file does not exist or was moved.

[ RETURN TO BASE ]
[ REQUEST SITE AUDIT ]
```

---

# Что я бы изменил в CTA-стратегии

## Текущие CTA

Сейчас:

```txt id="jokq1x"
GET A FREE SITE REVIEW → #contact
BOOK CALL → #contact
View Case Study → #contact
Read More → #contact
```

Проблема: слишком много разных кнопок ведут в одно место. Это создаёт иллюзию выбора, но фактически выбора нет.

---

# Новая CTA-система

## Primary CTA

Главное действие:

```txt id="1b5sdr"
Request Technical Audit
```

Ведёт на:

```txt id="hzdq1p"
/audit
```

Использовать в:

```txt id="rwqpjk"
Header
Hero
Problem section
Final CTA
Case study pages
```

---

## Secondary CTA

Для людей, которые ещё не готовы оставить заявку:

```txt id="zyx76n"
View Recent Work
```

Ведёт на:

```txt id="dlmfwx"
#work
```

или на отдельную страницу:

```txt id="27h0kg"
/work
```

---

## Case CTA

В карточках проектов:

```txt id="m4qqfa"
View Case Study
```

Ведёт только на конкретный case URL:

```txt id="9h1v4k"
/cases/veterinary-clinic
```

---

## Direct contact CTA

Email/phone оставить, но как fallback:

```txt id="6edzy7"
Prefer direct contact?
hello@andrii.dev
(256) ...
```

Email не должен быть главным способом захвата лида. Он должен быть запасным.

---

# Я бы сделал такую карту ссылок

```txt id="aokyji"
Header:
Work → #work
Services → #services
About → #about
Book Call → /audit

Hero:
GET A FREE SITE REVIEW → /audit
SEE RECENT PROJECTS → #work

Problem:
REQUEST TECHNICAL AUDIT → /audit

Case Studies:
Veterinary Clinic → /cases/veterinary-clinic
Accessibility Redesign → /cases/accessibility-redesign
Bulldog Breeder → /cases/bulldog-breeder

Services:
Each service card CTA → /audit?service=modernization

Final CTA:
FREE STRATEGY CALL → /audit
GET TECHNICAL AUDIT → /audit

Footer:
Email → mailto
Phone → tel
```

---

# Важный нюанс: “Book Call” vs “Technical Audit”

Я бы осторожно использовал “Book Call”.

Для многих клиентов “Book Call” звучит как обязательство: надо говорить, объяснять, продавец будет давить.

А вот:

```txt id="7kofc2"
Request Technical Audit
Get Free Site Review
Start Site Diagnostic
```

звучит легче и конкретнее.

Мой вариант:

```txt id="yvxqkl"
Header button: Request Audit
Hero primary: Get a Free Site Review
Final CTA: Start Technical Audit
```

А уже после формы можно предложить call.

---

# Что делать технически

Для Astro можно сделать так:

```txt id="939mdv"
src/pages/audit.astro
src/pages/cases/veterinary-clinic.astro
src/pages/cases/accessibility-redesign.astro
src/pages/cases/bulldog-breeder.astro
src/pages/404.astro
```

Если хочешь быстро и надёжно:

```txt id="twdbvx"
форма → Astro API route / server endpoint → Resend → email тебе
```

Плюс:

```txt id="2opjn2"
honeypot field
basic validation
success state
error state
loading state
```

Success message в твоём стиле:

```txt id="0153lv"
[ REQUEST RECEIVED ]

Your audit request has been logged.
I’ll review the site and respond with next steps.
```

---

# Что НЕ делать

```txt id="jef6i5"
- не вести View Case Study на #contact
- не оставлять mailto как главный conversion path
- не делать форму на 15+ полей
- не заставлять клиента сразу выбирать точный бюджет
- не использовать Typeform, если он визуально ломает brutal стиль
- не делать Calendly единственным вариантом
```

Calendly можно добавить позже как secondary:

```txt id="1ksqrs"
Prefer to talk directly? Book a call.
```

Но основной вход лучше через твою форму.

---

# Итоговый план

Я бы делал так:

```txt id="qj1hz9"
Phase 1:
Создать /audit с короткой формой.

Phase 2:
Переподключить все primary CTA на /audit.

Phase 3:
Создать реальные case study pages.

Phase 4:
Исправить View Case Study / Read More links.

Phase 5:
Добавить 404 в стиле Intel Briefing.

Phase 6:
Позже добавить Calendly или booking flow, если будет нужно.
```

Главный вывод: **да, аудит прав**. Сейчас сайт уже выглядит как сильный технический продукт, но воронка пока ведёт в обычный email. Нужно сделать так, чтобы сайт не просто впечатлял, а **собирал структурированные заявки**.
