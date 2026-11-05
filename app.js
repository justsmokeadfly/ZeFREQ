
(() => {
const t={
en:{
skip:"Skip to content",navSound:"Sound",navDuo:"The duo",navRelease:"Release",navAbout:"About",
heroEyebrow:"INDEPENDENT ELECTRONIC PROJECT / 2026",heroTiny:"TWO VOICES. ONE FREQUENCY.",heroLead:"The warmth of human voices. The cold of mechanical rhythms. Electronic music between emotion and technology.",discover:"Debut single",explore:"Explore the sound",
soundLabel:"OUR SOUND",soundTitle:"Three worlds.<br><span class='muted'>One energy.</span>",soundIntro:"ZeFREQ lives in contrast: warm soul melodies meet industrial guitars and fast electronic breaks.",soulDesc:"Real emotion, velvet vocals, warm Rhodes piano and deep melody.",industrialDesc:"Mechanical guitar riffs, metal and controlled aggression.",bassDesc:"174 BPM, rapid breakbeats, huge sub-bass and neurofunk.",
duoLabel:"TWO VOICES",duoTitle:"Machine rhythm.<br><span class='muted'>Human voice.</span>",duoIntro:"Two contrasting timbres working as one. One brings tension; the other brings warmth.",maleRole:"Power and rhythm",maleDesc:"Raspy baritone · Clean singing · Aggressive accents",femaleRole:"Soul and melody",femaleDesc:"Warm mezzo-soprano · Soul phrasing · Emotional choruses",
releaseLabel:"THE FIRST SIGNAL",inProduction:"IN PRODUCTION",releaseTitle:"Warmth<br>in the Wires",releaseText:"Our debut single brings together tender soul duet vocals, heavy mechanical guitars and high-energy Drum & Bass. Release in development; date and streaming links will appear once officially published.",releaseFormat:"FORMAT",releaseTempo:"TEMPO",releaseStatus:"STATUS",soon:"SOON",planned:"PLANNED PLATFORMS",
aboutLabel:"PHILOSOPHY",aboutTitle:"Not a genre.<br><span class='muted'>A feeling.</span>",aboutP1:"ZeFREQ is an independent electronic project with two distinct vocal personalities. We fuse unlikely worlds: soulful vulnerability, industrial impact and Drum & Bass speed.",aboutP2:"Technology sets the rhythm. Human voices give it meaning. Here, silence can be louder than a drop, and a melody heavier than a guitar.",endEyebrow:"THE SIGNAL IS NEAR",endText:"ZeFREQ is just beginning. New music and official artist profiles will appear here after launch.",backTop:"Back to top"
}
};
const toggle=document.getElementById("lang-toggle"),nav=document.getElementById("primary-nav"), menu=document.querySelector(".menu-toggle");
let lang=localStorage.getItem("zefreq-lang")==="en"?"en":"ru";
const original=new Map([...document.querySelectorAll("[data-i18n]")].map(el=>[el,el.innerHTML]));
function apply(){document.documentElement.lang=lang;document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;el.innerHTML=lang==="en"&&t.en[key]!=null?t.en[key]:original.get(el)});toggle.innerHTML=(lang==="en"?"RU":"EN")+' <span aria-hidden="true">↗</span>';toggle.setAttribute("aria-label",lang==="en"?"Switch to Russian":"Switch to English");localStorage.setItem("zefreq-lang",lang)}
toggle.addEventListener("click",()=>{lang=lang==="ru"?"en":"ru";apply()});
menu.addEventListener("click",()=>{const open=!nav.classList.contains("open");nav.classList.toggle("open",open);menu.setAttribute("aria-expanded",open?"true":"false")});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false")}));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){nav.classList.remove("open");menu.setAttribute("aria-expanded","false")}});
document.getElementById("year").textContent=new Date().getFullYear();apply();
})();
