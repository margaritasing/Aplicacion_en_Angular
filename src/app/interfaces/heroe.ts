export interface Heroe {

  id: string,
  name: string,
  slug: "1-a-bomb",
  powerstats: {
    intelligence: string,
    strength: string,
    speed: string,
    durability: string,
    power: string,
    combat:string
  },

  appearance: {
    male: string,


  },

  biography:{
    firstAppearance: string,
    alignment: string

  },

  images: {
    md: string,
    lg: string
  }

}
