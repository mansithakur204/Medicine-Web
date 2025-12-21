const medicines = [
  {
    name: "Daraprin",
    price: "Rs. 250",
    image: "https://dwaey.com/medrg/upload/1723992724.png",
    alternatives: [
      {
        name: "Daramin",
        manufacturer: "Indica Laboratories Pvt Ltd",
        price: "Rs. 15",
        image:
          "https://www.netmeds.com/images/product-v1/600x600/1136339/daramin_25mg_tablet_10s_742022_0_0.jpg",
        link: "https://www.1mg.com/drugs/daramin-25mg-tablet-201707",
      },
    ],
  },

  {
    name: "Zytiga",
    price: "Rs. 75000",
    image:
      "https://assets.mrmed.in/product-images/product-images-1719919503102-367500702-Zytiga%20250mg%20Tablet_103434.jpg",
    alternatives: [
      {
        name: "Mytera",
        manufacturer: "Mylan Pharma",
        price: "Rs. 15000",
        image:
          "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cx456kwzkuscoxk4bl4d.jpg?format=auto",
        link: "https://www.apollopharmacy.in/medicine/mytera-250mg-tablet-120-s",
      },
      {
        name: "Abitate",
        manufacturer: "RPG Life Sciences",
        price: "Rs. 29000",
        image:
          "https://assets.mrmed.in/product-images/product-images-1632405352428-700552497-100012_1.jpg",
        link: "https://www.apollopharmacy.in/medicine/abitate-250mg-tab-120-s",
      },
    ],
  },

  {
    name: "Glivec",
    price: "Rs. 6600",
    image:
      "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/a0f76dfdb04146cfb0ec1f5099800eb6.jpg",
    link: "https://www.1mg.com/drugs/glivec-400mg-tablet-236606",
    alternatives: [
      {
        name: "Veenat",
        manufacturer: "Natco Pharma",
        price: "Rs. 1500",
        image:
          "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/a5f53d8d234d45a695d7c6f59707c652.jpg",
        link: "https://www.1mg.com/drugs/veenat-400-tablet-14360",
      },
    ],
  },

  {
    name: "Paracetamol",
    price: "Rs. 20-30 per 10 tablets",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/9/QR/AF/MV/69966959/paracip-paracetamol-650-tablet.jpg",
    alternatives: [
      {
        name: "Crocin",
        manufacturer: "GlaxoSmithKline",
        image:
          "https://cdn01.pharmeasy.in/dam/products_otc/H45820/crocin-650-tablet-15-nos-3-1689759566.jpg",
        link: "Crocin",
      },
      {
        name: "Dolo 65",
        manufacturer: "Micro Labs",
        image:
          "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-011691/dolo-650-tablet-15_dolo-650-tablet-15--TM-TACR1-011691_1.png",
        link: "Dolo 65",
      },
      {
        name: "Calpol",
        manufacturer: "GSK",
        image:
          "https://drugstreet.in/wp-content/uploads/2023/12/1000046750.jpg",
        link: "Calpol",
      },
    ],
  },

  {
    name: "Combiflam",
    company: "Sanofi",
    price: "Rs.20-30 per 10 tablets",
    image:
      "https://images.apollo247.in/pub/media/catalog/product/c/o/combiflam_tablet_20_s-1.png?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
    link: "https://www.apollo247.com/medicine/combiflam",
  },
  {
    name: "Ibuprofen",
    company: "Abbott",
    price: "",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/9/344827499/TG/YT/FY/192270567/ibuprofen-tablet-400mg.png",
    link: "https://www.abbott.com/ibuprofen",
  },
  {
    name: "Brufen",
    company: "Abbott",
    price: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUmWwHGkFj5M1SKY0GM-af-pHOyLMcLqRdQ&s",
    link: "https://www.abbott.com/brufen",
  },
  {
    name: "Disprin",
    company: "Reckitt Benckiser",
    price: "Rs. 10-20 for 10 tablets",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfABbWyZY3yywBJtf60mpv4GyfpwTHVj5yGA&s",
    link: "https://www.reckitt.com/products/disprin",
  },
  {
    name: "Ecosprin",
    company: "USV Ltd.",
    price: "",
    image:
      "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-012745/ecosprin-75-tablet-14_ecosprin-75-tablet-14--TM-TACR1-012745_1.png",
    link: "https://www.usv.com/medicines/ecosprin",
  },
  {
    name: "Aspirin",
    company: "Bayer",
    price: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeIfr0UEUuInFvEhsJRyF3aVQKXuaMSIalA&s",
    link: "https://www.bayer.com/aspirin",
  },
  {
    name: "Aspro",
    company: "Nicholas Healthcare Limited",
    price: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SvOcNgxiuLa4yDomGtmGL5e22x6BHuX5qQ&s",
    link: "https://www.nicholashealthcare.com/aspro",
  },
  // ORS products
  {
    name: "ORS",
    company: "",
    price: "Rs. 15-25 per sachet",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/W81928/prolyte-ors-orange-drink-sachet-21-gm-2-1654249497.jpg",
    link: "https://www.pharmeasy.in/product/prolyte-ors-orange-drink-sachet-21-gm-2",
  },
  {
    name: "Electral",
    company: "FDC Ltd",
    price: "",
    image: "https://m.media-amazon.com/images/I/81jrDrIJoNL.jpg",
    link: "https://www.amazon.in/s?k=Electral",
  },
  {
    name: "ORSL",
    company: "Dabur",
    price: "",
    image:
      "https://images.apollo247.in/pub/media/catalog/product/o/r/ors0011_1-1-_1_.jpg",
    link: "https://www.apollo247.com/medicine/orsl",
  },
  {
    name: "Peditral",
    company: "Cipla",
    price: "",
    image:
      "https://images.apollo247.in/pub/media/catalog/product/P/E/PED0040_1_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
    link: "https://www.apollo247.com/medicine/peditral",
  },

  // Vicks & balms
  {
    name: "Vicks Vaporub",
    company: "Procter & Gamble",
    price: "Rs. 40-60 for 25g",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-2-1677525570.jpg",
    link: "https://www.pharmeasy.in/medicine/vicks-vaporub",
  },
  {
    name: "Zandu Balm",
    company: "Emami",
    price: "",
    image: "https://m.media-amazon.com/images/I/617dG3SoVKL.jpg",
    link: "https://www.amazon.in/s?k=Zandu+Balm",
  },
  {
    name: "Amrutanjan",
    company: "Amrutanjan Healthcare",
    price: "",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/010715/amrutanjan-strong-doub-50-ml-2-1674209955.jpg?dim=400x0&dpr=1&q=100",
    link: "https://www.pharmeasy.in/medicine/amrutanjan",
  },
  {
    name: "Tiger Balm",
    company: "Haw Par Healthcare",
    price: "",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/jd1z9u80/body-pain-relief/v/n/b/30-red-ointment-30g-tiger-balm-original-imaf224hjngnfmhs.jpeg?q=90&crop=false",
    link: "https://www.flipkart.com/search?q=Tiger+Balm",
  },

  // Digestion products
  {
    name: "Digene",
    company: "Abbott",
    price: "Rs. 20-40 for 10 tablets or Rs. 60-80 for 200 ml bottle",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/255390/digene-gel-acidity-gas-relief-200ml-mint-flavour-sugar-free-2-1710939921.jpg",
    link: "https://www.pharmeasy.in/medicine/digene",
  },
  {
    name: "ENO",
    company: "GlaxoSmithKline",
    price: "40rs",
    image:
      "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/home/mobile/homepage-header-carousal-1-v3_mobile.jpg?auto=format",
    link: "https://www.gsk.com/en-in/products/eno/",
  },
  {
    name: "Gelusil",
    company: "Pfizer",
    price: "",
    image:
      "https://images.apollo247.in/pub/media/catalog/product/G/E/GEL0002_3_1.jpg",
    link: "https://www.apollo247.com/medicine/gelusil",
  },
  {
    name: "Strepsils",
    company: "Reckitt Benckiser",
    price: "Rs. 30-50 for a pack of 8-10 tablets",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/2/RX/ZI/IF/81505918/strepsils-blister.jpg",
    link: "https://www.reckitt.com/products/strepsils",
  },
  {
    name: "Vicks",
    company: "Procter & Gamble",
    price: "",
    image:
      "https://images.ctfassets.net/umpxkz97ty8t/4tjmmu8xgFdItABWjhpWTA/88afdcd6055df8b4fac3fdea0098dfa5/VCD4-Packs.png",
    link: "https://www.vicks.com/",
  },
  {
    name: "Dabur Honitus",
    company: "Dabur India Ltd",
    price: "",
    image:
      "https://5.imimg.com/data5/UF/HY/GLADMIN-43545561/dabur-honitus-cough-drops.png",
    link: "https://www.dabur.com/products/dabur-honitus",
  },
  {
    name: "Cofsils",
    company: "Cipla Healthcare",
    price: "",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2020/9/HW/ZE/YJ/14356045/cosils-orange.jpg",
    link: "https://www.cipla.com/product/cofsils",
  },

  {
    name: "Benadryl",
    company: "Johnson & Johnson",
    price: "Rs. 50-80 per bottle (100 ml)",
    image:
      "https://images.apollo247.in/pub/media/catalog/product/b/e/ben0053_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
    link: "https://www.apollo247.com/medicine/benadryl",
  },
  {
    name: "Corex",
    company: "Pfizer",
    price: "",
    image:
      "https://shreedashrath.com/wp-content/uploads/2021/06/corex-600x600.jpg",
    link: "https://www.pfizer.com/products/corex",
  },
  {
    name: "Ascoril-D",
    company: "Glenmark",
    price: "",
    image:
      "https://images.apollo247.in/pub/media/catalog/product/a/s/asc0019.jpg",
    link: "https://www.apollo247.com/medicine/ascoril-d",
  },
  {
    name: "Augmentin 1000 Duo Tablet",
    company: "",
    price: "Rs. 1000",
    image:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/bodminug3xmfcubbrdix.jpg?format=auto",
    link: "https://www.1mg.com/medicine/augmentin-1000-duo-tablet",
  },
  {
    name: "Clavam",
    company: "Alkem Laboratories",
    price: "Rs. 193",
    image:
      "https://images.apollo247.in/pub/media/catalog/product/c/l/cla0004.jpg",
    link: "https://www.apollo247.com/medicine/clavam",
  },
  {
    name: "Crestor",
    company: "AstraZeneca",
    price: "Rs. 732",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Jd-k1uea3upVeTJNmtS8y9ASkNOwsxN8Uw&s",
    link: "https://www.astrazeneca.com/medicines/crestor.html",
  },
  {
    name: "Rosuvas",
    company: "Sun Pharmaceutical Industries Ltd",
    price: "Rs. 277",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/6/425035920/PX/LR/WN/147700842/rosuvas-10-mg-tablet1-500x500.jpg",
    link: "https://www.sunpharma.com/products/rosuvas",
  },

  // Diabetes medicines
  {
    name: "Lantus",
    company: "Sanofi India Ltd",
    price: "Rs. 634",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pt0WVYQOROwvBFQi4lo5Fy0HvifJla0VUw&s",
    link: "https://www.sanofi.in/medicines/lantus",
  },
  {
    name: "Basalog",
    company: "Bicon",
    price: "Rs. 481",
    image:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/0c379a5816da4e63b74cd6889b2d382a.jpg?format=auto",
    link: "https://www.1mg.com/medicine/basalog",
  },
  {
    name: "Tamiflu",
    company: "Roche Products India Pvt Ltd",
    price: "Rs. 1238",
    image:
      "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/4/shutterstock_170422580.jpg",
    link: "https://www.roche.com/products/tamiflu",
  },
  {
    name: "Fluvir",
    company: "Hetero Drugs Ltd",
    price: "Rs. 447",
    image:
      "https://images.apollo247.in/pub/media/catalog/product/f/l/flu0174.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
    link: "https://www.apollo247.com/medicine/fluvir",
  },
  {
    name: "Eliquis",
    company: "Pfizer Ltd",
    price: "Rs. 1086",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/9/KS/UI/TA/136059498/eliquis-5mg-tablet.jpg",
    link: "https://www.pfizer.com/products/eliquis",
  },
  {
    name: "Apigat",
    company: "Nacto Pharma Ltd",
    price: "Rs. 533",
    image:
      "https://www.practostatic.com/practopedia-images/v3/res-750/apigat-2-5-mg-tablet-30-s_15fa3947-9fad-47f2-bbed-8d5f500e66e9.JPG",
    link: "https://www.nactopharma.com/product/apigat",
  },
];

