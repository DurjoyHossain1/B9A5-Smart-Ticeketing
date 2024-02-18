const button = document.querySelectorAll('#buttons');
let sum = 0;

let count = 0


for (const buttons of button) {
   buttons.addEventListener('click',function(){
     
   // Seats Count
   count = count + 1
   const seatsCount = document.getElementById('sets-count').innerText = count;

   // 40 Sets Style
   seatsLeft()
   // Next Button Style
   const nextBtn = document.getElementById('next-btn');
   nextBtn.classList.remove('opacity-50')
   nextBtn.classList.remove('cursor-not-allowed')


   // main Style
   const btnbackgroundColor = buttons.style.backgroundColor = 'green'
   const btnColor = buttons.style.color = 'white'

   const busName = document.getElementById('bus-name').childNodes[1];
    
   const ticketName = document.getElementById('ticket-name');

   const p = document.createElement('p');
   p.innerText = buttons.innerText;
   ticketName.appendChild(p);

   const span = document.createElement('span');
   span.innerText = 'Economoy';
   span.style.textAlign = 'center'
   busName.appendChild(span);

   const p2 = document.createElement('p');
   p2.innerText = 550;
   p2.style.textAlign = 'end'
   busName.appendChild(p2);
   
   const ticketPrice = parseInt(busName.childNodes[3].innerText);
   
   sum = sum + ticketPrice;
   const ammount = document.getElementById('ammount');
   const totalPrice =  ammount.innerText = sum;
  
   const grandTotal =  document.getElementById('grand-total').innerText = totalPrice;
   

   })
}


let setsLeft = 40;

function seatsLeft(){
   if (setsLeft > 0) {
      setsLeft--
      ubdateSeatsLeft()
   }else{
      alert('All Ticket Is Sell Please Try Again Leater');
   }
}

function ubdateSeatsLeft(){
   document.getElementById('sets').innerHTML = setsLeft;
} 