// import { getInfo, refreshAll,logout } from '../../methods/login'
// import { Login } from '../organisms/login'
import styles from './layouts.module.css'
import {LogoButton} from './index'
import React from 'react'

export const Layout = props => {
    // const infoFetcher = async () => {
    //     const info = await getInfo()
    //     return info
    // }
    // const refreshFetcher = async () => {
    //     const refreshed = await refreshAll()
    //     return refreshed
    // }

    // const executeLogout = async() => {
    //     setIsDisabled(true)
    //     await logout()
    //     mutate()
    //     setTimeout(() => {
    //         setIsDisabled(false)
    //     },5000)
    // }
    // const {data: info, mutate} = useSWR(process.env.NEXT_PUBLIC_API_ENDPOINT+"/request-info/", infoFetcher)
    // const {error} = useSWR(info ? null : process.env.NEXT_PUBLIC_API_ENDPOINT+"/auth/refresh/", refreshFetcher,{onSuccess : mutate()})
    // const [isDisabled, setIsDisabled] = useState(true)
    
    // if (props.children.type.name == "NotFound") {
    //     return (<>
    //     <header className={styles.header}>
    //         <LogoButton/>
    //         {props.children}
    //     </header>
    //     </>)
    // }
    
    // setTimeout(() => {
    //     setIsDisabled(false)
    // },3000)
    
    // if (error) return <Login mutate = {mutate}/>
    // if (!info) return <LinearProgress />
    // const childWithInfo = React.cloneElement(props.children, {info})
    return (<>
        <header className={styles.header}>
            <LogoButton/>
        </header>   
        <main>{props.children}</main>
    </>)
}