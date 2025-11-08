
export function extractSpotifyId(url: string){ 
    const match = url.match(/spotify\.com\/(track|album|playlist|artist|episode|show)\/([a-zA-Z0-9]+)/);
    if(!match){ 
        return null
    }

    return { 
        type: match[1], 
        id: match[2]
    }
}

export function getYouTubeId(url: string): string | null {
    const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&?\/\s]{11})/);
    return match ? match[1] : null;
  }