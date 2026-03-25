// Global App state and logic
const BioIntellect = {
  // Current user
  currentUser: null,
  
  // Available variants
  variants: [],
  
  init() {
    this.currentUser = localStorage.getItem('bio_user_name');
    this.variants = Object.keys(window.testVariants || {});
  },

  // Save student name
  login(name) {
    if (!name.trim()) return false;
    localStorage.setItem('bio_user_name', name.trim());
    this.currentUser = name.trim();
    return true;
  },

  logout() {
    localStorage.removeItem('bio_user_name');
    this.currentUser = null;
  },

  getRandomVariant() {
    if (this.variants.length === 0) return null;
    const randIdx = Math.floor(Math.random() * this.variants.length);
    return this.variants[randIdx];
  },

  saveResult(variantKey, score, total) {
    const results = JSON.parse(localStorage.getItem('bio_results') || '[]');
    results.push({
      name: this.currentUser || 'Белгісіз оқушы',
      variant: variantKey,
      score: score,
      total: total,
      date: new Date().toISOString()
    });
    localStorage.setItem('bio_results', JSON.stringify(results));
  },

  getResults() {
    return JSON.parse(localStorage.getItem('bio_results') || '[]');
  },

  clearResults() {
    localStorage.removeItem('bio_results');
  }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  BioIntellect.init();
});
