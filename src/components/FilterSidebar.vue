<template>
  <div class="filter-sidebar">
    <h3>Filtres</h3>
    
    <div class="filter-group">
      <div class="filter-item">
        <label>Format</label>
        <select>
          <option value="all">Tous</option>
          <option value="jpg">JPG</option>
          <option value="png">PNG</option>
        </select>
      </div>
      
      <div class="filter-item">
        <label>Résolution</label>
        <select>
          <option value="all">Toutes</option>
          <option value="hd">HD</option>
          <option value="4k">4K</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Composant de filtrage minimal
</script>

<style scoped>
.filter-sidebar {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
}

.dark .filter-sidebar {
  background: var(--color-gray-800);
}

h3 {
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-gray-900);
}

.dark h3 {
  color: var(--color-gray-100);
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.filter-item label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--color-gray-700);
}

.dark .filter-item label {
  color: var(--color-gray-300);
}

.filter-item select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--color-gray-300);
  border-radius: 0.25rem;
  background: white;
  color: var(--color-gray-900);
}

.dark .filter-item select {
  background: var(--color-gray-700);
  border-color: var(--color-gray-600);
  color: var(--color-gray-100);
}
</style>