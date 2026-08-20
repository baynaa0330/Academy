import Image from "next/image";

const products = [
  {
    name: "The Prompt Magazine",
    price: "120’000₮",
    image: "/prompt-magazine.png",
  },
  {
    name: "Charity Grey Tee",
    price: "120’000₮",
    image: "/figma-gray-sweatshirt.png",
  },
  {
    name: "All Smiles Nalgene",
    price: "120’000₮",
    image: "/smiley-water-bottle.png",
  },
  {
    name: "Wildflower Tote",
    price: "120’000₮",
    image: "/green-elephant-tote.png",
  },
  {
    name: "Abstract Shape Tee",
    price: "120’000₮",
    image: "/shape-coral-tshirt.png",
  },
  {
    name: "Charity Grey Tee",
    price: "120’000₮",
    image: "/figma-gray-sweatshirt-2.png",
  },
  {
    name: "Chunky Glyph Cap",
    price: "120’000₮",
    image: "/glyph-blue-cap.png",
    featured: true,
  },
  {
    name: "Local Styles Crewneck",
    price: "120’000₮",
    image: "/local-styles-burgundy-sweatshirt.png",
    featured: true,
  },
  {
    name: "Chunky Glyph Cap",
    price: "120’000₮",
    image: "/glyph-blue-cap-2.png",
  },
  {
    name: "Goodie Hoodie",
    price: "120’000₮",
    image: "/wildflower-cream-hoodie.png",
  },
  {
    name: "Wildflower Tote",
    price: "120’000₮",
    image: "/green-elephant-tote.png",
  },
  {
    name: "All Smiles Nalgene",
    price: "120’000₮",
    image: "/smiley-water-bottle-2.png",
  },
  {
    name: "The Prompt Magazine",
    price: "120’000₮",
    image: "/prompt-magazine-2.png",
  },
  {
    name: "Independent Corners Tee",
    price: "120’000₮",
    image: "/independent-corners-mint-tshirt.png",
  },
  {
    name: "Independent Corners Tee",
    price: "120’000₮",
    image: "/independent-corners-mint-tshirt.png",
  },
  {
    name: "The Prompt Magazine",
    price: "120’000₮",
    image: "/prompt-magazine-2.png",
  },
  {
    name: "Chunky Glyph Tee",
    price: "120’000₮",
    image: "/glyph-black-tshirt.png",
  },
  {
    name: "All smiles Nalgene",
    price: "120’000₮",
    image: "/smiley-water-bottle.png",
  },
];

export default function Body() {
  return (
    <div className="min-h-screen bg-white pb-20 text-black">
      <div className="relative mx-auto aspect-[2/1] max-w-[1280px] overflow-hidden bg-[#9bbfd2] sm:aspect-[2.65/1]">
        <Image
          src="/hoodie.png"
          alt="Black hoodie with blue flower artwork"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-[center_28%]"
        />
        <div className="absolute bottom-5 left-[14%] text-black">
          <h3 className="text-[18px] leading-7">Wildflower Hoodie</h3>
          <h1 className="text-[36px] font-bold leading-[1.2]">120’000₮</h1>
        </div>
      </div>

      <div className="mx-auto mt-5 max-w-[1034px] px-4 sm:px-0">
        <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-4 sm:gap-x-[18px] sm:gap-y-8">
          {products.map((product, index) => (
            <div
              key={`${product.name}-${index}`}
              className={product.featured ? "col-span-2 row-span-2" : "min-w-0"}
            >
              <div
                className={
                  product.featured
                    ? "relative aspect-[508/692] overflow-hidden rounded-2xl bg-black"
                    : "relative aspect-[245/331] overflow-hidden rounded-2xl bg-black"
                }
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes={
                    product.featured
                      ? "(max-width: 640px) 100vw, 508px"
                      : "(max-width: 640px) 50vw, 245px"
                  }
                  className="object-cover"
                />
                <button
                  type="button"
                  aria-label={`Add ${product.name} to favorites`}
                  className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-[17px] leading-none text-black backdrop-blur-sm transition hover:bg-black hover:text-white"
                >
                  ♡
                </button>
              </div>
              <div className="flex h-[52px] flex-col gap-1 pt-2 text-[11px] leading-4 text-black">
                <p className="truncate">{product.name}</p>
                <p className="font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
