$('#btn-enviar').click(function(event){
    event.preventDefault()
    var valueData = $('#data-escolhida').val()
    //agora fiz Ajax no site, onde no final coloco a data
    $.ajax({
        'url': `https://api.nasa.gov/planetary/apod?api_key=nfTkgOMutFHRBDuseKJBpMeqlFXcKuhPn51zZb0o&date=${valueData}`,
        'success': function(result){
            addPagSuccess(result)

        },'error': function(error){
            $('#mensagem-erro').html(`<h1 class="mensagem-erro">Erro 404.</h1> 
            <br>
            <h1 class="mensagem-erro">Coloque uma data válida.</h1>
            <br>
            <button class="button-erro" onclick="location.reload()">Clique para voltar</button>`)
            $('body').css('background-image' , `url(./img/astronauta.jpg)`)
            $('#mensagem-erro').css('display', 'flex')
            $('#section-reposta').remove()
            $('#btn-enviar').remove()
            $('.form-section').remove()
        }
    })
$('.invisivel').css('display', 'none')
$('.invisivel-quadro').css('display', 'flex')
})

function addPagSuccess(result){
    $('body').css('background-image' , `url(${result.url})`)
    $('#reposta-data').html(`<h1 class="titulo-result">${result.title}</h1>
    <br>
    <h2 class="p-resultado">${result.explanation}</h2>
    <br>
    <a id="link-resultado" href="${result.url}">Click Aqui para visualizar a imagem melhor.</a>
    <br>
    `)
    var youtube = result.url.substr(12,7) //Saber se na url tem escrito youtube.
    if(youtube == 'youtube'){ // se houve, ele irá adicionar os elementos a baixo.
    $('#reposta-data').append(`<iframe class="video-assistir" width="560" height="315" src="${result.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    $('body').css('background-image' , `url('./img/astronauta.jpg')`)
    $('#section-reposta').css('display', 'flex')
    $('#section-reposta').css('flex-direction', 'column') //flex-direction: column;
    }else{
        $('#reposta-data').append(`<img src="${result.url}" class="img-resultado" alt="${result.url}">`)
    }
    //Se existe copyright.
    if(result.copyright != null){
        $('#reposta-data').append(`<h1 class="titulo-result">@copyright: ${result.copyright}</h1>`)
    }
}
