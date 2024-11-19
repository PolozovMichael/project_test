'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Footer, Media } from '../../../../payload/payload-types'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constants'
import { Button } from '../../Button'
import { Gutter } from '../../Gutter'

import styles from './index.module.scss'

function FooterComponent({ footer }: { footer: Footer }) {
  const pathname = usePathname()

  const navItems = footer?.navItems || []

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? styles.hide : ''}>
      <Gutter>
        <ul className={styles.inclusions}>
          {inclusions.map((inclusion, idx) => (
            <li key={idx}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={styles.icon}
              />
              <h5 className={styles.title}>{inclusion.title}</h5>
              <p className={styles.description}>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>
      <div className={styles.footer}>
        <Gutter>
          <div className={styles.wrap}>
            <Link href="/">
              <Image src="/logo-white.svg" alt="logo" width={170} height={50} />
            </Link>
            <p>{footer.copyright}</p>
            <div className={styles.socialLinks}>
              {navItems.map((item, idx) => {
                const icon = item?.link?.icon as Media
                return (
                  <Button
                    el="link"
                    href={item.link.url}
                    newTab
                    key={idx}
                    className={styles.socialLinkItem}
                  >
                    <Image
                      src={icon?.url}
                      alt={item.link.label}
                      width={24}
                      height={24}
                      className={styles.socialIcon}
                    />
                  </Button>
                )
              })}
            </div>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
