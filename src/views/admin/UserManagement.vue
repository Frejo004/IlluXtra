<template>
  <div class="admin-layout">
    <AdminSidebar />
    
    <main class="admin-main">
      <div class="admin-header">
        <h1>Gestion des Utilisateurs</h1>
        <button class="btn-primary" @click="showAddModal = true">+ Nouvel utilisateur</button>
      </div>
      
      <div class="admin-content">
        <div class="filters-bar">
          <select v-model="selectedRole" class="filter-select">
            <option value="all">Tous les rôles</option>
            <option value="admin">Admin</option>
            <option value="user">Utilisateur</option>
            <option value="moderator">Modérateur</option>
          </select>
          
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Rechercher un utilisateur..." 
            class="search-input"
          />
        </div>
        
        <div class="users-table">
          <div class="table-header">
            <div class="col-avatar">Avatar</div>
            <div class="col-name">Nom</div>
            <div class="col-email">Email</div>
            <div class="col-role">Rôle</div>
            <div class="col-status">Statut</div>
            <div class="col-actions">Actions</div>
          </div>
          
          <div v-for="user in filteredUsers" :key="user.id" class="table-row">
            <div class="col-avatar">
              <div class="avatar">{{ user.name.charAt(0) }}</div>
            </div>
            <div class="col-name">
              <h4>{{ user.name }}</h4>
              <p>Inscrit le {{ formatDate(user.createdAt) }}</p>
            </div>
            <div class="col-email">{{ user.email }}</div>
            <div class="col-role">
              <span class="role-badge" :class="user.role">{{ formatRole(user.role) }}</span>
            </div>
            <div class="col-status">
              <span class="status-badge" :class="user.status">{{ formatStatus(user.status) }}</span>
            </div>
            <div class="col-actions">
              <button class="action-btn edit" @click="editUser(user)">✏️</button>
              <button class="action-btn ban" @click="toggleUserStatus(user)">🚫</button>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <AddModal 
      :isOpen="showAddModal"
      title="Nouvel utilisateur"
      :fields="userFields"
      @close="showAddModal = false"
      @submit="addUser"
    />
    
    <EditModal 
      :isOpen="showEditModal"
      title="Modifier l'utilisateur"
      :fields="editUserFields"
      :data="editingUser"
      @close="showEditModal = false"
      @submit="updateUser"
    />
    
    <ConfirmModal 
      :isOpen="isOpen"
      :title="confirmOptions.title"
      :message="confirmOptions.message"
      :type="confirmOptions.type"
      :confirmText="confirmOptions.confirmText"
      :cancelText="confirmOptions.cancelText"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AdminSidebar from '../../components/admin/AdminSidebar.vue'
import ConfirmModal from '../../components/admin/ConfirmModal.vue'
import AddModal from '../../components/admin/AddModal.vue'
import EditModal from '../../components/admin/EditModal.vue'
import { useConfirm } from '../../composables/useConfirm'

interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user' | 'moderator'
  status: 'active' | 'banned' | 'pending'
  createdAt: string
}

const users = ref<User[]>([
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active', createdAt: '2024-01-15' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'active', createdAt: '2024-01-14' },
  { id: '3', name: 'Bob Wilson', email: 'bob@example.com', role: 'moderator', status: 'active', createdAt: '2024-01-13' },
  { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'user', status: 'banned', createdAt: '2024-01-12' }
])

const selectedRole = ref('all')
const searchQuery = ref('')
const showAddModal = ref(false)
const showEditModal = ref(false)
const editingUser = ref<User | null>(null)

const userFields = [
  { name: 'name', label: 'Nom complet', type: 'text' as const, required: true, placeholder: 'John Doe' },
  { name: 'email', label: 'Email', type: 'email' as const, required: true, placeholder: 'john@example.com' },
  { name: 'role', label: 'Rôle', type: 'select' as const, required: true, placeholder: 'Sélectionner un rôle', options: [
    { value: 'user', label: 'Utilisateur' },
    { value: 'moderator', label: 'Modérateur' },
    { value: 'admin', label: 'Administrateur' }
  ]}
]

