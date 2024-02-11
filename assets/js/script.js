$(function() {
    //on click, save the user input
    $('.saveBtn').on('click', function(){
        //get sibling description value
        const textInput = $(this).siblings('.description').val();
        //get hour id attribute of the parent div
        const hourBlock = $(this).parent().attr('id');
        //save input to local storage to be able to retireve on refresh
        localStorage.setItem(hourBlock, textInput);
    });
    
    //Variables for HTML elements to display the date and time
    const displayDateEl = $('#currentDay');
    const displayTimeEl = $('#currentTime')

     //compare time block hour with the present hour
     function checkTime() {
        //get the present hour with DayJs
        const presentHour = dayjs().format('H');
        // console.log(presentHour);

        //check set hours in each time block
        $(".time-block").each(function(){
            const hourID= parseInt($(this).attr('id').split("hour-")[1]);
            // console.log(hourID);

        //add relevant classes based on whether the time block is in the present, past, or future hour.

        if (hourID < presentHour) {
            $(this).removeClass('future');
            $(this).removeClass('present');
            $(this).addClass('past');


        } else if (hourID == presentHour) {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
        });
    }

    //call checkTime every minute so it stays up to date
    checkTime();
    setInterval(checkTime, 60000);



    })