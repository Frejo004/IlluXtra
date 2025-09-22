<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Creative work, reimagined</h1>
        <p>Générez, modifiez et développez vos idées avec l'IA</p>
        
        <div class="search-container">
          <input
            v-model="searchQuery"
            @keyup.enter="performSearch"
            type="text"
            placeholder="Recherchez des images, vidéos, illustrations..."
            class="search-input"
          />
          <button @click="performSearch" class="search-btn">Rechercher</button>
        </div>

        <div class="hero-images">
          <div class="image-grid">
            <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Portrait" class="hero-img img-1" />
            <img src="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Art" class="hero-img img-2" />
            <img src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Creative" class="hero-img img-3" />
            <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Digital" class="hero-img img-4" />
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Section -->
    <section class="trust-section">
      <p>You bring the vision. We help you go further. <strong>Join 700,000+ creative teams.</strong></p>
      <div class="trust-logos">
        <span>Google</span>
        <span>Disney</span>
        <span>Nike</span>
        <span>Coca-Cola</span>
        <span>Netflix</span>
      </div>
    </section>

    <!-- Featured Grid -->
    <section class="featured-grid">
      <div class="grid-container">
        <h2>The features you need, the simplicity you want</h2>
        <div class="feature-grid">
          <div class="feature-card large">
            <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" alt="AI Portrait" />
            <div class="card-content">
              <h3>AI Portraits</h3>
              <p>Créez des portraits uniques</p>
            </div>
          </div>
          <div class="feature-card">
            <img src="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Abstract Art" />
            <div class="card-content">
              <h3>Art Abstrait</h3>
              <p>Explorez l'art génératif</p>
            </div>
          </div>
          <div class="feature-card">
            <img src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Creative" />
            <div class="card-content">
              <h3>Créations</h3>
              <p>Designs innovants</p>
            </div>
          </div>
          <div class="feature-card wide">
            <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Digital Art" />
            <div class="card-content">
              <h3>Art Numérique</h3>
              <p>Créations futuristes</p>
            </div>
          </div>
          <div class="feature-card">
            <img src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Nature" />
            <div class="card-content">
              <h3>Nature</h3>
              <p>Inspirations organiques</p>
            </div>
          </div>
          <div class="feature-card">
            <img src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Concept" />
            <div class="card-content">
              <h3>Concepts</h3>
              <p>Idées visuelles</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Editor Preview Section -->
    <section class="editor-preview">
      <div class="editor-container">
        <h2>All the big Canva moves—and, frankly, recently acquired by Freepik</h2>
        <div class="editor-showcase">
          <div class="editor-interface">
            <div class="editor-sidebar">
              <div class="tool-item active">Templates</div>
              <div class="tool-item">Elements</div>
              <div class="tool-item">Text</div>
              <div class="tool-item">Photos</div>
              <div class="tool-item">Videos</div>
            </div>
            <div class="editor-canvas">
              <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Editor Preview" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Creative Suite -->
    <section class="ai-suite">
      <div class="suite-container">
        <h2>AI in a single creative suite</h2>
        <div class="ai-tools-grid">
          <div class="ai-tool">
            <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300" alt="AI Portrait" />
            <h3>AI Portrait Generator</h3>
            <p>Create stunning portraits with AI</p>
          </div>
          <div class="ai-tool">
            <img src="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Background Remover" />
            <h3>Background Remover</h3>
            <p>Remove backgrounds instantly</p>
          </div>
          <div class="ai-tool">
            <img src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Image Enhancer" />
            <h3>Image Enhancer</h3>
            <p>Enhance image quality with AI</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Workflow -->
    <section class="professional-workflow">
      <div class="workflow-container">
        <h2>Boost your professional workflow and productivity</h2>
        <div class="workflow-grid">
          <div class="workflow-item">
            <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Branding" />
            <div class="workflow-content">
              <h3>Branding</h3>
              <p>Create consistent brand identity</p>
            </div>
          </div>
          <div class="workflow-item">
            <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Marketing" />
            <div class="workflow-content">
              <h3>Marketing</h3>
              <p>Design compelling campaigns</p>
            </div>
          </div>
          <div class="workflow-item">
            <img src="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Social Media" />
            <div class="workflow-content">
              <h3>Social Media</h3>
              <p>Create engaging content</p>
            </div>
          </div>
          <div class="workflow-item">
            <img src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Presentations" />
            <div class="workflow-content">
              <h3>Presentations</h3>
              <p>Professional slide decks</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Made with Freepik -->
    <section class="made-with-freepik">
      <div class="freepik-container">
        <h2>Made with Freepik—and work, real results</h2>
        <div class="freepik-gallery">
          <div class="gallery-item">
            <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Creative Work 1" />
          </div>
          <div class="gallery-item">
            <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Creative Work 2" />
          </div>
          <div class="gallery-item">
            <img src="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Creative Work 3" />
          </div>
          <div class="gallery-item">
            <img src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Creative Work 4" />
          </div>
          <div class="gallery-item">
            <img src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Creative Work 5" />
          </div>
          <div class="gallery-item">
            <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Creative Work 6" />
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="faq-container">
        <h2>Frequently asked questions</h2>
        <div class="faq-list">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <button @click="toggleFaq(index)" class="faq-question">
              {{ faq.question }}
              <span class="faq-icon">{{ openFaq === index ? '−' : '+' }}</span>
            </button>
            <div v-show="openFaq === index" class="faq-answer">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Plans Section -->
    <section class="plans-section">
      <div class="plans-container">
        <h2>Plans that cover your needs</h2>
        <div class="plans-grid">
          <div class="plan-card">
            <h3>Free</h3>
            <div class="plan-price">$0</div>
            <ul class="plan-features">
              <li>5 downloads per day</li>
              <li>Basic templates</li>
              <li>Standard quality</li>
            </ul>
            <button class="plan-btn">Get Started</button>
          </div>
          <div class="plan-card featured">
            <h3>Premium</h3>
            <div class="plan-price">$9.99<span>/month</span></div>
            <ul class="plan-features">
              <li>Unlimited downloads</li>
              <li>Premium templates</li>
              <li>High quality exports</li>
              <li>AI tools access</li>
            </ul>
            <button class="plan-btn primary">Start Free Trial</button>
          </div>
          <div class="plan-card">
            <h3>Teams</h3>
            <div class="plan-price">$19.99<span>/month</span></div>
            <ul class="plan-features">
              <li>Everything in Premium</li>
              <li>Team collaboration</li>
              <li>Brand kit</li>
              <li>Priority support</li>
            </ul>
            <button class="plan-btn">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { MagnifyingGlassIcon, ArrowRightIcon, SparklesIcon, CloudArrowDownIcon } from '@heroicons/vue/24/outline'
