var bio = {
  "name": "Matt Ludwig",
  "role": "web Developper",
  "contacts": {
    "mobile": "07-60-98-74-55",
    "email": "mattldwig@gmail.com",
    "github": "Wapika",
    "twitter": "@mattldwig",
    "blog": "mattldwig.com",
    "location": "Narbonne"
  },
  "biopic": 'images/mw-logo.svg',
  "skills": [
    'HTML5 / CSS3',
    'JavaScript / jQuery',
    'Git / GitHub', 'Photoshop',
    'Illustator',
    'After Effects'
  ],
  "progress": [60, 20, 40, 80, 45, 35],
  "message": "Bonjour, Mon nom est Matt Ludwig. Je suis web Developpeur.<br>" +
    " Enthousiaste, curieux et passionné,<br>" +
    " j’aime mettre a profit mon esprit créatif pour <br>" +
    " imaginer de nouvelles choses et trouver <br>" +
    " des solutions innovantes aux problèmes.",
  "display": function() {
    var formattedHeaderName = HTMLheaderName.replace('%data%', bio.name);
    var formattedHeaderRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedbioPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedMsg = HTMLwelcomeMsg.replace('%data%', bio.message);
    $('#header').prepend(rowHeader);
    $('#header').append(formattedbioPic);
    $('.top-info').prepend(formattedMsg);
    // Format welcome message and replace my name and my role by the variables
    $('.welcome-message').html($('.welcome-message').html().replace(/(Bonjour,)/, '<div class="intro">$1</div>'));
    $('.welcome-message').html($('.welcome-message').html().replace(/(,)/, '<span class="comma">$1</span>'));
    $('.welcome-message').html($('.welcome-message').html().replace(/(Matt Ludwig)+/g, formattedHeaderName));
    $('.welcome-message').html($('.welcome-message').html().replace(/(web Developpeur)+/g, formattedHeaderRole));
    $('.welcome-message').addClass('col-xs-12 col-md-6');
    // Formating Contact Informations and append in header and footer
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    $('#top-contacts').append(formattedMobile);
    $('#footerContacts').append(formattedMobile);
    var formattedEmail = HTMLemail.replace('%data%', '<a class="email" href=mailto:' + bio.contacts.email + '>' +
      bio.contacts.email + '</a>');
    $('#top-contacts').append(formattedEmail);
    $('#footerContacts').append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace('%data%', '<a class="twitter" href="https://twitter.com/Mattldwig">' +
      bio.contacts.twitter + '</a>');
    $('#top-contacts').append(formattedTwitter);
    $('#footerContacts').append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace('%data%', '<a class="github" href="https://github.com/Wapika">' + bio.contacts
      .github + '</a>');
    $('#top-contacts').append(formattedGithub);
    $('#footerContacts').append(formattedGithub);
    var formattedBlog = HTMLblog.replace('%data%', bio.contacts.blog);
    $('#top-contacts').append(formattedBlog);
    $('#footerContacts').append(formattedBlog);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    $('#top-contacts').append(formattedLocation);
    $('#footerContacts').append(formattedLocation);
    // Add Bootstrap class to #top-contacts
    // Detach #top-contacts from the DOM and insert it in .top-info row
    var topContacts = $('#top-contacts');
    $('#top-contacts').detach();
    $('.top-info').append(topContacts);
    // Format Skills section
    $('#header').append(rowSkills);
    $('.skills-section').append(HTMLskillsStart);
    $('#skills').wrap('<div class="col-xs-12" />');
    // Append skills in Skills section and wrap them in <li>
    if (bio.skills.length > 0) {
      bio.skills.forEach(function(skill) {
        var formattedSkills = HTMLskills.replace('%data%', skill);
        var formmatedSkillsProgress = HTMLskillsProgress.replace('%data%', bio.progress[bio.skills.indexOf(
          skill)]);
        formmatedSkillsProgress = formmatedSkillsProgress.replace('%value%', bio.progress[bio.skills.indexOf(
          skill)]);
        formmatedSkillsProgress = formmatedSkillsProgress.replace('%sr-value%', bio.progress[bio.skills.indexOf(
          skill)]);
        $('#skills').append(formattedSkills + formmatedSkillsProgress);
        $('#skills').children('.label-text, .progress').wrapAll(
          '<li class="col-xs-12 col-md-5 list-skills"></li>');
      });
    }
  }
};

