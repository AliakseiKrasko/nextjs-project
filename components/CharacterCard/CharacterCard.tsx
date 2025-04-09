import * as React from 'react';
import Image from 'next/image';
import {CharacterType} from '@/assets/hooks/useCharacters';

type PropsType = {
    character: CharacterType
};
export const CharacterCard = (props: PropsType) => {
    const {character} = props

    return (
        <div>
            <div>{character.name}</div>
            <Image src={character.image}
                   alt={`Picture of ${character.name}`}
                   width={300}
                   height={300}
            />
        </div>
    );
};