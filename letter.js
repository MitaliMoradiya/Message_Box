$(document).ready(function() {
    var envelope = $('#envelope');
    var video = $('#envelope-video');
    var btn_open = $("#open");
    var btn_reset = $('#reset');
    
    btn_open.click(function() {
        openEnvelope();
    });
    
    btn_reset.click(function() {
        closeEnvelope();
    });
    
    function openEnvelope() {
        envelope.addClass('open').removeClass('close');
        video.show().get(0).play();
    }
    
    function closeEnvelope() {
        envelope.addClass('close').removeClass('open');
        video.get(0).pause();
        video.get(0).currentTime = 0;
        video.hide();
    }
});
