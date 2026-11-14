<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'dark' | 'light'; compact?: boolean }>(), { tone: 'dark', compact: false })
</script>
<template>
  <NuxtLink to="/" class="group inline-flex items-center gap-3" aria-label="Vomtek home">
    <span class="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px]" :class="tone === 'dark' ? '' : 'bg-white p-0.5'">
      <img src="/images/vomtek-logo.png" alt="Vomtek" width="40" height="40" class="size-full object-cover" />
    </span>
    <span v-if="!compact" class="leading-none">
      <span class="block font-display text-[19px] font-extrabold tracking-[-.02em]" :class="tone === 'dark' ? 'text-ink' : 'text-bone'">VOMTEK</span>
      <span class="mt-1 block font-sans text-[9px] font-semibold uppercase tracking-[.14em]" :class="tone === 'dark' ? 'text-ink/70' : 'text-bone/70'">Industrial engineering</span>
    </span>
  </NuxtLink>
</template>
