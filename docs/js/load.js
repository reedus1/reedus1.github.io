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