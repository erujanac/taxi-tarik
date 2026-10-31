# Taxi „Tarik" – tarik-taxi.com

Stranica s dugmadima: poziv, Viber, WhatsApp, Messenger, SMS.

## Uređivanje
U `js/main.js`, na vrhu, blok `CONFIG`: grad, radno vrijeme, područje i Messenger korisničko ime
(dok je `messenger` prazan, dugme se ne prikazuje). Struktura: `index.html`, `css/style.css`, `js/main.js`, `img/`.

## Objava na GitHub Pages + domena tarik-taxi.com
1. `git add . && git commit -m "Taxi stranica" && git push`
2. GitHub → **Settings → Pages → Source: Deploy from a branch → main / (root)**.
   Custom domain: `tarik-taxi.com` (fajl `CNAME` je već tu). Kad proradi, uključi **Enforce HTTPS**.
3. Kod registrara domene (DNS):
   - `A` zapisi za `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` za `www` → `<github-korisnik>.github.io`
   DNS se može propagirati do nekoliko sati.
