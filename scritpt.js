document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu && closeMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        closeMenu.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }
});
const choose =[
    {
        title:"why choose us",
        text:"The main reason is because our<br> competitors have disgusting<br> sites, but we can' t write that<br> here, so the text here will be<br> different",
        image1:"asset/Ellipse 2.svg",
        image2:"asset/payment.svg",
    },
    {   title:"payment methods",
        text:"We have a lot of them, from<br> cryptocurrencies to barter for potatoes",
        image1:"asset/Ellipse 2.svg",
        image2:"asset/camera.svg",
    },
    {
        title:"Simple search process",
        text:"We checked it out, even the kid did it,<br> but it was my mom's friend's son",
        image1:"asset/Ellipse 2.svg",
        image2:"asset/headphone.svg",

    },
    {
        title:"24/7 Support",
        text:"Is there something you don't<br> understand? Feel free to call us.<br> Phone number in the footer",
        image1:"asset/Ellipse 2.svg",
        image2:"asset/nice.svg",
    },
    {
        title:"We are nice",
        text:"Fantasy is over, there will be something<br> really convincing here",
        image1:"asset/Ellipse 2.svg",
        image2:"asset/nice.svg",
    }


];
const renderchoose = choose => {
    const chooseContainer = document.getElementById('chooseContainer');
    choose.forEach(choose => {
        const chooseHTML = `
        <div class="choose-content>
            <h1>${choose.title}</h1>
            <p>${choose.text}</p>
            <div class="choose-Container">
                <img src="${choose.image1}" class="elps">
                <img src="${choose.image2}' class="pay">
            </div>
        </div>
        `;
        container.innerHTML += chooseHTML;
    });
};

