import React from 'react'
import Link from 'next/link'

import { Category } from '../../../payload/payload-types'
import CategoryCard from './CategoryCard'

import classes from './index.module.scss'

function Categories({ categories }: { categories: Category[] }) {
  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3>Shop by categories</h3>
        <Link href="/products">Show all</Link>
      </div>
      <div className={classes.list}>
        {categories?.map(category => (
          <CategoryCard key={category?.id} category={category} />
        ))}
      </div>
    </section>
  )
}

export default Categories
