<template>
  <div class="admin-layout">
    <AdminSidebar />
    
    <main class="admin-main">
      <div class="admin-header">
        <h1>Dashboard</h1>
        <div class="admin-actions">
          <button class="btn-primary">Nouveau média</button>
          <button class="btn-secondary">Exporter</button>
        </div>
      </div>
      
      <div class="admin-content">
        <div class="stats-grid">
          <StatsCard 
            title="Total Médias" 
            :value="stats.totalMedia" 
            icon="🖼️" 
            change="+12% ce mois" 
            changeType="positive" 
          />
          <StatsCard 
            title="Téléchargements" 
            :value="stats.downloads" 
            icon="⬇️" 
            change="+8% ce mois" 
            changeType="positive" 
          />
          <StatsCard 
            title="Utilisateurs" 
            :value="stats.users" 
            icon="👥" 
            change="+15% ce mois" 
            changeType="positive" 
          />
          <StatsCard 
            title="Likes" 
            :value="stats.likes" 
            icon="❤️" 
            change="+5% ce mois" 
            changeType="positive" 
          />
        </div>
        
        <div class="dashboard-grid">
          <div class="dashboard-card">
            <h3>Activité Récente</h3>
            <div class="activity-list">
              <div v-for="activity in recentActivity" :key="activity.id" class="activity-item">
                <span class="activity-icon">{{ activity.icon }}</span>
                <div class="activity-content">
                  <p>{{ activity.text }}</p>
                  <span class="activity-time">{{ activity.time }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="dashboard-card">
            <h3>Médias Populaires</h3>
            <div class="popular-media">
              <div v-for="media in popularMedia" :key="media.id" class="media-item">
                <img :src="media.thumbnail" :alt="media.title" />
                <div class="media-info">
                  <p>{{ media.title }}</p>
                  <span>{{ media.downloads }} téléchargements</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AdminSidebar from '../components/admin/AdminSidebar.vue'
import StatsCard from '../components/admin/StatsCard.vue'
import { useMediaStore } from '../composables/useMediaStore'

const { mediaItems } = useMediaStore()

const stats = computed(() => ({
  totalMedia: mediaItems.value.length,
  downloads: mediaItems.value.reduce((sum, item) => sum + item.downloads, 0).toLocaleString(),
  users: '1,234',
  likes: mediaItems.value.reduce((sum, item) => sum + item.likes, 0).toLocaleString()
}))

const recentActivity = [
  { id: 1, icon: '📤', text: 'Nouveau média uploadé', time: 'Il y a 2h' },
  { id: 2, icon: '👤', text: 'Nouvel utilisateur inscrit', time: 'Il y a 4h' },
  { id: 3, icon: '⬇️', text: '50 téléchargements aujourd\'hui', time: 'Il y a 6h' },
  { id: 4, icon: '❤️', text: '25 nouveaux likes', time: 'Il y a 8h' }
]

const popularMedia = computed(() => 
  mediaItems.value
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 3)
)
</script>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
  background: #f9fafb;
}

.dark .admin-layout {
  background: #111827;
}

.admin-main {
  flex: 1;
  margin-left: 250px;
  padding: 2rem;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.admin-header h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
}

.dark .admin-header h1 {
  color: white;
}

.admin-actions {
  display: flex;
  gap: 1rem;
}

.btn-primary, .btn-secondary {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-secondary {
  background: white;
  color: #374151;
  border: 1px solid #d1d5db;
}

.btn-secondary:hover {
  background: #f9fafb;
}

.dark .btn-secondary {
  background: #374151;
  color: white;
  border-color: #4b5563;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

@media (max-width: 1024px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}

.dashboard-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.dark .dashboard-card {
  background: #1f2937;
}

.dashboard-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.dark .dashboard-card h3 {
  color: white;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.dark .activity-item {
  border-bottom-color: #374151;
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-icon {
  font-size: 1.25rem;
}

.activity-content p {
  font-size: 0.875rem;
  color: #111827;
  margin-bottom: 0.25rem;
}

.dark .activity-content p {
  color: white;
}

.activity-time {
  font-size: 0.75rem;
  color: #6b7280;
}

.media-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.dark .media-item {
  border-bottom-color: #374151;
}

.media-item:last-child {
  border-bottom: none;
}

.media-item img {
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 0.375rem;
}

.media-info p {
  font-size: 0.875rem;
  color: #111827;
  margin-bottom: 0.25rem;
}

.dark .media-info p {
  color: white;
}

.media-info span {
  font-size: 0.75rem;
  color: #6b7280;
}

@media (max-width: 768px) {
  .admin-main {
    margin-left: 0;
    padding: 1rem;
  }
  
  .admin-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>