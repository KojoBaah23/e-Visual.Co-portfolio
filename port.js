document.addEventListener('DOMContentLoaded', () => {
    
    // 1. PROJECT FILTERING LOGIC
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-category');
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
function openModal(id) {
  var modal = document.getElementById(id);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  var modal = document.getElementById(id);
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
  var modals = document.querySelectorAll('.modal');
  modals.forEach(function(modal) {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});
    // 2. DRILL-DOWN LOGIC (Opening the sub-set of brand projects)
    window.openSubCategory = function(categoryId) {
        document.getElementById('mainPortfolio').style.display = 'none';
        document.getElementById(categoryId).style.display = 'block';
        window.scrollTo(0, 0);
    };

    window.closeSubCategory = function() {
        document.getElementById('branding-projects').style.display = 'none';
        document.getElementById('mainPortfolio').style.display = 'block';
    };
});
 (function() {
    const form = document.getElementById('contactForm');
    const toast = document.getElementById('toastMsg');

    function showToast(message, isError = false) {
      toast.textContent = message || (isError ? '⚠️ Something went wrong (demo)' : '✓ Message sent (demo)');
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) scale(1)';
      if (isError) {
        toast.style.background = 'rgba(180, 60, 50, 0.92)';
      } else {
        toast.style.background = 'rgba(15, 23, 42, 0.92)';
      }
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) scale(0.9)';
        setTimeout(() => {
          if (!isError) toast.style.background = 'rgba(15, 23, 42, 0.92)';
        }, 200);
      }, 2800);
    }

    // Simple client-side validation + demo "send"
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!firstName || !lastName || !email || !message) {
        showToast('❌ Please fill all required fields.', true);
        return;
      }
      if (!email.includes('@') || !email.includes('.')) {
        showToast('📧 Please enter a valid email address.', true);
        return;
      }
      if (message.length < 5) {
        showToast('✏️ Message must be at least 5 characters.', true);
        return;
      }

      // simulate form submission (demo)
      console.log({
        firstName,
        lastName,
        email,
        phone: document.getElementById('phone').value,
        message
      });

      showToast('✨ Message sent! We’ll be in touch soon.', false);

      // optional: reset form? keeping data for demo clarity, but could reset
      // form.reset(); (if preferred)
      // for better UX: we just show success without resetting, but we can optionally clear.
      // Actually let's keep it to avoid confusion – but you can uncomment:
      // setTimeout(() => form.reset(), 100);
      // I prefer leaving filled so users see what they sent? fine.
    });

    // subtle navbar scroll effect (adds shadow/depth while scrolling)
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
          navbar.style.boxShadow = '0 8px 20px rgba(0,0,0,0.05)';
          navbar.style.background = 'rgba(255, 255, 255, 0.96)';
        } else {
          navbar.style.boxShadow = 'none';
          navbar.style.background = 'rgba(255, 255, 255, 0.92)';
        }
      });
    }
  })();

  (function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
          navbar.style.boxShadow = '0 8px 20px rgba(0,0,0,0.05)';
          navbar.style.background = 'rgba(255, 255, 255, 0.96)';
        } else {
          navbar.style.boxShadow = 'none';
          navbar.style.background = 'rgba(255, 255, 255, 0.92)';
        }
      });
    }

    // optional: interactive "Learn more" links just simulate small console log (prevent default)
    const learnLinks = document.querySelectorAll('.learn-more, .btn-primary');
    learnLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#') {
          e.preventDefault();
          console.log(`🔗 Demo interaction: ${link.innerText} clicked — integrate your actual routing.`);
          // gentle micro feedback (you could replace with modal)
          const tempStyle = link.style.transition;
          link.style.transform = 'scale(0.98)';
          setTimeout(() => { link.style.transform = ''; }, 120);
        }
      });
    });
  })();


  (function() {
    // Filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');
    
    function filterProjects(category) {
      projects.forEach(project => {
        const projectCat = project.getAttribute('data-category');
        if (category === 'all' || projectCat === category) {
          project.style.display = 'block';
          // subtle fade-in effect
          project.style.animation = 'fadeScale 0.3s ease forwards';
        } else {
          project.style.display = 'none';
        }
      });
      // re-trigger grid layout after filter
      const grid = document.getElementById('projectsGrid');
      if (grid) {
        grid.style.opacity = '0.99';
        setTimeout(() => { grid.style.opacity = '1'; }, 20);
      }
    }

    // add dynamic keyframes if needed
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes fadeScale {
        0% { opacity: 0; transform: translateY(8px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .project-card {
        animation: fadeScale 0.4s ease-out;
      }
    `;
    document.head.appendChild(styleSheet);

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // update active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.getAttribute('data-filter');
        filterProjects(filterValue);
      });
    });

    // navbar scroll shadow effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
          navbar.style.boxShadow = '0 8px 20px rgba(0,0,0,0.05)';
          navbar.style.background = 'rgba(255, 255, 255, 0.96)';
        } else {
          navbar.style.boxShadow = 'none';
          navbar.style.background = 'rgba(255, 255, 255, 0.92)';
        }
      });
    }

    // demo: handle project links (prevent page jump & log)
    const projectLinks = document.querySelectorAll('.project-link, .btn-primary');
    projectLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#') {
          e.preventDefault();
          console.log(`✨ Demo: "${link.innerText.trim()}" clicked — integrate full case study.`);
          // micro animation
          link.style.transform = 'scale(0.96)';
          setTimeout(() => { link.style.transform = ''; }, 120);
        }
      });
    });

    // additional hover effect for consistency
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        // if the click target is not a link, we do nothing, just demo
        if (e.target.tagName !== 'A' && !e.target.closest('.project-link')) {
          console.log('🔍 Project card interaction — you can open a modal or navigate.');
        }
      });
    });
  })()