// ===== SEARCH =====
function filterProducts(event) {
  const query = event.target.value.toLowerCase();
  const box = document.getElementById("resultBox");

  if (!query) {
    box.innerHTML = "";
    return;
  }

  const results = [];

  medicines.forEach((med) => {
    // MAIN MEDICINE
    if (med.name.toLowerCase().includes(query)) {
      results.push({
  name: med.name,
  company: med.company || med.manufacturer || "—",
  price: med.price || "",
  image: med.image,
  link: med.link || "#",
  type: "main",
});

    }

    // ALTERNATIVES
    if (med.alternatives) {
      med.alternatives.forEach((alt) => {
        if (alt.name.toLowerCase().includes(query)) {
          results.push({
            name: alt.name,
            company: alt.manufacturer || "—",
            image: alt.image,
            link: alt.link || "#",
            parent: med.name,
            type: "alt",
          });
        }
      });
    }
  });

  renderResults(results);
}

// ===== RENDER =====
function renderResults(items) {
  const box = document.getElementById("resultBox");
  box.innerHTML = "";

  if (items.length === 0) {
    box.innerHTML = `<p style="padding:8px;">No medicine found</p>`;
    return;
  }

  items.forEach((item) => {
    box.innerHTML += `
      <div class="result-item">
        <!-- IMAGE CLICK → OBJECT LINK -->
      <img 
  src="${item.image}" 
  alt="${item.name}"
  onclick="openLink('${item.link}')"
/>

        <div>
  <strong>${item.name}</strong>
  <div>${item.company}</div>

  ${
    item.price
      ? `<div class="price">Price: ${item.price}</div>`
      : ""
  }

  ${
    item.type === "alt"
      ? `<div class="alt-label">Alternative of ${item.parent}</div>`
      : ""
  }
</div>

      </div>
    `;
  });
}

// ===== OPEN LINK FUNCTION =====
function openLink(url) {
  if (!url || url === "#") return;
  window.open(url, "_blank");
}
