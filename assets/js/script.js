//all code wrapped in a JQuery call to have all the HTML elements rendered properly

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

    //Retrieve the data from local storage to display it on the relevant cards
$('#hour-9.description').val(localStorage.getItem('hour-9'));
$('#hour-10.description').val(localStorage.getItem('hour-10'));
$('#hour-11.description').val(localStorage.getItem('hour-11'));
$('#hour-12.description').val(localStorage.getItem('hour-12'));
$('#hour-13.description').val(localStorage.getItem('hour-13'));
$('#hour-14.description').val(localStorage.getItem('hour-14'));
$('#hour-15.description').val(localStorage.getItem('hour-15'));
$('#hour-16.description').val(localStorage.getItem('hour-16'));
$('#hour-17.description').val(localStorage.getItem('hour-17'));

     //Variables for HTML elements to display the date and time
     const displayDateEl = $('#currentDay');
     const displayTimeEl = $('#currentTime')

    //display current date using DayJs
    function displayTodayDate() {
        const todayDate = dayjs().format('dddd - D MMMM YYYY');
        displayDateEl.text(todayDate);
    }

    //display current time using DayJs
    function displayCurrentTime() {
        const currentTime = dayjs().format('h:mm a');
        displayTimeEl.text(currentTime);
    }

    //update date and time every half minute
    displayTodayDate();
    displayCurrentTime();
    setInterval(displayCurrentTime, 30000);

    
    //call checkTime every minute so it stays up to date
    checkTime();
    setInterval(checkTime, 60000);

    })