import React from "react";
import Container from "../../components/ui/Container";
import useAsync from "../../hooks/useAsync";
import { listLocations } from "../../api/locations";
import branchImages from "./branchImages";

// Lines the first card up with the page container while letting the row
// scroll out to the right edge of the screen.
const rowInset =
  "px-4 scroll-px-4 sm:px-8 sm:scroll-px-8 md:px-[max(7%,calc((100%-1400px)/2))] md:scroll-px-[max(7%,calc((100%-1400px)/2))]";

const cardWidth = "w-[85%] shrink-0 snap-start sm:w-[376px]";

function BranchCard({ id, name, address, phones }) {
  const image = branchImages[id];

  return (
    <li className={cardWidth}>
      <div className="overflow-hidden rounded-3xl">
        <div className="aspect-[376/270] bg-placeholder">
          {image && (
            <img src={image} alt="" loading="lazy" className="h-full w-full object-cover" />
          )}
        </div>
        <h3 className="bg-primary px-4 py-1.5 text-center text-xl font-medium leading-[27px] text-white">
          {name}
        </h3>
      </div>

      <dl className="mt-2 space-y-2 text-body text-black">
        <div>
          <dt className="inline">Address: </dt>
          <dd className="inline">{address}</dd>
        </div>
        {phones.length > 0 && (
          <div>
            <dt className="inline">Contact: </dt>
            <dd className="inline">
              {phones.map((phone, i) => (
                <React.Fragment key={phone}>
                  {i > 0 && ", "}
                  <a href={`tel:${phone}`} className="hover:text-primary">
                    {phone}
                  </a>
                </React.Fragment>
              ))}
            </dd>
          </div>
        )}
      </dl>
    </li>
  );
}

function BranchCardSkeleton() {
  return (
    <li className={cardWidth} aria-hidden="true">
      <div className="aspect-[376/310] animate-pulse rounded-3xl bg-placeholder" />
      <div className="mt-3 h-5 w-3/4 animate-pulse rounded bg-placeholder" />
      <div className="mt-2 h-5 w-1/2 animate-pulse rounded bg-placeholder" />
    </li>
  );
}

function Branches() {
  const { status, data: branches } = useAsync(listLocations);

  if (status === "success" && branches.length === 0) return null;

  return (
    <section
      id="branches"
      aria-labelledby="branches-heading"
      // Keeps the heading clear of the sticky navbar when scrolled to via #branches.
      className="scroll-mt-20 py-12 md:scroll-mt-32 md:py-16"
    >
      <Container>
        <h2 id="branches-heading" className="text-heading font-semibold text-black">
          Our Branches
        </h2>
      </Container>

      {status === "error" ? (
        <Container>
          <p className="mt-6 text-body text-secondary">
            We couldn&apos;t load our branches right now. Please try again later.
          </p>
        </Container>
      ) : (
        <ul
          aria-busy={status === "loading"}
          className={`mt-12 md:mt-20 flex snap-x snap-mandatory gap-6 overflow-x-auto scrollbar-none ${rowInset}`}
        >
          {status === "loading"
            ? Array.from({ length: 3 }, (_, i) => <BranchCardSkeleton key={i} />)
            : branches.map((branch) => <BranchCard key={branch.id} {...branch} />)}
        </ul>
      )}
    </section>
  );
}

export default Branches;
