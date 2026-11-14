<script setup lang="ts">
import { ArrowUpRight, Building2, Check, CircuitBoard, Cog, Droplets, Factory, Flame, Gauge, Hammer, Radar, UtensilsCrossed, Wrench, Zap } from 'lucide-vue-next'
import { activeDivisions } from '~/data/divisions'

useSeoMeta({
  title: 'Vomtek | Control panels, electronics and industrial service',
  description: 'Vomtek designs and builds custom control panels, electronics, wire harnesses and fabricated equipment, with field service and pipeline inspection under one roof.',
})

const icons: Record<string, any> = { 'control-systems': Gauge, electrical: Wrench, electronics: CircuitBoard, 'motor-service': Cog, fabrication: Hammer, pipeline: Radar }
const process = [
  { n: '01', title: 'Talk through the problem', text: 'Tell us what the equipment needs to do, what is failing, or what you are replacing. We ask the practical questions first.' },
  { n: '02', title: 'Engineer the solution', text: 'We produce the drawings, panel layout, parts list and scope. You approve the design before anything is built.' },
  { n: '03', title: 'Build and test', text: 'Our shop builds, wires, labels and tests the system. You get the drawings and test record with the finished work.' },
  { n: '04', title: 'Install and support', text: 'We help with startup, field wiring and training. When something changes later, the same team is still here.' },
]
const industries = [{ name: 'Water & wastewater', icon: Droplets }, { name: 'Energy & utilities', icon: Zap }, { name: 'Food & beverage', icon: UtensilsCrossed }, { name: 'Manufacturing', icon: Factory }, { name: 'Oil & gas', icon: Flame }, { name: 'Commercial facilities', icon: Building2 }]
</script>

