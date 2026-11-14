<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
useSeoMeta({ title: 'News & Notes | Vomtek', description: 'Updates from Vomtek across control systems, electronics, motor service, fabrication and pipeline inspection.' })
const notes = [
  { tag: 'Company', title: 'A clearer Vomtek', text: 'We have brought our divisions into one place so customers can see the full capability of the Houston team.', body: 'Control systems, electrical, electronics, motor service, fabrication and pipeline inspection now sit under one Vomtek story. The work has not changed — the way we explain it has.' },
  { tag: 'Pipeline', title: 'The pipeline portal is live', text: 'Operators and homeowners can now upload an inspection, view a report and manage repair work in one account.', body: 'Vomtek Pipeline includes operator reporting, home drain checks, parts, tool rentals and a contractor network. It remains a division of Vomtek, not a separate company.' },
  { tag: 'Control systems', title: 'What a useful panel drawing includes', text: 'A good drawing is more than a schematic. It is the maintenance team’s map when something stops.', body: 'We include wire numbers, device labels, terminal details, bill of materials and a test record with every panel. It takes a little longer at build time and saves hours later.' },
]
</script>
<template>
  <div>
    <section class="border-b border-ink/10 bg-white py-14 md:py-20"><div class="wrap"><p class="label-mono text-vomtek">News & notes</p><h1 class="type-page-hero mt-4 max-w-[13ch]">What is happening<br><span class="text-vomtek">at Vomtek.</span></h1><p class="mt-5 max-w-xl text-[17.5px] leading-relaxed text-ink/70">Company updates, practical notes and news from the shop floor.</p></div></section>
    <section class="section-y"><div class="wrap grid gap-4 lg:grid-cols-3"><article v-for="note in notes" :key="note.title" class="flex flex-col rounded-2xl border border-ink/12 bg-bone p-6"><p class="label-mono text-vomtek">{{ note.tag }}</p><h2 class="mt-4 font-display text-[25px] font-semibold leading-tight">{{ note.title }}</h2><p class="mt-3 text-[14.5px] leading-relaxed text-ink/70">{{ note.text }}</p><p class="mt-4 flex-1 text-[14px] leading-relaxed text-ink/65">{{ note.body }}</p></article></div><div class="mt-8 flex justify-end"><NuxtLink to="/contact" class="btn btn-dark">Talk to our team <ArrowUpRight :size="13" /></NuxtLink></div></section>
  </div>
</template>
