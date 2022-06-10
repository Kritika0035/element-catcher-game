$(document).on('mousemove', function (e) {
    basket.css('left', e.pageX);
});

function egg_down(egg) {

    egg_current_position = parseInt(egg.css('top'));
    egg.css('top', egg_current_position + 2)
};

function check_egg_hits_floor(egg){

    if (collison(egg, floor)){
        show_bulls_eye(egg);
        decreament_life();
        return true;
    }
    return false;
};

function set_egg_to_initial_position(egg){
    egg.css('top', egg_initial_position);
};

function show_bulls_eye(egg) {
    bullseye_num = egg.attr('data-bullseye');
    $('#bullseye' + bullseye_num).show();
    hide_bulls_eye(bullseye_num);
};

function hide_bulls_eye(bullseye_num) {
    setTimeout(function() {
        $('#bullseye' + bullseye_num).hide();
    }, 800);
};

function decreament_life() {
    life--;
    life_span.text('Life:' + ' ' + life);
};

function check_egg_hits_basket(egg1) {
    if (collison(egg, basket)) {
        egg_top = parseInt(egg.css('top'));
        if (egg_top < basket_top){
            update_score();
            return true;
        }
    }
    return false;
};

function update_score() {
    score++;
    score_span.text('Score:' + ' ' + score);
    score1.text(score);
}