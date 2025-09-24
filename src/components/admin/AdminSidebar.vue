<template>
  <aside class="admin-sidebar">
    <div class="sidebar-header">
      <h2>Admin Panel</h2>
    </div>
    
    <nav class="sidebar-nav">
      <router-link 
        v-for="item in menuItems" 
        :key="item.path"
        :to="item.path"
        class="nav-item"
        :class="{ active: $route.path === item.path }"
      >
        <Icon :icon="item.icon" class="nav-icon" />
        <span class="nav-text">{{ item.name }}</span>
      </router-link>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const menuItems = [
  { name: 'Dashboard', path: '/admin', icon: 'system-uicons:dashboard' },
  { name: 'Médias', path: '/admin/media', icon: 'system-uicons:picture' },
  { name: 'Utilisateurs', path: '/admin/users', icon: 'system-uicons:users' },
  { name: 'Analytics', path: '/admin/analytics', icon: 'system-uicons:graph-bar' },
  { name: 'Paramètres', path: '/admin/settings', icon: 'system-uicons:cog' }
]
</script>

<style scoped>
.admin-sidebar {
  width: 250px;
  background: white;
  border-right: 1px solid #e5e7eb;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 40;
}

.dark .admin-sidebar {
  background: #1f2937;
  border-right-color: #374151;
}

.sidebar-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.dark .sidebar-header {
  border-bottom-color: #374151;
}

.sidebar-header h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
}

.dark .sidebar-header h2 {
  color: white;
}

.sidebar-nav {
  padding: 1rem 0;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  color: #6b7280;
  text-decoration: none;
  transition: all 0.2s;
}

.nav-item:hover {
  background: #f3f4f6;
  color: #111827;
}

.dark .nav-item:hover {
  background: #374151;
  color: white;
}

.nav-item.active {
  background: #3b82f6;
  color: white;
}

.nav-icon {
  font-size: 1.25rem;
}

.nav-text {
  font-weight: 500;
}
</style>