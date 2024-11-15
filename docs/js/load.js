function load_data(){
    fetch('../json/data.json')
    .then(res => { 
        if(!res.ok)
        {
            throw new Error('Failed to load JSON');
        }
        return res.json();
    }).then(data =>{
        const expList = document.getElementById('experience');
        data.experience.forEach(exp =>{
            const li = document.createElement('li');
            li.innerHTML = `
            <strong>Job Title:</strong> ${exp.title} <br><strong>Company:</strong> 
            ${exp.company}<br><strong>Duties:</strong> ${exp.duties.join('<br>')}`
            //Append element to webpage
            document.getElementById('experience').appendChild(li);
        })
        // Populate the skills and education from JSON data
        const skillsList = document.getElementById('skills');
        data.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });
        //Create Education List 
        const educationList = document.getElementById('education');
        data.education.forEach(edu => {
            const li = document.createElement('li');
            li.textContent = `${edu.degree} from ${edu.institution} (${edu.year})`;
            educationList.appendChild(li);
        });
    })
}