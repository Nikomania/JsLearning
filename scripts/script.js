const createCardMeal = (meal) => {
    div_meal = document.createElement('div')
    div_meal.classList.add('mealscard')

    /* create these 3 functions*/
    div_header = createHeaderCardMeal(meal)
    div_body = createDescrCardMeal(meal)
    div_bottom = createBottomCardMeal(meal)
    div_meal.appendChild(div_header)
    div_meal.appendChild(div_body)
    div_meal.appendChild(div_bottom)

    return div_meal
}


const createCardMeals = () => {
    const cardMeals = []
    meals.forEach((meal) => {
        cardMeals.push(createCardMeal(meal))
    })

    return cardMeals
}

const render = () => {
    div = document.querySelector('div.mealscard')
    cardMeals = createCardMeals()

}

render()