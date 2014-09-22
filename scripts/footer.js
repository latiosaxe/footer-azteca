window.addEvent('domready', function() {

    $$(".expand > a").addEvent('click', function(){
        var hijo = $(this).getParent('.expand').getChildren('.vertical_slide')[0];
        console.log();

        if(typeof hijo === 'undefined'){
        }else{
//            $$(".vertical_slide").removeClass('expanded');
            if(hijo.hasClass('expanded')){
                hijo.removeClass('expanded');
            }else{
                hijo.addClass('expanded');
            }
        }
    });
});