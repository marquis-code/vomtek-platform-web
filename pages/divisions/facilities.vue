<script setup lang="ts">
import { ArrowUpRight, Check } from 'lucide-vue-next'
useSeoMeta({ title: 'Facilities & Real Estate Support | Vomtek', description: 'Electrical and mechanical engineering support for property, facilities and real-estate teams.' })
const services = ['Electrical infrastructure reviews', 'Panel and distribution upgrades', 'Preventive maintenance', 'Motor and pump service', 'Facility troubleshooting', 'Project coordination', 'Capital planning support', 'Emergency response']
</script>
<template>
  <div>
    <section class="border-b border-ink/10 bg-white py-14 md:py-20"><div class="wrap grid gap-10 lg:grid-cols-12 lg:items-center"><div class="lg:col-span-7"><p class="label-mono text-vomtek">Group capability</p><h1 class="type-page-hero mt-4 max-w-[13ch]">Facilities &<br><span class="text-vomtek">real estate support.</span></h1><p class="mt-5 max-w-xl text-[17.5px] leading-relaxed text-ink/70">Vomtek supports property owners and facility teams with the electrical and mechanical work behind a building — from infrastructure reviews to repairs and planned upgrades.</p><div class="mt-7"><NuxtLink to="/contact" class="btn btn-brand">Talk to our facilities team <ArrowUpRight :size="14" /></NuxtLink></div></div><div class="lg:col-span-5"><PhotoImage name="houston-office" alt="Vomtek Houston office and facilities" sizes="(min-width:1024px) 40vw, 100vw" class="aspect-[4/3] w-full rounded-2xl object-cover" /></div></div></section>
    <section class="section-y"><div class="wrap grid gap-10 lg:grid-cols-12"><div class="lg:col-span-5"><SectionLabel index="01">What we handle</SectionLabel><h2 class="mt-6 type-lg">The systems behind the building.</h2><p class="mt-4 text-[16px] leading-relaxed text-ink/70">We do not list properties. We keep the electrical and mechanical systems working so the property can do its job.</p></div><div class="lg:col-span-7"><ul class="grid gap-3 sm:grid-cols-2"><li v-for="s in services" :key="s" class="flex items-center gap-2.5 rounded-lg border border-ink/10 bg-white p-3.5 text-[15px] text-ink/75"><Check :size="14" class="shrink-0 text-vomtek" />{{ s }}</li></ul></div></div></section>
  </div>
</template>
