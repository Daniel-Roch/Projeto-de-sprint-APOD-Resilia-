$('#btn-enviar').click(function(event){
    event.preventDefault()
    var valueData = $('#data-escolhida').val()
    console.log(valueData)
    //agora fiz Ajax no site, onde no final coloco a data
    $.ajax({
        'url': `https://api.nasa.gov/planetary/apod?api_key=wvOmQJqdKJGo9dgb6TgpKXPGsSdffxLcov4TY0wu&date=${valueData}`,
        'success': function(result){
            addPag(result)
        }
    })
$('.invisivel').css('display', 'none')
$('.invisivel-quadro').css('display', 'flex')
})

function addPag(result){
            $('body').css('background-image' , `url(${result.url})`)
            $('#reposta-data').html(`<h1 class="titulo-result">${result.title}</h1>
            <br>
            <h2 class="p-resultado">${result.explanation}</h2>
            <br>
            <a href="${result.url}">Click Aqui para visualizar a imagem melhor.</a>
            <br>
            `)
            var youtube = result.url.substr(12,7) //Saber se na url tem escrito youtube.
            if(youtube == 'youtube'){ // se houve, ele irá adicionar os elementos a baixo.
            $('#reposta-data').append(`<iframe class="video-assistir" width="560" height="315" src="${result.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
            $('body').css('background-image' , `url('./img/astronauta.jpg')`)
            $('#section-reposta').css('display', 'flex')
            $('#section-reposta').css('flex-direction', 'column') //flex-direction: column;
            }
}