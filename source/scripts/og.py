#!/usr/bin/env python3
"""Images de partage (Open Graph, 1200 x 630, JPEG) à la charte Hilarious.

Une image par langue pour les pages générales, une image par cas client avec son
visuel. À relancer quand un titre ou un visuel change :  python3 scripts/og.py
Polices : celles du site, dans public/fonts/.
"""
import json, os
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
FONTS = os.path.join(ROOT, 'public', 'fonts')
OUT = os.path.join(ROOT, 'public', 'og')
W, H = 1200, 630
YELLOW, CREAM, PINK, VIOLET, INK = '#FCF628', '#FFFAF5', '#FE6EE0', '#542A93', '#000000'

def font(name, size):
    return ImageFont.truetype(os.path.join(FONTS, name), size)

BLACK = lambda s: font('font-4.ttf', s)          # Barlow Condensed Black
CAVEAT = lambda s: font('font-5.ttf', s)         # Caveat
BARLOW = lambda s: font('font-1.ttf', s)         # Barlow Medium

def wrap(draw, text, fnt, max_w):
    lines, line = [], ''
    for word in text.split():
        trial = (line + ' ' + word).strip()
        if draw.textlength(trial, font=fnt) <= max_w or not line:
            line = trial
        else:
            lines.append(line); line = word
    if line: lines.append(line)
    return lines

def rounded(draw, box, fill, r=28):
    draw.rounded_rectangle(box, radius=r, fill=fill)

def default(locale, lines, footer):
    im = Image.new('RGB', (W, H), YELLOW)
    d = ImageDraw.Draw(im)
    logo = Image.open(os.path.join(ROOT, 'public', 'logo-transparent.png')).convert('RGBA')
    lh = 300; lw = int(logo.width * lh / logo.height)
    logo = logo.resize((lw, lh), Image.LANCZOS)
    im.paste(logo, (90, (H - lh) // 2 - 10), logo)
    d.text((70, 44), 'HILARIOUS', font=CAVEAT(30), fill=INK)
    d.text((W - 70, 44), footer, font=CAVEAT(30), fill=INK, anchor='ra')
    f = BLACK(92)
    y = (H - len(lines) * 92) // 2 - 6
    for ln in lines:
        d.text((470, y), ln, font=f, fill=VIOLET); y += 92
    d.text((W - 70, H - 48), 'hilarious.be', font=CAVEAT(34), fill=INK, anchor='rb')
    im.save(os.path.join(OUT, f'default-{locale}.jpg'), quality=86, optimize=True, progressive=True)

def case(slug, client, image):
    im = Image.new('RGB', (W, H), YELLOW)
    d = ImageDraw.Draw(im)
    # Visuel du cas à droite, dans un rectangle arrondi, cadré au centre.
    src = Image.open(os.path.join(ROOT, 'public', image)).convert('RGB')
    bw, bh = 660, 530
    scale = max(bw / src.width, bh / src.height)
    src = src.resize((int(src.width * scale) + 1, int(src.height * scale) + 1), Image.LANCZOS)
    left = (src.width - bw) // 2; top = (src.height - bh) // 2
    src = src.crop((left, top, left + bw, top + bh))
    mask = Image.new('L', (bw, bh), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, bw - 1, bh - 1), radius=36, fill=255)
    im.paste(src, (W - bw - 50, 50), mask)
    d.text((60, 44), 'HILARIOUS', font=CAVEAT(30), fill=INK)
    d.text((60, 250), 'Cas client', font=CAVEAT(34), fill=INK)
    f = BLACK(64)
    y = 296
    for ln in wrap(d, client.upper(), f, 400)[:4]:
        d.text((60, y), ln, font=f, fill=INK); y += 64
    d.text((60, H - 48), 'hilarious.be', font=CAVEAT(34), fill=INK, anchor='lb')
    im.save(os.path.join(OUT, f'case-{slug}.jpg'), quality=86, optimize=True, progressive=True)

if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    default('fr', ["L’AGENCE", "QUI PREND LE JEU", "TRÈS AU SÉRIEUX."], 'Agence créative · Bruxelles')
    default('en', ["THE AGENCY", "THAT TAKES PLAY", "VERY SERIOUSLY."], 'Creative agency · Brussels')
    default('nl', ["HET BUREAU", "DAT SPELEN", "HEEL SERIEUS NEEMT."], 'Creatief bureau · Brussel')
    cases = json.load(open(os.path.join(ROOT, 'lib', 'cases.json')))['fr']
    for slug, c in cases.items():
        case(slug, c.get('ogClient') or c['client'], c['image'].lstrip('/'))
    print('ok', len(os.listdir(OUT)), 'images dans public/og/')
