$(document).ready(function(){

    $("img").click(function(){
        var a = $(this).attr("src");
        var b = $(this).attr("alt-src");
        
        console.log("this is a",a);
        console.log("this is b",b);

        if($(this).attr("src") == a){
            $(this).attr("src",function(){
                $(this).attr("alt-src",function(){
                    return a;})
                return b; 
            });
        }
        // else{
        //     $(this).attr("src",function(){
        //     return a;
        //     });
        // }

    });


});





    // $("img").click(function(){
    //     $(this).attr("src",function(){
    //         return $(this).attr("alt-src");
    //     });
    //     });
