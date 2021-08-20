   // all selection
   // memory 
   let memory8 = document.getElementById('8gbMemory')
   let memory16 = document.getElementById('16gbMemory')
       // storage
   let storage256 = document.getElementById('256gbStorage')
   let storage512 = document.getElementById('512gbStorage')
   let storage1tb = document.getElementById('1tbStorage')
       // delivary 
   let freeDelivery = document.getElementById('freeDelivery')
   let expressDelivery = document.getElementById('expressDelivery')
       // prices innner text 
   let bestPrice = document.getElementById('bestPrice')
   let extraMemory = document.getElementById('extraMemory')
   let extraStorage = document.getElementById('extraStorage')
   let delivaryCharge = document.getElementById('delivaryCharge')
   let totalPrice = document.getElementById('totalPrice')
       // promo input and button
   let promoInput = document.getElementById('promoInput')
   let PromoApply = document.getElementById('PromoApply')
       // promo total
   let totalWithPromo = document.getElementById('totalWithPromo')


   // convert string to number function
   function getinnerText(innerstring) {
       let innertext = document.getElementById(innerstring)
       let innerTextValue = parseInt(innertext.innerText)
       return innerTextValue

   }
   // total price function
   function totalAmount() {
       let total = getinnerText('bestPrice') + getinnerText('extraMemory') + getinnerText('extraStorage') + getinnerText('delivaryCharge')
       totalPrice.innerText = total
   }
   //    totalWithPromo function
   function getLastTotal() {
       totalWithPromo.innerText = totalPrice.innerText
   }


   // adding Extra memory price
   memory8.addEventListener('click', function() {
       extraMemory.innerText = 0
           //calling total
       totalAmount()
           //calling totalWtihPromoCode
       getLastTotal()
   })
   memory16.addEventListener('click', function() {
           extraMemory.innerText = 180
               //calling total
           totalAmount()
               //calling totalWtihPromoCode
           getLastTotal()
       })
       // adding Extra storage price

   storage256.addEventListener('click', function() {
       extraStorage.innerText = 0
           //calling total
       totalAmount()
           //calling totalWtihPromoCode
       getLastTotal()
   })
   storage512.addEventListener('click', function() {
       extraStorage.innerText = 100
           //calling total
       totalAmount()
           //calling totalWtihPromoCode
       getLastTotal()
   })
   storage1tb.addEventListener('click', function() {
           extraStorage.innerText = 180
               //calling total
           totalAmount()
               //calling totalWtihPromoCode
           getLastTotal()
       })
       // adding delivaryCharge 
   freeDelivery.addEventListener('click', function() {
       delivaryCharge.innerText = 0
           //calling total
       totalAmount()
           //calling totalWtihPromoCode
       getLastTotal()
   })
   expressDelivery.addEventListener('click', function() {
       delivaryCharge.innerText = 20
           //calling total
       totalAmount()
           //calling totalWtihPromoCode
       getLastTotal()
   })

   // promo code input and button 
   PromoApply.addEventListener('click', function() {

       // input value 
       let promoInputValue = promoInput.value
           //totalWithPromo
       let promoTotalInnerText = totalWithPromo.innerText

       if (promoInputValue == 'stevekaku') {
           let discount = promoTotalInnerText - (promoTotalInnerText * 20) / 100
           totalWithPromo.innerText = discount

       } else if (promoInputValue == '') {
           alert('Enter your Pormo code')

       } else if (promoInputValue != 'stevekaku') {
           alert('Wrong Promo code')
       }
       // clear promo code input
       document.getElementById('promoInput').value == ''

   }, { once: true })