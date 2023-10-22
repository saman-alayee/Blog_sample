import React from 'react'
import styles from './serarchBtn.module.css'
import { BiSearchAlt } from 'react-icons/bi'

type searchProp = {
    openSearch: () => void
}

export const MobileSearchBtn = ({ openSearch }:searchProp) => {
    return <button onClick={() => openSearch()} className={styles.searchBtn}><BiSearchAlt /></button>

}

export const DesktopSearchBtn = () => {
    return <button className={styles.searchBtn}><BiSearchAlt /></button>

}



