const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.scroll', {origin: 'left', delay: 800});
sr.reveal('.scroll2', {origin: 'right', delay: 800, interval: 300});
sr.reveal('.scroll3', {origin: 'top', delay: 600, interval: 300});
sr.reveal('.scroll4', {origin: 'left', delay: 600, interval: 300});


// var removeCartItem = document.getElementsByClassName('remove');
// console.log(removeCartItem);
// for (var i = 0; i < removeCartItem.length; i++){
//     var button = removeCartItem[i]
//     button.addEventListener('click', function(event){
//         var buttonClicked = event.target
//         buttonClicked.parentElement.parentElement.remove()
//         updateCartTotal()
//     })
// }

// function updateCartTotal(){
//     var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//     var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//     total = 0
//     for (var i=0; i < cartRows.length; i++){
//         var cartRow = cartRows[i]
//         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
//         var quantityElement = cartRow.getElementsByClassName('cart-quantity')[0]
//         var price = parseFloat(priceElement.innerText.replace('$', ''))
//         var quantity = quantityElement.value
//         total = total + (price * quantity);
//     }
//     document.getElementsByClassName('cart-total-price')[0].innerText ='$' + total
// }
