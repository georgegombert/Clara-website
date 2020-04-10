const mobileNav = document.querySelector("#mobileNav");

mobileNav.addEventListener("scroll", () => {
    // scrollValue = mobileNav.getBoundingClientRect();
    console.log(mobileNav.scrollTop);
});