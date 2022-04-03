const data = [
    {
       "title" : "APPLICATIONS DHIS 2 NATIONAL",
       "apps" :[
            {
                "name" : "DHIS 2 SISR",
                "description" : "",
                "icon" : "bi bi-laptop",
                "bgColor" : "bg-dark",
                "bgColorButton" : "btn-success",
                "link" : "https://entrepot.sante.gov.gn/dhis"
            },
            {
                "name" : "DHIS 2 SURVEILLANCE",
                "description" : "",
                "icon" : "bi bi-eyeglasses",
                "bgColor" : "bg-success",
                "bgColorButton" : "btn-dark",
                "link" : "https://surveillance.sante.gov.gn/dhis"
            },
            {
                "name" : "DHIS 2 ARCHIVE",
                "description" : "",
                "icon" : "bi bi-archive",
                "bgColor" : "bg-dark",
                "bgColorButton" : "btn-success",
                "link" : "https://entrepot.sante.gov.gn/archive"
            },
            {
                "name" : "DHIS 2 ICT",
                "description" : "",
                "icon" : "bi bi-globe",
                "bgColor" : "bg-success",
                "bgColorButton" : "btn-dark",
                "link" : "https://ict4h.sante.gov.gn/dhis"
            }
       ]
    },
    {
        "title" : "APPLICATIONS ANNEXES",
        "apps" :[
             {
                 "name" : "E-SIGL",
                 "description" : "",
                 "icon" : "bi bi-clipboard-plus",
                 "bgColor" : "bg-dark",
                 "bgColorButton" : "btn-dark",
                 "link" : "https://entrepot.sante.gov.gn/dhis"
             },
             {
                 "name" : "iHRIS",
                 "description" : "",
                 "icon" : "bi bi-people",
                 "bgColor" : "bg-dark",
                 "bgColorButton" : "btn-dark",
                "link" : "https://entrepot.sante.gov.gn/dhis"
             }
        ]
     },
     {
         "title" : "APPLICATIONS SUPPORTS",
         "apps" :[
              {
                  "name" : "MOODLE",
                  "description" : "",
                  "icon" : "bi bi-people",
                  "bgColor" : "bg-dark",
                  "bgColorButton" : "btn-dark",
                  "link" : "https://edu.sante.gov.gn"
              },
              {
                  "name" : "MANTIS",
                  "description" : "",
                  "icon" : "bi bi-people",
                  "bgColor" : "bg-dark",
                  "bgColorButton" : "btn-dark",
                 "link" : "https://support.sante.gov.gn"
              }
         ]
      }
]


var sections = document.getElementById("sections");

for (var i = 0; i < data.length; i++) {
    var section = document.createElement("section");
    
    section.classList.add('p-5');
    var container =document.createElement("div");
    container.classList.add('container');
    var sectionTitle = document.createElement('h2');
    sectionTitle.innerText = data[i].title;
    sectionTitle.className="pb-3 d-flex justify-content-center"
    container.appendChild(sectionTitle);
    var row = document.createElement('div');
    row.className='row text-center g-4';

    for (let index = 0; index < data[i].apps.length; index++) {

        const app = data[i].apps[index];
        var item = document.createElement('div');
        item.className ='col-md';
        item.innerHTML = appHTML(app.name,app.description,app.link, app.bgColor, app.bgColorButton, app.icon);
        row.appendChild(item);
        container.appendChild(row);
    }
    section.appendChild(container)
    sections.appendChild(section);
}

function appHTML(title , description,link, bgColor,bgColorButton, icon){
    return `
            
                    <div class="card ${bgColor} text-light">
                        <div class="card-body text-center">
                            <div class="h1 mb-3">
                                <i class="${icon}"></i>
                            </div>
                            <h3 class="card-title mb-3 text-warning">
                               ${title}
                            </h3>
                             <p class="card-text">
                                ${description}
                            </p> 
                            <a href="${link}" class="btn ${bgColorButton}" target="_blank">Aller</a>
                        </div>
                    </div>
               `;
}