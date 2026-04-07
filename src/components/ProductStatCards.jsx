import React from 'react';

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1582719471384-82a0b12bc1d8?auto=format&fit=crop&w=400&q=80",
    brand: "Brothers in Style",
    title: "Scheerapparaat Mannen 8-in-1 - Skull Master Pro - Hoofd Scheerapparaten - Head Shaver - Elektrische Shaver -...",
    subtitle: "Type baardgroei: Licht, Middel • Snel laden functionaliteit • Spoelbaar • Geschikt voor nat...",
    rating: 5,
    reviews: 560,
    sales: [
      { label: "1 Maand", value: "534" },
      { label: "3 Maanden", value: "1.530" },
      { label: "1 Jaar", value: "4.437" },
    ],
    omzet: [
      { label: "1 Maand", value: "€ 27.869,66" },
      { label: "3 Maanden", value: "€ 78.597,60" },
      { label: "1 Jaar", value: "€ 236.853,55" },
    ]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=400&q=80",
    brand: "Brothers in Style",
    title: "Foil Shaver Triple Blade - Scheerapparaat Mannen - Elektrisch Shaver - Hoofd Kaal - Brothers in Style",
    subtitle: "Type baardgroei: Middel, Licht • Snel laden functionaliteit • Spoelbaar • Geschikt voor nat...",
    rating: 4.5,
    reviews: 560,
    sales: [
      { label: "1 Maand", value: "152" },
      { label: "3 Maanden", value: "381" },
      { label: "1 Jaar", value: "1.129" },
    ],
    omzet: [
      { label: "1 Maand", value: "€ 9.463,48" },
      { label: "3 Maanden", value: "€ 23.501,19" },
      { label: "1 Jaar", value: "€ 71.741,71" },
    ]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1593998066526-65fcab3021a2?auto=format&fit=crop&w=400&q=80",
    brand: "Brothers in Style",
    title: "Baardtrimmer Mannen Pro - Trimmer Mannen - Haartrimmer - Trimapparaat - Multigroomer - Brothers in Style",
    subtitle: "Type baardgroei: Licht, Middel, Zwaar • Snel laden functionaliteit • Geschikt voor nat scheren",
    rating: 5,
    reviews: 61,
    sales: [
      { label: "1 Maand", value: "106" },
      { label: "3 Maanden", value: "316" },
      { label: "1 Jaar", value: "974" },
    ],
    omzet: [
      { label: "1 Maand", value: "€ 6.548,94" },
      { label: "3 Maanden", value: "€ 19.396,84" },
      { label: "1 Jaar", value: "€ 61.738,26" },
    ]
  }
];

const ProductStatCards = () => {
  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="overflow-hidden rounded-2xl bg-white shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-transform duration-500 hover:-translate-y-2">
              <div className="relative aspect-[4/3] w-full bg-[#FAFAFA] p-6 flex items-center justify-center">
                <button aria-label="Favorite" className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-slate-400 shadow-sm transition-colors hover:text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[18px] w-[18px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </button>
                <img src={product.image} alt={product.title} className="h-full w-full object-contain mix-blend-multiply" />
              </div>

              <div className="p-6 text-slate-800">
                <div className="mb-2.5 text-[11px] font-medium text-slate-500">{product.brand}</div>
                <h3 className="mb-2 line-clamp-3 text-sm font-bold leading-normal">{product.title}</h3>
                <p className="mb-3 line-clamp-2 text-[11px] leading-relaxed text-slate-500">{product.subtitle}</p>
                
                <div className="mb-6 flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                  <div className="flex text-[#F5B014]">
                    {[...Array(Math.floor(product.rating))].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                    {product.rating % 1 !== 0 && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 opacity-40">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span>({product.reviews})</span>
                </div>

                <div className="space-y-5">
                  <div>
                    <h4 className="mb-2 text-[13px] font-bold text-slate-900">Sales</h4>
                    <div className="space-y-1 text-[11px]">
                      {product.sales.map((sale) => (
                        <div key={sale.label} className="grid grid-cols-2">
                          <span className="text-slate-500">{sale.label}</span>
                          <span className="text-right font-medium text-slate-800">{sale.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="mb-2 text-[13px] font-bold text-slate-900">Omzet</h4>
                    <div className="space-y-1 text-[11px]">
                      {product.omzet.map((item) => (
                        <div key={item.label} className="grid grid-cols-2">
                          <span className="text-slate-500">{item.label}</span>
                          <span className="text-right font-medium text-slate-800">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductStatCards;
