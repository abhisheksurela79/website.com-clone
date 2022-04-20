const menu_icon = document.getElementById('menu-icon');


menu_icon.addEventListener('click', ()=> {
    let classToAdd = ["remove-mobile-nav", "remove-mobile-nav",
                        "close-icon-mobile", "top-navbar-mobile-container", "top-navbar-mobile-items"]

    let topNavbar = menu_icon.parentElement.parentElement;
    let navbar = topNavbar.parentElement
    let bottomNavbar = topNavbar.parentElement.children[1]
    
    for (let pointer = 0; pointer < classToAdd.length; pointer++) {
        const classElement = classToAdd[pointer];

        if (pointer <= 3) {
            // Removing logo and menu and login from topNavbar

            topNavbar.children[pointer].classList.add(classElement)

        }else {
            for (let index = 0; index < topNavbar.children[3].children.length; index++) {
            const eachItem = topNavbar.children[3].children[index];
            eachItem.classList.add("top-navbar-mobile-items")
    
            }

        }
        
    }


    bottomNavbar.classList.add("bottom-navbar-mobile")    // Adding bottom navbar
    navbar.classList.add("main-nav")

})




const close_icon = document.querySelector('.close-icon');
close_icon.addEventListener('click', ()=> {
        classToRemove = ["remove-mobile-nav", "remove-mobile-nav",
                            "close-icon-mobile", "top-navbar-mobile-container", "top-navbar-mobile-items"]
    
        let topNavbar = menu_icon.parentElement.parentElement;
        let navbar = topNavbar.parentElement
        let bottomNavbar = topNavbar.parentElement.children[1]
        
    
        for (let pointer = 0; pointer < classToRemove.length; pointer++) {
            const classElement = classToRemove[pointer];
    
            if (pointer <= 3) {
                // Removing logo and menu and login from topNavbar
    
                topNavbar.children[pointer].classList.remove(classElement)
    
            }else {
                for (let index = 0; index < topNavbar.children[3].children.length; index++) {
                const eachItem = topNavbar.children[3].children[index];
                eachItem.classList.remove("top-navbar-mobile-items")
        
                }
    
            }
            
        }

        bottomNavbar.classList.remove("bottom-navbar-mobile")    // removing bottom navbar
        navbar.classList.remove("main-nav")
    
    })
