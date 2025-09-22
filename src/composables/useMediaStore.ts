import { ref, reactive } from 'vue'

export interface MediaItem {
  id: string
  title: string
  description: string
  tags: string[]
  category: 'photos' | 'videos' | 'illustrations'
  url: string
  thumbnail: string
  author: string
  downloads: number
  likes: number
  createdAt: string
  size: string
  resolution: string
  format: string
  colors: string[]
}

const mediaItems = ref<MediaItem[]>([
  {
    id: '1',
    title: 'Femme Africaine AI Portrait',
    description: 'Portrait artistique d\'une femme africaine généré par IA avec un style moderne et élégant',
    tags: ['portrait', 'femme', 'africaine', 'ai', 'moderne'],
    category: 'photos',
    url: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    thumbnail: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'AI Creator',
    downloads: 1250,
    likes: 89,
    createdAt: '2024-01-15',
    size: '2.3 MB',
    resolution: '1920x1280',
    format: 'JPG',
    colors: ['#8B4513', '#D2691E', '#F4A460']
  },
  {
    id: '2',
    title: 'Paysage Futuriste',
    description: 'Illustration d\'un paysage futuriste avec des éléments cyberpunk générée par IA',
    tags: ['futuriste', 'cyberpunk', 'paysage', 'ai', 'science-fiction'],
    category: 'illustrations',
    url: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    thumbnail: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Digital Artist',
    downloads: 890,
    likes: 156,
    createdAt: '2024-01-14',
    size: '3.1 MB',
    resolution: '2560x1440',
    format: 'PNG',
    colors: ['#4B0082', '#8A2BE2', '#9932CC']
  },
  {
    id: '3',
    title: 'Animation Abstraite',
    description: 'Vidéo d\'animation abstraite avec des formes géométriques fluides',
    tags: ['animation', 'abstrait', 'géométrique', 'fluide', 'moderne'],
    category: 'videos',
    url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Motion Designer',
    downloads: 567,
    likes: 234,
    createdAt: '2024-01-13',
    size: '45.2 MB',
    resolution: '1920x1080',
    format: 'MP4',
    colors: ['#FF6B35', '#F7931E', '#FFD23F']
  },
  {
    id: '4',
    title: 'Portrait Artistique AI',
    description: 'Portrait créatif généré par intelligence artificielle avec style artistique unique',
    tags: ['portrait', 'artistique', 'ai', 'créatif', 'unique'],
    category: 'photos',
    url: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    thumbnail: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'AI Artist',
    downloads: 2103,
    likes: 445,
    createdAt: '2024-01-12',
    size: '1.8 MB',
    resolution: '1920x1280',
    format: 'JPG',
    colors: ['#2C3E50', '#34495E', '#5D6D7E']
  },
  {
    id: '5',
    title: 'Ville Cyberpunk',
    description: 'Illustration d\'une ville cyberpunk avec néons et architecture futuriste',
    tags: ['cyberpunk', 'ville', 'futuriste', 'néons', 'architecture'],
    category: 'illustrations',
    url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Cyber Artist',
    downloads: 1456,
    likes: 298,
    createdAt: '2024-01-11',
    size: '4.2 MB',
    resolution: '2560x1600',
    format: 'PNG',
    colors: ['#FF0080', '#00FFFF', '#8A2BE2']
  },
  {
    id: '6',
    title: 'Nature Abstraite',
    description: 'Composition abstraite inspirée de la nature avec des couleurs organiques',
    tags: ['nature', 'abstrait', 'organique', 'couleurs', 'composition'],
    category: 'illustrations',
    url: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    thumbnail: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Nature AI',
    downloads: 789,
    likes: 167,
    createdAt: '2024-01-10',
    size: '2.9 MB',
    resolution: '1920x1920',
    format: 'PNG',
    colors: ['#228B22', '#32CD32', '#7CFC00']
  }
])

const searchQuery = ref('')
const selectedCategory = ref('all')
const selectedFilters = reactive({
  colors: [],
  format: 'all',
  resolution: 'all',
  sortBy: 'recent'
})

export function useMediaStore() {
  const filteredItems = ref<MediaItem[]>([])

  const updateFilters = () => {
    filteredItems.value = mediaItems.value.filter(item => {
      // Filtrage par catégorie
      const categoryMatch = selectedCategory.value === 'all' || item.category === selectedCategory.value
      
      // Filtrage par recherche
      const searchMatch = !searchQuery.value || 
        item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()))

      return categoryMatch && searchMatch
    })

    // Tri
    if (selectedFilters.sortBy === 'popular') {
      filteredItems.value.sort((a, b) => b.downloads - a.downloads)
    } else if (selectedFilters.sortBy === 'liked') {
      filteredItems.value.sort((a, b) => b.likes - a.likes)
    } else {
      filteredItems.value.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }
  }

  const getMediaById = (id: string) => {
    return mediaItems.value.find(item => item.id === id)
  }

  const incrementDownloads = (id: string) => {
    const item = mediaItems.value.find(item => item.id === id)
    if (item) {
      item.downloads++
    }
  }

  const toggleLike = (id: string) => {
    const item = mediaItems.value.find(item => item.id === id)
    if (item) {
      item.likes++
    }
  }

  // Initialisation
  updateFilters()

  return {
    mediaItems,
    filteredItems,
    searchQuery,
    selectedCategory,
    selectedFilters,
    updateFilters,
    getMediaById,
    incrementDownloads,
    toggleLike
  }
}