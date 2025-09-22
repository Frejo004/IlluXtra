<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Blog IlluXtra
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Actualités, conseils et tendances de l'IA générative
        </p>
      </div>
    </div>

    <!-- Blog Posts -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="space-y-12">
        <article 
          v-for="post in blogPosts" 
          :key="post.id"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div class="md:flex">
            <div class="md:w-1/3">
              <img 
                :src="post.image" 
                :alt="post.title"
                class="w-full h-48 md:h-full object-cover"
              />
            </div>
            <div class="md:w-2/3 p-6">
              <div class="flex items-center space-x-2 mb-3">
                <span class="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400 rounded-full">
                  {{ post.category }}
                </span>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  {{ formatDate(post.date) }}
                </span>
              </div>
              
              <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {{ post.title }}
              </h2>
              
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                {{ post.excerpt }}
              </p>
              
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span class="text-white text-sm font-medium">{{ post.author.charAt(0) }}</span>
                  </div>
                  <span class="text-sm text-gray-700 dark:text-gray-300">{{ post.author }}</span>
                </div>
                
                <a 
                  href="#" 
                  class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 font-medium text-sm"
                >
                  Lire la suite →
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Load More -->
      <div class="text-center mt-12">
        <button class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
          Charger plus d'articles
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  image: string
}

const blogPosts = ref<BlogPost[]>([
  {
    id: '1',
    title: 'L\'avenir de la création visuelle avec l\'IA',
    excerpt: 'Découvrez comment l\'intelligence artificielle révolutionne le monde de la création graphique et les opportunités qu\'elle offre aux designers.',
    category: 'Tendances',
    author: 'Marie Dupont',
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'Comment optimiser ses créations IA pour le web',
    excerpt: 'Apprenez les meilleures pratiques pour adapter vos images générées par IA aux besoins du web moderne.',
    category: 'Tutoriels',
    author: 'Jean Martin',
    date: '2024-01-12',
    image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Les nouvelles fonctionnalités d\'IlluXtra',
    excerpt: 'Découvrez les dernières améliorations apportées à notre plateforme pour une meilleure expérience utilisateur.',
    category: 'Nouveautés',
    author: 'Sophie Chen',
    date: '2024-01-10',
    image: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'Guide complet des prompts pour l\'IA générative',
    excerpt: 'Maîtrisez l\'art de créer des prompts efficaces pour obtenir des résultats exceptionnels avec les outils d\'IA.',
    category: 'Guides',
    author: 'Alex Rivera',
    date: '2024-01-08',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
])

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>