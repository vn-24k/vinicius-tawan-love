import React from 'react';
// Coleção de Instrumentos Táteis de Conexão Transcontinental
// Cada elemento possui encapsulamento estrito (zero vazamento de CSS global)


export const UivSwitchTranscontinental: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_1 { display: inline-block; position: relative; }
.uiv_scoped_1 .toggle { display: flex;
  align-items: center;
  gap: .2rem;
  font-weight: 900;
  font-size: 4rem;
  color: hsl(119, 84%, 10%);
  text-shadow: 0 0 2px #e8e8e8; }
.uiv_scoped_1 .toggle__switch { --bg-toggle: hsl(0, 0%, 100%);
  --bg-circle: hsl(119, 84%, 10%);
  --w-toggle-switch: 150px;
  --w-h-toggle-circle: 35px;
  --pd-toggle-switch: .5rem;
  height: 55px;
  width: var(--w-toggle-switch);
  background-color: var(--bg-toggle);
  border-radius: 4rem;
  display: flex;
  align-items: center;
  padding: 0 var(--pd-toggle-switch);
  cursor: pointer;
  transition: background-color 500ms; }
.uiv_scoped_1 .toggle__circle { width: var(--w-h-toggle-circle);
  height: var(--w-h-toggle-circle);
  background-color: var(--bg-circle);
  border-radius: 50%;
  transition: margin 400ms ease-in-out, background-color 1000ms; }
.uiv_scoped_1 #checkbox:checked + .toggle .toggle__circle { margin-left: calc(var(--w-toggle-switch) - (var(--pd-toggle-switch) * 2) - var(--w-h-toggle-circle)); }
.uiv_scoped_1 #checkbox:checked + .toggle > .toggle__switch { --bg-toggle: hsl(119, 84%, 10%);
  --bg-circle: hsl(0, 0%, 96%);
  box-shadow: 0 .3rem 5rem 0 hsla(96, 85%, 34%, 30%); }`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Comutador Brasil ⇄ Tailândia</span>
        <span className="text-[#E5B869]/80 font-mono">#01</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_1 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<input type="checkbox" name="check-toggle" id="checkbox" hidden="" />
<label htmlFor="checkbox" className="toggle">
  G
  <div className="toggle__switch">
      <div className="toggle__circle"></div>
  </div>
  D
</label>` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Comuta o foco visual e harmonia entre São Paulo e Bangkok
      </p>
    </div>
  );
};


export const UivSwitchNocturnal: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_2 { display: inline-block; position: relative; }
.uiv_scoped_2 .check { position: relative;
 background: linear-gradient(90deg, #f19af3, #f099b5);
 line-height: 0;
 font-size: 25px; }
.uiv_scoped_2 .check input[type="checkbox"], .uiv_scoped_2 .check label, .uiv_scoped_2 .check label::before, .uiv_scoped_2 .check label::after { appearance: none;
 display: inline-block;
 font-size: inherit;
 border-radius: 1em;
 border: 0;
 transition: .35s ease-in-out;
 box-sizing: border-box;
 cursor: pointer; }
.uiv_scoped_2 .check { appearance: none;
 display: inline-block;
 border-radius: 1em;
 border: 0;
 transition: .35s ease-in-out;
 box-sizing: border-box;
 cursor: pointer; }
.uiv_scoped_2 .check label { width: 2.2em;
 height: 1em;
 background: #d7d7d7;
 overflow: hidden; }
.uiv_scoped_2 .check input[type="checkbox"] { position: absolute;
 z-index: 1;
 width: .8em;
 height: .8em;
 top: .1em;
 left: .1em;
 background: linear-gradient(45deg, #dedede, #ffffff);
 box-shadow: 0 6px 7px rgba(0,0,0,0.3);
 outline: none; }
.uiv_scoped_2 .check input[type="checkbox"]:checked { left: 1.3em; }
.uiv_scoped_2 .check input[type="checkbox"]:checked + label { background: transparent; }
.uiv_scoped_2 .check label::before, .uiv_scoped_2 .check label::after { content: "· ·";
 position: absolute;
 overflow: hidden;
 left: .50em;
 top: .5em;
 height: 1em;
 letter-spacing: -.04em;
 color: #9b9b9b;
 font-family: "Times New Roman", serif;
 z-index: 2;
 font-size: .6em;
 border-radius: 0;
 transform-origin: 0 0 -.5em;
 backface-visibility: hidden; }
.uiv_scoped_2 .check label::after { content: "?";
 top: .65em;
 left: .6em;
 height: .1em;
 width: .35em;
 font-size: .2em;
 transform-origin: 0 0 -.4em; }
.uiv_scoped_2 .check input[type="checkbox"]:checked + label::before, .uiv_scoped_2 .check input[type="checkbox"]:checked + label::after { left: 2.55em;
 top: .4em;
 line-height: .1em;
 transform: rotateY(360deg); }
.uiv_scoped_2 .check input[type="checkbox"]:checked + label::after { height: .16em;
 top: .55em;
 left: 2.6em;
 font-size: .6em;
 line-height: 0; }`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Frequência Noturna Compartilhada</span>
        <span className="text-[#E5B869]/80 font-mono">#02</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_2 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<div className="check">
  <input id="check" type="checkbox" />
  <label htmlFor="check"></label>
</div>` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Sincroniza o modo sereno das noites iluminadas
      </p>
    </div>
  );
};


export const UivSwitchAurora: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_3 { display: inline-block; position: relative; }
`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Ponte de Luz BKK-GRU</span>
        <span className="text-[#E5B869]/80 font-mono">#03</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_3 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `
<div className="flex flex-wrap justify-center items-center w-11/12 mx-auto select-none gap-2 max-w-[500px]">
  <label className="text-slate-400">
    <input type="checkbox" className="h-[1px] opacity-0 overflow-hidden absolute whitespace-nowrap w-[1px] peer" />
    <span className="peer-checked:border-blue-500 peer-checked:shadow-blue-500/10 peer-checked:text-blue-500 peer-checked:before:border-blue-500 peer-checked:before:bg-blue-500 peer-checked:before:opacity-100 peer-checked:before:scale-100 peer-checked:before:content-['✓'] flex flex-col items-center justify-center w-28 min-h-[7rem] rounded-lg shadow-lg transition-all duration-200 cursor-pointer relative border-slate-300 border-[3px] bg-white before:absolute before:block before:w-5 before:h-5 before:border-[3px]  before:rounded-full before:top-1 before:left-1 before:opacity-0 before:transition-transform before:scale-0 before:text-white before:text-xs before:flex before:items-center before:justify-center hover:border-blue-500 hover:before:scale-100 hover:before:opacity-100">
      <span className="transition-all duration-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="currentColor" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"></rect>
          <circle cx="162" cy="128" r="34" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></circle>
          <path d="M128,94V26.00089H94a34,34,0,0,0,0,68Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
          <path d="M128,161.99911V94H94a34,34,0,0,0,0,68Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
          <path d="M128,94V26.00089h34a34,34,0,0,1,0,68Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
          <path d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
        </svg>
      </span>
      <span className="transition-all duration-300 text-center">Figma</span>
    </span>
  </label>

</div>` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Aciona a ressonância luminosa entre dois hemisférios
      </p>
    </div>
  );
};


export const UivSwitchTimezone: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_4 { display: inline-block; position: relative; }
.uiv_scoped_4 .switch { font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em; }
.uiv_scoped_4 .switch input { opacity: 0;
  width: 0;
  height: 0; }
.uiv_scoped_4 .slider { position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0);
  transition: .4s;
  border-radius: 30px; }
.uiv_scoped_4 .slider:before { position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 20px;
  left: 0.3em;
  bottom: 0.3em;
  background-color: rgb(219, 198, 2);
  transition: .4s; }
.uiv_scoped_4 input:checked + .slider { background-color: #000000; }
.uiv_scoped_4 input:focus + .slider { box-shadow: 0 0 1px #000000; }
.uiv_scoped_4 input:checked + .slider:before { transform: translateX(1.5em); }
.uiv_scoped_4 .slider::after { width: 20px;
  height: 20px;
  left: 20%;
  top: 10%;
  border-radius: 50%;
  position: absolute;
  content: "";
  background-color: rgb(0, 0, 0);
  transition: ease 0.4s; }
.uiv_scoped_4 input:checked + .slider::after { left: 80%;
  width: 0px;
  height: 0px; }`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Calibrador de Fuso Horário</span>
        <span className="text-[#E5B869]/80 font-mono">#04</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_4 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<label className="switch">
  <input type="checkbox" />
  <span className="slider"></span>
</label>` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Equilibra os fusos UTC-3 e UTC+7 com precisão milimétrica
      </p>
    </div>
  );
};


export const UivBtnConnectHearts: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_5 { display: inline-block; position: relative; }
.uiv_scoped_5 button { height: auto;
  width: auto;
  text-align: justify;
  background: linear-gradient(30deg,rgb(32, 252, 252),rgb(101, 101, 255)
    ,rgb(254, 183, 196),rgb(224, 17, 224));
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 8px;
  box-shadow: 2px 4px 6px #25d0e3;
  transition: all 0.5s ease; }
.uiv_scoped_5 button:hover { background: linear-gradient(30deg,rgb(224, 17, 224), pink, rgb(60, 60, 255), rgb(32, 252, 252));
  box-shadow: 2px 4px 6px #a8097e; }`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>União de Almas</span>
        <span className="text-[#E5B869]/80 font-mono">#05</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_5 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<button>
  Button
