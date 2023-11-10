import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import addClasses from 'rehype-add-classes'
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://cvita.wiki',
  // Enable React to support React JSX components.
  integrations: [react(), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'text-4xl font-bold font-ubuntu my-2',
          h2: 'text-2xl font-bold font-ubuntu my-2',
          h3: 'text-xl font-bold font-ubuntu my-2',
          h4: 'text-lg font-bold font-ubuntu my-2',
          h5: 'font-bold font-ubuntu my-2',
          h6: 'font-bold font-ubuntu my-2',
          img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6',
          p: 'mb-6',
          code: 'bg-zinc-300 dark:bg-black',
          a: 'underline underline-offset-2 hover:text-emerald-500 decoration-emerald-500'
        }
      ]
    ]
  }
});
