/* ============ 第 1 章　集合與常用邏輯用語 ============
   節次：1-1-1 集合及其表示方法, 1-1-2 集合的基本關係, 1-1-3 集合的基本運算,
         1-2-1 命題與量詞, 1-2-2 全稱量詞命題與存在量詞命題的否定, 1-2-3 充分條件與必要條件,
         1-3 本章整合與易錯辨析
   教材對應：人教B版必修第一冊 第一章 (pp.3-39)
   邊界說明：本章不處理三集合容斥公式、不涉及複雜反證法論證，以集合運算、量詞否定與充要條件判定為核心。
   ============================================================ */
window.DECK = window.DECK || [];
(function () {
  const C = '#2563eb';
  const RED = '#e11d48', GRN = '#059669', BLU = '#2563eb', VIO = '#7c3aed', AMB = '#d97706';

  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }

  const TX = (x, y, s, o = {}) =>
    `<text x="${x}" y="${y}" ${o.anchor ? `text-anchor="${o.anchor}"` : ''} font-size="${o.fs || 14}" font-weight="${o.fw || 700}" fill="${o.c || '#1e293b'}">${s}</text>`;
  const BOX = (x, y, w, h, o = {}) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r || 10}" fill="${o.fill || '#fff'}" stroke="${o.stroke || '#cbd5e1'}" stroke-width="${o.sw || 1.6}"/>`;

  window.DECK.push({
    ch: 1,
    title: '集合與常用邏輯用語',
    color: C,
    sections: [
      '1-1-1 集合及其表示方法',
      '1-1-2 集合的基本關係',
      '1-1-3 集合的基本運算',
      '1-2-1 命題與量詞',
      '1-2-2 全稱量詞命題與存在量詞命題的否定',
      '1-2-3 充分條件與必要條件',
      '1-3 本章整合與易錯辨析'
    ],
    slides: [
      /* ---------- 1-1-1 集合及其表示方法 ---------- */
      {
        sec: '1-1-1', secName: '集合及其表示方法',
        title: '集合元素具有確定性、互異性與無序性',
        points: [
          '<b>確定性</b>：任何對象是否屬於集合判定明確，不能模稜兩可。',
          '<b>互異性</b>：集合中元素互不相同，解題求得參數必須檢驗互異性！',
          '<b>無序性</b>：元素排列順序無關緊要，例如 \\(\\{1,2\\}=\\{2,1\\}\\)。'
        ],
        formula: { label: '元素三大特性', tex: 'a \\in A \\lor a \\notin A \\quad (\\text{確定}) \\;;\\; a \\neq b \\quad (\\text{互異})' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 260', `
            ${BOX(20, 30, 120, 190, { fill: 'rgba(37,99,235,0.06)', stroke: C, r: 12 })}
            ${TX(80, 65, '確定性', { fs: 16, c: C, anchor: 'middle', fw: 800 })}
            ${TX(80, 110, '非此即彼', { fs: 13, c: '#475569', anchor: 'middle' })}
            ${TX(80, 140, '邊界清晰', { fs: 13, c: '#475569', anchor: 'middle' })}
            ${TX(80, 180, '✓「高個子」不是集', { fs: 11, c: RED, anchor: 'middle' })}

            ${BOX(160, 30, 120, 190, { fill: 'rgba(225,29,72,0.06)', stroke: RED, r: 12 })}
            ${TX(220, 65, '互異性', { fs: 16, c: RED, anchor: 'middle', fw: 800 })}
            ${TX(220, 110, '絕不重複', { fs: 13, c: '#475569', anchor: 'middle' })}
            ${TX(220, 140, '檢驗試金石', { fs: 13, c: '#475569', anchor: 'middle' })}
            ${TX(220, 180, '⚠️ 解出參數必回代', { fs: 11, c: RED, anchor: 'middle' })}

            ${BOX(300, 30, 120, 190, { fill: 'rgba(5,150,105,0.06)', stroke: GRN, r: 12 })}
            ${TX(360, 65, '無序性', { fs: 16, c: GRN, anchor: 'middle', fw: 800 })}
            ${TX(360, 110, '順序任意', { fs: 13, c: '#475569', anchor: 'middle' })}
            ${TX(360, 140, '{1,2}={2,1}', { fs: 13, c: '#475569', anchor: 'middle' })}
            ${TX(360, 180, '✓ 集合相等判斷', { fs: 11, c: GRN, anchor: 'middle' })}
          `);
        },
        caption: '互異性是含參集合求值最常遺漏的檢驗步驟。',
        example: {
          q: '若集合 \\(A=\\{1, a, a^2-a\\}\\) 中含有 3 個元素，求實數 \\(a\\) 的取值限制。',
          steps: [
            '由互異性知：\\(a \\neq 1\\)、\\(a^2-a \\neq 1\\)、\\(a^2-a \\neq a\\)。',
            '由 \\(a^2-a-1 \\neq 0\\) 得 \\(a \\neq \\frac{1\\pm\\sqrt{5}}{2}\\)；由 \\(a(a-2) \\neq 0\\) 得 \\(a \\neq 0, 2\\)。'
          ],
          ans: '\\(a \\notin \\{0, 1, 2, \\frac{1\\pm\\sqrt{5}}{2}\\}\\)'
        }
      },
      {
        sec: '1-1-1', secName: '集合及其表示方法',
        title: '常用數集記號與元素屬於關係 \\(\\in, \\notin\\)',
        points: [
          '\\(\\mathbb{N}\\) 是自然數集（含 0），\\(\\mathbb{N}^*\\) 或 \\(\\mathbb{N}_+\\) 為正整數集。',
          '\\(\\mathbb{Z}\\) 為整數集，\\(\\mathbb{Q}\\) 為有理數集（可化為分數），\\(\\mathbb{R}\\) 為實數集。',
          '元素與集合只能用 <b>屬於 \\(\\in\\)</b> 或 <b>不屬於 \\(\\notin\\)</b>，切勿用 \\(\\subseteq\\)。'
        ],
        formula: { label: '常用數集包容鏈', tex: '\\mathbb{N}^* \\subsetneq \\mathbb{N} \\subsetneq \\mathbb{Z} \\subsetneq \\mathbb{Q} \\subsetneq \\mathbb{R}' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 260', `
            <ellipse cx="220" cy="130" rx="200" ry="115" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.8"/>
            <text x="50" y="55" font-size="13" font-weight="700" fill="#64748b">實數集 ℝ (含 π, √2)</text>
            <ellipse cx="220" cy="140" rx="160" ry="92" fill="#eff6ff" stroke="#60a5fa" stroke-width="1.8"/>
            <text x="80" y="85" font-size="13" font-weight="700" fill="#2563eb">有理數集 ℚ (含 -0.5, 2/3)</text>
            <ellipse cx="220" cy="150" rx="120" ry="70" fill="#f5f3ff" stroke="#a78bfa" stroke-width="1.8"/>
            <text x="120" y="115" font-size="13" font-weight="700" fill="#7c3aed">整數集 ℤ (含 -3, -1)</text>
            <ellipse cx="220" cy="165" rx="80" ry="46" fill="#ecfdf5" stroke="#34d399" stroke-width="1.8"/>
            <text x="175" y="150" font-size="13" font-weight="700" fill="#059669">自然數 ℕ (0, 1, 2...)</text>
            <ellipse cx="220" cy="178" rx="42" ry="24" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.6"/>
            <text x="206" y="183" font-size="12" font-weight="800" fill="#d97706">ℕ* (正)</text>
          `);
        },
        caption: '0 屬於自然數集 \\(\\mathbb{N}\\)；無理數 \\(\\sqrt{2} \\notin \\mathbb{Q}\\) 但 \\(\\sqrt{2} \\in \\mathbb{R}\\)。',
        example: {
          q: '判斷符號：\\(0 \\;\\underline{\\quad}\\; \\mathbb{N}\\)，\\(\\pi \\;\\underline{\\quad}\\; \\mathbb{Q}\\)，\\(\\{-1\\} \\;\\underline{\\quad}\\; \\mathbb{Z}\\)。',
          steps: [
            '0 是自然數，故 \\(0 \\in \\mathbb{N}\\)；\\(\\pi\\) 為無理數，故 \\(\\pi \\notin \\mathbb{Q}\\)。',
            '\\(\\{-1\\}\\) 是集合而非單個元素，兩集合間應為包含關係 \\(\\{-1\\} \\subseteq \\mathbb{Z}\\)。'
          ],
          ans: '\\(\\in\\)；\\(\\notin\\)；不宜填屬於（應為包含 \\(\\subseteq\\)）'
        }
      },
      {
        sec: '1-1-1', secName: '集合及其表示方法',
        title: '集合表示法：列舉法看清元素，描述法提煉特徵',
        points: [
          '<b>列舉法</b>：將元素一一列在大括號內，適用於有限集或有規律集合。',
          '<b>描述法</b>：\\(\\{x \\in I \\mid p(x)\\}\\)，豎線左側為代表元素，右側為特徵性質。',
          '代表元素決定集合本質：\\(\\{x \\mid y=x^2\\}\\) 是數集，\\(\\{(x,y) \\mid y=x^2\\}\\) 是點集！'
        ],
        formula: { label: '描述法格式', tex: 'A = \\{ x \\in I \\mid p(x) \\}' },
        visual: (h) => {
          h.innerHTML = SV.fbox([
            { label: '自變量數集', tex: 'M = \\{x \\mid y = x^2 + 1\\} = \\mathbb{R}', color: C, fill: '#eff6ff', border: C, note: '代表元素為 x，取值為自變量定義域' },
            { label: '函數值數集', tex: 'N = \\{y \\mid y = x^2 + 1\\} = [1, +\\infty)', color: GRN, fill: '#ecfdf5', border: GRN, note: '代表元素為 y，取值為函數值域' },
            { label: '圖象點集', tex: 'P = \\{(x, y) \\mid y = x^2 + 1\\}', color: VIO, fill: '#f5f3ff', border: VIO, note: '代表元素為有序實數對 (x,y)，是拋物線上的點' }
          ], { gap: 10 });
        },
        caption: '看描述法第一眼先看豎線左邊的「代表元素」是什麼。',
        example: {
          q: '設 \\(A=\\{x \\mid y=\\sqrt{x-2}\\}\\)，\\(B=\\{y \\mid y=\\sqrt{x-2}\\}\\)，求 \\(A\\) 與 \\(B\\)。',
          steps: [
            '集合 \\(A\\) 的代表元素是 \\(x\\)，要求根號有意義，即 \\(x-2 \\ge 0 \\Rightarrow x \\ge 2\\)。',
            '集合 \\(B\\) 的代表元素是 \\(y\\)，算術平方根值非負，即 \\(y \\ge 0\\)。'
          ],
          ans: '\\(A=[2, +\\infty)\\)，\\(B=[0, +\\infty)\\)'
        }
      },
      {
        sec: '1-1-1', secName: '集合及其表示方法',
        title: '實數區間動態圖解：實心閉端點，空心開端點',
        points: [
          '閉區間 \\([a,b]\\) 包含端點（實心圓點 \\(\\bullet\\)），不等式含等號 \\(\\le\\)。',
          '開區間 \\((a,b)\\) 不含端點（空心圓圈 \\(\\circ\\)），不等式不含等號 \\(<\\)。',
          '拖動滑桿調節端點與開閉，直觀觀察數線對應區域。'
        ],
        formula: { label: '區間與集合', tex: '[a, b] = \\{x \\mid a \\le x \\le b\\}, \\quad (a, b) = \\{x \\mid a < x < b\\}' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig"></div>
            <div class="ictrl" style="display:flex;gap:12px;justify-content:center;align-items:center;">
              <label>左端 a ＝ <span class="ival" id="av">-1</span></label>
              <input type="range" id="as" min="-4" max="1" step="1" value="-1" style="width:110px">
              <label>右端 b ＝ <span class="ival" id="bv">3</span></label>
              <input type="range" id="bs" min="2" max="6" step="1" value="3" style="width:110px">
            </div></div>`;
          const draw = () => {
            const a = +h.querySelector('#as').value;
            const b = +h.querySelector('#bs').value;
            h.querySelector('#av').textContent = a;
            h.querySelector('#bv').textContent = b;
            const toX = (val) => 220 + val * 28;
            const xa = toX(a), xb = toX(b);
            let s = `<line x1="30" y1="130" x2="410" y2="130" stroke="#64748b" stroke-width="2.5"/>`;
            s += `<polygon points="418,130 406,124 406,136" fill="#64748b"/>`;
            for (let i = -5; i <= 5; i++) {
              const x = toX(i);
              s += `<line x1="${x}" y1="125" x2="${x}" y2="135" stroke="#94a3b8" stroke-width="1.5"/>`;
              s += `<text x="${x}" y="152" font-size="11" text-anchor="middle" fill="#64748b">${i}</text>`;
            }
            s += `<rect x="${xa}" y="118" width="${xb - xa}" height="24" fill="rgba(37,99,235,0.22)" stroke="${C}" stroke-width="2"/>`;
            s += `<circle cx="${xa}" cy="130" r="5.5" fill="#fff" stroke="${C}" stroke-width="3"/>`;
            s += `<circle cx="${xb}" cy="130" r="5.5" fill="${C}"/>`;
            s += `<text x="220" y="60" font-size="17" font-weight="800" text-anchor="middle" fill="${C}">區間 (${a}, ${b}] ： \\{x | ${a} < x ≤ ${b}\\}</text>`;
            s += `<text x="220" y="90" font-size="13" font-weight="700" text-anchor="middle" fill="#475569">長度 = ${b - a} （左開右閉：左空心、右實心）</text>`;
            h.querySelector('#fig').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#as').oninput = draw;
          h.querySelector('#bs').oninput = draw;
          draw();
        },
        caption: '拖動滑桿觀察區間長度 \\(b-a\\) 與數線實心/空心標記變化。',
        example: {
          q: '用區間表示不等式組 \\(-2 < x \\le 4\\) 的解集，並求區間長度。',
          steps: [
            '左端不包含 \\(-2\\) 為開端點，右端包含 \\(4\\) 為閉端點，記作 \\((-2, 4]\\)。',
            '區間長度為右端點數值減左端點數值：\\(4 - (-2) = 6\\)。'
          ],
          ans: '\\((-2, 4]\\)，區間長度為 6'
        }
      },
      /* ---------- 1-1-2 集合的基本關係 ---------- */
      {
        sec: '1-1-2', secName: '集合的基本關係',
        title: '子集是「任一元素都屬於」，相等即互相包含',
        points: [
          '<b>子集定義</b>：若對任意 \\(x \\in A\\) 均有 \\(x \\in B\\)，則 \\(A \\subseteq B\\)（\\(A\\) 包含於 \\(B\\)）。',
          '<b>真子集</b>：若 \\(A \\subseteq B\\) 且存在 \\(x_0 \\in B\\) 但 \\(x_0 \\notin A\\)，記為 \\(A \\subsetneq B\\)。',
          '<b>集合相等</b>：\\(A = B \\iff A \\subseteq B \\text{ 且 } B \\subseteq A\\)。'
        ],
        formula: { label: '子集與相等判定', tex: 'A \\subseteq B \\iff (\\forall x \\in A \\Rightarrow x \\in B)' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 260', `
            <ellipse cx="220" cy="130" rx="170" ry="105" fill="rgba(37,99,235,0.06)" stroke="${C}" stroke-width="2.2"/>
            <text x="340" y="70" font-size="17" font-weight="800" fill="${C}">集合 B</text>
            <ellipse cx="190" cy="140" rx="95" ry="65" fill="rgba(124,58,237,0.12)" stroke="${VIO}" stroke-width="2.2"/>
            <text x="190" y="125" font-size="17" font-weight="800" fill="${VIO}" text-anchor="middle">集合 A</text>
            <text x="190" y="155" font-size="12" fill="#475569" text-anchor="middle">任意 x ∈ A 均有 x ∈ B</text>
            <text x="320" y="150" font-size="13" font-weight="700" fill="${RED}">∃ x₀ ∈ B 且 x₀ ∉ A</text>
            <text x="220" y="248" font-size="13" font-weight="700" text-anchor="middle" fill="#334155">文氏圖：A 包含於 B (A ⊆ B 且 A ⫋ B)</text>
          `);
        },
        caption: '子集具有自反性（\\(A \\subseteq A\\)）與傳遞性（\\(A \\subseteq B \\land B \\subseteq C \\Rightarrow A \\subseteq C\\)）。',
        example: {
          q: '已知 \\(A=\\{1, 2\\}\\)，\\(B=\\{x \\mid x^2-3x+2=0\\}\\)，判斷兩集合關係。',
          steps: [
            '解方程 \\(x^2-3x+2=0\\) 得 \\((x-1)(x-2)=0\\)，解為 \\(x=1\\) 或 \\(x=2\\)。',
            '故 \\(B=\\{1, 2\\}\\)。因為 \\(A\\) 與 \\(B\\) 元素完全一致，互為子集。'
          ],
          ans: '\\(A = B\\)'
        }
      },
      {
        sec: '1-1-2', secName: '集合的基本關係',
        title: '空集 \\(\\varnothing\\) 是任何集合的子集，\\(n\\) 元集有 \\(2^n\\) 個子集',
        points: [
          '<b>空集特殊性</b>：不含任何元素的集合記為 \\(\\varnothing\\)，\\(\\varnothing \\subseteq A\\) 對任意集合成立。',
          '若 \\(A \\neq \\varnothing\\)，則 \\(\\varnothing \\subsetneq A\\)（空集是任何非空集合的真子集）。',
          '含 \\(n\\) 個元素的集合，子集個數為 \\(2^n\\)，真子集個數為 \\(2^n - 1\\)。'
        ],
        formula: { label: '子集計數公式', tex: '\\text{子集數} = 2^n, \\quad \\text{真子集數} = 2^n - 1, \\quad \\text{非空真子集} = 2^n - 2' },
        visual: (h) => {
          h.innerHTML = SV.fbox([
            { label: '空集性質', tex: '\\varnothing \\subseteq A, \\quad \\varnothing \\subsetneq B \\; (B \\neq \\varnothing)', color: RED, fill: '#fff1f2', border: RED, note: '空集只有一個子集，就是它本身 ∅ ⊆ ∅' },
            { label: 'n 元集計數', tex: '\\text{元素數 } n \\implies \\text{子集數 } = 2^n', color: C, fill: '#eff6ff', border: C, note: '每個元素有「選」與「不選」兩種可能，共 2×2×...×2 = 2ⁿ' },
            { label: '防漏陷阱', tex: 'A \\subseteq B \\iff A = \\varnothing \\text{ 或 } A \\neq \\varnothing', color: AMB, fill: '#fffbeb', border: AMB, note: '含參子集問題必須優先討論 A 是否為空集！' }
          ], { gap: 10 });
        },
        caption: '解含參子集題目（如 \\(A \\subseteq B\\)）時，<b>切記優先討論 \\(A = \\varnothing\\)</b>！',
        example: {
          q: '集合 \\(A=\\{a, b, c\\}\\) 的所有子集個數與非空真子集個數各為多少？',
          steps: [
            '元素個數 \\(n=3\\)，總子集數為 \\(2^3 = 8\\) 個。',
            '排除空集 \\(\\varnothing\\) 與集合自身 \\(A\\)，非空真子集數為 \\(2^3 - 2 = 6\\) 個。'
          ],
          ans: '子集 8 個，非空真子集 6 個'
        }
      },
      /* ---------- 1-1-3 集合的基本運算 ---------- */
      {
        sec: '1-1-3', secName: '集合的基本運算',
        title: '交集運算：取「且」重疊公共部分 \\(A \\cap B\\)',
        points: [
          '<b>交集定義</b>：由所有屬於 \\(A\\) <b>且</b>屬於 \\(B\\) 的元素組成的集合。',
          '運算性質：\\(A \\cap A = A\\)，\\(A \\cap \\varnothing = \\varnothing\\)，\\(A \\cap B \\subseteq A\\)。',
          '核心等價命題：\\(A \\subseteq B \\iff A \\cap B = A\\)。'
        ],
        formula: { label: '交集定義', tex: 'A \\cap B = \\{ x \\mid x \\in A \\text{ 且 } x \\in B \\}' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig"></div>
            <div class="ictrl">
              <label>重疊模式：<span class="ival" id="mv">部分交集</span></label>
              <input type="range" id="ms" min="1" max="3" step="1" value="1">
            </div></div>`;
          const draw = () => {
            const m = +h.querySelector('#ms').value;
            const labels = ['', '部分相交 A ∩ B', '包含 A ⊆ B (交集為 A)', '互斥 A ∩ B = ∅'];
            h.querySelector('#mv').textContent = labels[m];
            let s = '';
            if (m === 1) {
              s += `<circle cx="170" cy="120" r="85" fill="rgba(37,99,235,0.15)" stroke="${C}" stroke-width="2.5"/>`;
              s += `<circle cx="270" cy="120" r="85" fill="rgba(124,58,237,0.15)" stroke="${VIO}" stroke-width="2.5"/>`;
              s += `<path d="M 220 52 A 85 85 0 0 1 220 188 A 85 85 0 0 1 220 52" fill="rgba(225,29,72,0.45)" stroke="${RED}" stroke-width="2"/>`;
              s += `<text x="130" y="125" font-size="16" font-weight="800" fill="${C}">A</text>`;
              s += `<text x="310" y="125" font-size="16" font-weight="800" fill="${VIO}">B</text>`;
              s += `<text x="220" y="125" font-size="14" font-weight="800" fill="${RED}" text-anchor="middle">A ∩ B</text>`;
            } else if (m === 2) {
              s += `<ellipse cx="220" cy="120" rx="140" ry="85" fill="rgba(124,58,237,0.12)" stroke="${VIO}" stroke-width="2.5"/>`;
              s += `<ellipse cx="220" cy="120" rx="75" ry="50" fill="rgba(225,29,72,0.35)" stroke="${RED}" stroke-width="2.5"/>`;
              s += `<text x="310" y="125" font-size="16" font-weight="800" fill="${VIO}">B</text>`;
              s += `<text x="220" y="125" font-size="15" font-weight="800" fill="${RED}" text-anchor="middle">A = A ∩ B</text>`;
            } else {
              s += `<circle cx="130" cy="120" r="70" fill="rgba(37,99,235,0.15)" stroke="${C}" stroke-width="2.5"/>`;
              s += `<circle cx="310" cy="120" r="70" fill="rgba(124,58,237,0.15)" stroke="${VIO}" stroke-width="2.5"/>`;
              s += `<text x="130" y="125" font-size="16" font-weight="800" fill="${C}" text-anchor="middle">A</text>`;
              s += `<text x="310" y="125" font-size="16" font-weight="800" fill="${VIO}" text-anchor="middle">B</text>`;
              s += `<text x="220" y="125" font-size="16" font-weight="800" fill="#64748b" text-anchor="middle">A ∩ B = ∅</text>`;
            }
            h.querySelector('#fig').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#ms').oninput = draw;
          draw();
        },
        caption: '拖動滑桿切換交集的 3 種形態：相交、包含與不相交（互斥）。',
        example: {
          q: '設 \\(A=\\{x \\mid -2 \\le x \\le 3\\}\\)，\\(B=\\{x \\mid 1 < x \\le 5\\}\\)，求 \\(A \\cap B\\)。',
          steps: [
            '在數線上標出兩區間：\\(A=[-2, 3]\\)，\\(B=(1, 5]\\)。',
            '公共重疊部分左端為 \\(1\\)（不含），右端為 \\(3\\)（含）。'
          ],
          ans: '\\(A \\cap B = (1, 3]\\)'
        }
      },
      {
        sec: '1-1-3', secName: '集合的基本運算',
        title: '並集取「或」全合併，補集在全集中排除',
        points: [
          '<b>並集</b> \\(A \\cup B\\)：由屬於 \\(A\\) <b>或</b>屬於 \\(B\\) 的元素組成（\\(A \\subseteq B \\iff A \\cup B = B\\)）。',
          '<b>補集</b> \\(\\complement_U A\\)：全集 \\(U\\) 中不屬於 \\(A\\) 的元素組成的集合。',
          '德·摩根定律：\\(\\complement_U(A \\cap B) = \\complement_U A \\cup \\complement_U B\\)。'
        ],
        formula: { label: '運算法則', tex: 'A \\cup B = \\{x \\mid x \\in A \\lor x \\in B\\}, \\quad \\complement_U A = \\{x \\in U \\mid x \\notin A\\}' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 240', `
            <rect x="20" y="20" width="185" height="180" rx="10" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.8"/>
            <text x="35" y="45" font-size="13" font-weight="800" fill="#475569">並集 A ∪ B</text>
            <circle cx="85" cy="115" r="46" fill="rgba(37,99,235,0.3)" stroke="${C}" stroke-width="2"/>
            <circle cx="140" cy="115" r="46" fill="rgba(37,99,235,0.3)" stroke="${C}" stroke-width="2"/>
            <text x="112" y="185" font-size="12" font-weight="700" fill="${C}" text-anchor="middle">所有陰影總和</text>

            <rect x="235" y="20" width="185" height="180" rx="10" fill="rgba(124,58,237,0.18)" stroke="${VIO}" stroke-width="1.8"/>
            <text x="250" y="45" font-size="13" font-weight="800" fill="${VIO}">全集 U 與補集 ∁_U A</text>
            <circle cx="330" cy="115" r="44" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
            <text x="330" y="120" font-size="14" font-weight="800" fill="#64748b" text-anchor="middle">A</text>
            <text x="330" y="185" font-size="12" font-weight="700" fill="${VIO}" text-anchor="middle">紫色外圍即為 ∁_U A</text>
          `);
        },
        caption: '求補集時務必看清題目給定的全集 \\(U\\) 範圍（是 \\(\\mathbb{R}\\) 還是指定有限集）。',
        example: {
          q: '全集 \\(U=\\{1,2,3,4,5\\}\\)，\\(A=\\{1,3,4\\}\\)，\\(B=\\{3,5\\}\\)，求 \\(\\complement_U(A \\cup B)\\)。',
          steps: [
            '先求並集：\\(A \\cup B = \\{1, 3, 4, 5\\}\\)。',
            '在全集 \\(U\\) 中扣除並集元素，僅剩下 2。'
          ],
          ans: '\\(\\{2\\}\\)'
        }
      },
      /* ---------- 1-2-1 命題與量詞 ---------- */
      {
        sec: '1-2-1', secName: '命題與量詞',
        title: '命題是非真即假的陳述句，量詞分為全稱與存在',
        points: [
          '<b>命題</b>：能判斷真假的陳述句；不能判斷真假的語句不是命題。',
          '<b>全稱量詞</b>：「所有、每一個、任意」，符號 \\(\\forall\\)（All 反寫）。',
          '<b>存在量詞</b>：「存在、至少有一個、有些」，符號 \\(\\exists\\)（Exist 反寫）。'
        ],
        formula: { label: '量詞命題形式', tex: '\\forall x \\in M, p(x) \\quad (\\text{全稱命題}) \\;;\\; \\exists x \\in M, p(x) \\quad (\\text{存在命題})' },
        visual: (h) => {
          h.innerHTML = SV.fbox([
            { label: '全稱命題 ∀', tex: '\\forall x \\in M, p(x)', color: C, fill: '#eff6ff', border: C, note: '真：對論域中每一個 x 都成立；假：只要找到一個反例即可' },
            { label: '存在命題 ∃', tex: '\\exists x \\in M, p(x)', color: GRN, fill: '#ecfdf5', border: GRN, note: '真：只要能找到一個滿足條件的特例；假：全體元素無一滿足' }
          ], { gap: 14 });
        },
        caption: '疑問句、感嘆句或祈使句不是命題；開語句引入量詞後成為命題。',
        example: {
          q: '判斷真假：「\\(\\forall x \\in \\mathbb{R}, x^2+1 > 0\\)」，「\\(\\exists x \\in \\mathbb{Z}, 2x+1=0\\)」。',
          steps: [
            '對任意實數 \\(x\\)，\\(x^2 \\ge 0\\) 恆成立，故 \\(x^2+1 \\ge 1 > 0\\) 為真命題。',
            '方程 \\(2x+1=0\\) 解為 \\(x=-\\frac{1}{2} \\notin \\mathbb{Z}\\)，故無整數解，為假命題。'
          ],
          ans: '前真、後假'
        }
      },
      /* ---------- 1-2-2 全稱量詞命題與存在量詞命題的否定 ---------- */
      {
        sec: '1-2-2', secName: '量詞命題的否定',
        title: '含一個量詞的命題否定：改量詞，否結論',
        points: [
          '<b>全稱否定變存在</b>：\\(\\neg(\\forall x \\in M, p(x)) \\iff \\exists x \\in M, \\neg p(x)\\)。',
          '<b>存在否定變全稱</b>：\\(\\neg(\\exists x \\in M, p(x)) \\iff \\forall x \\in M, \\neg p(x)\\)。',
          '關鍵原則：<b>只改量詞、只否結論</b>，論域 \\(x \\in M\\) 絕對不變！'
        ],
        formula: { label: '否定轉化規則', tex: '\\neg[\\forall x \\in M, p(x)] \\;\\equiv\\; \\exists x \\in M, \\neg p(x)' },
        visual: (h) => {
          SV.stepper(h, '0 0 440 250', [
            {
              t: '<b>原命題</b>：識別全稱量詞 \\(\\forall\\) 與結論 \\(p(x)\\)',
              d: () => BOX(40, 60, 360, 120, { fill: '#eff6ff', stroke: C }) +
                TX(220, 110, '原命題：∀ x ∈ M, x² - 2x + 1 ≥ 0', { fs: 16, c: C, anchor: 'middle' }) +
                TX(220, 150, '量詞：∀ (全稱) ； 結論：≥ 0', { fs: 13, c: '#64748b', anchor: 'middle' })
            },
            {
              t: '<b>第一步：改量詞</b>（全稱 \\(\\forall\\) 變存在 \\(\\exists\\)，論域不變）',
              d: () => BOX(40, 60, 360, 120, { fill: '#eff6ff', stroke: C }) +
                TX(220, 105, '改變量詞：∃ x ∈ M', { fs: 17, c: RED, anchor: 'middle' }) +
                TX(220, 145, '注意：x ∈ M 保持原樣，不可否定！', { fs: 13, c: '#64748b', anchor: 'middle' })
            },
            {
              t: '<b>第二步：否結論</b>（將 \\(\\ge\\) 嚴格反轉為 \\(<\\)）',
              d: () => BOX(40, 40, 360, 160, { fill: '#fdf2f8', stroke: RED }) +
                TX(220, 90, '否定命題完成：', { fs: 14, c: '#64748b', anchor: 'middle' }) +
                TX(220, 130, '∃ x ∈ M, x² - 2x + 1 < 0', { fs: 18, c: RED, anchor: 'middle', fw: 800 }) +
                TX(220, 170, '≥ 0 的否定是 < 0 (嚴禁漏掉去等號)', { fs: 13, c: '#475569', anchor: 'middle' })
            }
          ], { acc: false });
        },
        caption: '拖動步驟滑桿，體驗「改量詞、否結論」的兩步標準操作。',
        example: {
          q: '寫出命題「\\(\\forall x > 0, x^2+x \\ge 2\\)」的否定，並判斷真假。',
          steps: [
            '量詞 \\(\\forall\\) 改為 \\(\\exists\\)，論域 \\(x > 0\\) 保持不變。',
            '結論 \\(x^2+x \\ge 2\\) 否定為 \\(x^2+x < 2\\)。取 \\(x=0.5\\) 滿足條件，否定為真，原命題為假。'
          ],
          ans: '否定為「\\(\\exists x > 0, x^2+x < 2\\)」，原命題為假'
        }
      },
      /* ---------- 1-2-3 充分條件與必要條件 ---------- */
      {
        sec: '1-2-3', secName: '充分條件與必要條件',
        title: '前推後則前充分，後推前則前必要',
        points: [
          '若 \\(p \\Rightarrow q\\)，則 \\(p\\) 是 \\(q\\) 的<b>充分條件</b>，\\(q\\) 是 \\(p\\) 的<b>必要條件</b>。',
          '若 \\(p \\Rightarrow q\\) 且 \\(q \\Rightarrow p\\)（\\(p \\iff q\\)），則 \\(p\\) 是 \\(q\\) 的<b>充要條件</b>。',
          '記憶訣竅：「箭頭出發處為充分，箭頭指向處為必要」。'
        ],
        formula: { label: '邏輯箭頭與判定', tex: 'p \\Rightarrow q \\; (p\\text{ 充分}), \\qquad q \\Rightarrow p \\; (p\\text{ 必要}), \\qquad p \\iff q \\; (\\text{充要})' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 240', `
            ${BOX(30, 70, 120, 90, { fill: 'rgba(37,99,235,0.08)', stroke: C, r: 10 })}
            ${TX(90, 110, '條件 p', { fs: 17, c: C, anchor: 'middle', fw: 800 })}
            ${TX(90, 140, '出發點：充分', { fs: 13, c: '#475569', anchor: 'middle' })}

            <line x1="165" y1="105" x2="265" y2="105" stroke="${C}" stroke-width="3"/>
            <polygon points="275,105 260,98 260,112" fill="${C}"/>
            <text x="220" y="95" font-size="12" font-weight="700" fill="${C}" text-anchor="middle">p ⇒ q (成立)</text>

            <line x1="265" y1="125" x2="165" y2="125" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 4"/>
            <polygon points="155,125 170,118 170,132" fill="#94a3b8"/>
            <text x="220" y="145" font-size="11" fill="#64748b" text-anchor="middle">q ⇏ p (不成立)</text>

            ${BOX(285, 70, 120, 90, { fill: 'rgba(225,29,72,0.08)', stroke: RED, r: 10 })}
            ${TX(345, 110, '結論 q', { fs: 17, c: RED, anchor: 'middle', fw: 800 })}
            ${TX(345, 140, '目的地：必要', { fs: 13, c: '#475569', anchor: 'middle' })}

            ${TX(220, 205, '此時 p 是 q 的「充分不必要條件」', { fs: 14, c: '#1e293b', anchor: 'middle', fw: 800 })}
          `);
        },
        caption: '若雙向箭頭皆成立，則互為充分必要（充要）條件。',
        example: {
          q: '設 \\(p: x=1\\)，\\(q: x^2-1=0\\)，問 \\(p\\) 是 \\(q\\) 的什麼條件？',
          steps: [
            '\\(x=1 \\Rightarrow x^2-1=0\\) 成立（\\(p \\Rightarrow q\\) 為真）。',
            '若 \\(x^2-1=0 \\Rightarrow x=\\pm 1\\)，不保證 \\(x=1\\)（\\(q \\not\\Rightarrow p\\)）。'
          ],
          ans: '充分不必要條件'
        }
      },
      {
        sec: '1-2-3', secName: '充分條件與必要條件',
        title: '集合觀點判別充要：小集合推大集合',
        points: [
          '設命題 \\(p, q\\) 的解集分別為 \\(P, Q\\)。',
          '若 \\(P \\subseteq Q\\)，則 \\(p \\Rightarrow q\\)（<b>小範圍可推大範圍，小是大的充分條件</b>）。',
          '若 \\(P = Q\\)，則 \\(p \\iff q\\)（解集相等即為充要條件）。'
        ],
        formula: { label: '集合包含與邏輯對應', tex: 'P \\subseteq Q \\iff (p \\Rightarrow q) \\iff (p \\text{ 是 } q \\text{ 的充分條件})' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig"></div>
            <div class="ictrl">
              <label>集合 P 範圍半徑 r ＝ <span class="ival" id="rv">45</span></label>
              <input type="range" id="rs" min="30" max="95" step="5" value="45">
            </div></div>`;
          const draw = () => {
            const r = +h.querySelector('#rs').value;
            h.querySelector('#rv').textContent = r;
            const Qr = 75;
            let status = '';
            let sColor = C;
            if (r < Qr) {
              status = 'P ⫋ Q ： p 是 q 的充分不必要條件 (小推大)';
              sColor = C;
            } else if (r === Qr) {
              status = 'P = Q ： p 是 q 的充要條件 (範圍等價)';
              sColor = GRN;
            } else {
              status = 'Q ⫋ P ： p 是 q 的必要不充分條件 (大不能推小)';
              sColor = RED;
            }
            let s = `<circle cx="220" cy="110" r="${Qr}" fill="rgba(124,58,237,0.12)" stroke="${VIO}" stroke-width="2.5"/>`;
            s += `<circle cx="220" cy="110" r="${r}" fill="rgba(37,99,235,0.22)" stroke="${C}" stroke-width="2.5"/>`;
            s += `<text x="220" y="105" font-size="15" font-weight="800" fill="${C}" text-anchor="middle">集合 P (半徑 ${r})</text>`;
            s += `<text x="220" y="195" font-size="13" font-weight="700" fill="${VIO}" text-anchor="middle">集合 Q (基準半徑 75)</text>`;
            s += `<text x="220" y="32" font-size="13" font-weight="800" fill="${sColor}" text-anchor="middle">${status}</text>`;
            h.querySelector('#fig').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#rs').oninput = draw;
          draw();
        },
        caption: '拖動滑桿縮放集合 \\(P\\) 範圍，觀察包含關係與條件名稱的切換。',
        example: {
          q: '已知 \\(p: x > a\\)，\\(q: x > 2\\)。若 \\(p\\) 是 \\(q\\) 的充分條件，求實數 \\(a\\) 的範圍。',
          steps: [
            '設集合 \\(P=(a, +\\infty)\\)，\\(Q=(2, +\\infty)\\)。',
            '\\(p\\) 是 \\(q\\) 的充分條件等價於 \\(P \\subseteq Q\\)（小集包含於大集）。',
            '在數線上，左端點必須滿足 \\(a \\ge 2\\)。'
          ],
          ans: '\\(a \\in [2, +\\infty)\\)'
        }
      },
      /* ---------- 1-3 本章整合與易錯辨析 ---------- */
      {
        sec: '1-3', secName: '本章整合與易錯辨析',
        title: '第一章易錯防坑清單：空集、端點、否定結論',
        points: [
          '<b>陷阱一</b>：子集問題 \\(A \\subseteq B\\) 遺漏討論 \\(A = \\varnothing\\) 的情況！',
          '<b>陷阱二</b>：區間包含問題在端點處是否能取等號判定失誤。',
          '<b>陷阱三</b>：命題否定時錯誤地連同論域 \\(x \\in M\\) 一同否定。'
        ],
        formula: { label: '空集防漏原則', tex: 'A \\subseteq B \\implies A = \\varnothing \\quad \\text{或} \\quad A \\neq \\varnothing' },
        visual: (h) => {
          h.innerHTML = `
            <div style="width:100%;padding:10px 16px;background:#fff;border-radius:12px;border:1.6px solid #e2e8f0;font-size:13px;line-height:1.7">
              <div style="font-weight:800;color:${RED};margin-bottom:6px;font-size:14px">常見致命錯誤 vs 規範正解</div>
              <table style="width:100%;border-collapse:collapse;text-align:left">
                <tr style="background:#f8fafc;color:#475569;font-weight:700">
                  <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0">易錯考點</td>
                  <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;color:${RED}">✗ 典型錯誤</td>
                  <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;color:${GRN}">✓ 規範正解</td>
                </tr>
                <tr>
                  <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9">子集包含</td>
                  <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;color:${RED}">直接解方程，漏 A=∅</td>
                  <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;color:${GRN}">先討論 A=∅ 再解</td>
                </tr>
                <tr>
                  <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9">開閉端點</td>
                  <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;color:${RED}">死記等號，憑感覺</td>
                  <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;color:${GRN}">臨界值直接代入檢驗</td>
                </tr>
                <tr>
                  <td style="padding:6px 8px">命題否定</td>
                  <td style="padding:6px 8px;color:${RED}">否定條件：∃ x ∉ M</td>
                  <td style="padding:6px 8px;color:${GRN}">論域不變：∃ x ∈ M</td>
                </tr>
              </table>
            </div>`;
        },
        caption: '做集合包含與子集計數時，永遠先問一句：「空集考慮了嗎？」',
        example: {
          q: '已知集合 \\(A=\\{x \\mid ax=1\\}\\)，若 \\(A \\subseteq \\mathbb{R}\\) 且 \\(A=\\varnothing\\)，求 \\(a\\)。',
          steps: [
            '方程 \\(ax=1\\) 無實數解時，集合 \\(A\\) 為空集 \\(\\varnothing\\)。',
            '當 \\(a=0\\) 時，方程 \\(0 \\cdot x = 1\\) 無解，故此時 \\(A=\\varnothing\\)。'
          ],
          ans: '\\(a = 0\\)'
        }
      },
      {
        sec: '1-3', secName: '本章整合與易錯辨析',
        title: '含參集合包含的端點取等動態檢驗',
        points: [
          '求參數取值範圍時，端點「能否取等」是壓軸小題的最關鍵得分點。',
          '檢驗法則：把臨界值直接代入原題，親自看集合是否仍滿足包含關係。',
          '拖動滑桿檢驗臨界端點，驗證開閉邊界的真偽。'
        ],
        formula: { label: '端點檢驗法則', tex: 'P \\subseteq Q : \\text{將臨界值代入原集合，檢驗是否仍成立 } P \\subseteq Q' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig"></div>
            <div class="ictrl">
              <label>參數 m ＝ <span class="ival" id="mv">1</span></label>
              <input type="range" id="ms" min="-1" max="4" step="1" value="1">
            </div></div>`;
          const draw = () => {
            const m = +h.querySelector('#ms').value;
            h.querySelector('#mv').textContent = m;
            const toX = (val) => 220 + val * 35;
            let s = `<line x1="40" y1="120" x2="400" y2="120" stroke="#64748b" stroke-width="2"/>`;
            s += `<polygon points="408,120 396,114 396,126" fill="#64748b"/>`;
            for (let i = -2; i <= 4; i++) {
              const x = toX(i);
              s += `<line x1="${x}" y1="115" x2="${x}" y2="125" stroke="#94a3b8"/>`;
              s += `<text x="${x}" y="142" font-size="11" text-anchor="middle" fill="#64748b">${i}</text>`;
            }
            // Interval B = (-2, 3)
            const xB1 = toX(-2), xB2 = toX(3);
            s += `<rect x="${xB1}" y="70" width="${xB2 - xB1}" height="18" fill="rgba(124,58,237,0.18)" stroke="${VIO}" stroke-width="1.8"/>`;
            s += `<circle cx="${xB1}" cy="79" r="4.5" fill="#fff" stroke="${VIO}" stroke-width="2"/>`;
            s += `<circle cx="${xB2}" cy="79" r="4.5" fill="#fff" stroke="${VIO}" stroke-width="2"/>`;
            s += `<text x="220" y="62" font-size="12" font-weight="700" fill="${VIO}" text-anchor="middle">基準集合 B = (-2, 3) (開區間)</text>`;

            // Interval A = [-1, m]
            const xA1 = toX(-1), xA2 = toX(m);
            const validSubset = m < 3 && m >= -1;
            const aColor = validSubset ? GRN : RED;
            if (m >= -1) {
              s += `<rect x="${xA1}" y="95" width="${xA2 - xA1}" height="18" fill="${validSubset ? 'rgba(5,150,105,0.25)' : 'rgba(225,29,72,0.25)'}" stroke="${aColor}" stroke-width="2"/>`;
              s += `<circle cx="${xA1}" cy="104" r="4.5" fill="${aColor}"/>`;
              s += `<circle cx="${xA2}" cy="104" r="4.5" fill="${aColor}"/>`;
              s += `<text x="220" y="180" font-size="13" font-weight="800" fill="${aColor}" text-anchor="middle">A = [-1, ${m}] ${validSubset ? '⊆ B 成立 ✓' : (m === 3 ? '⊈ B！ (m=3 時 3∈A 但 3∉B)' : '⊈ B 超出邊界 ✗')}</text>`;
            }
            h.querySelector('#fig').innerHTML = svg('0 0 440 210', s);
          };
          h.querySelector('#ms').oninput = draw;
          draw();
        },
        caption: '拖動參數 \\(m\\)，觀察 \\(m=3\\) 時閉端點能否被開區間包含。',
        example: {
          q: '設 \\(A=[-1, m]\\)，\\(B=(-2, 3)\\)。若 \\(A \\subseteq B\\)，求 \\(m\\) 的範圍。',
          steps: [
            '首先 \\(A\\) 為合法閉區間，需滿足 \\(m \\ge -1\\)。',
            '\\(A \\subseteq B\\) 要求右端點 \\(m < 3\\)（若 \\(m=3\\)，\\(3 \\in A\\) 但 \\(3 \\notin B\\)，故不能取等號）。'
          ],
          ans: '\\(-1 \\le m < 3\\)'
        }
      }
    ]
  });
})();
