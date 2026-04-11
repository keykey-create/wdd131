document.addEventListener('DOMContentLoaded', () => {

    const aboutMyself = document.querySelector('.about-myself');
    if (aboutMyself) {
        const aboutMyselfContent = `
            <h2>Time well spent with my Mom</h2>
            <p>
                When I was little whenever my mom sat down she would start some sort of crochet project. </p> 
            <p>
                Watching her working and creating really inspired me to pick up crochet. My first ever project was one my Mom helped me with. 
            </p>     
            <p>
                It was a misshapen scarf that has long since fallen apart, but I adored that time I spent with my mom.
            </p>
            <p>    
                Now every time I crochet I think of my Mom, and the time we spent together. 
            </p>
        `;
        aboutMyself.innerHTML = aboutMyselfContent;
    }

    const education = document.querySelector('.education');
    if (education) {
        const educationContent = `
            <h2>Additional Training</h2>
            <p>
                My mom was entirely self taught in her skills, so when i wanted to advance in my skills i had to look elsewhere.  
            </p>
            <p>
                This started with watching youtube videos. I would watch them and follow along stich for stich. 
            </p>
            <p>    
                Then I transitioned to learning how to read patterns. Then make those patterns fit me.  
            </p>
            <p>
                Now I am still learning, but I have paved the ground work for more complicated projects.
            </p>
        `;
        education.innerHTML = educationContent;
    }
});