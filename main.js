$(window).on("load", aabning);


function aabning() {
    console.log("En lukket dør");
    setTimeout(doeraabnes, 5000);
}

function doeraabnes() {
    console.log("Nu åbnes døren!")
    $("#doer")[0].play();
    $("#left_door").addClass("anim_left_door");
    $("#right_door").addClass("anim_right_door");
}