var work = {
  "jobs": [{
    "employer": "Freelance",
    "title": "Content Writer/rédacteur",
    "location": "online",
    "dates": "2014 - in progress",
    "description": "Rédaction d’articles sur divers sujets,<br>" +
      "tests et critiques.",
    "icon": "images/pen.png"
  }, {
    "employer": "amandebasilic.com",
    "title": "Webmaster / WebDesigner",
    "location": "online",
    "dates": "2014 - in progress",
    "description": "Personnalisation d'un thème Wordpress,<br>" +
      "création de la charte graphique et maintien du site",
    "icon": "images/computer.png"
  }, {
    "employer": "gamereview.fr",
    "title": "Rédacteur web",
    "location": "online",
    "dates": "2014-2015",
    "description": "Rédaction d'articles et de critiques de jeux vidéo,<br>" +
      "publication des news",
    "icon": "images/pen.png"
  }],
  "display": function() {
    for (i = 0; i < work.jobs.length; i++) {
      var formattedWorkEmployers = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
      var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
      var formattedWorkDate = HTMLworkDates.replace('%data%', work.jobs[i].dates);
      var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
      var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
      var formattedWorkIcon = HTMLworkIcon.replace('%data%', work.jobs[i].icon);
      $('#workExperience').append(HTMLworkStart);
      $('.work-entry:last').append(formattedWorkIcon);
      $('.work-entry:last').append(formattedWorkTitle);
      $('.work-entry:last').append(formattedWorkDate);
      $('.work-entry:last').append(formattedWorkDescription);
      $('.work-entry:last').append(formattedWorkEmployers);
      $('.work-entry:last').append(formattedWorkLocation);
    }
  }
};

var projects = {
  "projects": [{
    "title": "JavaScript Calculator",
    "dates": "2016",
    "description": "Calculateur codé en <br>JavaScript.",
    "images": [
      "images/calc.png",
      "images/calc_2.png"
    ]
  }, {
    "title": "Pomodoro Timer",
    "dates": "2016",
    "description": "Horloge de Pomodoro optimisant <br>la productivité.",
    "images": [
      "images/pomodoro.png",
      "images/pomodoro_2.png"
    ]
  }, {
    "title": "Random Quotes",
    "dates": "2016",
    "description": "Générateur de citations <br>et de couleurs complémentaires.",
    "images": [
      "images/inspire.png",
      "images/inspire_2.png"
    ]
  }, {
    "title": "Weather Application",
    "dates": "2016",
    "description": "Application web météo <br>basée sur la localisation.",
    "images": [
      "images/weather.png",
      "images/weather_2.png"
    ]
  }, {
    "title": "Wikipedia Viewer",
    "dates": "2016",
    "description": "Page de recherche <br>utilisant l’API Wikipédia.",
    "images": [
      "images/wikipedia.png",
      "images/wikipedia_2.png"
    ]
  }, {
    "title": "Portfolio",
    "dates": "2016",
    "description": "Réalisation d’un portfolio <br>comme exercice de webDesign.",
    "images": [
      "images/portfolio.png",
      "images/portfolio_2.png"
    ]
  }],
  "display": function() {
    for (i = 0; i < projects.projects.length; i++) {
      $('#projects').append(HTMLprojectStart);
      var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
      $('.project-entry:last').append(formattedProjectTitle);
      var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
      $('.project-entry:last').append(formattedProjectDates);
      var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
      for (j = 0; j < projects.projects[i].images.length; j++) {
        var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[j]);
        formattedProjectImage = formattedProjectImage.replace('%alt-data%', projects.projects[i].title);
        $('.project-entry:last').append(formattedProjectImage);
      }
      $('.project-entry:last').append(formattedProjectDescription);
    }
    // Add boostrap class to project-entry div
    $('.project-entry').addClass('col-xs-12 col-sm-6 col-md-4');
  }
};

