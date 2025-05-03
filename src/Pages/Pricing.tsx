import Pricingcard from "../components/Pricingcard"


const Pricing = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-950 flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 px-4 py-10">
    <Pricingcard
      tickettype="Normal"
      price="KSh 1000/person"
      description="This is a basic plan with limited features."
      features={["Feature 1", "Feature 2", "Feature 3"]}
    />
    <Pricingcard
      tickettype="VIP"
      price="KSh 2000/person"
      description="This is a basic plan with limited features."
      features={["Feature 1", "Feature 2", "Feature 3"]}
    />
    <Pricingcard
      tickettype="VVIP"
      price="KSh 3000/person"
      description="This is a basic plan with limited features."
      features={["Feature 1", "Feature 2", "Feature 3"]}
    />
    <Pricingcard
      tickettype="Group of 5"
      price="KSh 4000"
      description="This is a basic plan with limited features."
      features={["Feature 1", "Feature 2", "Feature 3"]}
    />
  </section>
  
  )
}

export default Pricing
