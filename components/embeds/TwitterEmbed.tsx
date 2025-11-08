import { Tweet } from "react-tweet";

export default function TwitterEmbed({
  url,
}: {
  url: string;
  theme?: "dark" | "light";
  height?: number;
}) {
  const match = url.match(/status\/(\d+)/);
  const id = match ? match[1] : null;

  if (!id) return <p className="text-red-500">Invalid Twitter URL</p>;

  return (
    <>
      <Tweet id={id} />
    </>
  );
}
