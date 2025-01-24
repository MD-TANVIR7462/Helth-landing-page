export default function HeartHealthySection() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-brand-maroon text-2xl font-bold mb-4">Heart Healthy Ingredients</h3>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">The Powerful Ingredients<br />That Fuel Your Heart</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our Nitric Oxide Beets is crafted using nature's most potent ingredients to enhance your health and vitality. Each
          one is chosen to optimize blood flow, support cardiovascular health, and boost overall wellness.
        </p>
      </div>

      <div className="relative">
        <img 
          src="/public/images/img-ingredients.webp" 
          alt="Heart healthy ingredients including beets and pomegranates" 
          className="w-full max-w-2xl mx-auto"
        />
        
        {/* Ingredient Labels
        <div className="absolute top-0 left-1/4 transform -translate-x-1/2">
          <span className="text-rose-600 font-semibold">Pomegranates</span>
        </div>
        
        <div className="absolute top-1/4 right-1/4">
          <span className="text-rose-600 font-semibold">Oxystorm®</span>
        </div>
        
        <div className="absolute bottom-1/4 right-1/4">
          <span className="text-rose-600 font-semibold">Organic<br/>Beetroot</span>
        </div>
        
        <div className="absolute bottom-1/4 left-1/4">
          <span className="text-rose-600 font-semibold">B Vitamins</span>
        </div> */}
      </div>
    </section>
  );
}