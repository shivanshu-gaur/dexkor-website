import { useRouter } from 'next/navigation';

const MAP = {
  optin: "/dexkor-funnel",
  landing: "/dexkor-funnel/landing",
  booking: "/dexkor-funnel/booking",
  thankyou: "/dexkor-funnel/thankyou",
};

export function toRoute(href) {
  if (!href) return null;
  const m = String(href).match(
    /dexkor-demo-(optin|landing|booking|thankyou)\.html(\?[^#]*)?(#.*)?/
  );
  if (!m) return null;
  return MAP[m[1]] + (m[2] || "") + (m[3] || "");
}

export function makeNav(router) {
  return (target) => {
    const r = toRoute(target);
    if (r) router.push(r);
    else if (target) window.location.href = target;
  };
}

export function interceptClicks(root, router) {
  if (!root) return () => {};
  const onClick = (e) => {
    const a = e.target.closest && e.target.closest("a");
    if (!a || !root.contains(a)) return;
    const r = toRoute(a.getAttribute("href"));
    if (r) {
      e.preventDefault();
      router.push(r);
    }
  };
  root.addEventListener("click", onClick);
  return () => root.removeEventListener("click", onClick);
}
