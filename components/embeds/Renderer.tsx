"use client";
import { EmbdedProps, EmbedType } from ".";
import RedditEmbed from "./RedditEmbed";
import TwitterEmbed from "./TwitterEmbed";
import YoutubeEmbed from "./YoutubeEmbed";
import SpotifyEmbed from "./SpotifyEmbed";

const MAP: Record<EmbedType, React.ComponentType<EmbdedProps>> = {
  youtube: YoutubeEmbed,
  reddit: RedditEmbed,
  twitter: TwitterEmbed,
  spotify: SpotifyEmbed,
};

type Props = EmbdedProps & { tag: EmbedType };

export default function Renderer({ url, tag, ...rest }: Props) {
  const Component = MAP[tag];

  if (!Component) return null;

  return <Component url={url} {...rest} />;
}
