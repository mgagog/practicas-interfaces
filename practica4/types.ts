enum Type {
    GRASS = "Grass",
    FIRE = "Fire",
    WATER = "Water",
    BUG = "Bug",
    NORMAL = "Normal",
    POISON = "Poison",
    ELECTRIC = "Electric",
    GROUND = "Ground",
    FAIRY = "Fairy",
    FIGHTING = "Fighting",
    PSYCHIC = "Psyquic"
}

export type Pokemon = {
    id: number;
    name: string;
    type: Type;
    base_experience: number;
}

export type User = {
    id: number;
    name: string;
    username: string;
    created_at: Date;
}

export type Quote = {
    id: number;
    quote: string;
}