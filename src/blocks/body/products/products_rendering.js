export default () => {
    let cardContent = document.querySelector('.catalog_grid');
    products.forEach(product => {
        cardContent.innerHTML += `

                    <div class="catalog_grid_card">
                            <div class="catalog_grid_card_images">
                                <div class="catalog_grid_cald_types">
                                    <div class="catalog_grid_card_types-spicy">
                                        <img src="images/Spicy.svg" class="spicy-image" alt="Spicy"/>
                                        <img src="images/spicy_hover.svg" class="spicy-image_hover" alt="Spicy"/>
                                    </div>
                                    <div class="catalog_grid_card_types-hot">
                                        <img src="images/Hot.svg" class="hot-image" alt="Hot"/>
                                        <img src="images/hot_hover.svg" class="hot-image_hover" alt="Hot"/>
                                    </div>
                                    <div class="catalog_grid_card_types-vegan">
                                        <img src="images/Vegan.svg" class="vegan-image" alt="Vegan"/>
                                        <img src="images/vegan_hover.svg" class="vegan-image_hover" alt="Vegan"/>
                                    </div>  
                                </div>
                                <div class="catalog_grid_card_image">
                                    <img src="${product.img}" alt="Roll"/>
                                </div>
                            </div>
                            <div class="catalog_grid_card_information">
                                <div class="catalog_grid_card_information_title">
                                    <div class="catalog_grid_card_name">
                                    ${product.title}
                                    </div>
                                    <div class="catalog_grid_card_count">
                                    ${product.description}
                                    </div>
                                </div>
                                <div class="catalog_grid_card_cost">
                                    <div class="catalog_grid_card_cost-old">
                                        <del>${product.oldPrice}</del>
                                    </div>
                                    <button class="catalog_grid_card_cost-button" product_id="${product.id}">${product.price}</button>
                                </div>
                            </div>
                        </div>
    `
    })
}