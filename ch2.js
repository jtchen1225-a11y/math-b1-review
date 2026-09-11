/* ============ 第 2 章　等式與不等式 ============
   節次：2-1-1 等式性質與方程解集, 2-1-2 一元二次方程與韋達定理, 2-1-3 方程組的解集,
         2-2-1 不等式及其性質, 2-2-2 不等式的解集, 2-2-3 一元二次不等式的解法, 2-2-4 均值不等式及其應用,
         2-3 本章整合與易錯辨析
   教材對應：人教B版必修第一冊 第二章 (pp.43-83)
   邊界說明：本章重點為一元二次方程根與係數關係、三個二次關係、一元二次不等式、二元均值不等式（限兩正數）；
             不涉及柯西不等式、排序不等式或三元均值不等式。
   ============================================================ */
window.DECK = window.DECK || [];
(function () {
  const C = '#7c3aed';
  const RED = '#e11d48', GRN = '#059669', BLU = '#2563eb', VIO = '#7c3aed', AMB = '#d97706';

  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }

  const TX = (x, y, s, o = {}) =>
    `<text x="${x}" y="${y}" ${o.anchor ? `text-anchor="${o.anchor}"` : ''} font-size="${o.fs || 14}" font-weight="${o.fw || 700}" fill="${o.c || '#1e293b'}">${s}</text>`;
  const BOX = (x, y, w, h, o = {}) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r || 10}" fill="${o.fill || '#fff'}" stroke="${o.stroke || '#cbd5e1'}" stroke-width="${o.sw || 1.6}"/>`;

  window.DECK.push({
    ch: 2,
    title: '等式與不等式',
    color: C,
    sections: [
      '2-1-1 等式性質與方程解集',
      '2-1-2 一元二次方程與韋達定理',
      '2-1-3 方程組的解集',
      '2-2-1 不等式及其性質',
      '2-2-2 不等式的解集',
      '2-2-3 一元二次不等式的解法',
      '2-2-4 均值不等式及其應用',
      '2-3 本章整合與易錯辨析'
    ],
    slides: [
      /* ---------- 2-1-1 等式性質與方程解集 ---------- */
      {
        sec: '2-1-1', secName: '等式性質與方程解集',
        title: '等式性質是代數變形的基石，解方程需防增失根',
        points: [
          '等式兩邊同時加減同一代數式，或乘除同一非零代數式，等式仍成立。',
          '常用因式分解恆等式：十字相乘法、平方差、完全平方公式。',
          '兩端同除未知式時需防範其為 0 造成失根；乘方變形需防增根。'
        ],
        formula: { label: '等式基本性質', tex: 'a = b \\iff a \\pm c = b \\pm c \\;;\\; a = b \\implies ac = bc \\; (c \\neq 0 \\implies a = b)' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <polygon points="220,170 200,210 240,210" fill="#94a3b8"/>
            <line x1="80" y1="170" x2="360" y2="170" stroke="${C}" stroke-width="4"/>
            <line x1="120" y1="170" x2="120" y2="120" stroke="#64748b" stroke-width="1.8"/>
            <rect x="80" y="80" width="80" height="40" rx="6" fill="rgba(124,58,237,0.15)" stroke="${C}" stroke-width="2"/>
            <text x="120" y="105" font-size="15" font-weight="800" fill="${C}" text-anchor="middle">左端：A</text>

            <line x1="320" y1="170" x2="320" y2="120" stroke="#64748b" stroke-width="1.8"/>
            <rect x="280" y="80" width="80" height="40" rx="6" fill="rgba(124,58,237,0.15)" stroke="${C}" stroke-width="2"/>
            <text x="320" y="105" font-size="15" font-weight="800" fill="${C}" text-anchor="middle">右端：B</text>

            <text x="220" y="60" font-size="16" font-weight="800" fill="#1e293b" text-anchor="middle">天平平衡：A ＝ B</text>
            <text x="220" y="235" font-size="12" font-weight="700" fill="#64748b" text-anchor="middle">同加減 c 保持平衡；同除以 c 必須滿足 c ≠ 0</text>
          `);
        },
        caption: '天平兩端同加減同物維持平衡；同除代數式必須保證該式非零。',
        example: {
          q: '解方程 \\(x(x-2) = 3(x-2)\\)，指出常見錯誤並寫出正確解集。',
          steps: [
            '若直接兩邊約去 \\(x-2\\)，會漏掉 \\(x=2\\) 的根（因 \\(x-2\\) 可能為 0）。',
            '正確解法：移項提公因式得 \\((x-2)(x-3) = 0\\)，解得 \\(x=2\\) 或 \\(x=3\\)。'
          ],
          ans: '解集為 \\(\\{2, 3\\}\\)'
        }
      },
      /* ---------- 2-1-2 一元二次方程與韋達定理 ---------- */
      {
        sec: '2-1-2', secName: '一元二次方程與韋達定理',
        title: '判別式 \\(\\Delta\\) 決定實根個數，求根公式一統天下',
        points: [
          '方程 \\(ax^2+bx+c=0 (a \\neq 0)\\) 的根由判別式 \\(\\Delta = b^2-4ac\\) 決定。',
          '\\(\\Delta > 0\\) 兩相異實根；\\(\\Delta = 0\\) 兩相等實根；\\(\\Delta < 0\\) 無實根（解集 \\(\\varnothing\\)）。',
          '配方法是推導求根公式的核心，也是求二次函數頂點的通用工具。'
        ],
        formula: { label: '求根公式', tex: 'x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a} \\quad (\\Delta = b^2-4ac \\ge 0)' },
        visual: (h) => {
          h.innerHTML = SV.fbox([
            { label: 'Δ > 0', tex: 'b^2 - 4ac > 0 \\implies x_{1,2} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}', color: GRN, fill: '#ecfdf5', border: GRN, note: '兩個不相等的實數根，拋物線與 x 軸有 2 個交點' },
            { label: 'Δ = 0', tex: 'b^2 - 4ac = 0 \\implies x_1 = x_2 = -\\frac{b}{2a}', color: C, fill: '#f5f3ff', border: C, note: '兩個相等的實數根，拋物線與 x 軸相切（1 個切點）' },
            { label: 'Δ < 0', tex: 'b^2 - 4ac < 0 \\implies \\text{無實數解 (解集為 } \\varnothing)', color: RED, fill: '#fff1f2', border: RED, note: '沒有實數根，拋物線與 x 軸無交點' }
          ], { gap: 10 });
        },
        caption: '判別式非負（\\(\\Delta \\ge 0\\)）是方程「有實數根」的充要條件。',
        example: {
          q: '若關於 \\(x\\) 的方程 \\(x^2 - 4x + m = 0\\) 有實數根，求實數 \\(m\\) 的範圍。',
          steps: [
            '方程有實數根等價於判別式非負：\\(\\Delta = (-4)^2 - 4(1)(m) \\ge 0\\)。',
            '化簡得 \\(16 - 4m \\ge 0 \\Rightarrow 4m \\le 16 \\Rightarrow m \\le 4\\)。'
          ],
          ans: '\\(m \\in (-\\infty, 4]\\)'
        }
      },
      {
        sec: '2-1-2', secName: '一元二次方程與韋達定理',
        title: '韋達定理：根與係數對稱求值，不解方程立見分曉',
        points: [
          '若方程兩根為 \\(x_1, x_2\\)，則 \\(x_1+x_2 = -\\frac{b}{a}\\)，\\(x_1 x_2 = \\frac{c}{a}\\)。',
          '對稱平方和轉化：\\(x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1 x_2\\)。',
          '差的平方轉化：\\((x_1 - x_2)^2 = (x_1+x_2)^2 - 4x_1 x_2\\)。'
        ],
        formula: { label: '韋達定理公式', tex: 'x_1 + x_2 = -\\frac{b}{a}, \\qquad x_1 x_2 = \\frac{c}{a}' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            ${BOX(20, 30, 190, 85, { fill: '#f5f3ff', stroke: C })}
            ${TX(115, 60, '兩根之和', { fs: 14, c: C, anchor: 'middle', fw: 800 })}
            ${TX(115, 92, 'x₁ + x₂ = - b / a', { fs: 15, c: '#1e293b', anchor: 'middle', fw: 800 })}

            ${BOX(230, 30, 190, 85, { fill: '#f5f3ff', stroke: C })}
            ${TX(325, 60, '兩根之積', { fs: 14, c: C, anchor: 'middle', fw: 800 })}
            ${TX(325, 92, 'x₁ x₂ = c / a', { fs: 15, c: '#1e293b', anchor: 'middle', fw: 800 })}

            ${BOX(20, 130, 400, 95, { fill: '#fff', stroke: '#cbd5e1' })}
            ${TX(220, 155, '★ 常用對稱式秒殺轉化：', { fs: 13, c: '#475569', anchor: 'middle', fw: 800 })}
            ${TX(220, 182, 'x₁² + x₂² = (x₁ + x₂)² - 2x₁x₂', { fs: 14, c: RED, anchor: 'middle', fw: 800 })}
            ${TX(220, 208, '1/x₁ + 1/x₂ = (x₁ + x₂) / (x₁x₂)', { fs: 13, c: GRN, anchor: 'middle', fw: 700 })}
          `);
        },
        caption: '使用韋達定理解題前，必須優先確認判別式 \\(\\Delta \\ge 0\\) 成立！',
        example: {
          q: '設 \\(x_1, x_2\\) 為 \\(x^2 - 3x + 1 = 0\\) 的兩根，求 \\(x_1^2 + x_2^2\\)。',
          steps: [
            '驗證判別式 \\(\\Delta = (-3)^2 - 4(1)(1) = 5 > 0\\)，方程確有兩實根。',
            '由韋達定理得 \\(x_1+x_2 = 3\\)，\\(x_1 x_2 = 1\\)。',
            '代入得 \\(x_1^2+x_2^2 = (x_1+x_2)^2 - 2x_1 x_2 = 3^2 - 2(1) = 7\\)。'
          ],
          ans: '\\(x_1^2 + x_2^2 = 7\\)'
        }
      },
      /* ---------- 2-1-3 方程組的解集 ---------- */
      {
        sec: '2-1-3', secName: '方程組的解集',
        title: '方程組解法本質在於消元，幾何對應曲線交點',
        points: [
          '<b>消元思想</b>：代入消元與加減消元，將多元方程轉為一元方程求解。',
          '二元一次方程組解代表直線交點（相交唯一解、平行無解、重合無數解）。',
          '一二次方程組（直線與二次曲線）代入後轉化為一元二次方程判定交點個數。'
        ],
        formula: { label: '方程組與交點', tex: '\\begin{cases} y = x + 1 \\\\ y = x^2 - 1 \\end{cases} \\iff \\text{求直線與拋物線的公共交點坐標}' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <line x1="40" y1="190" x2="400" y2="190" stroke="#94a3b8" stroke-width="1.8"/>
            <polygon points="408,190 396,184 396,196" fill="#94a3b8"/>
            <line x1="160" y1="230" x2="160" y2="20" stroke="#94a3b8" stroke-width="1.8"/>
            <polygon points="160,12 154,24 166,24" fill="#94a3b8"/>

            <path d="M 60,30 Q 160,260 260,30" fill="none" stroke="${C}" stroke-width="2.5"/>
            <text x="240" y="45" font-size="12" font-weight="700" fill="${C}">y = x² - 1</text>

            <line x1="80" y1="230" x2="280" y2="30" stroke="${RED}" stroke-width="2.2"/>
            <text x="290" y="65" font-size="12" font-weight="700" fill="${RED}">y = x + 1</text>

            <circle cx="120" cy="190" r="5" fill="${RED}"/>
            <text x="85" y="185" font-size="12" font-weight="800" fill="${RED}">(-1, 0)</text>

            <circle cx="240" cy="70" r="5" fill="${RED}"/>
            <text x="250" y="90" font-size="12" font-weight="800" fill="${RED}">(2, 3)</text>
          `);
        },
        caption: '方程組解集 \\(\\{(2, 3), (-1, 0)\\}\\) 正是直線與拋物線的交點坐標集合。',
        example: {
          q: '解方程組 \\(\\begin{cases} y = x + 1 \\\\ y = x^2 - 1 \\end{cases}\\)，求其解集。',
          steps: [
            '代入消去 \\(y\\)：\\(x+1 = x^2-1 \\Rightarrow x^2-x-2=0\\)。',
            '因式分解 \\((x-2)(x+1)=0\\)，解得 \\(x=2\\) 或 \\(x=-1\\)。',
            '分別代入求 \\(y\\)：\\(x=2 \\Rightarrow y=3\\)；\\(x=-1 \\Rightarrow y=0\\)。'
          ],
          ans: '解集為 \\(\\{(2, 3), (-1, 0)\\}\\)'
        }
      },
      /* ---------- 2-2-1 不等式及其性質 ---------- */
      {
        sec: '2-2-1', secName: '不等式及其性質',
        title: '不等式同加不變號，乘負方向必反轉',
        points: [
          '<b>同加性</b>：\\(a > b \\iff a+c > b+c\\)（兩端同加減任意代數式，符號不變）。',
          '<b>同乘負反號</b>：\\(c > 0 \\implies ac > bc\\)；<b>\\(c < 0 \\implies ac < bc\\)</b>（乘負號顛倒）。',
          '<b>同向可加性</b>：\\(a > b \\land c > d \\implies a+c > b+d\\)（只能同向加，不可同向減！）。'
        ],
        formula: { label: '不等式性質核心', tex: 'a > b, c < 0 \\implies ac < bc \\;;\\; a > b, c > d \\implies a+c > b+d' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            ${BOX(20, 25, 400, 90, { fill: '#eff6ff', stroke: BLU })}
            ${TX(40, 55, '同乘正數 (c > 0)：方向不變', { fs: 15, c: BLU, fw: 800 })}
            ${TX(40, 90, '例： 3 > 2  兩邊 × 2  ⟹  6 > 4  (符號保持 >)', { fs: 14, c: '#334155' })}

            ${BOX(20, 130, 400, 95, { fill: '#fff1f2', stroke: RED })}
            ${TX(40, 160, '同乘負數 (c < 0)：方向反轉！', { fs: 15, c: RED, fw: 800 })}
            ${TX(40, 195, '例： 3 > 2  兩邊 × (-1) ⟹  -3 < -2  (符號由 > 變 <)', { fs: 14, c: '#334155' })}
          `);
        },
        caption: '不等式嚴禁「同向相減」；需要相減時，應先乘 \\(-1\\) 反轉符號再同向相加。',
        example: {
          q: '已知 \\(1 < a < 3\\)，\\(2 < b < 4\\)，求 \\(a-b\\) 的取值範圍。',
          steps: [
            '由 \\(2 < b < 4\\) 兩邊同乘 \\(-1\\) 變號得 \\(-4 < -b < -2\\)。',
            '利用同向可加性：\\(1 + (-4) < a + (-b) < 3 + (-2) \\Rightarrow -3 < a-b < 1\\)。'
          ],
          ans: '\\(a-b \\in (-3, 1)\\)'
        }
      },
      {
        sec: '2-2-1', secName: '不等式及其性質',
        title: '不等式真假命題辨析：條件不全就是陷阱',
        points: [
          '<b>倒數不等式</b>：若 \\(a > b > 0\\)，則 \\(\\frac{1}{a} < \\frac{1}{b}\\)（必須同號才能倒數反號）。',
          '<b>平反性質</b>：若 \\(a > b > 0\\)，則 \\(a^2 > b^2\\)；若 \\(a < b < 0\\)，則反而 \\(a^2 > b^2\\)！',
          '<b>同除未知數</b>：未指明符號前，嚴禁在不等式兩邊隨意除以字母。'
        ],
        formula: { label: '倒數性質前提', tex: 'ab > 0 \\land a > b \\iff \\frac{1}{a} < \\frac{1}{b}' },
        visual: (h) => {
          h.innerHTML = SV.fbox([
            { label: '同號倒數反向', tex: 'a > b > 0 \\implies \\frac{1}{a} < \\frac{1}{b}', color: GRN, fill: '#ecfdf5', border: GRN, note: '如 3 > 2 ⇒ 1/3 < 1/2 (成立)' },
            { label: '異號倒數不反', tex: 'a > 0 > b \\implies \\frac{1}{a} > 0 > \\frac{1}{b} \\implies \\frac{1}{a} > \\frac{1}{b}', color: RED, fill: '#fff1f2', border: RED, note: '如 2 > -3 但 1/2 > -1/3 (方向未反轉！)' },
            { label: '乘平方需防 0', tex: 'a > b \\not\\implies ac^2 > bc^2 \\quad (c=0 \\text{ 時 } 0=0)', color: AMB, fill: '#fffbeb', border: AMB, note: '高頻易錯考點：未聲明 c ≠ 0 時命題為假' }
          ], { gap: 10 });
        },
        caption: '判斷不等式命題真假時，特值法（代入 0、負數、異號數）是破題利器。',
        example: {
          q: '判斷真假：「若 \\(a > b\\)，則 \\(ac^2 > bc^2\\)」；「若 \\(a > b\\)，則 \\(\\frac{1}{a} < \\frac{1}{b}\\)」。',
          steps: [
            '當 \\(c=0\\) 時，\\(ac^2 = bc^2 = 0\\)，不等號不成立，故第一個命題為假。',
            '取 \\(a=1, b=-2\\)，\\(a > b\\) 但 \\(\\frac{1}{a}=1 > -\\frac{1}{2}=\\frac{1}{b}\\)，故第二個命題亦為假。'
          ],
          ans: '兩者皆為假命題'
        }
      },
      /* ---------- 2-2-2 不等式的解集 ---------- */
      {
        sec: '2-2-2', secName: '不等式的解集',
        title: '絕對值不等式：數線距離模型，小於夾中間大於分兩邊',
        points: [
          '幾何意義：\\(|x-a|\\) 表示數線上點 \\(x\\) 到點 \\(a\\) 的距離。',
          '<b>小於取中間</b>：\\(|x-a| < c (c>0) \\iff a-c < x < a+c\\)。',
          '<b>大於分兩邊</b>：\\(|x-a| > c (c>0) \\iff x > a+c \\text{ 或 } x < a-c\\)。'
        ],
        formula: { label: '絕對值不等式解集', tex: '|x-a| < c \\iff -c < x-a < c \\iff a-c < x < a+c' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 240', `
            <line x1="30" y1="130" x2="410" y2="130" stroke="#64748b" stroke-width="2.5"/>
            <polygon points="418,130 406,124 406,136" fill="#64748b"/>

            <circle cx="220" cy="130" r="5" fill="${C}"/>
            <text x="220" y="160" font-size="14" font-weight="800" fill="${C}" text-anchor="middle">中心 a</text>

            <rect x="120" y="122" width="200" height="16" fill="rgba(124,58,237,0.25)" stroke="${C}" stroke-width="2"/>
            <circle cx="120" cy="130" r="5" fill="#fff" stroke="${C}" stroke-width="2.5"/>
            <text x="120" y="160" font-size="13" font-weight="700" fill="#475569" text-anchor="middle">a - c</text>

            <circle cx="320" cy="130" r="5" fill="#fff" stroke="${C}" stroke-width="2.5"/>
            <text x="320" y="160" font-size="13" font-weight="700" fill="#475569" text-anchor="middle">a + c</text>

            <path d="M 120,105 Q 170,85 220,105" fill="none" stroke="${RED}" stroke-width="1.8"/>
            <text x="170" y="80" font-size="12" font-weight="700" fill="${RED}" text-anchor="middle">距離 c</text>
            <path d="M 220,105 Q 270,85 320,105" fill="none" stroke="${RED}" stroke-width="1.8"/>
            <text x="270" y="80" font-size="12" font-weight="700" fill="${RED}" text-anchor="middle">距離 c</text>

            <text x="220" y="45" font-size="15" font-weight="800" fill="${C}" text-anchor="middle">|x - a| < c ： 距離中心點 a 不超過 c</text>
          `);
        },
        caption: '以「幾何距離」理解絕對值不等式，對稱直觀且絕不遺漏端點。',
        example: {
          q: '解不等式 \\(|2x - 3| \\le 5\\)，並將解集寫為區間形式。',
          steps: [
            '去絕對值轉為雙向不等式：\\(-5 \\le 2x - 3 \\le 5\\)。',
            '各項同加 3 得 \\(-2 \\le 2x \\le 8\\)；同除以 2 得 \\(-1 \\le x \\le 4\\)。'
          ],
          ans: '\\([-1, 4]\\)'
        }
      },
      /* ---------- 2-2-3 一元二次不等式的解法 ---------- */
      {
        sec: '2-2-3', secName: '一元二次不等式的解法',
        title: '三個「二次」緊密相連：圖象高低定解集',
        points: [
          '二次函數 \\(y=ax^2+bx+c\\) 圖象在 \\(x\\) 軸上方部分對應 \\(ax^2+bx+c > 0\\)。',
          '拋物線與 \\(x\\) 軸交點橫坐標即為方程 \\(ax^2+bx+c=0\\) 的實根。',
          '解不等式第一步：首項係數化正（\\(a > 0\\)），開口向上便於統一規律。'
        ],
        formula: { label: '二次三位一體', tex: 'y = ax^2+bx+c \\quad \\leftrightarrow \\quad ax^2+bx+c = 0 \\quad \\leftrightarrow \\quad ax^2+bx+c > 0' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 240', `
            <line x1="30" y1="160" x2="410" y2="160" stroke="#94a3b8" stroke-width="2"/>
            <polygon points="418,160 406,154 406,166" fill="#94a3b8"/>
            <text x="405" y="180" font-size="12" fill="#64748b">x</text>

            <path d="M 60,30 Q 220,280 380,30" fill="none" stroke="${C}" stroke-width="3"/>

            <circle cx="120" cy="160" r="5" fill="${C}"/>
            <text x="120" y="185" font-size="13" font-weight="800" fill="${C}" text-anchor="middle">x₁</text>

            <circle cx="320" cy="160" r="5" fill="${C}"/>
            <text x="320" y="185" font-size="13" font-weight="800" fill="${C}" text-anchor="middle">x₂</text>

            <text x="80" y="65" font-size="13" font-weight="800" fill="${GRN}">y > 0 (x < x₁)</text>
            <text x="360" y="65" font-size="13" font-weight="800" fill="${GRN}">y > 0 (x > x₂)</text>
            <text x="220" y="215" font-size="13" font-weight="800" fill="${RED}" text-anchor="middle">y < 0 (x₁ < x < x₂)</text>
          `);
        },
        caption: '二次不等式解集的實質，就是拋物線高於或低於 \\(x\\) 軸的區間。',
        example: {
          q: '已知二次函數 \\(y=x^2-2x-3\\)，求 \\(x^2-2x-3 < 0\\) 的解集。',
          steps: [
            '解方程 \\(x^2-2x-3=0 \\Rightarrow (x-3)(x+1)=0\\)，兩根為 \\(x_1=-1, x_2=3\\)。',
            '拋物線開口向上，小於 0 對應軸下方部分，取兩根中間。'
          ],
          ans: '\\((-1, 3)\\)'
        }
      },
      {
        sec: '2-2-3', secName: '一元二次不等式的解法',
        title: '標準口訣：首項化正、求根、大於兩旁、小於中間',
        points: [
          '<b>第一步（化正）</b>：若二次項係數為負，兩邊同乘 \\(-1\\) 變號使其 \\(a > 0\\)。',
          '<b>第二步（求根）</b>：十字相乘或求根公式求出兩實根 \\(x_1 < x_2\\)。',
          '<b>第三步（定區間）</b>：「大於取兩旁（\\(x < x_1 \\lor x > x_2\\)），小於取中間（\\(x_1 < x < x_2\\)）」。'
        ],
        formula: { label: '口訣與標準解集', tex: 'a>0: \\; (x-x_1)(x-x_2)>0 \\iff x<x_1 \\lor x>x_2 \\;;\\; (x-x_1)(x-x_2)<0 \\iff x_1<x<x_2' },
        visual: (h) => {
          h.innerHTML = SV.fbox([
            { label: '大於取兩旁', tex: '(x-1)(x-4) > 0 \\implies x \\in (-\\infty, 1) \\cup (4, +\\infty)', color: C, fill: '#f5f3ff', border: C, note: '開口向上拋物線高於 x 軸的兩側區域' },
            { label: '小於取中間', tex: '(x-1)(x-4) < 0 \\implies x \\in (1, 4)', color: GRN, fill: '#ecfdf5', border: GRN, note: '開口向上拋物線低於 x 軸的中間凹陷區域' }
          ], { gap: 14 });
        },
        caption: '若 \\(\\Delta \\le 0\\) 需結合圖象：\\(x^2+1 > 0\\) 解集為 \\(\\mathbb{R}\\)，\\(x^2+1 < 0\\) 為 \\(\\varnothing\\)。',
        example: {
          q: '解不等式 \\(-2x^2 + 5x + 3 \\ge 0\\)。',
          steps: [
            '兩端同乘 \\(-1\\) 首項化正：\\(2x^2 - 5x - 3 \\le 0\\)（注意不等號轉向）。',
            '十字相乘分解：\\((2x+1)(x-3) \\le 0\\)，根為 \\(-\\frac{1}{2}\\) 與 \\(3\\)。',
            '小於取中間閉區間：\\([-\\frac{1}{2}, 3]\\)。'
          ],
          ans: '\\([-\\frac{1}{2}, 3]\\)'
        }
      },
      {
        sec: '2-2-3', secName: '一元二次不等式',
        title: '含參二次不等式：拖動參數看拋物線與解集切換',
        points: [
          '解含參不等式 \\((x-1)(x-a) > 0\\) 時，兩根大小由參數 \\(a\\) 決定。',
          '當 \\(a > 1\\) 時解集為 \\(x<1 \\lor x>a\\)；當 \\(a < 1\\) 時為 \\(x<a \\lor x>1\\)。',
          '當 \\(a = 1\\) 兩根重合時，式子為 \\((x-1)^2 > 0\\)，解集為 \\(\\{x \\mid x \\neq 1\\}\\)。'
        ],
        formula: { label: '分類討論法則', tex: '(x-1)(x-a)>0: \\quad a>1 \\implies x<1 \\lor x>a \\;;\\; a=1 \\implies x \\neq 1 \\;;\\; a<1 \\implies x<a \\lor x>1' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig"></div>
            <div class="ictrl">
              <label>參數 a ＝ <span class="ival" id="av">2.5</span></label>
              <input type="range" id="as" min="-1" max="3" step="0.5" value="2.5">
            </div></div>`;
          const draw = () => {
            const a = +h.querySelector('#as').value;
            h.querySelector('#av').textContent = a;
            let status = '';
            let sColor = C;
            if (a > 1) {
              status = `a > 1 ： 解集為 (-∞, 1) ∪ (${a}, +∞)`;
              sColor = C;
            } else if (a === 1) {
              status = `a = 1 (兩根重合) ： 解集為 {x | x ≠ 1}`;
              sColor = RED;
            } else {
              status = `a < 1 ： 解集為 (-∞, ${a}) ∪ (1, +∞)`;
              sColor = GRN;
            }
            const toX = (val) => 180 + val * 55;
            let s = `<line x1="30" y1="130" x2="410" y2="130" stroke="#94a3b8" stroke-width="2"/>`;
            s += `<polygon points="418,130 406,124 406,136" fill="#94a3b8"/>`;
            const x1 = toX(1), xa = toX(a);
            const xmid = (x1 + xa) / 2;
            const ymid = 130 + (a === 1 ? 0 : 55);
            s += `<path d="M ${xmid - 110},50 Q ${xmid},${ymid + 70} ${xmid + 110},50" fill="none" stroke="${sColor}" stroke-width="2.6"/>`;
            s += `<circle cx="${x1}" cy="130" r="5" fill="#fff" stroke="${C}" stroke-width="2.5"/>`;
            s += `<text x="${x1}" y="155" font-size="13" font-weight="800" fill="${C}" text-anchor="middle">1</text>`;
            if (a !== 1) {
              s += `<circle cx="${xa}" cy="130" r="5" fill="#fff" stroke="${sColor}" stroke-width="2.5"/>`;
              s += `<text x="${xa}" y="155" font-size="13" font-weight="800" fill="${sColor}" text-anchor="middle">${a}</text>`;
            }
            s += `<text x="220" y="32" font-size="14" font-weight="800" fill="${sColor}" text-anchor="middle">${status}</text>`;
            h.querySelector('#fig').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#as').oninput = draw;
          draw();
        },
        caption: '拖動參數 \\(a\\)，觀察 \\(a=1\\) 臨界點處兩根重合時解集的突變。',
        example: {
          q: '解關於 \\(x\\) 的不等式 \\(x^2 - (a+2)x + 2a > 0\\)。',
          steps: [
            '原式因式分解為 \\((x-2)(x-a) > 0\\)，兩根分別為 2 與 \\(a\\)。',
            '當 \\(a > 2\\) 時解集為 \\((-\\infty, 2) \\cup (a, +\\infty)\\)；當 \\(a < 2\\) 時為 \\((-\\infty, a) \\cup (2, +\\infty)\\)；當 \\(a=2\\) 時為 \\(\\{x \\mid x \\neq 2\\}\\)。'
          ],
          ans: '按 \\(a>2, a=2, a<2\\) 分三類討論'
        }
      },
      /* ---------- 2-2-4 均值不等式及其應用 ---------- */
      {
        sec: '2-2-4', secName: '均值不等式及其應用',
        title: '均值不等式：算術平均大於等於幾何平均',
        points: [
          '對任意正數 \\(a, b > 0\\)，有 \\(\\frac{a+b}{2} \\ge \\sqrt{ab}\\)，當且僅當 \\(a=b\\) 時等號成立。',
          '幾何解釋：直徑為 \\(a+b\\) 的半圓中，半徑 \\(\\frac{a+b}{2}\\) 大於等於半弦長 \\(\\sqrt{ab}\\)。',
          '重要變形：\\(ab \\le \\left(\\frac{a+b}{2}\\right)^2\\)；\\(a^2+b^2 \\ge 2ab\\)（實數範圍恆成立）。'
        ],
        formula: { label: '基本不等式', tex: '\\frac{a+b}{2} \\ge \\sqrt{ab} \\quad (a>0, b>0, \\text{等號 } \\iff a=b)' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <path d="M 40,200 A 180,180 0 0,1 400,200 Z" fill="rgba(124,58,237,0.08)" stroke="${C}" stroke-width="2"/>
            <line x1="40" y1="200" x2="400" y2="200" stroke="#64748b" stroke-width="2.5"/>

            <circle cx="220" cy="200" r="4" fill="#1e293b"/>
            <text x="220" y="222" font-size="12" font-weight="700" fill="#64748b" text-anchor="middle">圓心 O</text>

            <line x1="220" y1="200" x2="220" y2="20" stroke="${BLU}" stroke-width="2.5" stroke-dasharray="4 4"/>
            <text x="235" y="100" font-size="13" font-weight="800" fill="${BLU}">半徑 (a+b)/2</text>

            <line x1="140" y1="200" x2="140" y2="78" stroke="${RED}" stroke-width="2.8"/>
            <text x="100" y="130" font-size="13" font-weight="800" fill="${RED}">半弦 √ab</text>
            <circle cx="140" cy="200" r="3.5" fill="${RED}"/>
            <circle cx="140" cy="78" r="3.5" fill="${RED}"/>

            <text x="90" y="222" font-size="13" font-weight="700" fill="#334155" text-anchor="middle">a</text>
            <text x="270" y="222" font-size="13" font-weight="700" fill="#334155" text-anchor="middle">b</text>
          `);
        },
        caption: '半圓中直角三角形斜邊（半徑）大於等於直角邊（半弦長）。',
        example: {
          q: '已知 \\(a > 0\\)，求 \\(a + \\frac{4}{a}\\) 的最小值及取得最小值時的 \\(a\\) 值。',
          steps: [
            '因為 \\(a > 0\\)，由均值不等式得 \\(a + \\frac{4}{a} \\ge 2\\sqrt{a \\cdot \\frac{4}{a}} = 2\\sqrt{4} = 4\\)。',
            '等號成立條件：\\(a = \\frac{4}{a} \\Rightarrow a^2 = 4 \\Rightarrow a = 2\\)（滿足 \\(a > 0\\)）。'
          ],
          ans: '最小值為 4，此時 \\(a=2\\)'
        }
      },
      {
        sec: '2-2-4', secName: '均值不等式及其應用',
        title: '均值求最值三字訣：一正、二定、三相等',
        points: [
          '<b>一正</b>：各項必須保證為正數（若有負數需先提負號轉為正數）。',
          '<b>二定</b>：和為定值時積有最大值，積為定值時和有最小值！',
          '<b>三相等</b>：等號成立的條件必須在自變量取值範圍內能夠取得到！'
        ],
        formula: { label: '求最值核心結論', tex: 'a+b = S (\\text{定值}) \\implies ab \\le \\frac{S^2}{4} \\;;\\; ab = P (\\text{定值}) \\implies a+b \\ge 2\\sqrt{P}' },
        visual: (h) => {
          h.innerHTML = SV.fbox([
            { label: '一正 (Positive)', tex: 'a > 0, \\; b > 0', color: C, fill: '#f5f3ff', border: C, note: '若包含負數，無法直接開根號或均值不等式失效' },
            { label: '二定 (Constant)', tex: 'ab = P (\\text{常數}) \\implies a+b \\ge 2\\sqrt{P}', color: GRN, fill: '#ecfdf5', border: GRN, note: '乘積消去變量變定值，或和為定值求乘積上界' },
            { label: '三相等 (Equality)', tex: 'a = b \\in \\text{定義域}', color: RED, fill: '#fff1f2', border: RED, note: '若等號取不到，則最小值不是該臨界值（需用單調性）' }
          ], { gap: 10 });
        },
        caption: '三個條件缺一不可；尤其是「三相等」，取不到等號是最常見的扣分點。',
        example: {
          q: '求函數 \\(y = x + \\frac{1}{x-1} \\; (x > 1)\\) 的最小值。',
          steps: [
            '配湊成定積：\\(y = (x-1) + \\frac{1}{x-1} + 1\\)。',
            '因為 \\(x > 1\\)，\\(x-1 > 0\\)，由均值不等式：\\((x-1) + \\frac{1}{x-1} \\ge 2\\sqrt{1} = 2\\)。',
            '故 \\(y \\ge 2 + 1 = 3\\)，當且僅當 \\(x-1 = 1 \\Rightarrow x = 2\\) 時等號成立。'
          ],
          ans: '最小值為 3，此時 \\(x=2\\)'
        }
      },
      {
        sec: '2-2-4', secName: '均值不等式經典配湊',
        title: '均值不等式高級技巧：配湊常數與「1 的代換」',
        points: [
          '<b>加減常數配湊</b>：分母有變量時，分子補項配出分母結構（如 \\(x + \\frac{1}{x-1}\\)）。',
          '<b>乘除係數配湊</b>：配湊係數使展開相乘時交叉項抵消為常數。',
          '<b>「1 的代換」</b>：已知 \\(a+b=1\\)，求 \\(\\frac{1}{a}+\\frac{4}{b}\\) 時乘入 \\((a+b)\\) 展開！'
        ],
        formula: { label: '「1 的代換」公式模型', tex: '(\\frac{m}{a}+\\frac{n}{b})(a+b) = m + n + \\frac{mb}{a} + \\frac{na}{b} \\ge m+n+2\\sqrt{mn}' },
        visual: (h) => {
          h.innerHTML = SV.fbox([
            { label: '已知條件', tex: 'x + y = 1 \\quad (x>0, y>0)', color: C, fill: '#f5f3ff', border: C },
            { label: '技巧：乘 1', tex: '(\\frac{1}{x} + \\frac{4}{y}) \\cdot 1 = (\\frac{1}{x} + \\frac{4}{y})(x + y) = 1 + 4 + \\frac{y}{x} + \\frac{4x}{y}', color: BLU, fill: '#eff6ff', border: BLU },
            { label: '均值求極值', tex: '\\ge 5 + 2\\sqrt{\\frac{y}{x} \\cdot \\frac{4x}{y}} = 5 + 4 = 9', color: RED, fill: '#fff1f2', border: RED, note: '等號成立條件：y/x = 4x/y 且 x+y=1 ⇒ x=1/3, y=2/3' }
          ], { gap: 10 });
        },
        caption: '「1 的代換」是高一等式條件求最值的最經典解法。',
        example: {
          q: '已知正數 \\(x, y\\) 滿足 \\(x+2y=1\\)，求 \\(\\frac{1}{x} + \\frac{2}{y}\\) 的最小值。',
          steps: [
            '將原式乘入 \\((x+2y)\\)：\\((\\frac{1}{x}+\\frac{2}{y})(x+2y) = 1 + 4 + \\frac{2y}{x} + \\frac{2x}{y}\\)。',
            '由均值不等式：\\(\\frac{2y}{x} + \\frac{2x}{y} \\ge 2\\sqrt{4} = 4\\)，總和 \\(\\ge 5 + 4 = 9\\)。',
            '當且僅當 \\(\\frac{2y}{x} = \\frac{2x}{y} \\Rightarrow x = y = \\frac{1}{3}\\) 時等號成立。'
          ],
          ans: '最小值為 9'
        }
      },
      {
        sec: '2-2-4', secName: '均值不等式生活應用',
        title: '生活建模：周長固定求最大矩形面積',
        points: [
          '用長度為 \\(L=40\\) 的鐵絲圍成矩形，設長為 \\(x\\)，寬為 \\(20-x\\)。',
          '矩形面積 \\(S = x(20-x)\\)，由均值不等式：\\(S \\le \\left(\\frac{x+20-x}{2}\\right)^2 = 100\\)。',
          '當且僅當長等於寬（\\(x = 20-x = 10\\)，即正方形）時面積最大！'
        ],
        formula: { label: '和定積最大', tex: 'x + y = 20 \\implies xy \\le \\left(\\frac{x+y}{2}\\right)^2 = 100 \\quad (x=y=10 \\text{ 時最大})' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig"></div>
            <div class="ictrl">
              <label>矩形長度 x ＝ <span class="ival" id="xv">10</span> （寬度為 20 - x）</label>
              <input type="range" id="xs" min="2" max="18" step="1" value="10">
            </div></div>`;
          const draw = () => {
            const x = +h.querySelector('#xs').value;
            const y = 20 - x;
            const area = x * y;
            h.querySelector('#xv').textContent = x;
            const w = x * 13, hgt = y * 8;
            const isMax = x === 10;
            const strokeCol = isMax ? RED : C;
            let s = `<rect x="${220 - w / 2}" y="${115 - hgt / 2}" width="${w}" height="${hgt}" rx="6" fill="rgba(124,58,237,0.18)" stroke="${strokeCol}" stroke-width="${isMax ? 3 : 2}"/>`;
            s += `<text x="220" y="${115 - hgt / 2 - 10}" font-size="13" font-weight="700" fill="#475569" text-anchor="middle">長 x = ${x}</text>`;
            s += `<text x="${220 + w / 2 + 15}" y="120" font-size="13" font-weight="700" fill="#475569" text-anchor="start">寬 y = ${y}</text>`;
            s += `<text x="220" y="122" font-size="16" font-weight="800" fill="${strokeCol}" text-anchor="middle">面積 S = ${area}</text>`;
            s += `<text x="220" y="200" font-size="13" font-weight="800" fill="${isMax ? RED : '#64748b'}" text-anchor="middle">${isMax ? '★ 正方形 (x=y=10) 面積達最大值 100 ✓' : '偏離正方形，面積小於 100'}</text>`;
            h.querySelector('#fig').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#xs').oninput = draw;
          draw();
        },
        caption: '拖動長度 \\(x\\)，直觀體驗為何「長寬越接近，面積越大」。',
        example: {
          q: '某農場用 60 公尺籬笆圍一面靠牆的矩形菜園，求菜園最大面積。',
          steps: [
            '設垂直於牆的邊長為 \\(x\\)，則平行於牆的邊長為 \\(60-2x (0 < x < 30)\\)。',
            '面積 \\(S = x(60-2x) = \\frac{1}{2} \\cdot (2x)(60-2x)\\)。',
            '由均值不等式：\\(S \\le \\frac{1}{2} \\left(\\frac{2x+60-2x}{2}\\right)^2 = \\frac{1}{2} \\cdot 30^2 = 450\\)（\\(x=15\\) 時取得）。'
          ],
          ans: '最大面積為 450 平方公尺'
        }
      },
      /* ---------- 2-3 本章整合與易錯辨析 ---------- */
      {
        sec: '2-3', secName: '本章整合與易錯辨析',
        title: '第二章易錯防坑清單：未知數同除、等號取不到',
        points: [
          '<b>陷阱一</b>：不等式兩端同乘或同除未知量，忽略該量可能為 0 或負數！',
          '<b>陷阱二</b>：均值不等式求最值時，盲目套公式卻未檢驗等號能否取得。',
          '<b>陷阱三</b>：同向不等式相減（如由 \\(a>b, c>d\\) 推 \\(a-c>b-d\\) 屬重大錯誤）。'
        ],
        formula: { label: '最值檢驗金律', tex: '\\text{最小值 } m \\iff \\exists x_0 \\in \\text{定義域 使 } f(x_0) = m' },
        visual: (h) => {
          h.innerHTML = `
            <div style="width:100%;padding:10px 16px;background:#fff;border-radius:12px;border:1.6px solid #e2e8f0;font-size:13px;line-height:1.7">
              <div style="font-weight:800;color:${RED};margin-bottom:6px;font-size:14px">常見致命錯誤 vs 規範正解</div>
              <table style="width:100%;border-collapse:collapse;text-align:left">
                <tr style="background:#f8fafc;color:#475569;font-weight:700">
                  <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0">易錯點</td>
                  <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;color:${RED}">✗ 典型錯誤</td>
                  <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;color:${GRN}">✓ 規範正解</td>
                </tr>
                <tr>
                  <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9">方程同除</td>
                  <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;color:${RED}">直接約去公因式 (x-2)</td>
                  <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;color:${GRN}">移項因式分解，防失根</td>
                </tr>
                <tr>
                  <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9">均值等號</td>
                  <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;color:${RED}">套公式算得 2 即寫答案</td>
                  <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;color:${GRN}">解 a=b 驗證在定義域內</td>
                </tr>
                <tr>
                  <td style="padding:6px 8px">不等式運算</td>
                  <td style="padding:6px 8px;color:${RED}">同向直接相減 a-c > b-d</td>
                  <td style="padding:6px 8px;color:${GRN}">先乘 -1 變號後再相加</td>
                </tr>
              </table>
            </div>`;
        },
        caption: '每次使用均值不等式求最值，務必在草稿紙上解方程驗證等號！',
        example: {
          q: '求 \\(f(x) = x + \\frac{1}{x} \\; (x \\ge 2)\\) 的最小值，檢驗能否直接用均值不等式。',
          steps: [
            '若直接套均值不等式：\\(x + \\frac{1}{x} \\ge 2\\sqrt{1} = 2\\)，等號需 \\(x = \\frac{1}{x} \\Rightarrow x = 1\\)。',
            '但定義域要求 \\(x \\ge 2\\)，\\(x=1\\) 取不到！等號不成立，最小值絕非 2。',
            '正確解法：函數在 \\([2, +\\infty)\\) 單調遞增，當 \\(x=2\\) 時取最小值 \\(2 + \\frac{1}{2} = 2.5\\)。'
          ],
          ans: '最小值為 2.5（等號取不到時均值失效，改用單調性）'
        }
      }
    ]
  });
})();