import { useMediaStore } from '../composables/useMediaStore'
import { useTheme } from '../composables/useTheme'
import MediaCard from '../components/MediaCard.vue'

const router = useRouter()
const { mediaItems, searchQuery, updateFilters } = useMediaStore()
const { isDark } = useTheme()

const openFaq = ref<number | null>(null)

const categories = [
  { name: 'Photos', to: '/photos' },
  { name: 'Vidéos', to: '/videos' },
  { name: 'Illustrations', to: '/illustrations' }
]

const faqs = [
  {
    question: "What is IlluXtra and how does it work?",
    answer: "IlluXtra is an AI-powered creative platform that helps you generate, edit, and enhance visual content using advanced artificial intelligence."
  },
  {
    question: "Can I use IlluXtra for commercial projects?",
    answer: "Yes, with our Premium and Teams plans, you can use IlluXtra creations for commercial purposes with full licensing rights."
  },
  {
    question: "How does the AI image generation work?",
    answer: "Our AI uses advanced machine learning models to create unique images based on your text descriptions and creative inputs."
  },
  {
    question: "What file formats are supported?",
    answer: "We support all major formats including PNG, JPG, SVG, PDF, and more for both input and output."
  }
]

const featuredMedia = computed(() => {
  return mediaItems.value
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 6)
})

const performSearch = () => {
  updateFilters()
  if (searchQuery.value) {
    router.push('/photos')
  }
}

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}

