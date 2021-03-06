const parseJSON = async (url) => {
    const response = await fetch(url)
    return response.json()
}

const swiperComponent = (data, component) => {
    return `
        <div class="swiper">
            <div class="swiper-wrapper"> 
                ${data.map(img => component(img)).join("")}
            </div>
        </div>
    `
}

const swiperSlideComponent = ({fileName, title}) => {
    return `
        <div class="swiper-slide">
            <h2>${title}</h2>
            <img src="/pub/img/${fileName}">
        </div>
    `
}

const loadEvent = async () => {
    const rootElement = document.getElementById("root")
    const result = await parseJSON("/image-list")

    rootElement.insertAdjacentHTML("beforeend", swiperComponent(result, swiperSlideComponent))
    //mivel callback function nem kell meghivni, lefuttatni csak beadni neki
    
    const swiper = new Swiper(".swiper", {
        loop: true,
    })
    console.log(swiper);
}
window.addEventListener("load", loadEvent);