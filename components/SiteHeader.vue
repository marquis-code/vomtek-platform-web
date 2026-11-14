<script setup lang="ts">
import { ArrowUpRight, ChevronDown, Menu, Phone, ShieldCheck, X } from 'lucide-vue-next'
import { activeDivisions } from '~/data/divisions'

const open = ref(false)
const divisionsOpen = ref(false)
const route = useRoute()
const links = [
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Pipeline', to: '/pipeline' },
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
]
const groups = [
  { label: 'Engineering & controls', slugs: ['control-systems', 'electrical'] },
  { label: 'Electronics & manufacturing', slugs: ['electronics', 'fabrication'] },
  { label: 'Inspection & property', slugs: ['pipeline'] },
]
const groupItems = (slugs: string[]) => slugs.map(slug => activeDivisions.find(d => d.slug === slug)!).filter(Boolean)
const groupCompanies = [
  { label: 'Vomtek Automotive', to: '/divisions/automotive', meta: 'Lagos, Nigeria' },
  { label: 'Facilities & Real Estate', to: '/divisions/facilities', meta: 'Group capability' },
  { label: 'Vomtek Foundation', to: '/foundation', meta: 'Community' },
]
watch(() => route.fullPath, () => { open.value = false; divisionsOpen.value = false })
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur-xl">
    <div class="hidden border-b border-ink/8 bg-ink text-bone md:block">
      <div class="wrap flex h-8 items-center justify-between font-sans text-[10.5px] font-semibold uppercase tracking-[.08em]">
        <div class="flex items-center gap-5 text-bone/70"><span class="flex items-center gap-1.5"><ShieldCheck :size="11" /> UL 508A panel shop</span></div>
        <div class="flex items-center gap-5"><a :href="`tel:+17133471466`" class="flex items-center gap-1.5 text-bone/70 hover:text-white"><Phone :size="11" /> 713-347-1466</a></div>
      </div>
    </div>
    <div class="wrap flex h-[76px] items-center justify-between gap-4">
      <BrandMark />
      <nav class="hidden items-center gap-6 xl:flex">
        <div class="relative" @mouseenter="divisionsOpen = true" @mouseleave="divisionsOpen = false">
          <button type="button" class="flex items-center gap-1 text-[16px] text-ink/75 transition-colors hover:text-ink" :class="route.path.startsWith('/divisions') ? 'text-ink' : ''" @click="divisionsOpen = true">Divisions <ChevronDown :size="12" :class="divisionsOpen ? 'rotate-180' : ''" /></button>
          <Transition enter-active-class="transition duration-150" enter-from-class="opacity-0 -translate-y-1" leave-active-class="transition duration-100" leave-to-class="opacity-0 -translate-y-1">
            <div v-if="divisionsOpen" class="absolute left-1/2 top-full z-50 w-[820px] -translate-x-1/2 pt-3">
              <div class="overflow-hidden rounded-2xl border border-ink/12 bg-white p-4 shadow-[0_30px_70px_-30px_rgba(17,22,18,.28)]">
                <div class="grid grid-cols-3 gap-4">
                  <div v-for="group in groups" :key="group.label">
                    <p class="px-2 font-sans text-[10px] font-bold uppercase tracking-[.09em] text-ink/45">{{ group.label }}</p>
                    <div class="mt-2 space-y-0.5">
                      <NuxtLink v-for="division in groupItems(group.slugs)" :key="division.slug" :to="`/divisions/${division.slug}`" class="group block rounded-lg px-2 py-2 transition-colors hover:bg-paper">
                        <p class="flex items-center gap-1.5 text-[13.5px] font-semibold leading-tight">{{ division.shortName }} <ArrowUpRight :size="11" class="text-ink/25 group-hover:text-vomtek" /></p>
                        <p class="mt-0.5 text-[11.5px] leading-snug text-ink/60">{{ division.tagline }}</p>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
                <div class="mt-3 flex flex-wrap items-center gap-1 border-t border-ink/10 pt-3">
                  <span class="px-2 font-sans text-[10px] font-bold uppercase tracking-[.09em] text-ink/45">Group</span>
                  <NuxtLink v-for="item in groupCompanies" :key="item.to" :to="item.to" class="rounded-lg px-2 py-1.5 text-[11.5px] text-ink/65 hover:bg-paper hover:text-ink">{{ item.label }}</NuxtLink>
                </div>
              </div>
            </div>
          </Transition>
        </div>
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="text-[16px] text-ink/75 transition-colors hover:text-ink">{{ link.label }}</NuxtLink>
      </nav>
      <div class="hidden items-center gap-2 xl:flex">
        <NuxtLink to="/contact" class="btn btn-brand !min-h-10 !px-4">Request a quote <ArrowUpRight :size="13" /></NuxtLink>
      </div>
      <button type="button" class="flex size-10 items-center justify-center rounded-full border border-ink/15 xl:hidden" :aria-expanded="open" aria-label="Toggle menu" @click="open = !open"><X v-if="open" :size="18" /><Menu v-else :size="18" /></button>
    </div>
    <Transition enter-active-class="transition duration-200" enter-from-class="-translate-y-2 opacity-0" leave-active-class="transition duration-150" leave-to-class="-translate-y-2 opacity-0">
      <div v-if="open" class="max-h-[calc(100svh-76px)] overflow-y-auto border-t border-ink/10 bg-white px-5 pb-6 pt-4 xl:hidden">
        <div v-for="group in groups" :key="group.label" class="mb-4">
          <p class="font-sans text-[10px] font-bold uppercase tracking-[.09em] text-ink/45">{{ group.label }}</p>
          <div class="mt-1 divide-y divide-ink/10">
            <NuxtLink v-for="division in groupItems(group.slugs)" :key="division.slug" :to="`/divisions/${division.slug}`" class="flex items-center justify-between py-3"><span class="font-display text-[20px]">{{ division.shortName }}</span><ArrowUpRight :size="14" class="text-ink/35" /></NuxtLink>
          </div>
        </div>
        <p class="font-sans text-[10px] font-bold uppercase tracking-[.09em] text-ink/45">Group</p>
        <div class="mt-1 divide-y divide-ink/10"><NuxtLink v-for="item in groupCompanies" :key="item.to" :to="item.to" class="flex items-center justify-between py-3"><span class="text-[14px]">{{ item.label }}</span><ArrowUpRight :size="13" class="text-ink/30" /></NuxtLink></div>
        <div class="mt-4 grid grid-cols-2 gap-2"><NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="rounded-lg border border-ink/10 px-3 py-2.5 text-[13px]">{{ link.label }}</NuxtLink><NuxtLink to="/contact" class="rounded-lg border border-ink/10 px-3 py-2.5 text-[13px]">Contact</NuxtLink></div>
        <div class="mt-4 grid grid-cols-1 gap-2"><NuxtLink to="/contact" class="btn btn-brand">Request a quote</NuxtLink></div>
      </div>
    </Transition>
  </header>
</template>
