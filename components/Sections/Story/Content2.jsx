import { Image } from "@mantine/core";
import React from "react";

function Content2() {
  return (
    <section className="relative pt-20 lg:pt-24 overflow-hidden">
      <Image
        className="absolute bottom-0 left-0"
        src="images/content/light-blue-left.png"
        alt=""
      />
      <div className="relative container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-md md:max-w-lg mx-auto lg:mx-0">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
                  RICH TEXT MODULE
                </span>
                <h1 className="font-heading text-4xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-12">
                  <span className="block">Saturn</span>
                  <span>is a beautiful</span>
                  <span className="block font-serif italic">UI Library</span>
                </h1>
                <p className="max-w-md text-lg xs:text-3xl font-semibold text-gray-400 mb-6">
                  Arcu ultrices sit non magna enim id semper quam venenatis. Mi
                  quisque ultrices hendrerit nec aliquet integer mollis faucibus
                  morbi.
                </p>
                <p className="max-w-md text-lg xs:text-3xl font-semibold text-gray-400">
                  Augue justo at convallis vitae nunc maecenas est. Viverra duis
                  feugiat posuere vitae tincidunt.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-md md:max-w-lg mx-auto lg:mr-0">
                <h3 className="text-xl xs:text-3xl font-semibold text-gray-800 mb-6">
                  Mi quisque ultrices hendrerit nec aliquet integer mollis
                  faucibus morbi.
                </h3>
                <ul className="mb-6">
                  <li className="flex mb-6 items-center">
                    <Image
                      className="w-6 h-6 mr-4"
                      src="images/content/check-green.svg"
                      alt=""
                      width="auto"
                      height="auto"
                    />
                    <span className="text-base xs:text-lg font-semibold text-gray-900">
                      Design Style well organized
                    </span>
                  </li>
                  <li className="flex mb-6 items-center">
                    <Image
                      className="w-6 h-6 mr-4"
                      src="images/content/check-green.svg"
                      alt=""
                      width="auto"
                      height="auto"
                    />
                    <span className="text-base xs:text-lg font-semibold text-gray-900">
                      Component Library with many variants
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Image
                      className="w-6 h-6 mr-4"
                      src="images/content/check-green.svg"
                      alt=""
                      width="auto"
                      height="auto"
                    />
                    <span className="text-base xs:text-lg font-semibold text-gray-900">
                      All limited links
                    </span>
                  </li>
                </ul>
                <p className="text-lg text-gray-700 mb-5">
                  Pellentesque ipsum nulla in eget interdum a. Neque
                  pellentesque pulvinar mauris pulvinar diam. Turpis aliquet
                  pellentesque velit vitae nisi sed morbi ultrices sed. Egestas
                  interdum elit integer nec pharetra eget blandit dolor purus. A
                  sed nisi congue morbi fermentum blandit. Turpis pretium
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
                <Image
                  className="block w-full"
                  src="images/content/photo-content2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content2;
