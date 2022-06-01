import React from 'react'
import { stayService } from '../../services/stay.service'
import { CategoriesCarousel } from './categories-carousel'
export const CategoriesFilter = () => {

    const categories = stayService.getCategories()
    return (
        <div className="categories-container flex space-between">
            <CategoriesCarousel categories={categories} />

        </div >
    )
}

