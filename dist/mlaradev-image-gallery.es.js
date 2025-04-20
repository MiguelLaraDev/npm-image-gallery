var H = (n) => {
  throw TypeError(n);
};
var $ = (n, t, s) => t.has(n) || H("Cannot " + s);
var e = (n, t, s) => ($(n, t, "read from private field"), s ? s.call(n) : t.get(n)), d = (n, t, s) => t.has(n) ? H("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, s), l = (n, t, s, i) => ($(n, t, "write to private field"), i ? i.call(n, s) : t.set(n, s), s), a = (n, t, s) => ($(n, t, "access private method"), s);
const P = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg>`, R = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg>`, X = {
  mainColor: "grey"
};
var r, m, v, p, f, h, I, N, B, x, q, k, O, W;
class j {
  constructor(t) {
    d(this, h);
    d(this, r, 0);
    d(this, m);
    d(this, v, []);
    d(this, p);
    d(this, f);
    l(this, m, document.createElement("div")), l(this, p, document.createElement("div")), l(this, f, { ...X, ...t }), a(this, h, I).call(this);
  }
  get element() {
    return e(this, m);
  }
  set items(t) {
    l(this, v, t), l(this, r, 0), a(this, h, W).call(this);
  }
}
r = new WeakMap(), m = new WeakMap(), v = new WeakMap(), p = new WeakMap(), f = new WeakMap(), h = new WeakSet(), I = function() {
  e(this, m).classList.add("slider"), e(this, p).classList.add("list"), e(this, m).append(e(this, p)), a(this, h, B).call(this), a(this, h, N).call(this), document.addEventListener("thumbnailClick", (t) => {
    const s = t, { index: i } = s.detail.item;
    a(this, h, O).call(this, i);
  });
}, N = async function() {
  const t = new CSSStyleSheet();
  await t.replace(`
      .nav {
        background-color: ${e(this, f).mainColor};
      }
    `), document.adoptedStyleSheets = [...document.adoptedStyleSheets, t];
}, B = function() {
  const t = document.createElement("button");
  t.classList.add("nav", "left"), t.innerHTML = P, t.addEventListener("click", () => a(this, h, x).call(this, "left"));
  const s = document.createElement("button");
  s.classList.add("nav", "right"), s.innerHTML = R, s.addEventListener("click", () => a(this, h, x).call(this, "right")), e(this, m).append(t), e(this, m).append(s);
}, x = function(t) {
  l(this, r, e(this, r) + (t === "right" ? 1 : -1)), l(this, r, (e(this, r) + e(this, v).length) % e(this, v).length), a(this, h, k).call(this), a(this, h, q).call(this);
}, q = function() {
  if (!e(this, v).length) return;
  const t = new CustomEvent("navClick", {
    detail: {
      item: {
        id: e(this, v)[e(this, r)].id,
        index: e(this, r)
      }
    },
    bubbles: !0
  });
  document.dispatchEvent(t);
}, k = function() {
  const t = e(this, m).clientWidth;
  e(this, p).style.transform = `translateX(${t * e(this, r) * -1}px)`;
}, O = function(t) {
  l(this, r, t), a(this, h, k).call(this);
}, W = function() {
  const t = document.createDocumentFragment();
  e(this, v).forEach((s) => {
    const i = document.createElement("div");
    i.innerHTML = `<img src="${s.sizes.large}" alt="${s.alt}">`, i.id = `slide-${s.id}`, i.classList.add("slide"), t.append(i);
  }), e(this, p).replaceChildren(t);
};
const A = {
  borderColor: "grey",
  borderWidth: "1px",
  width: 100,
  height: 100,
  useBorder: !0
};
var u, S, b, g, z, D, M;
class J {
  constructor(t) {
    d(this, g);
    d(this, u);
    d(this, S, []);
    d(this, b);
    l(this, u, document.createElement("div")), e(this, u).className = "thumbnail-container", l(this, b, { ...A, ...t }), document.addEventListener("navClick", (s) => {
      const i = s, { id: o, index: c } = i.detail.item;
      a(this, g, M).call(this, o, c);
    }), a(this, g, z).call(this);
  }
  get element() {
    return e(this, u);
  }
  set items(t) {
    l(this, S, t), a(this, g, D).call(this);
  }
}
u = new WeakMap(), S = new WeakMap(), b = new WeakMap(), g = new WeakSet(), z = async function() {
  const t = new CSSStyleSheet(), { width: s, height: i, useBorder: o, borderWidth: c, borderColor: T } = e(this, b), G = o ? `${c} solid ${T}` : "none";
  await t.replace(`
      .custom-thumb {
        border: ${G};
        width: ${s}px;
        height: ${i}px;
      }
      .selected {
        border-top: 4px solid ${T} !important;
      }
    `), document.adoptedStyleSheets = [...document.adoptedStyleSheets, t];
}, D = function() {
  e(this, u).innerHTML = "";
  const { width: t, height: s } = e(this, b);
  e(this, S).forEach((i, o) => {
    const c = document.createElement("div");
    c.id = i.id, c.classList.add("thumb", "custom-thumb"), c.innerHTML = `<img src="${i.sizes.thumbnail}" alt="${i.alt}" width="${t}" height="${s}">`, c.addEventListener("click", () => a(this, g, M).call(this, i.id, o)), o === 0 && c.classList.add("selected"), e(this, u).appendChild(c);
  });
}, M = function(t, s) {
  const i = e(this, u).querySelector(".selected");
  i == null || i.classList.remove("selected");
  const o = e(this, u).querySelector(`#${t}`);
  o == null || o.classList.add("selected");
  const c = new CustomEvent("thumbnailClick", {
    detail: { item: { id: t, index: s } },
    bubbles: !0
  });
  document.dispatchEvent(c);
};
var w, E, L, C, y, F;
class Q {
  constructor(t, s, i) {
    d(this, y);
    d(this, w);
    d(this, E);
    d(this, L);
    d(this, C, []);
    if (l(this, w, document.querySelector(t)), l(this, C, s), l(this, E, new j(i == null ? void 0 : i.slider)), l(this, L, new J(i == null ? void 0 : i.thumbs)), !e(this, w))
      throw new Error(`Element with selector "${t}" not found`);
    a(this, y, F).call(this);
  }
}
w = new WeakMap(), E = new WeakMap(), L = new WeakMap(), C = new WeakMap(), y = new WeakSet(), F = function() {
  const t = document.createElement("div");
  t.className = "image-gallery", t.append(e(this, E).element), t.append(e(this, L).element), e(this, w).appendChild(t), e(this, E).items = e(this, C), e(this, L).items = e(this, C);
};
export {
  Q as default
};
