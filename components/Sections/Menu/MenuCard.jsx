import { Image } from "@mantine/core";
import React from "react";

function MenuCard({ reverse }) {
  return (
    <section className="py-20 lg:py-24">
      <div className="px-4">
        <div
          className={
            reverse
              ? "flex flex-wrap -mx-4 flex-row-reverse"
              : "flex flex-wrap -mx-4"
          }
        >
          <div className="relative w-full lg:w-1/2 px-4 mb-12 lg:mb-0 lg:pr-24 xl:pr-40">
            <div className="max-w-md md:max-w-lg mx-auto lg:mr-0 mb-12 md:mb-20">
              <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
                SPICE
              </span>
              <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900">
                <span className="block">Our</span>
                <span>baked with love</span>
                <span className="block font-serif italic">Desi Pasta</span>
              </h1>
            </div>
            <Image
              className="block w-full"
              src="images/content/image-big-article.png"
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-md md:max-w-lg xl:max-w-2xl mx-auto lg:mx-0">
              <p className="text-2xl text-gray-800 mb-8">
                Arcu ultrices sit non magna enim id semper quam venenatis. Mi
                quisque ultrices hendrerit nec aliquet integer mollis faucibus
                morbi. Augue justo at convallis vitae nunc maecenas est. Viverra
                duis feugiat posuere vitae tincidunt. Sed tristique sit faucibus
                nisi rutrum lacus. Sollicitudin non pretium commodo ut
                fermentum.
              </p>
              <p className="text-lg font-semibold text-gray-800 mb-8">
                Pellentesque ipsum nulla in eget interdum a. Neque pellentesque
                pulvinar mauris pulvinar diam.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Egestas interdum elit integer nec pharetra eget blandit dolor
                purus. A sed nisi congue morbi fermentum blandit. Turpis pretium
                dignissim risus ultrices purus et amet netus nibh.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Vestibulum est ante in congue a fusce nunc. At tristique donec
                nisi viverra vulputate blandit orci at lectus. Morbi cras urna
                congue ornare. Mi magna vestibulum tortor id nec tortor non.
                Enim orci lorem egestas sed morbi dui mauris etiam nulla.
                Euismod cursus viverra ut ac eu sit quam amet tempor. Id in
                suspendisse nam sit vitae ullamcorper mollis et ut.
              </p>
              <p className="text-lg text-gray-700">
                Egestas interdum elit integer nec pharetra eget blandit dolor
                purus. A sed nisi congue morbi fermentum blandit. Turpis pretium
                dignissim risus ultrices purus et amet netus nibh. Vestibulum
                est ante in congue a fusce nunc. At tristique donec nisi viverra
                vulputate blandit orci at lectus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuCard;
