const MAX_LENGTH_DESC = 120
const CLASS_CARD = 'mealscard'
const ID_PRICE = 'mealsprice'
const CLASS_DESC = 'mealsdesc'
const CLASS_DESC_DIV = 'mealsdescdiv'
const ID_TITULO = 'mealsname'
const CLASS_HEADER = 'mealsheaderdiv'
const CLASS_BUTTON = 'mealsbutton'


const text_adjust = (text) => {
    return text.length < MAX_LENGTH_DESC ? text : text.slice(0, MAX_LENGTH_DESC) + '...'
}


const createButton = (name, id) => {
    const button = document.createElement('button')
    button.classList.add('button')
    button['id'] = id
    button.textContent = name

    return button
}


const createBottomMealsCard = (meal) => {
    const div_bottom = document.createElement('div')
    div_bottom.classList.add(CLASS_BUTTON)

    const del_button = createButton('Delete', 'delbut')
    const send_button = createButton('Select', 'slcbut')

    div_bottom.appendChild(del_button)
    div_bottom.appendChild(send_button)
    
    return div_bottom
}


const createHeaderMealsCard = (meal) => {
    const div_header = document.createElement('div')
    div_header.classList.add(CLASS_HEADER)
    
    const titulo = document.createElement('h3')
    titulo['id'] = ID_TITULO
    titulo.textContent = meal.name
    
    div_header.appendChild(titulo)
    
    const css = div_header.style
    css.backgroundImage = 'linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url('+ meal.bg_img + ')'

    return div_header
}


const createDescrMealsCard = (meal) => {
    const div_bottom = document.createElement('div')
    div_bottom.classList.add(CLASS_DESC_DIV)
    
    const desc = document.createElement('p')
    desc.setAttribute('id', CLASS_DESC)
    desc.textContent = text_adjust(meal.description)
    div_bottom.appendChild(desc)
    
    const value = document.createElement('p')
    value['id'] = ID_PRICE
    value.textContent = meal.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    div_bottom.appendChild(value)

    return div_bottom
}


const createMealsCard = (meal) => {
    const div_meal = document.createElement('div')
    div_meal.classList.add(CLASS_CARD)

    /* create these 3 functions*/
    const div_header = createHeaderMealsCard(meal)
    const div_body = createDescrMealsCard(meal)
    const div_bottom = createBottomMealsCard(meal)
    div_meal.appendChild(div_header)
    div_meal.appendChild(div_body)
    div_meal.appendChild(div_bottom)

    return div_meal
}


const createMealsCards = () => {
    const Mealscards = []
    meals.forEach((meal) => {
        Mealscards.push(createMealsCard(meal))
    })

    return Mealscards
}


const render = () => {
    const div = document.querySelector('main > div.mealscards')
    const mealsCards = createMealsCards()
    mealsCards.forEach((mealscard) => {
        div.appendChild(mealscard)
    })
}

render()
