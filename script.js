/* ---------- Reference icons ---------- */
/* Simple line-art silhouettes (not photos) used purely as a visual reference for each item. */
const ICONS = {
  kurti: `<svg viewBox="0 0 100 100"><path d="M38 8 L30 20 L26 92 L74 92 L70 20 L62 8" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M38 8 Q50 18 62 8" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M30 20 L14 40 L22 46 L32 32" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M70 20 L86 40 L78 46 L68 32" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="26" y1="60" x2="74" y2="60" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/></svg>`,
  saree: `<svg viewBox="0 0 100 100"><path d="M42 6 L34 18 L20 90" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M58 6 L66 18 L80 90" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M34 18 Q50 30 66 18" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M40 30 Q50 55 34 90" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M50 30 Q58 60 46 90" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="20" y1="90" x2="80" y2="90" stroke="currentColor" stroke-width="2.2"/></svg>`,
  salwar: `<svg viewBox="0 0 100 100"><path d="M36 6 L28 16 L26 46 L74 46 L72 16 L64 6" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M36 6 Q50 14 64 6" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M30 46 L24 94 L42 94 L46 50" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M70 46 L76 94 L58 94 L54 50" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>`,
  gown: `<svg viewBox="0 0 100 100"><path d="M38 6 L30 16 L20 92 L80 92 L70 16 L62 6" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M38 6 Q50 16 62 6" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M30 16 Q50 40 70 16" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="20" y1="92" x2="80" y2="92" stroke="currentColor" stroke-width="2.2"/></svg>`,
  shirt: `<svg viewBox="0 0 100 100"><path d="M38 8 L20 22 L28 34 L36 28 L34 90 L66 90 L64 28 L72 34 L80 22 L62 8 L54 14 L46 14 Z" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="50" y1="16" x2="50" y2="88" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/></svg>`,
  pants: `<svg viewBox="0 0 100 100"><path d="M30 8 L28 92 L42 92 L50 40 L58 92 L72 92 L70 8 Z" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="30" y1="8" x2="70" y2="8" stroke="currentColor" stroke-width="2.2"/><line x1="50" y1="8" x2="50" y2="30" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/></svg>`,
  daura: `<svg viewBox="0 0 100 100"><path d="M40 6 L22 20 L30 32 L38 26 L34 60 L30 92 L44 92 L50 60 L56 92 L70 92 L66 60 L62 26 L70 32 L78 20 L60 6 L50 12 Z" fill="none" stroke="currentColor" stroke-width="2.1"/><path d="M40 6 Q50 24 60 6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`,
  tshirt: `<svg viewBox="0 0 100 100"><path d="M36 10 L18 24 L26 36 L34 30 L32 88 L68 88 L66 30 L74 36 L82 24 L64 10 L56 16 L44 16 Z" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>`,
  romper: `<svg viewBox="0 0 100 100"><path d="M32 10 L20 20 L26 30 L34 24 L34 44 L26 92 L40 92 L46 56 L54 56 L60 92 L74 92 L66 44 L66 24 L74 30 L80 20 L68 10 L58 16 L42 16 Z" fill="none" stroke="currentColor" stroke-width="2.1"/></svg>`,
  frock: `<svg viewBox="0 0 100 100"><path d="M40 8 L30 18 L24 34 L34 40 L38 30 L34 90 L66 90 L62 30 L66 40 L76 34 L70 18 L60 8" fill="none" stroke="currentColor" stroke-width="2.1"/><path d="M40 8 Q50 16 60 8" fill="none" stroke="currentColor" stroke-width="2.1"/></svg>`,
  babyset: `<svg viewBox="0 0 100 100"><path d="M34 8 L22 18 L28 30 L36 24 L36 48 L64 48 L64 24 L72 30 L78 18 L66 8 L58 14 L42 14 Z" fill="none" stroke="currentColor" stroke-width="2.1"/><path d="M32 54 L30 92 L46 92 L50 68 L54 92 L70 92 L68 54 Z" fill="none" stroke="currentColor" stroke-width="2.1"/></svg>`,
  kidsdress: `<svg viewBox="0 0 100 100"><path d="M42 6 L32 16 L26 30 L36 36 L40 28 L36 88 L64 88 L60 28 L64 36 L74 30 L68 16 L58 6" fill="none" stroke="currentColor" stroke-width="2.1"/><path d="M42 6 Q50 14 58 6" fill="none" stroke="currentColor" stroke-width="2.1"/><line x1="30" y1="70" x2="70" y2="70" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/></svg>`
};

