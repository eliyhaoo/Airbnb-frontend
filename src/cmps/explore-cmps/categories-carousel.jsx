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
    // <Carousel loop={false} cols={14} rows={1} gap={10} responsiveLayout={[
    <Carousel loop={false} responsiveLayout={[
      {
        breakpoint: 3000,
        cols: 14,
        rows: 1,
        gap: 10,
        // loop: true,
        // autoplay: 1000
      },
      {
        breakpoint: 1800,
        cols: 14,
        rows: 1,
        gap: 10,
        // loop: true,
        // autoplay: 1000
      },
      {
        breakpoint: 1500,
        cols: 14,
        rows: 1,
        gap: 10,
        // loop: true,
        // autoplay: 1000
      },
      {
        breakpoint: 1450,
        cols: 12,
        rows: 1,
        gap: 10,
        // loop: true,
        // autoplay: 1000
      },
      {
        breakpoint: 1380,
        cols: 10,
        rows: 1,
        gap: 10,
        // loop: true,
        // autoplay: 1000
      },
      {
        breakpoint: 1350,
        cols: 6,
        rows: 1,
        gap: 0,
        // loop: true,
        // autoplay: 1000
      },
      {
        breakpoint: 600,
        cols: 6,
        rows: 1,
        gap: 10,
        // loop: true,
        // autoplay: 1000
      },
      {
        breakpoint: 500,
        cols: 8,
        rows: 1,
        gap: 5,
        // loop: true,
        // autoplay: 1000
      }


    ]}>
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