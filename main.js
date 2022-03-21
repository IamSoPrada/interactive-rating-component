document.addEventListener('DOMContentLoaded', ()=> {

let ratingBtnsParent = document.querySelector('.form-list');
let ratingBtns = document.querySelectorAll('.list-item')
let form = document.querySelector('form')
let state = {
	rating: 0
}

ratingBtnsParent.addEventListener('click', (e)=>{
	const target = e.target
	state.rating = target.textContent
	if(target.matches('.list-item')){
		ratingBtns.forEach((btn)=> btn.classList.remove('selected'))
		target.classList.toggle('selected')
	}
})
form.addEventListener('submit', (e)=> {
	e.preventDefault()
	const formHeader = document.querySelector('.form-header')
	const formBody = document.querySelector('.form-body')
	const formFooter = document.querySelector('.form-footer')

	formFooter.remove()
	formHeader.style.justifyContent = 'center'
	formBody.style.alignItems = 'center'

	formHeader.innerHTML = '<div class="form-thank-you"><img class="thank-you-icon" src="images/illustration-thank-you.svg" alt="" srcset=""></div>'
	formBody.innerHTML = `<div class="form-show-rating">You selected ${state.rating} out of 5</div><h3 class="form-title">Thank you!</h3>            <p class="form-text">We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>`
	const formText = document.querySelector('.form-text')
	formText.style.textAlign = 'center'
})

})