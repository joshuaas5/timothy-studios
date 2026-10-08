"""Gera as prévias personalizadas em /home/user/timothy-studios/previa/<slug>/index.html.

Cada prévia é uma página única, sem dependências além de Google Fonts, pensada para celular:
faixa de "prévia", herói com prova social, serviços, bloco exclusivo do negócio, como funciona,
agendamento em 2 toques que monta a mensagem do WhatsApp, perguntas frequentes e CTA fixo.
"""
import html, json, os, urllib.parse

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
e = html.escape

ICONS = {
    "spark": '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    "drop": '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    "leaf": '<path d="M5 19c8 0 14-6 14-14C11 5 5 11 5 19zM5 19 14 10"/>',
    "face": '<circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01M8.5 15c1 1 2.2 1.5 3.5 1.5s2.5-.5 3.5-1.5"/>',
    "cap": '<path d="M3 9l9-5 9 5-9 5-9-5z"/><path d="M7 11v5c0 1 2.5 3 5 3s5-2 5-3v-5"/>',
    "brain": '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
    "bolt": '<path d="M13 3 5 14h6l-1 7 8-11h-6l1-7z"/>',
    "memory": '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    "hand": '<path d="M8 13V6a1.5 1.5 0 0 1 3 0v6M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v8a6 6 0 0 1-6 6h-1a5 5 0 0 1-4.5-3L4 13a1.5 1.5 0 0 1 2.6-1.5L8 13"/>',
    "pulse": '<path d="M3 12h4l2-5 4 10 2-5h6"/>',
    "syringe": '<path d="m18 2 4 4M17 7l-9.5 9.5L5 19l-2 2M14 4l6 6M9 10l5 5M11.5 6.5l6 6"/>',
    "tooth": '<path d="M7 3c-2 0-3.5 1.6-3.5 4 0 3 1.5 4.5 2 7 .5 3 1 7 2.5 7s1.6-3 2.5-5.5c.4-1.2 2.6-1.2 3 0C14.4 18 14.5 21 16 21s2-4 2.5-7c.5-2.5 2-4 2-7 0-2.4-1.5-4-3.5-4-1.8 0-3 1-5 1S8.8 3 7 3z"/>',
    "shine": '<path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="4"/>',
    "align": '<path d="M4 8h16M4 16h16M8 5v6M16 13v6"/>',
    "shield": '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z"/>',
    "kitchen": '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 10h18M8 4v6M7 14h3"/>',
    "sofa": '<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M2 13a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v5H2v-5z"/>',
    "bed": '<path d="M3 18V6M21 18v-6a3 3 0 0 0-3-3H10v6M3 15h18M6 11h2"/>',
    "bath": '<path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3zM6 12V5a2 2 0 0 1 4 0"/>',
    "office": '<rect x="3" y="7" width="18" height="13" rx="1"/><path d="M8 7V4h8v3M3 12h18"/>',
    "ruler": '<path d="M3 17 17 3l4 4L7 21l-4-4zM7 13l2 2M10 10l2 2M13 7l2 2"/>',
    "cube": '<path d="M12 2 3 7v10l9 5 9-5V7l-9-5zM3 7l9 5 9-5M12 12v10"/>',
    "saw": '<path d="M3 21 21 3M7 21h14V7"/>',
    "check": '<path d="M5 12l4 4L19 6"/>',
    "star": '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z"/>',
    "pin": '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    "phone": '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
}
WA_SVG = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>'


def icon(name, size=24):
    return (f'<svg viewBox="0 0 24 24" width="{size}" height="{size}" fill="none" stroke="currentColor" '
            f'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{ICONS[name]}</svg>')


def wa_link(num, text):
    return f"https://wa.me/{num}?text={urllib.parse.quote(text)}"