</button>` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Pulsação háptica de conexão instantânea
      </p>
    </div>
  );
};


export const UivBtnSealPromise: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_6 { display: inline-block; position: relative; }
.uiv_scoped_6 button { --fontSize: 2rem;
  --button: 356, 80%;
  --buttonColor: hsl(var(--button), 70%);
  --sideColor: hsl(var(--button), 40%);
  --text: hsl(var(--button), 30%);
  --bgColor: #e8e8e8;
  position: relative;
  font-size: 0;
  font-family: sans-serif;
  transition: all 300ms cubic-bezier(0.47, 1.64, 0.41, 0.8);
  border-radius: 999px;
  padding: calc(var(--fontSize) / 2);
  height: calc(var(--fontSize) * 2);
  min-width: calc(var(--fontSize) * 2);
  line-height: calc(var(--fontSize) * 0.75);
  border: none;
  outline: none;
  background-color: var(--buttonColor);
  transform: rotate(-25deg);
  color: var(--text);
  white-space: nowrap;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  box-shadow: calc(var(--fontSize) / -25) calc(var(--fontSize) / 25) calc(var(--fontSize) / 25) #ffffffbb inset, calc(var(--fontSize) / -25) calc(var(--fontSize) / -50) calc(var(--fontSize) / 25) #ffffff88 inset,
    0 0 calc(var(--fontSize) / 5) #0f004a77 inset, 0 0 0 calc(var(--fontSize) / 3.6) var(--buttonColor) inset,
    0 0 calc(var(--fontSize) / 6.25) calc(var(--fontSize) / 3.125) #0f004a44 inset, calc(var(--fontSize) / -25) calc(var(--fontSize) / 12.5) 0 var(--sideColor),
    calc(var(--fontSize) / -8.33) calc(var(--fontSize) / 12.5) calc(var(--fontSize) / 6.25) #0f004a44, calc(var(--fontSize) / -16.666) calc(var(--fontSize) / 12.5) calc(var(--fontSize) / 25) #0f004a66; }
.uiv_scoped_6 button:hover { transform: rotate(0);
  overflow: visible;
  font-size: var(--fontSize); }
.uiv_scoped_6 button::before, .uiv_scoped_6 button::after { content: ": ";
  font-family: serif;
  font-weight: bold;
  text-shadow: calc(var(--fontSize) / 25) 0 0 var(--sideColor), 0 0 calc(var(--fontSize) / 12.5) #0f004a55,
    calc(var(--fontSize) / 50) 0 0 var(--sideColor), calc(var(--fontSize) / 50) calc(var(--fontSize) / -50) 0 var(--sideColor);
  color: var(--bgColor);
  font-size: var(--fontSize); }`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Selo da Promessa Eterna</span>
        <span className="text-[#E5B869]/80 font-mono">#06</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_6 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<button> Click here </button>` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Confirmação de votos gravada no coração
      </p>
    </div>
  );
};


export const UivBtnSendVow: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_7 { display: inline-block; position: relative; }
.uiv_scoped_7 .printer { --border: #00104b;
  --background: #fff;
  cursor: pointer;
  width: 32px;
  height: 18px;
  position: relative; }
.uiv_scoped_7 .printer:before, .uiv_scoped_7 .printer:after { content: "";
  position: absolute;
  box-shadow: inset 0 0 0 2px var(--border);
  background: var(--background); }
.uiv_scoped_7 .printer:before { left: 0;
  right: 0;
  bottom: 0;
  height: 14px;
  border-radius: 3px;
  z-index: 2; }
.uiv_scoped_7 .printer:after { width: 26px;
  height: 6px;
  top: 0;
  left: 3px;
  border-radius: 3px 3px 0 0; }
.uiv_scoped_7 .printer .dot { width: 24px;
  height: 2px;
  border-radius: 1px;
  left: 4px;
  bottom: 4px;
  z-index: 4;
  position: absolute;
  background: var(--border); }
.uiv_scoped_7 .printer .dot:before, .uiv_scoped_7 .printer .dot:after { content: "";
  position: absolute;
  background: var(--border);
  border-radius: 1px;
  height: 2px; }
.uiv_scoped_7 .printer .dot:before { width: 2px;
  right: 0;
  top: -5px; }
.uiv_scoped_7 .printer .dot:after { width: 4px;
  right: 3px;
  top: -5px; }
.uiv_scoped_7 .printer .paper { position: absolute;
  z-index: 1;
  width: 18px;
  height: 20px;
  border-radius: 2px;
  box-shadow: inset 0 0 0 2px var(--border);
  background: var(--background);
  left: 7px;
  bottom: 10px;
  display: flex;
  justify-content: center;
  transform: perspective(40px) translateY(0) rotateX(4deg) translateZ(0);
  -webkit-animation: uiv_kf_7_paper 1.2s ease infinite;
  animation: uiv_kf_7_paper 1.2s ease infinite;
  -webkit-animation-play-state: var(--state, running);
  animation-play-state: var(--state, running); }
.uiv_scoped_7 .printer .paper .svg { display: block;
  width: 8px;
  height: 8px;
  margin-top: 4px; }
.uiv_scoped_7 .printer .output { width: 32px;
  height: 24px;
  pointer-events: none;
  top: 13px;
  left: 0;
  z-index: 3;
  overflow: hidden;
  position: absolute; }
.uiv_scoped_7 .printer .output .paper-out { position: absolute;
  z-index: 1;
  width: 18px;
  height: 20px;
  border-radius: 2px;
  box-shadow: inset 0 0 0 2px var(--border);
  background: var(--background);
  left: 7px;
  bottom: 0;
  transform: perspective(40px) rotateX(40deg) translateY(-12px) translateZ(6px);
  -webkit-animation: uiv_kf_7_paper-out 1.2s ease infinite;
  animation: uiv_kf_7_paper-out 1.2s ease infinite;
  -webkit-animation-play-state: var(--state, running);
  animation-play-state: var(--state, running); }
.uiv_scoped_7 .printer .output .paper-out:before { content: "";
  position: absolute;
  left: 3px;
  top: 4px;
  right: 3px;
  height: 2px;
  border-radius: 1px;
  opacity: 0.5;
  background: var(--border);
  box-shadow: 0 3px 0 var(--border), 0 6px 0 var(--border); }
.uiv_scoped_7 .printer:not(:hover) { --state: paused; }
@-webkit-keyframes paper {
  50% {
    transform: translateY(10px) translateZ(0);
  }
}
@keyframes uiv_kf_7_paper {
  50% {
    transform: translateY(10px) translateZ(0);
  }
}
@-webkit-keyframes paper-out {
  50% {
    transform: perspective(40px) rotateX(30deg) translateY(-4px) translateZ(6px);
  }
}
@keyframes uiv_kf_7_paper-out {
  50% {
    transform: perspective(40px) rotateX(30deg) translateY(-4px) translateZ(6px);
  }
}`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Transmissor de Afeto</span>
        <span className="text-[#E5B869]/80 font-mono">#07</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_7 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<div className="printer">
    <div className="paper">
        <svg viewBox="0 0 8 8" className="svg">
            <path fill="#0077FF" d="M6.28951 1.3867C6.91292 0.809799 7.00842 0 7.00842 0C7.00842 0 6.45246 0.602112 5.54326 0.602112C4.82505 0.602112 4.27655 0.596787 4.07703 0.595012L3.99644 0.594302C1.94904 0.594302 0.290039 2.25224 0.290039 4.29715C0.290039 6.34206 1.94975 8 3.99644 8C6.04312 8 7.70284 6.34206 7.70284 4.29715C7.70347 3.73662 7.57647 3.18331 7.33147 2.67916C7.08647 2.17502 6.7299 1.73327 6.2888 1.38741L6.28951 1.3867ZM3.99679 6.532C2.76133 6.532 1.75875 5.53084 1.75875 4.29609C1.75875 3.06133 2.76097 2.06018 3.99679 2.06018C4.06423 2.06014 4.13163 2.06311 4.1988 2.06905L4.2414 2.07367C4.25028 2.07438 4.26057 2.0758 4.27406 2.07651C4.81533 2.1436 5.31342 2.40616 5.67465 2.81479C6.03589 3.22342 6.23536 3.74997 6.23554 4.29538C6.23554 5.53084 5.23439 6.532 3.9975 6.532H3.99679Z"></path>
            <path fill="#0055BB" d="M6.756 1.82386C6.19293 2.09 5.58359 2.24445 4.96173 2.27864C4.74513 2.17453 4.51296 2.10653 4.27441 2.07734C4.4718 2.09225 5.16906 2.07947 5.90892 1.66374C6.04642 1.58672 6.1743 1.49364 6.28986 1.38647C6.45751 1.51849 6.61346 1.6647 6.756 1.8235V1.82386Z"></path>
        </svg>
    </div>
    <div className="dot"></div>
    <div className="output">
        <div className="paper-out"></div>
    </div>
</div>` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Envia frequências de carinho através do globo
      </p>
    </div>
  );
};


