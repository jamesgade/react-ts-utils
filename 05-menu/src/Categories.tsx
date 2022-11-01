import { useState } from "react";

const Categories = ({ categories, filterItems }: any) => {

    const [selectedCategory, setSelectedCategory] = useState('all')

    return (
        <div className="btn-container">
            {categories.map((category: string, index: number) => (
                <button
                    key={index}
                    className={`filter-btn ${selectedCategory === category && 'selected'}`}
                    type="button"
                    onClick={() => {
                        filterItems(category)
                        setSelectedCategory(category)
                    }}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}

export default Categories;
