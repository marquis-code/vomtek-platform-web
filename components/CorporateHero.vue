<script setup lang="ts">
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Pause, Play } from 'lucide-vue-next'

const slides = [
  {
    kicker: 'Control systems',
    title: 'Panels built to your drawing.',
    body: 'UL 508A panels with PLC, HMI, VFD and MCC controls. Engineered, wired, labelled and point-to-point tested before delivery.',
    chips: ['UL 508A', 'PLC / HMI / SCADA', 'VFD / MCC'],
    image: 'panel-assembly',
    alt: 'Custom control panel wired and assembled',
    cta: 'See control systems',
    to: '/divisions/control-systems',
  },
  {
    kicker: 'Electronics & harness',
    title: 'Boards and harnesses built to print.',
    body: 'PCB layout in Altium, Allegro, PCAD and PADS. Wire harnesses and cable assemblies labelled and continuity-tested.',
    chips: ['PCB layout', 'Wire harness', 'Cable assembly'],
    image: 'panel-line',
    alt: 'Electronics and panel production line',
    cta: 'See electronics',
    to: '/divisions/electronics',
  },
  {
    kicker: 'Motor service',
    title: 'Motors tested before they return.',
    body: 'AC, DC, servo, stepper and spindle motor repair and rewinding, with load testing and on-site field support.',
    chips: ['AC / DC motors', 'Servo & spindle', 'Rewind & test'],
    image: 'motor-rewind',
    alt: 'Technician rewinding an industrial motor',
    cta: 'See motor service',
    to: '/divisions/motor-service',
  },
  {
    kicker: 'Pipeline inspection',
    title: 'Findings turned into a repair plan.',
    body: 'Inspection data reviewed into a ranked defect list. Parts, rentals and contractor work stay connected to the same asset record.',
    chips: ['Inspection review', 'Ranked findings', 'Repair plan'],
    image: 'pipeline-construction',
    alt: 'Pipeline inspection and construction',
    cta: 'See pipeline inspection',
    to: '/divisions/pipeline',
  },
]

const index = ref(0)
const paused = ref(false)
const current = computed(() => slides[index.value])
let timer: ReturnType<typeof setInterval> | undefined
function next() { index.value = (index.value + 1) % slides.length }
function prev() { index.value = (index.value - 1 + slides.length) % slides.length }
function go(i: number) { index.value = i }
function restart() { if (timer) clearInterval(timer); if (!paused.value) timer = setInterval(next, 7000) }
function toggle() { paused.value = !paused.value; restart() }
onMounted(restart)
onBeforeUnmount(() => { if (timer) clearInterval(timer) })
watch(index, restart)
</script>

<template>
  <section class="relative overflow-hidden border-b border-ink/10 bg-white">
    <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(17,22,18,.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,22,18,.035)_1px,transparent_1px)] bg-[size:64px_64px]" />
    <div class="wrap relative grid min-h-[calc(100svh-108px)] items-center gap-10 py-10 lg:grid-cols-12 lg:gap-10 lg:py-12">
      <div class="lg:col-span-7">
        <div class="flex items-center justify-between gap-4">
          <p class="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-bone px-3.5 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[.08em] text-ink/75"><span class="size-1.5 rounded-full bg-vomtek" /> Specialist capability</p>
          <p class="font-sans text-[12px] font-semibold tabular-nums text-ink/55">{{ String(index + 1).padStart(2, '0') }} / {{ String(slides.length).padStart(2, '0') }}</p>
        </div>

        <div class="mt-6 min-h-[330px] md:min-h-[355px]" aria-live="polite">
          <Transition mode="out-in" enter-active-class="transition duration-300 ease-out" enter-from-class="translate-y-3 opacity-0" leave-active-class="transition duration-150 ease-in" leave-to-class="-translate-y-2 opacity-0">
            <div :key="index">
              <p class="font-sans text-[12px] font-bold uppercase tracking-[.1em] text-vomtek">{{ current.kicker }}</p>
              <h1 class="mt-3 max-w-[12ch] font-display text-[clamp(3.1rem,6.2vw,6.2rem)] font-extrabold leading-[.98] tracking-[-.035em]">{{ current.title }}</h1>
              <p class="mt-4 max-w-[36rem] text-[17px] leading-relaxed text-ink/75 md:text-[18px]">{{ current.body }}</p>
              <div class="mt-5 flex flex-wrap gap-2"><span v-for="chip in current.chips" :key="chip" class="inline-flex items-center gap-1.5 rounded-full border border-vomtek/25 bg-vomtek-soft px-3 py-1.5 text-[12px] font-semibold text-vomtek-deep"><Check :size="12" /> {{ chip }}</span></div>
            </div>
          </Transition>
        </div>

        <div class="mt-7 flex flex-wrap items-center gap-2">
          <NuxtLink :to="current.to" class="btn btn-brand">{{ current.cta }} <ArrowUpRight :size="14" /></NuxtLink>
          <NuxtLink to="/contact" class="btn btn-outline">Request a quote</NuxtLink>
        </div>

        <div class="mt-7 flex items-center gap-3 border-t border-ink/10 pt-4">
          <button type="button" class="flex size-9 items-center justify-center rounded-full border border-ink/15 text-ink/65 transition-colors hover:border-vomtek hover:text-vomtek" aria-label="Previous capability" @click="prev"><ArrowLeft :size="14" /></button>
          <button type="button" class="flex size-9 items-center justify-center rounded-full border border-ink/15 text-ink/65 transition-colors hover:border-vomtek hover:text-vomtek" :aria-label="paused ? 'Play carousel' : 'Pause carousel'" @click="toggle"><Play v-if="paused" :size="13" /><Pause v-else :size="13" /></button>
          <button type="button" class="flex size-9 items-center justify-center rounded-full border border-ink/15 text-ink/65 transition-colors hover:border-vomtek hover:text-vomtek" aria-label="Next capability" @click="next"><ArrowRight :size="14" /></button>
          <div class="ml-2 flex flex-1 items-center gap-1.5">
            <button v-for="(slide, i) in slides" :key="slide.kicker" type="button" class="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/10" :aria-label="`Show ${slide.kicker}`" @click="go(i)"><span class="block h-full rounded-full bg-vomtek transition-all duration-500" :class="i === index ? 'w-full' : 'w-0'" /></button>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5">
        <div class="overflow-hidden rounded-2xl border border-ink/12 bg-white shadow-[0_35px_80px_-45px_rgba(17,22,18,.35)]">
          <Transition mode="out-in" enter-active-class="transition duration-300" enter-from-class="opacity-0 scale-[1.01]" leave-active-class="transition duration-150" leave-to-class="opacity-0">
            <PhotoImage :key="current.image" :name="current.image" :alt="current.alt" sizes="(min-width:1024px) 38vw, 100vw" eager class="aspect-[4/3] w-full object-cover" />
          </Transition>
          <div class="p-5">
            <p class="font-sans text-[11px] font-bold uppercase tracking-[.09em] text-vomtek">{{ current.kicker }}</p>
            <p class="mt-1.5 font-display text-[22px] font-bold leading-tight">{{ current.title }}</p>
            <p class="mt-2 text-[13px] leading-relaxed text-ink/65">Specified, built and checked by the Vomtek team.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
