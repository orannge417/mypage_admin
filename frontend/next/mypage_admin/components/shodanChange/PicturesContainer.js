import styles from './PicturesContainer.module.css'
import {BoxContainer, ContainerTitle, PictureDragDrop} from '../common/index'

import Image from 'next/image'
import {React, useState, useCallback} from "react"
import { useDropzone } from 'react-dropzone';


export default function PicturesContainer(props) {
    const[previewUrl, setPreviewUrl] = useState(""); 
    let imageCount = 0

    const accept = "image/*"; //"image/jpeg, image/png";
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);

        let data = []
            data.push(acceptedFiles[0])
            setPreviewUrl(window.URL.createObjectURL(new Blob(data)))
        
        imageCount += 1
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept,
        onDrop,
    });

    return(<>
        <BoxContainer>
            <ContainerTitle Title="画像編集" />

            <div className={styles.smallImagesContainer}>
                <div className={`${styles.smallImageContainer} ${styles.selectedImage}`}>
                    <Image src={"/images/partsImages/exSilencer1.jpg"} 
                        layout='fill' objectFit="contain" alt='部品画像' />
                    
                    <button className={styles.DeleteBtn}>x</button>
                </div>
                <div className={styles.smallImageContainer}>
                    <Image src={"/images/partsImages/exSilencer2.jpg"} 
                        layout='fill' objectFit="contain" alt='部品画像'/>
                    <button className={styles.DeleteBtn}>x</button>
                </div>
                <div className={styles.smallImageContainer}>
                    <Image src={"/images/partsImages/exSilencer3.jpg"} 
                        layout='fill' objectFit="contain" alt='部品画像' />
                    <button className={styles.DeleteBtn}>x</button>
                </div>
                <div className={styles.smallImageContainer}>
                    <Image src={"/images/partsImages/exSilencer1.jpg"} 
                        layout='fill' objectFit="contain" alt='部品画像' />
                    <button className={styles.DeleteBtn}>x</button>
                </div>
                <div className={styles.smallImageContainer}>
                    <Image src={"/images/partsImages/exSilencer2.jpg"} 
                        layout='fill' objectFit="contain" alt='部品画像' />
                    <button className={styles.DeleteBtn}>x</button>
                </div>
            </div>

            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <div className={styles.dragContainer}>
                        <p>ドラッグアンドドロップで写真を追加</p>
                    </div>
                ) : (
                    <div className={styles.dragContainer}>
                        <p>ドラッグアンドドロップ、またはクリックで写真を追加</p>
                    </div>
                )}
            </div>  

            <img src={previewUrl} />

        </BoxContainer>
    </>)
}