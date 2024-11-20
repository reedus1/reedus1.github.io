function load_data(){
    const fall_back_exp = `<li>
            <strong>Information Technology Intern (Job Shadow)</strong> — Beckley VA Hospital IT Department (January 2023 – April 2023)
            <ol style="list-style:disc;">
              <li>Managed IT inventory and supported ticketing system operations.</li>
              <li>Installed and configured critical hardware, including printers, monitors, and new computers, to enhance operational efficiency and user experience.</li>
              <li>Executed comprehensive network installations, including the creation and testing of network drops, ensuring robust and reliable connectivity.</li>
            </ol>
        </li>
        <li>
            <strong>Professor Assistant (Student Worker)</strong> — West Virginia University Institute of Technology (August 2022 – December 2022)
            <ol style="list-style:disc;">
                <li>Conducted in-depth research on computer science projects under the guidance of Dr. Munasinghe, focusing on innovative problem-solving and practical applications.</li>
              <li>Collaborated closely with Dr. Munasinghe in weekly sessions to refine project goals, enhance methodologies, and ensure the timely delivery of high-quality outcomes.</li>
            </ol>
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
            const task_list = document.getElementById('tasks');
            data.experience.forEach(exp =>{
                const li = document.createElement('li');
                const li_tasks = document.createElement('li');
                li.innerHTML = `
                <strong>Job Title:</strong> ${exp.title} <br><strong>Company:</strong> 
                ${exp.company}<br> <strong>Dates:</strong>${exp.fromtodate}<br><strong>Tasks:</strong><br>`;
                data.experience.duties.forEach(task =>{
                    li_tasks.innerHTML = `<li>${exp.duties.join('<br>')}</li>`
                })
                //Append element to webpage
                document.getElementById('experience').appendChild(li);
                document.getElementById('tasks').appendChild(li_tasks);
            })
        })
        .catch(e =>{//Content json fails to load, do this
            fallback_exp_content.innerHTML = fall_back_exp
        })
}
//Loads the Light Mode for the webpage
document.addEventListener('DOMContentLoaded', () => {
    // Function to apply the selected mode
    function applyMode(mode) {
        const stylesheet = document.getElementById('style-sheet-theme');
        if (mode === '0') {
            stylesheet.href = './css/style_dark_mode.css';
            localStorage.setItem('light_mode', '0');
        } else {
            stylesheet.href = './css/styles_light_mode.css';
            localStorage.setItem('light_mode', '1');
        }
    }

    // Initialize the mode based on localStorage
    function initializeMode() {
        const savedMode = localStorage.getItem('light_mode') || '1'; // Default to light mode
        applyMode(savedMode);
    }

    // Toggle the mode when the button is clicked
    function toggleMode() {
        const currentMode = localStorage.getItem('light_mode');
        const newMode = currentMode === '0' ? '1' : '0'; // Toggle between modes
        applyMode(newMode);
    }

    // Check if the button exists
    const toggleButton = document.getElementById('toggle-button');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleMode);
    } else {
        console.error('Toggle button not found in the DOM.');
    }

    // Initialize the mode on page load
    initializeMode();
});

//Loads a page in a new window
function load_page_new(src)
{
    window.open(src,'_blank');
}
//Loads a page
function load_page(src)
{
    window.location.href = (src);
}
function disable_context()
{
    document.addEventListener('contextmenu',(e) =>e.preventDefault());
}
