(()=>{'use strict';
const menu=document.querySelector('[data-menu-toggle]'),nav=document.querySelector('[data-main-nav]');
function closeMenu(){if(menu&&nav){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}}
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
document.addEventListener('click',event=>{if(nav.classList.contains('open')&&!nav.contains(event.target)&&!menu.contains(event.target))closeMenu();});}
const profile=document.getElementById('profile'),capacity=document.getElementById('capacity'),service=document.getElementById('service');
const group=document.getElementById('extra-fields'),note=document.getElementById('service-note'),form=document.getElementById('demo-request'),result=document.getElementById('demo-result');
const OPTIONS=[['F05A','F05-A — Achat-revente sur commande sans stock'],['F05B','F05-B — Intermédiation B2B'],['F04','F04 — Sourcing et assistance aux achats'],['F07','F07 — Développement commercial'],['F02','F02 — Recherche et rédaction documentaires'],['F10','F10 — Coaching / mentorat hors formation'],['F11A','F11-A — Appui administratif'],['F11B','F11-B — Prévention des différends']];
const FIELDS={
F05A:[['goods','Catégorie de marchandises'],['quantity','Quantité indicative'],['route','Pays d’origine et de destination'],['delay','Échéance souhaitée'],['budget','Budget indicatif (facultatif)']],
F05B:[['counterparty','Acheteur ou fournisseur recherché'],['market','Secteur et marché cible'],['area','Zone géographique'],['role','Rôle attendu et cadre envisagé']],
F04:[['target','Fournisseurs ou produits recherchés'],['scope','Périmètre géographique'],['criteria','Critères de sélection'],['deliverable','Livrable attendu']],
F07:[['sector','Secteur / clientèle cible'],['territory','Territoire de prospection'],['goal','Objectif commercial'],['deliverable','Livrable attendu']],
F02:[['topic','Sujet / domaine documentaire'],['output','Livrable souhaité'],['deadline','Date souhaitée']],
F10:[['goal','Objectif de l’accompagnement'],['context','Contexte général sans données sensibles'],['frequency','Format ou rythme souhaité']],
F11A:[['process','Nature de la démarche'],['task','Aide documentaire attendue'],['deadline','Date importante (si applicable)']],
F11B:[['context','Objet général du différend sans détails confidentiels'],['purpose','Objectif de facilitation envisagé'],['parties','Catégorie des parties concernées']]};
function createField(id,text){const d=document.createElement('div');d.className='field';const label=document.createElement('label');label.htmlFor='extra-'+id;label.textContent=text;
const input=document.createElement('input');input.type='text';input.id='extra-'+id;input.name=id;input.maxLength=160;input.autocomplete='off';d.append(label,input);return d;}
function render(){if(!profile||!capacity||!service||!group)return;
const previous=service.value;service.replaceChildren();OPTIONS.forEach(([id,text])=>{if(id==='F05B'&&capacity.value!=='professional')return;const opt=document.createElement('option');opt.value=id;opt.textContent=text;service.append(opt);});
service.value=[...service.options].some(o=>o.value===previous)?previous:(capacity.value==='professional'?'F05A':'F02');
group.replaceChildren(...(FIELDS[service.value]||[]).map(([id,text])=>createField(id,text)));
let message='La catégorie de public ne suffit pas à déterminer les règles juridiques applicables. Chaque demande nécessite qualification humaine avant engagement.';
if(service.value==='F05A')message='F05-A : OBY est vendeur contractuel si la vente est conclue. Sans stock ne signifie pas sans responsabilité ; les opérations B2C sont soumises à validation spécifique.';
if(service.value==='F05B')message='F05-B réservé au périmètre professionnel : fournisseur vendeur distinct, contrat d’intermédiation et conditions de commission à définir avant toute mise en relation.';
if(service.value==='F11B')message='Ne communiquez aucun détail confidentiel, document ou donnée sensible sur un différend dans la première demande.';
if(note)note.textContent=message;
}
if(profile&&capacity&&service){capacity.addEventListener('change',render);profile.addEventListener('change',render);service.addEventListener('change',render);
const params=new URLSearchParams(location.search),p=params.get('profil'),requested=params.get('activite');
if([...profile.options].some(o=>o.value===p))profile.value=p;
if(params.get('qualite')==='professional')capacity.value='professional';
if(params.get('qualite')==='consumer')capacity.value='consumer';
render();if([...service.options].some(o=>o.value===requested)){service.value=requested;render();}}
if(form){form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;
if(result){result.hidden=false;result.textContent='Parcours de démonstration vérifié : aucune donnée enregistrée, transmise ou traitée ; aucun devis ni accusé commercial créé.';result.focus();}});}
})();
