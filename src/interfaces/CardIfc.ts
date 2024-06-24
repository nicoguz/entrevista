export default interface CardProps {
    id: number,
    character: Character,
    imgSrc: string,
    imgAlt: string,
    title: string,
    description: string
}

export interface Character {
    id: number,
    name: { first: string, middle?: string, last: string},
    images: { main: string },
    age: number,
    gender: string,
    species: string,
    occupation: string
    homePlanet: string,
    sayings: string[],
}