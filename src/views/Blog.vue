<template>
  <div class="blog-page">
    <div class="blog-header">
      <h1>Blog IlluXtra</h1>
      <p>Actualités, conseils et tendances de l'IA générative</p>
    </div>

    <div class="blog-container">
      <article v-for="post in blogPosts" :key="post.id" class="blog-post">
        <img :src="post.image" :alt="post.title" class="post-image" />
        <div class="post-content">
          <div class="post-meta">
            <span class="post-category">{{ post.category }}</span>
            <span class="post-date">{{ formatDate(post.date) }}</span>
          </div>
          <h2>{{ post.title }}</h2>
          <p>{{ post.excerpt }}</p>
          <div class="post-footer">
            <div class="post-author">
              <div class="author-avatar">{{ post.author.charAt(0) }}</div>
              <span>{{ post.author }}</span>
            </div>
            <a href="#" class="read-more">Lire la suite →</a>
          </div>
        </div>
      </article>
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
    excerpt: 'Découvrez comment l\'intelligence artificielle révolutionne le monde de la création graphique.',
    category: 'Tendances',
    author: 'Marie Dupont',
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'Comment optimiser ses créations IA pour le web',
    excerpt: 'Apprenez les meilleures pratiques pour adapter vos images générées par IA.',
    category: 'Tutoriels',
    author: 'Jean Martin',
    date: '2024-01-12',
    image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800'
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

<style scoped>
.blog-page {
  min-height: 100vh;
  background: var(--color-gray-50);
}

.dark .blog-page {
  background: var(--color-gray-900);
}

.blog-header {
  background: white;
  padding: 4rem 1rem;
  text-align: center;
}

.dark .blog-header {
  background: var(--color-gray-800);
}

.blog-header h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--color-gray-900);
}

.dark .blog-header h1 {
  color: white;
}

.blog-header p {
  font-size: 1.125rem;
  color: var(--color-gray-600);
}

.dark .blog-header p {
  color: var(--color-gray-400);
}

.blog-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 1rem;
}

.blog-post {
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: var(--shadow);
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .blog-post {
    flex-direction: row;
  }
}

.dark .blog-post {
  background: var(--color-gray-800);
}

.post-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

@media (min-width: 768px) {
  .post-image {
    width: 300px;
    height: auto;
  }
}

.post-content {
  padding: 1.5rem;
  flex: 1;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.post-category {
  padding: 0.25rem 0.75rem;
  background: #eef2ff;
  color: #6366f1;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 500;
}

.dark .post-category {
  background: rgba(99, 102, 241, 0.2);
  color: #818cf8;
}

.post-date {
  font-size: 0.875rem;
  color: var(--color-gray-500);
}

.dark .post-date {
  color: var(--color-gray-400);
}

.post-content h2 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  color: var(--color-gray-900);
}

.dark .post-content h2 {
  color: white;
}

.post-content p {
  color: var(--color-gray-600);
  margin-bottom: 1rem;
}

.dark .post-content p {
  color: var(--color-gray-400);
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-author {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.author-avatar {
  width: 2rem;
  height: 2rem;
  background: #6366f1;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 0.875rem;
}

.post-author span {
  font-size: 0.875rem;
  color: var(--color-gray-700);
}

.dark .post-author span {
  color: var(--color-gray-300);
}

.read-more {
  color: #6366f1;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
}

.dark .read-more {
  color: #818cf8;
}

.read-more:hover {
  color: #4f46e5;
}
</style>