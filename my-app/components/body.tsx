"use client";

import { useState } from "react";
import Image from "next/image";
import Reviews from "./reviews";

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
  const [showProduct, setShowProduct] = useState(false);
  const [selectedImage, setSelectedImage] = useState("/hoodie.png");
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    "/hoodie.png",
    "/similar.png",
    "/main body similar.png",
    "/green hoodie.webp",
  ];

  if (showProduct) {
    return (
      <main className="min-h-screen bg-white px-4 py-8 text-black sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => setShowProduct(false)}
          className="mb-6 text-sm underline underline-offset-4"
        >
          Back to products
        </button>

        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
          <div className="grid gap-4 sm:grid-cols-[82px_1fr]">
            <div className="order-2 flex gap-3 sm:order-1 sm:flex-col">
              {productImages.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`relative h-[70px] w-[70px] overflow-hidden rounded border-2 ${
                    selectedImage === image ? "border-black" : "border-transparent"
                  }`}
                >
                  <Image src={image} alt="Hoodie thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
            <div className="relative order-1 aspect-[4/5] overflow-hidden rounded-2xl bg-[#9bbfd2] sm:order-2">
              <Image
                src={selectedImage}
                alt="Wildflower Hoodie"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <section className="py-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mb-4 inline-block rounded-full border border-blue-500 px-3 py-1 text-xs">NEW</p>
                <h1 className="text-3xl font-bold sm:text-4xl">Wildflower Hoodie</h1>
              </div>
              <button type="button" aria-label="Add to favorites" className="text-3xl">♡</button>
            </div>
            <p className="mt-4 text-lg">Cotton hoodie with a wildflower graphic.</p>

            <h2 className="mt-7 mb-3 text-base font-normal underline underline-offset-4">Choose a size</h2>
            <div className="flex gap-2">
              {["S", "M", "L", "XL", "2XL"].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`h-10 min-w-10 rounded-full border px-3 ${
                    selectedSize === size ? "bg-black text-white" : "bg-white text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-5">
              <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="h-10 w-10 rounded-full border text-xl">-</button>
              <span>{quantity}</span>
              <button type="button" onClick={() => setQuantity(quantity + 1)} className="h-10 w-10 rounded-full border text-xl">+</button>
            </div>

            <p className="mt-7 text-2xl font-bold">120’000₮</p>
            <button type="button" className="mt-3 w-full rounded-full bg-blue-600 px-6 py-3 text-lg text-white hover:bg-blue-700">Add to cart</button>

            <div className="mt-16 border-b pb-5">
              <p className="mb-2">Rating <a href="#reviews" className="ml-4 text-blue-600 underline">Read all reviews</a></p>
              <p className="text-xl text-yellow-400">★★★★★ <span className="ml-2 text-base font-bold text-black">4.6</span> <span className="text-sm text-gray-500">(24)</span></p>
            </div>
            <Reviews />
          </section>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20 text-black">
      <button
        type="button"
        onClick={() => setShowProduct(true)}
        aria-label="View Wildflower Hoodie details"
        className="relative block w-full mx-auto aspect-[2/1] max-w-[1280px] overflow-hidden bg-[#9bbfd2] text-left sm:aspect-[2.65/1]"
      >
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
      </button>

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
