/**
 * written by Juhwan Park with a reference to a tutorial on Lynda.com
 */


$(document).ready(function(){
    
    //when the form changes, apply dots for it
    $('.map_container .continent').change(function(){
        //alert($('#mapForm option:selected').val());
        
        //if "All continents" is selected
        var selectedContinent = $('#mapForm option:selected').val(); 
        if( selectedContinent == 'ALL' ) {
            $('.map_container a.dot').show(1000);
        } else {
            $('.map_container a.dot[continent*='+selectedContinent+']').show(1000);
            $('.map_container a.dot[continent!='+selectedContinent+']').hide(1000);
        }
    });
    
});
