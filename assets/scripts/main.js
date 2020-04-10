const mobileNav = $("#mobileNav");
const navHome = $("#navHome");
const navWriting = $("#navWriting");
const navArt = $("#navArt");
const navAbout = $("#navAbout");
const navContact = $("#navContact");
const navItems = $(".mobile-nav-item");

mobileNav.scroll( () => {
    // scrollValue = mobileNav.getBoundingClientRect();
    homePosition = navHome.position().top-495;
    writingPosition = navWriting.position().top-479;
    console.log("Scroll: "+mobileNav.scrollTop()+"");
    console.log("Home: "+(navHome.position().top-495)+"");
    console.log("writing: "+(navWriting.position().top-479)+"");
    console.log("Art: "+(navArt.position().top-495)+"");
    console.log("Contact: "+(navContact.position().top-495)+"");
    if(homePosition < -20){
        navHome.fadeTo(0,(1-(mobileNav.scrollTop()/70)));
    } 
    // if(navWriting < 70 && navWriting > 10){
    //     navWriting.fadeTo()
    // }
    else{
        navItems.fadeTo(0,1);
    }

});

// MEDIAN SCROLL POSITION 495 navArt.position().top
// TOP SCROLL POSITION 405  mobileNav.scrollTop()
// BOTTOM SCROLL POSITION 551
// SCROLL AMOUNT 228