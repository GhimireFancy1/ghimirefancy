/* ---------- Product data ---------- */
/* Edit this list any time to add, remove, or change what's shown in the shop. */
const PRODUCTS = [
  {
    id: "ladies-kurti",
    category: "ladies",
    categoryLabel: "Ladies Wear",
    name: "Kurti Set",
    age: "Teen to Adult",
    desc: "Everyday and festive kurti sets in cotton and mixed fabrics, paired with matching bottoms.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "ladies-saree",
    category: "ladies",
    categoryLabel: "Ladies Wear",
    name: "Saree",
    age: "Adult",
    desc: "Plain and printed sarees for daily wear and special occasions. Blouse stitching available.",
    sizes: ["Free Size"]
  },
  {
    id: "ladies-salwar",
    category: "ladies",
    categoryLabel: "Ladies Wear",
    name: "Salwar Suit",
    age: "Teen to Adult",
    desc: "Three-piece salwar suits in seasonal prints and colours.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "ladies-gown",
    category: "ladies",
    categoryLabel: "Ladies Wear",
    name: "Party Gown",
    age: "Teen to Adult",
    desc: "Party and occasion wear gowns for evenings out and celebrations.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "mens-shirt",
    category: "mens",
    categoryLabel: "Mens Wear",
    name: "Formal & Casual Shirts",
    age: "Teen to Adult",
    desc: "Cotton and mixed-fabric shirts for office wear and casual outings.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "mens-pants",
    category: "mens",
    categoryLabel: "Mens Wear",
    name: "Trousers",
    age: "Teen to Adult",
    desc: "Formal and casual trousers in regular and slim fits.",
    sizes: ["30", "32", "34", "36", "38", "40"]
  },
  {
    id: "mens-daura",
    category: "mens",
    categoryLabel: "Mens Wear",
    name: "Daura Suruwal",
    age: "Adult",
    desc: "Traditional daura suruwal sets, stitched to measure for festivals and formal events.",
    sizes: ["Made to Order"]
  },
  {
    id: "mens-tshirt",
    category: "mens",
    categoryLabel: "Mens Wear",
    name: "T-Shirts",
    age: "Teen to Adult",
    desc: "Everyday round-neck and collared t-shirts in plain and printed styles.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "baby-romper",
    category: "baby",
    categoryLabel: "Baby Wear",
    name: "Rompers",
    age: "0 – 12 Months",
    desc: "Soft cotton rompers for newborns and infants, easy-open styles for quick changing.",
    sizes: ["0-3m", "3-6m", "6-9m", "9-12m"]
  },
  {
    id: "baby-frock",
    category: "baby",
    categoryLabel: "Baby Wear",
    name: "Frocks",
    age: "1 – 5 Years",
    desc: "Everyday and party frocks for toddlers and young girls.",
    sizes: ["1-2y", "2-3y", "3-4y", "4-5y"]
  },
  {
    id: "baby-set",
    category: "baby",
    categoryLabel: "Baby Wear",
    name: "Top & Bottom Sets",
    age: "0 – 3 Years",
    desc: "Matching two-piece sets for daily wear, in breathable cotton.",
    sizes: ["0-6m", "6-12m", "1-2y", "2-3y"]
  },
  {
    id: "baby-party",
    category: "baby",
    categoryLabel: "Baby Wear",
    name: "Kids Party Wear",
    age: "2 – 8 Years",
    desc: "Special-occasion outfits for birthdays, festivals and family functions.",
    sizes: ["2-3y", "3-4y", "5-6y", "7-8y"]
  }
];

const PHONE = "9779845066635"; // country code + number, no plus, for wa.me links
const PHONE_DISPLAY = "9845066635";

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
    card.innerHTML = `
      <span class="card-tag">${p.categoryLabel}</span>
      <h3>${p.name}</h3>
      <p class="card-age">Age: ${p.age}</p>
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

  modalBody.innerHTML = `
    <p class="modal-eyebrow">${product.categoryLabel}</p>
    <h2 id="modalTitle">${product.name}</h2>
    <p class="modal-desc">${product.desc}</p>

    <div class="modal-block">
      <h4>Age Group</h4>
      <div class="chip-row"><span class="chip selected">${product.age}</span></div>
    </div>

    <div class="modal-block">
      <h4>Available Sizes</h4>
      <div class="chip-row" id="sizeChips">
        ${product.sizes.map(s => `<button type="button" class="chip">${s}</button>`).join("")}
      </div>
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

  // size chip selection (informational only, no cart/checkout)
  const chips = modalBody.querySelectorAll("#sizeChips .chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
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

/* ---------- Footer year ---------- */
document.getElementById("yearLine").textContent = `© ${new Date().getFullYear()} Ghimire Fancy & Baby Collection`;

/* ---------- Init ---------- */
renderGrid();
