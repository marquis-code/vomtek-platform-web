<script setup lang="ts">
import { ArrowUpRight, Check } from 'lucide-vue-next'
import { divisions, divisionBySlug } from '~/data/divisions'
const route = useRoute()
const division = computed(() => divisionBySlug(String(route.params.slug)))
if (!division.value) throw createError({ statusCode: 404, statusMessage: 'Division not found' })
useSeoMeta({
  title: () => `${division.value?.name} | Vomtek`,
  description: () => division.value?.summary || '',
})
const related = computed(() => divisions.filter(d => d.slug !== division.value?.slug).slice(0, 3))
</script>

<template>
  <div v-if="division">
    <section class="relative overflow-hidden border-b border-ink/10 bg-white">
      <div class="wrap grid items-center gap-10 py-14 md:py-20 lg:grid-cols-12">
        <div class="lg:col-span-7">
          <p class="label-mono text-vomtek">Vomtek division · {{ division.index }}</p>
          <h1 class="type-page-hero mt-4 max-w-[13ch]">{{ division.shortName }}.<br><span class="text-vomtek">{{ division.tagline }}</span></h1>
          <p class="mt-5 max-w-xl text-[16px] leading-relaxed text-ink/70">{{ division.description }}</p>
          <div class="mt-7 flex flex-wrap gap-2"><NuxtLink to="/contact" class="btn btn-brand">Request a quote <ArrowUpRight :size="14" /></NuxtLink><NuxtLink to="/services" class="btn btn-outline">All capabilities</NuxtLink></div>
          <div class="mt-8 grid max-w-2xl grid-cols-3 gap-4 border-t border-ink/10 pt-5"><div v-for="item in division.proof" :key="item.label"><p class="font-display text-[20px] font-semibold">{{ item.value }}</p><p class="label-mono mt-1 text-ink/65">{{ item.label }}</p></div></div>
        </div>
        <div class="lg:col-span-5"><div class="overflow-hidden rounded-2xl border border-ink/12"><PhotoImage :name="division.image" :alt="division.imageAlt" sizes="(min-width:1024px) 40vw, 100vw" eager class="aspect-[4/3] w-full object-cover" /></div></div>
      </div>
    </section>

    <section class="section-y">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-5"><SectionLabel index="01">What we do</SectionLabel><h2 class="mt-6 type-lg max-w-[12ch]">The work, start to finish.</h2><p class="mt-4 text-[14.5px] leading-relaxed text-ink/70">{{ division.summary }}</p></div>
        <div class="lg:col-span-7"><ul class="grid gap-x-8 gap-y-3 sm:grid-cols-2"><li v-for="item in division.capabilities" :key="item" class="flex items-start gap-2.5 border-b border-ink/10 pb-3 text-[14px] text-ink/75"><Check :size="15" class="mt-0.5 shrink-0 text-vomtek" />{{ item }}</li></ul></div>
      </div>
    </section>

    <section class="section-y border-y border-ink/10 bg-bone">
      <div class="wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-6"><SectionLabel index="02">Why Vomtek</SectionLabel><h2 class="mt-6 type-lg max-w-[12ch]">What you can count on.</h2><ul class="mt-6 space-y-4"><li v-for="outcome in division.outcomes" :key="outcome" class="flex items-start gap-3 border-b border-ink/10 pb-3 text-[14.5px] text-ink/75"><Check :size="15" class="mt-0.5 shrink-0 text-vomtek" />{{ outcome }}</li></ul></div>
        <div class="lg:col-span-6"><SectionLabel index="03">Industries</SectionLabel><div class="mt-6 flex flex-wrap gap-2"><span v-for="industry in division.industries" :key="industry" class="rounded-full border border-ink/15 bg-white px-3.5 py-2 text-[12.5px] text-ink/75">{{ industry }}</span></div><div class="mt-8 rounded-xl bg-ink p-5 text-bone"><p class="label-mono text-mint">Not sure who to ask?</p><p class="mt-2 font-display text-[23px] font-semibold">Tell us the problem. We will point you to the right team.</p><NuxtLink to="/contact" class="btn btn-mint mt-4">Talk to our team <ArrowUpRight :size="13" /></NuxtLink></div></div>
      </div>
    </section>

    <section v-if="division.slug === 'pipeline'" class="section-y"><div class="wrap"><div class="rounded-2xl border border-ink/12 bg-white p-6 md:p-8"><p class="label-mono text-vomtek">Vomtek Pipeline</p><h2 class="mt-2 type-lg max-w-[14ch]">The inspection platform is live.</h2><p class="mt-3 max-w-xl text-[14.5px] leading-relaxed text-ink/70">Open the pipeline workspace to upload an inspection, view a report, order parts or check a home drain.</p><div class="mt-5 flex flex-wrap gap-2"><NuxtLink to="/pipeline" class="btn btn-brand">Visit Pipeline <ArrowUpRight :size="13" /></NuxtLink><NuxtLink to="/login" class="btn btn-outline">Client portal</NuxtLink></div></div></div></section>

    <section class="section-y border-t border-ink/10"><div class="wrap"><div class="flex items-end justify-between gap-4"><div><SectionLabel index="04">More from Vomtek</SectionLabel><h2 class="mt-5 type-lg">Other divisions.</h2></div></div><div class="mt-7 grid gap-4 md:grid-cols-3"><NuxtLink v-for="item in related" :key="item.slug" :to="`/divisions/${item.slug}`" class="group overflow-hidden rounded-xl border border-ink/12 bg-white"><div class="h-32 overflow-hidden"><PhotoImage :name="item.image" :alt="item.imageAlt" sizes="(min-width:768px) 30vw, 100vw" class="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div><div class="p-4"><p class="font-display text-[20px] font-semibold">{{ item.shortName }}</p><p class="mt-1 text-[12px] text-ink/65">{{ item.tagline }}</p></div></NuxtLink></div></div></section>
  </div>
</template>
