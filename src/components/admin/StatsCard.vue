<template>
  <div class="stats-card">
    <div class="stats-icon">{{ icon }}</div>
    <div class="stats-content">
      <h3>{{ title }}</h3>
      <p class="stats-value">{{ value }}</p>
      <span class="stats-change" :class="changeType">{{ change }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  value: string | number
  icon: string
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
}

withDefaults(defineProps<Props>(), {
  change: '',
  changeType: 'neutral'
})
</script>

<style scoped>
.stats-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.dark .stats-card {
  background: #1f2937;
}

.stats-icon {
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  border-radius: 0.5rem;
}

.dark .stats-icon {
  background: #374151;
}

.stats-content h3 {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
}

.dark .stats-content h3 {
  color: #9ca3af;
}

.stats-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.25rem;
}

.dark .stats-value {
  color: white;
}

.stats-change {
  font-size: 0.75rem;
  font-weight: 500;
}

.stats-change.positive {
  color: #10b981;
}

.stats-change.negative {
  color: #ef4444;
}

.stats-change.neutral {
  color: #6b7280;
}
</style>