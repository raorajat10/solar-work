// app/components/ParallaxSection.tsx
"user client";
export default function ParallaxSection() {
  return (
    <section
      className="relative h-[80vh] bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('/images/solar-p.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        
      </div>
    </section>
  );
}
