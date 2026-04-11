document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            projectName: "Baby Hat",
            imageUrl: "../project/images/baby-hat.jpg",
            width: "600px",
            height: "800px",
            projectDescription: "This is a baby hat. One of my first projects that I made for niece. It made by making a rectangle and closing one of the sides"
        },
        {
            projectName: "Crochet Net",
            imageUrl: "../project/images/crochet-net.jpg",
            width: "600px",
            height: "800px",
            projectDescription: "This is a net that is designed to fit in the corner and act as a shelf for toys. Made by using the granny square stitch pattern in a triangle."
        },
        {
            projectName: "Scrap Blanket",
            imageUrl: "../project/images/blanket.jpg",
            width: "600px",
            height: "800px",
            projectDescription: "This is a blanket that i created out of yarn scraps using the granny square method. I used black to gather connect because of the large amount of colors.  "
        },
        {
            projectName: "Hexagon Sweater",
            imageUrl: "../project/images/sweater.jpg",
            width: "600px",
            height: "800px",
            projectDescription: "This is my first big wearable piece. It is made with the hexagon granny square method. This means making two large 6 sided granny squares."
        }
    ];

    const container = document.querySelector('.container-project-box');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const projectTitle = document.createElement('h2');
        projectTitle.textContent = project.projectName;
        projectCard.appendChild(projectTitle);

        const projectImage = document.createElement('img');
        projectImage.src = project.imageUrl;
        projectImage.width = project.width;
        projectImage.height = project.height;
        projectImage.alt = `${project.projectName} Image`;
        projectCard.appendChild(projectImage);

        const projectInfo = document.createElement('div');
        projectInfo.className = 'project-info';

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.projectDescription;
        projectInfo.appendChild(projectDescription);

        const logosDiv = document.createElement('div');
        logosDiv.className = 'logos';


        projectInfo.appendChild(logosDiv);
        projectCard.appendChild(projectInfo);
        container.appendChild(projectCard);
    });
});