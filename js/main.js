/* ====== UREDI SAMO OVDJE ====== */
const CONFIG = {
  phone: "+38762526561",             // međunarodni format, bez razmaka
  phoneDisplay: "062 526 561",
  messenger: "tarik.palalic", // FB korisničko ime (npr. "tarik.taxi" -> m.me/tarik.taxi) ili cijeli link; prazno = sakrij dugme
  city:  "Donji Vakuf",
  hours: "Svaki dan, 0–24h",
  area:  "Donji Vakuf i okolina, aerodrom, međugradske vožnje",
  car:   "VW Touran – udobno, prostrano, mjesta za prtljag",
  msgText: "Pozdrav, trebam taxi.\nAdresa: \nVrijeme: \nBroj putnika: "
};
/* ============================== */

const $$ = s => document.querySelectorAll(s);
const set = (sel, v) => $$(sel).forEach(el => el.textContent = v);
const num = CONFIG.phone.replace("+", "");
const msg = encodeURIComponent(CONFIG.msgText);
set("[data-hours]", CONFIG.hours);
set("[data-area]", CONFIG.area);
set("[data-car]", CONFIG.car);
set("[data-phone-text]", CONFIG.phoneDisplay);
$$("[data-tel]").forEach(a => a.href = "tel:" + CONFIG.phone);
$$("[data-sms]").forEach(a => a.href = "sms:" + CONFIG.phone + "?body=" + msg);
$$("[data-viber]").forEach(a => a.href = "viber://chat?number=%2B" + num);
$$("[data-wa]").forEach(a => { a.href = "https://wa.me/" + num + "?text=" + msg; a.target = "_blank"; a.rel = "noopener"; });
$$("[data-ms]").forEach(a => CONFIG.messenger ? a.href = (/^https?:/.test(CONFIG.messenger) ? CONFIG.messenger : "https://m.me/" + CONFIG.messenger) : a.hidden = true);
if (!CONFIG.messenger) document.querySelector(".row").style.gridTemplateColumns = "1fr 1fr";
document.getElementById("yr").textContent = new Date().getFullYear();
