import { extractSpotifyId } from "@/lib/utils/extractSpotifyId";
import { EmbdedProps } from ".";

export default function SpotifyEmbed({ url }: EmbdedProps) {
  const data = extractSpotifyId(url);

  if (!data) return <p className="text-red-500">Invalid Spotify URL</p>;

  const { type, id } = data;

  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src={`https://open.spotify.com/embed/${type}/${id}`}
      width="100%"
      height="152"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
