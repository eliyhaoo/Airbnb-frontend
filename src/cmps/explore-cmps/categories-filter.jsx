import { stayService } from '../../services/stay.service'

export const CategoriesFilter = () => {
    const categories = stayService.getCategories()
    return (
        <div className="categories-container flex">
            {categories.map((category, idx) =>
                <div key={idx} className="category-container flex direction-column align-center justify-center">
                    < button className="category-btn" > <img className="category-img" src={require(`../../assets/img/categories/${category.img}.jpg`)} alt="btn" /> </button>
                    <p>{category.title}</p>
                </div>
            )}
        </div >
    )
}
