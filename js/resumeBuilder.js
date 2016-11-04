var bio = {
  "name" : "matt Ludwig",
  "role" : "Web Developper",
  "contacts" : {
    "mobile" : "00-00-00-00-00",
    "email" : "mattldwig@gmail.com",
    "github" : "Wapika",
    "twitter" : "@mattldwig",
    "location" : "Narbonne, France"
  },
  "biopic" : 'images/matt_ludwig.jpg',
  "skills" : ['HTML', 'CSS', 'Adobe Photoshop', 'Adobe Illustator', 'Adobe After Effects'],
  "message" : "Welcome to my resume !"
};

var education = {
  "schools" : [
    {
      "name": "CNED",
      "location": "correspondance",
      "degree": "Capacité en droit",
      "dates": "2009"
    },
    {
      "name": "CNED",
      "location": "correspondance",
      "degree": "Terminale Littéraire",
      "dates": "2008"
    }
  ],
  "onlineCourses" : [
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "in progress",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1"
    },
    {
      "title": "Full Stack Web Development Certification",
      "school": "Free Code Camp",
      "dates": "in progress",
      "url": "https://www.freecodecamp.com/"
    },
    {
      "title": "Front-End Formation",
      "school": "CodeSchool",
      "dates": "2016",
      "url": "https://www.codeschool.com/courses/front-end-formations"
    },
    {
      "title": "Introduction au marketing",
      "school": "HEC Montréal",
      "dates": "2015",
      "url": "https://cours.edulib.org/courses/HEC/MKT-101/H2015/about"
    },
    {
      "title": "Découvrir la science politique",
      "school": "Université catholique de Louvain",
      "dates": "2015",
      "url": "https://www.edx.org/course/decouvrir-la-science-politique-louvainx-louv3x-2"
    }
  ],
  "display" : function(){

    for(school in education.schools){
      var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
      var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);

      $('#education').append(HTMLschoolStart);

      $('.education-entry:last').append(formattedSchoolName).append(formattedSchoolDegree).append(formattedSchoolDates).append(formattedSchoolLocation);
    }

    for(course in education.onlineCourses){
      var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
      var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.onlineCourses[course].location);
      var formattedOnlineUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);

      $('.education-entry:last').append(formattedOnlineTitle).append(formattedOnlineSchool).append(formattedOnlineDates).append(formattedOnlineUrl);
    }

  }
};

var work = {
  "jobs" : [
    {
      "employer" : "Freelance",
      "title" : "Content Writer/rédacteur",
      "location" : "online",
      "dates" : "in progress",
      "description" : "Rédaction d'articles"
    },
    {
      "employer" : "amandebasilic.com",
      "title" : "Webmaster / WebDesigner",
      "location" : "online",
      "dates" : "in progress",
      "description" : "Personnalisation d'un thème Wordpress, création de la charte graphique et maintien du site"
    },
    {
      "employer" : "gamereview.fr",
      "title" : "Rédacteur web",
      "location" : "online",
      "dates" : "2014-2015",
      "description" : "Rédaction d'articles et de tests de jeux vidéo"
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title": "JavaScript Calculator",
      "dates": "2016",
      "description": "Une simple calculette, codée en JS",
      "images": ["http://codepen.io/Wapika/pen/Gqdbxm"]
    },
    {
    "title": "Pomodoro Timer",
    "dates": "2016",
    "description": "Une horloge de Pomodoro, permettant d'optimiser sa productivité.",
    "images": ["http://codepen.io/Wapika/pen/JKBgAG"]
    },
    {
      "title": "Random Quotes and Colors Machine",
      "dates": "2016",
      "description": "Une page affichant une citation motivante aléatoire sur un fond coloré. L'utilisation de la librairie JS Colors permettant d'afficher le background et la citation dans deux couleurs complémentaires.",
      "images": ["http://codepen.io/Wapika/pen/KzRxzo"]
    },
    {
      "title": "Weather Application",
      "dates": "2016",
      "description": "Une application web permettant d'afficher la météo, basée sur la localisation de l'utilisateur par le navigateur.",
      "images": ["http://codepen.io/Wapika/pen/VjLyMz"]
    },
    {
      "title": "Wikipedia Viewer",
      "dates": "2016",
      "description": "Une simple application web utilisant l'API de Wikipédia.",
      "images": ["http://codepen.io/Wapika/pen/aZmymG"]
    },
  ]
}

var formattedHeaderName = HTMLheaderName.replace('%data%',bio.name);
var formattedSkills = HTMLskills.replace('%data%',bio.skills);

$('#header').append(formattedHeaderName);


if(bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);
  $('#skills').append(formattedSkills);
}

for(job in work.jobs) {
  $('#workExperience').append(HTMLworkStart);

  // Formated Variables
  var formattedWorkEmployers = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
  var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
  var formattedWorkDate = HTMLworkDates.replace('%data%', work.jobs[job].dates);
  var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
  var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
  var formattedWorkEmployersTitle = formattedWorkEmployers + " " + formattedWorkTitle;

  $('.work-entry:last').append(formattedWorkEmployersTitle).append(formattedWorkDate).append(formattedWorkDescription);
}

$('#main').append(internationalizeButton);

  var inName = function(){
    var lastName = bio.name.split(" ");
    lastName[1] = lastName[1].toUpperCase();
    lastName[0] = lastName[0].slice(0,1).toUpperCase() + lastName[0].slice(1).toLowerCase();
    return lastName.join(' ');
  }

projects.display = function() {

  for(project in projects.projects) {
    var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
    var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);;
    var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);;
    var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[project].images);;
    $('#projects').append(HTMLprojectStart);
    $('.project-entry:last').append(formattedProjectTitle).append(formattedProjectDates).append(formattedProjectDescription).append(formattedProjectImage);
  }
}

projects.display();
education.display();
