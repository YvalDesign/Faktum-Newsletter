globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as createAstro, d as addAttribute, e as renderHead, f as renderSlot } from './astro/server_BPrCBbVW.mjs';
/* empty css                               */
import { $ as $$Image } from './_astro_assets_f0otOeQ-.mjs';

const logo = new Proxy({"src":"/_astro/logof.C9RmoK8z.png","width":5741,"height":4512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/Extreme SSD/Faktum/WebCode/src/assets/logof.png";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <div class="header" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2>${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "Logo von Faktum", "format": "avif", "class": "logo", "data-astro-cid-3ef6ksr2": true })} </a> </div>  </header>`;
}, "/Volumes/Extreme SSD/Faktum/WebCode/src/components/Header.astro", void 0);

const insta = new Proxy({"src":"/_astro/instagram.Dbq-n8qV.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/Extreme SSD/Faktum/WebCode/src/assets/instagram.png";
							}
							
							return target[name];
						}
					});

const linked = new Proxy({"src":"/_astro/linkedin.DvbM5N3o.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/Extreme SSD/Faktum/WebCode/src/assets/linkedin.png";
							}
							
							return target[name];
						}
					});

const tiktok = new Proxy({"src":"/_astro/social-media.B8itFTlA.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/Extreme SSD/Faktum/WebCode/src/assets/social-media.png";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="pages" data-astro-cid-sz7xmlte> <a href="/impressum" data-astro-cid-sz7xmlte>Impressum</a> <a href="/datenschutz" data-astro-cid-sz7xmlte>Datenschutzerklärung</a> </div> <div class="socials" data-astro-cid-sz7xmlte> <a href="https://www.instagram.com/faktum_app/" data-astro-cid-sz7xmlte>${renderComponent($$result, "Image", $$Image, { "src": insta, "class": "social", "alt": "Instagram Logo", "data-astro-cid-sz7xmlte": true })}</a> <a href="https://www.linkedin.com/company/faktum-app/about/" data-astro-cid-sz7xmlte>${renderComponent($$result, "Image", $$Image, { "src": linked, "class": "social", "alt": "LinkedIn Logo", "data-astro-cid-sz7xmlte": true })}</a> <a href="https://www.tiktok.com/@faktum_app" data-astro-cid-sz7xmlte>${renderComponent($$result, "Image", $$Image, { "src": tiktok, "class": "social", "alt": "TikTok Logo", "data-astro-cid-sz7xmlte": true })}</a> </div>  </footer>`;
}, "/Volumes/Extreme SSD/Faktum/WebCode/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://faktum-app.de");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Faktum-App Newsletter</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Volumes/Extreme SSD/Faktum/WebCode/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
