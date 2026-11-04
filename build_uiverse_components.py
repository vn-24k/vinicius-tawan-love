#!/usr/bin/env python3
import os
import re

components_list = [
    ("Toggle-switches", "Creatlydev_wicked-bear-73.html", "UivSwitchTranscontinental", "Comutador Brasil ⇄ Tailândia", "Comuta o foco visual e harmonia entre São Paulo e Bangkok"),
    ("Toggle-switches", "Custyyyy_strange-zebra-89.html", "UivSwitchNocturnal", "Frequência Noturna Compartilhada", "Sincroniza o modo sereno das noites iluminadas"),
    ("Toggle-switches", "Darlley_jolly-yak-41.html", "UivSwitchAurora", "Ponte de Luz BKK-GRU", "Aciona a ressonância luminosa entre dois hemisférios"),
    ("Toggle-switches", "DawidMazurek4_tough-monkey-56.html", "UivSwitchTimezone", "Calibrador de Fuso Horário", "Equilibra os fusos UTC-3 e UTC+7 com precisão milimétrica"),
    ("Buttons", "AKHILJITH-VN_curly-lionfish-0.html", "UivBtnConnectHearts", "União de Almas", "Pulsação háptica de conexão instantânea"),
    ("Buttons", "Adir-SL_quiet-goose-19.html", "UivBtnSealPromise", "Selo da Promessa Eterna", "Confirmação de votos gravada no coração"),
    ("Buttons", "Admin12121_cold-dodo-65.html", "UivBtnSendVow", "Transmissor de Afeto", "Envia frequências de carinho através do globo"),
    ("Buttons", "Admin12121_lovely-cat-86.html", "UivBtnLightBangkok", "Luzes do Chao Phraya", "Ilumina a ponte espiritual entre as duas capitais"),
    ("Inputs", "BurgiSimon_rotten-dolphin-78.html", "UivInputSearchMemories", "Busca no Álbum de Memórias", "Campo com foco dinâmico para recordar datas e instantes"),
    ("Inputs", "Christardev_fat-donkey-71.html", "UivInputLoveLetter", "Cápsula de Mensagem Privada", "Entrada estilizada para palavras e declarações secretas"),
    ("Inputs", "Cksunandh_purple-moose-3.html", "UivInputCoordinate", "Sintonia de Frequência Afetiva", "Sintonizador de batimentos cardíacos a 16.500 km"),
    ("loaders", "Ankesh2002_lucky-cobra-80.html", "UivLoaderAtlantic", "Ondas do Atlântico & Pacífico", "Representa as marés e oceanos que nos aproximam"),
    ("loaders", "AqFox_clever-eel-67.html", "UivLoaderFlightStream", "Trajetória de Voo Contínua", "Indicador de rota aérea ininterrupta"),
    ("loaders", "AqFox_cuddly-turtle-6.html", "UivLoaderSoulOrbit", "Órbita das Almas Gêmeas", "Movimento perpétuo de atração mútua"),
    ("Tooltips", "TanimMahbub_white-fly-43.html", "UivTooltipSaoPaulo", "Marco de São Paulo", "Lat -23.5505°, Long -46.6333° (Mata Atlântica e Garoa)"),
    ("Tooltips", "Tsiangana_honest-bobcat-61.html", "UivTooltipBangkok", "Marco de Bangkok", "Lat 13.7563°, Long 100.5018° (Templos e Lótus)"),
    ("Cards", "AmIt-DasIT_quick-frog-32.html", "UivCardFlightPass", "Passaporte do Coração", "Registro do voo São Paulo (GRU) ✈ Bangkok (BKK)"),
    ("Cards", "AnnixArt_wonderful-liger-82.html", "UivCardAmulet", "Amuleto de Proteção Budista & Axé", "Símbolo de bênção e harmonia das duas culturas"),
    ("Radio-buttons", "Pradeepsaranbishnoi_cuddly-sheep-92.html", "UivRadioSeasonSummer", "Estação: Calor Tropical Brasileiro", "Seletor de clima e ambiente de celebração"),
    ("Radio-buttons", "Pradeepsaranbishnoi_heavy-dragonfly-92.html", "UivRadioSeasonBreeze", "Estação: Brisa Dourada de Bangkok", "Seletor de atmosfera contemplativa"),
    ("Checkboxes", "Javierrocadev_itchy-shrimp-52.html", "UivCheckEverpresent", "Pacto: Nunca Esquecer o Sorriso", "Compromisso selado de presença diária"),
    ("Checkboxes", "JaydipPrajapati1910_odd-rat-12.html", "UivCheckDistanceZero", "Pacto: Distância Zero no Sentir", "Compromisso de que nenhum quilômetro diminui o amor")
]

base_dir = "/root/Evolução Inteligente/arsenal/uiverse-galaxy"
out_dir = "/root/vinicius-tawan-love/src/components"
os.makedirs(out_dir, exist_ok=True)
out_path = os.path.join(out_dir, "uiverse-elements.tsx")

