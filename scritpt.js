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
const chooseContainer =[
    {   
        image1:"asset/payment.png",
        title:"payment methods",
        text:"We have a lot of them, from<br> cryptocurrencies to barter for potatoes",
        
    },
    {
        image1:"asset/camera.png",
        title:"Simple search process",
        text:"We checked it out, even the kid did it,<br> but it was my mom's friend's son",

    },
    {
        image1:"asset/hdphn.png",
        title:"24/7 Support",
        text:"Is there something you don't<br> understand? Feel free to call us.<br> Phone number in the footer",
    },
    {
        image1:"asset/nice.png",
        title:"We are nice",
        text:"Fantasy is over, there will be something<br> really convincing here",
    }


];
const renderchoose = chooseContainer => {
    const container = document.getElementById('chooseContainer');
    chooseContainer.forEach(chooseContainer => {
        container.innerHTML += `
            <div>
                    <img src="${chooseContainer.image1}" alt="">
                    <h4>${chooseContainer.title}</h4>
                    <h3 class="note">${chooseContainer.text}</h3>
            </div>
        `;
    });
}
renderchoose(chooseContainer);

const offersContainer =[
    {
        image1: "asset/room-1.svg", 
        image2: "asset/ratings.png",
        image3: "asset/favorite.png",
        title:"Wilderness Club at Big<br> Ceddar",
        description:"28 October — 1 November",
        date:"<span> $2016</span> /6 night",
    },
    {
        image1: "asset/room2.svg", 
        image2: "asset/ratings.png",
        image3: "asset/favorite.png",
        title:"Wilderness Club at Big<br> Ceddar",
        description:"28 October — 1 November",
        date:"<span> $2016</span> /6 night", 
    },
    {
        image1: "asset/room3.svg", 
        image2: "asset/ratings.png",
        image3: "asset/favorite.png",
        title:"Wilderness Club at Big<br> Ceddar",
        description:"28 October — 1 November",
        date:"<span> $2016</span> /6 night",
    }

];
const renderoffers = offersContainer => {
    const container = document.getElementById('offersContainer');
    offersContainer.forEach(offersContainer => {
        container.innerHTML += `
                <div class="room">
                    <img src=${offersContainer.image1} alt="" class="bed">
                    <div>
                        <img class="rate" src=${offersContainer.image2} alt="">
                        <img class="hrt" src=${offersContainer.image3} alt="">
                    </div>
                    <h2>Wilderness Club at Big<br> Ceddar</h2>
                    <p>28 October — 1 November</p>
                    <h3><span> $2016</span> /6 night</h3>
                </div>
        `;
    });
}
renderoffers(offersContainer);
const reviewContainer =[
    {
        image1: "asset/human1.svg", 
        para:"I quickly found the right tour for me,<br> but I had a few questions about the<br> hotel, I wrote to tech support and they<br> answered all my questions within an<br> hour. The vacation itself was perfect.<br> Thank you very much. I will come back<br> again and again.",
        description:"Jannike Borg,<span> Publisher</span>", 
    },
    {
        image2: "asset/human2.svg", 
        para:"I quickly found the right tour for me,<br> but I had a few questions about the<br> hotel, I wrote to tech support and they<br> answered all my questions within an<br> hour. The vacation itself was perfect.<br> Thank you very much. I will come back<br> again and again.",
        description:"Jannike Borg,<span> Publisher</span>", 
    },
    {
        image3: "asset/human3.svg", 
        para:"I quickly found the right tour for me,<br> but I had a few questions about the<br> hotel, I wrote to tech support and they<br> answered all my questions within an<br> hour. The vacation itself was perfect.<br> Thank you very much. I will come back<br> again and again.",
        description:"Jannike Borg,<span> Publisher</span>", 
    }
];
const rendereview = reviewContainer => {
    const container = document.getElementById('reviewContainer');
    reviewContainer.forEach(reviewContainer => {
        container.innerHTML += `
                <div>
                    <img src=${reviewContainer.image1} alt="" class="hm">
                    <img src=${reviewContainer.image2} alt="" class="hm">
                    <img src=${reviewContainer.image3} alt="" class="hm">
                    <p>I quickly found the right tour for me,<br> but I had a few questions about the<br> hotel, I wrote to tech support and they<br> answered all my questions within an<br> hour. The vacation itself was perfect.<br> Thank you very much. I will come back<br> again and again.</p>
                    <h2>Jannike Borg,<span> Publisher</span></h2>
                </div>
        `;
    });
}
rendereview(reviewContainer);

const postsContainer = [
    {
        image1: "asset/rock.svg", 
        date:  "May 23,2022",
        image2: "asset/5 m.png",
        title:"My trip to Athens",
        description:"It would seem that in a city where<br> Theseus, Plato and Epicurus once<br> walked, the very idea of the subway is<br> alien to the city, but already...", 
    },
    {
        image1: "asset/Road.svg", 
        date:  "May 22,2022",
        image2: "asset/1 m.png",
        title:"Vilnius resorts",
        description:"I haven't seen any resorts in Vilnius, but<br> there are wonderful people and pubs", 
    },
    {
        image1: "asset/plane.svg", 
        date:  "May 20,2022",
        image2: "asset/15 m.png",
        title:"Tips for flying on plane",
        description:"If you have a fear of flying, here's a<br> helpful tip: bring your co-pilot so you can<br> take a nap while he steers the plane for<br> you", 
    }
];
const renderposts = postsContainer => {
    const container = document.getElementById('postsContainer');
    postsContainer.forEach(postsContainer => {
        container.innerHTML += `
                <div>
                    <img src="${postsContainer.image1}" class="rock">
                    <img src="${postsContainer.image2}" id="clock">
                    <div class="time">
                        <h2>${postsContainer.date}</h2>
                    </div>
                    <h3>${postsContainer.title}</h3>
                    <p>${postsContainer.description}</p>
                </div>
        `;
    });
}
renderposts(postsContainer);




