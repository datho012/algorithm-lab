const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const escapeHtml = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const groups = [...new Set(problems.map(p => p.group))];
$('#nav').innerHTML = groups.map((g, i) => `
  <details data-group="${i}">
    <summary>${String(i + 1).padStart(2, '0')} &nbsp; ${escapeHtml(g)}</summary>
    ${problems.filter(p => p.group === g).map(p => `
      <a href="#${p.id}" data-id="${p.id}">
        <small>${String(p.id).padStart(2, '0')}</small>${escapeHtml(p.title)}
      </a>
    `).join('')}
  </details>
`).join('');

let current = 1;
let compilerInstance = null;
let compilerLoadingPromise = null;
let compilerLoadProgress = 0;

function updateCompilerStatus(statusText, progressVal = null) {
  const el = $('#compiler-status');
  if (el) {
    if (progressVal !== null) {
      el.innerHTML = `<span class="spinner"></span> ${escapeHtml(statusText)} (${Math.round(progressVal * 100)}%)`;
    } else {
      el.textContent = statusText;
    }
  }
}

async function getCompiler() {
  if (compilerInstance) return compilerInstance;
  if (compilerLoadingPromise) return compilerLoadingPromise;

  compilerLoadingPromise = (async () => {
    updateCompilerStatus('Đang tải trình biên dịch C++ (Wasm)...', 0.1);
    if (typeof clangWasm === 'undefined') {
      throw new Error('Chưa nạp được thư viện clangWasm từ file clang-wasm.global.js.');
    }
    const baseUrl = new URL('./clang/', window.location.href).href;
    const c = await clangWasm.createCompiler('cpp', {
      baseUrl: baseUrl,
      std: 'gnu++20',
      onProgress: p => {
        compilerLoadProgress = p;
        updateCompilerStatus('Đang tải Clang toolchain WebAssembly...', p);
      }
    });
    compilerInstance = c;
    updateCompilerStatus('Trình biên dịch C++ đã sẵn sàng.');
    return c;
  })();

  return compilerLoadingPromise;
}

