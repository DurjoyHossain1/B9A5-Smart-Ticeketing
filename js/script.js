

 const buttons = document.querySelectorAll('#buttons');
 let sum = 0;
 let count = 0;

 for (const button of buttons) {
     button.addEventListener('click', function () {
         if (count < 4 && !button.disabled) {
              //Seats Count
             count++;
             const seatsCount = document.getElementById('sets-count').innerText = count;

             // 40 Sets Style
             seatsLeft();

              //Next Button Style
             const nextBtn = document.getElementById('next-btn');
             nextBtn.classList.remove('opacity-50');
             nextBtn.classList.remove('cursor-not-allowed');

             // main Style
             const btnBackgroundColor = button.style.backgroundColor = 'green';
             const btnColor = button.style.color = 'white';

             const busName = document.getElementById('bus-name').childNodes[1];
             const ticketName = document.getElementById('ticket-name');

             const p = document.createElement('p');
             p.innerText = button.innerText;
             ticketName.appendChild(p);

             const span = document.createElement('span');
             span.innerText = 'Economy';
             span.style.textAlign = 'center';
             busName.appendChild(span);

             const p2 = document.createElement('p');
             p2.innerText = 550;  
             p2.style.textAlign = 'end';
             busName.appendChild(p2);

             const ticketPrice = parseInt(busName.childNodes[3].innerText);

             sum = sum + ticketPrice;
             const ammount = document.getElementById('ammount');
             const totalPrice = ammount.innerText = sum;

             const grandTotal = document.getElementById('grand-total').innerText = totalPrice;

             const addBtn = document.getElementById('add-btn');
             addBtn.addEventListener('click', function () {
                 const cupponInput = document.getElementById('cuppon-input').value.toUpperCase();
                 const cupponCode = cupponInput.split(" ").join("");
                 console.log(cupponCode);
                 if (cupponCode === 'NEW15') {
                     const discountTotal = (grandTotal * 15) / 100;
                     const totalAmmount = grandTotal - discountTotal;
                     document.getElementById('grand-total').innerText = totalAmmount.toFixed(2);
                     const cupponMain = document.getElementById('cuppon-main');
                     cupponMain.style.display = 'none';
                 }
                 if (cupponCode === 'COUPLE20') {
                     const discountTotal = (grandTotal * 20) / 100;
                     const totalAmmount = grandTotal - discountTotal;
                     document.getElementById('grand-total').innerText = totalAmmount.toFixed(2);
                     const cupponMain = document.getElementById('cuppon-main');
                     cupponMain.style.display = 'none';
                 }
             });

              //Disable the button after clicking
             button.disabled = true;

             // next button degine
             const nextButton = document.getElementById('next-btn');
             nextButton.addEventListener('click', function () {
                 const main = document.getElementById('main');
                 main.classList.add('hidden');
                 const success = document.getElementById('success');
                 success.classList.remove('hidden');
             });

              //Continoue Button Degine
             const continoueButton = document.getElementById('continoue-btn');
             continoueButton.addEventListener('click', function () {
                 const main = document.getElementById('main');
                 main.classList.remove('hidden');
                 const success = document.getElementById('success');
                 success.classList.add('hidden');
             });
         } 
          else {
              alert('Sorry cannot buy more then four seats');
          }
     });
 }

 let setsLeft = 40;

 function seatsLeft() {
     if (setsLeft > 0) {
         setsLeft--;
         ubdateSeatsLeft();
     }
 }

 function ubdateSeatsLeft() {
     document.getElementById('sets').innerHTML = setsLeft;
 }
