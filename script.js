var settingMenu = document.querySelector('.settings-menu');
var darkBtn = document.getElementById('dark-btn');

function settingsMenuToggle(){
    settingMenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light"){
    document.classList.remove("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    document.classList.add("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}