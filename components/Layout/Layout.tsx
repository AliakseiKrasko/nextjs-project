import * as React from 'react';
import {PropsWithChildren, ReactElement} from 'react';
import styles from '@/styles/Home.module.css';
import {Navbar} from '@/components/Navbar/Navbar';
import {NextPage} from 'next';


export const Layout: NextPage<PropsWithChildren> = (props) => {
    const {children} = props

    return (
        <main className={styles.main}>
            <Navbar/>
            {children}
        </main>
    );
};

export const getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>
}