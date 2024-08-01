import Link from "next/link";

export default function Elavize() {
  return (
    <section className="w-full py-12 md:py-8 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap- lg:grid-cols-2 ">
          <img
            alt="Elavize screenshot"
            className="mx-auto overflow-hidden rounded-xl shadow-xl border object-contain sm:w-full lg:order-last"
            src="/Elavize.png"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                Elavize
              </div>
              <h2 className="text-2xl font-bold text-elavize-custom tracking-tighter sm:text-4xl">
                Crafting digital experiences.
              </h2>
                <p className="max-w-[600px] text-gray-500 text-sm md:text-base lg:text-sm xl:text-base dark:text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-elavize-custom hover:text-white"
                href="https://elavize.com/"
              >
                View Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
