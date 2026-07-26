/* Contact Page & Playbook Form Handler */
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const form = e.target;
      const btn = form.querySelector('button');
      const formData = new FormData(form);
      const redirectUrl = form.getAttribute('data-redirect') || form.querySelector('input[name="redirect"]')?.value;

      const originalText = btn.textContent;
      try {
        btn.textContent = 'SUBMITTING...';
        const response = await fetch(form.action, {
          method: form.method,
          body: formData
        });

        if (response.ok) {
          btn.textContent = redirectUrl ? 'REDIRECTING...' : 'REQUEST SENT';
          btn.style.background = 'rgba(255, 255, 255, 0.6)';
          form.reset();
          if (redirectUrl) {
            setTimeout(() => {
              window.location.href = redirectUrl;
            }, 600);
          } else {
            setTimeout(() => {
              btn.textContent = originalText;
              btn.style.background = '';
            }, 3000);
          }
        } else {
          btn.textContent = 'ERROR';
          setTimeout(() => {
            btn.textContent = originalText;
          }, 3000);
        }
      } catch (error) {
        console.error('Submission error:', error);
        btn.textContent = 'ERROR';
        setTimeout(() => {
          btn.textContent = originalText;
        }, 3000);
      }
    });
  }
});
