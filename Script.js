
let projectCons = document.getElementById("projectcontainer");

let techlanguageContainer = document.getElementById("techlanguageContainer");

const projectData = [
  {
    title: "Google",
    snapshot: "",
    description:
      " A Document Management System aimed to improved document efficiency designed for Pamantasan ng Lungsod ng Pasig with document and signature authentication using Convolutional Neural Network.",
    techstack: ["HTML", "CSS", "JavaScript", "React"]
  },

   {
    title: "Google",
    snapshot: "",
    description:
      " A Document Management System aimed to improved document efficiency designed for Pamantasan ng Lungsod ng Pasig with document and signature authentication using Convolutional Neural Network.",
    techstack: ["HTML", "CSS", "JavaScript", "React"],
  },
];

const techStacklanguage  =[
  {
    category:"Frontend",
    technologies: ["HTML", "CSS", "Javascript", "React", "TailwindCSS", "Bootstrap" ]
  },
  {
    category:"Backend",
    technologies: ["PHP"]
  },
  {
    category:"Tools",
    technologies: ["Figma", "Git", "Github", "Linux" ]
  }
]

function createTechStacks(techslang){
  const stackspans = techslang.technologies.map((langs) => `<span>${langs}</span>`).join("");

  return`
        <div class="techtitle">
             ${techslang.category}  
         </div>

         <div class="technologies">
              ${stackspans}              
        </div>
  `
}


function createProjectCard(project) {
  const techSpans = project.techstack.map((tech) => `<span>${tech}</span>`).join("");

  return `
    <div class="project">
            <div class="projectSnapshot" style="background-image: url('${project.snapshot}')">

            </div>

            <div class="projectDescription">
                <div class="projecttitle">
                    ${project.title}
                 </div>

                  <div class="projectDesc">
                        <article>
                            ${project.description}
                        </article>
                     </div>

                     <div class="projectTeckstack">
                        ${techSpans}
                    </div>
                 </div>            
        </div>`;
}

projectData.forEach(project =>{
    projectCons.innerHTML += createProjectCard(project);
})

techStacklanguage.forEach(techslang =>{
    techlanguageContainer.innerHTML += createTechStacks(techslang);
})


const CertValues  =[
  {
    certName:"Anti-Bribery and Corruption Policy",
    certplace: "@lhoopa"
  },
]



function CreateCard(values){


  const img_link=[
    './assets/Certificate - ABC - Mark  Andrie Datus.jpg',
    './assets/Certificate - ABC - Mark  Andrie Datus.jpg'

  ];

  for(let i=0; i <= img_link.length; i++){

    const imageCard = document.createElement('div');
    imageCard.classlist.add('imageCard')

    const img = document.createElement('img');


    img.src = imageLinks[i];
    img.alt = 'Project photo ' + (i + 1);

    imageCard.appendChild(img);
  }

  
  const container = document.getElementById('projectList');

  for(let i = 0; i <= CertValues; i++ ){

    const card = document.createElement('div');
    card.classList.add('card')
    //main conatiner ng isang card 

    const imageCard = document.createElement('div');
    imageCard.classList.add('imageCard')

    const nameCard = document.createElement('div');
    nameCard.classList.add('nameCard');

    const certificateName = document.createElement('div')
    certificateName.classList.add('certificateName')

    const certificate_place= document.createElement('div')
    certificate_place.classList.add('certificate_place')

    nameCard.appendChild(certificateName, certificate_place)

    card.appendChild(imageCard, nameCard);

    container.appendChild(card);


  }


  










}