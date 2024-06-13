$(document).ready(function(){
    function carregarConteudo(url) {
        $.ajax({
            url: url,
            type: 'GET',
            success: function(data) {
                $('#main-content').html(data);
            },
            error: function(xhr, status, error) {
                console.error('Erro ao carregar conteúdo: ' + error);
            }
        });
    }
    $('#link-inicial').click(function(e){
        e.preventDefault();
        carregarConteudo('../classes/home.php');
    });

    $('#link-produtos').click(function(e){
        e.preventDefault();
        carregarConteudo('../classes/produtos.php');
    });

    $('#link-carrinho').click(function(e){
        e.preventDefault();
        carregarConteudo('../classes/carrinho.php');
    });
    carregarConteudo('../classes/home.php');
});
