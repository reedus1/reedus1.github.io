function load_data(){
    try{
        fetch('../json/data.json')
        .then(res => { 
            if(!res.ok)
            {
                throw new Error('Failed to load JSON');
            }
            return res.json();
        })
        .then(data =>{
            //Create Education List 
            const educationList = document.getElementById('education');
            data.education.forEach(edu => {
                const li = document.createElement('li');
                li.textContent = `${edu.degree} from ${edu.institution} (${edu.year})`;
                educationList.appendChild(li);
            });
            // Populate the skills and education from JSON data
            const it_skillsList = document.getElementById('it_skills');
            data.it_skills.forEach(it_skill => {
                const li = document.createElement('li');
                li.textContent = it_skill;
                it_skillsList.appendChild(li);
            });
            // Populate the skills and education from JSON data
            const skillsList = document.getElementById('skills');
            data.skills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                skillsList.appendChild(li);
            });
            //Experience, From json data
            const expList = document.getElementById('experience');
            data.experience.forEach(exp =>{
                const li = document.createElement('li');
                li.innerHTML = `
                <strong>Job Title:</strong> ${exp.title} <br><strong>Company:</strong> 
                ${exp.company}<br><strong>Duties:</strong><br> ${exp.duties.join('<br>')}`
                //Append element to webpage
                document.getElementById('experience').appendChild(li);
            })
        })
    }
    catch(e)
    {
        console.log(e)
        const container = document.getElementById('resume-container');
        container.innerHTML = '<p>Sorry, we are unable to load the resume at this time. Please <a href="resume.pdf" target="_blank">click here</a> to view the PDF version.</p>';
    }
}