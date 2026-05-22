import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  tag: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "VOLTAGE HOODIE 01",
    price: "0.12 ETH",
    image: "/images/product-1.jpg",
    tag: "CORE",
  },
  {
    id: 2,
    name: "AMP TEE — PINK GLITCH",
    price: "0.04 ETH",
    image: "/images/product-2.jpg",
    tag: "CORE",
  },
  {
    id: 3,
    name: "ENERGY CAP",
    price: "0.03 ETH",
    image: "/images/product-3.jpg",
    tag: "ACCESSORY",
  },
  {
    id: 4,
    name: "DECENTRALIZED JERSEY",
    price: "0.08 ETH",
    image: "/images/product-4.jpg",
    tag: "LIMITED",
  },
];

export default function App() {
  const [cart, setCart] = useState<number[]>([]);
  const [glitchActive, setGlitchActive] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(false);
      setTimeout(() => setGlitchActive(true), 150);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const addToCart = (id: number) => {
    setCart([...cart, id]);
    // haptic
    if (navigator.vibrate) navigator.vibrate(10);
  };

  return (
    <div className="bg-black text-white min-h-screen font-mono antialiased selection:bg-[#ff0080] selection:text-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Space+Grotesk:wght@300;500;700&display=swap');
        
        * {
          font-variant-ligatures: none;
        }
        
        body {
          font-family: 'IBM Plex Mono', monospace;
          background: #000;
        }
        
        h1, h2, h3 {
          font-family: 'Space Grotesk', sans-serif;
          letter-spacing: -0.02em;
        }

        .glitch-layer {
          background-image: url('/images/hero.jpg');
          background-size: cover;
          background-position: center;
        }
        
        .glitch-1 {
          clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
          transform: translateX(-2px);
          animation: glitch-1 2.5s infinite linear alternate-reverse;
          filter: hue-rotate(90deg) saturate(1.5);
        }
        
        .glitch-2 {
          clip-path: polygon(0 60%, 100% 60%, 100% 65%, 0 65%);
          transform: translateX(2px);
          animation: glitch-2 3s infinite linear alternate-reverse;
          filter: hue-rotate(180deg) saturate(1.5);
        }
        
        .glitch-3 {
          clip-path: polygon(0 80%, 100% 80%, 100% 85%, 0 85%);
          transform: translateX(-1px);
          animation: glitch-3 2s infinite linear alternate-reverse;
          filter: hue-rotate(270deg);
        }
        
        @keyframes glitch-1 {
          0% { transform: translateX(-2px); clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); }
          20% { transform: translateX(2px); clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%); }
          40% { transform: translateX(-1px); clip-path: polygon(0 40%, 100% 40%, 100% 44%, 0 44%); }
          60% { transform: translateX(3px); clip-path: polygon(0 55%, 100% 55%, 100% 60%, 0 60%); }
          80% { transform: translateX(-3px); clip-path: polygon(0 75%, 100% 75%, 100% 78%, 0 78%); }
          100% { transform: translateX(1px); clip-path: polygon(0 90%, 100% 90%, 100% 95%, 0 95%); }
        }
        
        @keyframes glitch-2 {
          0% { transform: translateX(2px); }
          25% { transform: translateX(-2px); clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%); }
          50% { transform: translateX(1px); clip-path: polygon(0 10%, 100% 10%, 100% 13%, 0 13%); }
          75% { transform: translateX(-1px); clip-path: polygon(0 70%, 100% 70%, 100% 72%, 0 72%); }
          100% { transform: translateX(3px); }
        }
        
        @keyframes glitch-3 {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.8; transform: translateX(-3px) skew(2deg); }
        }
        
        .scanlines::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0,0,0,0) 0px,
            rgba(0,0,0,0) 2px,
            rgba(255,0,128,0.03) 3px,
            rgba(0,0,0,0) 4px
          );
          pointer-events: none;
          z-index: 10;
        }
        
        .noise::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          opacity: 0.035;
          mix-blend-mode: screen;
          pointer-events: none;
        }
        
        .grid-lines {
          background-image: 
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-2xl">
        <div className="mx-auto max-w-[1800px] px-6 md:px-10 h-[68px] flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img src="/images/logo.png" alt="$AMP" className="h-10 w-auto object-contain" />
            <div className="hidden md:flex items-center gap-6 text-[11px] tracking-[0.2em] uppercase text-white/50">
              <span className="text-white">EST 2026</span>
              <span>•</span>
              <span>DECENTRALIZED</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-10 text-[12px] tracking-widest uppercase">
            <a href="#shop" className="hover:text-[#ff0080] transition-colors">Shop</a>
            <a href="#manifesto" className="hover:text-[#ff0080] transition-colors">Manifesto</a>
            <button className="flex items-center gap-2 group">
              <span className="group-hover:text-[#ff0080] transition-colors">Cart</span>
              <span className="w-5 h-5 grid place-items-center bg-white text-black text-[10px] font-medium group-hover:bg-[#ff0080] transition-colors">
                {cart.length}
              </span>
            </button>
          </nav>

          <button 
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-[12px] tracking-widest uppercase"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="fixed inset-0 z-40 bg-black pt-[68px] md:hidden">
          <div className="p-6 space-y-6 text-[14px] tracking-widest uppercase">
            <a href="#shop" onClick={() => setMobileMenu(false)} className="block py-3 border-b border-white/10">Shop</a>
            <a href="#manifesto" onClick={() => setMobileMenu(false)} className="block py-3 border-b border-white/10">Manifesto</a>
            <div className="pt-6 text-white/50">Cart ({cart.length})</div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 glitch-layer" />
          {glitchActive && (
            <>
              <div className="absolute inset-0 glitch-layer glitch-1 mix-blend-screen opacity-80" />
              <div className="absolute inset-0 glitch-layer glitch-2 mix-blend-screen opacity-70" />
              <div className="absolute inset-0 glitch-layer glitch-3 mix-blend-color-dodge opacity-60" />
            </>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 scanlines noise" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-end md:items-center">
          <div className="w-full mx-auto max-w-[1800px] px-6 md:px-10 pb-20 md:pb-0">
            <div className="max-w-[900px]">
              <div className="inline-flex items-center gap-2 mb-8">
                <div className="w-1 h-1 bg-[#ff0080] animate-pulse" />
                <span className="text-[11px] tracking-[0.3em] uppercase text-white/70">LIVE ON-CHAIN</span>
              </div>
              
              <h1 className="text-[clamp(48px,9vw,140px)] font-[300] leading-[0.8] tracking-[-0.04em] mb-6">
                HIGH-
                <br />
                <span className="text-[#ff0080]">VOLTAGE</span>
              </h1>
              
              <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
                <p className="text-[15px] md:text-[17px] leading-relaxed text-white/70 max-w-[420px] font-light">
                  Apparel for the decentralized generation. Born from $AMP — not just clothing, a statement.
                </p>
                <a 
                  href="#shop"
                  className="group inline-flex items-center gap-3 text-[12px] tracking-[0.2em] uppercase"
                >
                  <span className="border-b border-white/30 group-hover:border-[#ff0080] pb-1 transition-colors">Enter Shop</span>
                  <span className="w-8 h-8 grid place-items-center border border-white/20 group-hover:border-[#ff0080] group-hover:bg-[#ff0080] group-hover:text-black transition-all">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/60 backdrop-blur-xl">
          <div className="mx-auto max-w-[1800px] px-6 md:px-10 h-12 flex items-center justify-between text-[10px] tracking-widest uppercase text-white/40">
            <span>SCROLL ↓</span>
            <span className="hidden md:block">FLEX YOUR CRYPTO ENERGY</span>
            <span>$AMP / 2026</span>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section id="manifesto" className="relative border-y border-white/5 grid-lines">
        <div className="mx-auto max-w-[1800px] px-6 md:px-10 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-12 md:gap-0">
            <div className="md:col-span-3">
              <div className="text-[11px] tracking-[0.3em] uppercase text-white/40 sticky top-28">[ 01 ] MANIFESTO</div>
            </div>
            <div className="md:col-span-9">
              <h2 className="text-[28px] md:text-[42px] leading-[1.15] font-light tracking-[-0.02em] max-w-[1000px]">
                Born straight from the heart of <span className="text-[#ff0080]">$AMP</span>, this merch isn't just clothing — it's a statement. 
                <span className="text-white/60"> Flex your crypto energy, your decentralized mindset, and your unapologetic power all in one.</span>
              </h2>
              
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/5">
                {[
                  { k: "01", t: "DECENTRALIZED", d: "No middlemen. Direct from community." },
                  { k: "02", t: "HIGH-VOLTAGE", d: "Pink lightning. Black core. Zero compromise." },
                  { k: "03", t: "ON-CHAIN", d: "Verified drops. Limited runs only." },
                ].map((item) => (
                  <div key={item.k} className="group">
                    <div className="text-[10px] text-white/30 mb-3 tracking-widest">{item.k}</div>
                    <div className="text-[13px] tracking-widest uppercase mb-2 group-hover:text-[#ff0080] transition-colors">{item.t}</div>
                    <div className="text-[13px] text-white/50 leading-relaxed">{item.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="relative">
        <div className="mx-auto max-w-[1800px] px-6 md:px-10 py-24 md:py-32">
          <div className="flex items-end justify-between mb-16 md:mb-24">
            <div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">[ 02 ] SHOP — DROP 01</div>
              <h2 className="text-[36px] md:text-[56px] font-light tracking-[-0.03em] leading-none">
                ENERGY<span className="text-white/30">WEAR</span>
              </h2>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-[11px] tracking-widest uppercase text-white/40">4 PIECES</div>
              <div className="text-[11px] tracking-widest uppercase text-white/60 mt-1">ULTRA-MINIMAL</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 border border-white/5">
            {products.map((product) => {
              const inCart = cart.includes(product.id);
              return (
                <div key={product.id} className="group relative bg-black">
                  <div className="aspect-[4/5] relative overflow-hidden bg-zinc-950">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    
                    {/* Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] tracking-[0.2em] uppercase px-2 py-1 bg-black/80 backdrop-blur border border-white/10">
                        {product.tag}
                      </span>
                    </div>

                    {/* Hover add */}
                    <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => addToCart(product.id)}
                        disabled={inCart}
                        className="px-6 py-3 bg-white text-black text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#ff0080] transition-colors disabled:opacity-50"
                      >
                        {inCart ? "Added" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-5 border-t border-white/5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[13px] tracking-wide uppercase leading-tight">{product.name}</h3>
                        <div className="mt-2 flex items-center gap-3">
                          <span className="text-[12px] text-white/60">{product.price}</span>
                          <span className="text-[10px] text-white/30">•</span>
                          <span className="text-[10px] tracking-widest uppercase text-[#ff0080]">In Stock</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => addToCart(product.id)}
                        className="w-7 h-7 grid place-items-center border border-white/15 hover:border-[#ff0080] hover:text-[#ff0080] transition-colors text-[16px] leading-none"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* pink accent on hover */}
                  <div className="absolute inset-0 pointer-events-none border border-transparent group-hover:border-[#ff0080]/50 transition-colors" />
                </div>
              );
            })}
          </div>

          {/* Single line CTA */}
          <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-12 border-t border-white/5">
            <p className="text-[14px] text-white/50 max-w-[500px] leading-relaxed">
              Ultra-minimal drops. Each piece cut from heavyweight black, hit with pink voltage. No restocks.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-[11px] tracking-widest uppercase text-white/40">
                TOTAL IN CART: <span className="text-white">{cart.length}</span>
              </div>
              <button className="px-8 py-3 bg-[#ff0080] text-black text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-white transition-colors">
                Checkout →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto max-w-[1800px] px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] tracking-widest uppercase text-white/30">
            <div className="flex items-center gap-6">
              <img src="/images/logo.png" alt="" className="h-6 w-auto opacity-50" />
              <span>© 2026 $AMP ENERGYWEAR</span>
            </div>
            <div className="flex items-center gap-8">
              <span>DECENTRALIZED GENERATION</span>
              <span className="hidden md:block">•</span>
              <span>HIGH-VOLTAGE APPAREL</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}