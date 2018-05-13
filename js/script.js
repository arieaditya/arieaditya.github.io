// Event pada saat link di klik
$('.page-scroll').on('click', function(e){

	// Ambil isi href
	var tujuan = $(this).attr('href');
	// Tangkap elemen yang bersangkutan
	var elemenTujuan = $(tujuan);

	$('html , body').animate({
		scrollTop: elemenTujuan.offset().top
	},1250, 'easeInOutExpo');

	e.preventDefault();

});