$(document).ready(function(){
    $('.drop a').click(function(){ 
        if($(this).next('.drop-down').is(':hidden')){
            $(this).next('.drop-down').slideDown()
              
        }
        else
        {
            $(this).next('.drop-down').hide(0)
            
        }

    })
    $('.drop a').blur(function(){
        $('.drop-down').hide(0);
    })

    $('.searchbar input').focus(function(){
        $(this).animate({
            width :'200px'
        },300)
    })
    $('.searchbar input').blur(function(){
        $(this).animate({
            width :'100%'
        })
    })
})
    