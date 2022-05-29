import { useState } from 'react'
import { stayService } from '../../services/stay.service'
export const CategoriesFilter = () => {
    const categories = stayService.getCategories()

    const [activeCategory, setActiveCategory] = useState('')

    const onChooseCategory = (categoryTitle) => {
        setActiveCategory(categoryTitle)
    }
    return (
        <div className="categories-container flex space-between">
            {categories.map((category, idx) =>
                <div key={idx} className={(activeCategory === category.title) ? "category-container flex direction-column align-center justify-center active" : "category-container flex direction-column align-center justify-center"} onClick={() => onChooseCategory(category.title)}>
                    < button className="category-btn"> <img className="category-img" src={require(`../../assets/img/categories/${category.img}.jpg`)} alt="btn" /> </button>
                    <p>{category.title}</p>
                </div>
            )}
        </div >
    )
}

