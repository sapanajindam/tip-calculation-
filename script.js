let calculation = document.getElementById('calculateBtn ');
{
    let calculate = function () {
        //getting Elements By Id
        let totalBill = document.getElementById('totalBill');
        let servicePerc = document.getElementById('servicePerc');
        let numPeople = document.getElementById('numPeople');
        let Result = document.getElementById('Result');

        //Validate Input
        let error = 0;
        // check if the total Bill is empty
        if (totalBill.value == "" || totalBill.value == "0") {
            totalBill.style.borderColor = "#fc8370";
            error = 1;
        }
        else {
            totalBill.style.border.Color = "#80a7b8";
            error = 0
        }

        // check if the Service Percentage is empty
        if (servicePerc.value == "" || servicePerc.value == "0") {
            servicePerc.style.borderColor = "#fc8370";
            error = 1;
        }
        else {
            servicePerc.style.border.Color = "#80a7b8";
            error = 0;
        }

        if (!error) {
            let tip = 0;

            //Calculate Tip
            let tipInit = totalBill.value * servicePerc.value;
            /*
            if more than one People are sharing the Bill
              and not empty*/
            // console.log(tipInit);
            if (numPeople.value != 0 && numPeople.value != "") {

                let tipEach = tipInit / numPeople.value;
                //round to two Decimal Places
                let tipEachRounded = Math.round(tipEach * 100) / 100;
                //   console.log(tipEachRounded);
                /**
                 The next Line allows us to always have 
                 two digits after decimal Point
                 **/
                tipEachRounded = tipEachRounded.toFixed(2);
                /**
                 if the tip rounded to 0 assign tipInit else assign tipRounded
                **/
                tip = tipEachRounded == 0 ? tipEach + 'each' : tipEachRounded + 'each';
            }
            else {
                let tipRounded = Math.round(tipInit * 100) / 100;

                /**
                 The next Line allows us to always have 
                 two digits after decimal Point
                 **/
                tipRounded = tipRounded.toFixed(2);
                /**
                  If the tip rounded to 0 assign tipInit else assign tipRounded
                 **/
                tip = tipRounded == 0 ? tipInit : tipRounded;
            }
            // Print out the Result
            Result.innerText = tip;
        }
        else {
            return;
        }
    }
    // adding click Event to the calculate Button
    calculateBtn.addEventListener('click', calculate);

}
