

interface PricingCardProps {
   tickettype:string;
   price:string;
   description:string;
    features: string[];

}

const Pricingcard:React.FC<PricingCardProps> = ({ tickettype,price,description,features}) => {
    return (
<div className="image-border backdrop-blur-md bg-white/10 border border-white/30 shadow-2xl rounded-3xl p-8 w-[300px] min-h-[500px] transition-transform hover:scale-105 duration-300 text-white flex flex-col justify-between">
  <div>
    <h2 className="text-2xl font-extrabold mb-3 tracking-wide uppercase">{tickettype}</h2>
    <p className="text-3xl font-bold text-emerald-400 mb-3">{price}</p>
    <p className="text-sm mb-6 text-white/80">{description}</p>
    <ul className="list-disc list-inside space-y-2 text-white/90">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
  <button className="mt-6 bg-emerald-600 hover:bg-emerald-700 transition-colors text-white py-3 px-6 rounded-2xl font-semibold w-full">
    Get Ticket
  </button>
</div>

    );
}
export default Pricingcard;
// This component is a simple pricing card that takes in a title, price, and a list of features.