const CONFIG = {
  // MUDE AQUI: coloque a data em que vocês começaram a namorar/noivar.
  startDate: "2024-01-01",
  publishDate: "desde o nosso começo",
  names: "Nós dois"
};

const $ = (s) => document.querySelector(s);

function showToast(msg){
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),2600);
}

function updateCounter(){
  const start = new Date(CONFIG.startDate + "T00:00:00");
  const now = new Date();
  if(isNaN(start)) return;
  let years = now.getFullYear()-start.getFullYear();
  let months = now.getMonth()-start.getMonth();
  let days = now.getDate()-start.getDate();
  if(days < 0){ months--; const lastMonth = new Date(now.getFullYear(),now.getMonth(),0); days += lastMonth.getDate(); }
  if(months < 0){ years--; months += 12; }
  $("#years").textContent = Math.max(0,years);
  $("#months").textContent = Math.max(0,months);
  $("#days").textContent = Math.max(0,days);
  $("#hours").textContent = now.getHours();
  const totalDays = Math.max(0,Math.floor((now-start)/86400000));
  $("#daysTogether").textContent = `${totalDays.toLocaleString("pt-BR")} dias`;
  $("#counterDate").textContent = start.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}).replaceAll("/",".");
}
updateCounter(); setInterval(updateCounter,60000);
$("#publishDate").textContent = CONFIG.publishDate;

const video = $("#coupleVideo");
video.addEventListener("loadeddata",()=>$("#videoPlaceholder").classList.add("hidden"));
video.addEventListener("error",()=>$("#videoPlaceholder").classList.remove("hidden"));
$("#playFake").addEventListener("click",()=>{ if(video.src){video.play().catch(()=>{}); }});

$("#likeBtn").addEventListener("click",()=>{
  $("#likeBtn").classList.toggle("liked");
  $("#likeBtn").innerHTML = $("#likeBtn").classList.contains("liked") ? "♥ <span>∞</span>" : "♡ <span>∞</span>";
  showToast("Esse amor recebeu mais um coração ❤️");
});

$("#shareBtn").addEventListener("click",async()=>{
  try{ await navigator.clipboard.writeText(location.href); showToast("Link copiado! ❤️"); }
  catch(e){ showToast("Copie o endereço do site para compartilhar ❤️"); }
});

$("#memoryBtn").addEventListener("click",()=>openModal("letter"));

const commentsMore = [
  ["🫶","uma pessoa apaixonada por histórias bonitas","há 8 meses","A química desses dois deveria ser patrimônio histórico."],
  ["💍","futuro convidado","há 6 meses","Só passando para confirmar que eu já quero ver o próximo episódio: o casamento."],
  ["🐻","o amigo que sabe de tudo","há 3 meses","Ninguém me perguntou, mas eu apoio esse casal desde o início."],
  ["✨","o universo","há alguns minutos","Era para acontecer. E aconteceu."]
];
$("#moreComments").addEventListener("click",()=>{
  const box=$("#comments");
  commentsMore.forEach(c=>{
    const el=document.createElement("article"); el.className="comment";
    el.innerHTML=`<div class="comment-avatar">${c[0]}</div><div><div class="comment-top"><strong>${c[1]}</strong><span>${c[2]}</span></div><p>${c[3]}</p><div class="comment-actions">♡ ∞ &nbsp; · &nbsp; responder</div></div>`;
    box.appendChild(el);
  });
  $("#moreComments").textContent="não há mais comentários (por enquanto) ❤️";
  $("#moreComments").disabled=true;
});

const modalTexts = {
  photos: ["📸 Nossas fotos","Aqui você pode colocar uma seleção das fotos favoritas de vocês. Uma ideia legal é fazer esta tela parecer uma galeria do celular."],
  chat: ["💬 Conversas","Coloque aqui prints recriados de mensagens importantes, apelidos, primeiras conversas ou frases que vocês sempre repetem."],
  music: ["🎵 Nossa música","Nome da música: COLOQUE AQUI\n\nArtista: COLOQUE AQUI\n\n“Essa música sempre vai lembrar nós dois.”"],
  map: ["📍 Lugares","Adicione aqui os lugares que fazem parte da história: onde se conheceram, primeiro encontro, viagem inesquecível, pedido..."],
  secret: ["🔐 Você encontrou um segredo!","Se você está vendo isso, significa que fuçou tudo. Então aqui vai: eu escolheria você de novo. E de novo. E de novo. ❤️","secret"],
  letter: ["💌 Uma carta para você","Se eu pudesse guardar em uma tela tudo o que sinto por você, provavelmente esta página ainda seria pequena. Obrigada por fazer parte da minha história. Eu te amo. ❤️"]
};

function openModal(key){
  const [title,text,cls]=modalTexts[key];
  $("#modalContent").innerHTML=`<h2>${title}</h2>${cls==="secret"?'<div class="secret">❤️</div>':""}<p>${text.replaceAll("\n","<br>")}</p>`;
  $("#modalBackdrop").classList.add("open");
}
function closeModal(){ $("#modalBackdrop").classList.remove("open"); }
$("#closeModal").addEventListener("click",closeModal);
$("#modalBackdrop").addEventListener("click",(e)=>{if(e.target.id==="modalBackdrop")closeModal()});
document.querySelectorAll(".app").forEach(btn=>btn.addEventListener("click",()=>openModal(btn.dataset.modal)));

$("#themeBtn").addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  $("#themeBtn").textContent=document.body.classList.contains("dark")?"☀":"☾";
});

$("#surpriseBtn").addEventListener("click",()=>{
  for(let i=0;i<24;i++){
    const h=document.createElement("span"); h.className="heart-float"; h.textContent=["❤","♡","💗","💕"][Math.floor(Math.random()*4)];
    h.style.left=Math.random()*100+"%"; h.style.animationDelay=Math.random()*1.3+"s"; h.style.fontSize=(14+Math.random()*20)+"px";
    $("#hearts").appendChild(h); setTimeout(()=>h.remove(),5000);
  }
  showToast("Uma chuva de amor só porque você clicou. 💕");
});

let liveIndex=0;
const liveTexts=["“Que casal lindo!” ❤️","“Eu quero o episódio do casamento!” 💍","“Essa história merece continuação.” 🥹","“Comentando para deixar meu coração aqui.” 💗"];
setInterval(()=>{
  $("#liveComment").innerHTML=`<span class="live-dot"></span>${liveTexts[liveIndex++%liveTexts.length]}`;
},3500);