def page(c):
    t = c["theme"]
    cta_href = wa_link(c["wa"], c["wa_msg"]) if c.get("wa") else f"tel:+{c['tel']}"
    cta_icon = WA_SVG if c.get("wa") else icon("phone", 20)

    def btn(label, cls="btn"):
        return f'<a class="{cls}" href="{e(cta_href)}" target="_blank" rel="noopener">{cta_icon}<span>{e(label)}</span></a>'

    stars = "".join(icon("star", 16) for _ in range(5))
    proof = ""
    if c.get("rating"):
        proof = f'<div class="proof"><span class="stars">{stars}</span><span><b>{e(c["rating"])}</b> {e(c["rating_note"])}</span></div>'

    hero_media = ""
    if c.get("hero_img"):
        hero_media = f'<figure class="hero-media reveal"><img src="{e(c["hero_img"])}" alt="{e(c["hero_alt"])}" loading="eager" onerror="this.parentNode.classList.add(&quot;noimg&quot;);this.remove()"><figcaption>{e(c.get("hero_caption","Foto ilustrativa"))}</figcaption></figure>'
    else:
        hero_media = f'<div class="hero-art reveal" aria-hidden="true">{c["hero_art"]}</div>'

    paths = ""
    if c.get("paths"):
        items = "".join(
            f'<a class="path" href="{e(p["href"])}"><span class="path-k">{e(p["k"])}</span><span class="path-t">{e(p["t"])}</span><span class="path-arrow">→</span></a>'
            for p in c["paths"])
        paths = f'<div class="paths">{items}</div>'

    services = "".join(
        f'<article class="card reveal"><div class="card-ico">{icon(s["icon"], 26)}</div><h3>{e(s["t"])}</h3><p>{e(s["d"])}</p></article>'
        for s in c["services"])

    steps = "".join(
        f'<li class="reveal"><span class="step-n">{i+1:02d}</span><div><h3>{e(s[0])}</h3><p>{e(s[1])}</p></div></li>'
        for i, s in enumerate(c["steps"]))

    faq = "".join(
        f'<details class="reveal"><summary>{e(q)}<span aria-hidden="true">+</span></summary><p>{e(a)}</p></details>'
        for q, a in c["faq"])

    chips_a = "".join(f'<button type="button" class="chip" data-g="a" aria-pressed="false">{e(x)}</button>' for x in c["book"]["a"])
    chips_b = "".join(f'<button type="button" class="chip" data-g="b" aria-pressed="false">{e(x)}</button>' for x in c["book"]["b"])

    stats = "".join(f'<div class="stat reveal"><b>{e(a)}</b><span>{e(b)}</span></div>' for a, b in c["stats"])

    book_cfg = json.dumps({
        "wa": c.get("wa"), "tel": c.get("tel"),
        "tpl": c["book"]["tpl"], "qa": c["book"]["qa"], "qb": c["book"]["qb"],
    }, ensure_ascii=False)

    return f"""<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{e(c["title"])} · Prévia Timothy Studios</title>
<meta name="description" content="{e(c["desc"])}">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="{t["bg"]}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="{t["fonts"]}">
<style>
:root{{--bg:{t["bg"]};--bg2:{t["bg2"]};--ink:{t["ink"]};--muted:{t["muted"]};--line:{t["line"]};--accent:{t["accent"]};--accent-ink:{t["accent_ink"]};--glow:{t["glow"]};--card:{t["card"]};--display:{t["display"]};--body:{t["body"]};color-scheme:{t.get("scheme","light")}}}
*{{box-sizing:border-box}}
html{{scroll-behavior:smooth;-webkit-text-size-adjust:100%}}
body{{margin:0;background:var(--bg);color:var(--ink);font:400 16px/1.6 var(--body);-webkit-font-smoothing:antialiased;padding-bottom:84px}}
img{{max-width:100%;display:block}}
a{{color:inherit}}
.wrap{{max-width:1120px;margin:0 auto;padding:0 20px}}
.ribbon{{background:var(--ink);color:var(--bg);font-size:12.5px;line-height:1.4;padding:9px 20px;text-align:center}}
.ribbon b{{font-weight:600}}
header.nav{{position:sticky;top:0;z-index:20;background:color-mix(in srgb,var(--bg) 86%,transparent);backdrop-filter:saturate(1.4) blur(14px);-webkit-backdrop-filter:saturate(1.4) blur(14px);border-bottom:1px solid var(--line)}}
.nav .wrap{{display:flex;align-items:center;justify-content:space-between;height:66px;gap:16px}}
.brand{{display:flex;align-items:center;gap:12px;text-decoration:none;min-width:0}}
.mono{{width:40px;height:40px;flex:none;border:1px solid var(--accent);color:var(--accent);display:grid;place-items:center;font:600 15px/1 var(--display);letter-spacing:.04em;border-radius:{t.get("mono_radius","50%")}}}
.brand-t{{display:flex;flex-direction:column;line-height:1.15;min-width:0}}
.brand-t b{{font:600 13px/1.2 var(--body);letter-spacing:.14em;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}
.brand-t span{{font-size:11px;color:var(--muted);letter-spacing:.12em;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}
.btn{{display:inline-flex;align-items:center;justify-content:center;gap:10px;background:var(--accent);color:var(--accent-ink);text-decoration:none;font:600 15px/1 var(--body);padding:16px 22px;border-radius:999px;border:0;cursor:pointer;transition:transform .25s ease,box-shadow .25s ease;box-shadow:0 10px 30px -12px var(--glow)}}
.btn:hover{{transform:translateY(-2px);box-shadow:0 16px 36px -12px var(--glow)}}
.btn.ghost{{background:transparent;color:var(--ink);border:1px solid var(--line);box-shadow:none}}
.nav .btn{{padding:11px 16px;font-size:13.5px}}
@media (max-width:640px){{.nav .btn span{{display:none}}.nav .btn{{padding:11px}}}}
.hero{{position:relative;overflow:hidden;padding:56px 0 40px}}
.hero::before{{content:"";position:absolute;inset:-30% -20% auto auto;width:620px;height:620px;border-radius:50%;background:radial-gradient(circle,var(--glow),transparent 62%);opacity:.55;pointer-events:none}}
.hero .wrap{{display:grid;gap:40px;align-items:center;position:relative}}
@media (min-width:900px){{.hero .wrap{{grid-template-columns:1.05fr .95fr}}.hero{{padding:96px 0 72px}}}}
.eyebrow{{font:600 12px/1.6 var(--body);letter-spacing:.24em;text-transform:uppercase;color:var(--accent);margin:0 0 18px}}
h1{{font:{t["h1_weight"]} clamp(40px,8.6vw,76px)/1.02 var(--display);letter-spacing:{t.get("h1_track","-.015em")};margin:0 0 20px;text-wrap:balance}}
h1 em{{font-style:italic;color:var(--accent)}}
.lead{{font-size:clamp(17px,2.4vw,19px);color:var(--muted);max-width:34em;margin:0 0 28px;text-wrap:pretty}}
.hero-ctas{{display:flex;flex-wrap:wrap;gap:12px;align-items:center}}
.proof{{display:flex;align-items:center;gap:10px;margin-top:22px;font-size:14px;color:var(--muted)}}
.proof b{{color:var(--ink)}}
.stars{{display:inline-flex;color:#E3A93B}}
.stars svg{{fill:currentColor;stroke:none}}
.hero-media{{margin:0;position:relative;border-radius:28px;overflow:hidden;aspect-ratio:4/5;box-shadow:0 40px 80px -40px rgba(0,0,0,.45)}}
.hero-media img{{width:100%;height:100%;object-fit:cover;transform:scale(1.03);transition:transform 1.6s cubic-bezier(.16,1,.3,1)}}
.hero-media.in img{{transform:scale(1)}}
.hero-media.noimg{{background:radial-gradient(120% 80% at 30% 20%,var(--glow),transparent 60%),linear-gradient(160deg,var(--bg2),var(--card))}}
.hero-media.noimg figcaption{{display:none}}
.hero-media figcaption{{position:absolute;left:14px;bottom:14px;font-size:11px;letter-spacing:.06em;background:rgba(0,0,0,.45);color:#fff;padding:5px 10px;border-radius:999px}}
.hero-art{{aspect-ratio:1;max-width:460px;width:100%;justify-self:center;color:var(--accent)}}
.hero-art svg{{width:100%;height:100%}}
.paths{{display:grid;gap:12px;margin-top:30px}}
@media (min-width:640px){{.paths{{grid-template-columns:1fr 1fr}}}}
.path{{display:grid;grid-template-columns:1fr auto;gap:2px 12px;padding:18px 20px;border:1px solid var(--line);border-radius:18px;text-decoration:none;background:var(--card);transition:border-color .25s,transform .25s}}
.path:hover{{border-color:var(--accent);transform:translateY(-2px)}}
.path-k{{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}}
.path-t{{font:500 19px/1.3 var(--display);grid-column:1}}
.path-arrow{{grid-row:1/3;grid-column:2;align-self:center;font-size:22px;color:var(--accent)}}
.strip{{border-block:1px solid var(--line);background:var(--bg2)}}
.strip .wrap{{display:grid;grid-template-columns:repeat(2,1fr);gap:0}}
@media (min-width:760px){{.strip .wrap{{grid-template-columns:repeat(4,1fr)}}}}
.stat{{padding:26px 8px;text-align:center;border-right:1px solid var(--line)}}
.stat:nth-child(2n){{border-right:0}}
@media (min-width:760px){{.stat:nth-child(2n){{border-right:1px solid var(--line)}}.stat:last-child{{border-right:0}}}}
.stat b{{display:block;font:{t["h1_weight"]} clamp(26px,4vw,34px)/1.1 var(--display);color:var(--ink)}}
.stat span{{font-size:13px;color:var(--muted)}}
section.block{{padding:80px 0}}
.block-head{{max-width:640px;margin:0 0 40px}}
h2{{font:{t["h1_weight"]} clamp(32px,5.4vw,52px)/1.08 var(--display);letter-spacing:-.01em;margin:0 0 14px;text-wrap:balance}}
h2 em{{font-style:italic;color:var(--accent)}}
.block-head p{{color:var(--muted);margin:0;font-size:17px}}
.grid{{display:grid;gap:16px}}
@media (min-width:700px){{.grid{{grid-template-columns:repeat(2,1fr)}}}}
@media (min-width:1000px){{.grid.three{{grid-template-columns:repeat(3,1fr)}}}}
.card{{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:26px;transition:transform .35s cubic-bezier(.16,1,.3,1),box-shadow .35s}}
.card:hover{{transform:translateY(-4px);box-shadow:0 28px 50px -30px rgba(0,0,0,.35)}}
.card-ico{{width:48px;height:48px;border-radius:14px;display:grid;place-items:center;background:color-mix(in srgb,var(--accent) 12%,transparent);color:var(--accent);margin-bottom:16px}}
@media (max-width:699px){{.card{{display:grid;grid-template-columns:48px 1fr;gap:4px 16px;padding:20px}}.card-ico{{grid-row:1/3;margin:0}}.card h3{{margin:2px 0 4px;font-size:17px}}.card p{{font-size:14.5px}}.grid{{gap:12px}}}}
.card h3{{font:600 19px/1.3 var(--body);margin:0 0 8px}}
.card p{{margin:0;color:var(--muted);font-size:15.5px}}
.feature{{background:var(--bg2);border-block:1px solid var(--line)}}
.feature .wrap{{display:grid;gap:36px;align-items:center}}
@media (min-width:900px){{.feature .wrap{{grid-template-columns:1fr 1fr}}}}
.ticks{{list-style:none;padding:0;margin:22px 0 28px;display:grid;gap:12px}}
.ticks li{{display:flex;gap:12px;align-items:flex-start}}
.ticks svg{{flex:none;color:var(--accent);margin-top:3px}}
.feature-panel{{background:var(--card);border:1px solid var(--line);border-radius:26px;padding:28px}}
.feature-panel h3{{font:500 24px/1.25 var(--display);margin:0 0 6px}}
.feature-panel p{{color:var(--muted);margin:0 0 16px}}
.steps{{list-style:none;margin:0;padding:0;display:grid;gap:14px}}
@media (min-width:900px){{.steps{{grid-template-columns:repeat({len(c["steps"])},1fr)}}}}
.steps li{{display:flex;gap:16px;padding:24px;border:1px solid var(--line);border-radius:22px;background:var(--card)}}
@media (min-width:900px){{.steps li{{flex-direction:column}}}}
.step-n{{font:{t["h1_weight"]} 30px/1 var(--display);color:var(--accent)}}
.steps h3{{margin:0 0 6px;font:600 17px/1.3 var(--body)}}
.steps p{{margin:0;color:var(--muted);font-size:15px}}
.book{{background:var(--ink);color:var(--bg);border-radius:32px;padding:36px 24px;position:relative;overflow:hidden}}
@media (min-width:760px){{.book{{padding:56px}}}}
.book::after{{content:"";position:absolute;right:-120px;top:-120px;width:340px;height:340px;border-radius:50%;background:radial-gradient(circle,var(--accent),transparent 65%);opacity:.35}}
.book h2{{color:var(--bg)}}
.book .q{{font:600 13px/1 var(--body);letter-spacing:.16em;text-transform:uppercase;opacity:.7;margin:26px 0 12px}}
.chips{{display:flex;flex-wrap:wrap;gap:10px;position:relative;z-index:1}}
.chip{{font:500 15px/1 var(--body);padding:13px 16px;border-radius:999px;border:1px solid color-mix(in srgb,var(--bg) 30%,transparent);background:transparent;color:var(--bg);cursor:pointer;transition:all .2s}}
.chip[aria-pressed="true"]{{background:var(--bg);color:var(--ink);border-color:var(--bg)}}
.book .btn{{margin-top:30px;position:relative;z-index:1;width:100%;max-width:420px}}
.book .hint{{font-size:13px;opacity:.65;margin:12px 0 0;position:relative;z-index:1}}
.faq details{{border-bottom:1px solid var(--line);padding:6px 0}}
.faq summary{{list-style:none;cursor:pointer;display:flex;justify-content:space-between;gap:16px;padding:16px 0;font:500 18px/1.35 var(--body)}}
.faq summary::-webkit-details-marker{{display:none}}
.faq summary span{{color:var(--accent);font-size:24px;line-height:1;transition:transform .3s}}
.faq details[open] summary span{{transform:rotate(45deg)}}
.faq p{{margin:0 0 18px;color:var(--muted)}}
.final{{text-align:center;padding:90px 0 70px}}
.final h2{{max-width:16em;margin:0 auto 16px}}
.final p{{color:var(--muted);max-width:34em;margin:0 auto 28px}}
footer{{border-top:1px solid var(--line);padding:30px 0 40px;font-size:14px;color:var(--muted)}}
footer .wrap{{display:grid;gap:10px}}
footer .row{{display:flex;gap:10px;align-items:flex-start}}
footer svg{{flex:none;margin-top:3px;color:var(--accent)}}
.made{{margin-top:14px;font-size:12.5px}}
.sticky{{position:fixed;left:0;right:0;bottom:0;z-index:30;padding:12px 16px calc(12px + env(safe-area-inset-bottom));background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-top:1px solid var(--line);display:flex;gap:12px;align-items:center;transform:translateY(110%);transition:transform .45s cubic-bezier(.16,1,.3,1)}}
.sticky.on{{transform:none}}
.sticky .txt{{flex:1;min-width:0;font-size:13px;line-height:1.3;color:var(--muted)}}
.sticky .txt b{{display:block;color:var(--ink);font-size:14.5px}}
.sticky .btn{{padding:14px 18px;font-size:14.5px;white-space:nowrap}}
.reveal{{opacity:0;transform:translateY(22px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1)}}
.reveal.in{{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){{.reveal{{opacity:1;transform:none;transition:none}}html{{scroll-behavior:auto}}}}
{c.get("extra_css","")}
</style>
</head>
<body>
<div class="ribbon">Prévia feita pela <b>Timothy Studios</b> para {e(c["for"])}. Não é o site oficial · textos e fotos ilustrativos.</div>

<header class="nav">
  <div class="wrap">
    <a class="brand" href="#topo"><span class="mono">{e(c["mono"])}</span><span class="brand-t"><b>{e(c["brand"])}</b><span>{e(c["brand_sub"])}</span></span></a>
    {btn(c["nav_cta"])}
  </div>
</header>

<main id="topo">
  <section class="hero">
    <div class="wrap">
      <div>
        <p class="eyebrow reveal">{e(c["eyebrow"])}</p>
        <h1 class="reveal">{c["h1"]}</h1>
        <p class="lead reveal">{e(c["lead"])}</p>
        <div class="hero-ctas reveal">{btn(c["cta"])}<a class="btn ghost" href="#servicos">{e(c["cta2"])}</a></div>
        <div class="reveal">{proof}</div>
        {paths}
      </div>
      {hero_media}
    </div>
  </section>

  <div class="strip"><div class="wrap">{stats}</div></div>

  <section class="block" id="servicos">
    <div class="wrap">
      <div class="block-head reveal"><p class="eyebrow">{e(c["services_eyebrow"])}</p><h2>{c["services_h2"]}</h2><p>{e(c["services_p"])}</p></div>
      <div class="grid {c.get("grid","three")}">{services}</div>
    </div>
  </section>

  <section class="block feature" id="{c["feature"]["id"]}">
    <div class="wrap">
      <div class="reveal">
        <p class="eyebrow">{e(c["feature"]["eyebrow"])}</p>
        <h2>{c["feature"]["h2"]}</h2>
        <p style="color:var(--muted);font-size:17px;margin:0">{e(c["feature"]["p"])}</p>
        <ul class="ticks">{"".join(f"<li>{icon('check',20)}<span>{e(x)}</span></li>" for x in c["feature"]["ticks"])}</ul>
        {(f'<a class="btn" href="{e(wa_link(c["wa"], c["feature"]["wa_msg"]))}" target="_blank" rel="noopener">{WA_SVG}<span>{e(c["feature"]["cta"])}</span></a>' if c["feature"].get("wa_msg") and c.get("wa") else btn(c["feature"]["cta"]))}
      </div>
      <div class="feature-panel reveal">{c["feature"]["panel"]}</div>
    </div>
  </section>

  <section class="block">
    <div class="wrap">
      <div class="block-head reveal"><p class="eyebrow">Como funciona</p><h2>{c["steps_h2"]}</h2></div>
      <ol class="steps">{steps}</ol>
    </div>
  </section>

  <section class="block" id="agendar" style="padding-top:0">
    <div class="wrap">
      <div class="book reveal">
        <p class="eyebrow" style="color:var(--bg);opacity:.75">{e(c["book"]["eyebrow"])}</p>
        <h2>{c["book"]["h2"]}</h2>
        <p class="q">{e(c["book"]["qa"])}</p>
        <div class="chips">{chips_a}</div>
        <p class="q">{e(c["book"]["qb"])}</p>
        <div class="chips">{chips_b}</div>
        <a class="btn" id="bookBtn" href="{e(cta_href)}" target="_blank" rel="noopener">{cta_icon}<span>{e(c["book"]["btn"])}</span></a>
        <p class="hint">{e(c["book"]["hint"])}</p>
      </div>
    </div>
  </section>

  <section class="block faq" style="padding-top:0">
    <div class="wrap" style="max-width:820px">
      <div class="block-head reveal"><p class="eyebrow">Dúvidas frequentes</p><h2>Antes de você chamar</h2></div>
      {faq}
    </div>
  </section>

  <section class="final">
    <div class="wrap">
      <h2 class="reveal">{c["final_h2"]}</h2>
      <p class="reveal">{e(c["final_p"])}</p>
      <div class="reveal">{btn(c["cta"])}</div>
    </div>
  </section>
</main>

<footer>
  <div class="wrap">
    <b style="color:var(--ink)">{e(c["brand_full"])}</b>
    {"".join(f'<div class="row">{icon(i,18)}<span>{e(x)}</span></div>' for i, x in c["footer"])}
    <p class="made">Prévia criada pela Timothy Studios. Versão final com fotos, logo e textos de vocês.</p>
  </div>
</footer>

<div class="sticky" id="sticky"><div class="txt"><b>{e(c["sticky_b"])}</b>{e(c["sticky_s"])}</div>{btn(c["sticky_btn"])}</div>

<script>
(function(){{
  var cfg = {book_cfg};
  var io = new IntersectionObserver(function(es){{es.forEach(function(en){{if(en.isIntersecting){{en.target.classList.add("in");io.unobserve(en.target);}}}});}},{{threshold:.12,rootMargin:"0px 0px -40px 0px"}});
  document.querySelectorAll(".reveal,.hero-media").forEach(function(el){{io.observe(el);}});
  var sticky = document.getElementById("sticky");
  var onScroll = function(){{ sticky.classList.toggle("on", window.scrollY > 520); }};
  window.addEventListener("scroll", onScroll, {{passive:true}}); onScroll();
  var pick = {{a:null,b:null}}, btn = document.getElementById("bookBtn");
  function link(){{
    var a = pick.a || "um atendimento", b = pick.b || "o melhor horário disponível";
    var msg = cfg.tpl.replace("{{a}}", a).replace("{{b}}", b);
    if(cfg.wa){{ btn.href = "https://wa.me/" + cfg.wa + "?text=" + encodeURIComponent(msg); }}
    btn.dataset.msg = msg;
  }}
  document.querySelectorAll(".chip").forEach(function(ch){{
    ch.addEventListener("click", function(){{
      var g = ch.dataset.g;
      document.querySelectorAll('.chip[data-g="'+g+'"]').forEach(function(o){{o.setAttribute("aria-pressed","false");}});
      ch.setAttribute("aria-pressed","true"); pick[g] = ch.textContent; link();
    }});
  }});
  link();
}})();
</script>
</body>
</html>
"""


