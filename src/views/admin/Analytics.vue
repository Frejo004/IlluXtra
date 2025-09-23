<template>
  <div class="admin-layout">
    <AdminSidebar />
    
    <main class="admin-main">
      <div class="admin-header">
        <h1>Analytics</h1>
        <select v-model="selectedPeriod" class="period-select">
          <option value="7d">7 derniers jours</option>
          <option value="30d">30 derniers jours</option>
          <option value="90d">3 derniers mois</option>
        </select>
      </div>
      
      <div class="admin-content">
        <div class="stats-overview">
          <StatsCard 
            title="Vues totales" 
            :value="analytics.totalViews" 
            icon="👁️" 
            change="+23% vs période précédente" 
            changeType="positive" 
          />
          <StatsCard 
            title="Téléchargements" 
            :value="analytics.downloads" 
            icon="⬇️" 
            change="+15% vs période précédente" 
            changeType="positive" 
          />
          <StatsCard 
            title="Nouveaux utilisateurs" 
            :value="analytics.newUsers" 
            icon="👤" 
            change="+8% vs période précédente" 
            changeType="positive" 
          />
          <StatsCard 
            title="Taux d'engagement" 
            :value="analytics.engagementRate" 
            icon="📊" 
            change="-2% vs période précédente" 
            changeType="negative" 
          />
        </div>
        
        <div class="analytics-grid">
          <div class="analytics-card">
            <h3>Contenu le plus populaire</h3>
            <div class="popular-content">
              <div v-for="item in popularContent" :key="item.id" class="content-item">
                <img :src="item.thumbnail" :alt="item.title" />
                <div class="content-info">
                  <h4>{{ item.title }}</h4>
                  <div class="content-stats">
                    <span>{{ item.views }} vues</span>
                    <span>{{ item.downloads }} téléchargements</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="analytics-card">
            <h3>Recherches populaires</h3>
            <div class="search-terms">
              <div v-for="term in popularSearches" :key="term.term" class="search-item">
                <span class="search-term">{{ term.term }}</span>
                <span class="search-count">{{ term.count }} recherches</span>
              </div>
            </div>
          </div>
          
          <div class="analytics-card">
            <h3>Catégories populaires</h3>
            <div class="category-stats">
              <div v-for="cat in categoryStats" :key="cat.name" class="category-item">
                <div class="category-info">
                  <span class="category-name">{{ cat.name }}</span>
                  <span class="category-percentage">{{ cat.percentage }}%</span>
                </div>
                <div class="category-bar">
                  <div class="category-fill" :style="{ width: cat.percentage + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="analytics-card">
            <h3>Activité par heure</h3>
            <div class="hourly-chart">
              <div v-for="hour in hourlyActivity" :key="hour.hour" class="hour-bar">
                <div class="bar" :style="{ height: hour.activity + '%' }"></div>
                <span class="hour-label">{{ hour.hour }}h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AdminSidebar from '../../components/admin/AdminSidebar.vue'
import StatsCard from '../../components/admin/StatsCard.vue'
import { useMediaStore } from '../../composables/useMediaStore'

const { mediaItems } = useMediaStore()
const selectedPeriod = ref('30d')

const analytics = computed(() => ({
  totalViews: '45,231',
  downloads: '12,456',
  newUsers: '1,234',
  engagementRate: '68%'
}))

const popularContent = computed(() => 
  mediaItems.value
    .map(item => ({
      ...item,
      views: Math.floor(Math.random() * 5000) + 1000
    }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 5)
)

const popularSearches = ref([
  { term: 'portrait AI', count: 1234 },
  { term: 'futuriste', count: 987 },
  { term: 'abstrait', count: 756 },
  { term: 'cyberpunk', count: 654 },
  { term: 'nature', count: 543 }
])

const categoryStats = ref([
  { name: 'Photos', percentage: 45 },
  { name: 'Illustrations', percentage: 35 },
  { name: 'Vidéos', percentage: 20 }
])

const hourlyActivity = ref(
  Array.from({ length: 24 }, (_, i) => ({
    hour: i,
    activity: Math.floor(Math.random() * 80) + 20
  }))
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

.period-select {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background: white;
}

.dark .period-select {
  background: #374151;
  border-color: #4b5563;
  color: white;
}

.stats-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.analytics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.analytics-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.dark .analytics-card {
  background: #1f2937;
}

.analytics-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.dark .analytics-card h3 {
  color: white;
}

.content-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.dark .content-item {
  border-bottom-color: #374151;
}

.content-item:last-child {
  border-bottom: none;
}

.content-item img {
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 0.375rem;
}

.content-info h4 {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.25rem;
}

.dark .content-info h4 {
  color: white;
}

.content-stats {
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  color: #6b7280;
}

.search-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.dark .search-item {
  border-bottom-color: #374151;
}

.search-term {
  font-weight: 500;
  color: #111827;
}

.dark .search-term {
  color: white;
}

.search-count {
  font-size: 0.875rem;
  color: #6b7280;
}

.category-item {
  margin-bottom: 1rem;
}

.category-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.category-name {
  font-weight: 500;
  color: #111827;
}

.dark .category-name {
  color: white;
}

.category-percentage {
  font-size: 0.875rem;
  color: #6b7280;
}

.category-bar {
  height: 8px;
  background: #f3f4f6;
  border-radius: 4px;
  overflow: hidden;
}

.dark .category-bar {
  background: #374151;
}

.category-fill {
  height: 100%;
  background: #3b82f6;
  transition: width 0.3s;
}

.hourly-chart {
  display: flex;
  align-items: end;
  gap: 0.25rem;
  height: 120px;
}

.hour-bar {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.bar {
  width: 100%;
  background: #3b82f6;
  border-radius: 2px 2px 0 0;
  min-height: 4px;
}

.hour-label {
  font-size: 0.625rem;
  color: #6b7280;
}

@media (max-width: 768px) {
  .admin-main {
    margin-left: 0;
    padding: 1rem;
  }
  
  .analytics-grid {
    grid-template-columns: 1fr;
  }
}
</style>