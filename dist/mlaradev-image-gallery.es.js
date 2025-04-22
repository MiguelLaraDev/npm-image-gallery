var z = (n) => {
  throw TypeError(n);
};
var L = (n, t, e) => t.has(n) || z("Cannot " + e);
var i = (n, t, e) => (L(n, t, "read from private field"), e ? e.call(n) : t.get(n)), h = (n, t, e) => t.has(n) ? z("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e), l = (n, t, e, s) => (L(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), a = (n, t, e) => (L(n, t, "access private method"), e);
const G = ".image-gallery{width:100%;height:auto;padding:16px}@media (min-width: 768px){.image-gallery{padding:0}}", P = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg>`, R = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg>`, X = ".slider{position:relative;background-color:#fff;overflow:hidden;width:100%;height:400px;min-height:400px;display:flex;align-items:center;justify-content:center;margin-bottom:16px}.list{position:absolute;width:100%;height:400px;display:flex;transition:all .5s ease-in;z-index:98}.slide{position:relative;width:100%;min-width:100%;height:400px;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden}.slide img{width:100%;height:auto;margin:16px}.nav{position:absolute;display:flex;align-items:center;justify-content:center;background-color:#ee82eebf;color:#000;top:calc(50% - 28px);width:32px;height:32px;border-radius:100%;border:none;margin:0;z-index:99}.left{left:0}.right{right:0}@media (min-width: 768px){.nav{margin:16px;width:40px;height:40px}.slide{padding:24px}.slide img{width:auto;height:100%}}", A = {
  mainColor: "grey"
};
var o, m, p, v, S, d, H, I, N, $, j, k, B, q;
class J {
  constructor(t) {
    h(this, d);
    h(this, o, 0);
    h(this, m);
    h(this, p, []);
    h(this, v);
    h(this, S);
    l(this, m, document.createElement("div")), l(this, v, document.createElement("div")), l(this, S, { ...A, ...t }), a(this, d, H).call(this);
  }
  get element() {
    return i(this, m);
  }
  set items(t) {
    l(this, p, t), l(this, o, 0), a(this, d, q).call(this);
  }
}
o = new WeakMap(), m = new WeakMap(), p = new WeakMap(), v = new WeakMap(), S = new WeakMap(), d = new WeakSet(), H = function() {
  i(this, m).classList.add("slider"), i(this, v).classList.add("list"), i(this, m).append(i(this, v)), a(this, d, N).call(this), a(this, d, I).call(this), document.addEventListener("thumbnailClick", (t) => {
    const e = t, { index: s } = e.detail.item;
    a(this, d, B).call(this, s);
  });
}, I = async function() {
  const t = new CSSStyleSheet();
  await t.replace(`
      ${X}
      .nav {
        background-color: ${i(this, S).mainColor};
      }
    `), document.adoptedStyleSheets = [...document.adoptedStyleSheets, t];
}, N = function() {
  const t = document.createElement("button");
  t.classList.add("nav", "left"), t.innerHTML = P, t.addEventListener("click", () => a(this, d, $).call(this, "left"));
  const e = document.createElement("button");
  e.classList.add("nav", "right"), e.innerHTML = R, e.addEventListener("click", () => a(this, d, $).call(this, "right")), i(this, m).append(t), i(this, m).append(e);
}, $ = function(t) {
  l(this, o, i(this, o) + (t === "right" ? 1 : -1)), l(this, o, (i(this, o) + i(this, p).length) % i(this, p).length), a(this, d, k).call(this), a(this, d, j).call(this);
}, j = function() {
  if (!i(this, p).length) return;
  const t = new CustomEvent("navClick", {
    detail: {
      item: {
        id: i(this, p)[i(this, o)].id,
        index: i(this, o)
      }
    },
    bubbles: !0
  });
  document.dispatchEvent(t);
}, k = function() {
  const t = i(this, m).clientWidth;
  i(this, v).style.transform = `translateX(${t * i(this, o) * -1}px)`;
}, B = function(t) {
  l(this, o, t), a(this, d, k).call(this);
}, q = function() {
  const t = document.createDocumentFragment();
  i(this, p).forEach((e) => {
    const s = document.createElement("div");
    s.innerHTML = `<img src="${e.sizes.large}" alt="${e.alt}">`, s.id = `slide-${e.id}`, s.classList.add("slide"), t.append(s);
  }), i(this, v).replaceChildren(t);
};
const K = ".thumbnail-container{width:100%;display:flex;flex-direction:row;flex-wrap:wrap;gap:8px}.thumb{box-sizing:border-box;overflow:hidden;cursor:pointer}.thumb:hover{opacity:.5}.thumb img{width:inherit;height:inherit;object-fit:cover}", Q = {
  borderColor: "grey",
  borderWidth: "1px",
  width: 100,
  height: 100,
  useBorder: !0
};
var u, C, w, g, O, W, M;
class U {
  constructor(t) {
    h(this, g);
    h(this, u);
    h(this, C, []);
    h(this, w);
    l(this, u, document.createElement("div")), i(this, u).className = "thumbnail-container", l(this, w, { ...Q, ...t }), document.addEventListener("navClick", (e) => {
      const s = e, { id: c, index: r } = s.detail.item;
      a(this, g, M).call(this, c, r);
    }), a(this, g, O).call(this);
  }
  get element() {
    return i(this, u);
  }
  set items(t) {
    l(this, C, t), a(this, g, W).call(this);
  }
}
u = new WeakMap(), C = new WeakMap(), w = new WeakMap(), g = new WeakSet(), O = async function() {
  const t = new CSSStyleSheet(), { width: e, height: s, useBorder: c, borderWidth: r, borderColor: T } = i(this, w), F = c ? `${r} solid ${T}` : "none";
  await t.replace(`
      ${K}
      .custom-thumb {
        border: ${F};
        width: ${e}px;
        height: ${s}px;
      }
      .selected {
        border-top: 4px solid ${T} !important;
      }
    `), document.adoptedStyleSheets = [...document.adoptedStyleSheets, t];
}, W = function() {
  i(this, u).innerHTML = "";
  const { width: t, height: e } = i(this, w);
  i(this, C).forEach((s, c) => {
    const r = document.createElement("div");
    r.id = s.id, r.classList.add("thumb", "custom-thumb"), r.innerHTML = `<img src="${s.sizes.thumbnail}" alt="${s.alt}" width="${t}" height="${e}">`, r.addEventListener("click", () => a(this, g, M).call(this, s.id, c)), c === 0 && r.classList.add("selected"), i(this, u).appendChild(r);
  });
}, M = function(t, e) {
  const s = i(this, u).querySelector(".selected");
  s == null || s.classList.remove("selected");
  const c = i(this, u).querySelector(`#${t}`);
  c == null || c.classList.add("selected");
  const r = new CustomEvent("thumbnailClick", {
    detail: { item: { id: t, index: e } },
    bubbles: !0
  });
  document.dispatchEvent(r);
};
var b, f, x, y, E, D;
class Y {
  constructor(t, e, s) {
    h(this, E);
    h(this, b);
    h(this, f);
    h(this, x);
    h(this, y, []);
    if (l(this, b, document.querySelector(t)), l(this, y, e), l(this, f, new J(s == null ? void 0 : s.slider)), l(this, x, new U(s == null ? void 0 : s.thumbs)), !i(this, b))
      throw new Error(`Element with selector "${t}" not found`);
    a(this, E, D).call(this);
  }
}
b = new WeakMap(), f = new WeakMap(), x = new WeakMap(), y = new WeakMap(), E = new WeakSet(), D = async function() {
  const t = new CSSStyleSheet();
  await t.replace(G), document.adoptedStyleSheets = [...document.adoptedStyleSheets, t];
  const e = document.createElement("div");
  e.id = "mlaradev-image-gallery", e.className = "image-gallery", e.append(i(this, f).element), e.append(i(this, x).element), i(this, b).appendChild(e), i(this, f).items = i(this, y), i(this, x).items = i(this, y);
};
export {
  Y as default
};
