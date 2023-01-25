import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Carousel from 'react-grid-carousel'
import { setFilterBy } from '../../store/actions/stay.action'

export const CategoriesCarousel = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState('')
  const dispatch = useDispatch()

  const onChooseCategory = (categoryTitle) => {
    setActiveCategory(categoryTitle)
    dispatch(setFilterBy('category', categoryTitle))
  }

  return (
    <Carousel loop={false} responsiveLayout={[
      {
        breakpoint: 3000,
        cols: 14,
        rows: 1,
        gap: 10,
      },
      {
        breakpoint: 1800,
        cols: 14,
        rows: 1,
        gap: 10,
      },
      {
        breakpoint: 1500,
        cols: 14,
        rows: 1,
        gap: 10,
      },
      {
        breakpoint: 1450,
        cols: 12,
        rows: 1,
        gap: 10,
      },
      {
        breakpoint: 1380,
        cols: 10,
        rows: 1,
        gap: 10,
      },
      {
        breakpoint: 1350,
        cols: 6,
        rows: 1,
        gap: 0,
      },
      {
        breakpoint: 600,
        cols: 6,
        rows: 1,
        gap: 10,
      },
      {
        breakpoint: 500,
        cols: 8,
        rows: 1,
        gap: 5,
      }
    ]}>
      {categories.map((category, idx) =>
        <Carousel.Item key={idx}>
          <div key={idx} className={`category-container flex direction-column align-center justify-center space-between ${activeCategory === category.title ? 'active' : ''}`}
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