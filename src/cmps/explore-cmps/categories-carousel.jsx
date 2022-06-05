import React, { useState } from 'react'
import Carousel from 'react-grid-carousel'
import { useDispatch } from 'react-redux'
import { setFilterBy } from '../../store/actions/stay.action'

export const CategoriesCarousel = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState('')
  const dispatch = useDispatch()

  const onChooseCategory = (categoryTitle) => {
    setActiveCategory(categoryTitle)
    dispatch(setFilterBy('category', categoryTitle))
  }

  return (
    <Carousel cols={14} rows={1} gap={10} responsiveLayout={[
      {
        breakpoint: 1500,
        cols: 10,
        rows: 1,
        gap: 10,
        // loop: true,
        // autoplay: 1000
      }
    ]} loop>
      {categories.map((category, idx) =>
        <Carousel.Item key={idx}>
          <div key={idx} className={(activeCategory === category.title) ?

            "category-container flex direction-column align-center justify-center space-between active" :
            "category-container flex direction-column align-center justify-center space-between"}
            onClick={() => onChooseCategory(category.title)}>
            < button className="category-btn">
              <img className="category-img" src={require(`../../assets/img/categories/${category.img}.jpg`)} alt="btn" /> </button>
            <p>{category.title || 'All Homes'}</p>
          </div>
        </Carousel.Item>
      )
      }
    </Carousel >
  )
}