<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2 group">
          <div class="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
            <span class="text-white font-bold text-sm">IX</span>
          </div>
          <span class="text-xl font-bold text-gray-900 dark:text-white">IlluXtra</span>
        </router-link>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.to"
            class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            :class="{ 'text-indigo-600 dark:text-indigo-400': $route.path === item.to }"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <!-- Actions -->
        <div class="flex items-center space-x-4">
          <!-- Search -->
          <div class="hidden sm:block relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" />
            </div>
            <input
              v-model="searchQuery"
              @input="updateFilters"
              type="text"
              placeholder="Rechercher..."
              class="pl-10 pr-4 py-2 w-64 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <SunIcon v-if="isDark" class="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <MoonIcon v-else class="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>

          <!-- Mobile menu button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Bars3Icon class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-show="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
        <div class="space-y-2">
          <router-link 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.to"
            @click="mobileMenuOpen = false"
            class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MagnifyingGlassIcon, SunIcon, MoonIcon, Bars3Icon } from '@heroicons/vue/24/outline'
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