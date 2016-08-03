$("button").click(function() {



	var p = $("#loanBalanceInput").val();
	var interestRate = $("#interestRateInput").val() / 100;
	var longTerm = $("#longTermInput").val();
	var period = $("#periodInput").val();

	if (p <= 0 || interestRate <= 0 || longTerm <= 0 || period <= 0 ) {

		$(".panel-success").css("background-color", "red").fadeIn().text('Please enter a positive value for all fields.');
		$("#loanBalanceInput").focus()

	} else {

		var r = interestRate / period;
		var n = longTerm * period;
		var m = (r * Math.pow(1+r,n )) / (Math.pow(1+r,n ) - 1) * p;
		
		$(".panel-success").css("background-color", "green").fadeIn().text('Your monthly mortgage payment is ' + "$" +m.toFixed(2));

	}
	
});