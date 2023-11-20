const allowedGames = [
    {
        name: 'First Orchard' ,
        id: 41302
    },
    {
        name: 'My First Building Site',
        id: 314348
    }, 
    {
        name: 'Hungry as a Bear' ,
        id: 159536
    },
    {
        name: 'Little Builders' ,
        id: 131497
    },
    {
        name: 'Forest Friends' ,
        id: 359975
    },
    {
        name: 'Rainy Ranch' ,
        id: 400708
    },
    {
        name: 'Rhino Hero Junior',
        id: 321711
    }
]
const element = document.getElementById('age2button');
element.addEventListener('click', (event) => {
    fetch('https://boardgamegeek.com/xmlapi/boardgame/41302,314348,159536,131497,359975,400708,321711')
        .then( res => res.text());
        .then( xml => console.log(xml));
        .then(data => {
            data.forEach(allowedGames[0]=> {
                const markup = `<li>${allowedGames.name.bggrating}</li>`
            });
        })
        catch(error => console.log(error));

})
