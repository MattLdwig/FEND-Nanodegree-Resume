var bio = {
  "name" : "Matt Ludwig",
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
  "message" : "Welcome to my resume !",
  "display" : function() {
    var formattedHeaderName = HTMLheaderName.replace('%data%',bio.name);
    $('#header').append(formattedHeaderName);
    var formattedHeaderRole = HTMLheaderRole.replace('%data%',bio.role);
    $('#header:last').append(formattedHeaderRole);
    var formattedBioPic = HTMLbioPic.replace('%data%',bio.biopic);
    $('#header:last').append(formattedBioPic);
    var formattedMsg = HTMLwelcomeMsg.replace('%data%',bio.message);
    $('#header:last').append(formattedMsg);
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

    $('#header').append(HTMLskillsStart);
    if(bio.skills.length > 0) {
      bio.skills.forEach(function(skill){
        var formattedSkills = HTMLskills.replace('%data%',skill);
        $('#skills').append(formattedSkills);
      });
      // Change the class of the <ul> for display <li> horizontaly
      $('#skills').removeClass('flex-column').addClass('flex-box');
    }
  }
};

bio.display();