export const UivBtnLightBangkok: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_8 { display: inline-block; position: relative; }
.uiv_scoped_8 .bin { --black: #000000;
  --binbg: #e6e6e6;
  --width: 40px;
  --height: 50px;
  background-image: repeating-linear-gradient(to right, transparent, transparent 5px, var(--black) 5px, var(--black) 7px, transparent 7px);
  background-size: 11px calc(var(--height) / 2);
  background-position: 2px center;
  background-repeat: repeat-x;
  margin: auto;
  position: relative;
  background-color: var(--binbg);
  border: 0;
  color: transparent;
  width: var(--width);
  height: var(--height);
  border: 2px solid var(--black);
  border-radius: 0 0 6px 6px; }
.uiv_scoped_8 .bin::after, .uiv_scoped_8 .bin::before { content: "";
  position: absolute;
  transform-origin: left bottom;
  transition: 200ms ease-in-out;
  border-width: 2px;
  border-style: solid;
  margin: auto;
  right: 0; }
.uiv_scoped_8 .bin::after { left: -4px;
  top: -5px;
  height: 7px;
  width: var(--width);
  border: 2px solid var(--black);
  background-color: var(--binbg);
  border-radius: 5px 5px 0 0; }
.uiv_scoped_8 .bin::before { top: -8px;
  height: 2px;
  width: 10px;
  border-color: var(--black) var(--black) transparent var(--black);
  left: 0; }
.uiv_scoped_8 .bin:focus, .uiv_scoped_8 .bin:active { outline: none;
  cursor: none; }
.uiv_scoped_8 .bin:focus::before, .uiv_scoped_8 .bin:focus::after, .uiv_scoped_8 .bin:active::before, .uiv_scoped_8 .bin:active::after { transform-origin: left bottom;
  transform: rotate(-45deg); }
.uiv_scoped_8 .bin:focus::before, .uiv_scoped_8 .bin:active::before { top: -18px;
  left: -23px;
  right: 3px; }
.uiv_scoped_8 .bin:focus ~ .div, .uiv_scoped_8 .bin:active ~ .div { cursor: none;
  z-index: 1; }
.uiv_scoped_8 .bin:focus ~ .div:hover, .uiv_scoped_8 .bin:active ~ .div:hover { cursor: none; }
.uiv_scoped_8 .bin:focus ~ .overlay, .uiv_scoped_8 .bin:active ~ .overlay { pointer-events: inherit;
  z-index: 2;
  cursor: none; }
.uiv_scoped_8 .bin:focus ~ .div > small, .uiv_scoped_8 .bin:active ~ .div > small { opacity: 1;
  animation: uiv_kf_8_throw 300ms 30ms cubic-bezier(0.215, 0.61, 0.355, 0.3) forwards; }
.uiv_scoped_8 .div:focus, .uiv_scoped_8 .div:active, .uiv_scoped_8 .div:hover { z-index: 1;
  cursor: none; }
.uiv_scoped_8 .div > small { position: absolute;
  width: 20px;
  height: 16px;
  left: 0;
  right: -58px;
  margin: auto;
  top: 27px;
  bottom: 0;
  border-left: 1px solid black;
  opacity: 0; }
.uiv_scoped_8 .div > small::before, .uiv_scoped_8 .div > small::after { content: "";
  position: absolute;
  width: 1px;
  border-right: 1px solid black; }
.uiv_scoped_8 .div > small::before { height: 17px;
  transform: rotate(-42deg);
  top: -3px;
  right: 13px; }
.uiv_scoped_8 .div > small::after { height: 4px;
  transform: rotate(-112deg);
  top: 18px;
  right: 11px; }
.uiv_scoped_8 .div > small > i::before, .uiv_scoped_8 .div > small > i::after { content: "";
  position: absolute;
  border-top: 1px solid black; }
.uiv_scoped_8 .div > small > i::before { border-left: 1px solid black;
  width: 4px;
  bottom: -4px;
  height: 4px;
  transform: rotate(66deg); }
.uiv_scoped_8 .div > small > i::after { border-right: 1px solid black;
  width: 5px;
  bottom: -2px;
  height: 5px;
  transform: rotate(-114deg);
  right: 6px; }
@keyframes uiv_kf_8_throw {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, -30px) rotate(-10deg);
  }

  60% {
    transform: translate(0, -40px) rotate(-30deg);
  }

  70% {
    transform: translate(-5px, -50px) rotate(-40deg) scale(1);
    opacity: 1;
  }

  80% {
    transform: translate(-10px, -60px) rotate(-60deg) scale(0.9);
    opacity: 1;
  }

  90% {
    transform: translate(-20px, -50px) rotate(-100deg) scale(0.5);
    opacity: 0.8;
  }

  100% {
    transform: translate(-30px, -20px) rotate(-80deg) scale(0.4);
    opacity: 0;
  }
}`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Luzes do Chao Phraya</span>
        <span className="text-[#E5B869]/80 font-mono">#08</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_8 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<button className="bin">🗑</button>
<div className="div">
  <small>
    <i></i>
  </small>
</div>` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Ilumina a ponte espiritual entre as duas capitais
      </p>
    </div>
  );
};


export const UivInputSearchMemories: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_9 { display: inline-block; position: relative; }
.uiv_scoped_9 .custom-input { max-width: 190px;
  background-color: #121212;
  border: 0px solid;
  box-shadow: 1px 1px 1px 1px rgb(131, 133, 129),
    -1px -1px 1px 1px rgb(100, 100, 100);
  border-radius: 4px;
  padding: 10px;
  color: whitesmoke;
  caret-color: white;
  outline: none;
  font-size: 16px;
  transition: background-color 0.3s ease; }
.uiv_scoped_9 .custom-input:focus { background-color: #222;
  border: 1.5px solid rgb(189, 189, 189); }
.uiv_scoped_9 .custom-input:hover { box-shadow: 1px 1px 1px 1px rgb(149, 151, 147),
    -1px -1px 1px 1px rgb(124, 124, 124); }
.uiv_scoped_9 .custom-input:hover::placeholder { color: #999999; }
.uiv_scoped_9 .custom-input::placeholder { color: #727272; }`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Busca no Álbum de Memórias</span>
        <span className="text-[#E5B869]/80 font-mono">#09</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_9 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<input placeholder="NAME" type="text" name="text" className="custom-input" />` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Campo com foco dinâmico para recordar datas e instantes
      </p>
    </div>
  );
};


export const UivInputLoveLetter: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_10 { display: inline-block; position: relative; }
.uiv_scoped_10 .password { outline: none;
  max-width: 190px;
  padding: 8px;
  background-color: #d4cbcb;
  border-radius: 12px;
  border: 4px solid #000000;
  width: auto;
  font-weight: bold;
  font-style: italic; }
.uiv_scoped_10 .password:hover { background-color: #6ad5f0;
  outline: none;
  border: 4px solid #000000; }`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Cápsula de Mensagem Privada</span>
        <span className="text-[#E5B869]/80 font-mono">#10</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_10 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<input placeholder="Enter  password..." name="text" type="password" className="password" />` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Entrada estilizada para palavras e declarações secretas
      </p>
    </div>
  );
};


export const UivInputCoordinate: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_11 { display: inline-block; position: relative; }
.uiv_scoped_11 .input { margin: 30px;
  background: none;
  border: 1px solid #353535;
  outline: none;
  max-width: 200px;
  padding: 11px 23px;
  font-size: 16px;
  border-radius: 50px;
  color: #979797;
  box-shadow: rgb(136 136 136 / 17%) 0px -23px 25px 0px inset,
    rgb(81 81 81 / 23%) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px; }`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Sintonia de Frequência Afetiva</span>
        <span className="text-[#E5B869]/80 font-mono">#11</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_11 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<input placeholder="Username" className="input" name="text" type="text" />` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Sintonizador de batimentos cardíacos a 16.500 km
      </p>
    </div>
  );
};


export const UivLoaderAtlantic: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_12 { display: inline-block; position: relative; }
.uiv_scoped_12 .loader { position: relative;
  width: 164px;
  height: 164px; }
.uiv_scoped_12 .loader::before, .uiv_scoped_12 .loader::after { content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #00bd26;
  left: 50%;
  top: 50%;
  animation: uiv_kf_12_rotate 1s ease-in infinite; }
.uiv_scoped_12 .loader::after { width: 20px;
  height: 20px;
  background-color: #00bd26;
  animation: uiv_kf_12_rotate 1s ease-in infinite, uiv_kf_12_moveY 1s ease-in infinite; }
@keyframes uiv_kf_12_moveY {
  0% , 100% {
    top: 10%
  }

  45% , 55% {
    top: 59%
  }

  60% {
    top: 40%
  }
}
@keyframes uiv_kf_12_rotate {
  0% {
    transform: translate(-50%, -100%) rotate(0deg) scale(1 , 1)
  }

  25% {
    transform: translate(-50%, 0%) rotate(180deg) scale(1 , 1)
  }

  45% , 55% {
    transform: translate(-50%, 100%) rotate(180deg) scale(3 , 0.5)
  }

  60% {
    transform: translate(-50%, 100%) rotate(180deg) scale(1, 1)
  }

  75% {
    transform: translate(-50%, 0%) rotate(270deg) scale(1 , 1)
  }

  100% {
    transform: translate(-50%, -100%) rotate(360deg) scale(1 , 1)
  }
}`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Ondas do Atlântico & Pacífico</span>
        <span className="text-[#E5B869]/80 font-mono">#12</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_12 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<div className="loader"></div>` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Representa as marés e oceanos que nos aproximam
      </p>
    </div>
  );
};


