document.addEventListener("DOMContentLoaded", () => {
  const cfg = window.RIDA_CONFIG || {};

  // Current year
  document.querySelectorAll("#year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Business details
  document.querySelectorAll("[data-company-phone]").forEach(el => {
    el.textContent = cfg.phoneDisplay || "Phone number";
  });
  document.querySelectorAll("[data-company-email]").forEach(el => {
    el.textContent = cfg.email || "Email address";
  });
  document.querySelectorAll("[data-company-address]").forEach(el => {
    el.textContent = cfg.address || "Business address";
  });

  document.querySelectorAll("[data-company-phone-link]").forEach(el => {
    const tel = (cfg.phoneDisplay || "").replace(/[^\d+]/g, "");
    el.href = tel ? `tel:${tel}` : "#";
  });

  document.querySelectorAll("[data-company-email-link]").forEach(el => {
    el.href = cfg.email ? `mailto:${cfg.email}` : "#";
  });

  const whatsappUrl = (message) => {
    const number = (cfg.whatsappNumber || "").replace(/\D/g, "");
    const text = encodeURIComponent(message || cfg.whatsappMessage || "Hello");
    return number ? `https://wa.me/${number}?text=${text}` : "#";
  };

  document.querySelectorAll("[data-whatsapp-link]").forEach(el => {
    el.href = whatsappUrl();
  });

  // Mobile navigation
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Testimonial carousel
  const cards = [...document.querySelectorAll(".testimonial-card")];
  const next = document.querySelector(".carousel-btn.next");
  const prev = document.querySelector(".carousel-btn.prev");
  let testimonialIndex = 0;

  const showTestimonial = (index) => {
    if (!cards.length) return;
    testimonialIndex = (index + cards.length) % cards.length;
    cards.forEach((card, i) => card.classList.toggle("active", i === testimonialIndex));
  };

  next?.addEventListener("click", () => showTestimonial(testimonialIndex + 1));
  prev?.addEventListener("click", () => showTestimonial(testimonialIndex - 1));

  if (cards.length > 1) {
    setInterval(() => showTestimonial(testimonialIndex + 1), 6500);
  }

  // Portal placeholder
  const toast = document.getElementById("toast");
  document.querySelectorAll(".portal-demo-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (!toast) return;
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 2600);
    });
  });

  // Static contact form -> WhatsApp
  const form = document.getElementById("valuationForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(form);
      const lines = [
        "Hello Rida Rental Management and Services,",
        "",
        "I would like to enquire about property management.",
        "",
        `Name: ${data.get("name") || ""}`,
        `Phone: ${data.get("phone") || ""}`,
        `Email: ${data.get("email") || ""}`,
        `Property Type: ${data.get("propertyType") || ""}`,
        `Property Location: ${data.get("location") || ""}`,
        `Service Required: ${data.get("service") || ""}`,
        `Message: ${data.get("message") || ""}`
      ];

      const url = whatsappUrl(lines.join("\n"));
      if (url === "#") {
        alert("Please add your WhatsApp number in config.js first.");
        return;
      }
      window.open(url, "_blank", "noopener");
    });
  }
});