/* ---------- Product data ---------- */
/* Edit this list any time to add, remove, or change what's shown in the shop. */
const PRODUCTS = [
  {
    id: "ladies-kurti",
    category: "ladies",
    categoryLabel: "Ladies Wear",
    name: "Kurti Set",
    age: "Teen to Adult",
    icon: "kurti",
    desc: "Everyday and festive kurti sets in cotton and mixed fabrics, paired with matching bottoms.",
    details: [
      "Fabric: Cotton, rayon and cotton-blend options",
      "Set includes: Kurti top with matching bottom; dupatta available on request",
      "Fit: Straight and A-line cuts, regular and relaxed fit",
      "Occasion: Daily wear, office wear and festive wear prints",
      "Care: Machine or hand wash, iron on low heat"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: 2200
  },
  {
    id: "ladies-saree",
    category: "ladies",
    categoryLabel: "Ladies Wear",
    name: "Saree",
    age: "Adult",
    icon: "saree",
    desc: "Plain and printed sarees for daily wear and special occasions. Blouse stitching available.",
    details: [
      "Fabric: Cotton, silk-blend and georgette options",
      "Length: Standard 5.5m saree with matching or contrast blouse piece",
      "Blouse stitching: Made to your measurements at the shop",
      "Occasion: Daily wear, festive and wedding-guest sarees",
      "Care: Dry clean recommended for silk and georgette varieties"
    ],
    sizes: ["Free Size"],
    price: 3200
  },
  {
    id: "ladies-salwar",
    category: "ladies",
    categoryLabel: "Ladies Wear",
    name: "Salwar Suit",
    age: "Teen to Adult",
    icon: "salwar",
    desc: "Three-piece salwar suits in seasonal prints and colours.",
    details: [
      "Fabric: Cotton and cotton-blend prints, seasonal collections",
      "Set includes: Top, salwar bottom and matching dupatta",
      "Fit: Straight-cut top with regular or patiala-style bottom",
      "Occasion: Daily wear and family functions",
      "Care: Machine wash cold, iron on low heat"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: 2600
  },
  {
    id: "ladies-gown",
    category: "ladies",
    categoryLabel: "Ladies Wear",
    name: "Party Gown",
    age: "Teen to Adult",
    icon: "gown",
    desc: "Party and occasion wear gowns for evenings out and celebrations.",
    details: [
      "Fabric: Satin, net and mixed-fabric options",
      "Style: Fitted bodice with flared or A-line skirt",
      "Occasion: Parties, receptions and evening functions",
      "Alterations: Length and fit adjustments available in-store",
      "Care: Dry clean recommended"
    ],
    sizes: ["S", "M", "L", "XL"],
    price: 3800
  },
  {
    id: "mens-shirt",
    category: "mens",
    categoryLabel: "Mens Wear",
    name: "Formal & Casual Shirts",
    age: "Teen to Adult",
    icon: "shirt",
    desc: "Cotton and mixed-fabric shirts for office wear and casual outings.",
    details: [
      "Fabric: Cotton and cotton-blend, plain and checked options",
      "Fit: Regular and slim fit available",
      "Collar: Classic and mandarin collar styles",
      "Occasion: Office wear, festive wear and casual daily use",
      "Care: Machine wash, iron on medium heat"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: 2100
  },
  {
    id: "mens-pants",
    category: "mens",
    categoryLabel: "Mens Wear",
    name: "Trousers",
    age: "Teen to Adult",
    icon: "pants",
    desc: "Formal and casual trousers in regular and slim fits.",
    details: [
      "Fabric: Cotton, terry-cotton and formal blends",
      "Fit: Regular and slim fit, mid-rise waist",
      "Style: Flat-front and pleated options",
      "Occasion: Office wear, formal events and daily use",
      "Alterations: Length hemming done at the shop"
    ],
    sizes: ["30", "32", "34", "36", "38", "40"],
    price: 2300
  },
  {
    id: "mens-daura",
    category: "mens",
    categoryLabel: "Mens Wear",
    name: "Daura Suruwal",
    age: "Adult",
    icon: "daura",
    desc: "Traditional daura suruwal sets, stitched to measure for festivals and formal events.",
    details: [
      "Fabric: Cotton and blended fabric, festive and formal colours",
      "Set includes: Daura (top), suruwal (bottom); coat and topi on request",
      "Fit: Made to measure — measurements taken in-store",
      "Occasion: Festivals, weddings and formal cultural events",
      "Turnaround: Please ask in-store for stitching time"
    ],
    sizes: ["Made to Order"],
    price: 3900
  },
  {
    id: "mens-tshirt",
    category: "mens",
    categoryLabel: "Mens Wear",
    name: "T-Shirts",
    age: "Teen to Adult",
    icon: "tshirt",
    desc: "Everyday round-neck and collared t-shirts in plain and printed styles.",
    details: [
      "Fabric: 100% cotton and cotton-blend jersey",
      "Style: Round-neck and polo-collar options",
      "Fit: Regular fit",
      "Occasion: Casual daily wear",
      "Care: Machine wash cold, do not bleach"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: 2000
  },
  {
    id: "baby-romper",
    category: "baby",
    categoryLabel: "Baby Wear",
    name: "Rompers",
    age: "0 – 12 Months",
    icon: "romper",
    desc: "Soft cotton rompers for newborns and infants, easy-open styles for quick changing.",
    details: [
      "Fabric: Soft, breathable cotton — gentle on sensitive skin",
      "Style: Snap or zip closure for easy nappy changes",
      "Sleeve options: Short sleeve and sleeveless available",
      "Occasion: Everyday wear and sleepwear",
      "Care: Machine wash warm, mild detergent recommended"
    ],
    sizes: ["0-3m", "3-6m", "6-9m", "9-12m"],
    prices: [1500, 1560, 1620, 1680]
  },
  {
    id: "baby-frock",
    category: "baby",
    categoryLabel: "Baby Wear",
    name: "Frocks",
    age: "1 – 5 Years",
    icon: "frock",
    desc: "Everyday and party frocks for toddlers and young girls.",
    details: [
      "Fabric: Cotton for daily wear; net and satin for party styles",
      "Style: A-line and frilled hem designs",
      "Occasion: Daily wear and birthday or festival wear",
      "Fit: True to age size, room to grow in select styles",
      "Care: Hand wash recommended for party fabrics"
    ],
    sizes: ["1-2y", "2-3y", "3-4y", "4-5y"],
    prices: [1650, 1730, 1810, 1890]
  },
  {
    id: "baby-set",
    category: "baby",
    categoryLabel: "Baby Wear",
    name: "Top & Bottom Sets",
    age: "0 – 3 Years",
    icon: "babyset",
    desc: "Matching two-piece sets for daily wear, in breathable cotton.",
    details: [
      "Fabric: Breathable cotton, soft on baby's skin",
      "Set includes: Top and matching bottom",
      "Style: Prints, stripes and plain colour options",
      "Occasion: Everyday wear",
      "Care: Machine wash warm, tumble dry low"
    ],
    sizes: ["0-6m", "6-12m", "1-2y", "2-3y"],
    prices: [1520, 1600, 1680, 1760]
  },
  {
    id: "baby-party",
    category: "baby",
    categoryLabel: "Baby Wear",
    name: "Kids Party Wear",
    age: "2 – 8 Years",
    icon: "kidsdress",
    desc: "Special-occasion outfits for birthdays, festivals and family functions.",
    details: [
      "Fabric: Net, satin and embellished fabric options",
      "Style: Frilled and layered party dresses, festive sets for boys",
      "Occasion: Birthdays, festivals and family celebrations",
      "Fit: True to age size; alterations available on request",
      "Care: Dry clean recommended for embellished pieces"
    ],
    sizes: ["2-3y", "3-4y", "5-6y", "7-8y"],
    prices: [1750, 1820, 1900, 1990]
  }
];

const PHONE = "9779845221970"; // country code + number, no plus, for wa.me links
const PHONE_DISPLAY = "9845221970";
const DISCOUNT_PERCENT = 14.99; // applied when ordered via phone / WhatsApp enquiry

/* ---------- Pricing helpers ---------- */
function formatRs(n) {
  return "Rs. " + Math.round(n).toLocaleString("en-IN");
}
function basePrice(product, sizeIndex) {
  if (product.prices) {
    const i = (sizeIndex !== undefined && sizeIndex >= 0) ? sizeIndex : 0;
    return product.prices[i];
  }
  return product.price;
}
function discountedPrice(price) {
  const discounted = price * (1 - DISCOUNT_PERCENT / 100);
  return Math.round(discounted / 5) * 5; // round to nearest 5
}

/* ---------- Elements ---------- */
const grid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const tabs = document.querySelectorAll(".tab");
const searchInput = document.getElementById("searchInput");
const modalOverlay = document.getElementById("modalOverlay");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

let activeFilter = "all";
let searchTerm = "";

/* ---------- Render grid ---------- */
function renderGrid() {
  const filtered = PRODUCTS.filter(p => {
    const matchesFilter = activeFilter === "all" || p.category === activeFilter;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm) ||
                           p.categoryLabel.toLowerCase().includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  grid.innerHTML = "";
  emptyState.hidden = filtered.length !== 0;

  filtered.forEach(p => {
    const card = document.createElement("button");
    card.className = "product-card reveal";
    card.type = "button";
    card.setAttribute("aria-label", `View details for ${p.name}`);
    const price = basePrice(p, 0);
    const discPrice = discountedPrice(price);
    card.innerHTML = `
      <span class="card-image" aria-hidden="true">${ICONS[p.icon] || ""}</span>
      <span class="card-tag">${p.categoryLabel}</span>
      <h3>${p.name}</h3>
      <p class="card-age">Age: ${p.age}</p>
      <p class="card-price">
        <span class="price-was">${formatRs(price)}</span>
        <span class="price-now">${formatRs(discPrice)}</span>
      </p>
      <p class="card-discount">14.99% off · call or WhatsApp to enquire</p>
      <span class="card-arrow"><span>View details</span><span>&rarr;</span></span>
    `;
    card.addEventListener("click", () => openModal(p));
    grid.appendChild(card);
  });

  requestAnimationFrame(observeReveals);
}

/* ---------- Tabs ---------- */
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    activeFilter = tab.dataset.filter;
    renderGrid();
  });
});

/* ---------- Search ---------- */
searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value.trim().toLowerCase();
  renderGrid();
});

