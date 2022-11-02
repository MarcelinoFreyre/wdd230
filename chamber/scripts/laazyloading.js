const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 1
};

const loadImages = (image) => {
    let valor = image.getAttribute('data-src');
    image.setAttribute('src', valor);
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};
//debugger
if ('IntersectionObserver' in window) 
{
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
    
    items.forEach(item => {
        //debugger;
        if (item.isIntersecting) {
            loadImages(item.target);
            imgObserver.unobserve(item.target);
        }
    })    ;
    }, 
    
    imgOptions);

    imagesToLoad.forEach(img => {
        imgObserver.observe(img);
    });
} 

else {
    imagesToLoad.forEach(img => {
        loadImages(img)
    })
}