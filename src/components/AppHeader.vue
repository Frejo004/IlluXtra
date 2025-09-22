<template>
  <header class="app-header">
    <div class="header-container">
      <div class="header-content">
        <router-link to="/" class="logo">
          <div class="logo-icon">IX</div>
          <span class="logo-text">IlluXtra</span>
        </router-link>

        <nav class="nav-desktop">
          <router-link 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.to"
            class="nav-link"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <div class="header-actions">
          <input
            v-model="searchQuery"
            @input="updateFilters"
            type="text"
            placeholder="Rechercher..."
            class="search-input"
          />
          <button @click="toggleTheme" class="theme-btn">
            {{ isDark ? '☀️' : '🌙' }}
          </button>
          <button class="login-btn">
            Se connecter
          </button>
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="mobile-btn">
            ☰
          </button>
        </div>
      </div>

      <div v-show="mobileMenuOpen" class="mobile-menu">
        <router-link 
          v-for="item in navigation" 
          :key="item.name"
          :to="item.to"
          @click="mobileMenuOpen = false"
          class="mobile-link"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme'
import { useMediaStore } from '../composables/useMediaStore'

const { isDark, toggleTheme } = useTheme()
const { searchQuery, updateFilters } = useMediaStore()

const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Accueil', to: '/' },
  { name: 'Photos', to: '/photos' },
  { name: 'Vidéos', to: '/videos' },
  { name: 'Illustrations', to: '/illustrations' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contact', to: '/contact' }
]
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-gray-200);
}

.dark .app-header {
  background: rgba(17,24,39,0.8);
  border-bottom-color: var(--color-gray-700);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: transform 0.3s;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.875rem;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--color-gray-900);
}

.dark .logo-text {
  color: white;
}

.nav-desktop {
  display: none;
  align-items: center;
  gap: 2rem;
}

@media (min-width: 768px) {
  .nav-desktop {
    display: flex;
  }
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-gray-700);
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #6366f1;
}

.dark .nav-link {
  color: var(--color-gray-300);
}

.dark .nav-link:hover {
  color: #818cf8;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.search-input {
  display: none;
  padding: 0.5rem 1rem;
  width: 16rem;
  border: 1px solid var(--color-gray-300);
  border-radius: 0.5rem;
  background: white;
  font-size: 0.875rem;
}

@media (min-width: 640px) {
  .search-input {
    display: block;
  }
}

.dark .search-input {
  background: var(--color-gray-800);
  border-color: var(--color-gray-600);
  color: white;
}

.theme-btn, .mobile-btn {
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background: transparent;
  cursor: pointer;
  transition: background 0.3s;
}

.theme-btn:hover, .mobile-btn:hover {
  background: var(--color-gray-100);
}

.dark .theme-btn:hover, .dark .mobile-btn:hover {
  background: var(--color-gray-800);
}

.login-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #6366f1;
  border-radius: 0.5rem;
  background: transparent;
  color: #6366f1;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.login-btn:hover {
  background: #6366f1;
  color: white;
}

.dark .login-btn {
  border-color: #818cf8;
  color: #818cf8;
}

.dark .login-btn:hover {
  background: #818cf8;
  color: white;
}

.mobile-btn {
  display: block;
}

@media (min-width: 768px) {
  .mobile-btn {
    display: none;
  }
}

.mobile-menu {
  display: block;
  padding: 1rem 0;
  border-top: 1px solid var(--color-gray-200);
}

@media (min-width: 768px) {
  .mobile-menu {
    display: none;
  }
}

.dark .mobile-menu {
  border-top-color: var(--color-gray-700);
}

.mobile-link {
  display: block;
  padding: 0.5rem 0.75rem;
  color: var(--color-gray-700);
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.3s;
}

.mobile-link:hover {
  color: #6366f1;
  background: var(--color-gray-50);
}

.dark .mobile-link {
  color: var(--color-gray-300);
}

.dark .mobile-link:hover {
  color: #818cf8;
  background: var(--color-gray-800);
}
</style>