export const UivLoaderFlightStream: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_13 { display: inline-block; position: relative; }
.uiv_scoped_13 .spinner { position: relative;
 width: 56px;
 height: 56px;
 animation: uiv_kf_13_spinner-3a5251 1.25s infinite linear; }
.uiv_scoped_13 .spinner div { position: absolute;
 top: 50%;
 left: 50%;
 width: 0;
 height: 0;
 border-left: 3.6px solid transparent;
 border-right: 3.6px solid transparent;
 border-bottom: 10.8px solid #004dff;
 transform-origin: center 10.8px; }
.uiv_scoped_13 .spinner div:before, .uiv_scoped_13 .spinner div:after { content: '';
 position: absolute;
 width: 0;
 height: 0;
 display: block;
 border-left: 10.8px solid transparent;
 border-right: 10.8px solid transparent;
 border-bottom: 7.2px solid #004dff; }
.uiv_scoped_13 .spinner div:before { transform: translate(-10.8px, 7.2px) rotate(35deg); }
.uiv_scoped_13 .spinner div:after { transform: translate(-10.8px, 7.2px) rotate(-35deg); }
.uiv_scoped_13 .spinner div:nth-child(1) { transform: translate(-50%, -10.8px) rotate(51.42857deg) translate(0, 320%); }
.uiv_scoped_13 .spinner div:nth-child(2) { transform: translate(-50%, -10.8px) rotate(102.85714deg) translate(0, 320%); }
.uiv_scoped_13 .spinner div:nth-child(3) { transform: translate(-50%, -10.8px) rotate(154.28571deg) translate(0, 320%); }
.uiv_scoped_13 .spinner div:nth-child(4) { transform: translate(-50%, -10.8px) rotate(205.71429deg) translate(0, 320%); }
.uiv_scoped_13 .spinner div:nth-child(5) { transform: translate(-50%, -10.8px) rotate(257.14286deg) translate(0, 320%); }
.uiv_scoped_13 .spinner div:nth-child(6) { transform: translate(-50%, -10.8px) rotate(308.57143deg) translate(0, 320%); }
.uiv_scoped_13 .spinner div:nth-child(7) { transform: translate(-50%, -10.8px) rotate(360deg) translate(0, 320%); }
@keyframes uiv_kf_13_spinner-3a5251 {
 to {
  transform: rotate(360deg);
 }
}`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Trajetória de Voo Contínua</span>
        <span className="text-[#E5B869]/80 font-mono">#13</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_13 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<div className="spinner">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Indicador de rota aérea ininterrupta
      </p>
    </div>
  );
};


export const UivLoaderSoulOrbit: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_14 { display: inline-block; position: relative; }
.uiv_scoped_14 .spinner { width: 56px;
 height: 56px;
 display: grid;
 color: #004dff;
 background: radial-gradient(farthest-side, currentColor calc(100% - 7px),#0000 calc(100% - 6px) 0);
 -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 15px),#000 calc(100% - 13px));
 border-radius: 50%;
 animation: uiv_kf_14_spinner-sm4bhi 2s infinite linear; }
.uiv_scoped_14 .spinner::before, .uiv_scoped_14 .spinner::after { content: "";
 grid-area: 1/1;
 background: linear-gradient(currentColor 0 0) center,
          linear-gradient(currentColor 0 0) center;
 background-size: 100% 11px,11px 100%;
 background-repeat: no-repeat; }
.uiv_scoped_14 .spinner::after { transform: rotate(45deg); }
@keyframes uiv_kf_14_spinner-sm4bhi {
 100% {
  transform: rotate(1turn);
 }
}`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Órbita das Almas Gêmeas</span>
        <span className="text-[#E5B869]/80 font-mono">#14</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_14 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<div className="spinner"></div>` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Movimento perpétuo de atração mútua
      </p>
    </div>
  );
};


export const UivTooltipSaoPaulo: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_15 { display: inline-block; position: relative; }
.uiv_scoped_15 .wrapper { display: flex;
  gap: 10px;
  font-family: monospace; }
.uiv_scoped_15 .wrapper > div { text-align: center; }
.uiv_scoped_15 .wrapper > div + div { border-inline-start: 1px solid #d6cfcf;
  padding-inline-start: 15px; }
.uiv_scoped_15 .wrapper > div > p { margin-top: 15px;
  max-width: 200px; }
.uiv_scoped_15 .wrapper a { display: inline-flex;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  background-color: #191919;
  color: #d5ad72;
  position: relative; }
.uiv_scoped_15 .data-tooltip::before, .uiv_scoped_15 .data-tooltip::after { position: absolute;
  visibility: hidden;
  opacity: 0;
  transform: translateY(5px);
  transition: all 0.2s ease; }
.uiv_scoped_15 .data-tooltip::before { content: attr(data-tooltip-content);
  width: fit-content;
  font-size: small;
  font-weight: 600;
  background-color: inherit;
  padding: 3px 10px;
  border-radius: 4px;
  bottom: calc(100% + 5px); }
.uiv_scoped_15 .data-tooltip::after { content: "";
  border-top: 5px solid #191919;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  bottom: calc(100% + 1px); }
.uiv_scoped_15 .data-tooltip:hover::before, .uiv_scoped_15 .data-tooltip:hover::after { visibility: visible;
  opacity: 1;
  transform: translateY(0); }
.uiv_scoped_15 .span-tooltip > i { width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; }
.uiv_scoped_15 .span-tooltip > span { position: absolute;
  width: fit-content;
  font-size: small;
  font-weight: 600;
  background-color: inherit;
  padding: 3px 10px;
  border-radius: 4px;
  bottom: 100%;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s ease; }
.uiv_scoped_15 .span-tooltip > span::before { position: absolute;
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 3px;
  background-color: inherit;
  transform: rotate(45deg);
  top: calc(100% - 6px);
  left: 40%; }
.uiv_scoped_15 .span-tooltip > i:hover + span { visibility: visible;
  opacity: 1;
  bottom: calc(100% + 6px); }`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Marco de São Paulo</span>
        <span className="text-[#E5B869]/80 font-mono">#15</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_15 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<div className="wrapper">
  <div>
    <a href="#" data-tooltip-content="Github" className="data-tooltip">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-github"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
        ></path>
      </svg>
    </a>
    <p>Tooltip using HTML custom data attribute &amp; CSS content property</p>
  </div>

  <div>
    <a href="#" className="span-tooltip">
      <i>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-github"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
          ></path>
        </svg>
      </i>
      <span>Github</span>
    </a>
    <p>Tooltip using span tag</p>
  </div>
</div>` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Lat -23.5505°, Long -46.6333° (Mata Atlântica e Garoa)
      </p>
    </div>
  );
};


export const UivTooltipBangkok: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_16 { display: inline-block; position: relative; }
.uiv_scoped_16 .tooltip-container { background: rgb(3, 169, 244);
  background: linear-gradient(
    138deg,
    rgba(3, 169, 244, 1) 15%,
    rgba(63, 180, 233, 1) 65%
  );
  position: relative;
  cursor: pointer;
  font-size: 17px;
  padding: 0.7em 0.7em;
  border-radius: 50px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1); }
.uiv_scoped_16 .tooltip-container:hover { background: #fff;
  transition: all 0.6s; }
.uiv_scoped_16 .tooltip-container .text { display: flex;
  align-items: center;
  justify-content: center;
  fill: #fff;
  transition: all 0.2s; }
.uiv_scoped_16 .tooltip-container:hover .text { fill: rgb(3, 169, 244);
  transition: all 0.6s; }
.uiv_scoped_16 .tooltip1 { position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  background: #fff;
  fill: #03a9f4;
  padding: 10px;
  border-radius: 50px;
  transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); }
.uiv_scoped_16 .tooltip-container:hover .tooltip1 { top: 150%;
  opacity: 1;
  visibility: visible;
  background: #fff;
  border-radius: 50px;
  transform: translate(-50%, -5px);
  display: flex;
  align-items: center;
  justify-content: center; }
.uiv_scoped_16 .tooltip-container:hover .tooltip1:hover { background: #03a9f4;
  fill: #fff; }
.uiv_scoped_16 .tooltip2 { position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  background: #fff;
  fill: #0462df;
  padding: 10px;
  border-radius: 50px;
  transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); }
.uiv_scoped_16 .tooltip-container:hover .tooltip2 { top: -120%;
  opacity: 1;
  visibility: visible;
  background: #fff;
  transform: translate(-50%, -5px);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center; }
.uiv_scoped_16 .tooltip-container:hover .tooltip2:hover { background: #0462df;
  fill: #fff; }
.uiv_scoped_16 .tooltip3 { position: absolute;
  top: 100%;
  left: 60%;
  transform: translateX(80%);
  opacity: 0;
  visibility: hidden;
  background: #fff;
  fill: #1db954;
  padding: 10px;
  border-radius: 50px;
  transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); }
.uiv_scoped_16 .tooltip-container:hover .tooltip3 { top: 10%;
  opacity: 1;
  visibility: visible;
  background: #fff;
  transform: translate(85%, -5px);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center; }
.uiv_scoped_16 .tooltip-container:hover .tooltip3:hover { background: #1db954;
  fill: #fff; }
.uiv_scoped_16 .tooltip4 { position: absolute;
  top: 100%;
  left: -190%;
  transform: translateX(70%);
  opacity: 0;
  visibility: hidden;
  background: #fff;
  fill: #8c9eff;
  padding: 10px;
  border-radius: 50px;
  transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); }