var education = {
  "schools": [{
    "name": "CNED",
    "location": "Castelnaudary",
    "degree": "Capacité en droit",
    "majors": ["Law"],
    "url": "https://www.cned.fr",
    "dates": "2009"
  }, {
    "name": "Terminale Littéraire",
    "location": "Revel, France",
    "degree": "Bac L",
    "majors": ["Letters"],
    "url": "http://vincent-auriol.ecollege.haute-garonne.fr/",
    "dates": "2008"
  }],
  "onlineCourses": [{
    "title": "Front-End Web Developer Nanodegree",
    "school": "Udacity",
    "dates": "in progress",
    "url": "https://www.udacity.com/"
  }, {
    "title": "Full Stack Web Development Certification",
    "school": "Free Code Camp",
    "dates": "in progress",
    "url": "https://www.freecodecamp.com/"
  }, {
    "title": "Front-End Formation",
    "school": "CodeSchool",
    "dates": "2016",
    "url": "https://www.codeschool.com/"
  }, {
    "title": "Introduction au marketing",
    "school": "HEC Montréal",
    "dates": "2015",
    "url": "https://cours.edulib.org/"
  }, {
    "title": "Découvrir la science politique",
    "school": "Université catholique de Louvain",
    "dates": "2015",
    "url": "https://www.edx.org/"
  }],
  "display": function() {
    for (i = 0; i < education.schools.length; i++) {
      var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
      formattedSchoolName = formattedSchoolName.replace('#', education.schools[i].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
      var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors);
      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree + formattedSchoolMajor +
        formattedSchoolDates + formattedSchoolLocation);
    }
    $('#education').append('<h3 class="onlineCoursesTitle">Online Courses</h3>');
    for (i = 0; i < education.onlineCourses.length; i++) {
      var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
      formattedOnlineTitle = formattedOnlineTitle.replace('#', education.onlineCourses[i].url);
      var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
      var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);
      var formattedOnlineUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);
      formattedOnlineUrl = formattedOnlineUrl.replace('#', education.onlineCourses[i].url)
      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates +
        formattedOnlineUrl);
    }

  }
};
// Replace div with HTML elements
function replaceWithElements(assign, elements) {
  var content = $(assign).html();
  $(assign).replaceWith(elements + content);
}
replaceWithElements('#lets-connect', '<footer class="connect">');
replaceWithElements('#header', '<header id="header" class="center-content clear-fix">');
replaceWithElements('#workExperience', '<section id="workExperience" class="work-section row">');
replaceWithElements('#projects', '<section id="projects">');
replaceWithElements('#education', '<section id="education">');
replaceWithElements('#map-div', '<section id="map-div">');
// Change classes for Bootstrap classes
$('#main').addClass('container-fluid');
$('#top-contacts').removeClass('flex-box').addClass('col-xs-12 col-md-6');
$('#projects').addClass('projects-section');
$('#workExperience').removeClass('gray').addClass('work-section');
$('#education').addClass('education-section');
// Append Google Map
$('#map-div').append(googleMap);
// Remove unused classes
$('#map-div h2').addClass('location-section-title');
$('.connect h2').removeClass('orange');
$('.connect h2').removeClass('center-text').addClass('footer-title');
$('#footerContacts').removeClass('flex-box');

// Display bio, work, projects and education content
bio.display();
work.display();
projects.display();
education.display();

// Wrap section content in row
$('#education').children().wrapAll('<div class="education row"></div>');
$('#workExperience').children().wrapAll('<div class="work row"></div>');
$('#projects').children().wrapAll('<div class="project row"></div>');
