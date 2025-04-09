import React from 'react';
import {useCharacters} from '@/assets/hooks/useCharacters';
import {CharacterCard} from '@/components/CharacterCard/CharacterCard'
import {HeadMeta} from '@/components/HeadMeta/HeadMeta';
import {Navbar} from '@/components/Navbar/Navbar';
import {getLayout} from '@/components/Layout/Layout';


function Characters() {
    const characters = useCharacters()

    return (
        <>
            <HeadMeta title={'Characters'} />
                {characters && characters.map(character => (
                    <CharacterCard key={character.id} character={character}/>
                ))}
        </>
    );
}

Characters.getLayout = getLayout
export default Characters
