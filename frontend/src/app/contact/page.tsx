import { Navbar } from "@/modules/layout/navbar";

export default function ContactSection() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-12 lg:pb-20 mx-auto">
        <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
          <h2 className="font-medium text-foreground text-2xl sm:text-4xl">
            Contacts
          </h2>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
        <div className="aspect-[16/6] lg:aspect-[16/14] overflow-hidden bg-surface rounded-2xl">
          <img
            className="size-full group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
            src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contacts"
          />
        </div>
        {/* End Col */}

        <div className="space-y-8 lg:space-y-16">
          <div>
            <h3 className="mb-5 font-semibold text-foreground">Our address</h3>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              <div className="flex gap-4">
                <svg
                  className="shrink-0 size-5 text-muted-foreground-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>

                <div className="grow">
                  <p className="text-sm text-muted-foreground-2">
                    LCR- 542, Phase-i.
                  </p>
                  <address className="mt-1 text-foreground not-italic">
                    Rourkela - 15, Sundergarh
                    <br />
                    Orissa, India 769015
                  </address>
                </div>
              </div>
            </div>
            {/* End Grid */}
          </div>

          <div>
            <h3 className="mb-5 font-semibold text-foreground">Our contacts</h3>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              <div className="flex gap-4">
                <svg
                  className="shrink-0 size-5 text-muted-foreground-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
                </svg>

                <div className="grow">
                  <p className="text-sm text-muted-foreground-2">Email us</p>
                  <p>
                    <a
                      className="font-medium text-foreground hover:text-primary transition-colors"
                      href="mailto:support@zenvitals.in"
                    >
                      support@zenvitals.in
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg
                  className="shrink-0 size-5 text-muted-foreground-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>

                <div className="grow">
                  <p className="text-sm text-muted-foreground-2">
                    Text us on whatsapp
                  </p>
                  <p>
                    <a
                      className="font-medium text-foreground hover:text-primary transition-colors"
                      href="tel:9692519941"
                    >
                      +91 9692519941
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Grid */}
          </div>
        </div>
        {/* End Col */}
      </div>
    </div>
    </>
  );
}
