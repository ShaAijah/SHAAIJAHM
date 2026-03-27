const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

/* FILTER */
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      item.style.display =
        filter === 'all' || item.getAttribute('data-category') === filter
        ? 'block' : 'none';
    });

    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

/* LIGHTBOX */
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

const lightboxImg = document.createElement('img');
lightbox.appendChild(lightboxImg);

portfolioItems.forEach(item => {
  const img = item.querySelector('img');

  img.addEventListener('click', () => {
    lightbox.classList.add('active');
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

/* HOVER LOCK SYSTEM */
const titleBox = document.getElementById('work-title');
const descriptionBox = document.getElementById('work-description');

let activeTitle = "Selected Work";
let activeDescription = "Hover over a project to view details.";

portfolioItems.forEach(item => {
  const img = item.querySelector('img');

  img.addEventListener('mouseenter', () => {
    const title = item.getAttribute('data-title');
    const description = item.getAttribute('data-description');

    titleBox.textContent = title;
    descriptionBox.textContent = description;

    activeTitle = title;
    activeDescription = description;
  });

  img.addEventListener('mouseleave', () => {
    titleBox.textContent = activeTitle;
    descriptionBox.textContent = activeDescription;
  });
});