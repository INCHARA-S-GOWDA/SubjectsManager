$(function() {
	var callback = function(event) {
		event.preventDefault();
		var input = $('input[type=text][name=item]'),
			value = input.val(),
			tobestudied = ($(event.target).attr('id') === 'addtobestudied'),
			item = $('<li><input type="checkbox" name="item"> ' + value + ' <a href="#">remove</a></li>'),
			list = (tobestudied) ? $('ul').first() : $('ul').last();

		input.val("");
		input.focus();

		if (value === "") return;

		if (!tobestudied) {
			item.find('input').attr('checked', true);
		}
		item.appendTo(list);
	}

	$('#addalreadystudied, #addtobestudied').click(callback);

	$('ul').on('click', 'li a', function(event){
		$(event.target).parent('li').remove();
	});

	$('ul').on('click', 'input[type=checkbox]', function(event){
		var listItem = $(event.target).parent('li'),
			list = (event.target.checked) ? $('ul').last() : $('ul').first();
		listItem.appendTo(list);
	});
});
