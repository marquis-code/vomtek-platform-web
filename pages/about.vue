<script setup lang="ts">
import { ArrowUpRight, Check } from 'lucide-vue-next'
useSeoMeta({ title: 'About Vomtek | Houston engineering and manufacturing', description: 'Vomtek is a Houston engineering and manufacturing company delivering control panels, electronics, motor service, fabrication and pipeline inspection.' })
const values = [
  { title: 'Do it properly', text: 'We would rather solve the real problem than rush a repair that comes back.' },
  { title: 'Respect the people', text: 'Customers, technicians and suppliers are treated like long-term partners.' },
  { title: 'Work as one team', text: 'The panel shop, machine shop and field crew work from the same drawing.' },
  { title: 'Improve every time', text: 'We learn from every build, repair and inspection and carry it into the next job.' },
  { title: 'Say what is true', text: 'Clear scope, clear price and an honest answer when something is outside our scope.' },
]
</script>
<template>
  <div>
    <section class="border-b border-ink/10 bg-white py-14 md:py-24"><div class="wrap grid gap-10 lg:grid-cols-12 lg:items-end"><div class="lg:col-span-8"><p class="label-mono text-vomtek">About Vomtek</p><h1 class="type-page-hero mt-4 max-w-[14ch]">A Houston shop<br><span class="text-vomtek">built to solve hard problems.</span></h1><p class="mt-5 max-w-2xl text-[17.5px] leading-relaxed text-ink/70">Vomtek is an engineering and manufacturing company working across control systems, electronics, motor service, fabrication and pipeline inspection. Our customers are the people responsible for keeping plants, water systems and facilities running.</p></div><div class="lg:col-span-4"><div class="rounded-2xl border border-ink/12 bg-bone p-5"><p class="label-mono text-ink/60">Head office</p><p class="mt-2 text-[15.5px] leading-relaxed">2401 Fountain View Dr, Ste 312<br>Houston, Texas 77057</p><p class="mt-3 text-[14.5px] text-ink/65">713-347-1466<br>support@vomtek.com</p></div></div></div></section>

    <section class="section-y"><div class="wrap grid gap-10 lg:grid-cols-12"><div class="lg:col-span-5"><SectionLabel index="01">Who we are</SectionLabel><h2 class="mt-6 type-lg max-w-[12ch]">One team, six capabilities.</h2></div><div class="lg:col-span-7 space-y-4 text-[17px] leading-relaxed text-ink/75"><p>Most industrial projects are split between a panel shop, an electronics supplier, a machine shop and a motor repair company. When something goes wrong, each one points at the other.</p><p>Vomtek keeps those capabilities together. The same team can design the panel, build the harness, machine the enclosure, repair the motor and support the startup.</p><p>That is why customers stay with us: one drawing, one scope and one group of people who know the equipment.</p></div></div></section>

    <section class="section-y border-y border-ink/10 bg-bone"><div class="wrap"><SectionLabel index="02">What we believe</SectionLabel><div class="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5"><div v-for="value in values" :key="value.title" class="rounded-xl border border-ink/12 bg-white p-5"><Check :size="16" class="text-vomtek" /><h3 class="mt-6 font-display text-[19px] font-semibold">{{ value.title }}</h3><p class="mt-2 text-[14px] leading-relaxed text-ink/70">{{ value.text }}</p></div></div></div></section>

    <section class="section-y"><div class="wrap flex flex-col items-start justify-between gap-5 rounded-2xl bg-ink p-7 text-bone md:flex-row md:items-center md:p-10"><div><p class="label-mono text-mint">See the work</p><h2 class="mt-2 max-w-[18ch] font-display text-[30px] font-semibold leading-[1.02] md:text-[38px]">The best introduction is a project.</h2></div><NuxtLink to="/projects" class="btn btn-mint">See representative work <ArrowUpRight :size="14" /></NuxtLink></div></section>
  </div>
</template>