def scope_css(css, idx):
    prefix = f"uiv_s{idx}_"
    wrap_class = f"uiv_scoped_{idx}"
    
    # Rename keyframes to avoid collisions
    keyframes = set(re.findall(r'@keyframes\s+([a-zA-Z0-9_\-]+)', css))
    for kf in keyframes:
        new_kf = f"uiv_kf_{idx}_{kf}"
        css = re.sub(r'@keyframes\s+' + re.escape(kf) + r'\b', f'@keyframes {new_kf}', css)
        css = re.sub(r'(animation(?:-name)?\s*:[^;]*\b)' + re.escape(kf) + r'\b', r'\g<1>' + new_kf, css)
    
    # Break CSS into rules and scope each selector under wrap_class
    # Replace comments
    css = re.sub(r'/\*.*?\*/', '', css, flags=re.DOTALL)
    
    # Process rule blocks
    scoped_css_lines = []
    # Split by blocks while keeping @media / @keyframes intact
    parts = re.split(r'(@[^{]+\{(?:[^{}]*\{[^{}]*\})*[^{}]*\})', css)
    for part in parts:
        part = part.strip()
        if not part:
            continue
        if part.startswith('@'):
            # It's an at-rule (like @keyframes or @media)
            scoped_css_lines.append(part)
        else:
            # Regular rules
            rule_matches = re.finditer(r'([^{]+)\{([^}]+)\}', part)
            for rm in rule_matches:
                selectors_str = rm.group(1).strip()
                body = rm.group(2).strip()
                
                # Split comma separated selectors
                scoped_selectors = []
                for sel in selectors_str.split(','):
                    sel = sel.strip()
                    if not sel:
                        continue
                    # Scope under wrap_class
                    scoped_selectors.append(f".{wrap_class} {sel}")
                
                joined_selectors = ", ".join(scoped_selectors)
                scoped_css_lines.append(f"{joined_selectors} {{ {body} }}")
                
    return f".{wrap_class} {{ display: inline-block; position: relative; }}\n" + "\n".join(scoped_css_lines)

output = [
    "import React from 'react';",
    "// Coleção de Instrumentos Táteis de Conexão Transcontinental",
    "// Cada elemento possui encapsulamento estrito (zero vazamento de CSS global)",
    ""
]

manifest_items = []

for idx, (cat, fname, comp_name, title, desc) in enumerate(components_list, start=1):
    fpath = os.path.join(base_dir, cat, fname)
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
    raw_css = style_match.group(1) if style_match else ""
    html = re.sub(r'<style>.*?</style>', '', content, flags=re.DOTALL).strip()

    # Scope CSS strictly
    scoped_css = scope_css(raw_css, idx)

    # JSX conversions for the HTML template
    html = html.replace('class=', 'className=')
    html = html.replace('for=', 'htmlFor=')
    html = html.replace('tabindex=', 'tabIndex=')
    html = html.replace('stroke-width=', 'strokeWidth=')
    html = html.replace('stroke-linecap=', 'strokeLinecap=')
    html = html.replace('stroke-linejoin=', 'strokeLinejoin=')
    html = html.replace('fill-rule=', 'fillRule=')
    html = html.replace('clip-rule=', 'clipRule=')
    html = html.replace('xmlns:xlink=', 'xmlnsXlink=')
    html = html.replace('xlink:href=', 'xlinkHref=')

    for tag in ['input', 'img', 'br', 'hr']:
        html = re.sub(r'(<' + tag + r'[^>]*?)(?<!/)>', r'\1 />', html)

    html = re.sub(r'\bchecked=""', 'defaultChecked', html)
    html = re.sub(r'\brequired=""', 'required', html)
    html = re.sub(r'\bchecked="checked"', 'defaultChecked', html)
    html = re.sub(r'<!--.*?-->', '', html, flags=re.DOTALL)

    css_escaped = scoped_css.replace('`', '\\`').replace('${', '\\${')
    html_escaped = html.replace('`', '\\`').replace('${', '\\${')

    scoped_cls = f"uiv_scoped_{idx}"
    comp_code = f"""
export const {comp_name}: React.FC<{{ label?: string; onClick?: () => void; scale?: string }}> = ({{ label, onClick, scale = 'scale-90' }}) => {{
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={{onClick}}
    >
      <style>{{`{css_escaped}`}}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>{title}</span>
        <span className="text-[#E5B869]/80 font-mono">#{idx:02d}</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={{"{scoped_cls} transform transition-transform duration-300 group-hover:scale-100 " + scale}} dangerouslySetInnerHTML={{{{ __html: `{html_escaped}` }}}} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        {desc}
      </p>
    </div>
  );
}};
"""
    output.append(comp_code)
    manifest_items.append(f"  {{ id: {idx}, name: '{comp_name}', title: '{title}', desc: '{desc}', category: '{cat}' }}")

manifest_str = "export const LOVE_INSTRUMENTS_MANIFEST = [\n" + ",\n".join(manifest_items) + "\n];\n"
output.append(manifest_str)

with open(out_path, "w", encoding="utf-8") as f:
    f.write("\n".join(output))

print(f"Successfully generated {out_path} with {len(components_list)} components strictly scoped!")
