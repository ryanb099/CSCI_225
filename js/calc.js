
        function show()
        {
            document.getElementById('form').style.display='block';
        }
        function getValues()
        {
            document.getElementById('form').style.visibility="collapse";
            document.getElementById('form2').style.visibility="visible";
            //button click gets values from inputs
            var balance = parseFloat(document.getElementById("loan_amount").value);
            var interestRate = parseFloat(document.getElementById("interest_rate").value/100.0);
            var years = parseInt(document.getElementById("loan_term").value);
            var year =parseFloat(document.getElementsByName('year')[0].value);
            
            //set the div string
            var div = document.getElementById("result");
            
            //in case of a re-calc, clear out the div!
            div.innerHTML = "";
            
            //validate inputs - display error if invalid, otherwise, display table
            var balVal = validateInputs(balance);
            var intrVal = validateInputs(interestRate);
        
            if (balVal && intrVal)
            {
                //Returns div string if inputs are valid
                div.innerHTML += amort(balance, interestRate, years);
            }
            else
            {
                //returns error if inputs are invalid
                div.innerHTML += "Please Check your inputs and retry - invalid values.";
            }
        }
        /**
         * Amort function:
         * Calculates the necessary elements of the loan using the supplied user input
         * and then displays each months updated amortization schedule on the page
        */
        function amort(balance, interestRate, years)
        {
            //Calculate the per month interest rate
            var annualinterest= 0;
            var annualPrincipal= 0;
            var month;
            var monthlyRate = interestRate/12;
            var months= years *12;
            //Calculate the payment
            var payment = balance * (monthlyRate/(1-Math.pow(
                1+monthlyRate, -(months))));
                
            //begin building the return string for the display of the amort table
            var result = "Monthly payment: $" + payment.toFixed(2) + "<br />";
                
            //add header row for table to return string
            result += "<table border='1'><tr><th>Date</th><th>Interest</th>" + 
                "<th>Principal</th><th>Balance</th>";
            
            /**
             * Loop that calculates the monthly Loan amortization amounts then adds 
             * them to the return string 
             */
           
            for (var count = 0; count < years; ++count)
            { 
                var interest = balance * monthlyRate; 
                var monthlyPrincipal = payment - interest; //They will not work outside the loop, and they make it worse inside the second loop. 
                
                //start a new table row on each loop iteration
                result += "<tr align=left>";
                
                //display the month number in col 1 using the loop count variable
                result += "<td>" + (count + 1) + "</td>";
                //code for displaying in loop balance
                for (month=1; month<=12; month++) 
                {
                               // this is the monthly interest -- you need //accumulate annual interest. Did that and still does not work
                    annualinterest += interest
                        // this is the monthly principal  -- you need //accumulate annual principal paid. Did that and still does not work
                    annualPrincipal += monthlyPrincipal
                    balance = balance - monthlyPrincipal;
                   // The balance need to be updated each month not             // after a year
                                                                                // please change to 
                                                                                // balance = balance - monthlyPrincipal.  Did that and still does not work. 
                }
                
                //I dont understand how it still wont work. I even implemented your help and still wont work right. 
                
                //calc the in-loop interest amount and display
                result += "<td> $" + annualinterest.toFixed(2) + "</td>";
                
                    //calc the in-loop monthly principal and display
                result += "<td> $" + annualPrincipal.toFixed(2) + "</td>";
                        //update the balance for each loop iteration
                result += "<td> $" + balance.toFixed(2) + "</td>";
                    
                    //end the table row on each iteration of the loop   
                result += "</tr>";
                   
                
            }
            
            //Final piece added to return string before returning it - closes the table
            result += "</table>";
            
            //returns the concatenated string to the page
            return result;
        }
        
        function validateInputs(value)
        {
            //some code here to validate inputs
            if ((value == null) || (value == ""))
            {
                return false;
            }
            else
            {
                return true;
            }
        }