.uiv_scoped_16 .tooltip-container:hover .tooltip4 { top: 10%;
  opacity: 1;
  visibility: visible;
  background: #fff;
  transform: translate(70%, -5px);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center; }
.uiv_scoped_16 .tooltip-container:hover .tooltip4:hover { background: #8c9eff;
  fill: #fff; }
.uiv_scoped_16 .tooltip5 { position: absolute;
  top: 100%;
  left: -145%;
  transform: translateX(70%);
  opacity: 0;
  visibility: hidden;
  background: #fff;
  fill: #bd081c;
  padding: 10px;
  border-radius: 50px;
  transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); }
.uiv_scoped_16 .tooltip-container:hover .tooltip5 { top: -78%;
  opacity: 1;
  visibility: visible;
  background: #fff;
  transform: translate(70%, -5px);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center; }
.uiv_scoped_16 .tooltip-container:hover .tooltip5:hover { background: #bd081c;
  fill: #fff; }
.uiv_scoped_16 .tooltip6 { position: absolute;
  top: 100%;
  left: 35%;
  transform: translateX(70%);
  opacity: 0;
  visibility: hidden;
  background: #fff;
  fill: #ea4c89;
  padding: 10px;
  border-radius: 50px;
  transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); }
.uiv_scoped_16 .tooltip-container:hover .tooltip6 { top: -79%;
  opacity: 1;
  visibility: visible;
  background: #fff;
  transform: translate(70%, -5px);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center; }
.uiv_scoped_16 .tooltip-container:hover .tooltip6:hover { background: #ea4c89;
  fill: #fff; }
.uiv_scoped_16 .tooltip7 { position: absolute;
  top: 100%;
  left: 39%;
  transform: translateX(70%);
  opacity: 0;
  visibility: hidden;
  background: #fff;
  fill: #000;
  padding: 10px;
  border-radius: 50px;
  transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); }
.uiv_scoped_16 .tooltip-container:hover .tooltip7 { top: 104%;
  opacity: 1;
  visibility: visible;
  background: #fff;
  transform: translate(70%, -5px);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center; }
.uiv_scoped_16 .tooltip-container:hover .tooltip7:hover { background: #000;
  fill: #fff; }
.uiv_scoped_16 .tooltip8 { position: absolute;
  top: 100%;
  left: -150%;
  transform: translateX(70%);
  opacity: 0;
  visibility: hidden;
  background: #fff;
  fill: #ff4500;
  padding: 10px;
  border-radius: 50px;
  transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); }
.uiv_scoped_16 .tooltip-container:hover .tooltip8 { top: 101%;
  opacity: 1;
  visibility: visible;
  background: #fff;
  transform: translate(70%, -5px);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center; }
.uiv_scoped_16 .tooltip-container:hover .tooltip8:hover { background: #ff4500;
  fill: #fff; }
.uiv_scoped_16 .tooltip9 { position: absolute;
  top: 0;
  left: -115%;
  opacity: 0;
  visibility: hidden;
  width: 150px;
  height: 150px;
  z-index: -1; }
.uiv_scoped_16 .tooltip-container:hover .tooltip9 { top: -110%;
  opacity: 1;
  visibility: visible;
  border-radius: 50%;
  z-index: -1; }`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Marco de Bangkok</span>
        <span className="text-[#E5B869]/80 font-mono">#16</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_16 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<div className="tooltip-container">
  <span className="text">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      className="bi bi-send-fill"
      viewBox="0 0 16 16"
    >
      <path
        d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"
      ></path>
    </svg>
  </span>
  <span className="tooltip1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      className="bi bi-twitter"
      viewBox="0 0 16 16"
    >
      <path
        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"
      ></path>
    </svg>
  </span>
  <span className="tooltip2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      className="bi bi-facebook"
      viewBox="0 0 16 16"
    >
      <path
        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
      ></path>
    </svg>
  </span>
  <span className="tooltip3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      className="bi bi-whatsapp"
      viewBox="0 0 16 16"
    >
      <path
        d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
      ></path>
    </svg>
  </span>
  <span className="tooltip4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      className="bi bi-discord"
      viewBox="0 0 16 16"
    >
      <path
        d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"
      ></path>
    </svg>
  </span>
  <span className="tooltip5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      className="bi bi-pinterest"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0"
      ></path>
    </svg>
  </span>
  <span className="tooltip6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z"
      ></path>
    </svg>
  </span>
  <span className="tooltip7">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      className="bi bi-github"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
      ></path>
    </svg>
  </span>
  <span className="tooltip8">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      className="bi bi-reddit"
      viewBox="0 0 16 16"
    >
      <path
        d="M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z"
      ></path>
      <path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165"
      ></path>
    </svg>
  </span>
  <span className="tooltip9"> </span>
</div>` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Lat 13.7563°, Long 100.5018° (Templos e Lótus)
      </p>
    </div>
  );
};


export const UivCardFlightPass: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_17 { display: inline-block; position: relative; }
.uiv_scoped_17 .card { width: 310px;
  height: 330px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  padding: 5px;
  color: white;
  z-index: 1030;
  transition: 0.4s;
  overflow: hidden;
  position: relative;
  animation: uiv_kf_17_shadow 3s linear infinite; }
.uiv_scoped_17 .card::before { content: "";
  position: absolute;
  top: -27%;
  width: 550px;
  height: 550px;
  z-index: -1;
  background-image: conic-gradient(transparent, transparent, transparent, crimson);
  animation: uiv_kf_17_rotate 3s linear infinite; }
.uiv_scoped_17 .card::after { content: "";
  position: absolute;
  bottom: -30%;
  width: 550px;
  height: 550px;
  transform: rotate(180deg);
  background-image: conic-gradient(transparent, transparent, transparent, yellow);
  z-index: -1;
  animation: uiv_kf_17_rotate1 3s linear infinite; }
