import React from 'react'

export default function Sponsors() {

  return (
    <section className="bg-gray-900 py-4 text-xl">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold mb-2 text-center">Our Sponsors</h2>
        <div className="flex justify-center ">
          <div className=" h-24 md:h-36 flex justify-center items-center p-2 shadow-2xl rounded-lg transform hover:scale-110 transition-transform duration-300 gap-10">
            <img
              src="https://static.vecteezy.com/system/resources/previews/020/190/451/non_2x/punjab-national-bank-pnb-bank-logo-free-free-vector.jpg"
              alt="Punjab National Bank"
              className="max-h-full max-w-full object-contain rounded-xl"
            />
          </div>
          <div className=" h-24 md:h-36 flex justify-center items-center p-2 shadow-2xl rounded-lg transform hover:scale-110 transition-transform duration-300">
            <img
              src="https://www.logo-designer.co/storage/2017/04/2017-Design-Stack-new-logo-design-State-Bank-of-India.png"
              alt="State Bank of India"
              className="max-h-full max-w-full object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}