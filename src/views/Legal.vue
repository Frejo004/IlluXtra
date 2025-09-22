<template>
  <div class="legal-container">
    <h1>Mentions Légales</h1>
    
    <div class="legal-content">
      <h2>Conditions d'utilisation</h2>
      <p>Tous les contenus sont libres de droits pour usage personnel et commercial.</p>
      
      <h2>Propriété intellectuelle</h2>
      <p>Les médias sont générés par IA et mis à disposition gratuitement.</p>
      
      <h2>Contact</h2>
      <p>Pour toute question, utilisez notre page de contact.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Page des mentions légales
</script>

<style scoped>
.legal-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: var(--color-gray-900);
}

.dark h1 {
  color: var(--color-gray-100);
}

.legal-content h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 0 1rem 0;
  color: var(--color-gray-800);
}

.dark .legal-content h2 {
  color: var(--color-gray-200);
}

.legal-content p {
  line-height: 1.6;
  margin-bottom: 1rem;
  color: var(--color-gray-600);
}

.dark .legal-content p {
  color: var(--color-gray-300);
}
</style>