onMounted(() => {
  updateFilters()
})
</script>

<style scoped>
.home-page {
  background: white;
  color: #333;
  min-height: 100vh;
  transition: all 0.3s ease;
}

.dark .home-page {
  background: #0a0a0a;
  color: white;
}

.hero {
  padding: 4rem 1rem 6rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff, #888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: 1.25rem;
  color: #888;
  margin-bottom: 3rem;
}

.search-container {
  max-width: 600px;
  margin: 0 auto 4rem;
  position: relative;
}

.search-input {
  width: 100%;
  padding: 1rem 8rem 1rem 1.5rem;
  border-radius: 50px;
  border: 1px solid #333;
  background: #1a1a1a;
  color: white;
  font-size: 1rem;
}

.search-input::placeholder {
  color: #666;
}

.search-btn {
  position: absolute;
  right: 4px;
  top: 4px;
  bottom: 4px;
  padding: 0 2rem;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
}

.hero-images {
  position: relative;
  height: 400px;
  margin-top: 2rem;
}

.image-grid {
  position: relative;
  height: 100%;
}

.hero-img {
  position: absolute;
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;
  object-fit: cover;
}

.hero-img:hover {
  transform: scale(1.05);
}

.img-1 {
  width: 200px;
  height: 250px;
  top: 20px;
  left: 10%;
}

.img-2 {
  width: 180px;
  height: 220px;
  top: 50px;
  right: 15%;
}

.img-3 {
  width: 160px;
  height: 200px;
  bottom: 40px;
  left: 25%;
}

.img-4 {
  width: 190px;
  height: 240px;
  top: 10px;
  right: 35%;
}

.trust-section {
  padding: 3rem 1rem;
  text-align: center;
  background: #111;
}

.trust-section p {
  color: #888;
  margin-bottom: 2rem;
}

.trust-logos {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.trust-logos span {
  color: #666;
  font-weight: 500;
  font-size: 1.1rem;
}

.featured-grid {
  padding: 4rem 1rem;
  background: #0a0a0a;
}

.grid-container {
  max-width: 1200px;
  margin: 0 auto;
}

.grid-container h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: white;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  background: #1a1a1a;
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card.large {
  grid-column: span 2;
}

.feature-card.wide {
  grid-column: span 2;
}

.feature-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.card-content h3 {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card-content p {
  color: #888;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero-images {
    height: 300px;
  }
  
  .hero-img {
    width: 120px !important;
    height: 150px !important;
  }
  
  .feature-card.large,
  .feature-card.wide {
    grid-column: span 1;
  }
}

/* Editor Preview Section */
.editor-preview {
  padding: 4rem 1rem;
  background: #f8f9fa;
}

.dark .editor-preview {
  background: #111;
}

.editor-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.editor-container h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #333;
}

.dark .editor-container h2 {
  color: white;
}

.editor-showcase {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.dark .editor-showcase {
  background: #1a1a1a;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.editor-interface {
  display: flex;
  height: 400px;
}

.editor-sidebar {
  width: 200px;
  background: #f8f9fa;
  padding: 1rem;
  border-right: 1px solid #e9ecef;
}

.dark .editor-sidebar {
  background: #222;
  border-right: 1px solid #333;
}

.tool-item {
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #666;
}

.dark .tool-item {
  color: #888;
}

.tool-item.active {
  background: #6366f1;
  color: white;
}

.editor-canvas {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.editor-canvas img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* AI Suite Section */
.ai-suite {
  padding: 4rem 1rem;
  background: white;
}

.dark .ai-suite {
  background: #0a0a0a;
}

.suite-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.suite-container h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #333;
}

.dark .suite-container h2 {
  color: white;
}

.ai-tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.ai-tool {
  background: #f8f9fa;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.dark .ai-tool {
  background: #1a1a1a;
}

.ai-tool:hover {
  transform: translateY(-5px);
}

.ai-tool img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.ai-tool h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.dark .ai-tool h3 {
  color: white;
}

.ai-tool p {
  color: #666;
}

.dark .ai-tool p {
  color: #888;
}

/* Professional Workflow Section */
.professional-workflow {
  padding: 4rem 1rem;
  background: #f8f9fa;
}

.dark .professional-workflow {
  background: #111;
}

.workflow-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.workflow-container h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #333;
}

