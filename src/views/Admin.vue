<template>
  <div class="admin-container">
    <h1>Administration</h1>
    
    <div class="admin-grid">
      <div class="admin-card">
        <h2>Statistiques</h2>
        <div>
          <p>Médias: 6</p>
          <p>Téléchargements: 7,055</p>
          <p>Likes: 1,389</p>
        </div>
      </div>
      
      <div class="admin-card">
        <h2>Actions</h2>
        <div>
          <button class="btn btn-primary">Ajouter média</button>
          <button class="btn btn-success">Exporter données</button>
        </div>
      </div>
      
      <div class="admin-card">
        <h2>Système</h2>
        <div>
          <p>Status: ✅ Actif</p>
          <p>Version: 1.0.0</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Page d'administration
</script>

<style scoped>
.admin-container {
  max-width: 1200px;
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

.admin-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .admin-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.admin-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
}

.dark .admin-card {
  background: var(--color-gray-800);
}

.admin-card h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-gray-900);
}

.dark .admin-card h2 {
  color: var(--color-gray-100);
}

.admin-card p {
  margin-bottom: 0.5rem;
  color: var(--color-gray-600);
}

.dark .admin-card p {
  color: var(--color-gray-300);
}

.btn {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 0.5rem;
  transition: all 0.2s;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-success {
  background: #10b981;
  color: white;
}

.btn-success:hover {
  background: #059669;
}
</style>