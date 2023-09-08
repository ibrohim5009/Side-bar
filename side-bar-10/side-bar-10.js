const btn_toggle = document.querySelector('.btn-toggle');
const sidebar = document.querySelector('.sidebar');
const logo = document.querySelector('.logo');
const wrapper = document.querySelector('.wrapper');

btn_toggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        logo.setAttribute("style", "display:flex");
        wrapper.setAttribute("style", "left:240px;width:calc(100%-240px);");
        return
    }
    logo.setAttribute("style", "display:none");
    wrapper.setAttribute("style", "left:85px");

})