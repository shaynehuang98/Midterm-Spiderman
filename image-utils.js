function loadSpideyAnimation(img, numImages, xStart, yStart){
    const images = Array.from({length: numImages}, (el, i) => {
        return img.get( i * 70 + xStart, yStart, 50, 70)
    })
    return images
} 
