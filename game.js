$(document).ready(function() {

    $("#random-button").on("click", function() {


        var lottoNum = "";



        //to loop 0-9 nine times
        for (var i = 0; i < 9 ; i++){

            // randomized number from 0-9
            var random = Math.floor(Math.random() * 9) +1;

            lottoNum = random + lottoNum;
        }

        $("#random-number").prepend("<br><hr>" + lottoNum);

    });


});
