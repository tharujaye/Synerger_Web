// JavaScript code for creating the interactive SVG sitemap

// Define your SVG markup here
const svgMarkup = `
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
  <!-- Add your SVG elements here -->
</svg>
`;

// Insert the SVG markup into the #sitemap div
document.getElementById('sitemap').innerHTML = svgMarkup;

// Add interactivity to SVG nodes
const nodes = document.querySelectorAll('circle, rect');

nodes.forEach(node => {
  node.addEventListener('mouseover', function() {
    this.style.fill = 'lightblue';
  });

  node.addEventListener('mouseout', function() {
    this.style.fill = '';
  });

  node.addEventListener('click', function() {
    const pageLink = this.getAttribute('data-link');
    window.location.href = pageLink;
  });
});

// Add accessibility features
nodes.forEach((node, index) => {
  node.setAttribute('aria-label', `Page ${index + 1}`);
});
