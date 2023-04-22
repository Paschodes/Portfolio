const tablinks = document.querySelectorAll('.tab-links');
const tabcontents = document.querySelectorAll('.tab-contents');

function opentab(tabname) {
    //removes the active-link(color) when you click on de next one
    for(tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }

    //this adds de active-link(color) when you clink on de particular link 
    event.currentTarget.classList.add('active-link');
    //then this adds/displays the link contents
    document.getElementById(tabname).classList.add('active-tab');
}

const sidemenu = document.getElementById('sidemenu');

//function for opening de menu
function openmenu() {
    sidemenu.style.right = '0';
}

// function for closing the menu
function closemenu() {
    sidemenu.style.right = '-200px';
}