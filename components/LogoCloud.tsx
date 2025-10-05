import Image from "next/image";

interface ProductProps {
  src: string;
  alt: string;
}

export default function LogoCloud() {
  const Products: ProductProps[] = [
    {
      src: "https://files.svgcdn.io/garden/twitter-stroke-16.svg",
      alt: "Twitter",
    },
    {
      src: "https://files.svgcdn.io/simple-icons/notion.svg",
      alt: "Notion",
    },
    {
      src: "https://files.svgcdn.io/simple-icons/reddit.svg",
      alt: "Reddit",
    },
    {
      src: "https://files.svgcdn.io/zmdi/github.svg",
      alt: "Github",
    },
    {
      src: "https://files.svgcdn.io/whh/youtube.svg",
      alt: "Youtube",
    },
  ];

  return (
    <section className="bg-background py-25 ">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-lg font-medium"></h2>
        <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
          {Products.map((product, index) => (
            <div key={index} className="flex gap-3 dark:text-neutral-200 text-neutral-700"> 
              <Image
                className="h-5 w-fit dark:invert"
                src={product.src}
                alt={product.alt}
                height="20"
                width="40"
                key={index}
              />
              <p className="text-sm">{product.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
