// API Category https://www.themealdb.com/api/json/v1/1/categories.php
// API Detail https://www.themealdb.com/api/json/v1/1/filter.php?c=$(category)


//fetching data
export async function getCategory(){
    $.ajax({
        url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
        type :'GET',
        dataType :'json',
        success : function(response){
            response.categories.map((item) => {
                renderCategories(item)
            })
        }, fail: function(err){
            console.error(err.message)
        }
    })
}
export async function getCategoryFoodByName(category){
    $.ajax({
        url : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
        type : 'GET',
        dataType :'json',
        success : function(response){
            removeElementFoodCategory()
            response.meals.map((item) => {
                renderCategoriesByName(item)
            })
        }
    })
}

function removeElementFoodCategory(){
    $('#food-category').remove()
}
//Render elements
function renderCategories(item){
    $('#food-category').append(
        `<div id="food">
            <a href="?category=${item.strCategory}" >
                <img src="${item.strCategoryThumb}">
                <h3>${item.strCategory}</h3></a>
                <span>${item.strCategoryDescription}</span> 
           
        </div>`
    )
}
function renderCategoriesByName(item){
    $('#food-detail').append(
        `<div class="column">
            <div class="card">
                <a href="?category=${item.strMeal}" ></a>
                    <img src="${item.strMealThumb}">
                    <h3>${item.strMeal}<h3/>
                
            </div> 
        </div>`
    )
}