function render() {
  current = Number(location.hash.slice(1)) || 1;
  if (!Number.isInteger(current) || current < 1 || current > 80) current = 1;

  const p = problems[current - 1];
  const n = notes[current];
  const l = (typeof lessons !== 'undefined' && lessons[current]) ? lessons[current] : null;

  document.title = `${p.id}. ${p.title} — Algorithm Lab`;

  $$('nav a').forEach(a => {
    const active = Number(a.dataset.id) === current;
    a.classList.toggle('active', active);
    if (active) {
      a.setAttribute('aria-current', 'page');
      a.parentElement.open = true;
    } else {
      a.removeAttribute('aria-current');
    }
  });

  const io = (label, key, sample, num) => `
    <section>
      <h3 class="section-label"><span class="num">${num}</span>${label}</h3>
      <p>${escapeHtml(p[key])}</p>
      <div class="code-label">VÍ DỤ GỐC · ${label.toUpperCase()}</div>
      <pre>${escapeHtml(p[sample] ?? 'Tài liệu không cung cấp ví dụ.')}</pre>
    </section>
  `;

  const learning = (num, title, content, open = false) => `
    <details class="learning" ${open ? 'open' : ''}>
      <summary><h3 class="section-label"><span class="num">${num}</span>${title}</h3></summary>
      <div class="learning-content">${content}</div>
    </details>
  `;

  // Trace steps
  const traceHtml = l?.trace?.length ? `
    <div class="trace-box">
      <div class="code-label">CÁC BƯỚC CHẠY TAY TỪNG BƯỚC (DRY RUN)</div>
      <ol class="trace-list">
        ${l.trace.map(t => `<li>${escapeHtml(t)}</li>`).join('')}
      </ol>
    </div>
  ` : '';

  // Limit/tip note
  const limitHtml = l?.limit ? `
    <div class="limit-box">
      <strong>Ghi chú tư duy & tối ưu:</strong> ${escapeHtml(l.limit)}
    </div>
  ` : '';

  const initialCode = l?.code || `// Bài ${p.id}: ${p.title}\n#include <iostream>\nusing namespace std;\n\nint main() {\n    // Nhập code của bạn tại đây\n    return 0;\n}\n`;
  const defaultInput = l?.tests?.[0]?.input ?? (p.sampleInput || '');

  $('#lesson').innerHTML = `
    <article>
      <div class="lesson-top">
        <div class="tags">
          <span>BÀI ${String(p.id).padStart(2, '0')} / 80</span>
          <span class="badge">${escapeHtml(p.difficulty)}</span>
          <span>${escapeHtml(p.group)}</span>
        </div>
        <h2>${escapeHtml(p.title)}</h2>
        <p>${escapeHtml(p.description)}</p>
      </div>

      <div class="lesson-body">
        <div class="constraints">
          <strong>CONSTRAINTS</strong><br>${escapeHtml(p.constraints)}
        </div>

        ${n?.warning ? `<div class="warning"><b>Đính chính / lưu ý về đề gốc</b>${escapeHtml(n.warning)}</div>` : ''}

        <div class="io">
          ${io('Input', 'input', 'sampleInput', '01')}
          ${io('Output', 'output', 'sampleOutput', '02')}
        </div>

        ${learning('03', 'Tư duy & Giải tay (Brainstorm & Dry Run)', `
          <div class="goal-box"><b>Mục tiêu bài toán:</b> ${escapeHtml(l?.goal || n?.brain || '')}</div>
          <p class="idea-box"><b>Ý tưởng đơn giản:</b> ${escapeHtml(l?.idea || n?.brain || 'Nội dung đang được biên soạn.')}</p>
          ${traceHtml}
          ${limitHtml}
        `, true)}

        ${learning('04', 'Mã giả & Độ phức tạp (Pseudo-code)', `
          <pre>${escapeHtml(n?.pseudo ?? '')}</pre>
          <p class="complexity">${escapeHtml(n?.complexity ?? '')}</p>
        `)}

        ${learning('05', 'Code mẫu C++ & Trình chạy thử trực tiếp', `
          <div class="editor-section">
            <div class="editor-header">
              <span class="editor-title">Trình soạn thảo C++ (Clang WebAssembly)</span>
              <div class="editor-actions">
                <button id="btn-reset-code" type="button" class="btn-sm">Khôi phục code mẫu</button>
                <button id="btn-run-code" type="button" class="btn-primary">▶ Chạy Code</button>
                <button id="btn-run-tests" type="button" class="btn-accent">✓ Chạy toàn bộ Test Cases</button>
              </div>
            </div>

            <textarea id="code-editor" class="code-editor" spellcheck="false">${escapeHtml(initialCode)}</textarea>

            <div class="io-console-grid">
              <div class="console-col">
                <label for="custom-input" class="console-label">Standard Input (stdin):</label>
                <textarea id="custom-input" class="console-textarea" placeholder="Nhập input tại đây...">${escapeHtml(defaultInput)}</textarea>
              </div>
              <div class="console-col">
                <div class="console-label-row">
                  <label for="code-output" class="console-label">Console Output (stdout/stderr):</label>
                  <span id="compiler-status" class="status-indicator">Sẵn sàng</span>
                </div>
                <pre id="code-output" class="console-output">Nhấn "Chạy Code" để biên dịch và chạy trên WebAssembly.</pre>
              </div>
            </div>

            <div class="test-cases-section">
              <h4 class="test-heading">Bộ Test Cases theo đề bài:</h4>
              <div class="test-cards-grid">
                ${(l?.tests || []).map((t, idx) => `
                  <div class="test-card" data-test-idx="${idx}">
                    <div class="test-card-header">
                      <strong>Test ${idx + 1}: ${escapeHtml(t.name)}</strong>
                      <span class="test-badge" id="test-badge-${idx}">Chưa chạy</span>
                    </div>
                    <div class="test-row"><small>Input:</small> <code class="test-val">${escapeHtml(t.input)}</code></div>
                    <div class="test-row"><small>Kỳ vọng:</small> <code class="test-val">${escapeHtml(t.expected)}</code></div>
                    <div class="test-row test-actual-row" id="test-actual-row-${idx}" style="display:none;"><small>Thực tế:</small> <code class="test-val" id="test-actual-${idx}"></code></div>
                    <button type="button" class="btn-use-test" data-idx="${idx}">Nạp input này vào ô chạy</button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `, true)}

        ${learning('06', 'Acceptance criteria', `
          <p>Tự kiểm tra sau khi giải. Các ô đánh dấu chỉ áp dụng cho lượt xem hiện tại.</p>
          <ul class="criteria">
            ${[...(n?.checks ?? []), 'Đối chiếu ví dụ; nếu có đính chính, dùng kết quả đã sửa.', 'Giải thích được vì sao thuật toán đúng và phù hợp giới hạn.'].map(c => `<li><label><input type="checkbox"> ${escapeHtml(c)}</label></li>`).join('')}
          </ul>
        `)}
      </div>
    </article>
  `;

  $('#position').textContent = `${current} / 80`;
  $('#prev').disabled = current === 1;
  $('#next').disabled = current === 80;

  // Bind editor and execution buttons
  bindEditorEvents(l, p);
}

function bindEditorEvents(l, p) {
  const resetBtn = $('#btn-reset-code');
  if (resetBtn && l?.code) {
    resetBtn.onclick = () => {
      if (confirm('Khôi phục code về mẫu ban đầu của bài?')) {
        $('#code-editor').value = l.code;
      }
    };
  }

  // Use test buttons
  $$('.btn-use-test').forEach(btn => {
    btn.onclick = () => {
      const idx = Number(btn.dataset.idx);
      const t = l?.tests?.[idx];
      if (t) {
        $('#custom-input').value = t.input;
      }
    };
  });

  // Run single
  const runBtn = $('#btn-run-code');
  if (runBtn) {
    runBtn.onclick = async () => {
      const code = $('#code-editor').value;
      const input = $('#custom-input').value;
      const outputEl = $('#code-output');

      outputEl.textContent = 'Đang biên dịch và thực thi...';
      runBtn.disabled = true;

      try {
        const compiler = await getCompiler();
        updateCompilerStatus('Đang thực thi...');
        const res = await compiler.run(code, input);
        outputEl.textContent = (res.output || '(Không có kết quả in ra màn hình)') + (res.exitCode !== 0 ? `\n[Process exited with code ${res.exitCode}]` : '');
        updateCompilerStatus('Hoàn tất (Exit ' + res.exitCode + ')');
      } catch (err) {
        outputEl.textContent = 'Lỗi biên dịch / chạy:\n' + (err.message || String(err));
        updateCompilerStatus('Lỗi');
      } finally {
        runBtn.disabled = false;
      }
    };
  }

  // Run all tests
  const testsBtn = $('#btn-run-tests');
  if (testsBtn) {
    testsBtn.onclick = async () => {
      const tests = l?.tests || [];
      if (tests.length === 0) {
        alert('Bài này chưa có danh sách test tự động.');
        return;
      }

      const code = $('#code-editor').value;
      testsBtn.disabled = true;
      updateCompilerStatus('Đang chạy toàn bộ test cases...');

      try {
        const compiler = await getCompiler();
        let passCount = 0;

        for (let i = 0; i < tests.length; i++) {
          const t = tests[i];
          const badge = $(`#test-badge-${i}`);
          const actualRow = $(`#test-actual-row-${i}`);
          const actualVal = $(`#test-actual-${i}`);

          if (badge) {
            badge.textContent = 'Đang chạy...';
            badge.className = 'test-badge running';
          }

          const res = await compiler.run(code, t.input);
          const rawOut = (res.stdout || res.output || '').trim();
          const expected = (t.expected || '').trim();

          const pass = (rawOut === expected) || (rawOut.replace(/\r\n/g, '\n').trim() === expected.replace(/\r\n/g, '\n').trim());
          if (actualRow && actualVal) {
            actualRow.style.display = 'block';
            actualVal.textContent = rawOut || '(empty)';
          }

          if (badge) {
            if (pass) {
              badge.textContent = 'PASSED';
              badge.className = 'test-badge pass';
              passCount++;
            } else {
              badge.textContent = 'FAILED';
              badge.className = 'test-badge fail';
            }
          }
        }

        updateCompilerStatus(`Hoàn thành test: ${passCount}/${tests.length} PASSED`);
      } catch (err) {
        updateCompilerStatus('Lỗi khi chạy test');
        alert('Lỗi: ' + (err.message || String(err)));
      } finally {
        testsBtn.disabled = false;
      }
    };
  }
}

$('#prev').onclick = () => { location.hash = Math.max(1, current - 1); };
$('#next').onclick = () => { location.hash = Math.min(80, current + 1); };
window.addEventListener('hashchange', render);
render();
