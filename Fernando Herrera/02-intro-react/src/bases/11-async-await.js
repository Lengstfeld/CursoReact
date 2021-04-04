const getImg = async () => {
    try {
        const apiKey = "AaiP5US1Gc2FrHpVjrd9OSPa4rMmDcPr";
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json()
        const{url} = await data.images.original;
        console.log(url)
        const img = await document.createElement('img');
        img.src = url;
        document.body.append(img);        
    } catch (error) {
        console.error(error)
    }    
}
getImg();