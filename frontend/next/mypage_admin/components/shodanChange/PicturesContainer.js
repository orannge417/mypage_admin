import styles from './PicturesContainer.module.css'
import {BoxContainer, ContainerTitle, EditBtn} from '../common/index'

import Image from 'next/image'
import {React, useState} from "react"

export default function PicturesContainer(props) {

    return(<>
        <BoxContainer>
            <ContainerTitle Title="写真編集" />

            <div className={styles.smallImagesContainer}>
                <div className={`${styles.smallImageContainer} ${styles.selectedImage}`}>
                    <Image src={"/images/partsImages/exSilencer1.jpg"} 
                        layout='fill' objectFit="contain" alt='部品画像' />
                </div>
                <div className={styles.smallImageContainer}>
                    <Image src={"/images/partsImages/exSilencer2.jpg"} 
                        layout='fill' objectFit="contain" alt='部品画像'/>
                </div>
                <div className={styles.smallImageContainer}>
                    <Image src={"/images/partsImages/exSilencer3.jpg"} 
                        layout='fill' objectFit="contain" alt='部品画像' />
                </div>
                <div className={styles.smallImageContainer}>
                    <Image src={"/images/partsImages/exSilencer1.jpg"} 
                        layout='fill' objectFit="contain" alt='部品画像' />
                </div>
                <div className={styles.smallImageContainer}>
                    <Image src={"/images/partsImages/exSilencer2.jpg"} 
                        layout='fill' objectFit="contain" alt='部品画像' />
                </div>
            </div>

            
        </BoxContainer>
    </>)
}