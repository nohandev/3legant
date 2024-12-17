import style from './styles/FilterByCategory.module.css';
import categoryLogo from '../assets/categories.js';

const FilterByCategory = () => {

  const categoriesList = [
    {id: 1, category: "Puffers", img: categoryLogo.category1},
    {id: 2, category: "Bombers", img: categoryLogo.category2},
    {id: 3, category: "Lightweight jackets", img: categoryLogo.category3},
    {id: 4, category: "Gilets", img: categoryLogo.category4},
    {id: 5, category: "Coats", img: categoryLogo.category5},
    {id: 6, category: "Rainwear", img: categoryLogo.category6},
  ]

  return (
    <section className={style.categoryContainer}>
      <div className={style.categoryContent}>
        <h1>Shop by categories</h1>
        <div className={style.categoriesList}>
          {categoriesList.map(category => (
            <div className={style.categoryCard} key={category.id}>
              <img src={category.img} alt={category.category} />
              <p>{category.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FilterByCategory
