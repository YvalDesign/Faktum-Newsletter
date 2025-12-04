globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BPrCBbVW.mjs';
import { $ as $$Layout } from '../chunks/Layout_DD8nTRfQ.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_f0otOeQ-.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const mockup = new Proxy({"src":"/_astro/mockupbundes.RK78WsPD.png","width":4500,"height":3000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/Extreme SSD/Faktum/WebCode/src/assets/mockupbundes.png";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Faktum Newsletter", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <div class="hero" data-astro-cid-j7pv25f6> <div class="herotxt" data-astro-cid-j7pv25f6> <div class="hcolor" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>LASST UNS <br data-astro-cid-j7pv25f6>WIEDER BOCK AUF <br data-astro-cid-j7pv25f6> POLITIK MACHEN!</h1> </div> <p data-astro-cid-j7pv25f6>
Du willst keine neuen Updates zu Faktum verpassen? Dann melde dich
          kostenlos bei unserem Newsletter an!
</p> <form method="POST" action="/api/subscribe.post" class="input-wrapper" data-astro-cid-j7pv25f6> <input type="email" name="email" placeholder="Deine E-Mail..." required data-astro-cid-j7pv25f6> <label class="optin" data-astro-cid-j7pv25f6> <input type="checkbox" name="optin" class="check" required data-astro-cid-j7pv25f6>
Ich stimme der Verarbeitung meiner Daten zu.
</label> <button type="submit" data-astro-cid-j7pv25f6>VERPASSE NICHTS MEHR!</button> </form> </div> ${renderComponent($$result2, "Image", $$Image, { "src": mockup, "alt": "Mockup der App Faktum auf einem Smartphone zwischen zwei Steinen", "className": "heroimg", "format": "avif", "data-astro-cid-j7pv25f6": true })} </div> </main>  ` })}`;
}, "/Volumes/Extreme SSD/Faktum/WebCode/src/pages/index.astro", void 0);

const $$file = "/Volumes/Extreme SSD/Faktum/WebCode/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
