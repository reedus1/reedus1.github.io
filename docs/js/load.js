function load_data(){
    const fall_back_exp = `        <li>
            <strong>Information Technology Intern (Job Shadow)</strong> — Beckley VA Hospital IT Department (January 2023 – April 2023)
            <ul>
                <li>Managed IT inventory and supported ticketing system operations.</li>
                <li>Installed and configured printers, monitors, and new computers.</li>
                <li>Conducted network installations, including creating and testing network drops.</li>
            </ul>
        </li>
        <li>
            <strong>Professor Assistant (Student Worker)</strong> — West Virginia University Institute of Technology (August 2022 – December 2022)
            <ul>
                <li>Conducted research on computer science projects under Dr. Munasinghe.</li>
                <li>Collaborated weekly with Dr. Munasinghe to refine project progress and deliverables.</li>
            </ul>
        </li>`;
    fallback_exp_content = document.getElementById("experience");
    fetch('../json/data.json')
    .then(res => { 
        if(!res.ok)
        {
            throw new Error('Failed to load JSON');
        }
        return res.json();
    })
    .then(data =>{
        // Populate the IT skills from JSON data
            /*const it_skillsList = document.getElementById('it_skills');
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
                */
            //Experience, From json data
            const expList = document.getElementById('experience');
            data.experience.forEach(exp =>{
                const li = document.createElement('li');
                li.innerHTML = `
                <strong>Job Title:</strong> ${exp.title} <br><strong>Company:</strong> 
                ${exp.company}<br>Dates:</strong>${exp.fromtodate}<br><strong>Duties:</strong><br><strong>${exp.duties.join('<br>')}`
                //Append element to webpage
                document.getElementById('experience').appendChild(li);
            })
        })
        .catch(e =>{//Content json fails to load, do this
            fallback_exp_content.innerHTML = fall_back_exp
        })
}
//Toggle to light or dark mode for the webpage
function light_mode_toggle() {
    const stylesheet = document.getElementById('style-sheet-theme');
    const timestamp = new Date().getTime();  // Add timestamp to bypass cache

    // Check if the current stylesheet is light mode
    if (stylesheet.href.includes('styles_light_mode.css')) {
        // Switch to dark mode
        stylesheet.href = './css/style_dark_mode.css?${timestamp}';
    } else {
        // Switch to light mode
        stylesheet.href = './css/styles_light_mode.css?${timestamp}';
    }
}
//Load the Contact Page
function load_contact_page()
{
    window.open('../contact.html','_blank');
}