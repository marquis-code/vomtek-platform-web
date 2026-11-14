<script setup lang="ts">
import { imageWidths } from '~/data/imageWidths'
defineOptions({ inheritAttrs: false })
const props = withDefaults(defineProps<{ name: string; alt: string; sizes?: string; eager?: boolean }>(), { sizes: '100vw', eager: false })
const widths = computed(() => imageWidths[props.name] || [480])
const srcset = (ext: string) => widths.value.map(w => `/images/optimized/${props.name}-${w}.${ext} ${w}w`).join(', ')
const fallback = computed(() => widths.value.includes(1200) ? 1200 : widths.value[widths.value.length - 1])
</script>
<template>
  <picture>
    <source type="image/avif" :srcset="srcset('avif')" :sizes="sizes">
    <source type="image/webp" :srcset="srcset('webp')" :sizes="sizes">
    <img :src="`/images/optimized/${name}-${fallback}.jpg`" :srcset="srcset('jpg')" :sizes="sizes" :alt="alt" :loading="eager ? 'eager' : 'lazy'" :fetchpriority="eager ? 'high' : 'auto'" decoding="async" v-bind="$attrs">
  </picture>
</template>
