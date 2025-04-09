import Head from "next/head";
import styles from "@/styles/Home.module.css";
import {Inter} from 'next/font/google';
import React from 'react';
import {useCharacters} from '@/assets/hooks/useCharacters';
import {CharacterCard} from '@/components/CharacterCard/CharacterCard'
import {HeadMeta} from '@/components/HeadMeta/HeadMeta';
import {Navbar} from '@/components/Navbar/Navbar';

const inter = Inter({subsets: ['latin']})

export default function Characters() {
    const characters = useCharacters()

    return (
        <>
            <HeadMeta title={'Characters'} />
            <main className={`${styles.main} ${inter.className}`}>
                <Navbar />
                {characters && characters.map(character => (
                    <CharacterCard key={character.id} character={character}/>
                ))}
            </main>
        </>
    );
}

