$(document).ready(function(){
    document.querySelector('header button')
    $('#btn-cancelar')

    document.querySelector('header button').addEventListener('click', function(e){

    })

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp();
    })

 

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const NovoItem = $('<li style ="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(NovoItem);
        $(`
        <div class="overlay-imagem-link">
        <a  href="${enderecoDaNovaImagem}" target ="_blank"> title="Ver imagem em tamanho real"
        Ver imagem em tamanho real
        </a>

        `).appendTo(NovoItem);
        $(NovoItem).appendTo('ul')
        $(NovoItem).fadeIn();
        $('#endereco-imagem-nova').val('');
    })
})

