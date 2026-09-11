/* ============ 第 3 章　函數的概念與性質 ============
   節次：3-1-1 函數概念與表示方法, 3-1-2 函數的單調性與最值, 3-1-3 函數的奇偶性,
         3-2 函數與方程、不等式的關係, 3-3 函數應用與數學建模, 3-4 本章整合與易錯辨析
   教材對應：人教B版必修第一冊 第三章 (pp.87-138)
   邊界說明：本章重點為函數三要素、分段函數、單調性與奇偶性、零點定理、二分法與對勾模型；
             不涉及週期性、反函數、指數/對數/冪函數與三角函數（後續冊次內容）。
   ============================================================ */
window.DECK = window.DECK || [];
(function () {
  const C = '#059669';
  const RED = '#e11d48', GRN = '#059669', BLU = '#2563eb', VIO = '#7c3aed', AMB = '#d97706';

  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }

  const TX = (x, y, s, o = {}) =>
    `<text x="${x}" y="${y}" ${o.anchor ? `text-anchor="${o.anchor}"` : ''} font-size="${o.fs || 14}" font-weight="${o.fw || 700}" fill="${o.c || '#1e293b'}">${s}</text>`;
  const BOX = (x, y, w, h, o = {}) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r || 10}" fill="${o.fill || '#fff'}" stroke="${o.stroke || '#cbd5e1'}" stroke-width="${o.sw || 1.6}"/>`;

  window.DECK.push({
    ch: 3,
    title: '函數的概念與性質',
    color: C,
    sections: [
      '3-1-1 函數概念與表示方法',
      '3-1-2 函數的單調性與最值',
      '3-1-3 函數的奇偶性',
      '3-2 函數與方程、不等式的關係',
      '3-3 函數應用與數學建模',
      '3-4 本章整合與易錯辨析'
    ],
    slides: [
      /* ---------- 3-1-1 函數概念與表示方法 ---------- */
      {
        sec: '3-1-1', secName: '函數概念與表示方法',
        title: '現代集合觀點：非空數集間的唯一確定對應',
        points: [
          '設 \\(A, B\\) 為非空數集，\\(A\\) 中任一 \\(x\\) 均有<b>唯一確定</b> \\(y \\in B\\) 對應。',
          '函數三要素：<b>定義域</b> \\(A\\)、<b>對應法則</b> \\(f\\)、<b>值域</b> \\(f(A) \\subseteq B\\)。',
          '符號 \\(y=f(x)\\) 是對應法則而非乘法，值域由定義域與法則完全決定。'
        ],
        formula: { label: '函數集合定義', tex: 'f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ 使得 } y = f(x)' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <ellipse cx="110" cy="125" rx="75" ry="95" fill="rgba(5,150,105,0.08)" stroke="${C}" stroke-width="2.2"/>
            <text x="110" y="55" font-size="16" font-weight="800" fill="${C}" text-anchor="middle">定義域 A</text>
            <circle cx="110" cy="95" r="4.5" fill="${C}"/>
            <text x="90" y="100" font-size="13" font-weight="700" fill="#334155">x₁</text>
            <circle cx="110" cy="135" r="4.5" fill="${C}"/>
            <text x="90" y="140" font-size="13" font-weight="700" fill="#334155">x₂</text>
            <circle cx="110" cy="175" r="4.5" fill="${C}"/>
            <text x="90" y="180" font-size="13" font-weight="700" fill="#334155">x₃</text>

            <line x1="115" y1="95" x2="325" y2="105" stroke="${C}" stroke-width="2.2"/>
            <polygon points="325,105 312,100 314,110" fill="${C}"/>
            <line x1="115" y1="135" x2="325" y2="145" stroke="${C}" stroke-width="2.2"/>
            <polygon points="325,145 312,140 314,150" fill="${C}"/>
            <line x1="115" y1="175" x2="325" y2="145" stroke="${C}" stroke-width="2.2"/>
            <polygon points="325,145 312,140 314,150" fill="${C}"/>

            <ellipse cx="330" cy="125" rx="75" ry="95" fill="rgba(37,99,235,0.08)" stroke="${BLU}" stroke-width="2.2"/>
            <text x="330" y="55" font-size="16" font-weight="800" fill="${BLU}" text-anchor="middle">到達域 B</text>
            <circle cx="330" cy="105" r="4.5" fill="${BLU}"/>
            <text x="350" y="110" font-size="13" font-weight="700" fill="#334155">y₁</text>
            <circle cx="330" cy="145" r="4.5" fill="${BLU}"/>
            <text x="350" y="150" font-size="13" font-weight="700" fill="#334155">y₂</text>
            <circle cx="330" cy="185" r="4.5" fill="#94a3b8"/>
            <text x="350" y="190" font-size="13" fill="#94a3b8">y₃</text>

            <text x="220" y="32" font-size="15" font-weight="800" fill="#1e293b" text-anchor="middle">對應法則 f ： 每個 x 唯一對應 y</text>
            <text x="220" y="235" font-size="12" font-weight="700" fill="#64748b" text-anchor="middle">A 中元素不可無對應，亦不可一對多</text>
          `);
        },
        caption: '集合 \\(A\\) 中每個元素必須且只能發出一條箭頭；可多對一，不可一對多。',
        example: {
          q: '判斷下列對應是否為定義在 \\(\\mathbb{R}\\) 上的函數：① \\(x \\mapsto \\pm\\sqrt{x^2+1}\\)；② \\(x \\mapsto \\frac{1}{x}\\)。',
          steps: [
            '① 中一個 \\(x\\) 對應兩個不同值，違反「唯一確定性」，不是函數。',
            '② 中 \\(x=0\\) 無對應實數，未在全體實數上定義，非 \\(\\mathbb{R}\\) 上的函數。'
          ],
          ans: '兩者皆不是 \\(\\mathbb{R}\\) 上的函數'
        }
      },
      {
        sec: '3-1-1', secName: '函數概念與表示方法',
        title: '同一函數判定：定義域與對應法則雙重一致',
        points: [
          '判定同一函數需滿足兩條件：<b>定義域相同</b> 且 <b>對應法則完全一致</b>。',
          '與自變量和因變量使用哪個字母無關（\\(f(x)=x\\) 與 \\(g(t)=t\\) 是同一函數）。',
          '化簡過程需防定義域改變：\\(y=\\frac{x^2}{x}\\) 與 \\(y=x\\) 因定義域不同而非同一函數！'
        ],
        formula: { label: '同一函數充要條件', tex: 'D_f = D_g \\quad \\land \\quad \\forall x \\in D_f, \\; f(x) = g(x)' },
        visual: (h) => {
          h.innerHTML = SV.fbox([
            { label: '同一函數', tex: 'f(x) = x, \\quad g(t) = t \\quad (D = \\mathbb{R})', color: GRN, fill: '#ecfdf5', border: GRN, note: '定義域與對應規律完全相同，字母不同無影響 ✓' },
            { label: '定義域不同', tex: 'f(x) = x, \\quad g(x) = \\frac{x^2}{x} \\quad (x \\neq 0)', color: RED, fill: '#fff1f2', border: RED, note: 'g(x) 缺少 x=0 點，定義域不同，不是同一函數 ✗' },
            { label: '法則不同', tex: 'f(x) = x, \\quad g(x) = \\sqrt{x^2} = |x|', color: AMB, fill: '#fffbeb', border: AMB, note: '當 x < 0 時 f(x) ≠ g(x)，法則不一致，非同一函數 ✗' }
          ], { gap: 10 });
        },
        caption: '判定兩函數是否相同，永遠「先求定義域，再比對應式」。',
        example: {
          q: '下列哪組函數表示同一函數？A: \\(f(x)=\\sqrt{x^2}, g(x)=x\\)；B: \\(f(x)=|x|, g(t)=\\sqrt{t^2}\\)。',
          steps: [
            'A 組：\\(f(x)=\\sqrt{x^2}=|x|\\)，當 \\(x<0\\) 時 \\(f(x)=-x \\neq g(x)\\)，法則不同。',
            'B 組：兩者定義域均為 \\(\\mathbb{R}\\)，且 \\(g(t)=|t|\\)，法則相同，是同一函數。'
          ],
          ans: 'B 組表示同一函數'
        }
      },
      {
        sec: '3-1-1', secName: '函數概念與表示方法',
        title: '求函數定義域五大金律：分母、偶次根與零次冪',
        points: [
          '<b>分式分母非零</b>：\\(\\frac{1}{g(x)} \\implies g(x) \\neq 0\\)。',
          '<b>偶次根式非負</b>：\\(\\sqrt{g(x)} \\implies g(x) \\ge 0\\)。',
          '<b>零次冪底數非零</b>：\\([g(x)]^0 \\implies g(x) \\neq 0\\)；複合情況列不等式組取交集。'
        ],
        formula: { label: '定義域限制組', tex: 'f(x)=\\frac{\\sqrt{g(x)}}{h(x)} \\implies \\begin{cases} g(x) \\ge 0 \\\\ h(x) \\neq 0 \\end{cases}' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            ${BOX(20, 25, 400, 60, { fill: '#eff6ff', stroke: BLU })}
            ${TX(40, 50, '① 分母不為零： 1 / h(x)  ⟹  h(x) ≠ 0', { fs: 14, c: BLU, fw: 800 })}
            ${TX(40, 72, '例： f(x) = 1/(x - 3)  ⟹  x ≠ 3', { fs: 12, c: '#475569' })}

            ${BOX(20, 95, 400, 60, { fill: '#ecfdf5', stroke: GRN })}
            ${TX(40, 120, '② 偶次根式非負： √(g(x))  ⟹  g(x) ≥ 0', { fs: 14, c: GRN, fw: 800 })}
            ${TX(40, 142, '例： f(x) = √(2x - 4)  ⟹  2x - 4 ≥ 0  ⟹  x ≥ 2', { fs: 12, c: '#475569' })}

            ${BOX(20, 165, 400, 60, { fill: '#fffbeb', stroke: AMB })}
            ${TX(40, 190, '③ 零次冪底數非零： [g(x)]⁰  ⟹  g(x) ≠ 0', { fs: 14, c: AMB, fw: 800 })}
            ${TX(40, 212, '多條件綜合時列不等式組，在數線上取公共交集 ∩', { fs: 12, c: '#475569' })}
          `);
        },
        caption: '求出各個條件的解集後，必須取公共交集 \\(\\cap\\)，最後寫成區間形式。',
        example: {
          q: '求函數 \\(f(x) = \\frac{\\sqrt{x+1}}{x-2}\\) 的定義域。',
          steps: [
            '由分子偶次根號得 \\(x+1 \\ge 0 \\Rightarrow x \\ge -1\\)。',
            '由分式分母非零得 \\(x-2 \\neq 0 \\Rightarrow x \\neq 2\\)。',
            '取交集得 \\([-1, 2) \\cup (2, +\\infty)\\)。'
          ],
          ans: '\\([-1, 2) \\cup (2, +\\infty)\\)'
        }
      },
      {
        sec: '3-1-1', secName: '函數概念與表示方法',
        title: '分段函數：分區定義各自精彩，求值先看落在何段',
        points: [
          '分段函數是一個函數而非多個函數，定義域是各段自變量範圍的並集。',
          '求值關鍵：「<b>先看自變量落在何區間，再代入對應解析式</b>」。',
          '複合分段求值（如 \\(f(f(x))\\)）應由內層向外層逐步計算。'
        ],
        formula: { label: '分段函數表達式', tex: 'f(x) = \\begin{cases} f_1(x), & x \\in D_1 \\\\ f_2(x), & x \\in D_2 \\end{cases} \\quad (D_1 \\cap D_2 = \\varnothing)' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 240', `
            <line x1="30" y1="160" x2="410" y2="160" stroke="#94a3b8" stroke-width="1.8"/>
            <polygon points="418,160 406,154 406,166" fill="#94a3b8"/>
            <text x="405" y="180" font-size="12" fill="#64748b">x</text>

            <line x1="200" y1="220" x2="200" y2="20" stroke="#94a3b8" stroke-width="1.8"/>
            <polygon points="200,12 194,24 206,24" fill="#94a3b8"/>
            <text x="215" y="25" font-size="12" fill="#64748b">y</text>

            <line x1="60" y1="210" x2="200" y2="110" stroke="${C}" stroke-width="2.6"/>
            <circle cx="200" cy="110" r="5" fill="${C}"/>
            <text x="110" y="140" font-size="13" font-weight="700" fill="${C}">y = x + 2 (x ≤ 0)</text>

            <path d="M 200,195 Q 260,195 360,60" fill="none" stroke="${RED}" stroke-width="2.6"/>
            <circle cx="200" cy="195" r="5" fill="#fff" stroke="${RED}" stroke-width="2.5"/>
            <text x="290" y="120" font-size="13" font-weight="700" fill="${RED}">y = x² - 1 (x > 0)</text>
          `);
        },
        caption: '注意分界點 \\(x=0\\) 的開閉歸屬（實心點落在 \\(x \\le 0\\) 這一段）。',
        example: {
          q: '已知 \\(f(x)=\\begin{cases} x+2, & x \\le 0 \\\\ x^2-1, & x > 0 \\end{cases}\\)，求 \\(f(f(-1))\\)。',
          steps: [
            '先算內層：\\(-1 \\le 0\\)，代入第一段得 \\(f(-1) = -1 + 2 = 1\\)。',
            '再算外層：\\(1 > 0\\)，代入第二段得 \\(f(1) = 1^2 - 1 = 0\\)。'
          ],
          ans: '\\(f(f(-1)) = 0\\)'
        }
      },
      /* ---------- 3-1-2 函數的單調性與最值 ---------- */
      {
        sec: '3-1-2', secName: '函數的單調性與最值',
        title: '單調性定義：自變量增大，函數值同向增或反向減',
        points: [
          '<b>增函數</b>：區間內任意 \\(x_1 < x_2\\) 均有 \\(f(x_1) < f(x_2)\\)（圖象由左向右上升）。',
          '<b>減函數</b>：區間內任意 \\(x_1 < x_2\\) 均有 \\(f(x_1) > f(x_2)\\)（圖象由左向右下降）。',
          '單調性是區間性質；書寫多個單調區間時用逗號或「和」隔開，<b>切忌寫並集 \\(\\cup\\)</b>！'
        ],
        formula: { label: '單調性嚴格定義', tex: '\\forall x_1, x_2 \\in I, \\; x_1 < x_2 \\implies f(x_1) < f(x_2) \\; (\\text{增}) \\; / \\; f(x_1) > f(x_2) \\; (\\text{減})' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 240', `
            ${BOX(20, 20, 195, 200, { fill: 'rgba(5,150,105,0.06)', stroke: GRN })}
            ${TX(117, 50, '增函數 (上升)', { fs: 15, c: GRN, anchor: 'middle', fw: 800 })}
            <path d="M 40,180 Q 117,140 190,70" fill="none" stroke="${GRN}" stroke-width="3"/>
            <polygon points="195,66 182,72 186,82" fill="${GRN}"/>
            ${TX(117, 195, 'x 增大 ⟹ y 增大', { fs: 13, c: '#334155', anchor: 'middle', fw: 700 })}

            ${BOX(225, 20, 195, 200, { fill: 'rgba(225,29,72,0.06)', stroke: RED })}
            ${TX(322, 50, '減函數 (下降)', { fs: 15, c: RED, anchor: 'middle', fw: 800 })}
            <path d="M 245,70 Q 322,140 395,180" fill="none" stroke="${RED}" stroke-width="3"/>
            <polygon points="400,183 392,172 386,181" fill="${RED}"/>
            ${TX(322, 195, 'x 增大 ⟹ y 減小', { fs: 13, c: '#334155', anchor: 'middle', fw: 700 })}
          `);
        },
        caption: '反比例函數 \\(y=\\frac{1}{x}\\) 的單調減區間寫為 \\((-\\infty,0)\\) 和 \\((0,+\\infty)\\)，不可寫 \\(\\cup\\)。',
        example: {
          q: '若函數 \\(f(x)=2x-3\\) 在 \\(\\mathbb{R}\\) 上單調遞增，比較 \\(f(\\sqrt{2})\\) 與 \\(f(\\sqrt{3})\\) 的大小。',
          steps: [
            '因為實數大小關係為 \\(\\sqrt{2} < \\sqrt{3}\\)。',
            '根據增函數定義，自變量較大時函數值亦較大。'
          ],
          ans: '\\(f(\\sqrt{2}) < f(\\sqrt{3})\\)'
        }
      },
      {
        sec: '3-1-2', secName: '函數的單調性與最值',
        title: '證明單調性四步法：取值、作差、變形、定號',
        points: [
          '<b>第一步（取值）</b>：在目標區間內任取 \\(x_1 < x_2\\)。',
          '<b>第二步（作差）</b>：寫出差式 \\(f(x_1) - f(x_2)\\)。',
          '<b>第三步（變形）</b>：因式分解、通分或配方，化為因式乘積。',
          '<b>第四步（定號）</b>：判斷各因式正負，確定差值符號並下結論。'
        ],
        formula: { label: '證明核心', tex: 'f(x_1) - f(x_2) = (x_1 - x_2) \\cdot g(x_1, x_2) \\gtrless 0' },
        visual: (h) => {
          SV.stepper(h, '0 0 440 250', [
            {
              t: '<b>第 1 步：取值</b>（任取 \\(x_1, x_2 \\in I\\) 且 \\(x_1 < x_2\\)）',
              d: () => BOX(30, 40, 380, 150, { fill: '#eff6ff', stroke: BLU }) +
                TX(220, 95, '設 x₁, x₂ ∈ (0, +∞) 且 x₁ < x₂', { fs: 16, c: BLU, anchor: 'middle' }) +
                TX(220, 140, '注意：必須明確大小假設 x₁ < x₂', { fs: 13, c: '#64748b', anchor: 'middle' })
            },
            {
              t: '<b>第 2 步：作差</b>（寫出 \\(f(x_1) - f(x_2)\\)）',
              d: () => BOX(30, 40, 380, 150, { fill: '#eff6ff', stroke: BLU }) +
                TX(220, 95, 'f(x₁) - f(x₂) = (x₁² + 1) - (x₂² + 1)', { fs: 16, c: BLU, anchor: 'middle' }) +
                TX(220, 140, '消去常數項，準備進行代數變形', { fs: 13, c: '#64748b', anchor: 'middle' })
            },
            {
              t: '<b>第 3 步：變形</b>（平方差因式分解，化為乘積）',
              d: () => BOX(30, 40, 380, 150, { fill: '#f5f3ff', stroke: VIO }) +
                TX(220, 95, '= x₁² - x₂² = (x₁ - x₂)(x₁ + x₂)', { fs: 17, c: VIO, anchor: 'middle', fw: 800 }) +
                TX(220, 140, '因式分解是判斷符號的關鍵步驟', { fs: 13, c: '#64748b', anchor: 'middle' })
            },
            {
              t: '<b>第 4 步：定號與結論</b>（確定小於 0，得增函數）',
              d: () => BOX(30, 40, 380, 150, { fill: '#ecfdf5', stroke: GRN }) +
                TX(220, 85, '∵ x₁ < x₂ ⇒ x₁ - x₂ < 0 且 x₁ + x₂ > 0', { fs: 14, c: '#334155', anchor: 'middle' }) +
                TX(220, 120, '∴ (x₁ - x₂)(x₁ + x₂) < 0 ⟹ f(x₁) < f(x₂)', { fs: 16, c: GRN, anchor: 'middle', fw: 800 }) +
                TX(220, 155, '結論：f(x) 在 (0, +∞) 上單調遞增 ✓', { fs: 14, c: GRN, anchor: 'middle', fw: 700 })
            }
          ], { acc: false });
        },
        caption: '拖動步驟滑桿，觀看定義法證明單調性的四步嚴謹邏輯。',
        example: {
          q: '用定義法證明 \\(f(x) = -3x + 1\\) 在 \\(\\mathbb{R}\\) 上單調遞減。',
          steps: [
            '任取 \\(x_1, x_2 \\in \\mathbb{R}\\) 且 \\(x_1 < x_2\\)。',
            '作差：\\(f(x_1) - f(x_2) = (-3x_1+1) - (-3x_2+1) = -3(x_1 - x_2)\\)。',
            '由 \\(x_1 < x_2 \\Rightarrow x_1 - x_2 < 0\\)，得 \\(-3(x_1 - x_2) > 0\\)，即 \\(f(x_1) > f(x_2)\\)。',
            '故 \\(f(x)\\) 在 \\(\\mathbb{R}\\) 上單調遞減。'
          ],
          ans: '證明完畢'
        }
      },
      {
        sec: '3-1-2', secName: '二次函數區間最值',
        title: '軸動區間定：拖動拋物線對稱軸看最值轉移',
        points: [
          '考慮 \\(f(x)=(x-t)^2+1\\) 在固定區間 \\([0, 2]\\) 上的最值分佈。',
          '對稱軸 \\(t < 0\\)：區間內單調遞增，左端點 \\(x=0\\) 取得最小值。',
          '對稱軸 \\(0 \\le t \\le 2\\)：頂點在區間內，頂點 \\(x=t\\) 取最小值 \\(1\\)。',
          '對稱軸 \\(t > 2\\)：區間內單調遞減，右端點 \\(x=2\\) 取得最小值。'
        ],
        formula: { label: '軸動區間定分段', tex: 't < 0 \\implies f_{\\min}=f(0) \\;;\\; 0 \\le t \\le 2 \\implies f_{\\min}=1 \\;;\\; t > 2 \\implies f_{\\min}=f(2)' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig"></div>
            <div class="ictrl">
              <label>對稱軸 t ＝ <span class="ival" id="tv">1.0</span> （閉區間 [0, 2]）</label>
              <input type="range" id="ts" min="-1" max="3" step="0.5" value="1">
            </div></div>`;
          const draw = () => {
            const t = +h.querySelector('#ts').value;
            h.querySelector('#tv').textContent = t.toFixed(1);
            let status = '';
            let sColor = C;
            if (t < 0) {
              status = `t < 0 (軸在區間左側) ： 區間遞增，最小值在 x = 0`;
              sColor = BLU;
            } else if (t <= 2) {
              status = `0 ≤ t ≤ 2 (軸在區間內) ： 頂點取最小值 f(t) = 1`;
              sColor = GRN;
            } else {
              status = `t > 2 (軸在區間右側) ： 區間遞減，最小值在 x = 2`;
              sColor = RED;
            }
            const toX = (val) => 180 + val * 55;
            let s = `<line x1="40" y1="140" x2="400" y2="140" stroke="#94a3b8" stroke-width="2"/>`;
            s += `<polygon points="408,140 396,134 396,146" fill="#94a3b8"/>`;
            // Fixed interval [0, 2]
            const x0 = toX(0), x2 = toX(2);
            s += `<rect x="${x0}" y="40" width="${x2 - x0}" height="100" fill="rgba(5,150,105,0.15)" stroke="${GRN}" stroke-width="1.8" stroke-dasharray="4 4"/>`;
            s += `<text x="${(x0 + x2) / 2}" y="32" font-size="12" font-weight="800" fill="${GRN}" text-anchor="middle">目標區間 [0, 2]</text>`;

            // Parabola with vertex at (t, 1) -> screen (toX(t), 120)
            const xt = toX(t);
            s += `<line x1="${xt}" y1="40" x2="${xt}" y2="160" stroke="${sColor}" stroke-width="2" stroke-dasharray="3 3"/>`;
            s += `<text x="${xt}" y="175" font-size="12" font-weight="800" fill="${sColor}" text-anchor="middle">x = ${t.toFixed(1)}</text>`;
            s += `<path d="M ${xt - 80},50 Q ${xt},190 ${xt + 80},50" fill="none" stroke="${sColor}" stroke-width="2.6"/>`;
            s += `<text x="220" y="210" font-size="13" font-weight="800" fill="${sColor}" text-anchor="middle">${status}</text>`;
            h.querySelector('#fig').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#ts').oninput = draw;
          draw();
        },
        caption: '拖動對稱軸 \\(t\\)，直觀觀察區間 \\([0, 2]\\) 內最值點的動態轉移。',
        example: {
          q: '求函數 \\(f(x)=x^2-2ax+1\\) 在 \\([0, 2]\\) 上的最小值表達式。',
          steps: [
            '拋物線開口向上，對稱軸為 \\(x=a\\)。',
            '當 \\(a < 0\\) 時，\\(f_{\\min} = f(0) = 1\\)；',
            '當 \\(0 \\le a \\le 2\\) 時，\\(f_{\\min} = f(a) = 1 - a^2\\)；',
            '當 \\(a > 2\\) 時，\\(f_{\\min} = f(2) = 5 - 4a\\)。'
          ],
          ans: '分 \\(a<0\\)、\\(0\\le a\\le 2\\)、\\(a>2\\) 三段表達'
        }
      },
      /* ---------- 3-1-3 函數的奇偶性 ---------- */
      {
        sec: '3-1-3', secName: '函數的奇偶性',
        title: '奇偶性前提：定義域必須關於原點對稱',
        points: [
          '<b>前提原則</b>：定義域 \\(D\\) 必須關於原點對稱（\\(\\forall x \\in D \\implies -x \\in D\\)）。',
          '<b>偶函數</b>：\\(f(-x) = f(x)\\)，圖象關於 <b>\\(y\\) 軸對稱</b>（如 \\(y=x^2\\)）。',
          '<b>奇函數</b>：\\(f(-x) = -f(x)\\)，圖象關於 <b>原點對稱</b>（如 \\(y=x^3\\)）。'
        ],
        formula: { label: '奇偶性定義式', tex: 'f(-x) = f(x) \\quad (\\text{偶函數}) \\qquad f(-x) = -f(x) \\quad (\\text{奇函數})' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 240', `
            ${BOX(20, 20, 195, 200, { fill: 'rgba(124,58,237,0.06)', stroke: VIO })}
            ${TX(117, 48, '偶函數 (y 軸對稱)', { fs: 15, c: VIO, anchor: 'middle', fw: 800 })}
            <line x1="117" y1="65" x2="117" y2="175" stroke="#94a3b8" stroke-width="1.8"/>
            <path d="M 45,85 Q 117,195 190,85" fill="none" stroke="${VIO}" stroke-width="2.6"/>
            ${TX(117, 200, 'f(-x) = f(x)', { fs: 14, c: VIO, anchor: 'middle', fw: 800 })}

            ${BOX(225, 20, 195, 200, { fill: 'rgba(5,150,105,0.06)', stroke: GRN })}
            ${TX(322, 48, '奇函數 (原點對稱)', { fs: 15, c: GRN, anchor: 'middle', fw: 800 })}
            <circle cx="322" cy="120" r="3.5" fill="#1e293b"/>
            <path d="M 250,175 Q 300,165 322,120 Q 345,75 395,65" fill="none" stroke="${GRN}" stroke-width="2.6"/>
            ${TX(322, 200, 'f(-x) = -f(x) (若過原點 f(0)=0)', { fs: 13, c: GRN, anchor: 'middle', fw: 800 })}
          `);
        },
        caption: '奇函數若在 \\(x=0\\) 處有定義，則必有 \\(f(0) = 0\\)！',
        example: {
          q: '已知 \\(f(x)\\) 是 \\(\\mathbb{R}\\) 上的奇函數，當 \\(x>0\\) 時 \\(f(x)=x^2+2x\\)，求 \\(f(-2)\\)。',
          steps: [
            '由奇函數性質：\\(f(-2) = -f(2)\\)。',
            '計算 \\(f(2) = 2^2 + 2(2) = 8\\)，故 \\(f(-2) = -8\\)。'
          ],
          ans: '\\(f(-2) = -8\\)'
        }
      },
      {
        sec: '3-1-3', secName: '函數的奇偶性',
        title: '奇偶性代數判斷程序與單調性連動',
        points: [
          '<b>判定程序</b>：① 先求定義域看是否原點對稱；② 化簡計算 \\(f(-x)\\) 與 \\(f(x)\\)。',
          '<b>單調連動口訣</b>：「奇同偶異」！奇函數在對稱區間單調性相同，偶函數相反。',
          '既奇又偶函數：定義域關於原點對稱且解析式恆為 \\(f(x)=0\\)。'
        ],
        formula: { label: '單調連動口訣', tex: '\\text{奇同偶異: 奇函數 } [a,b] \\text{ 增 } \\iff [-b,-a] \\text{ 增；偶函數 } [a,b] \\text{ 增 } \\iff [-b,-a] \\text{ 減}' },
        visual: (h) => {
          h.innerHTML = SV.fbox([
            { label: '第一步：定義域', tex: 'x \\in D \\iff -x \\in D', color: C, fill: '#ecfdf5', border: C, note: '若定義域如 [-1, 2] 不對稱，直接判定非奇非偶！' },
            { label: '第二步：算 f(-x)', tex: 'f(-x) = \\begin{cases} f(x) & \\implies \\text{偶函數 (y軸對稱)} \\\\ -f(x) & \\implies \\text{奇函數 (原點對稱)} \\end{cases}', color: VIO, fill: '#f5f3ff', border: VIO },
            { label: '單調連動口訣', tex: '\\text{奇同偶異}', color: RED, fill: '#fff1f2', border: RED, note: '解不等式 f(x₁)<f(x₂) 時利用對稱性脫去外層 f' }
          ], { gap: 10 });
        },
        caption: '口訣「奇同偶異」是利用對稱性脫去外層 \\(f\\) 解不等式的利器。',
        example: {
          q: '已知偶函數 \\(f(x)\\) 在 \\([0, +\\infty)\\) 上單調遞增，比較 \\(f(-3)\\) 與 \\(f(2)\\) 的大小。',
          steps: [
            '由偶函數性質：\\(f(-3) = f(3)\\)。',
            '在 \\([0, +\\infty)\\) 上單調遞增，因 \\(3 > 2\\)，故 \\(f(3) > f(2)\\)。',
            '代入得 \\(f(-3) > f(2)\\)。'
          ],
          ans: '\\(f(-3) > f(2)\\)'
        }
      },
      /* ---------- 3-2 函數與方程、不等式的關係 ---------- */
      {
        sec: '3-2', secName: '函數與方程不等式關係',
        title: '函數零點是方程實根，圖象穿軸交點橫坐標',
        points: [
          '<b>零點不是點，是一個數值</b>：滿足 \\(f(x)=0\\) 的實數 \\(x\\) 稱為函數零點。',
          '等價關係：函數有零點 \\(\\iff\\) 方程 \\(f(x)=0\\) 有實根 \\(\\iff\\) 圖象與 \\(x\\) 軸有交點。',
          '交點轉化思想：將 \\(f(x)=g(x)\\) 的根轉為兩圖象公共交點的橫坐標。'
        ],
        formula: { label: '零點三位一體', tex: 'f(x_0)=0 \\iff x_0 \\text{ 為方程實根} \\iff (x_0, 0) \\text{ 為圖象交點}' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 240', `
            <line x1="30" y1="140" x2="410" y2="140" stroke="#94a3b8" stroke-width="2"/>
            <polygon points="418,140 406,134 406,146" fill="#94a3b8"/>
            <text x="405" y="160" font-size="12" fill="#64748b">x</text>

            <path d="M 50,200 Q 150,40 220,140 Q 290,230 380,50" fill="none" stroke="${C}" stroke-width="2.8"/>

            <circle cx="105" cy="140" r="5" fill="${RED}"/>
            <text x="105" y="165" font-size="13" font-weight="800" fill="${RED}" text-anchor="middle">x₁</text>

            <circle cx="220" cy="140" r="5" fill="${RED}"/>
            <text x="220" y="165" font-size="13" font-weight="800" fill="${RED}" text-anchor="middle">x₂</text>

            <circle cx="340" cy="140" r="5" fill="${RED}"/>
            <text x="340" y="165" font-size="13" font-weight="800" fill="${RED}" text-anchor="middle">x₃</text>

            ${BOX(140, 25, 160, 45, { fill: '#fff', stroke: RED })}
            ${TX(220, 52, '★ 零點是數，不是點！', { fs: 13, c: RED, anchor: 'middle', fw: 800 })}
          `);
        },
        caption: '深刻記住：零點是數值 \\(x_0\\)，交點才是點坐標 \\((x_0, 0)\\)。',
        example: {
          q: '求函數 \\(f(x)=x^2-2x-8\\) 的零點。',
          steps: [
            '令 \\(f(x) = 0 \\Rightarrow x^2-2x-8=0\\)。',
            '因式分解得 \\((x-4)(x+2)=0\\)，解得 \\(x_1=-2, x_2=4\\)。',
            '故零點為 \\(-2\\) 與 \\(4\\)（不可寫成坐標形式）。'
          ],
          ans: '零點為 \\(-2\\) 和 \\(4\\)'
        }
      },
      {
        sec: '3-2', secName: '函數與方程不等式關係',
        title: '零點存在性定理：連續曲線端點異號必穿軸',
        points: [
          '<b>定理條件</b>：函數 \\(y=f(x)\\) 在 \\([a, b]\\) 上圖象連續，且 <b>\\(f(a) \\cdot f(b) < 0\\)</b>。',
          '<b>定理結論</b>：開區間 \\((a, b)\\) 內至少存在一個零點 \\(c\\)，使得 \\(f(c) = 0\\)。',
          '若函數在區間內同時保持<b>單調</b>，則零點在 \\((a, b)\\) 內<b>存在且唯一</b>！'
        ],
        formula: { label: '零點存在性定理', tex: 'f \\in C[a, b] \\;\\land\\; f(a)f(b) < 0 \\implies \\exists c \\in (a, b), \\; f(c) = 0' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 240', `
            <line x1="30" y1="130" x2="410" y2="130" stroke="#94a3b8" stroke-width="2"/>
            <polygon points="418,130 406,124 406,136" fill="#94a3b8"/>

            <path d="M 80,190 Q 220,160 360,50" fill="none" stroke="${C}" stroke-width="3"/>

            <line x1="80" y1="130" x2="80" y2="190" stroke="#94a3b8" stroke-dasharray="3 3"/>
            <circle cx="80" cy="190" r="5" fill="${RED}"/>
            <text x="80" y="215" font-size="13" font-weight="700" fill="${RED}" text-anchor="middle">f(a) < 0</text>
            <text x="80" y="120" font-size="13" font-weight="800" fill="#334155" text-anchor="middle">a</text>

            <line x1="360" y1="130" x2="360" y2="50" stroke="#94a3b8" stroke-dasharray="3 3"/>
            <circle cx="360" cy="50" r="5" fill="${GRN}"/>
            <text x="360" y="40" font-size="13" font-weight="700" fill="${GRN}" text-anchor="middle">f(b) > 0</text>
            <text x="360" y="150" font-size="13" font-weight="800" fill="#334155" text-anchor="middle">b</text>

            <circle cx="275" cy="130" r="5.5" fill="${C}"/>
            <text x="275" y="155" font-size="14" font-weight="800" fill="${C}" text-anchor="middle">零點 c</text>
          `);
        },
        caption: '反之不成立：有零點不保證端點異號（如拋物線相切或偶數個零點）。',
        example: {
          q: '判斷方程 \\(x^3 + 2x - 5 = 0\\) 在區間 \\((1, 2)\\) 內是否存在實根？',
          steps: [
            '設 \\(f(x)=x^3+2x-5\\)，在 \\([1, 2]\\) 上圖象連續。',
            '計算端點值：\\(f(1)=1+2-5=-2 < 0\\)，\\(f(2)=8+4-5=7 > 0\\)。',
            '由 \\(f(1)f(2) < 0\\)，定理保證區間內必有實根。'
          ],
          ans: '存在實根（且函數單調遞增，根唯一）'
        }
      },
      {
        sec: '3-2', secName: '二分法求方程近似解',
        title: '二分法：折半縮小區間，步步逼近方程精確解',
        points: [
          '<b>演算法原理</b>：取中點 \\(x_m = \\frac{a+b}{2}\\)，計算 \\(f(x_m)\\) 符號。',
          '若 \\(f(x_m)=0\\) 即得解；若異號則保留異號半區間，區間長度減半。',
          '經過 \\(n\\) 次二分，區間長度縮小為 \\(\\frac{b-a}{2^n}\\)，收斂速度極快。'
        ],
        formula: { label: '區間長度收斂', tex: '|x_n - x^*| \\le \\frac{b-a}{2^n} < \\varepsilon' },
        visual: (h) => {
          SV.stepper(h, '0 0 440 240', [
            {
              t: '初始狀態：已知零點在區間 [1, 2] 內，長度為 1',
              d: () => BOX(50, 60, 340, 45, { fill: 'rgba(5,150,105,0.15)', stroke: GRN }) +
                TX(50, 135, '1 (f<0)', { fs: 13, c: RED, anchor: 'middle' }) +
                TX(390, 135, '2 (f>0)', { fs: 13, c: GRN, anchor: 'middle' }) +
                TX(220, 90, '區間長度 L₀ = 1.0', { fs: 14, c: '#334155', anchor: 'middle', fw: 700 })
            },
            {
              t: '第 1 次二分：取中點 1.5，算得 f(1.5) > 0，新區間為 [1, 1.5]',
              d: () => BOX(50, 60, 170, 45, { fill: 'rgba(5,150,105,0.25)', stroke: GRN }) +
                TX(50, 135, '1 (f<0)', { fs: 13, c: RED, anchor: 'middle' }) +
                TX(220, 135, '1.5 (f>0)', { fs: 13, c: GRN, anchor: 'middle' }) +
                TX(135, 90, '長度 L₁ = 0.5', { fs: 14, c: '#334155', anchor: 'middle', fw: 700 })
            },
            {
              t: '第 2 次二分：取中點 1.25，算得 f(1.25) < 0，新區間為 [1.25, 1.5]',
              d: () => BOX(135, 60, 85, 45, { fill: 'rgba(225,29,72,0.3)', stroke: RED }) +
                TX(135, 135, '1.25 (f<0)', { fs: 12, c: RED, anchor: 'middle' }) +
                TX(220, 135, '1.5 (f>0)', { fs: 12, c: GRN, anchor: 'middle' }) +
                TX(177, 90, 'L₂ = 0.25', { fs: 13, c: '#334155', anchor: 'middle', fw: 700 }) +
                TX(220, 185, '解已被鎖定在 [1.25, 1.5] 窄帶內 ✓', { fs: 13, c: C, anchor: 'middle', fw: 800 })
            }
          ], { acc: false });
        },
        caption: '拖動步驟滑桿，觀看二分法如何以二的指數級速度縮小搜索區間。',
        example: {
          q: '已知 \\(f(1)<0, f(2)>0\\)，問經過 3 次二分後所得區間長度為多少？',
          steps: [
            '初始區間長度 \\(L_0 = 2 - 1 = 1\\)。',
            '每次二分長度折半：第 1 次 0.5，第 2 次 0.25，第 3 次 0.125。'
          ],
          ans: '區間長度為 \\(0.125\\)'
        }
      },
      /* ---------- 3-3 函數應用與數學建模 ---------- */
      {
        sec: '3-3', secName: '對勾函數模型',
        title: '經典對勾函數：耐吉勾圖象與雙勾拐點',
        points: [
          '對勾函數解析式 \\(f(x) = x + \\frac{k}{x} (k > 0)\\)，定義域 \\(x \\neq 0\\)。',
          '<b>奇函數</b>：圖象關於原點對稱；在第一象限形如勾號（Nike 勾）。',
          '<b>拐點極值</b>：第一象限拐點為 \\((\\sqrt{k}, 2\\sqrt{k})\\)；\\((0, \\sqrt{k}]\\) 遞減，\\([\\sqrt{k}, +\\infty)\\) 遞增。'
        ],
        formula: { label: '對勾函數單調區間', tex: 'f(x)=x+\\frac{k}{x} (k>0): \\quad \\text{減區間 } (0, \\sqrt{k}], \\quad \\text{增區間 } [\\sqrt{k}, +\\infty)' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig"></div>
            <div class="ictrl">
              <label>參數 k ＝ <span class="ival" id="kv">4</span> （拐點坐標 (√k, 2√k)）</label>
              <input type="range" id="ks" min="1" max="9" step="1" value="4">
            </div></div>`;
          const draw = () => {
            const k = +h.querySelector('#ks').value;
            h.querySelector('#kv').textContent = k;
            const rk = Math.sqrt(k);
            const minVal = 2 * rk;
            const toX = (val) => 80 + val * 35;
            const toY = (val) => 220 - val * 22;
            let s = `<line x1="40" y1="220" x2="400" y2="220" stroke="#94a3b8" stroke-width="2"/>`;
            s += `<polygon points="408,220 396,214 396,226" fill="#94a3b8"/>`;
            s += `<line x1="80" y1="230" x2="80" y2="20" stroke="#94a3b8" stroke-width="2"/>`;
            s += `<polygon points="80,12 74,24 86,24" fill="#94a3b8"/>`;

            let pathD = '';
            for (let x = 0.5; x <= 8; x += 0.25) {
              const y = x + k / x;
              const px = toX(x), py = toY(y);
              if (py >= 20 && py <= 230) {
                pathD += (pathD === '' ? `M ${px},${py}` : ` L ${px},${py}`);
              }
            }
            s += `<path d="${pathD}" fill="none" stroke="${C}" stroke-width="2.8"/>`;
            const vx = toX(rk), vy = toY(minVal);
            s += `<circle cx="${vx}" cy="${vy}" r="5.5" fill="${RED}"/>`;
            s += `<text x="${vx}" y="${vy - 12}" font-size="12" font-weight="800" fill="${RED}" text-anchor="middle">拐點 (${rk.toFixed(1)}, ${minVal.toFixed(1)})</text>`;
            s += `<text x="260" y="45" font-size="13" font-weight="800" fill="${C}">y = x + ${k}/x  最小值 = ${minVal.toFixed(2)}</text>`;
            h.querySelector('#fig').innerHTML = svg('0 0 440 230', s);
          };
          h.querySelector('#ks').oninput = draw;
          draw();
        },
        caption: '拖動參數 \\(k\\)，觀察第一象限對勾函數拐點坐標 \\((\\sqrt{k}, 2\\sqrt{k})\\) 的變化。',
        example: {
          q: '求函數 \\(f(x) = x + \\frac{4}{x}\\) 在 \\([1, 4]\\) 上的最大值與最小值。',
          steps: [
            '拐點為 \\(x=\\sqrt{4}=2\\)，函數在 \\([1, 2]\\) 遞減，在 \\([2, 4]\\) 遞增。',
            '拐點處取最小值 \\(f(2) = 2 + 2 = 4\\)。',
            '比較端點：\\(f(1)=1+4=5\\)，\\(f(4)=4+1=5\\)，最大值為 5。'
          ],
          ans: '最小值為 4，最大值為 5'
        }
      },
      {
        sec: '3-3', secName: '數學建模活動',
        title: '數學建模：決定蘋果最佳出售時間點',
        points: [
          '<b>情境變量</b>：晚摘蘋果產量隨天數增長，但市場單價隨上市增多而下跌。',
          '<b>建立模型</b>：若天數為 \\(t\\)，產量 \\(Q(t)=Q_0(1+at)\\)，單價 \\(P(t)=P_0(1-bt)\\)。',
          '<b>總收入模型</b>：\\(R(t)=Q(t)P(t)\\) 為開口向下的二次函數，頂點即最佳出售天數！'
        ],
        formula: { label: '二次收益模型', tex: 'R(t) = P_0 Q_0 (1 + at)(1 - bt) \\implies t^* = \\frac{a - b}{2ab} \\quad (\\text{頂點取最大收益})' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 240', `
            <line x1="40" y1="200" x2="400" y2="200" stroke="#94a3b8" stroke-width="1.8"/>
            <polygon points="408,200 396,194 396,206" fill="#94a3b8"/>
            <text x="405" y="218" font-size="12" fill="#64748b">天數 t</text>

            <path d="M 60,180 Q 220,30 380,180" fill="none" stroke="${C}" stroke-width="3"/>
            <circle cx="220" cy="68" r="6" fill="${RED}"/>
            <text x="220" y="45" font-size="14" font-weight="800" fill="${RED}" text-anchor="middle">最優出售日 t* (頂點最大利潤)</text>

            <line x1="220" y1="68" x2="220" y2="200" stroke="${RED}" stroke-dasharray="3 3"/>
            <text x="220" y="218" font-size="12" font-weight="800" fill="${RED}" text-anchor="middle">t = 35 天</text>

            <text x="90" y="150" font-size="12" fill="#64748b">過早採摘：產量不足</text>
            <text x="350" y="150" font-size="12" fill="#64748b">過晚採摘：價格跌破</text>
          `);
        },
        caption: '課本建模專題精髓：將現實經濟問題轉化為二次函數求頂點最值。',
        example: {
          q: '果園現有蘋果 1000 kg，單價 6 元/kg。每天產量增 20 kg，單價跌 0.05 元。幾天後出售總收入最大？',
          steps: [
            '設 \\(t\\) 天後出售，總收入 \\(R(t) = (1000 + 20t)(6 - 0.05t)\\)。',
            '展開得 \\(R(t) = -t^2 + 70t + 6000 = -(t - 35)^2 + 7225\\)。',
            '當 \\(t=35\\) 天時總收入達到最大值 7225 元。'
          ],
          ans: '35 天後出售總收入最大（7225 元）'
        }
      },
      /* ---------- 3-4 本章整合與易錯辨析 ---------- */
      {
        sec: '3-4', secName: '本章整合與易錯辨析',
        title: '第三章易錯防坑清單：原點對稱、單調並集、零點反向',
        points: [
          '<b>陷阱一</b>：判斷奇偶性時，未優先檢驗定義域是否關於原點對稱！',
          '<b>陷阱二</b>：書寫單調區間時，盲目使用並集符號 \\(\\cup\\)（大忌！）。',
          '<b>陷阱三</b>：誤以為「有零點必然端點異號」（切點與偶數根反例）。'
        ],
        formula: { label: '單調區間書寫戒律', tex: '\\text{單調區間書寫: 用「逗號」或「和」連接，嚴禁寫 } \\cup' },
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
                  <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9">單調區間</td>
                  <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;color:${RED}">(-∞, 0) ∪ (0, +∞) 遞減</td>
                  <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;color:${GRN}">(-∞, 0) 和 (0, +∞) 遞減</td>
                </tr>
                <tr>
                  <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9">奇偶性檢驗</td>
                  <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;color:${RED}">直接算 f(-x)，漏定義域</td>
                  <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;color:${GRN}">先驗證定義域關於原點對稱</td>
                </tr>
                <tr>
                  <td style="padding:6px 8px">零點定理</td>
                  <td style="padding:6px 8px;color:${RED}">認為有零點必有 f(a)f(b)<0</td>
                  <td style="padding:6px 8px;color:${GRN}">定理只給充分條件，反之不真</td>
                </tr>
              </table>
            </div>`;
        },
        caption: '單調區間寫 \\(\\cup\\) 是大考最常見的扣分點，務必使用「和」或逗號！',
        example: {
          q: '判斷函數 \\(f(x) = x^2\\) 在 \\(x \\in [-1, 2]\\) 上的奇偶性。',
          steps: [
            '定義域為 \\([-1, 2]\\)，顯然不關於原點對稱（\\(2 \\in D\\) 但 \\(-2 \\notin D\\)）。',
            '無需計算 \\(f(-x)\\)，直接判定為非奇非偶函數。'
          ],
          ans: '非奇非偶函數（因定義域不對稱）'
        }
      },
      {
        sec: '3-4', secName: '本章整合與易錯辨析',
        title: '全冊三大核心數學思想：數形結合、分類討論、轉化化歸',
        points: [
          '<b>數形結合</b>：數線區間、文氏圖、三個二次圖象、對稱軸滑動、零點穿軸。',
          '<b>分類討論</b>：集合含參 \\(A=\\varnothing\\)、不等式二次係數正負、二次軸動區間定。',
          '<b>轉化與化歸</b>：方程組化一元、零點轉化為交點、均值配湊求最值。'
        ],
        formula: { label: '高中數學三神思維', tex: '\\text{數形結合} \\iff \\text{分類討論} \\iff \\text{轉化化歸}' },
        visual: (h) => {
          h.innerHTML = SV.fbox([
            { label: '數形結合 (Visual)', tex: '\\text{圖中見數，數中思圖}', color: C, fill: '#ecfdf5', border: C, note: '幾何直觀引領代數嚴謹計算' },
            { label: '分類討論 (Cases)', tex: '\\text{不重不漏，層層劃分}', color: VIO, fill: '#f5f3ff', border: VIO, note: '找準分類依據（符號、大小、區間位置）' },
            { label: '轉化化歸 (Reduction)', tex: '\\text{陌生化熟悉，複雜化簡單}', color: BLU, fill: '#eff6ff', border: BLU, note: '高一所有章節一脈相承的解決之道' }
          ], { gap: 10 });
        },
        caption: '掌握三大數學思想，必修第一冊複習即可融會貫通、游刃有餘。',
        example: {
          q: '回顧全冊：舉一例說明如何利用「數形結合」思想破解難題。',
          steps: [
            '例如求方程 \\(x^2 = |x| + 2\\) 的實根個數。',
            '畫出拋物線 \\(y=x^2\\) 與折線 \\(y=|x|+2\\) 圖象。',
            '由對稱性直觀看出兩圖象恰有 2 個交點，故方程恰有 2 個實根。'
          ],
          ans: '將代數方程根轉化為兩圖象交點橫坐標'
        }
      }
    ]
  });
})();
