<script setup lang="ts">
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-vue-next'
</script>
<template>
  <section class="relative overflow-hidden border-b border-ink/10 bg-white">
    <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(7,16,14,.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(7,16,14,.035)_1px,transparent_1px)] bg-[size:64px_64px]" />
    <div class="wrap relative grid min-h-[calc(100svh-108px)] items-center gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-16">
      <div class="lg:col-span-7">
        <p class="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-bone px-3.5 py-1.5 font-mono text-[9.5px] uppercase tracking-[.1em] text-ink/70"><span class="size-1.5 rounded-full bg-vomtek" /> Houston, Texas · UL 508A panel shop</p>
        <h1 class="type-hero mt-7 max-w-[14ch]">Built for industry.<br><span class="text-vomtek">Built to last.</span></h1>
        <p class="mt-6 max-w-[35rem] text-[17px] leading-relaxed text-ink/75 md:text-[18px]">Vomtek designs, builds and supports control panels, electronics, motor systems and fabricated equipment. One team from drawing to startup.</p>
        <div class="mt-8 flex flex-wrap gap-2"><NuxtLink to="/contact" class="btn btn-brand">Request a quote <ArrowUpRight :size="14" /></NuxtLink><NuxtLink to="/services" class="btn btn-outline">Explore our work</NuxtLink></div>
        <div class="mt-10 grid grid-cols-2 gap-5 border-t border-ink/10 pt-6 sm:grid-cols-4">
          <div><p class="font-display text-[22px] font-semibold">UL 508A</p><p class="label-mono mt-1 text-ink/65">panel shop</p></div>
          <div><p class="font-display text-[22px] font-semibold">In-house</p><p class="label-mono mt-1 text-ink/65">engineering</p></div>
          <div><p class="font-display text-[22px] font-semibold">Houston</p><p class="label-mono mt-1 text-ink/65">assembly floor</p></div>
          <div><p class="font-display text-[22px] font-semibold">Field</p><p class="label-mono mt-1 text-ink/65">support</p></div>
        </div>
      </div>
      <div class="lg:col-span-5">
        <div class="overflow-hidden rounded-2xl border border-ink/12 bg-white shadow-[0_35px_80px_-45px_rgba(7,16,14,.4)]">
          <PhotoImage name="panel-assembly" alt="Vomtek control panel assembly and wiring" sizes="(min-width:1024px) 40vw, 100vw" eager class="aspect-[4/3] w-full object-cover" />
          <div class="p-5">
            <div class="flex items-start justify-between gap-3"><div><p class="label-mono text-vomtek">Control systems</p><p class="mt-1 font-display text-[21px] font-semibold">Designed, wired, tested.</p></div><span class="flex size-9 shrink-0 items-center justify-center rounded-full bg-vomtek/10 text-vomtek"><ShieldCheck :size="16" /></span></div>
            <div class="mt-4 space-y-2 border-t border-ink/10 pt-3 text-[12px] text-ink/70"><p class="flex items-center gap-2"><Check :size="13" class="text-vomtek" /> Built to your drawing</p><p class="flex items-center gap-2"><Check :size="13" class="text-vomtek" /> Tested before it ships</p><p class="flex items-center gap-2"><Check :size="13" class="text-vomtek" /> Supported after startup</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
