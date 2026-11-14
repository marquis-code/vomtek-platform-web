<script setup lang="ts">
import { ArrowUpRight, Check } from 'lucide-vue-next'
import { divisions } from '~/data/divisions'
useSeoMeta({ title: 'Engineering & Manufacturing Services | Vomtek Houston', description: 'Control panels, electrical engineering, PCB and harness, motor repair, fabrication and pipeline inspection from one Houston team.' })
const groups = [
  { title: 'Design & build', text: 'New equipment, replacement panels and one-off electronic assemblies.', slugs: ['control-systems', 'electronics', 'fabrication'] },
  { title: 'Repair & service', text: 'Keep existing equipment running with repair, testing and field support.', slugs: ['electrical', 'motor-service'] },
  { title: 'Inspect & maintain', text: 'Find problems early and plan the work before production stops.', slugs: ['pipeline'] },
]
</script>
<template>
  <div>
    <section class="border-b border-ink/10 bg-white py-14 md:py-20"><div class="wrap"><p class="label-mono text-vomtek">Capabilities</p><h1 class="type-page-hero mt-4 max-w-[15ch]">Engineering and manufacturing.<br><span class="text-vomtek">Under one roof.</span></h1><p class="mt-5 max-w-xl text-[17.5px] leading-relaxed text-ink/70">Design, build, repair and inspect — with one team accountable for the drawing, the build and the startup.</p></div></section>
    <section class="section-y"><div class="wrap grid gap-4 md:grid-cols-3"><div v-for="group in groups" :key="group.title" class="rounded-2xl border border-ink/12 bg-bone p-6"><p class="label-mono text-vomtek">{{ group.title }}</p><p class="mt-3 text-[15.5px] leading-relaxed text-ink/70">{{ group.text }}</p><ul class="mt-5 space-y-3 border-t border-ink/10 pt-4"><li v-for="slug in group.slugs" :key="slug" class="flex items-center justify-between gap-2 text-[14.5px] font-medium"><NuxtLink :to="`/divisions/${slug}`" class="hover:text-vomtek">{{ divisions.find(d => d.slug === slug)?.shortName }}</NuxtLink><ArrowUpRight :size="12" class="text-ink/30" /></li></ul></div></div></section>
    <section class="section-y border-y border-ink/10 bg-bone"><div class="wrap"><SectionLabel index="01">Every capability</SectionLabel><div class="mt-8 grid gap-4 md:grid-cols-2"><div v-for="division in divisions" :key="division.slug" class="rounded-xl border border-ink/12 bg-white p-5"><div class="flex items-start justify-between gap-3"><div><p class="label-mono text-ink/60">{{ division.index }}</p><h2 class="mt-1 font-display text-[22px] font-semibold">{{ division.shortName }}</h2></div><NuxtLink :to="`/divisions/${division.slug}`" class="flex size-8 items-center justify-center rounded-full border border-ink/15 text-ink/50 hover:border-vomtek hover:text-vomtek"><ArrowUpRight :size="14" /></NuxtLink></div><ul class="mt-4 grid gap-2 sm:grid-cols-2"><li v-for="cap in division.capabilities.slice(0,4)" :key="cap" class="flex items-start gap-2 text-[13.5px] text-ink/65"><Check :size="12" class="mt-0.5 shrink-0 text-vomtek" />{{ cap }}</li></ul></div></div></div></section>
    <section class="bg-signal py-14 text-ink md:py-20"><div class="wrap grid gap-6 md:grid-cols-[1fr_auto] md:items-center"><div><p class="label-mono">Not sure which team?</p><h2 class="mt-3 max-w-[18ch] font-display text-[clamp(2.4rem,4.4vw,4rem)] font-semibold leading-[.95] tracking-[-.05em]">Tell us what is failing. We will route it correctly.</h2></div><NuxtLink to="/contact" class="btn btn-dark">Request a quote <ArrowUpRight :size="14" /></NuxtLink></div></section>
  </div>
</template>
