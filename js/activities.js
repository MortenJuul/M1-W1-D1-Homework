$(document).ready(function(){
    // $(document).bind("click", function(e){
    //     if(e.target.innerText != "Not Available"){
    //         $(e.target).closest("td").toggleClass("cell-highlight");
    //     }
    //   });
    $("td").click(function(){
        let content = $(this).text();
        let contents = `${content} at ${$('th').eq($(this).index()).text()}`
        if (content != "Not Available"){
            $(this).toggleClass("cell-highlight");
            
            if ($(this).hasClass("cell-highlight")){
                $('#displaySelected').css({visibility: "visible", "margin-top":"2em"});
                $('#result').append(`<p>${contents}</p>`);
            }else {
                $('#result p:contains('+contents+')').remove();

                if($('#result').has('p').length == false){
                    $('#displaySelected').css({visibility: "hidden", "margin-top":"0"});
                }
            }
        }
    })
})
