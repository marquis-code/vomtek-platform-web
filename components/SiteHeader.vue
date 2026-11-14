<script setup lang="ts">
import { ArrowUpRight, ChevronDown, Menu, Phone, ShieldCheck, X } from 'lucide-vue-next'
import { divisions, extraDivisions } from '~/data/divisions'

const open = ref(false)
const divisionsOpen = ref(false)
const route = useRoute()
const links = [
  { label: 'Divisions', to: '/services', dropdown: true },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Pipeline', to: '/pipeline' },
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
]
watch(() => route.fullPath, () => { open.value = false; divisionsOpen.value = false })
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur-xl">
    <div class="hidden border-b border-ink/8 bg-ink text-bone md:block">
      <div class="wrap flex h-8 items-center justify-between font-mono text-[12px] uppercase tracking-[.12em]">
        <div class="flex items-center gap-5 text-bone/70"><span class="flex items-center gap-1.5"><ShieldCheck :size="10" /> UL 508A panel shop</span></div>
        <div class="flex items-center gap-5"><a :href="`tel:+17133471466`" class="flex items-center gap-1.5 text-bone/70 hover:text-white"><Phone :size="10" /> 713-347-1466</a></div>
      </div>
    </div>
    <div class="wrap flex h-[76px] items-center justify-between gap-4">
      <BrandMark />
      <nav class="hidden items-center gap-6 xl:flex">
        <div class="relative" @mouseenter="divisionsOpen = true" @mouseleave="divisionsOpen = false">
          <button type="button" class="flex items-center gap-1 text-[17.5px] text-ink/75 transition-colors hover:text-ink" :class="route.path.startsWith('/divisions') ? 'text-ink' : ''" @click="divisionsOpen = !divisionsOpen">Divisions <ChevronDown :size="12" :class="divisionsOpen ? 'rotate-180' : ''" /></button>
          <Transition enter-active-class="transition duration-150" enter-from-class="opacity-0 -translate-y-1" leave-active-class="transition duration-100" leave-to-class="opacity-0 -translate-y-1">
            <div v-if="divisionsOpen" class="absolute left-1/2 top-full z-50 w-[680px] -translate-x-1/2 pt-3">
              <div class="overflow-hidden rounded-2xl border border-ink/12 bg-white p-3 shadow-[0_30px_70px_-30px_rgba(7,16,14,.35)]">
                <div class="grid grid-cols-2 gap-1">
                  <NuxtLink v-for="division in divisions" :key="division.slug" :to="`/divisions/${division.slug}`" class="group rounded-xl p-3 transition-colors hover:bg-paper">
                    <p class="flex items-center gap-2 text-[14.5px] font-semibold">{{ division.shortName }} <ArrowUpRight :size="11" class="text-ink/25 group-hover:text-vomtek" /></p>
                    <p class="mt-1 text-[13px] leading-relaxed text-ink/65">{{ division.tagline }}</p>
                  </NuxtLink>
                </div>
                <div class="mt-2 grid grid-cols-3 gap-1 border-t border-ink/10 pt-2">
                  <NuxtLink v-for="item in extraDivisions" :key="item.slug" :to="`/divisions/${item.slug}`" class="rounded-lg px-3 py-2 text-[13px] text-ink/65 hover:bg-paper"><span class="block font-medium text-ink">{{ item.name }}</span>{{ item.group }}</NuxtLink>
                  <NuxtLink to="/foundation" class="rounded-lg px-3 py-2 text-[13px] text-ink/65 hover:bg-paper"><span class="block font-medium text-ink">Vomtek Foundation</span>Community</NuxtLink>
                </div>
              </div>
            </div>
          </Transition>
        </div>
        <NuxtLink v-for="link in links.filter(l => !l.dropdown)" :key="link.to" :to="link.to" class="text-[17.5px] text-ink/75 transition-colors hover:text-ink">{{ link.label }}</NuxtLink>
      </nav>
      <div class="hidden items-center gap-2 xl:flex">
        <NuxtLink to="/contact" class="btn btn-brand !min-h-10 !px-4">Request a quote <ArrowUpRight :size="13" /></NuxtLink>
      </div>
      <button type="button" class="flex size-10 items-center justify-center rounded-full border border-ink/15 xl:hidden" :aria-expanded="open" aria-label="Toggle menu" @click="open = !open"><X v-if="open" :size="18" /><Menu v-else :size="18" /></button>
    </div>
    <Transition enter-active-class="transition duration-200" enter-from-class="-translate-y-2 opacity-0" leave-active-class="transition duration-150" leave-to-class="-translate-y-2 opacity-0">
      <div v-if="open" class="max-h-[calc(100svh-76px)] overflow-y-auto border-t border-ink/10 bg-white px-5 pb-6 pt-4 xl:hidden">
        <p class="font-mono text-[12px] uppercase tracking-[.12em] text-ink/50">Divisions</p>
        <div class="mt-2 divide-y divide-ink/10">
          <NuxtLink v-for="division in divisions" :key="division.slug" :to="`/divisions/${division.slug}`" class="flex items-center justify-between py-3"><span class="font-display text-[20px]">{{ division.shortName }}</span><ArrowUpRight :size="14" class="text-ink/35" /></NuxtLink>
          <NuxtLink v-for="item in extraDivisions" :key="item.slug" :to="`/divisions/${item.slug}`" class="flex items-center justify-between py-3"><span class="text-[15.5px]">{{ item.name }}</span><ArrowUpRight :size="13" class="text-ink/30" /></NuxtLink>
        </div>
        <div class="mt-4 grid grid-cols-2 gap-2"><NuxtLink v-for="link in links.filter(l => !l.dropdown)" :key="link.to" :to="link.to" class="rounded-lg border border-ink/10 px-3 py-2.5 text-[14.5px]">{{ link.label }}</NuxtLink><NuxtLink to="/foundation" class="rounded-lg border border-ink/10 px-3 py-2.5 text-[14.5px]">Foundation</NuxtLink><NuxtLink to="/contact" class="rounded-lg border border-ink/10 px-3 py-2.5 text-[14.5px]">Contact</NuxtLink></div>
        <div class="mt-4 grid grid-cols-1 gap-2"><NuxtLink to="/contact" class="btn btn-brand">Request a quote</NuxtLink></div>
      </div>
    </Transition>
  </header>
</template>
