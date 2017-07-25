var work = {
    "jobs": [
        {
            "employer": "KSU",
            "title": "Student",
            "location": "Riyadh",
            "dates": "2014-2108",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare a sem vitae egestas. Vestibulum tempor neque vitae lorem suscipit rhoncus. Mauris vel ex a dolor tincidunt aliquam. Nullam lacinia quam quam, in pretium est convallis tempor. Cras arcu neque, dignissim in nisi vel, tristique pellentesque lacus. "
         },
        {
            "employer": "Dvelopment Company",
            "title": "developer",
            "location": "riyadh",
            "dates": "2014-future",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare a sem vitae egestas. Vestibulum tempor neque vitae lorem suscipit rhoncus. Mauris vel ex a dolor tincidunt aliquam. Nullam lacinia quam quam, in pretium est convallis tempor. Cras arcu neque, dignissim in nisi vel, tristique pellentesque lacus. "
         }
    ]

}


var education = {
    "schools": [
        {
            "school": "KSU",
            "location": "Riyadh",
            "major": "SWE",
            "dates": 2018,
            "degree": "BA"
        }],
    "onlineCources": [
        {
            "title": "Front end Nano Degree",
            "school": "Udacity",
            "dates": 2014,
            "url": "udacity.com"
        }
    ]

}

var projects = {
    "projects": [
        {
            "title": "portfolio",
            "dates": "2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare a sem vitae egestas. Vestibulum tempor neque vitae lorem suscipit rhoncus. Mauris vel ex a dolor tincidunt aliquam. Nullam lacinia quam quam, in pretium est convallis tempor. Cras arcu neque, dignissim in nisi vel, tristique pellentesque lacus. ",
            "images": [
                "https://camo.githubusercontent.com/d312d2b366ecc7690f8df314c2b951dec0f146b9/68747470733a2f2f646c2e64726f70626f7875736572636f6e74656e742e636f6d2f7370612f6c62763771307a32376a313470676c2f74657769316a31632e706e67"
            ]
        }
    ]
}

var bio = {
    "name": "Rayan Aldafas",
    "role": "front end developer",
    "contacts": {
        "mobile": "055-555-5555",
        "email": "ryn7des@gmail.com",
        "github": "irayan7",
        "twitter": "@irayan7",
        "location": "riyadh"
    },
    "welcomMessage": "Hi all, welcome",
    "skills": [
        "Front end ninja", "back end ninja", "real living ninja"
    ],
    "bioPic": "images/aaa1.png"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


$("#topContacts").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomMessage));


if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formatedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#header").append(formatedSkills);
    formatedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#header").append(formatedSkills);
    formatedSkills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#header").append(formatedSkills);
};


//function displayWork(){
//    work.jobs.forEach(function (job) {
//
//        $("#workExperience").append(HTMLworkStart);
//
//        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
//        var formattedEmployerTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
//        $(".work-entry:last").append(formattedEmployer + formattedEmployerTitle);
//
//        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
//
//        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
//
//    });
//};

projects.display = function(){
    projects.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);
        
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[project].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[project].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[project].description));
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[project].images));
        
        if(project.projects[project].images.length > 0){
            project.projects[project].images.forEach(function(image){
                var formattedImage = HTMLprojectImage.replace("%data%", project.projects[project].images[image]);
                $("project-entry:last").append(formattedImage);
            });
        };
    });
};

projects.display();

education.display = function(){
    education.schools.forEach(function(school){
        $("#education").append(HTMLschoolStart);
        
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].school));
        $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].major));
    });
    
    if(education.onlineCources.length >0){
        $("education").append(HTMLonlineClasses);
        education.onlineCources.forEach(function(course){
            $("education").append(HTMLonlineTitle.replace("%data%", education.onlineCources[course].title)); $("education").append(HTMLonlineSchool.replace("%data%", education.onlineCources[course].school)); $("education").append(HTMLonlineDates.replace("%data%", education.onlineCources[course].dates)); $("education").append(HTMLonlineURL.replace("%data%", education.onlineCources[course].url));
            
        })
    }
    
    
};
education.display();




