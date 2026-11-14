<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { divisions, extraDivisions } from '~/data/divisions'
const year = new Date().getFullYear()
</script>
<template>
  <footer class="relative overflow-hidden bg-ink text-bone">
    <div class="wrap relative border-b border-bone/10 py-16 md:py-20">
      <div class="grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <p class="label-mono text-mint">Houston engineering & manufacturing</p>
          <h2 class="mt-5 max-w-[14ch] font-display text-[clamp(2.6rem,4.6vw,4.2rem)] font-semibold leading-[.94] tracking-[-.05em]">Built here.<br><span class="text-mint">Running everywhere.</span></h2>
          <p class="mt-5 max-w-md text-[16px] leading-relaxed text-bone/75">Control panels, electronics, motor service, fabrication and pipeline inspection — one team from drawing to startup.</p>
          <div class="mt-7 flex flex-wrap gap-2"><NuxtLink to="/contact" class="btn btn-mint">Request a quote <ArrowUpRight :size="14" /></NuxtLink><NuxtLink to="/services" class="btn btn-outline-dark">Explore capabilities</NuxtLink></div>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
          <div>
            <p class="label-mono text-bone/55">Divisions</p>
            <ul class="mt-5 space-y-2.5"><li v-for="division in divisions" :key="division.slug"><NuxtLink :to="`/divisions/${division.slug}`" class="text-[15px] text-bone/70 transition-colors hover:text-mint">{{ division.shortName }}</NuxtLink></li></ul>
          </div>
          <div>
            <p class="label-mono text-bone/55">Company</p>
            <ul class="mt-5 space-y-2.5">
              <li><NuxtLink to="/about" class="text-[15px] text-bone/70 hover:text-mint">About Vomtek</NuxtLink></li>
              <li><NuxtLink to="/projects" class="text-[15px] text-bone/70 hover:text-mint">Projects</NuxtLink></li>
              <li><NuxtLink to="/pipeline" class="text-[15px] text-bone/70 hover:text-mint">Vomtek Pipeline</NuxtLink></li>
              <li><NuxtLink to="/foundation" class="text-[15px] text-bone/70 hover:text-mint">Vomtek Foundation</NuxtLink></li>
              <li><NuxtLink to="/careers" class="text-[15px] text-bone/70 hover:text-mint">Careers</NuxtLink></li>
              <li><NuxtLink to="/news" class="text-[15px] text-bone/70 hover:text-mint">News</NuxtLink></li>
              <li><NuxtLink to="/contact" class="text-[15px] text-bone/70 hover:text-mint">Contact</NuxtLink></li>
            </ul>
          </div>
          <div>
            <p class="label-mono text-bone/55">Capabilities</p>
            <ul class="mt-5 space-y-2.5 text-[15px] text-bone/70">
              <li>UL 508A panel shop</li><li>PCB & harness</li><li>Motor repair</li><li>CNC & fabrication</li><li>Field service</li><li>Pipeline inspection</li>
            </ul>
            <p class="mt-5 label-mono text-bone/55">Group</p>
            <ul class="mt-3 space-y-2"><li v-for="item in extraDivisions" :key="item.slug"><NuxtLink :to="`/divisions/${item.slug}`" class="text-[14px] text-bone/65 hover:text-mint">{{ item.name }}</NuxtLink></li></ul>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
      <div class="flex items-center gap-4"><BrandMark tone="light" /><span class="hidden h-5 w-px bg-bone/15 sm:block" /><span class="font-mono text-[10.5px] uppercase tracking-[.1em] text-bone/55">2401 Fountain View Dr · Houston, TX 77057</span></div>
      <div class="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10.5px] uppercase tracking-[.1em] text-bone/55"><span>© {{ year }} Vomtek</span><NuxtLink to="/privacy" class="hover:text-bone">Privacy</NuxtLink><NuxtLink to="/terms" class="hover:text-bone">Terms</NuxtLink><a href="mailto:support@vomtek.com" class="hover:text-bone">support@vomtek.com</a></div>
    </div>
  </footer>
</template>
