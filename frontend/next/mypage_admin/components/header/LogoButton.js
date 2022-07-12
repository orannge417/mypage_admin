import Link from 'next/link'
import Image from 'next/image'
import styles from './LogoButton.module.css'
export default function LogoButton(props) {
    return(
        <div className={styles.logoContainer}>
            <Link href={"/"} passHref>
                <Image className={styles.logoImage}
                    src="/images/logo.png"
                    alt="logo"
                    width={330}
                    height={330*68/614}
                />
            </Link>
        </div>
    )
}