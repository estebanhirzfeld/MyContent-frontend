/* empty css                         */
import { k as createComponent, l as renderTemplate, n as addAttribute, p as renderHead, q as renderSlot, o as createAstro, t as renderComponent, m as maybeRenderHead } from './astro/server_DwBPcmoj.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Stevennho/Desktop/FastAPI/frontend/frontend/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const results = Astro2.url.searchParams.get("results") || "";
  const getTable = async (results2 = 4) => {
    const res = await fetch(
      `https://mycontent-backend.onrender.com/api/table/?results=${results2 + 1}`
    );
    const data = await res.json();
    return data;
  };
  const table = await getTable(results ? Number(results) : 5);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "MyContent Agency - Dashboard", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>MyContent Agency</h1> <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"> <div class="flex flex-wrap -mx-3 mb-5" data-astro-cid-j7pv25f6> <div class="w-full max-w-full px-3 mb-6 mx-auto" data-astro-cid-j7pv25f6> <div class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5" data-astro-cid-j7pv25f6> <div class="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30" data-astro-cid-j7pv25f6> <!-- card header --> <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent" data-astro-cid-j7pv25f6> <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark" data-astro-cid-j7pv25f6> <span class="mr-3 font-semibold text-dark" data-astro-cid-j7pv25f6>Projects Deliveries</span> <span class="mt-1 font-medium text-secondary-dark text-lg/normal" data-astro-cid-j7pv25f6>All projects from MyContent team</span> </h3> <div class="relative flex flex-wrap items-center my-2 overflow-x-auto" data-astro-cid-j7pv25f6> <span class="inline-block font-xl font-light pe-4" data-astro-cid-j7pv25f6>Results:</span> <!-- <select
                  id="rowsPerPage"
                  class="inline-block font-xl leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
                >
                </select> --> <div class="flex items-center space-x-4" data-astro-cid-j7pv25f6> <a href="/?results=5" class="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light" data-astro-cid-j7pv25f6>
5
</a> <a href="/?results=10" class="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light" data-astro-cid-j7pv25f6>
10
</a> <a href="/?results=20" class="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light" data-astro-cid-j7pv25f6>
20
</a> <a href="/?results=40" class="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light" data-astro-cid-j7pv25f6>
40
</a> <a href="/?results=50" class="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light" data-astro-cid-j7pv25f6>
50
</a> <a href="/?results=100" class="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light" data-astro-cid-j7pv25f6>
100
</a> </div> </div> </div> <!-- end card header --> <!-- card body  --> <div class="flex-auto block py-8 pt-6 px-9" data-astro-cid-j7pv25f6> <div class="overflow-x-auto" data-astro-cid-j7pv25f6> <table class="w-full my-0 align-middle text-dark border-neutral-200" data-astro-cid-j7pv25f6> <thead class="align-bottom" data-astro-cid-j7pv25f6> <tr class="font-semibold text-[0.95rem] text-secondary-dark" data-astro-cid-j7pv25f6> ${table && table[0].map((th) => {
    return renderTemplate`<th class="pb-3 text-center min-w-[100px] uppercase" data-astro-cid-j7pv25f6> ${th} </th>`;
  })} </tr> </thead> <tbody data-astro-cid-j7pv25f6> ${table && table.map(
    (row, rowIndex) => rowIndex !== 0 && renderTemplate`<tr${addAttribute(`${rowIndex}`, "id")} data-astro-cid-j7pv25f6> ${row.map((cell, cellIndex) => renderTemplate`<td class="p-3 pl-0 text-base text-center" data-astro-cid-j7pv25f6>    ${cellIndex == 1 ? renderTemplate`<a${addAttribute(`mailto:${cell}`, "href")} class="text-primary font-light" data-astro-cid-j7pv25f6> ${cell} </a>` : cell.startsWith("fb") ? renderTemplate`<a target="_blank"${addAttribute(`https://facebook.com/${cell.replace("fb_", "")}`, "href")} data-astro-cid-j7pv25f6> ${cell} </a>` : cell.startsWith("ig") ? renderTemplate`<a target="_blank"${addAttribute(`https://instagram.com/${cell.replace("ig_", "")}`, "href")} data-astro-cid-j7pv25f6> ${cell} </a>` : cellIndex === row.length - 1 ? renderTemplate`${renderComponent($$result2, "Pill", null, { "rowId": rowIndex, "content": cell, "client:only": true, "client:component-hydration": "only", "data-astro-cid-j7pv25f6": true, "client:component-path": "C:/Users/Stevennho/Desktop/FastAPI/frontend/frontend/src/components/Pill", "client:component-export": "Pill" })}` : cell} </td>`)} </tr>`
  )} </tbody> </table> </div> </div> </div> </div> </div> </div> <div class="flex flex-wrap -mx-3 mb-5" data-astro-cid-j7pv25f6> <div class="w-full max-w-full sm:w-3/4 mx-auto text-center" data-astro-cid-j7pv25f6> <p class="text-sm text-slate-500 py-1" data-astro-cid-j7pv25f6>
Simple Spreadsheet Dashboard for <a href="https://growth.mycontent.agency/lp/" class="text-slate-700 hover:text-slate-900" target="_blank" data-astro-cid-j7pv25f6>MyContent Academy</a> by <a href="https://www.linkedin.com/in/esteban-hirzfeld/" class="text-slate-700 hover:text-slate-900" target="_blank" data-astro-cid-j7pv25f6>Esteban Hirzfeld</a>.
</p> </div> </div> </main> ` })} `;
}, "C:/Users/Stevennho/Desktop/FastAPI/frontend/frontend/src/pages/index.astro", void 0);

const $$file = "C:/Users/Stevennho/Desktop/FastAPI/frontend/frontend/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, prerender, $$url as url };
