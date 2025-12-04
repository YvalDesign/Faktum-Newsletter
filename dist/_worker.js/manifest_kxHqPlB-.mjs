globalThis.process ??= {}; globalThis.process.env ??= {};
import { o as decodeKey } from './chunks/astro/server_BPrCBbVW.mjs';
import './chunks/astro-designed-error-pages_CuC6ykYG.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_cZTTNmT1.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Volumes/Extreme%20SSD/Faktum/WebCode/","cacheDir":"file:///Volumes/Extreme%20SSD/Faktum/WebCode/node_modules/.astro/","outDir":"file:///Volumes/Extreme%20SSD/Faktum/WebCode/dist/","srcDir":"file:///Volumes/Extreme%20SSD/Faktum/WebCode/src/","publicDir":"file:///Volumes/Extreme%20SSD/Faktum/WebCode/public/","buildClientDir":"file:///Volumes/Extreme%20SSD/Faktum/WebCode/dist/","buildServerDir":"file:///Volumes/Extreme%20SSD/Faktum/WebCode/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/subscribe.post","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/subscribe\\.post\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"subscribe.post","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/subscribe.post.ts","pathname":"/api/subscribe.post","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@import\"https://use.typekit.net/xac8oan.css\";:root{--grad1: #eecb88;--grad2: #C86f4a;--bg: #131416;--text: #ffffff;--tgrey: #b1b1b1;--arth: \"articulat-heavy-cf\", sans-serif;--art: \"articulat-cf,\" sans-serif;--upgb: \"upgrade-lights\", sans-serif;--upg: \"upgrade\", sans-serif}body{background-color:var(--bg);margin:0;padding:0;width:100%}.header[data-astro-cid-3ef6ksr2]{position:absolute;display:flex;left:0;right:0;justify-content:center;align-items:center;padding-top:2rem;z-index:5;background:transparent}.logo[data-astro-cid-3ef6ksr2]{display:block;height:3rem;width:auto}@media(max-width:1000px){.logo[data-astro-cid-3ef6ksr2]{height:3rem}}@media(max-width:550px){.header[data-astro-cid-3ef6ksr2]{padding-top:1rem}.logo[data-astro-cid-3ef6ksr2]{height:2.5rem}}.footer[data-astro-cid-sz7xmlte]{position:relative;display:flex;justify-content:space-between;align-items:center;padding:1rem 1.5rem;left:0;right:0;margin-top:1.5rem}a[data-astro-cid-sz7xmlte]{text-decoration:none;color:var(--text);font-family:var(--upgb);font-size:12px}.pages[data-astro-cid-sz7xmlte]{position:relative;display:flex;justify-content:space-between;gap:50%}.socials[data-astro-cid-sz7xmlte]{display:flex;flex-direction:row;gap:.8rem}.social[data-astro-cid-sz7xmlte]{width:30px;height:auto}@media(min-width:1000px){.footer[data-astro-cid-sz7xmlte]{padding-right:50%;padding-left:5%;margin-top:-3rem}}\n.dat[data-astro-cid-7i3oie76]{padding-inline:5%;padding-top:10%}h4[data-astro-cid-7i3oie76]{font-family:var(--arth);color:#fff}p[data-astro-cid-7i3oie76],li[data-astro-cid-7i3oie76]{color:#fff;font-family:var(--upgb)}a[data-astro-cid-7i3oie76]{color:#fff}\n"}],"routeData":{"route":"/datenschutz","isIndex":false,"type":"page","pattern":"^\\/datenschutz\\/?$","segments":[[{"content":"datenschutz","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/datenschutz.astro","pathname":"/datenschutz","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@import\"https://use.typekit.net/xac8oan.css\";:root{--grad1: #eecb88;--grad2: #C86f4a;--bg: #131416;--text: #ffffff;--tgrey: #b1b1b1;--arth: \"articulat-heavy-cf\", sans-serif;--art: \"articulat-cf,\" sans-serif;--upgb: \"upgrade-lights\", sans-serif;--upg: \"upgrade\", sans-serif}body{background-color:var(--bg);margin:0;padding:0;width:100%}.header[data-astro-cid-3ef6ksr2]{position:absolute;display:flex;left:0;right:0;justify-content:center;align-items:center;padding-top:2rem;z-index:5;background:transparent}.logo[data-astro-cid-3ef6ksr2]{display:block;height:3rem;width:auto}@media(max-width:1000px){.logo[data-astro-cid-3ef6ksr2]{height:3rem}}@media(max-width:550px){.header[data-astro-cid-3ef6ksr2]{padding-top:1rem}.logo[data-astro-cid-3ef6ksr2]{height:2.5rem}}.footer[data-astro-cid-sz7xmlte]{position:relative;display:flex;justify-content:space-between;align-items:center;padding:1rem 1.5rem;left:0;right:0;margin-top:1.5rem}a[data-astro-cid-sz7xmlte]{text-decoration:none;color:var(--text);font-family:var(--upgb);font-size:12px}.pages[data-astro-cid-sz7xmlte]{position:relative;display:flex;justify-content:space-between;gap:50%}.socials[data-astro-cid-sz7xmlte]{display:flex;flex-direction:row;gap:.8rem}.social[data-astro-cid-sz7xmlte]{width:30px;height:auto}@media(min-width:1000px){.footer[data-astro-cid-sz7xmlte]{padding-right:50%;padding-left:5%;margin-top:-3rem}}\n.impr[data-astro-cid-7dpr4qcz]{display:flex;flex-direction:column;padding-top:10%;padding-inline:5vw;padding-bottom:10%;max-width:500px;margin-inline:auto;align-items:center}h1[data-astro-cid-7dpr4qcz]{color:var(--text);font-family:var(--arth);margin-inline:auto}ul[data-astro-cid-7dpr4qcz]{align-self:flex-start}li[data-astro-cid-7dpr4qcz]{color:var(--text);font-size:1.25rem;list-style:none;font-family:var(--upg);padding-bottom:10px}\n"}],"routeData":{"route":"/impressum","isIndex":false,"type":"page","pattern":"^\\/impressum\\/?$","segments":[[{"content":"impressum","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/impressum.astro","pathname":"/impressum","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@import\"https://use.typekit.net/xac8oan.css\";:root{--grad1: #eecb88;--grad2: #C86f4a;--bg: #131416;--text: #ffffff;--tgrey: #b1b1b1;--arth: \"articulat-heavy-cf\", sans-serif;--art: \"articulat-cf,\" sans-serif;--upgb: \"upgrade-lights\", sans-serif;--upg: \"upgrade\", sans-serif}body{background-color:var(--bg);margin:0;padding:0;width:100%}.header[data-astro-cid-3ef6ksr2]{position:absolute;display:flex;left:0;right:0;justify-content:center;align-items:center;padding-top:2rem;z-index:5;background:transparent}.logo[data-astro-cid-3ef6ksr2]{display:block;height:3rem;width:auto}@media(max-width:1000px){.logo[data-astro-cid-3ef6ksr2]{height:3rem}}@media(max-width:550px){.header[data-astro-cid-3ef6ksr2]{padding-top:1rem}.logo[data-astro-cid-3ef6ksr2]{height:2.5rem}}.footer[data-astro-cid-sz7xmlte]{position:relative;display:flex;justify-content:space-between;align-items:center;padding:1rem 1.5rem;left:0;right:0;margin-top:1.5rem}a[data-astro-cid-sz7xmlte]{text-decoration:none;color:var(--text);font-family:var(--upgb);font-size:12px}.pages[data-astro-cid-sz7xmlte]{position:relative;display:flex;justify-content:space-between;gap:50%}.socials[data-astro-cid-sz7xmlte]{display:flex;flex-direction:row;gap:.8rem}.social[data-astro-cid-sz7xmlte]{width:30px;height:auto}@media(min-width:1000px){.footer[data-astro-cid-sz7xmlte]{padding-right:50%;padding-left:5%;margin-top:-3rem}}\nbody{padding:0}.hero[data-astro-cid-j7pv25f6]{position:relative;display:flex;justify-content:space-between;width:100%;max-width:1440px;min-height:100vh;height:auto;margin:0 auto;overflow-x:clip;overflow-y:visible}.herotxt[data-astro-cid-j7pv25f6]{display:flex;position:absolute;flex-direction:column;align-self:center;gap:2rem;padding-inline:2vw}h1[data-astro-cid-j7pv25f6]{font-family:var(--arth);font-style:italic;color:var(--text);font-size:clamp(3vw,5vw,70px);line-height:123%}p[data-astro-cid-j7pv25f6]{font-family:var(--upgb);color:var(--text);font-size:2.5vw;font-size:clamp(1.5vw,2.5vw,32px);max-width:40ch;margin:0}.heroimg[data-astro-cid-j7pv25f6]{display:block;margin-right:0;transform:translate(18%);height:100%;max-height:100vh;width:auto;object-fit:contain}.input-wrapper[data-astro-cid-j7pv25f6]{position:relative;display:flex;margin-inline-start:1rem;flex-direction:column}input[data-astro-cid-j7pv25f6]{padding:1.3rem 1.4rem;font-size:1.1rem;border:2px solid #ffffff;border-radius:20px;color:var(--text);background:var(--bg);width:100%;max-width:500px;box-sizing:border-box;z-index:2}.optin[data-astro-cid-j7pv25f6]{color:#fff;font-family:var(--upgb);display:flex;padding:2vw}.check[data-astro-cid-j7pv25f6]{display:block;width:5vw;margin-right:4%}button[data-astro-cid-j7pv25f6]{width:100%;max-width:400px;padding-block:1rem;cursor:pointer;margin-top:7%;border-radius:20px;border:none;font-family:var(--arth);color:var(--bg);font-size:1.5rem;justify-self:center;background:linear-gradient(to right,var(--grad1),var(--grad2))}@media(min-width:1000px){button[data-astro-cid-j7pv25f6]{margin-top:4%}}input[data-astro-cid-j7pv25f6]:focus{outline:none;border:3px solid #ffffff}@media(max-width:1000px){body{padding:0}.hero[data-astro-cid-j7pv25f6]{flex-direction:column;align-items:center;gap:2rem}h1[data-astro-cid-j7pv25f6]{text-align:center;font-size:9vw;color:#1b1c1f}.hcolor[data-astro-cid-j7pv25f6]{background:linear-gradient(to right,var(--grad1),var(--grad2));width:100vw;padding-block:1rem;margin-top:-35px}p[data-astro-cid-j7pv25f6]{text-align:center;justify-self:center;margin:auto;font-size:4.5vw;max-width:30ch}.input-wrapper[data-astro-cid-j7pv25f6]{margin-inline:auto;width:70vw;align-items:center}input[data-astro-cid-j7pv25f6] button[data-astro-cid-j7pv25f6]{margin:auto}button[data-astro-cid-j7pv25f6]{font-size:1.3rem}.herotxt[data-astro-cid-j7pv25f6]{position:relative;order:2}.heroimg[data-astro-cid-j7pv25f6]{order:1;width:auto;height:auto;max-height:90vh;transform:translate(-3vw);overflow-x:clip}}@media(max-width:550px){.heroimg[data-astro-cid-j7pv25f6]{width:160%}}@media(max-width:400px){button[data-astro-cid-j7pv25f6]{font-size:1.05rem}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://faktum-app.de","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Volumes/Extreme SSD/Faktum/WebCode/src/pages/datenschutz.astro",{"propagation":"none","containsHead":true}],["/Volumes/Extreme SSD/Faktum/WebCode/src/pages/impressum.astro",{"propagation":"none","containsHead":true}],["/Volumes/Extreme SSD/Faktum/WebCode/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/subscribe.post@_@ts":"pages/api/subscribe.post.astro.mjs","\u0000@astro-page:src/pages/datenschutz@_@astro":"pages/datenschutz.astro.mjs","\u0000@astro-page:src/pages/impressum@_@astro":"pages/impressum.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_kxHqPlB-.mjs","/Volumes/Extreme SSD/Faktum/WebCode/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/Volumes/Extreme SSD/Faktum/WebCode/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BwNVJ5xC.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/instagram.Dbq-n8qV.png","/_astro/linkedin.DvbM5N3o.png","/_astro/social-media.B8itFTlA.png","/_astro/logof.C9RmoK8z.png","/_astro/mockupbundes.RK78WsPD.png","/_routes.json","/favicon.svg","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/index.js","/_worker.js/noop-entrypoint.mjs","/_worker.js/renderers.mjs","/_worker.js/_astro/instagram.Dbq-n8qV.png","/_worker.js/_astro/linkedin.DvbM5N3o.png","/_worker.js/_astro/logof.C9RmoK8z.png","/_worker.js/_astro/mockupbundes.RK78WsPD.png","/_worker.js/_astro/social-media.B8itFTlA.png","/_worker.js/chunks/Layout_DD8nTRfQ.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_DwbqQMC0.mjs","/_worker.js/chunks/_astro_assets_f0otOeQ-.mjs","/_worker.js/chunks/astro-designed-error-pages_CuC6ykYG.mjs","/_worker.js/chunks/astro_xbsv_EH-.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/index_ButX0obL.mjs","/_worker.js/chunks/noop-middleware_cZTTNmT1.mjs","/_worker.js/chunks/path_CH3auf61.mjs","/_worker.js/chunks/remote_CrdlObHx.mjs","/_worker.js/chunks/sharp_BwNVJ5xC.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/pages/datenschutz.astro.mjs","/_worker.js/pages/impressum.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/chunks/astro/server_BPrCBbVW.mjs","/_worker.js/pages/api/subscribe.post.astro.mjs"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"8qqc+O68s7B8qDwevEvd3g8mMUswVWTkDzyxiACYvYg=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
