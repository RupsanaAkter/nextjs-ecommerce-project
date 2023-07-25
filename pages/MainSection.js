import Image from "next/image";


const MainSection = () => {
    return (
      <section className="grid grid-cols-3 gap-3 mt-20">
          <div className="card w-96 shadow-xl mt-10 ">
        
        <figure>
            <Image src='/images/man (5).jpeg ' width={200} height={200} alt=""></Image>
        </figure>
        <div className="card-body">
          <h2 className="text-center text-3xl text-blue-700 font-bold">Man Style</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        </div>

        <div className="card w-96 shadow-xl mt-10 ">
       
        <figure>
            <Image src='/images/women (1).jpeg ' width={200} height={200} alt=""></Image>
        </figure>
        <div className="card-body">
          <h2 className="text-center text-3xl text-blue-700 font-bold">Women Style</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        </div>
        <div className="card w-96 shadow-xl mt-10 ">
        
        <figure>
            <Image src='/images/couple (1).jpeg ' width={200} height={200} alt=""></Image>
        </figure>
        <div className="card-body">
          <h2 className="text-center text-3xl text-blue-700 font-bold">Couple set</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        </div>
        <div className="card w-96 shadow-xl mt-10 ">
       
        <figure>
            <Image src='/images/kids (3).jpeg ' width={200} height={200} alt=""></Image>
        </figure>
        <div className="card-body">
          <h2 className=" text-center text-3xl text-blue-700 font-bold">kids section</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        </div>
      </section>
    );
};

export default MainSection;