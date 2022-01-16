const center = document.querySelector('.center');
center.addEventListener('click', function() {
	this.classList.toggle('active');

})
$(function(){
    $('.frame').click(function(){

        if( $('.event').css('display') == 'block' )
        $('.event').css('display','none');
        else
        $('.event').css('display','block');

        return false;
    })
})