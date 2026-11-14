<script setup lang="ts">
import { ArrowUpRight, Check } from 'lucide-vue-next'
useSeoMeta({ title: 'Careers at Vomtek | Engineering jobs', description: 'Build a career in control panels, electronics, fabrication and pipeline inspection with Vomtek.' })
const roles = [
  { title: 'Control panel technician', team: 'Control Systems', text: 'Wire, label and test custom panels from engineering drawings.' },
  { title: 'Electrical engineer', team: 'Electrical', text: 'Design power and control systems and support startup in the field.' },
  { title: 'PCB / harness technician', team: 'Electronics', text: 'Build harnesses and support board-level assembly and test.' },
  { title: 'Machinist / fabricator', team: 'Fabrication', text: 'Machine and fabricate parts, frames and enclosures from drawings.' },
  { title: 'Pipeline field technician', team: 'Pipeline', text: 'Support inspection runs, equipment and customer reporting.' },
]
</script>
<template>
  <div>
    <section class="border-b border-ink/10 bg-white py-14 md:py-24"><div class="wrap grid gap-10 lg:grid-cols-12 lg:items-end"><div class="lg:col-span-8"><p class="label-mono text-vomtek">Careers</p><h1 class="type-page-hero mt-4 max-w-[13ch]">Do work that<br><span class="text-vomtek">keeps things running.</span></h1><p class="mt-5 max-w-xl text-[17.5px] leading-relaxed text-ink/70">We are always looking for practical people who take pride in a clean panel, a correct harness or a safe line.</p></div><div class="lg:col-span-4"><div class="rounded-2xl border border-ink/12 bg-bone p-5"><p class="label-mono text-ink/60">Open roles</p><p class="mt-2 text-[15px] leading-relaxed text-ink/70">Shop, field and office roles. Send a short note and something you have built or repaired.</p><NuxtLink to="/contact" class="btn btn-brand mt-4">Introduce yourself <ArrowUpRight :size="13" /></NuxtLink></div></div></div></section>
    <section class="section-y"><div class="wrap"><SectionLabel index="01">Where we hire</SectionLabel><div class="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3"><div v-for="role in roles" :key="role.title" class="rounded-xl border border-ink/12 bg-bone p-5"><p class="label-mono text-vomtek">{{ role.team }}</p><h2 class="mt-2 font-display text-[21px] font-semibold">{{ role.title }}</h2><p class="mt-2 text-[14px] leading-relaxed text-ink/70">{{ role.text }}</p><NuxtLink to="/contact" class="mt-4 inline-flex items-center gap-1 font-mono text-[10.5px] uppercase tracking-[.08em] text-vomtek">Start a conversation <ArrowUpRight :size="11" /></NuxtLink></div></div></div></section>
    <section class="section-y border-y border-ink/10 bg-bone"><div class="wrap grid gap-8 md:grid-cols-3"><div v-for="i in [{t:'Learn on real work',d:'You will build and troubleshoot equipment that goes into a plant, not a training box.'},{t:'Work with the whole system',d:'Panels, electronics and field work sit in the same building.'},{t:'Grow into responsibility',d:'We want people who can eventually lead a job, a crew or a division.'}]" :key="i.t"><Check :size="17" class="text-vomtek" /><h2 class="mt-5 font-display text-[22px] font-semibold">{{ i.t }}</h2><p class="mt-2 text-[14.5px] leading-relaxed text-ink/70">{{ i.d }}</p></div></div></section>
  </div>
</template>
