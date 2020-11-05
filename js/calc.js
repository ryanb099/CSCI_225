
  /*          function getVal()
            {
                var balance = parseFloat(document.getElementsByName('loan')[0].value);
                var interest_rate = parseFloat(document.getElementsByName('interest')[0].value/100);
                var term= parseInt(document.getElementsByName('loan_term')[0].value);
                var year =parseFloat(document.getElementsByName('year')[0].value);
                var div = document.getElementById("result");
	//in case of a re-calc, clear out the div!
	            div.innerHTML = "";
	//validate inputs - display error if invalid, otherwise, display table
	            var balVal = validateInputs(balance);
	            var intrVal = validateInputs(interest_rate);

	            if (balVal && intrVal)
	            {
		            //Returns div string if inputs are valid
		            div.innerHTML += loanCalc(balance, interest_rate, term);
	            }
	            else
	            {
		            //returns error if inputs are invalid
		            div.innerHTML += "Please Check your inputs and retry - invalid values.";
                }
            function loanCalc(balance, interest_rate, term)
            {
                var month_rate= interest_rate /12;
                var payment = balance * (month_rate/(1-Math.pow (1+month_rate, -term)));
                var table= "Date: " + year + "<br/>" +
                    "Interest Rate: " + (interest_rate*100) + "<br/>" +
                    "Principal: " + balance + "<br/>" +
                    "Balance: " + (payment * term) + "<br/><br/>";
                table += "<table border= '1'><tr><th>Date #</th><th>Interest</th><th>Principal</th><th>Balance</th>";
                for (var count= 0; count < term; ++count)
                {
                    var int= 0;
                    var monthlyPrin = 0;
                    table += "<tr align=center>";
                    table += "<td>" + (count + 1) + "</td>";
                    table += "<td> $" + balance + "</td>";
                    //calc the in-loop interest amount and display
		            interest = balance * month_rate;
		            table += "<td> $" + interest + "</td>";
		//calc the in-loop monthly principal and display
		            monthlyPrin = payment - interest;
		            table += "<td> $" + monthlyPrin + "</td>";
		
		//end the table row on each iteration of the loop	
		            table += "</tr>";
		
		//update the balance for each loop iteration
		            balance = balance - monthlyPrin;	
                }
                table += "</table>";
                return table;
            }
        } */
        function getValues()
        {
            //button click gets values from inputs
            var balance = parseFloat(document.getElementById("loan_amount").value);
            var interestRate = parseFloat(document.getElementById("interest_rate").value/100.0);
            var terms = parseInt(document.getElementById("loan_term").value);
            var year =parseFloat(document.getElementsByName('year')[0].value);
            
            //set the div string
            var div = document.getElementById("result");
            
            
        }
        
        /**
         * Amort function:
         * Calculates the necessary elements of the loan using the supplied user input
         * and then displays each months updated amortization schedule on the page
        */
        function amort(balance, interestRate, terms)
        {
            //Calculate the per month interest rate
            var monthlyRate = interestRate/12;
            
            //Calculate the payment
            var payment = balance * (monthlyRate/(1-Math.pow(
                1+monthlyRate, -(terms*12))));
                
            //begin building the return string for the display of the amort table
            var result = "Monthly payment: $" + payment.toFixed(2) + "<br />";
                
            //add header row for table to return string
            result += "<table border='1'><tr><th>Date</th><th>Balance</th>" + 
                "<th>Interest</th><th>Principal</th>";
            
            /**
             * Loop that calculates the monthly Loan amortization amounts then adds 
             * them to the return string 
             */
            for (var count = 0; count < terms; ++count)
            { 
                //in-loop interest amount holder
                var interest = 0;
                
                //in-loop monthly principal amount holder
                var monthlyPrincipal = 0;

                var an=0;
                
                //start a new table row on each loop iteration
                result += "<tr align=left>";
                
                //display the month number in col 1 using the loop count variable
                result += "<td>" + (count + 1) + "</td>";
                
                //code for displaying in loop balance
                    result += "<td> $" + balance.toFixed(2) + "</td>";
                
                //calc the in-loop interest amount and display
                    interest = balance * monthlyRate;
                    result += "<td> $" + interest.toFixed(2) + "</td>";
                
                //calc the in-loop monthly principal and display
                   
                for (var i=0; i<12; i++)
                    {
                        monthlyPrincipal = payment - interest;
                        an= monthlyPrincipal *13;
                    }
                    result += "<td> $" + an.toFixed(2) + "</td>";
                
                //end the table row on each iteration of the loop	
                    result += "</tr>";
                
                //update the balance for each loop iteration
                    balance = balance - monthlyPrincipal;
                		
            }
            
            //Final piece added to return string before returning it - closes the table
            result += "</table>";
            
            //returns the concatenated string to the page
            return result;
        }
        
        