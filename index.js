$('.btn-expand-collapse').click(function(e) {
				$('.navbar-primary').toggleClass('collapsed');
});

function storename() {
    
    var name=document.getElementById("un").value;
$('#profile').text(name);

}

