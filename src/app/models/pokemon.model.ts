export interface Pokedex {
    count : number;
    next? : string;
    previous? : string;
    results : Result[];
}

export interface Result {
    name : string;
    url : string;
}

export interface Pokemon {
    name : string;
    weight : number;
    sprites : Sprites;
}

export interface Sprites {
    back_default : string;
    front_default : string;
    other : any;
}

export interface Other {
    official_artwork : OfficialNetwork
}

export interface OfficialNetwork {
    front_default : string;
}


