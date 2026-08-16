/* ---------------------------------------------------
   GHIMIRE FANCY & BABY COLLECTION
   Grid data, filtering, lightbox, nav toggle
--------------------------------------------------------- */

const ITEMS = [
  // LADIES
  {
    category: "ladies", tag: "Ladies Wear",
    title: "Crop Top &amp; Baggy Jeans — Street Fit",
    desc: "An easy crop top paired with a fuller, baggy-fit jean. A relaxed, everyday silhouette for younger customers.",
    img: "https://images.pexels.com/photos/25484767/pexels-photo-25484767.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "big"
  },
  {
    category: "ladies", tag: "Ladies Wear",
    title: "Blue Kurti — Casual Ethnic",
    desc: "A comfortable everyday kurti, easy to dress up or down. Sizes run small to full adult.",
    img: "https://images.pexels.com/photos/19556879/pexels-photo-19556879.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "tall"
  },
  {
    category: "ladies", tag: "Ladies Wear",
    title: "White Shirt &amp; Slim Jeans — Smart Casual",
    desc: "A clean, tailored shirt with a slim-fit jean — a versatile pick for college or work.",
    img: "https://images.pexels.com/photos/19171630/pexels-photo-19171630.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "small"
  },
  {
    category: "ladies", tag: "Ladies Wear",
    title: "Crop Top &amp; Baggy Jeans — Court Look",
    desc: "A bolder crop top and baggy jean combination for a sportier, street-ready look.",
    img: "https://images.pexels.com/photos/20635528/pexels-photo-20635528.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "wide"
  },
  {
    category: "ladies", tag: "Ladies Wear",
    title: "T-Shirt &amp; Baggy Jeans — Casual Day",
    desc: "A simple tee with a roomy, baggy-fit jean for everyday comfort.",
    img: "https://images.pexels.com/photos/18419901/pexels-photo-18419901.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "small"
  },
  {
    category: "ladies", tag: "Ladies Wear",
    title: "Black Top &amp; Slim Jeans — Everyday",
    desc: "A fitted top with a slim-cut denim jean — a dependable everyday staple.",
    img: "https://images.pexels.com/photos/3961628/pexels-photo-3961628.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "small"
  },

  // MENS
  {
    category: "mens", tag: "Mens Wear",
    title: "White T-Shirt — Everyday",
    desc: "A plain, well-fitted white tee for daily wear — the kind of basic every wardrobe needs.",
    img: "https://images.pexels.com/photos/17630522/pexels-photo-17630522.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "wide"
  },
  {
    category: "mens", tag: "Mens Wear",
    title: "Shirt &amp; Slim Jeans — Studio",
    desc: "A crisp shirt tucked into slim-fit denim — a sharper option for outings and functions.",
    img: "https://images.pexels.com/photos/9775489/pexels-photo-9775489.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "tall"
  },
  {
    category: "mens", tag: "Mens Wear",
    title: "Shirt &amp; Baggy Jeans — Street Look",
    desc: "A relaxed shirt over a fuller, baggy-fit jean — a looser, streetwear-leaning combination.",
    img: "https://images.pexels.com/photos/10400987/pexels-photo-10400987.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "small"
  },
  {
    category: "mens", tag: "Mens Wear",
    title: "Graphic Tee &amp; Baggy Fit — Casual",
    desc: "A printed t-shirt with a wide-leg, baggy jean for an off-duty, everyday look.",
    img: "https://images.pexels.com/photos/38979816/pexels-photo-38979816.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "small"
  },

  // BABY
  {
    category: "baby", tag: "Baby Wear",
    title: "Newborn Set — Striped Cotton",
    desc: "Soft striped cotton, gentle on newborn skin. Available in a spread of small sizes.",
    img: "https://images.pexels.com/photos/34121887/pexels-photo-34121887.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "small"
  },
  {
    category: "baby", tag: "Baby Wear",
    title: "Baby Onesie — Soft Cotton",
    desc: "An easy, breathable everyday piece for the smallest sizes in store.",
    img: "https://images.pexels.com/photos/29015875/pexels-photo-29015875.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "wide"
  },
  {
    category: "baby", tag: "Baby Wear",
    title: "Infant Suit &amp; Bib — Daily Wear",
    desc: "A practical daily set, easy to layer through the changing seasons.",
    img: "https://images.pexels.com/photos/3875082/pexels-photo-3875082.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "small"
  },
  {
    category: "baby", tag: "Baby Wear",
    title: "Kids Festive Set — Group Look",
    desc: "Coordinated festive pieces for siblings and cousins to match on celebration days.",
    img: "https://images.pexels.com/photos/14325735/pexels-photo-14325735.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "big"
  },
  {
    category: "baby", tag: "Baby Wear",
    title: "Kids Costume — Special Occasion",
    desc: "A dressed-up option for birthdays, functions and photo days.",
    img: "https://images.pexels.com/photos/7364254/pexels-photo-7364254.jpeg?auto=compress&cs=tinysrgb&w=1200",
    span: "small"
  }
];

const grid = document.getElementById("grid");
const filterRow = document.getElementById("filterRow");

function renderGrid(filter){
  grid.innerHTML = "";
  ITEMS.forEach((item, i) => {
    const match = filter === "all" || item.category === filter;
    const el = document.createElement("div");
    el.className = `g-item ${item.span || ""}`;
    el.dataset.category = item.category;
    if(!match) el.classList.add("hide");
    el.innerHTML = `
      <img src="${item.img}" alt="${item.title.replace(/&amp;/g,'&')} — reference photo" loading="lazy" decoding="async">
      <span class="g-corner">＋</span>
      <div class="g-caption">
        <span class="g-tag">${item.tag}</span>
        <span class="g-title">${item.title}</span>
      </div>
    `;
    el.addEventListener("click", () => openLightbox(item));
    grid.appendChild(el);

    // staggered reveal
    requestAnimationFrame(() => {
      setTimeout(() => { if(match) el.classList.add("show"); }, i * 40);
    });
  });
}

filterRow.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if(!btn) return;
  filterRow.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderGrid(btn.dataset.filter);
});

renderGrid("all");

/* ---------------- Lightbox ---------------- */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCategory = document.getElementById("lightboxCategory");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDesc = document.getElementById("lightboxDesc");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(item){
  lightboxImg.src = item.img.replace("w=1200", "w=1400");
  lightboxImg.alt = item.title.replace(/&amp;/g,'&');
  lightboxCategory.textContent = item.tag;
  lightboxTitle.innerHTML = item.title;
  lightboxDesc.textContent = item.desc;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox(){
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeLightbox(); });

/* ---------------- Mobile nav ---------------- */
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen);
});

mainNav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});
