// assets/script.js

// -------------------------------------------------------------
// Single source of truth
// -------------------------------------------------------------
window.profile = {
    name: "Aditi Dangi",
    email: "aditidangi05@gmail.com",
    linkedin: "http://www.linkedin.com/in/aditi-dangi-bb8bab328" // replace with real link
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    // -----------------------------------------------------------
    // Contact buttons
    // -----------------------------------------------------------
    const emailBtn = document.querySelector("[data-email]");
    const liBtn = document.querySelector("[data-linkedin]");
  
    if (emailBtn && window.profile.email) {
      emailBtn.href = `mailto:${window.profile.email}`;
    }
  
    if (liBtn) {
      if (window.profile.linkedin && /^https?:\/\//.test(window.profile.linkedin)) {
        liBtn.href = window.profile.linkedin;
        liBtn.removeAttribute("aria-disabled");
      } else {
        liBtn.setAttribute("aria-disabled", "true");
        liBtn.addEventListener("click", e => e.preventDefault());
        liBtn.style.opacity = ".5";
        liBtn.style.cursor = "not-allowed";
        liBtn.title = "Add your LinkedIn URL in assets/script.js";
      }
    }
  
    // -----------------------------------------------------------
    // Button hover spotlight
    // -----------------------------------------------------------
    document.querySelectorAll(".btn").forEach(btn => {
      btn.addEventListener("pointermove", e => {
        const r = btn.getBoundingClientRect();
        btn.style.setProperty("--mx", `${e.clientX - r.left}px`);
        btn.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    });
  
//     // -----------------------------------------------------------
//     // Homepage scroll morph (original size behavior, fixed layering)
//     // -----------------------------------------------------------
//     if (!document.body.classList.contains("home")) return;
  
//     const navBrand = document.getElementById("brandName");
//     const mastheadTitle = document.querySelector(".masthead-title");
//     if (!navBrand || !mastheadTitle) return;
  
//     // Find your header once so we can drop it under during morph
//     const header =
//       document.querySelector("header") ||
//       document.querySelector(".site-header") ||
//       document.querySelector("#navbar") ||
//       document.querySelector("nav[role='navigation']");
  
//     // Inject hygiene + morph-time header rules
//     (function injectOnce() {
//       if (document.getElementById("morph-style")) return;
//       const s = document.createElement("style");
//       s.id = "morph-style";
//       s.textContent = `
//         #brandName, .masthead-title {
//           transform-origin: 0 0;
//           will-change: transform, opacity;
//           backface-visibility: hidden;
//         }
//         /* while morphing, put header underneath and remove overlays that cause clipping */
//         body.is-morphing header,
//         body.is-morphing .site-header,
//         body.is-morphing #navbar,
//         body.is-morphing nav[role="navigation"] {
//           z-index: 0 !important;
//           pointer-events: none !important;
//           background: transparent !important;
//           box-shadow: none !important;
//           -webkit-backdrop-filter: none !important;
//           backdrop-filter: none !important;
//         }
//       `;
//       document.head.appendChild(s);
//     })();
  
//     // Keep the moving title above normal content during morph
//     mastheadTitle.style.position = "relative";
//     mastheadTitle.style.zIndex = "9999";
//     mastheadTitle.style.pointerEvents = "none";
//     navBrand.style.position = "relative";
//     navBrand.style.zIndex = "1";
  
//     let startRectPage;
  
//     const rectPage = el => {
//       const r = el.getBoundingClientRect();
//       return {
//         left: r.left + window.scrollX,
//         top:  r.top  + window.scrollY,
//         width: r.width,
//         height: r.height
//       };
//     };
  
//     // Get the starting position in PAGE coordinates
//     const calculateStartRect = () => {
//       startRectPage = rectPage(mastheadTitle);
//     };
  
//     const setMorphingState = inMorph => {
//       document.body.classList.toggle("is-morphing", inMorph);
//     };
  
//     const handleScrollAnimation = () => {
//       const scrollY = window.scrollY;
  
//       // close to your original, but not whiplash
//       const animationEnd = 650; // px of scroll to finish morph
//       let progress = Math.min(1, Math.max(0, scrollY / animationEnd));
  
//       const easedProgress = 0.3 * (1 - Math.cos(progress * Math.PI));
  
//       // shorter overlap to remove "lightened" double
//       const CROSSFADE_START = 0.9;
//       const CROSSFADE_SPAN = 0.1;
//       let fadeProgress = 0;
//       if (progress > CROSSFADE_START) {
//         fadeProgress = Math.min(1, (progress - CROSSFADE_START) / CROSSFADE_SPAN);
//       }
  
//       // Live end rect in PAGE coordinates
//       const r = navBrand.getBoundingClientRect();
//       const endRectPage = {
//         left: r.left + window.scrollX,
//         top:  r.top  + window.scrollY,
//         width: r.width,
//         height: r.height
//       };
  
//       const deltaX = endRectPage.left - startRectPage.left;
//       const deltaY = endRectPage.top  - startRectPage.top;
//       const scaleX = (endRectPage.width  / (startRectPage.width))  || 1;
//       const scaleY = (endRectPage.height / (startRectPage.height)) || 1;
  
      
//       // Visibility and opacity crossover
//       navBrand.style.visibility = progress <= CROSSFADE_START ? "hidden" : "visible";
//       mastheadTitle.style.visibility = progress >= 0.999 ? "hidden" : "visible";
//       mastheadTitle.style.opacity = 1 - fadeProgress;
//       navBrand.style.opacity = fadeProgress;
  
//       // Apply transform to the moving masthead (size behavior same as your old code)
//       mastheadTitle.style.transform =
//         `translate(${deltaX * easedProgress}px, ${deltaY * easedProgress}px) ` +
//         `scale(${1 - (scaleX) * easedProgress}, ${1 - (scaleY) * easedProgress})`;)
  
//       // Align navbar brand underneath using inverse so it lines up during fade-in
//       const invSx = 1 / scaleX, invSy = 1 / scaleY;
//       const backTx = -deltaX * (1 - easedProgress);
//       const backTy = -deltaY * (1 - easedProgress);
//       const backSx = invSx + (1 - invSx) * easedProgress;
//       const backSy = invSy + (1 - invSy) * easedProgress;
//       navBrand.style.transform = `translate(${backTx}px, ${backTy}px) scale(${backSx}, ${backSy})`;
  
//       // Layering control: only during morph
//       const inMorph = progress > 0 && progress < 1;
//       setMorphingState(inMorph);
  
//       // Prevent clicks mid-morph
//       navBrand.style.pointerEvents = progress >= 1 ? "auto" : "none";
//     };
  
//     // Init
//     calculateStartRect();
//     handleScrollAnimation();
  
//     window.addEventListener("scroll", handleScrollAnimation, { passive: true });
//     window.addEventListener("resize", () => {
//       calculateStartRect();
//       handleScrollAnimation();
//     });
  });
  