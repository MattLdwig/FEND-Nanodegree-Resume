var bio = {
  "name" : "Matt Ludwig",
  "role" : "web Developper",
  "contacts" : {
    "mobile" : "00-00-00-00-00",
    "email" : "mattldwig@gmail.com",
    "github" : "Wapika",
    "twitter" : "@mattldwig",
    "location" : "Narbonne, France"
  },
  "biopic" : 'images/matt_ludwig.jpg',
  "skills" : ['HTML5 / CSS3','JavaScript / jQuery','Git / GitHub', 'Photoshop', 'Illustator', 'After Effects'],
  "progress" : [60, 50, 40, 80, 45, 35],
  "message" : "Bonjour, Mon nom est Matt Ludwig. Je suis web Developpeur.<br>"+
              " Enthousiaste, curieux et passionné,<br>"+
              " j’aime mettre a profit mon esprit créatif pour <br>"+
              " imaginer de nouvelles choses et trouver <br>"+
              " des solutions innovantes aux problèmes.",
  "display" : function() {
    var formattedHeaderName = HTMLheaderName.replace('%data%',bio.name);
    var formattedHeaderRole = HTMLheaderRole.replace('%data%',bio.role);
    // Message
    var formattedMsg = HTMLwelcomeMsg.replace('%data%',bio.message);
    $('#header').prepend(rowHeader);
    $('.topInfo').prepend(formattedMsg);
    $('.welcome-message').html($('.welcome-message').html().replace(/(Bonjour,)/,'<div class="intro">$1</div>'));
    $('.welcome-message').html($('.welcome-message').html().replace(/(,)/,'<span class="comma">$1</span>'));
    $('.welcome-message').html($('.welcome-message').html().replace(/(Matt Ludwig)+/g, formattedHeaderName));
    $('.welcome-message').html($('.welcome-message').html().replace(/(web Developpeur)+/g, formattedHeaderRole));
    $('.welcome-message').addClass('cox-xs-12 col-md-6');

    // Formating Contact Informations
    var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
    $('#topContacts').append(formattedMobile);
    var formattedEmail = HTMLemail.replace('%data%','<a class="email" href=mailto:'+bio.contacts.email+'>'+bio.contacts.email+'</a>');
    $('#topContacts').append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace('%data%','<a class="email" href="https://twitter.com/Mattldwig">'+bio.contacts.twitter+'</a>');
    $('#topContacts').append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace('%data%','<a class="email" href="https://github.com/Wapika">'+bio.contacts.github+'</a>');
    $('#topContacts').append(formattedGithub);
    var formattedBlog = HTMLblog.replace('%data%',bio.contacts.blog);
    $('#topContacts').append(formattedBlog);
    var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
    $('#topContacts').append(formattedLocation);
    // Add Bootstrap to #topContacts
    $('#topContacts').removeClass('flex-box').addClass('col-xs-12 col-md-4 col-md-offset-2');
    // Detach #topContacts from the DOM and insert it in .topInfo row
    var x = $('#topContacts');
    $('#topContacts').detach();
    $('.topInfo').append(x);

    $('#header').append(rowSkills);

    $('.skills').append(HTMLskillsStart);
    $('#skills').wrap('<div class="col-xs-12" />');
    if(bio.skills.length > 0) {
      bio.skills.forEach(function(skill){
        var formattedSkills = HTMLskills.replace('%data%',skill);
        var formmatedSkillsProgress = HTMLskillsProgress.replace('%data%',bio.progress[bio.skills.indexOf(skill)]);
        formmatedSkillsProgress = formmatedSkillsProgress.replace('%value%',bio.progress[bio.skills.indexOf(skill)]);
        $('#skills').append(formattedSkills + formmatedSkillsProgress);

        $('#skills').children('li').wrapAll('<div class="col-md-5"></div>');

      });
    }
  }
};
$('#main').addClass('container-fluid');
bio.display();
