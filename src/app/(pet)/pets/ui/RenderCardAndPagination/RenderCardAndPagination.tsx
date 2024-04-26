"use client";
import CardsPets from "@/components/ui/CardPets/CardPets";
import PaginationFilter from "../PaginationFilter/PaginationFilter";
import { Key, useState } from "react";

export default function RenderCardAndPagination({ pets }: any) {
  const dimPetsCards = pets.length;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showPorPage, setShowPorPage] = useState<number>(10);
  const maxPage = Math.round(dimPetsCards / 10);
  return (
    <section className="flex flex-col items-center">
      <article className=" grid grid-cols-gridResponsiveFilter justify-items-center gap-10 w-full pt-20 lg:px-16">
        {pets
          .map(
            (
              item: {
                name: any;
                slug: any;
                species: any;
                province: any;
                photos: any;
              },
              index: Key | null | undefined
            ) => {
              const { name, slug, species, province, photos } = item;
              return (
                <CardsPets
                  key={index}
                  image={photos[0]}
                  name={name}
                  province={province.name}
                  typeOfAnimal={species.name}
                  slug={slug}
                />
              );
            }
          )
          .slice(
            (currentPage - 1) * showPorPage,
            (currentPage - 1) * showPorPage + showPorPage
          )}
      </article>
      <PaginationFilter
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        maxPage={maxPage}
      />
    </section>
  );
}
