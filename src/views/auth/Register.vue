<template>
  <div class="auth-page">
    <div class="auth-container">
      <div class="auth-form">
        <div class="form-content">
          <div class="brand">
            <h1>FREEPIK</h1>
          </div>

          <div class="form-header">
            <h2>Create an account</h2>
          </div>

          <div class="auth-buttons">
            <button class="auth-btn google">
              <span>🔍</span>
              Continue with Google
            </button>
            <button class="auth-btn apple">
              <span>🍎</span>
              Continue with Apple
            </button>
            <button class="auth-btn email">
              <span>✉️</span>
              Continue with email
            </button>
          </div>

          <div class="form-footer">
            <label class="checkbox-label">
              <input type="checkbox" />
              I do not wish to receive news and promotions from Freepik by email.
            </label>
            
            <p class="terms">
              By continuing, you agree to Freepik Terms of Use and Privacy Policy.
            </p>
            
            <p class="switch-form">
              Already have an account?
              <router-link to="/login" class="link-btn">Log in</router-link>
            </p>
            
            <button class="cookies-btn">Cookies settings</button>
          </div>
        </div>
      </div>

      <div class="auth-image">
        <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Creative Art" />
        <div class="image-overlay">
          <p>Image generated with Freepik Pikaso</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  min-height: 100vh;
  background: white;
}

.dark .auth-page {
  background: #0a0a0a;
}

.auth-container {
  display: flex;
  min-height: 100vh;
}

.auth-image {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.auth-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: white;
  font-size: 0.875rem;
}

.auth-form {
  flex: 0 0 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.form-content {
  width: 100%;
  max-width: 320px;
}

.brand {
  text-align: left;
  margin-bottom: 3rem;
}

.brand h1 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #6366f1;
}

.form-header {
  margin-bottom: 2rem;
}

.form-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
}

.dark .form-header h2 {
  color: white;
}

.auth-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.auth-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: white;
  color: #374151;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s;
}

.dark .auth-btn {
  background: #1f2937;
  border-color: #374151;
  color: #d1d5db;
}

.auth-btn:hover {
  background: #f9fafb;
}

.dark .auth-btn:hover {
  background: #374151;
}

.form-footer {
  font-size: 0.875rem;
  color: #6b7280;
}

.dark .form-footer {
  color: #9ca3af;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

.checkbox-label input {
  margin-top: 0.125rem;
}

.terms {
  margin-bottom: 1rem;
  line-height: 1.5;
}

.switch-form {
  margin-bottom: 1rem;
  text-align: center;
}

.link-btn {
  color: #6366f1;
  text-decoration: none;
}

.link-btn:hover {
  text-decoration: underline;
}

.cookies-btn {
  background: none;
  border: none;
  color: #6366f1;
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.875rem;
  display: block;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .auth-container {
    flex-direction: column;
  }
  
  .auth-image {
    height: 40vh;
    order: 1;
  }
  
  .auth-form {
    order: 2;
  }
  
  .brand {
    text-align: center;
  }
}
</style>