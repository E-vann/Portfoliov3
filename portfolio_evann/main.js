const works = [{
        image: 'images/spotisigner.SVG',
        title: 'Spotisigner',
        text: 'Spotisigner est une mini-web application permettant au musiciens et designer de pré-Visualiser l\'aspect de leurs single/album. J\'ai rélaisé ce projet à la rentrée 2020 pour m\'autoformer en profondeur à Javascript. ',
        date: 'octobre 2020',
        type: 'Web application',
        link: 'https://spotisigner.netlify.app',
        images: [
            'images/Spotisigner/spotisigner.SVG',
            'images/Spotisigner/miniature 1.PNG',
            'images/Spotisigner/miniature 2.PNG'

        ]
    },
    {
        image: 'images/instagram.JPG',
        title: '@E_vann Design',
        text: '@E_vann-Design est un projet sur le long terme. C\'est un compte Instagram de création graphique sur le thème de la musique urbaine. Ce projet me permet d\'allier deux de mes passions et de pouvoir les partager auprès d\'une communauté',
        date: 'En cours - Janvier 2020',
        type: 'Design Graphique',
        link: 'https://www.instagram.com/e_vanndesign/?hl=us',
        images: [
            'images/insta/miniature_1.JPG',
            'images/insta/miniature_2.JPG',
            'images/insta/miniature_3.JPG'
        ]
    },
    {
        image: 'images/PAO.JPG',
        title: 'New Vibes',
        text: 'New vibes est un projet de PAO réalisé en MMI dans le cadre de cours sur la communication écrite, et de publication assistée par ordinateur. ',
        date: 'Mars 2019',
        type: 'Redaction & PAO',
        link: './docs/New Vibes.PDF',
        images: [
            'images/PAO/page_1.JPG',
            'images/PAO/page_2.JPG',
            'images/PAO/page_3.JPG',
            'images/PAO/page_4.JPG'

        ]
    }, {
        image: 'images/earthly/earthly.JPG',
        title: 'Earthly',
        text: 'Dans le cadre des projets tuteurés de première année de DUT MMI, nous devions créer un site pour lutter contre un probleme de société. C\'est avec mon groupe que nous avons créer Earthmu. C\'est un site proposant une carte intéractive, ainsi qu\'un forum et une page éditoriale. Sur ce projet, mon principal rôle était le maquettage et l\'intégration web. J\'ai notamment utlisé Invision, puis ensuite développé en HTML, CSS, jQuery et PHP',
        date: '2019',
        type: 'Web-Application',
        link: 'https://github.com/E-vann/Earthly',
        images: [
            './images/earthly/1.JPG',
            './images/earthly/2.JPG',
            './images/earthly/3.JPG',
            './images/earthly/4.JPG',
        ]
    }, {
        image: 'images/notebook.JPG',
        title: 'Créations graphiques',
        text: 'Galerie de mes créations personnelle et professionelles de dessins physique ou digital',
        date: 'En cours - 2018',
        type: 'Galerie de création graphique ',
        link: '',
        images: [
            './images/dessins/carpe.JPG',
            './images/dessins/crane.JPG',
            './images/dessins/fille.JPG',
            './images/dessins/hopper.JPG',
            './images/dessins/polpito.JPG',
            './images/dessins/visage.JPG',
            './images/dessins/orque.JPG',
            './images/dessins/travis.JPG'

        ]
    }
]

let index = 0

const plus = document.querySelector("#more")
const exit = document.querySelector(".close")

const nextBtn = document.querySelector("#suivant")
const previousBtn = document.querySelector("#precedent")

const html = document.querySelector("html")
const slider = document.querySelector("#slider")
const image = document.querySelector("#slide")
const titre = document.querySelector("#slider h3")
const type = document.querySelector("#slider h4")
const date = document.querySelector("#slider p")
const navbar = document.querySelector("header nav ").children
const timeline = document.querySelector("#timeline")

exit.addEventListener("click", () => {
    html.style.overflowY = "scroll";

})

nextBtn.addEventListener("click", () => {
    updateSlide(1)
})

previousBtn.addEventListener("click", () => {
    updateSlide(-1)
})

const updateSlide = (direction) => {
    index = index + direction

    if (index === works.length) {
        index = 0
    } else if (index === -1) {
        index = works.length - 1
    }

    image.src = works[index].image
    titre.innerHTML = works[index].title
    type.innerHTML = works[index].type
    date.innerHTML = works[index].date
};


const toggleOverlay = () => {
    const overlay = document.querySelector("#popup")
    overlay.classList.toggle('visible')
}
exit.addEventListener('click', toggleOverlay)

plus.addEventListener('click', () => {

    const currentWork = works[index]
    document.querySelector("html").style.overflowY = "hidden";


    const titre = popup.querySelector("h3")
    const type = popup.querySelector("h4")
    const date = popup.querySelector("#date")
    const texte = popup.querySelector("#text")
    const imagesContainer = popup.querySelector('#extraits')
    const link = popup.querySelector('a.link')

    texte.innerText = currentWork.text
    titre.innerText = currentWork.title
    type.innerText = currentWork.type
    date.innerText = currentWork.date
    link.href = currentWork.link
    imagesContainer.innerHTML = ""

    for (const image of currentWork.images) {
        imagesContainer.innerHTML += `<img src="${image}" id="miniature" alt="${titre}" />`
    }

    toggleOverlay()
})

let vertical = 0;

setInterval(function() {

    let position = ((window.scrollY + vertical) / (html.offsetHeight) * 120)
    timeline.style.width = `${position}vw`
    for (let i = 0; i < navbar.length; i++) {
        if ((position > 16 && position < 35) || (position > 48 && position < 70) || (position > 82)) {
            navbar[i].style.color = 'white'
            timeline.style.backgroundColor = 'white'
        } else {
            navbar[i].style.color = '#a384ff'
        }
    }
}, 1);