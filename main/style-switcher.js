// open toggler

const styleSwitcherToggler = document.querySelector(".style_switcher_toggler");
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style_switcher").classList.toggle("open")
})

// close toggler on scroll

window.addEventListener("scroll", () => {
    if(document.querySelector(".style_switcher").classList.contains("open"))
    {
        document.querySelector(".style_switcher").classList.remove("open")
    }
})

// change colors

const alternativeStyle = document.querySelectorAll(".alternate-style")
function setActiveStyle(color)
{
    alternativeStyle.forEach((style) => {
        if (color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
    
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}

// dark theme

const darkMode = document.querySelector(".day-night");
darkMode.addEventListener("click", () => {
    darkMode.querySelector("i").classList.toggle("fa-sun")
    darkMode.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        darkMode.querySelector("i").classList.add("fa-sun")
    }
    else
    {
        darkMode.querySelector("i").classList.add("fa-moon")
    }
} )