<template>
  <div>
    <CorporateHero />

    <section class="section-y border-y border-ink/10 bg-bone">
      <div class="wrap">
        <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><SectionLabel index="01">What we do</SectionLabel><h2 class="mt-6 type-lg max-w-[14ch]">Five capabilities. One place to call.</h2></div><p class="max-w-sm text-[16px] leading-relaxed text-ink/70">From a single replacement panel to a full equipment build, the work stays inside one team.</p></div>
        <div class="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <NuxtLink v-for="(division, i) in activeDivisions" :key="division.slug" :to="`/divisions/${division.slug}`" class="group overflow-hidden rounded-2xl border border-ink/12 bg-white transition-all hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_24px_50px_-35px_rgba(7,16,14,.5)]">
            <div class="relative h-44 overflow-hidden"><PhotoImage :name="division.image" :alt="division.imageAlt" sizes="(min-width:1280px) 30vw, (min-width:768px) 50vw, 100vw" class="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /><span class="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[.08em] text-ink backdrop-blur">{{ division.index }}</span></div>
            <div class="p-5"><div class="flex items-start justify-between gap-3"><h3 class="max-w-[17ch] font-display text-[22px] font-semibold leading-[1.05] tracking-[-.03em]">{{ division.shortName }}</h3><component :is="icons[division.slug]" :size="18" class="mt-1 shrink-0 text-ink/25 transition-colors group-hover:text-vomtek" /></div><p class="mt-2 text-[14.5px] leading-relaxed text-ink/70">{{ division.summary }}</p><span class="mt-4 inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[.1em] text-vomtek">Explore division <ArrowUpRight :size="11" /></span></div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="section-y">
      <div class="wrap grid items-center gap-12 lg:grid-cols-12">
        <div class="lg:col-span-6">
          <SectionLabel index="02">Our flagship</SectionLabel>
          <h2 class="mt-6 type-lg max-w-[13ch]">Control panels built for the real world.</h2>
          <p class="mt-5 max-w-lg text-[17.5px] leading-relaxed text-ink/70">Our UL 508A panel shop designs, builds and tests custom control panels. Every panel is labelled, documented and checked before it leaves the floor.</p>
          <ul class="mt-7 grid gap-3 sm:grid-cols-2"><li v-for="item in ['Custom panel design', 'PLC, HMI and SCADA', 'VFD, MCC and motor control', 'Testing and documentation', 'Installation and startup', 'Field support']" :key="item" class="flex items-center gap-2.5 text-[14.5px] text-ink/70"><Check :size="14" class="shrink-0 text-vomtek" />{{ item }}</li></ul>
          <NuxtLink to="/divisions/control-systems" class="btn btn-dark mt-7">See control systems <ArrowUpRight :size="13" /></NuxtLink>
        </div>
        <div class="lg:col-span-6"><div class="overflow-hidden rounded-2xl border border-ink/12"><PhotoImage name="panel-line" alt="Control panel production line" sizes="(min-width:1024px) 50vw, 100vw" class="aspect-[4/3] w-full object-cover" /></div></div>
      </div>
    </section>

    <section class="section-y border-y border-ink/10 bg-bone">
      <div class="wrap"><SectionLabel index="03">How we work</SectionLabel><div class="mt-8 grid gap-px overflow-hidden rounded-xl border border-ink/12 bg-ink/12 md:grid-cols-4"><div v-for="step in process" :key="step.n" class="bg-white p-6"><span class="font-mono text-[11.5px] text-vomtek">{{ step.n }}</span><h3 class="mt-8 font-display text-[21px] font-semibold leading-tight">{{ step.title }}</h3><p class="mt-2 text-[14.5px] leading-relaxed text-ink/70">{{ step.text }}</p></div></div></div>
    </section>

    <section class="section-y">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-5"><SectionLabel index="04">Industries</SectionLabel><h2 class="mt-6 type-lg max-w-[13ch]">Work that cannot stop.</h2><p class="mt-5 max-w-md text-[16.5px] leading-relaxed text-ink/70">Our customers run water systems, production lines, energy facilities and commercial buildings. What they have in common is that downtime costs more than the equipment.</p><NuxtLink to="/projects" class="btn btn-outline mt-7">See representative work <ArrowUpRight :size="13" /></NuxtLink></div>
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7"><div v-for="industry in industries" :key="industry.name" class="flex min-h-28 flex-col justify-between rounded-xl border border-ink/12 bg-white p-4"><component :is="industry.icon" :size="19" class="text-vomtek" /><p class="text-[14.5px] font-medium leading-tight">{{ industry.name }}</p></div></div>
      </div>
    </section>

    <section class="relative overflow-hidden bg-ink text-bone">
      <div class="absolute inset-0"><PhotoImage name="pipeline-construction" alt="Pipeline construction" sizes="100vw" class="size-full object-cover opacity-25" /><div class="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" /></div>
      <div class="wrap relative grid gap-10 py-16 md:py-20 lg:grid-cols-12 lg:items-center">
        <div class="lg:col-span-7"><p class="label-mono text-mint">Vomtek Pipeline</p><h2 class="mt-4 max-w-[15ch] font-display text-[clamp(2.7rem,4.8vw,4.5rem)] font-semibold leading-[.95] tracking-[-.05em]">Inspect the line.<br><span class="text-mint">Know what to fix.</span></h2><p class="mt-5 max-w-lg text-[16.5px] leading-relaxed text-bone/75">Our pipeline division combines inspection tools, clear reports and a customer portal for operators, utilities and homeowners. Parts, rentals and contractor work stay connected to the same asset record.</p><div class="mt-7 flex flex-wrap gap-2"><NuxtLink to="/pipeline" class="btn btn-mint">Explore Vomtek Pipeline <ArrowUpRight :size="14" /></NuxtLink><NuxtLink to="/contact" class="btn btn-outline-dark">Talk to our team</NuxtLink></div></div>
        <div class="grid grid-cols-3 gap-3 lg:col-span-5"><div v-for="s in [{v:'B2B',l:'operators & utilities'},{v:'Home',l:'drain checks'},{v:'Live',l:'customer portal'}]" :key="s.l" class="rounded-xl border border-bone/15 bg-bone/5 p-4"><p class="font-display text-[24px] font-semibold text-mint">{{ s.v }}</p><p class="label-mono mt-2 text-bone/60">{{ s.l }}</p></div></div>
      </div>
    </section>

    <section class="section-y">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-6"><SectionLabel index="05">Beyond the shop</SectionLabel><h2 class="mt-6 type-lg max-w-[13ch]">A company people stay with.</h2><p class="mt-5 max-w-lg text-[16.5px] leading-relaxed text-ink/70">We invest in our team, our apprentices and the communities around us. The Vomtek Foundation supports education and practical training for young people.</p><div class="mt-7 flex gap-2"><NuxtLink to="/careers" class="btn btn-dark">Work with us <ArrowUpRight :size="13" /></NuxtLink><NuxtLink to="/foundation" class="btn btn-outline">Vomtek Foundation</NuxtLink></div></div>
        <div class="grid grid-cols-2 gap-3 lg:col-span-6"><PhotoImage name="machine-team" alt="Vomtek technicians at work" sizes="(min-width:1024px) 25vw, 50vw" class="aspect-[4/5] w-full rounded-xl object-cover" /><PhotoImage name="houston-office" alt="Vomtek office" sizes="(min-width:1024px) 25vw, 50vw" class="aspect-[4/5] w-full rounded-xl object-cover" /></div>
      </div>
    </section>

    <section class="relative overflow-hidden bg-signal text-ink"><div class="wrap grid items-center gap-8 py-14 md:grid-cols-[1fr_auto] md:py-20"><div><p class="label-mono">Start with a conversation</p><h2 class="mt-3 max-w-[18ch] font-display text-[clamp(2.4rem,4.5vw,4.2rem)] font-semibold leading-[.95] tracking-[-.05em]">Tell us what you need built, repaired or inspected.</h2></div><div class="flex flex-wrap gap-2 md:justify-end"><NuxtLink to="/contact" class="btn btn-dark">Request a quote <ArrowUpRight :size="14" /></NuxtLink><a href="tel:+17133471466" class="btn bg-white text-ink">Call 713-347-1466</a></div></div></section>
  </div>
</template>
