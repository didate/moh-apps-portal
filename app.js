const data = [
    {
      "title": "DHIS 2 NATIONAUX",
      "id": "dhis2",
      "apps": [
        {
          "name": "DHIS 2 SISR",
          "description": "Système d'Information Sanitaire de Routine",
          "icon": "bi bi-laptop",
          "bgColor": "bg-dark",
          "textColor": "text-light",
          "borderColor": "border-success",
          "bgColorButton": "btn-success",
          "link": "https://entrepot.sante.gov.gn/dhis"
        },
        {
          "name": "DHIS 2 SURVEILLANCE",
          "description": "Système de Surveillance Épidémiologique",
          "icon": "bi bi-eyeglasses",
          "bgColor": "bg-primary-custom",
          "textColor": "text-light",
          "borderColor": "border-warning",
          "bgColorButton": "btn-warning",
          "link": "https://surveillance.sante.gov.gn/dhis"
        },
        {
          "name": "DHIS 2 ARCHIVE",
          "description": "Base de données d'archives nationales",
          "icon": "bi bi-archive",
          "bgColor": "bg-dark",
          "textColor": "text-light",
          "borderColor": "border-success",
          "bgColorButton": "btn-success",
          "link": "https://entrepot.sante.gov.gn/archive"
        }
      ]
    },
    {
      "title": "AUTRES PLATEFORMES DHIS 2",
      "id": "autres",
      "apps": [
        {
          "name": "DHIS 2 ICT",
          "description": "Plateforme de gestion des TIC",
          "icon": "bi bi-cloud-slash",
          "bgColor": "bg-primary-custom",
          "textColor": "text-light",
          "borderColor": "border-warning",
          "bgColorButton": "btn-warning",
          "link": "https://ict4h.sante.gov.gn/dhis"
        },
        {
          "name": "DHIS 2 PEV",
          "description": "Programme Élargi de Vaccination",
          "icon": "bi bi-calendar-check",
          "bgColor": "bg-dark",
          "textColor": "text-light",
          "borderColor": "border-success",
          "bgColorButton": "btn-success",
          "link": "https://entrepot.sante.gov.gn/pevguinee"
        },
        {
          "name": "DHIS 2 FORMATION",
          "description": "Plateforme d'apprentissage DHIS2",
          "icon": "bi bi-bezier",
          "bgColor": "bg-primary-custom",
          "textColor": "text-light", 
          "borderColor": "border-warning",
          "bgColorButton": "btn-warning",
          "link": "https://entrepot.sante.gov.gn/training"
        }
      ]
    },
    {
      "title": "PLATEFORMES CONNEXES",
      "id": "connexes",
      "apps": [
        {
          "name": "E-SIGL",
          "description": "Système d'Information de Gestion Logistique",
          "icon": "bi bi-clipboard-plus",
          "bgColor": "bg-dark",
          "textColor": "text-light",
          "borderColor": "border-success",
          "bgColorButton": "btn-success",
          "link": "https://esigl.santegovgn.org/"
        },
        {
          "name": "iHRIS",
          "description": "Gestion des Ressources Humaines en Santé",
          "icon": "bi bi-people",
          "bgColor": "bg-primary-custom",
          "textColor": "text-light",
          "borderColor": "border-warning",
          "bgColorButton": "btn-warning",
          "link": "https://ihrisguinee.sante.gov.gn"
        }
      ]
    },
    {
      "title": "PLATEFORMES SUPPORTS",
      "id": "supports",
      "apps": [
        {
          "name": "MOODLE",
          "description": "Plateforme d'apprentissage en ligne",
          "icon": "bi bi-book",
          "bgColor": "bg-dark",
          "textColor": "text-light",
          "borderColor": "border-success",
          "bgColorButton": "btn-success",
          "link": "https://apps.sante.gov.gn/moodle"
        },
        {
          "name": "MANTIS",
          "description": "Gestion des tickets et support technique",
          "icon": "bi bi-bug",
          "bgColor": "bg-primary-custom",
          "textColor": "text-light",
          "borderColor": "border-warning",
          "bgColorButton": "btn-warning",
          "link": "https://apps.sante.gov.gn/mantis"
        }
      ]
    }
  ];

  var sections = document.getElementById("sections");

  for (var i = 0; i < data.length; i++) {
    var section = document.createElement("section");
    section.id = data[i].id;
    section.classList.add('section-gap', 'py-5');
    
    // Alternate background colors for sections
    if (i % 2 === 0) {
      section.classList.add('bg-white');
    }
    
    var container = document.createElement("div");
    container.classList.add('container');
    
    var sectionTitle = document.createElement('h2');
    sectionTitle.innerText = data[i].title;
    sectionTitle.className = "text-center section-title";
    container.appendChild(sectionTitle);
    
    var row = document.createElement('div');
    row.className = 'row g-4';

    for (let index = 0; index < data[i].apps.length; index++) {
      const app = data[i].apps[index];
      var item = document.createElement('div');
      item.className = 'col-md-4';
      item.innerHTML = appHTML(
        app.name,
        app.description,
        app.link, 
        app.bgColor, 
        app.textColor,
        app.borderColor,
        app.bgColorButton, 
        app.icon
      );
      row.appendChild(item);
    }
    
    container.appendChild(row);
    section.appendChild(container);
    sections.appendChild(section);
  }

  function appHTML(title, description, link, bgColor, textColor, borderColor, bgColorButton, icon) {
    return `
      <div class="app-card card ${bgColor} ${textColor} h-100 ${borderColor}">
        <div class="card-body text-center p-4">
          <div class="app-icon">
            <i class="${icon}"></i>
          </div>
          <h3 class="app-title text-secondary-custom">
            ${title}
          </h3>
          <p class="card-text mb-4">
            ${description}
          </p>
          <a href="${link}" class="app-btn btn ${bgColorButton}" target="_blank">
            <i class="bi bi-box-arrow-up-right me-2"></i>Accéder
          </a>
        </div>
      </div>
    `;
  }

  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Add animation on scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section-gap');
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 100) {
        section.style.opacity = '1';
      }
    });
  });

  // Initialize with fade in effect
  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-gap');
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transition = 'opacity 0.5s ease-in-out';
    });
    
    setTimeout(() => {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight) {
          section.style.opacity = '1';
        }
      });
    }, 300);
  });