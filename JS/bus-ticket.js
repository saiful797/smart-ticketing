
// When clicked Buy Ticket then get seats section for booking 
const buyTickets = document.getElementById('buy-tickets');
const busSeats = document.getElementById('bus-seats');

buyTickets.addEventListener('click', function(){

    busSeats.scrollIntoView({ behavior: 'smooth' });
    
});

// Apply Button Disable
const applyBtn= document.getElementById('apply-btn');
applyBtn.disabled = true;
applyBtn.style.backgroundColor = "";

//next button disabled
const nextButtonEvent = document.getElementById('next-btn');
nextButtonEvent.disabled =true;
nextButtonEvent.style.backgroundColor = " ";

//Select seats and Buy seats
let totalPrice = 0;
let totalSeat = 0;
let counter = 0;
let seats = [];

const getButtonByClassName = document.querySelectorAll(".btn-seat");

for(let i=0; i<getButtonByClassName.length; i++){
    const seat = getButtonByClassName[i];

    seat.addEventListener('click', function(){

        const seatItem = document.getElementById('seat-item');
        const seatClass = document.getElementById('seat-class');
        const seatPrice = document.getElementById('seat-price');

        const inTotalPrice = document.getElementById('total-price');
        const seatCount = document.getElementById('seat-count');
        const grandtotal = document.getElementById('grand-total');
        const seatsLeft = document.getElementById('seats-left');
        const applyBtn= document.getElementById('apply-btn');

        //hide graySet and show green seat
        const graySeat = document.getElementById('selected-seatGray');
        const greenSeat = document.getElementById('selected-seatGreen')

        graySeat.classList.add('hidden');
        greenSeat.classList.remove('hidden');


        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        
        let findSeat = seats.indexOf(seat.innerText);
        
        if(totalSeat === 4){
            seat.disabled = true;
            if(findSeat !== -1){
                seat.disabled = false;
                alert('The seat was selected!');
            }
            else alert("Your limit have completed!");
        }

        else{
            if(findSeat !== -1){
                seat.disabled = false;
                alert('The seat was selected!');
            }
            else if(findSeat === -1){
                totalSeat += 1;
                seats.push(seat.innerText);

                if(totalSeat === 1){
                    nextButtonEvent.disabled = false;
                    nextButtonEvent.style.backgroundColor = "#1DD100";
                }
    
                h1.innerText = seat.querySelector("h5").innerText;
                // Change the background color when clicked
                seat.style.backgroundColor = "#1DD100";
                
                // Apply Coupon Button
                if(totalSeat === 4){
                    applyBtn.disabled = false;
                    applyBtn.style.backgroundColor = "#1DD100";


                    // Apply coupon code
                    applyBtn.addEventListener('click',function(){
                        const couponCode = document.getElementById('coupon-code').value;

                        if(couponCode ==='NEW15'){
                            const discountPrice = totalPrice - (totalPrice * 0.15);
                            const couponApplied = document.getElementById('coupon-applied');
                            const discountPrices = document.getElementById('discount-price');
                            const discountPriceElement = document.getElementById('discount');

                            grandtotal.innerText = discountPrice;
                            discountPriceElement.innerText = totalPrice * 0.15;
                            couponApplied.classList.add('hidden');
                            discountPrices.classList.remove('hidden');
                        }

                        else if(couponCode ==='Couple 20'){
                            const discountPrice = totalPrice - (totalPrice * 0.2);
                            const couponApplied = document.getElementById('coupon-applied');
                            const discountPrices = document.getElementById('discount-price');
                            const discountPriceElement = document.getElementById('discount');

                            grandtotal.innerText = discountPrice;
                            discountPriceElement.innerText = totalPrice * 0.2;
                            couponApplied.classList.add('hidden');
                            discountPrices.classList.remove('hidden');
                        }
                        
                        else{
                            alert('Invalid Coupon!!');
                        };
                    });
                }

                h2.innerText ="Economy";
                h3.innerText ="550";
                totalPrice += 550;

                // Next Button Event Section
                const nextButton = document.getElementById('next-btn');

                nextButton.addEventListener('click', function(){
                    my_modal_5.showModal();

                    const modalClose = document.getElementById('modal-close');

                    modalClose.addEventListener('click', function(){
                        location.reload();
                        window.scrollTo(0,0);
                    })
                });
            }

        }

        inTotalPrice.innerText = totalPrice;
        seatCount.innerText = totalSeat;
        grandtotal.innerText = totalPrice;
        seatsLeft.innerText = 40 - totalSeat;


        seatItem.appendChild(h1);
        seatClass.appendChild(h2);
        seatPrice.appendChild(h3);
    });

}