const editUserFields = [
  { name: 'name', label: 'Nom complet', type: 'text' as const, required: true },
  { name: 'email', label: 'Email', type: 'email' as const, required: true },
  { name: 'role', label: 'Rôle', type: 'select' as const, required: true, options: [
    { value: 'user', label: 'Utilisateur' },
    { value: 'moderator', label: 'Modérateur' },
    { value: 'admin', label: 'Administrateur' }
  ]}
]

const filteredUsers = computed(() => {
  let filtered = users.value

  if (selectedRole.value !== 'all') {
    filtered = filtered.filter(user => user.role === selectedRole.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(user => 
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    )
  }

  return filtered
})

const formatRole = (role: string) => {
  const roles = {
    admin: 'Administrateur',
    user: 'Utilisateur',
    moderator: 'Modérateur'
  }
  return roles[role as keyof typeof roles] || role
}

const formatStatus = (status: string) => {
  const statuses = {
    active: 'Actif',
    banned: 'Banni',
    pending: 'En attente'
  }
  return statuses[status as keyof typeof statuses] || status
}

const { isOpen, confirmOptions, confirm, handleConfirm, handleCancel } = useConfirm()

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('fr-FR')
}

const addUser = (data: any) => {
  const newUser: User = {
    id: Date.now().toString(),
    name: data.name,
    email: data.email,
    role: data.role,
    status: 'active',
    createdAt: new Date().toISOString().split('T')[0]
  }
  users.value.push(newUser)
  showAddModal.value = false
}

const editUser = (user: User) => {
  editingUser.value = { ...user }
  showEditModal.value = true
}

const updateUser = (data: any) => {
  if (editingUser.value) {
    const index = users.value.findIndex(u => u.id === editingUser.value!.id)
    if (index !== -1) {
      users.value[index] = {
        ...users.value[index],
        name: data.name,
        email: data.email,
        role: data.role
      }
    }
  }
  showEditModal.value = false
}

const toggleUserStatus = async (user: User) => {
  const action = user.status === 'active' ? 'bannir' : 'débannir'
  const confirmed = await confirm({
    title: `${action.charAt(0).toUpperCase() + action.slice(1)} l'utilisateur`,
    message: `Êtes-vous sûr de vouloir ${action} ${user.name} ?`,
    type: user.status === 'active' ? 'danger' : 'warning',
    confirmText: action.charAt(0).toUpperCase() + action.slice(1),
    cancelText: 'Annuler'
  })
  
  if (confirmed) {
    user.status = user.status === 'active' ? 'banned' : 'active'
  }
}
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

.btn-primary {
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
}

.filters-bar {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.filter-select, .search-input {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background: white;
}

.dark .filter-select, .dark .search-input {
  background: #374151;
  border-color: #4b5563;
  color: white;
}

.search-input {
  flex: 1;
  max-width: 300px;
}

.users-table {
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.dark .users-table {
  background: #1f2937;
}

.table-header, .table-row {
  display: grid;
  grid-template-columns: 60px 1fr 200px 120px 100px 100px;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
}

.table-header {
  background: #f9fafb;
  font-weight: 600;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
}

.dark .table-header {
  background: #374151;
  color: #d1d5db;
}

.table-row:hover {
  background: #f9fafb;
}

.dark .table-row:hover {
  background: #374151;
}

.avatar {
  width: 40px;
  height: 40px;
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.col-name h4 {
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
}

.dark .col-name h4 {
  color: white;
}

.col-name p {
  font-size: 0.75rem;
  color: #6b7280;
}

.role-badge, .status-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.role-badge.admin {
  background: #fef3c7;
  color: #92400e;
}

.role-badge.user {
  background: #dbeafe;
  color: #1e40af;
}

.role-badge.moderator {
  background: #d1fae5;
  color: #065f46;
}

.status-badge.active {
  background: #d1fae5;
  color: #065f46;
}

.status-badge.banned {
  background: #fee2e2;
  color: #991b1b;
}

.status-badge.pending {
  background: #fef3c7;
  color: #92400e;
}

.col-actions {
  display: flex;
  gap: 0.5rem;
}

.action-btn {
  padding: 0.25rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
}

.action-btn.edit {
  background: #fef3c7;
}

.action-btn.ban {
  background: #fee2e2;
}

@media (max-width: 768px) {
  .admin-main {
    margin-left: 0;
    padding: 1rem;
  }
}
</style>