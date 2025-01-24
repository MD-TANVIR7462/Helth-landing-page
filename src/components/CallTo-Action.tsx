const CallToAction = () => {
   return (
     <section className="py-8 px-6">
       <div className="container mx-auto max-w-6xl rounded-lg bg-teal-800 p-6 text-center text-white shadow-lg">
         {/* Heading */}
         <h2 className="text-2xl font-bold sm:text-3xl">
           Try Eco Health® Advance Urinary Formula Risk Free for 90 Days
         </h2>
         {/* Description */}
         <p className="mt-4 text-sm sm:text-base">
           Eco Health® Advance Urinary Formula is a premium, doctor-formulated blend designed to
           support bladder health and urinary function. This comprehensive formula combines clinically
           supported ingredients to enhance bladder control and promote urinary comfort.
         </p>
         {/* CTA Button */}
         <div className="mt-6">
           <button className="rounded-lg bg-[#B11E54] px-6 py-3 text-white hover:bg-red-600">
             ADD TO CART
           </button>
         </div>
         {/* Features */}
         <div className="mt-6 flex flex-wrap justify-center gap-6">
           <div className="flex items-center">
             <img
               src="/public/icons/sdf/secure.svg"
               alt="100% Secure Checkout"
               className="mr-2 h-6 w-6"
             />
             <span className="text-sm">100% Secure Checkout</span>
           </div>
           <div className="flex items-center">
             <img
               src="/public/icons/sdf/delevry.svg"
               alt="Ships in 1 Business Day"
               className="mr-2 h-6 w-6"
             />
             <span className="text-sm">Ships in 1 Business Day</span>
           </div>
           <div className="flex items-center">
             <img
               src="/public/icons/sdf/Frame.svg"
               alt="90-Day Guarantee"
               className="mr-2 h-6 w-6"
             />
             <span className="text-sm">90-Day Guarantee</span>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default CallToAction;
 