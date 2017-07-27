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

};


var education = {
    "schools": [
        {
            "name": "KSU",
            "location": "Riyadh",
            "majors": ["SWE"],
            "dates": "2018",
            "degree": "BA"
        }],
    "onlineCourses": [
        {
            "title": "Front end Nano Degree",
            "school": "Udacity",
            "dates": "2014",
            "url": "udacity.com"
        }
    ]

};

var projects = {
    "projects": [
        {
            "title": "portfolio",
            "dates": "2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare a sem vitae egestas. Vestibulum tempor neque vitae lorem suscipit rhoncus. Mauris vel ex a dolor tincidunt aliquam. Nullam lacinia quam quam, in pretium est convallis tempor. Cras arcu neque, dignissim in nisi vel, tristique pellentesque lacus. ",
            "images": [
                "https://dw-portfolio.appspot.com/images/dw_portfolio_s.jpg"
            ]
        }
    ]
};

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
    "welcomeMessage": "Hi all, welcome",
    "skills": [
        "Front end ninja", "back end ninja", "real living ninja"
    ],
    "biopic": "images/aaa1.png"
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);


    $("#topContacts, #footerContacts").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));


    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill){
            var formatedSkills = HTMLskills.replace("%data%", skill);
        $("#header").append(formatedSkills);
        });
        
    }
};




work.display = function() {
    work.jobs.forEach(function (job) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedEmployerTitle = HTMLworkTitle.replace("%data%", job.title);
        $(".work-entry:last").append(formattedEmployer + formattedEmployerTitle);

        $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));

        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));

        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));

    });
};



projects.display = function () {
    projects.projects.forEach(function (project) {
        $("#projects").append(HTMLprojectStart);

        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));

        if (project.images.length > 0) {
            project.images.forEach(function (image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $("project-entry:last").append(formattedImage);
            });
        }
    });
};



education.display = function () {
    education.schools.forEach(function (school) {
        $("#education").append(HTMLschoolStart);

        $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name));
        $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", school.degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
        
    
    school.majors.forEach(function(major){
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
    });
    });

    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function (course) {
            
             $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.title));
            $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", course.school));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));

        });
    }


};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
