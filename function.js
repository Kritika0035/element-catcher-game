$(document).on('mousemove', function (e) {
    basket.css('left', e.pageX);
});

function egg_down(egg) {

    egg_current_position = parseInt(egg.css('top'));
    egg.css('top', egg_current_position + 2)
};

function check_egg_hits_floor(egg){

    if (collison(egg, floor)){
        return true;
    }
    return false;
};

function set_egg_to_initial_position(egg){
    egg.css('top', egg_initial_position);
};