"use client";

export default function HomeClient() {
  return (
    <section className="min-h-screen bg-[#1d3a32] flex items-center py-20 pt-32 z-10">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-right mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black-900">
            HUBUNGI KAMI
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
          <div className="rounded-3xl overflow-hidden">
            <img
              src="/images/asd.png"
              alt="World map"
              className="w-80 max-w-xs h-auto object-contain"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-slate-700">
                  📞
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    +62 21 502 88869
                  </p>
                  <p className="text-sm text-slate-500">
                    Dari 8 pagi sampai 5 sore WIB
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-slate-700">
                  📍
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    Jakarta - Indonesia
                  </p>
                  <p className="text-sm text-slate-500">
                    Kantor pusat kami
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-slate-700">
                  ✉️
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    Email Kami
                  </p>
                  <p className="text-sm text-slate-500">
                    care@sinaras.org
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-slate-700">
                  🎓
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    Beasiswa
                  </p>
                  <p className="text-sm text-slate-500">
                    Yayasan Dharma Eka Tjipta Widjaja
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-slate-500">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300">
                F
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300">
                T
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300">
                I
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300">
                D
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300">
                Y
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300">
                L
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}