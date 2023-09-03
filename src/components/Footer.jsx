import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";

function Footer() {
  return (
    <div className="mt-[60px] p-[50px] flex justify-around flex-wrap space-x-4 space-y-[60px] sm:space-y-[0px] bg-black text-white">
      <div>
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
        </div>
        <h1 className="text-4xl">BOOK LOVER</h1>
      </div>
      <div className="flex flex-col space-x-[6px]">
        <h3 className="text-2xl  text-amber-400">Partners </h3>
        <ul>
          <li>Benefits of being a member</li>
          <li>Become a partner</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl text-amber-400">Support</h3>
        <ul>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Frequent questions</li>
        </ul>
      </div>

      <section>
        <h3 className="text-2xl text-amber-400">Social Media</h3>

        <div className="flex justify-around ">
          <CiFacebook size={25} />
          <CiTwitter size={25} />
          <CiInstagram size={25} />
        </div>
      </section>
    </div>
  );
}

export default Footer;
