globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BPrCBbVW.mjs';
import { $ as $$Layout } from '../chunks/Layout_DD8nTRfQ.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Impressum = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Impressum", "data-astro-cid-7dpr4qcz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-7dpr4qcz> <div class="impr" data-astro-cid-7dpr4qcz> <h1 data-astro-cid-7dpr4qcz>Impressum</h1> <ul data-astro-cid-7dpr4qcz> <li data-astro-cid-7dpr4qcz>
Jan Pascal Hellmann <br data-astro-cid-7dpr4qcz> Yves-Alexander Krohn <br data-astro-cid-7dpr4qcz> Julian Celian Schultheiß
</li> <li data-astro-cid-7dpr4qcz>Faktum GbR</li> <li data-astro-cid-7dpr4qcz>Andreasstraße 2a <br data-astro-cid-7dpr4qcz> 31134 Hildesheim <br data-astro-cid-7dpr4qcz> Deutschland</li> <li data-astro-cid-7dpr4qcz>E-Mail: info@faktum-app.de</li> </ul> </div> </main>  ` })}`;
}, "/Volumes/Extreme SSD/Faktum/WebCode/src/pages/impressum.astro", void 0);

const $$file = "/Volumes/Extreme SSD/Faktum/WebCode/src/pages/impressum.astro";
const $$url = "/impressum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Impressum,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
