// Begin code for Show More 

$('.flex-item').append('<button class="showmore"><span class="plus">+</span>Show More</button>');

$('.showmore').click(function(){
	$(this).prev().toggleClass('fulltext');
	var html = $(this).html();
	$(this).html(html == '<span class="plus">+</span>Show More' ? '<span class="plus">-</span>Show Less' : '<span class="plus">+</span>Show More' );
});

// Code end for Show More