
export type EmbedType = 'youtube'  | 'reddit' | 'twitter' | 'spotify'

export type EmbdedProps = { 
    url: string; 
    className?: string; 
    height?:number; 
    width?:string;
}


export {default as Renderer} from "./Renderer"; 
export {default as YoutubeEmbed} from "./YoutubeEmbed"; 
export {default as RedditEmbed} from "./RedditEmbed"; 
export {default as TwitterEmbed} from "./TwitterEmbed"; 
export {default as SpotifyEmbed} from "./SpotifyEmbed";