.dark .workflow-container h2 {
  color: white;
}

.workflow-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.workflow-item {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.dark .workflow-item {
  background: #1a1a1a;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

.workflow-item:hover {
  transform: translateY(-5px);
}

.workflow-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.workflow-content {
  padding: 1.5rem;
}

.workflow-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.dark .workflow-content h3 {
  color: white;
}

.workflow-content p {
  color: #666;
}

.dark .workflow-content p {
  color: #888;
}

/* Made with Freepik Section */
.made-with-freepik {
  padding: 4rem 1rem;
  background: white;
}

.dark .made-with-freepik {
  background: #0a0a0a;
}

.freepik-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.freepik-container h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #333;
}

.dark .freepik-container h2 {
  color: white;
}

.freepik-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.gallery-item {
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
}

.gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

/* FAQ Section */
.faq-section {
  padding: 4rem 1rem;
  background: #f8f9fa;
}

.dark .faq-section {
  background: #111;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-container h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #333;
}

.dark .faq-container h2 {
  color: white;
}

.faq-item {
  margin-bottom: 1rem;
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
}

.dark .faq-item {
  background: #1a1a1a;
}

.faq-question {
  width: 100%;
  padding: 1.5rem;
  background: none;
  border: none;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
}

.dark .faq-question {
  color: white;
}

.faq-icon {
  font-size: 1.5rem;
  font-weight: 300;
}

.faq-answer {
  padding: 0 1.5rem 1.5rem;
  color: #666;
  line-height: 1.6;
}

.dark .faq-answer {
  color: #888;
}

/* Plans Section */
.plans-section {
  padding: 4rem 1rem;
  background: white;
}

.dark .plans-section {
  background: #0a0a0a;
}

.plans-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.plans-container h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #333;
}

.dark .plans-container h2 {
  color: white;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.plan-card {
  background: #f8f9fa;
  border-radius: 1rem;
  padding: 2rem;
  position: relative;
  border: 2px solid transparent;
}

.dark .plan-card {
  background: #1a1a1a;
}

.plan-card.featured {
  border-color: #6366f1;
  transform: scale(1.05);
}

.plan-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
}

.dark .plan-card h3 {
  color: white;
}

.plan-price {
  font-size: 3rem;
  font-weight: 700;
  color: #6366f1;
  margin-bottom: 1.5rem;
}

.plan-price span {
  font-size: 1rem;
  color: #666;
}

.dark .plan-price span {
  color: #888;
}

.plan-features {
  list-style: none;
  margin-bottom: 2rem;
}

.plan-features li {
  padding: 0.5rem 0;
  color: #666;
}

.dark .plan-features li {
  color: #888;
}

.plan-btn {
  width: 100%;
  padding: 1rem;
  border: 2px solid #6366f1;
  background: transparent;
  color: #6366f1;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.plan-btn.primary {
  background: #6366f1;
  color: white;
}

.plan-btn:hover {
  background: #6366f1;
  color: white;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero-images {
    height: 300px;
  }
  
  .hero-img {
    width: 120px !important;
    height: 150px !important;
  }
  
  .feature-card.large,
  .feature-card.wide {
    grid-column: span 1;
  }
  
  .trust-logos {
    gap: 1.5rem;
  }
  
  .trust-logos span {
    font-size: 1rem;
  }
  
  .editor-interface {
    flex-direction: column;
    height: auto;
  }
  
  .editor-sidebar {
    width: 100%;
    display: flex;
    overflow-x: auto;
    border-right: none;
    border-bottom: 1px solid #e9ecef;
  }
  
  .dark .editor-sidebar {
    border-bottom: 1px solid #333;
  }
  
  .tool-item {
    white-space: nowrap;
    margin-right: 0.5rem;
  }
  
  .plan-card.featured {
    transform: none;
  }
}
</style>