# ------------------------------------------------------------------ dados de cada empresa

NEURO_ART = """<svg viewBox="0 0 400 400" fill="none" stroke="currentColor" stroke-linecap="round">
<circle cx="200" cy="200" r="170" stroke-opacity=".12"/><circle cx="200" cy="200" r="120" stroke-opacity=".18"/><circle cx="200" cy="200" r="70" stroke-opacity=".25"/>
<g stroke-width="1.4" stroke-opacity=".9">
<path d="M200 60c-40 0-60 25-60 50-30 5-45 30-38 58-22 14-26 46-6 66-6 30 18 54 46 52 10 22 34 32 58 24V60z"/>
<path d="M200 60c40 0 60 25 60 50 30 5 45 30 38 58 22 14 26 46 6 66 6 30-18 54-46 52-10 22-34 32-58 24"/>
<path d="M200 110c-18 0-28 10-30 24M200 170c-24-6-44 6-48 26M200 230c-20 0-36 10-40 30M200 110c18 0 28 10 30 24M200 170c24-6 44 6 48 26M200 230c20 0 36 10 40 30" stroke-opacity=".55"/>
</g>
<g fill="currentColor" stroke="none"><circle cx="152" cy="196" r="5"/><circle cx="248" cy="196" r="5"/><circle cx="170" cy="134" r="4"/><circle cx="230" cy="134" r="4"/><circle cx="160" cy="260" r="4"/><circle cx="240" cy="260" r="4"/><circle cx="200" cy="300" r="5"/></g>
<path d="M60 330h70l14-30 22 56 18-40 12 14h144" stroke-width="2" stroke-opacity=".8"/>
</svg>"""

