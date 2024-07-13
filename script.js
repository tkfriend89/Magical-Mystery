const ticketPrice = 20;
const discountTicketPrice=10;
const matinee = 3;

function buyTicket(){

    const age= prompt('What is your age?');
    matineeResponse = prompt('Are you attending a Matinee showing?');

    if (matineeResponse === 'yes'){
    if (age >65 || age <12){
        alert('Your price is: $' + (discountTicketPrice - matinee) );
    } else{
        alert('Your price is: $' + (ticketPrice- matinee) );
    }
    }

    if (matineeResponse === 'no'){
        if (age >65 || age <12){
            alert('Your price is:' + discountTicketPrice );
        } else{
            alert('Your price is:' + ticketPrice );
        }
        }


}