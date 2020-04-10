const mobileNav = $("#mobileNav");
const navHome = $("#navHome");
const navWriting = $("#navWriting");
const navArt = $("#navArt");
const navAbout = $("#navAbout");
const navContact = $("#navContact");
const navItems = $(".mobile-nav-item");
let homePosition, writingPosition, artPosition, aboutPosition, contactPosition;
const navArray = [navHome, navWriting, navArt, navAbout, navContact];
mobileNav.scroll( () => {
    // scrollValue = mobileNav.getBoundingClientRect();
    let positionArray = [];
    homePosition = navHome.position().top-400;
    writingPosition = navWriting.position().top-398;
    artPosition = navArt.position().top-402;
    aboutPosition = navAbout.position().top-400;
    contactPosition = navContact.position().top-400;
    positionArray.push(homePosition, writingPosition, artPosition, aboutPosition, contactPosition);
    // console.log("Scroll: "+mobileNav.scrollTop()+"");
    // console.log("Scroll home: "+navHome.scrollTop()+"");
    // console.log("Home: "+(navHome.position().top-401)+"");
    // console.log("writing: "+(navWriting.position().top-398)+"");
    console.log("Art: "+(navArt.position().top-402)+"");
    // console.log("About: "+(navAbout.position().top-400)+"");
    // console.log("Contact: "+(navContact.position().top-400)+"");
    
    // if(artPosition < 50){
    //     navArt.fadeTo(0,(positionArray[2]/50));
    //     console.log(positionArray[2]);
    // } 
    // else if(artPosition > 100){
    //     navArt.fadeTo(0,(-1/50)*positionArray[2]+3);
    //     console.log((-1/50)*positionArray[2]+3);
    //     // console.log(positionArray[position]);
    // }
    // else{
    //     navArt.fadeTo(0,1);
    // }


    for(position in positionArray){
        console.log(positionArray);
        if(positionArray[position] < 40){
            navArray[position].fadeTo(0,(positionArray[position]/40));
            console.log("hit top");
        } 
        else if(positionArray[position] > 110){
            navArray[position].fadeTo(0,(-1/40)*positionArray[position]+(15/4));
            console.log("hit Bottom");
        }
        else{
            // navArray[position].fadeTo(0,1);
        }
    }

});
//scroll length 150 so half is 76 ant the top is 0

// MEDIAN SCROLL POSITION 495 navArt.position().top
// TOP SCROLL POSITION 405  mobileNav.scrollTop()
// BOTTOM SCROLL POSITION 551
// SCROLL AMOUNT 228
