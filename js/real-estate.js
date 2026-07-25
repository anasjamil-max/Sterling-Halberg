/* Real Estate Page Specific JS: Signature Drawing Animation */
document.addEventListener('DOMContentLoaded', () => {
  const sigCards = document.querySelectorAll('.node-signature');
  if (sigCards.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.5 });
    
    sigCards.forEach(sigCard => {
      observer.observe(sigCard);

      sigCard.addEventListener('mouseenter', () => {
        sigCard.classList.remove('in-view');
        void sigCard.offsetWidth; // Trigger reflow
        sigCard.classList.add('in-view');
      });
    });
  }
});
