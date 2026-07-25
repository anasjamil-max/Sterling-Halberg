/* Contact Page Form Handler */
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const form = e.target;
      const btn = form.querySelector('button');
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData
        });

        if (response.ok) {
          btn.textContent = 'MESSAGE SENT';
          btn.style.background = 'rgba(255, 255, 255, 0.6)';
          form.reset();
          setTimeout(() => {
            btn.textContent = 'SEND MESSAGE';
            btn.style.background = '';
          }, 3000);
        } else {
          btn.textContent = 'ERROR';
          setTimeout(() => {
            btn.textContent = 'SEND MESSAGE';
          }, 3000);
        }
      } catch (error) {
        console.error('Submission error:', error);
        btn.textContent = 'ERROR';
        setTimeout(() => {
          btn.textContent = 'SEND MESSAGE';
        }, 3000);
      }
    });
  }
});
