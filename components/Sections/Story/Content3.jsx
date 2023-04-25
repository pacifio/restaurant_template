import { Image } from "@mantine/core";
import React from "react";

function Content3() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      <Image
        width="auto"
        height="auto"
        className="absolute top-0 left-0 mt-44"
        src="images/content/stars-left-top.svg"
        alt=""
      />
      <Image
        width="auto"
        height="auto"
        className="absolute top-0 right-0 mt-52"
        src="images/content/blue-light-right.png"
        alt=""
      />
      <div className="relative container px-4 mx-auto">
        <div className="max-w-lg lg:max-w-3xl xl:max-w-5xl mx-auto">
          <div className="flex flex-wrap -mx-4 mb-16">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-lg">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
                  RICH TEXT MODULE
                </span>
                <h2 className="font-heading text-3xl xs:text-4xl font-semibold text-gray-800">
                  All in one for you payment transaction online without having
                  to leave the house to make transactions
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-lg">
                <p className="text-lg font-semibold text-gray-900 mb-5">
                  Pellentesque ipsum nulla in eget interdum a. Neque
                  pellentesque pulvinar mauris pulvinar diam.
                </p>
                <p className="text-lg text-gray-900 mb-5">
                  Turpis aliquet pellentesque velit vitae nisi sed morbi
                  ultrices sed. Egestas interdum elit integer nec pharetra eget
                  blandit dolor purus. A sed nisi congue morbi fermentum
                  blandit. Turpis pretium dignissim risus ultrices purus et amet
                  netus nibh.
                </p>
                <p className="text-lg text-gray-500">
                  Vestibulum est ante in congue a fusce nunc. At tristique donec
                  nisi viverra vulputate blandit orci at lectus. Morbi cras urna
                  congue ornare. Mi magna vestibulum tortor id nec tortor non.
                  Enim orci lorem egestas sed morbi dui mauris etiam nulla.
                  Euismod cursus viverra ut ac eu sit quam amet tempor. Id in
                  suspendisse nam sit vitae ullamcorper mollis et ut.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="block w-full"
              src="images/content/photo-article-large.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content3;
