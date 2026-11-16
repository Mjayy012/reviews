const CONFIG = {
  BUSINESS_NAME: "InnoRev",
  BRAND_COLOR: "#13475B",
  LOGO_URL: ""
};

(function () {
  "use strict";

  const name = CONFIG.BUSINESS_NAME.trim() || "InnoRev";
  const brand = /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(CONFIG.BRAND_COLOR)
    ? CONFIG.BRAND_COLOR : "#13475B";
  const root = document.documentElement.style;
  root.setProperty("--brand", brand);

  const fullHex = brand.length === 4
    ? brand.slice(1).split("").map(function (c) { return c + c; }).join("")
    : brand.slice(1);
  const rgb = parseInt(fullHex, 16);
  const brightness = (0.299 * (rgb >> 16) + 0.587 * ((rgb >> 8) & 255) + 0.114 * (rgb & 255)) / 255;
  root.setProperty("--brand-ink", brightness > 0.62 ? "#10181D" : "#FFFFFF");

  document.querySelector('meta[name="theme-color"]').content = brand;
  document.getElementById("bizName").textContent = name;
  document.title = "Review " + name;

  const mark = document.getElementById("mark");
  mark.textContent = (name.replace(/[^A-Za-z0-9]/g, "").charAt(0) || "R").toUpperCase();
  if (CONFIG.LOGO_URL) {
    const img = new Image();
    img.alt = "";
    img.src = CONFIG.LOGO_URL;
    mark.replaceChildren(img);
    mark.style.background = "transparent";
  }
})();
