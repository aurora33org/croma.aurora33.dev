export function Hero() {
  return (
    <div className="flex flex-col mb-16 mt-16 px-[120px] max-w-[1720px] mx-auto">
      {/* Hero Title */}
      <div className="w-full">
        <h1 className="text-5xl lg:text-6xl font-bold text-text dark:text-text-dark" style={{ lineHeight: '120%' }}>
          Optimiza tus imágenes.<br />Para cualquier proyecto.
        </h1>
      </div>

      {/* Main Hero Grid */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left Column: Text Content */}
        <div className="space-y-8 pt-8">
          <div className="pt-2">
            <p className="text-base text-text-muted dark:text-text-muted-dark mb-8 leading-relaxed">
              Ya sea que diseñes, desarrolles, vendas o crees contenido—nosotros redimensionamos, comprimimos y optimizamos tus imágenes automáticamente. Una herramienta. Múltiples necesidades. Sin complicaciones.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <p className="text-text dark:text-text-dark font-medium">Redimensiona automáticamente para web, redes sociales, impresión</p>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <p className="text-text dark:text-text-dark font-medium">Comprime y exporta en WebP, JPEG o PNG—lo que necesites</p>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <p className="text-text dark:text-text-dark font-medium">Reduce el peso típicamente 50-70% sin perder calidad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
