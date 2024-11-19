'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Header } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'

import styles from './index.module.scss'

function HeaderComponent({ header }: { header: Header }) {
  const pathname = usePathname()

  return (
    <nav
      className={[styles.header, noHeaderFooterUrls.includes(pathname) && styles.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={styles.wrap}>
        <Link href="/">
          <Image width={170} height={50} src="/logo-black.svg" alt="" />
        </Link>
        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
