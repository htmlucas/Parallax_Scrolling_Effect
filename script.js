$(document).ready(function()
{   // codigo do parallax //
    $('.parallax').parallax();
    //codigo do tooltip , attr = atributo , this = a variavel que vc esta usando, children = //
    $("a.tooltip").mouseover(function()
    {
        var texto = $(this).attr('data-tooltip');
        $(this).children(".text_tooltip").html(texto);
        $(this).children(".text_tooltip").css('opacity','1');
                            
    });
    
    $("a.tooltip").mouseout(function()
    {
        $(this).children(".text_tooltip").css('opacity','0');
        
    });
    //codigo para mostrar ou não o menu//
    $("nav").mouseover(function()
    {
      $(".nav-itens").addClass("nav-show");
        
    });
       
    $("nav").mouseout(function()
    {                 
        $(".nav-itens").removeClass("nav-show");                 
    });
        //codigo para ajustar o cabeçalho//         
    $(document).scroll(function(){  
        var topWindow = $(window).scrollTop();
        if (topWindow  > 60)
            {
                $("header").addClass('header_fixed');
            }
        else{
                $("header").removeClass('header_fixed');
        };
    });
});
