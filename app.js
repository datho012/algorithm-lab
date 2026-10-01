const $=s=>document.querySelector(s);
const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const groups=[...new Set(problems.map(p=>p.group))];
$('#nav').innerHTML=groups.map((g,i)=>`<details data-group="${i}"><summary>${String(i+1).padStart(2,'0')} &nbsp; ${escapeHtml(g)}</summary>${problems.filter(p=>p.group===g).map(p=>`<a href="#${p.id}" data-id="${p.id}"><small>${String(p.id).padStart(2,'0')}</small>${escapeHtml(p.title)}</a>`).join('')}</details>`).join('');
let current=1;
function render(){
 current=Number(location.hash.slice(1))||1;if(!Number.isInteger(current)||current<1||current>80)current=1;
 const p=problems[current-1],n=notes[current];
 document.title=`${p.id}. ${p.title} — Algorithm Lab`;
 document.querySelectorAll('nav a').forEach(a=>{const active=Number(a.dataset.id)===current;a.classList.toggle('active',active);if(active){a.setAttribute('aria-current','page');a.parentElement.open=true}else a.removeAttribute('aria-current')});
 const io=(label,key,sample,num)=>`<section><h3 class="section-label"><span class="num">${num}</span>${label}</h3><p>${escapeHtml(p[key])}</p><div class="code-label">VÍ DỤ GỐC · ${label.toUpperCase()}</div><pre>${escapeHtml(p[sample]??'Tài liệu không cung cấp ví dụ.')}</pre></section>`;
 const learning=(num,title,content,open=false)=>`<details class="learning" ${open?'open':''}><summary><h3 class="section-label"><span class="num">${num}</span>${title}</h3></summary>${content}</details>`;
 $('#lesson').innerHTML=`<article><div class="lesson-top"><div class="tags"><span>BÀI ${String(p.id).padStart(2,'0')} / 80</span><span class="badge">${escapeHtml(p.difficulty)}</span><span>${escapeHtml(p.group)}</span></div><h2>${escapeHtml(p.title)}</h2><p>${escapeHtml(p.description)}</p></div><div class="lesson-body"><div class="constraints"><strong>CONSTRAINTS</strong><br>${escapeHtml(p.constraints)}</div>${n?.warning?`<div class="warning"><b>Đính chính / lưu ý về đề gốc</b>${escapeHtml(n.warning)}</div>`:''}<div class="io">${io('Input','input','sampleInput','01')}${io('Output','output','sampleOutput','02')}</div>${learning('03','Brainstorm',`<p>${escapeHtml(n?.brain??'Nội dung đang được biên soạn.')}</p>`)}${learning('04','Pseudo-code',`<pre>${escapeHtml(n?.pseudo??'')}</pre><p class="complexity">${escapeHtml(n?.complexity??'')}</p>`)}${learning('05','Acceptance criteria',`<p>Tự kiểm tra sau khi giải. Các ô đánh dấu chỉ áp dụng cho lượt xem hiện tại.</p><ul class="criteria">${[...(n?.checks??[]),'Đối chiếu ví dụ; nếu có đính chính, dùng kết quả đã sửa.','Giải thích được vì sao thuật toán đúng và phù hợp giới hạn.'].map(c=>`<li><label><input type="checkbox"> ${escapeHtml(c)}</label></li>`).join('')}</ul>`)}</div></article>`;
 $('#position').textContent=`${current} / 80`;$('#prev').disabled=current===1;$('#next').disabled=current===80;
}
$('#prev').onclick=()=>{location.hash=Math.max(1,current-1)};$('#next').onclick=()=>{location.hash=Math.min(80,current+1)};
window.addEventListener('hashchange',render);render();
