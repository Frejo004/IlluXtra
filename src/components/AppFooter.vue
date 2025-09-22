<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="logo-icon">IX</div>
            <span class="logo-text">IlluXtra</span>
          </div>
          <p class="footer-description">
            La plateforme de référence pour les médias générés par IA. Découvrez des milliers d'images, vidéos et illustrations de qualité professionnelle.
          </p>
          <div class="social-links">
            <a href="#">📘</a>
            <a href="#">🐦</a>
            <a href="#">📷</a>
          </div>
        </div>

        <div class="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/photos">Photos</router-link></li>
            <li><router-link to="/videos">Vidéos</router-link></li>
            <li><router-link to="/illustrations">Illustrations</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Support</h3>
          <ul>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/legal">Mentions légales</router-link></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 IlluXtra. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: var(--color-gray-900);
  color: white;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr;
  }
}

.footer-brand {
  grid-column: span 1;
}

@media (min-width: 768px) {
  .footer-brand {
    grid-column: span 1;
  }
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
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
}

.footer-description {
  color: var(--color-gray-400);
  margin-bottom: 1rem;
  max-width: 400px;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: var(--color-gray-400);
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-links a:hover {
  color: white;
}

.footer-section h3 {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: var(--color-gray-400);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: white;
}

.footer-bottom {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-gray-800);
  text-align: center;
  color: var(--color-gray-400);
}
</style>