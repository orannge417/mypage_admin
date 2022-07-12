import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {PageTitle, TabContainer, TabButton, ShodanChangeContainer} from '../components/common/index'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>マイページ管理</title>
        <meta name="description" content="マイページの管理サイト(社外秘)" />
      </Head>

      <PageTitle title="商談情報変更" />

      <div className={styles.bodyContainer}>
        <TabContainer>
          <TabButton buttonTitle="商談情報変更" backColor="#A20000" link="/" />
          <TabButton buttonTitle="受注管理" backColor="#787778" link="/" />
          <TabButton buttonTitle="問合せ管理" backColor="#787778" link="/" />
          <TabButton buttonTitle="キャンセル管理" backColor="#787778" link="/" />
        </TabContainer>
        
        <ShodanChangeContainer />
      </div>

    </div>
  )
}
