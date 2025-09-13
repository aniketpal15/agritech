
document.addEventListener('DOMContentLoaded', () => {

    // --- Responsive Navigation (Hamburger Menu) ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');

        // Burger Animation
        hamburger.classList.toggle('toggle');
    });

    // --- Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                // Optional: remove class to re-trigger animation on scroll up
                // entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // --- Chart.js Data Visualization ---
    const ctx = document.getElementById('agriTechChart').getContext('2d');
    const agriTechChart = new Chart(ctx, {
        type: 'bar', // Type of chart: bar, line, pie, etc.
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026 (Proj.)'],
            datasets: [{
                label: 'Global IoT in Agriculture Market (in Billion USD)',
                data: [14.79, 17.01, 19.56, 22.49, 25.86, 29.74, 34.1],
                backgroundColor: 'rgba(46, 204, 113, 0.7)',
                borderColor: 'rgba(46, 204, 113, 1)',
                borderWidth: 1,
                borderRadius: 5,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Market Value (Billion USD)'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y) + ' Billion';
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });

});