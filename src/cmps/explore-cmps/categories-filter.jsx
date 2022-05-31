import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { stayService } from '../../services/stay.service'
import { setFilterBy } from '../../store/actions/stay.action'

export const CategoriesFilter = () => {

    const categories = stayService.getCategories()
    const [activeCategory, setActiveCategory] = useState('All Homes')
    const dispatch = useDispatch()

    const onChooseCategory = (categoryTitle) => {
        setActiveCategory(categoryTitle)
        dispatch(setFilterBy('category', categoryTitle))
    }

    return (
        <div className="categories-container flex space-between">
            {categories.map((category, idx) =>
                <div key={idx} className={(activeCategory === category.title) ?
                    "category-container flex direction-column align-center justify-center active" :
                    "category-container flex direction-column align-center justify-center"}
                    onClick={() => onChooseCategory(category.title)}>
                    < button className="category-btn">
                        <img className="category-img" src={require(`../../assets/img/categories/${category.img}.jpg`)} alt="btn" /> </button>
                    <p>{category.title}</p>
                </div>
            )}
        </div >
    )
}

