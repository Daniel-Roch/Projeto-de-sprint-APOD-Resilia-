$('#btn-enviar').click(function(event){
    event.preventDefault()
    var valueData = $('#data-escolhida').val()
    console.log(valueData)
    //agora fiz Ajax no site, onde no final coloco a data
    $.ajax({
        'url': `https://api.nasa.gov/planetary/apod?api_key=wvOmQJqdKJGo9dgb6TgpKXPGsSdffxLcov4TY0wu&date=${valueData}`,
        'success': function(result){
            console.log(result)
            $('body').css('background-image' , `url(${result.url})`)
            $('#reposta-data').html(`<h1 class="titulo-result">${result.title}</h1>
            <br>
            <p class="p-resultado">${result.explanation}</p>
            <br>
            <a href="${result.url}">Click Aqui para visualizar a imagem melhor.</a>`)
            //colocarNaPag(result) // Peguei um função pra jogar em outro lugar
        }
    })
$('.invisivel').css('display', 'none')
$('.invisivel-quadro').css('display', 'flex')
})


/*function colocarNaPag(result){
    $('#reposta-data').html(`<img class="img-result" src=${result.hdurl}>`)
    $('.img-result').css('width', '50vh')
    $('.img-result').css('height', '50vh')
}*/
//se puxar a data : 28/09/2019 aparecer uma frase em homenagem a bia