export function focusAnchorEl(id: string, delay: number) {
  window.setTimeout(() => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.add("search-flash");
    window.setTimeout(() => el.classList.remove("search-flash"), 1900);
  }, delay);
}