/* ---------- Modal ---------- */
function openModal(product) {
  const waMessage = encodeURIComponent(
    `Hello, I'm interested in "${product.name}" from Ghimire Fancy & Baby Collection. Could you tell me more about availability?`
  );

  const initialPrice = basePrice(product, 0);
  const initialDisc = discountedPrice(initialPrice);

  modalBody.innerHTML = `
    <span class="modal-image" aria-hidden="true">${ICONS[product.icon] || ""}</span>
    <p class="modal-eyebrow">${product.categoryLabel}</p>
    <h2 id="modalTitle">${product.name}</h2>
    <p class="modal-desc">${product.desc}</p>

    <div class="modal-price-box">
      <div class="modal-price-row">
        <span class="price-was" id="modalPriceWas">${formatRs(initialPrice)}</span>
        <span class="price-now" id="modalPriceNow">${formatRs(initialDisc)}</span>
      </div>
      <p class="modal-price-note">14.99% off marked price when you order through a phone or WhatsApp enquiry</p>
    </div>

    <div class="modal-block">
      <h4>Age Group</h4>
      <div class="chip-row"><span class="chip selected">${product.age}</span></div>
    </div>

    <div class="modal-block">
      <h4>Available Sizes ${product.prices ? "<span class='chip-hint'>(price varies by size)</span>" : ""}</h4>
      <div class="chip-row" id="sizeChips">
        ${product.sizes.map((s, i) => `<button type="button" class="chip${i === 0 ? " selected" : ""}" data-index="${i}">${s}</button>`).join("")}
      </div>
    </div>

    <div class="modal-block">
      <h4>Details</h4>
      <ul class="detail-list">
        ${product.details.map(d => `<li>${d}</li>`).join("")}
      </ul>
    </div>

    <div class="modal-block custom-fit">
      <label for="customFit">Need a different age or size? Tell us here</label>
      <input type="text" id="customFit" placeholder="e.g. Age 6 years, or waist 30 inches">
      <p class="custom-confirm" id="customConfirm">Noted — mention this when you call or message us and we'll check what we can arrange.</p>
    </div>

    <div class="modal-actions">
      <a class="btn btn-primary" href="tel:+${PHONE}">Call to Enquire</a>
      <a class="btn btn-outline" href="https://wa.me/${PHONE}?text=${waMessage}" target="_blank" rel="noopener">WhatsApp</a>
    </div>
  `;

  // size chip selection — updates price live for items priced by age/size
  const chips = modalBody.querySelectorAll("#sizeChips .chip");
  const priceWasEl = modalBody.querySelector("#modalPriceWas");
  const priceNowEl = modalBody.querySelector("#modalPriceNow");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      const idx = Number(chip.dataset.index);
      const p = basePrice(product, idx);
      priceWasEl.textContent = formatRs(p);
      priceNowEl.textContent = formatRs(discountedPrice(p));
    });
  });

  // custom fit note confirmation
  const customInput = modalBody.querySelector("#customFit");
  const customConfirm = modalBody.querySelector("#customConfirm");
  customInput.addEventListener("input", () => {
    customConfirm.classList.toggle("show", customInput.value.trim().length > 0);
  });

  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ---------- Mobile nav ---------- */
navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

/* ---------- Scroll reveal ---------- */
function observeReveals() {
  const items = document.querySelectorAll(".reveal:not(.in-view)");
  if (!("IntersectionObserver" in window)) {
    items.forEach(i => i.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(i => observer.observe(i));
}

/* ---------- Hero animated background ---------- */
function setupHeroBackground() {
  const heroBg = document.getElementById("heroBg");
  if (!heroBg) return;
  const iconKeys = Object.keys(ICONS);
  const count = 10;
  for (let i = 0; i < count; i++) {
    const key = iconKeys[i % iconKeys.length];
    const size = 40 + Math.random() * 60;
    const top = Math.random() * 90;
    const left = Math.random() * 90;
    const duration = 8 + Math.random() * 10;
    const delay = Math.random() * -12;

    const el = document.createElement("span");
    el.className = "drift-icon";
    el.style.width = size + "px";
    el.style.height = size + "px";
    el.style.top = top + "%";
    el.style.left = left + "%";
    el.style.animationDuration = duration + "s";
    el.style.animationDelay = delay + "s";
    el.innerHTML = ICONS[key];
    heroBg.appendChild(el);
  }
}
setupHeroBackground();

/* ---------- Footer year ---------- */
document.getElementById("yearLine").textContent = `© ${new Date().getFullYear()} Ghimire Fancy & Baby Collection`;

/* ---------- Init ---------- */
renderGrid();
