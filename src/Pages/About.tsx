import ArtistCard from "../components/Artistcard"
import woman1 from '../assets/images/woman2.jpg'
import man1 from '../assets/images/man1.jpg'

const About = () => {
  return (
 <section className=" bg-gradient-to-r from-gray-900 via-black to-gray-950 ">
 <h2 className="text-4xl text-white  text-center font-bold mb-4 ">Performing artists</h2>
 <div className="flex flex-col md:flex-row gap-6">
  <ArtistCard
  Name="Artist 1"
  Image= {woman1}
  Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  />
   <ArtistCard
  Name="Artist 1"
  Image={man1}
  Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  /> <ArtistCard
  Name="Artist 1"
  Image="https://via.placeholder.com/150"
  Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  />
 </div>
 </section>
  )
}

export default About
