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
    
    })