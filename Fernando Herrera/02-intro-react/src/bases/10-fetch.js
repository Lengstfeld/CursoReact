const ApiKey = "AaiP5US1Gc2FrHpVjrd9OSPa4rMmDcPr";
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ApiKey}`);
peticion.then(resp => resp.json())
        //agregar desestructuracion para sacar la data
        .then(({data}) => {
            const{url} = data.images.original;
            console.log(url)
            const img = document.createElement('img');
            img.src = url;
            document.body.append(img);
        })
        .catch(console.warn)