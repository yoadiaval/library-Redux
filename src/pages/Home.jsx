import BookSlider from "../components/BookSlider";
import Link from "../components/Link";
import { GiCompass } from "react-icons/gi";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { MdHistoryEdu } from "react-icons/md";

function Home() {
  
  const articlesContent = [
    {
      img: <GiCompass size={40} />,
      title: "Mission",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
    {
      img: <HiOutlineTrendingUp size={40} />,
      title: "Vision",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
    {
      img: <MdHistoryEdu size={40} />,
      title: "History",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
  ];

  const renderedArticles = articlesContent.map((item) => {
    return (
      <article
        key={item.title}
        className="border rounded p-5 mt-[10px] text-center bg-amber-400 w-[300px] flex flex-col place-items-center space-y-[10px] drop-shadow-xl"
      >
        {item.img}
        <h3 className="font-bold text-xl">{item.title}</h3> <p>{item.text}</p>
      </article>
    );
  });
  return (
    <div>
      <div
        className="flex place-items-center bg-cover w-full h-[450px] text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
        }}
      >
        <div className="pt-20 flex flex-col space-y-[4px] max-w-[800px] mt-[-96px] w-full mx-auto text-center font-bold">
          <p className="md:text-3xl sm:text-2xl text-xl">
            Feel the passion to read
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl md:py-6">
            Bestseller Books
          </h1>
          <div className="md:text-xl text-l pb-4">
            <p>Fancy, fiction, terror </p>
          </div>
          <Link
            to="/products"
            className=" text-white bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div >
        <BookSlider />
      </div>
      <div className="bg-stone-100 pt-[20px] mt-[150px] pb-[50px]">
        <section className="flex flex-wrap justify-around w-4/5 mx-auto place-content-center mt-[-80px] mb-[-100px]">
          {renderedArticles}
        </section>
        <section className="flex flex-col md:flex-row p-4 place-content-center place-items-center mt-[200px] space-y-[60px] space-x-[60px]">
          <div className="w-[500px] p-8">
            <h3 className="font-bold text-xl ">Join our newsletter</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              sint unde quaerat ratione soluta veniam provident adipisci cumque
              eveniet tempore?
            </p>
          </div>
          <div className="">
            <input></input>
            <button className="bg-black text-white px-4 py-[2px]">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