@keyframes uiv_kf_17_rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
@keyframes uiv_kf_17_rotate1 {
  0% {
    transform: rotate(180deg);
  }

  0% {
    transform: rotate(-180deg);
  }
}
@keyframes uiv_kf_17_shadow {
  0% {
    box-shadow: 6px 6px 15px rgba(255, 194, 80, 0.25),
  -6px -6px 20px rgba(255, 0, 0, 0.25);
  }

  50% {
    box-shadow: -6px -6px 15px rgba(255, 194, 80, 0.25),
  6px 6px 20px rgba(255, 0, 0, 0.25);
  }

  100% {
    box-shadow: 6px 6px 15px rgba(255, 194, 80, 0.25),
  -6px -6px 20px rgba(255, 0, 0, 0.25);
  }
}
.uiv_scoped_17 .card .heading { font-size: 18px;
  font-weight: 800;
  background-size: 300% 300%;
  background-image: linear-gradient(to right, #d52643, yellow, yellowgreen);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  z-index: 1000;
  animation: uiv_kf_17_AnimateBG 4s ease infinite; }
@keyframes uiv_kf_17_AnimateBG {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
.uiv_scoped_17 .card .content { display: flex;
  width: 301px;
  height: 322px;
  border-radius: 15px;
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: rgb(28, 28, 28);
  gap: 20px; }
.uiv_scoped_17 .card .content .item { display: flex;
  align-items: center;
  gap: 5px;
  width: 80px;
  height: 30px;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 600;
  transition: 1s; }
.uiv_scoped_17 .card .content .item:hover svg path { stroke: #26d526 }
.uiv_scoped_17 .card .content .item:hover svg { animation: uiv_kf_17_anima 2s; }
@keyframes uiv_kf_17_anima {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.uiv_scoped_17 .card .content .item--post:hover svg { animation: uiv_kf_17_launch 2s; }
@keyframes uiv_kf_17_launch {
  0% {
    transform: translateX(0px);
  }

  10% {
    transform: translateY(20px);
  }

  75% {
    transform: translateY(-250px) rotate(10deg) translateX(20px);
    opacity: 0;
  }

  80% {
    transform: translateY(5px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
.uiv_scoped_17 .card button { padding: 10px 30px;
  border-radius: 20px;
  font-size: 15px;
  z-index: 1000;
  border: none;
  font-weight: 600;
  background: linear-gradient(to right, #26d526, yellow);
  cursor: pointer; }
.uiv_scoped_17 .card button:hover { background: linear-gradient(to right, #4bff4b, rgb(255, 255, 86)); }`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Passaporte do Coração</span>
        <span className="text-[#E5B869]/80 font-mono">#17</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_17 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<div className="card">
    <div className="heading">Join the Open-Source <span>Galaxy</span></div>
    <div className="content">
        <div className="item item--create">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
            </svg>
            <span>Create</span>
        </div>
        <div className="item item--post">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M4.99958 12.9998C4.99958 7.91186 7.90222 3.56348 11.9996 1.81787C16.0969 3.56348 18.9996 7.91186 18.9996 12.9998C18.9996 13.8227 18.9236 14.6263 18.779 15.4026L20.7194 17.2352C20.8845 17.3911 20.9238 17.6388 20.815 17.8381L18.3196 22.4132C18.1873 22.6556 17.8836 22.7449 17.6412 22.6127C17.5993 22.5898 17.5608 22.5611 17.5271 22.5273L15.2925 20.2927C15.1049 20.1052 14.8506 19.9998 14.5854 19.9998H9.41379C9.14857 19.9998 8.89422 20.1052 8.70668 20.2927L6.47209 22.5273C6.27683 22.7226 5.96025 22.7226 5.76498 22.5273C5.73122 22.4935 5.70246 22.4551 5.67959 22.4132L3.18412 17.8381C3.07537 17.6388 3.11464 17.3911 3.27975 17.2352L5.22014 15.4026C5.07551 14.6263 4.99958 13.8227 4.99958 12.9998ZM6.47542 19.6955L7.29247 18.8785C7.85508 18.3159 8.61814 17.9998 9.41379 17.9998H14.5854C15.381 17.9998 16.1441 18.3159 16.7067 18.8785L17.5237 19.6955L18.5056 17.8954L17.4058 16.8566C16.9117 16.39 16.6884 15.7044 16.8128 15.0363C16.9366 14.3721 16.9996 13.691 16.9996 12.9998C16.9996 9.13025 15.0045 5.69953 11.9996 4.04021C8.99462 5.69953 6.99958 9.13025 6.99958 12.9998C6.99958 13.691 7.06255 14.3721 7.18631 15.0363C7.31078 15.7044 7.08746 16.39 6.59338 16.8566L5.49353 17.8954L6.47542 19.6955ZM11.9996 12.9998C10.895 12.9998 9.99958 12.1044 9.99958 10.9998C9.99958 9.89525 10.895 8.99982 11.9996 8.99982C13.1041 8.99982 13.9996 9.89525 13.9996 10.9998C13.9996 12.1044 13.1041 12.9998 11.9996 12.9998Z"></path>
            </svg>
            <span>Post</span>
        </div>
        <div className="item item--inspire">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z"></path>
            </svg>
            <span>Inspire</span>
        </div>
    </div>
    <button>Code to Infinity!</button>
</div>` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Registro do voo São Paulo (GRU) ✈ Bangkok (BKK)
      </p>
    </div>
  );
};


export const UivCardAmulet: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_18 { display: inline-block; position: relative; }
.uiv_scoped_18 .container { width: 300px;
  height: 280px;
  position: absolute;
  top: calc(50% - 140px);
  left: calc(50% - 150px); }
.uiv_scoped_18 .coffee-header { width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ddcfcc;
  border-radius: 10px; }
.uiv_scoped_18 .coffee-header__buttons { width: 25px;
  height: 25px;
  position: absolute;
  top: 25px;
  background-color: #282323;
  border-radius: 50%; }
.uiv_scoped_18 .coffee-header__buttons::after { content: "";
  width: 8px;
  height: 8px;
  position: absolute;
  bottom: -8px;
  left: calc(50% - 4px);
  background-color: #615e5e; }
.uiv_scoped_18 .coffee-header__button-one { left: 15px; }
.uiv_scoped_18 .coffee-header__button-two { left: 50px; }
.uiv_scoped_18 .coffee-header__display { width: 50px;
  height: 50px;
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  border-radius: 50%;
  background-color: #9acfc5;
  border: 5px solid #43beae;
  box-sizing: border-box; }
.uiv_scoped_18 .coffee-header__details { width: 8px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #9b9091;
  box-shadow: -12px 0 0 #9b9091, -24px 0 0 #9b9091; }
.uiv_scoped_18 .coffee-medium { width: 90%;
  height: 160px;
  position: absolute;
  top: 80px;
  left: calc(50% - 45%);
  background-color: #bcb0af; }
.uiv_scoped_18 .coffee-medium:before { content: "";
  width: 90%;
  height: 100px;
  background-color: #776f6e;
  position: absolute;
  bottom: 0;
  left: calc(50% - 45%);
  border-radius: 20px 20px 0 0; }
.uiv_scoped_18 .coffe-medium__exit { width: 60px;
  height: 20px;
  position: absolute;
  top: 0;
  left: calc(50% - 30px);
  background-color: #231f20; }
.uiv_scoped_18 .coffe-medium__exit::before { content: "";
  width: 50px;
  height: 20px;
  border-radius: 0 0 50% 50%;
  position: absolute;
  bottom: -20px;
  left: calc(50% - 25px);
  background-color: #231f20; }
.uiv_scoped_18 .coffe-medium__exit::after { content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  bottom: -30px;
  left: calc(50% - 5px);
  background-color: #231f20; }
.uiv_scoped_18 .coffee-medium__arm { width: 70px;
  height: 20px;
  position: absolute;
  top: 15px;
  right: 25px;
  background-color: #231f20; }
.uiv_scoped_18 .coffee-medium__arm::before { content: "";
  width: 15px;
  height: 5px;
  position: absolute;
  top: 7px;
  left: -15px;
  background-color: #9e9495; }
.uiv_scoped_18 .coffee-medium__cup { width: 80px;
  height: 47px;
  position: absolute;
  bottom: 0;
  left: calc(50% - 40px);
  background-color: #fff;
  border-radius: 0 0 70px 70px / 0 0 110px 110px; }
.uiv_scoped_18 .coffee-medium__cup::after { content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  top: 6px;
  right: -13px;
  border: 5px solid #fff;
  border-radius: 50%; }
@keyframes uiv_kf_18_liquid {
  0% {
    height: 0px;
    opacity: 1;
  }
  5% {
    height: 0px;
    opacity: 1;
  }
  20% {
    height: 62px;
    opacity: 1;
  }
  95% {
    height: 62px;
    opacity: 1;
  }
  100% {
    height: 62px;
    opacity: 0;
  }
}
.uiv_scoped_18 .coffee-medium__liquid { width: 6px;
  height: 63px;
  opacity: 0;
  position: absolute;
  top: 50px;
  left: calc(50% - 3px);
  background-color: #74372b;
  animation: uiv_kf_18_liquid 4s 4s linear infinite; }
.uiv_scoped_18 .coffee-medium__smoke { width: 8px;
  height: 20px;
  position: absolute;
  border-radius: 5px;
  background-color: #b3aeae; }
@keyframes uiv_kf_18_smokeOne {
  0% {
    bottom: 20px;
    opacity: 0;
  }
  40% {
    bottom: 50px;
    opacity: 0.5;
  }
  80% {
    bottom: 80px;
    opacity: 0.3;
  }
  100% {
    bottom: 80px;
    opacity: 0;
  }
}
@keyframes uiv_kf_18_smokeTwo {
  0% {
    bottom: 40px;
    opacity: 0;
  }
  40% {
    bottom: 70px;
    opacity: 0.5;
  }
  80% {
    bottom: 80px;
    opacity: 0.3;
  }
  100% {
    bottom: 80px;
    opacity: 0;
  }
}
.uiv_scoped_18 .coffee-medium__smoke-one { opacity: 0;
  bottom: 50px;
  left: 102px;
  animation: uiv_kf_18_smokeOne 3s 4s linear infinite; }
.uiv_scoped_18 .coffee-medium__smoke-two { opacity: 0;
  bottom: 70px;
  left: 118px;
  animation: uiv_kf_18_smokeTwo 3s 5s linear infinite; }
.uiv_scoped_18 .coffee-medium__smoke-three { opacity: 0;
  bottom: 65px;
  right: 118px;
  animation: uiv_kf_18_smokeTwo 3s 6s linear infinite; }
.uiv_scoped_18 .coffee-medium__smoke-for { opacity: 0;
  bottom: 50px;
  right: 102px;
  animation: uiv_kf_18_smokeOne 3s 5s linear infinite; }
.uiv_scoped_18 .coffee-footer { width: 95%;
  height: 15px;
  position: absolute;
  bottom: 25px;
  left: calc(50% - 47.5%);
  background-color: #41bdad;
  border-radius: 10px; }
.uiv_scoped_18 .coffee-footer::after { content: "";
  width: 106%;
  height: 26px;
  position: absolute;
  bottom: -25px;
  left: -8px;
  background-color: #000; }`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Amuleto de Proteção Budista & Axé</span>
        <span className="text-[#E5B869]/80 font-mono">#18</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_18 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<div className="container">
  <div className="coffee-header">
    <div className="coffee-header__buttons coffee-header__button-one"></div>
    <div className="coffee-header__buttons coffee-header__button-two"></div>
    <div className="coffee-header__display"></div>
    <div className="coffee-header__details"></div>
  </div>
  <div className="coffee-medium">
    <div className="coffe-medium__exit"></div>
    <div className="coffee-medium__arm"></div>
    <div className="coffee-medium__liquid"></div>
    <div className="coffee-medium__smoke coffee-medium__smoke-one"></div>
    <div className="coffee-medium__smoke coffee-medium__smoke-two"></div>
    <div className="coffee-medium__smoke coffee-medium__smoke-three"></div>
    <div className="coffee-medium__smoke coffee-medium__smoke-for"></div>
    <div className="coffee-medium__cup"></div>
  </div>
  <div className="coffee-footer"></div>
</div>` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Símbolo de bênção e harmonia das duas culturas
      </p>
    </div>
  );
};


export const UivRadioSeasonSummer: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_19 { display: inline-block; position: relative; }
.uiv_scoped_19 .form { display: flex; }
.uiv_scoped_19 .input { color: var(--fg);
  font: 1em/1.5 Helvetica, sans-serif; }
.uiv_scoped_19 .form, .uiv_scoped_19 .label { width: 100%; }
.uiv_scoped_19 .form { margin: auto;
  max-width: 24em;
  padding: 0 1.5em; }
.uiv_scoped_19 .label { display: block;
  text-align: center;
  color: rgb(132, 248, 0);
  -webkit-tap-highlight-color: transparent; }
.uiv_scoped_19 .label:first-child .input { border-radius: 0.5em 0 0 0.5em;
  box-shadow: 0.1em 0 0 #2726267f inset,
		-0.1em 0 0 #27262600 inset,
		0 0.1em 0 #afa490 inset,
		0 -0.1em 0 #ffffff3f,
		0 0.2em 0.5em #0000007f,
		0 -0.1em 0 #926086 inset,
		-0.1em -0.2em 0 #ffffff7f inset,
		0.2em 0 0 #ffffff7f inset; }
.uiv_scoped_19 .label:last-child .input { border-radius: 0 0.5em 0.5em 0;
  box-shadow: 0 -0.1em 0 #926086 inset,
		0.1em 0 0 #2726267f inset,
		-0.1em 0 0 #2726267f inset,
		0 0.1em 0 #afa490 inset,
		-0.1em 0 0 #afa490 inset,
		0 -0.1em 0 #ffffff3f,
		0 0.2em 0.5em #0000007f,
		-0.1em -0.1em 0 0.1em #ffffff7f inset; }
.uiv_scoped_19 .label:first-child .input:checked { box-shadow: 0.1em 0 0 #272626af inset,
		-0.1em 0 0 #272626 inset,
		0 0.1em 0 #847a62 inset,
		0 -0.1em 0 #ffffff3f,
		0 0.1em 0 #ffffff7f,
		0 -0.1em 0 #722257 inset,
		-0.1em -0.2em 0 #ffffff7f inset,
		0.2em 0 0 #ffffff7f inset; }
.uiv_scoped_19 .label:last-child .input:checked { box-shadow: 0.1em 0 0 #272626af inset,
		-0.1em 0 0 #272626 inset,
		0 -0.1em 0 #722257 inset,
		0 0.1em 0 #847a62 inset,
		-0.1em 0 0 #847a62 inset,
		0 -0.1em 0 #ffffff3f,
		0 0.1em 0 #ffffff7f,
		-0.1em -0.1em 0 0.1em #ffffff7f inset; }
.uiv_scoped_19 .input { background-image: linear-gradient(#ffffff 33%,#414751 58%,#837b52,#c5baa1,#c3adaa);
  border-radius: 0;
  box-shadow: 0.1em 0 0 #2726267f inset,
		-0.1em 0 0 #27262600 inset,
		0 0.1em 0 #afa490 inset,
		0 -0.1em 0 #ffffff3f,
		0 0.2em 0.5em #0000007f,
		0 -0.1em 0 #926086 inset,
		-0.1em -0.2em 0 #ffffff7f inset;
  cursor: pointer;
  display: block;
  margin-bottom: 0.5em;
  width: 100%;
  height: 1em;
  transition: box-shadow var(--transDur) ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; }
.uiv_scoped_19 .input:checked { background-image: linear-gradient(#ffffff 33%,#414751 58%,#827a7b,#c0b6ac,#c3adaa);
  box-shadow: 0.1em 0 0 #272626af inset,
		-0.1em 0 0 #272626 inset,
		0 0.1em 0 #847a62 inset,
		0 -0.1em 0 #ffffff3f,
		0 0.1em 0 #ffffff7f,
		0 -0.1em 0 #722257 inset,
		-0.1em -0.2em 0 #ffffff7f inset; }
.uiv_scoped_19 .input:checked + .span { opacity: 1;
  color: red }
.uiv_scoped_19 .input:focus { outline: transparent; }
.uiv_scoped_19 .input + .span { opacity: 0.65;
  transition: opacity var(--transDur) ease-in-out; }
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #5c6270;
    --fg: #e3e4e8;
  }

  .label:first-child .input {
    box-shadow: 0.1em 0 0 #2726267f inset,
			-0.1em 0 0 #27262600 inset,
			0 0.1em 0 #afa490 inset,
			0 -0.1em 0 #0000001f,
			0 0.2em 0.5em #0000007f,
			0 -0.1em 0 #926086 inset,
			-0.1em -0.2em 0 #ffffff7f inset,
			0.2em 0 0 #ffffff7f inset;
  }

  .label:last-child .input {
    box-shadow: 0 -0.1em 0 #926086 inset,
			0.1em 0 0 #2726267f inset,
			-0.1em 0 0 #2726267f inset,
			0 0.1em 0 #afa490 inset,
			-0.1em 0 0 #afa490 inset,
			0 -0.1em 0 #0000001f,
			0 0.2em 0.5em #0000007f,
			-0.1em -0.1em 0 0.1em #ffffff7f inset;
  }

  .label:first-child .input:checked {
    box-shadow: 0.1em 0 0 #272626af inset,
			-0.1em 0 0 #272626 inset,
			0 0.1em 0 #847a62 inset,
			0 -0.1em 0 #0000007f,
			0 0.1em 0 #0000007f,
			0 -0.1em 0 #722257 inset,
			-0.1em -0.2em 0 #ffffff7f inset,
			0.2em 0 0 #ffffff7f inset
  }

  .label:last-child .input:checked {
    box-shadow: 0.1em 0 0 #272626af inset,
			-0.1em 0 0 #272626 inset,
			0 -0.1em 0 #722257 inset,
			0 0.1em 0 #847a62 inset,
			-0.1em 0 0 #847a62 inset,
			0 -0.1em 0 #0000001f,
			0 0.1em 0 #0000007f,
			-0.1em -0.1em 0 0.1em #ffffff7f inset;
  }

  .input {
    box-shadow: 0.1em 0 0 #2726267f inset,
			-0.1em 0 0 #27262600 inset,
			0 0.1em 0 #afa490 inset,
			0 -0.1em 0 #0000001f,
			0 0.2em 0.5em #0000007f,
			0 -0.1em 0 #926086 inset,
			-0.1em -0.2em 0 #ffffff7f inset;
  }

  .input:checked {
    box-shadow: 0.1em 0 0 #272626af inset,
			-0.1em 0 0 #272626af inset,
			0 0.1em 0 #847a62 inset,
			0 -0.1em 0 #0000007f,
			0 0.1em 0 #0000007f,
			0 -0.1em 0 #722257 inset,
			-0.1em -0.2em 0 #ffffff7f inset;
  }
}`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Estação: Calor Tropical Brasileiro</span>
        <span className="text-[#E5B869]/80 font-mono">#19</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_19 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<form className="form">
	<label className="label"><input defaultChecked value="am" name="band" type="radio" className="input" /><span className="span">AM</span></label>
	<label className="label"><input value="fm" name="band" type="radio" className="input" /><span className="span">FM</span></label>
	<label className="label"><input value="sw" name="band" type="radio" className="input" /><span className="span">SW</span></label>
	<label className="label"><input value="mw" name="band" type="radio" className="input" /><span className="span">MW</span></label>
	<label className="label"><input value="mw" name="band" type="radio" className="input" /><span className="span">LW</span></label>
</form>` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Seletor de clima e ambiente de celebração
      </p>
    </div>
  );
};


export const UivRadioSeasonBreeze: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_20 { display: inline-block; position: relative; }
.uiv_scoped_20 .tabs { display: flex;
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15), 0 6px 12px 0 rgba(24, 94, 224, 0.15);
  padding: 0.75rem;
  border-radius: 99px; }
.uiv_scoped_20 .tabs * { z-index: 2; }
.uiv_scoped_20 .container input[type="radio"] { display: none; }
.uiv_scoped_20 .tab { display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 50px;
  font-size: .8rem;
  color: black;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.15s ease-in; }
.uiv_scoped_20 .notification { display: flex;
  align-items: center;
  justify-content: center;
  width: .8rem;
  height: .8rem;
  position: absolute;
  top: 10px;
  left: 30%;
  font-size: 10px;
  margin-left: 0.75rem;
  border-radius: 50%;
  margin: 0px;
  background-color: #e6eef9;
  transition: 0.15s ease-in; }
.uiv_scoped_20 .container input[type="radio"]:checked + label { color: #185ee0; }
.uiv_scoped_20 .container input[type="radio"]:checked + label > .notification { background-color: #185ee0;
  color: #fff;
  margin: 0px; }
.uiv_scoped_20 .container input[id="radio-1"]:checked ~ .glider { transform: translateX(0); }
.uiv_scoped_20 .container input[id="radio-2"]:checked ~ .glider { transform: translateX(100%); }
.uiv_scoped_20 .container input[id="radio-3"]:checked ~ .glider { transform: translateX(200%); }
.uiv_scoped_20 .glider { position: absolute;
  display: flex;
  height: 30px;
  width: 50px;
  background-color: #e6eef9;
  z-index: 1;
  border-radius: 99px;
  transition: 0.25s ease-out; }
@media (max-width: 700px) {
 
  .tabs {
    transform: scale(0.6);
  }
}`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Estação: Brisa Dourada de Bangkok</span>
        <span className="text-[#E5B869]/80 font-mono">#20</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_20 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<div className="container">
	<div className="tabs">
		<input type="radio" id="radio-1" name="tabs" defaultChecked />
		<label className="tab" htmlFor="radio-1">Hello<span className="notification">2</span></label>
		<input type="radio" id="radio-2" name="tabs" />
		<label className="tab" htmlFor="radio-2">UI</label>
		<input type="radio" id="radio-3" name="tabs" />
		<label className="tab" htmlFor="radio-3">World</label>
		<span className="glider"></span>
	</div>
</div>` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Seletor de atmosfera contemplativa
      </p>
    </div>
  );
};


export const UivCheckEverpresent: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_21 { display: inline-block; position: relative; }
`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Pacto: Nunca Esquecer o Sorriso</span>
        <span className="text-[#E5B869]/80 font-mono">#21</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_21 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `
<label className="cursor-pointer duration-300 relative overflow-hidden w-12 h-12 flex justify-center items-center border rounded-lg bg-gray-50 before:absolute before:w-8 before:h-8 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-sm  after:absolute after:z-10 after:w-4 after:h-4 after:content['']  after:bg-rose-300 after:left-1 after:bottom-1 after:rounded-full after:blur-sm">
  <input className="peer  hidden" type="checkbox" />
  <div className="w-8 h-8  rounded-md opacity-0 peer-checked:opacity-100 bg-gradient-to-tr from-emerald-800 via-emerald-700 to-emerald-500 scale-0 transition-all z-20 duration-300  peer-checked:transition-all rounded-md top-2 left-2 peer-checked:scale-100 peer-checked:duration-300 peer-checked:bg-gradient-to-tr from-emerald-800 via-emerald-700 to-emerald-500"></div>
</label>` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Compromisso selado de presença diária
      </p>
    </div>
  );
};


export const UivCheckDistanceZero: React.FC<{ label?: string; onClick?: () => void; scale?: string }> = ({ label, onClick, scale = 'scale-90' }) => {
  return (
    <div 
      className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#E5B869]/40 backdrop-blur-md transition-all duration-300 w-full min-h-[170px]"
      onClick={onClick}
    >
      <style>{`.uiv_scoped_22 { display: inline-block; position: relative; }
.uiv_scoped_22 .theme { --bg-color: rgb(24, 19, 19);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: var(--bg-color);
  border-radius: 100%;
  box-shadow: 0px 0px 5px 7px rgba(0, 0, 0, 0.199);
  transition: all .6s ease; }
.uiv_scoped_22 .input { cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  opacity: 0; }
.uiv_scoped_22 .icon { position: absolute;
  top: calc(50% -13px);
  left: calc(50% -13px);
  width: 26px;
  height: 26px; }
.uiv_scoped_22 .wifi-on { fill: lightgreen; }
.uiv_scoped_22 .wifi-off { display: none; }
.uiv_scoped_22 .input:checked ~ .wifi-off { display: block; }
.uiv_scoped_22 .input:checked ~ .wifi-on { display: none; }
.uiv_scoped_22 .theme:active { border-radius: 100%;
  box-shadow: inset 0px 0px 10px 0px rgb(240, 237, 237);
  transform: translate(3px, 3px); }`}</style>
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center justify-between w-full">
        <span>Pacto: Distância Zero no Sentir</span>
        <span className="text-[#E5B869]/80 font-mono">#22</span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full py-2 overflow-hidden">
        <div className={"uiv_scoped_22 transform transition-transform duration-300 group-hover:scale-100 " + scale} dangerouslySetInnerHTML={{ __html: `<label className="theme">
  <input className="input" defaultChecked type="checkbox" />
 <svg fill="red" className="icon wifi-off" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path d="M10.706 3.294A12.545 12.545 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c.63 0 1.249.05 1.852.148l.854-.854zM8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065 8.448 8.448 0 0 1 3.51-1.27L8 6zm2.596 1.404.785-.785c.63.24 1.227.545 1.785.907a.482.482 0 0 1 .063.745.525.525 0 0 1-.652.065 8.462 8.462 0 0 0-1.98-.932zM8 10l.933-.933a6.455 6.455 0 0 1 2.013.637c.285.145.326.524.1.75l-.015.015a.532.532 0 0 1-.611.09A5.478 5.478 0 0 0 8 10zm4.905-4.905.747-.747c.59.3 1.153.645 1.685 1.03a.485.485 0 0 1 .047.737.518.518 0 0 1-.668.05 11.493 11.493 0 0 0-1.811-1.07zM9.02 11.78c.238.14.236.464.04.66l-.707.706a.5.5 0 0 1-.707 0l-.707-.707c-.195-.195-.197-.518.04-.66A1.99 1.99 0 0 1 8 11.5c.374 0 .723.102 1.021.28zm4.355-9.905a.53.53 0 0 1 .75.75l-10.75 10.75a.53.53 0 0 1-.75-.75l10.75-10.75z"></path>
</svg>
<svg className="icon wifi-on" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"></path>
  <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"></path>
</svg>
</label>` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400/80 text-center leading-tight line-clamp-2">
        Compromisso de que nenhum quilômetro diminui o amor
      </p>
    </div>
  );
};

export const LOVE_INSTRUMENTS_MANIFEST = [
  { id: 1, name: 'UivSwitchTranscontinental', title: 'Comutador Brasil ⇄ Tailândia', desc: 'Comuta o foco visual e harmonia entre São Paulo e Bangkok', category: 'Toggle-switches' },
  { id: 2, name: 'UivSwitchNocturnal', title: 'Frequência Noturna Compartilhada', desc: 'Sincroniza o modo sereno das noites iluminadas', category: 'Toggle-switches' },
  { id: 3, name: 'UivSwitchAurora', title: 'Ponte de Luz BKK-GRU', desc: 'Aciona a ressonância luminosa entre dois hemisférios', category: 'Toggle-switches' },
  { id: 4, name: 'UivSwitchTimezone', title: 'Calibrador de Fuso Horário', desc: 'Equilibra os fusos UTC-3 e UTC+7 com precisão milimétrica', category: 'Toggle-switches' },
  { id: 5, name: 'UivBtnConnectHearts', title: 'União de Almas', desc: 'Pulsação háptica de conexão instantânea', category: 'Buttons' },
  { id: 6, name: 'UivBtnSealPromise', title: 'Selo da Promessa Eterna', desc: 'Confirmação de votos gravada no coração', category: 'Buttons' },
  { id: 7, name: 'UivBtnSendVow', title: 'Transmissor de Afeto', desc: 'Envia frequências de carinho através do globo', category: 'Buttons' },
  { id: 8, name: 'UivBtnLightBangkok', title: 'Luzes do Chao Phraya', desc: 'Ilumina a ponte espiritual entre as duas capitais', category: 'Buttons' },
  { id: 9, name: 'UivInputSearchMemories', title: 'Busca no Álbum de Memórias', desc: 'Campo com foco dinâmico para recordar datas e instantes', category: 'Inputs' },
  { id: 10, name: 'UivInputLoveLetter', title: 'Cápsula de Mensagem Privada', desc: 'Entrada estilizada para palavras e declarações secretas', category: 'Inputs' },
  { id: 11, name: 'UivInputCoordinate', title: 'Sintonia de Frequência Afetiva', desc: 'Sintonizador de batimentos cardíacos a 16.500 km', category: 'Inputs' },
  { id: 12, name: 'UivLoaderAtlantic', title: 'Ondas do Atlântico & Pacífico', desc: 'Representa as marés e oceanos que nos aproximam', category: 'loaders' },
  { id: 13, name: 'UivLoaderFlightStream', title: 'Trajetória de Voo Contínua', desc: 'Indicador de rota aérea ininterrupta', category: 'loaders' },
  { id: 14, name: 'UivLoaderSoulOrbit', title: 'Órbita das Almas Gêmeas', desc: 'Movimento perpétuo de atração mútua', category: 'loaders' },
  { id: 15, name: 'UivTooltipSaoPaulo', title: 'Marco de São Paulo', desc: 'Lat -23.5505°, Long -46.6333° (Mata Atlântica e Garoa)', category: 'Tooltips' },
  { id: 16, name: 'UivTooltipBangkok', title: 'Marco de Bangkok', desc: 'Lat 13.7563°, Long 100.5018° (Templos e Lótus)', category: 'Tooltips' },
  { id: 17, name: 'UivCardFlightPass', title: 'Passaporte do Coração', desc: 'Registro do voo São Paulo (GRU) ✈ Bangkok (BKK)', category: 'Cards' },
  { id: 18, name: 'UivCardAmulet', title: 'Amuleto de Proteção Budista & Axé', desc: 'Símbolo de bênção e harmonia das duas culturas', category: 'Cards' },
  { id: 19, name: 'UivRadioSeasonSummer', title: 'Estação: Calor Tropical Brasileiro', desc: 'Seletor de clima e ambiente de celebração', category: 'Radio-buttons' },
  { id: 20, name: 'UivRadioSeasonBreeze', title: 'Estação: Brisa Dourada de Bangkok', desc: 'Seletor de atmosfera contemplativa', category: 'Radio-buttons' },
  { id: 21, name: 'UivCheckEverpresent', title: 'Pacto: Nunca Esquecer o Sorriso', desc: 'Compromisso selado de presença diária', category: 'Checkboxes' },
  { id: 22, name: 'UivCheckDistanceZero', title: 'Pacto: Distância Zero no Sentir', desc: 'Compromisso de que nenhum quilômetro diminui o amor', category: 'Checkboxes' }
];