TOOTH_ART = """<svg viewBox="0 0 400 400" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
<circle cx="200" cy="200" r="175" stroke-opacity=".1"/><circle cx="200" cy="200" r="130" stroke-opacity=".16"/>
<path stroke-width="2.2" d="M140 95c-34 0-58 26-58 66 0 48 24 72 32 112 8 48 16 104 40 104s26-48 40-88c7-19 43-19 50 0 14 40 16 88 40 88s32-56 40-104c8-40 32-64 32-112 0-40-24-66-58-66-30 0-48 16-82 16s-46-16-76-16z"/>
<path stroke-width="1.4" stroke-opacity=".5" d="M120 150c10-22 30-30 50-28M300 120l10-18M322 136l18-8M314 156h20"/>
<g fill="currentColor" stroke="none" opacity=".8"><circle cx="318" cy="96" r="3"/><circle cx="346" cy="126" r="3"/></g>
</svg>"""

EMPRESAS = [
 dict(
  slug="dra-joanna", for_="a Clínica e Instituto Dra. Joanna Alexandrino",
  title="Clínica e Instituto Dra. Joanna Alexandrino", desc="Estética avançada com resultado natural e um instituto para quem quer aprender com quem faz.",
  theme=dict(bg="#F8F3EE", bg2="#F1E8E0", ink="#2B211D", muted="#76665E", line="rgba(43,33,29,.12)", accent="#A9746A", accent_ink="#FFFFFF",
             glow="rgba(169,116,106,.45)", card="#FFFDFB", display='"Cormorant Garamond",Georgia,serif', body='"Jost",system-ui,sans-serif',
             fonts="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Jost:wght@400;500;600&display=swap",
             h1_weight="500"),
  mono="JA", brand="Dra. Joanna Alexandrino", brand_sub="Clínica e Instituto", brand_full="Clínica e Instituto Dra. Joanna Alexandrino",
  wa="5547997219192", wa_msg="Olá! Vim pelo site e gostaria de agendar uma avaliação com a Dra. Joanna.",
  nav_cta="Agendar avaliação", cta="Agendar minha avaliação", cta2="Ver tratamentos",
  eyebrow="Estética avançada · Itajaí e região",
  h1="Beleza que parece <em>sua</em>, só que descansada.",
  lead="Tratamentos planejados um a um, com técnica precisa e o cuidado de quem prefere o natural ao exagero. Para pacientes e para profissionais que querem aprender com quem faz.",
  rating="5,0", rating_note="· 92 avaliações no Google",
  paths=[dict(k="Sou paciente", t="Quero agendar uma avaliação", href="#agendar"), dict(k="Sou profissional", t="Quero conhecer os cursos", href="#instituto")],
  hero_img="../../img/evora-espaco-1.jpg", hero_alt="Consultório claro e acolhedor", hero_caption="Foto ilustrativa",
  stats=[("5,0 ★","nota no Google"),("92","avaliações"),("1:1","plano personalizado"),("Clínica + Instituto","atendimento e ensino")],
  services_eyebrow="Tratamentos", services_h2="Cada rosto pede um <em>plano</em>, não um pacote.",
  services_p="Começa sempre por uma avaliação. Depois, só o que faz sentido para você.",
  services=[
    dict(icon="face", t="Harmonização facial", d="Equilíbrio de proporções com naturalidade. Você continua parecendo você."),
    dict(icon="spark", t="Toxina botulínica", d="Suaviza linhas de expressão sem congelar o rosto."),
    dict(icon="drop", t="Preenchimentos", d="Volume e contorno na medida certa, com ácido hialurônico."),
    dict(icon="leaf", t="Bioestimuladores", d="Estímulo do colágeno para firmeza e qualidade de pele."),
    dict(icon="shine", t="Tratamentos de pele", d="Textura, viço e manchas, com protocolos para o seu tipo de pele."),
    dict(icon="hand", t="Avaliação completa", d="Conversa, análise e um plano por escrito antes de qualquer procedimento."),
  ],
  feature=dict(id="instituto", eyebrow="Instituto", h2="Para profissionais: aprenda com <em>quem faz</em> todo dia.",
    p="Cursos para profissionais da estética, com a mesma técnica usada na clínica. Teoria, demonstração e prática supervisionada, em turmas pequenas.",
    wa_msg="Olá! Vim pelo site e quero entrar na lista de espera da próxima turma do Instituto Dra. Joanna Alexandrino.",
    ticks=["Turmas pequenas, com prática supervisionada","Conteúdo que a doutora aplica na própria clínica","Lista de espera para a próxima turma"],
    cta="Entrar na lista da próxima turma",
    panel='<p class="eyebrow">Próxima turma</p><h3>Avise-me quando abrir</h3><p>Entre na lista e receba datas, vagas e conteúdo direto no WhatsApp, antes da divulgação.</p><ul class="ticks" style="margin:0"><li><span>✦</span><span>Vagas limitadas por turma</span></li><li><span>✦</span><span>Certificado</span></li><li><span>✦</span><span>Suporte depois do curso</span></li></ul>'),
  steps_h2="Do primeiro <em>oi</em> ao resultado.",
  steps=[("Você chama no WhatsApp","Escolhe o que quer tratar e o melhor horário. Leva 30 segundos."),
         ("Avaliação com a doutora","Conversa sem pressa, análise do rosto e um plano por escrito."),
         ("Tratamento e retorno","Procedimento com conforto e retorno para acompanhar o resultado.")],
  book=dict(eyebrow="Agendamento em 2 toques", h2="O que você quer <em>tratar</em>?",
    qa="Escolha o tratamento", a=["Harmonização facial","Toxina botulínica","Preenchimento","Bioestimulador","Pele","Ainda não sei"],
    qb="Melhor período", b=["Manhã","Tarde","Fim do dia"],
    tpl="Olá! Vim pelo site e quero agendar uma avaliação. Tenho interesse em: {a}. Melhor período: {b}.",
    btn="Enviar pelo WhatsApp", hint="A mensagem já vai pronta. É só tocar em enviar."),
  faq=[("A avaliação tem custo?","Na versão final, aqui entra a política da clínica: valor, se é abatido do tratamento e quanto tempo dura."),
       ("O resultado fica artificial?","O foco é o natural: planejamento antes, doses na medida e retorno para ajustar."),
       ("Como funcionam os cursos?","Os cursos têm página própria, com turmas, conteúdo e inscrição separados da agenda de pacientes."),
       ("Onde fica a clínica?","Endereço, mapa e como chegar entram aqui, com botão para abrir no GPS.")],
  final_h2="Sua avaliação começa com uma <em>mensagem</em>.", final_p="92 pacientes já deixaram 5 estrelas. Escolha um horário e venha conhecer.",
  footer=[("star","5,0 no Google · 92 avaliações"),("pin","Itajaí e região · endereço completo na versão final"),("phone","(47) 99721-9192")],
  sticky_b="Avaliação com a Dra. Joanna", sticky_s="Resposta pelo WhatsApp", sticky_btn="Agendar",
 ),
 dict(
  slug="dr-marcelo-zalli", for_="o Dr. Marcelo Zalli",
  title="Dr. Marcelo Zalli · Neurologista em Balneário Camboriú", desc="Consulta de neurologia em Balneário Camboriú: enxaqueca, memória, Parkinson, sequelas de AVC e toxina botulínica.",
  theme=dict(bg="#F5F8FB", bg2="#EAF1F7", ink="#0E2236", muted="#566A7E", line="rgba(14,34,54,.12)", accent="#1E5F9A", accent_ink="#FFFFFF",
             glow="rgba(30,95,154,.40)", card="#FFFFFF", display='"Fraunces",Georgia,serif', body='"Inter",system-ui,sans-serif',
             fonts="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap",
             h1_weight="500", mono_radius="14px"),
  mono="MZ", brand="Dr. Marcelo Zalli", brand_sub="Neurologia · BC", brand_full="Dr. Marcelo Zalli · Neurologista",
  wa="5547989157063", wa_msg="Olá! Vim pelo site e gostaria de agendar uma consulta com o Dr. Marcelo Zalli.",
  nav_cta="Agendar consulta", cta="Agendar consulta", cta2="O que eu trato",
  eyebrow="Neurologia · Balneário Camboriú e Itajaí",
  h1="Dor de cabeça, memória, tremor: <em>tem explicação</em>, e tem cuidado.",
  lead="Consulta de neurologia com tempo para ouvir, examinar e explicar. Diagnóstico claro e um plano de tratamento que você entende.",
  hero_art=NEURO_ART,
  stats=[("CRM-SC 17333","RQE 13326"),("Consulta","com tempo para ouvir"),("BC","Av. do Estado"),("Plano claro","por escrito")],
  services_eyebrow="Áreas de atendimento", services_h2="O que levar para a <em>consulta</em>.",
  services_p="Se algum destes sinais faz parte da sua rotina, vale conversar com um neurologista.",
  services=[
    dict(icon="bolt", t="Enxaqueca e dores de cabeça", d="Investigação da causa e tratamento para reduzir a frequência e a intensidade das crises."),
    dict(icon="memory", t="Memória e Alzheimer", d="Avaliação de esquecimentos, investigação e acompanhamento ao lado da família."),
    dict(icon="hand", t="Parkinson e tremores", d="Diagnóstico e ajuste do tratamento para manter a autonomia no dia a dia."),
    dict(icon="pulse", t="Sequelas de AVC", d="Acompanhamento neurológico e prevenção de um novo evento."),
    dict(icon="syringe", t="Toxina botulínica terapêutica", d="Indicação para enxaqueca crônica, espasticidade e distonias."),
    dict(icon="brain", t="Avaliação neurológica", d="Para sintomas que ainda não têm nome: tontura, formigamento, perda de força."),
  ],
  feature=dict(id="quando", eyebrow="Quando procurar", h2="Sinais que <em>não</em> devem esperar.",
    p="Alguns sintomas pedem avaliação neurológica sem demora. Se você se reconhece em algum deles, agende uma consulta.",
    ticks=["Dor de cabeça que mudou de padrão ou acorda você à noite","Esquecimentos que preocupam a família","Tremor, rigidez ou lentidão de movimentos","Formigamento ou perda de força em um lado do corpo"],
    cta="Quero agendar uma consulta",
    panel='<p class="eyebrow">Atenção</p><h3>Sintomas súbitos são emergência</h3><p>Fraqueza de um lado do corpo, boca torta ou dificuldade para falar de repente: procure o pronto-socorro na hora e ligue 192.</p><p style="margin:0;font-size:14px">Esta página não substitui avaliação médica.</p>'),
  steps_h2="Como é a <em>consulta</em>.",
  steps=[("Agendamento rápido","Escolha o motivo e o período. A secretária confirma pelo WhatsApp."),
         ("Consulta completa","História, exame neurológico e, se preciso, pedido de exames."),
         ("Plano e retorno","Diagnóstico explicado, tratamento por escrito e acompanhamento.")],
  book=dict(eyebrow="Agendamento em 2 toques", h2="Qual o <em>motivo</em> da consulta?",
    qa="Motivo principal", a=["Dor de cabeça","Memória","Tremor / Parkinson","Sequela de AVC","Toxina botulínica","Outro"],
    qb="Melhor período", b=["Manhã","Tarde"],
    tpl="Olá! Vim pelo site e gostaria de agendar uma consulta com o Dr. Marcelo Zalli. Motivo: {a}. Melhor período: {b}.",
    btn="Enviar pelo WhatsApp", hint="A mensagem já vai pronta para a secretária."),
  faq=[("Atende convênio?","Na versão final, aqui entram os convênios aceitos e as formas de pagamento da consulta particular."),
       ("Preciso levar exames?","Se tiver exames anteriores (ressonância, tomografia, exames de sangue), leve. Ajudam no diagnóstico."),
       ("A consulta pode ser online?","Aqui entra a política do consultório para teleconsulta e retorno."),
       ("Onde fica o consultório?","Av. do Estado Dalmo Vieira, 1714, Balneário Camboriú. Na versão final, com mapa e botão para o GPS.")],
  final_h2="Entender o que está acontecendo é o <em>primeiro</em> passo.", final_p="Escolha o motivo e o período. A confirmação chega pelo WhatsApp.",
  footer=[("pin","Av. do Estado Dalmo Vieira, 1714 · Balneário Camboriú/SC"),("shield","Dr. Marcelo Zalli · Neurologista · CRM-SC 17333 · RQE 13326"),("phone","(47) 98915-7063")],
  sticky_b="Consulta com o Dr. Zalli", sticky_s="Neurologia em BC", sticky_btn="Agendar",
 ),
 dict(
  slug="o3-odonto", for_="a O3 Clínica Odontológica",
  title="O3 Clínica Odontológica · Itajaí", desc="Implantes, lentes de contato dental, clareamento, ortodontia, canal e gengiva em Itajaí.",
  theme=dict(bg="#F4FAFA", bg2="#E6F3F3", ink="#0B2A3A", muted="#4F6B78", line="rgba(11,42,58,.12)", accent="#0E8C8C", accent_ink="#FFFFFF",
             glow="rgba(14,140,140,.40)", card="#FFFFFF", display='"Manrope",system-ui,sans-serif', body='"Manrope",system-ui,sans-serif',
             fonts="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap",
             h1_weight="800", h1_track="-.035em", mono_radius="12px"),
  mono="O3", brand="O3 Clínica Odontológica", brand_sub="Itajaí · SC", brand_full="O3 Clínica Odontológica",
  tel="554733461613",
  nav_cta="Ligar e agendar", cta="Agendar avaliação", cta2="Ver tratamentos",
  eyebrow="Odontologia completa em Itajaí",
  h1="Sorria <em>sem pensar</em> duas vezes.",
  lead="Do implante à lente de contato dental, uma equipe de dentistas cuidando do seu sorriso em um só lugar, com planejamento claro antes de começar.",
  hero_art=TOOTH_ART,
  stats=[("Equipe","de dentistas"),("6","especialidades"),("Itajaí","SC"),("Plano","antes de começar")],
  services_eyebrow="Tratamentos", services_h2="Tudo o que seu sorriso precisa, <em>num só lugar</em>.",
  services_p="Cada tratamento começa com uma avaliação e um plano com etapas e prazos.",
  services=[
    dict(icon="tooth", t="Implante dentário", d="Devolve o dente que faltava, com firmeza para mastigar e sorrir sem medo."),
    dict(icon="shine", t="Lentes de contato dental", d="Forma, cor e alinhamento do sorriso com facetas finas e naturais."),
    dict(icon="spark", t="Clareamento", d="Dentes mais brancos com acompanhamento e sem sensibilidade exagerada."),
    dict(icon="align", t="Ortodontia", d="Aparelho fixo ou alinhadores para corrigir a posição dos dentes."),
    dict(icon="drop", t="Endodontia (canal)", d="Tratamento de canal para salvar o dente e acabar com a dor."),
    dict(icon="shield", t="Periodontia (gengiva)", d="Cuidado da gengiva, que sustenta todo o resto do sorriso."),
  ],
  feature=dict(id="avaliacao", eyebrow="Primeira consulta", h2="Você sai com um <em>plano</em>, não com dúvidas.",
    p="Na avaliação, a equipe examina, explica as opções e entrega um plano com etapas, prazos e formas de pagamento.",
    ticks=["Exame completo e conversa sem pressa","Opções explicadas com prós e contras","Plano com etapas, prazos e valores"],
    cta="Quero minha avaliação",
    panel='<p class="eyebrow">Mais procurados</p><h3>Implante e lentes de contato dental</h3><p>Os dois tratamentos que mais mudam a autoestima. Na avaliação, a equipe mostra o planejamento do seu caso antes de começar.</p>'),
  steps_h2="Seu tratamento em <em>3 passos</em>.",
  steps=[("Agende","Escolha o tratamento e o período. A recepção confirma."),
         ("Avaliação","Exame, conversa e plano por escrito."),
         ("Tratamento","Etapas combinadas e acompanhamento até o final.")],
  book=dict(eyebrow="Agendamento rápido", h2="O que você quer <em>resolver</em>?",
    qa="Tratamento", a=["Implante","Lentes de contato dental","Clareamento","Aparelho","Canal","Gengiva","Avaliação geral"],
    qb="Melhor período", b=["Manhã","Tarde"],
    tpl="Olá! Vim pelo site e quero agendar uma avaliação. Tratamento: {a}. Melhor período: {b}.",
    btn="Ligar e agendar", hint="Na versão final, este botão abre o WhatsApp da recepção com a mensagem pronta."),
  faq=[("A avaliação é cobrada?","Na versão final, aqui entra a política da clínica para a primeira consulta."),
       ("Vocês parcelam?","Aqui entram as formas de pagamento e parcelamento de cada tratamento."),
       ("Implante dói?","O procedimento é feito com anestesia, e a equipe explica o pós-operatório em detalhes."),
       ("Onde fica a clínica?","Endereço completo em Itajaí, com mapa e botão para o GPS na versão final.")],
  final_h2="Seu sorriso novo começa com uma <em>avaliação</em>.", final_p="Ligue ou chame no WhatsApp. A recepção encontra o melhor horário para você.",
  footer=[("pin","Itajaí/SC · endereço completo na versão final"),("phone","(47) 3346-1613")],
  sticky_b="O3 Clínica Odontológica", sticky_s="Avaliação em Itajaí", sticky_btn="Agendar",
 ),
 dict(
  slug="ma-moveis", for_="a M&A Móveis Sob Medida",
  title="M&A Móveis Sob Medida · Camboriú", desc="Cozinhas, livings, dormitórios e ambientes corporativos sob medida em Camboriú, há mais de 35 anos.",
  theme=dict(bg="#14110E", bg2="#1C1814", ink="#F3ECE3", muted="#B5A797", line="rgba(243,236,227,.12)", accent="#C79A63", accent_ink="#14110E",
             glow="rgba(199,154,99,.45)", card="#1E1915", display='"Playfair Display",Georgia,serif', body='"Inter",system-ui,sans-serif',
             fonts="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap",
             h1_weight="500", scheme="dark", mono_radius="6px"),
  mono="M&A", brand="M&A Móveis", brand_sub="Sob medida · Camboriú", brand_full="M&A Móveis Sob Medida",
  wa="5547988212500", wa_msg="Olá! Vim pelo site e gostaria de um orçamento de móveis sob medida.",
  nav_cta="Pedir orçamento", cta="Pedir orçamento", cta2="Ver ambientes",
  eyebrow="Há mais de 35 anos em Camboriú",
  h1="Feito sob medida para a <em>sua</em> casa, e para durar.",
  lead="Cozinhas, livings, dormitórios e escritórios projetados para o seu espaço e produzidos em MDF, com montagem da nossa equipe.",
  hero_img="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&q=80", hero_alt="Cozinha planejada em madeira", hero_caption="Foto ilustrativa",
  stats=[("35+","anos de mercado"),("100%","MDF"),("Projeto","antes de produzir"),("Montagem","equipe própria")],
  services_eyebrow="Ambientes", services_h2="Cada ambiente, <em>pensado</em> para o seu jeito de viver.",
  services_p="Medimos, projetamos e produzimos para o seu espaço. Nada de módulo pronto.",
  services=[
    dict(icon="kitchen", t="Cozinhas", d="Aproveitamento de cada canto, ferragens de qualidade e acabamento que aguenta o dia a dia."),
    dict(icon="sofa", t="Livings e home theater", d="Painéis, racks e estantes do tamanho exato da sua parede."),
    dict(icon="bed", t="Dormitórios", d="Guarda-roupas, closets e cabeceiras sob medida."),
    dict(icon="bath", t="Banheiros", d="Gabinetes e nichos resistentes à umidade."),
    dict(icon="office", t="Corporativo", d="Escritórios, consultórios e lojas com projeto e prazo combinados."),
    dict(icon="ruler", t="Projeto sob medida", d="Medição no local e projeto para você aprovar antes de produzir."),
  ],
  feature=dict(id="orcamento", eyebrow="Orçamento", h2="Mande a medida. A gente devolve o <em>projeto</em>.",
    p="Comece pelo WhatsApp: escolha o ambiente e a fase da obra. A equipe agenda a medição e apresenta o projeto para você aprovar.",
    ticks=["Medição no local","Projeto para aprovar antes de produzir","Produção e montagem com equipe própria"],
    cta="Quero um orçamento",
    panel='<p class="eyebrow">Galeria</p><h3>Projetos entregues</h3><p>Cozinhas, livings e dormitórios entregues em Camboriú e região, organizados por ambiente, com fotos em tela cheia.</p>'),
  steps_h2="Do rascunho à <em>montagem</em>.",
  steps=[("Conversa","Você conta o que precisa pelo WhatsApp."),("Medição e projeto","Vamos até o local, medimos e desenhamos."),
         ("Produção","Fabricação em MDF com acabamento escolhido."),("Montagem","Nossa equipe instala e entrega tudo no lugar.")],
  book=dict(eyebrow="Orçamento em 2 toques", h2="Qual <em>ambiente</em> você quer?",
    qa="Ambiente", a=["Cozinha","Living","Dormitório","Banheiro","Corporativo","Casa toda"],
    qb="Fase da obra", b=["Já está pronta","Em obra","Ainda no projeto"],
    tpl="Olá! Vim pelo site e quero um orçamento de móveis sob medida. Ambiente: {a}. Fase da obra: {b}.",
    btn="Enviar pelo WhatsApp", hint="A mensagem já vai pronta. Se puder, mande fotos e medidas do espaço."),
  faq=[("Qual o prazo de entrega?","Na versão final, o prazo médio por tipo de ambiente."),
       ("Vocês atendem fora de Camboriú?","Aqui entram as cidades atendidas: Balneário Camboriú, Itajaí, Itapema e região."),
       ("Como funciona o pagamento?","Formas de pagamento e parcelamento entram aqui na versão final."),
       ("Tem garantia?","Garantia de fabricação e de montagem, com o prazo da M&A.")],
  final_h2="Seu projeto começa com uma <em>foto</em> do espaço.", final_p="Mande pelo WhatsApp. A gente responde com os próximos passos.",
  footer=[("pin","Camboriú/SC · endereço completo na versão final"),("phone","(47) 98821-2500")],
  sticky_b="M&A Móveis Sob Medida", sticky_s="Orçamento pelo WhatsApp", sticky_btn="Orçamento",
 ),
]

for c in EMPRESAS:
    c["for"] = c.pop("for_")
    d = os.path.join(OUT, c["slug"]); os.makedirs(d, exist_ok=True)
    with open(os.path.join(d, "index.html"), "w") as f:
        f.write(page(c))
    print("ok", c["slug"])
