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
            // Populate the IT skills from JSON data
            const it_skillsList = document.getElementById('it_skills');
            for(const category in data.it_skills)
            {
                const section = document.createElement('section');
                //Category title
                const title = document.createElement('h3');
                title.textContent = category;
                section.appendChild(title);
                //List of items from the category
                const list = document.createElement('ul');
                data.it_skills[category].forEach(item =>{
                    //Create the List Items
                    const li = document.createElement('li');
                    li.textContent = item;
                    list.appendChild(li);
                })
                //Append the list
                section.appendChild(list);
                //Append the section to main container
                it_skillsList.appendChild(section);
            }

            // Populate the skills and education from JSON data
            const skillsList = document.getElementById('skills');
            let item_list = "";
            //Loop through the JSON data and append them to the string list 
            data.skills.forEach((skill,index) => {
                item_list += (skill);
                if (index < data.skills.length - 1){
                    item_list += ', ' //Adds the comma to the list of items
                }
            });
            //Set the content of the Skills Element
            skillsList.appendChild(item_list);
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
//Toggle to light or dark mode for the webpage
function light_mode_toggle()
{
    const stylesheet = document.getElementById('style-sheet-theme');
    // Check if the current stylesheet is dark mode
    if (stylesheet.href.includes('./css/styles_light_mode.css')) {
        // Switch to dark mode
        stylesheet.href = './css/style_dark_mode.css';
    } else {
        // Switch to light mode
        stylesheet.href = './css/styles_light_mode.css';
    }
}