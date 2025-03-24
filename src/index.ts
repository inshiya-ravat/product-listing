import { product } from "../model/product"

async function getProducts(){
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    console.log(data)

    data.products.forEach((product:product) => {

        //containers
        const mainSection = document.querySelector('.main-section')

        const productSection = document.createElement('a')
        productSection.className = 'product-section'
        productSection.href = '#'

        const productImageContainer = document.createElement('div')
        productImageContainer.className = 'img-container'

        const productInfoContainer = document.createElement('div')
        productInfoContainer.className = 'product-info'

        const productRatingContainer = document.createElement('div')
        productRatingContainer.className = 'product-rating'

        //elements
        const productImageElement = document.createElement('img')
        productImageElement.src = product.thumbnail

        const productNameElement = document.createElement('p')
        productNameElement.className = 'product-name'
        productNameElement.textContent = product.title

        const productRatingLabelElement = document.createElement('label')
        productRatingLabelElement.className = 'rating'
        productRatingLabelElement.textContent = product.rating.toString()

        const productRatingInputElement = document.createElement('input')
        productRatingInputElement.type = 'range'
        productRatingInputElement.id = 'rating'
        productRatingInputElement.disabled = true
        productRatingInputElement.value = ((product.rating / 5)*100).toString()

        const productReviewElement = document.createElement('p')
        productReviewElement.className = 'product-reviews'
        productReviewElement.textContent = product.reviews.length.toString()

        const stockAvailabilityElement = document.createElement('p')
        stockAvailabilityElement.className = 'stock-availability'
        stockAvailabilityElement.textContent = product.stock + ' available in stock!'

        const productPriceElement = document.createElement('p')
        productPriceElement.className = 'product-price'
        productPriceElement.textContent = '$' + product.price

        const productDiscountElement = document.createElement('p')
        productDiscountElement.className = 'discount'
        productDiscountElement.textContent = product.discountPercentage + "% Off"

        const cartBtnElement = document.createElement('button')
        cartBtnElement.className = 'cart-btn'
        cartBtnElement.title = 'Add to Cart'
        cartBtnElement.textContent = 'Add to Cart'

        //append
        productImageContainer.appendChild(productImageElement)
        productRatingContainer.appendChild(productRatingLabelElement)
        productRatingContainer.appendChild(productRatingInputElement)
        productRatingContainer.appendChild(productReviewElement)
        productInfoContainer.appendChild(productImageContainer)
        productInfoContainer.appendChild(productNameElement)
        productInfoContainer.appendChild(productRatingContainer)
        productInfoContainer.appendChild(stockAvailabilityElement)
        productInfoContainer.appendChild(productPriceElement)
        productInfoContainer.appendChild(productDiscountElement)
        productInfoContainer.appendChild(cartBtnElement)
        productSection.appendChild(productImageContainer)
        productSection.appendChild(productInfoContainer)
        mainSection?.appendChild(productSection)
    });
}
getProducts()
