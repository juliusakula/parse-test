 $(document).ready(function(){    
    var scroll_pos = 0;
    var animation_begin_pos = 0; //animation to begin
    var animation_end_pos = 1000; //animation to stop
    var beginning_color = {
        red: function(){ return 255 }, 
        green: function(){ return 174 },
        blue: function(){ return 31 },
    }; 
    var ending_color ={
        red: function(){ return 119 }, 
        green: function(){ return 127 },
        blue: function(){ return 160 },
    };
    $(document).scroll(function() {
        scroll_pos = animation_begin_pos; 
        if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) { 
            //calculate the relevant transitional rgb value
            var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
            var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
            var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
            var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
            var newColor = {
                red: function(){ return newRed }, 
                green: function(){ return newGreen },
                blue: function(){ return newBlue },
            };
            $('body').animate({ backgroundColor: newColor }, 0);
        } else if ( scroll_pos > animation_end_pos ) {
             $('body').animate({ backgroundColor: ending_color }, 0);
        } else if ( scroll_pos < animation_begin_pos ) {
             $('body').animate({ backgroundColor: beginning_color }, 0);
        } else { }
    });
});