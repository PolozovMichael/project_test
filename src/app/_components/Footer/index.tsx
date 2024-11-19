import React from 'react'
import Link from 'next/link'

import { Footer as FooterType } from '../../../payload/payload-types'
import { fetchFooter } from '../../_api/fetchGlobals'
import FooterComponent from './FooterComponent'

import styles from './index.module.scss'

export async function Footer() {
  let footer: FooterType | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    console.log(error)
  }

  const navItems = footer?.navItems || []

  return (
    <footer>
      <>
        <FooterComponent footer={footer} />
      </>
    </footer>
  )
}
