import Image from "next/image"

const Slider = () => {
    return (
           
              <div>
                {/* <h1 className="lg:ml-10 sm:lm-5  text-xl font-bold text-cyan-950">WELCOME</h1> */}
                 <div className="ml-10 slider">
          
          <div className=" mt-10  carousel">
            <div id="slide1" className="relative  w-full  carousel-item">
            <Image src='/images/flower.jfif' width={950} height={200} alt=""></Image>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle buttn">❮</a> 
                <a href="#slide2" className="btn btn-circle buttn">❯</a>
              </div>
            </div> 
            <div id="slide2" className="relative w-full carousel-item">
            <Image src='/images/flower.jfif' width={950} height={200} alt=""></Image>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle buttn">❮</a> 
                <a href="#slide3" className="btn btn-circle buttn">❯</a>
              </div>
            </div> 
            <div id="slide3" className="relative w-full carousel-item">
             <Image src='/images/flower.jfif' width={950} height={200} alt=""></Image>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle buttn">❮</a> 
                <a href="#slide4" className="btn btn-circle buttn">❯</a>
              </div>
            </div> 
            <div id="slide4" className="relative w-full carousel-item">
            <Image src='/images/flower.jfif' width={950} height={200} alt=""></Image>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle buttn">❮</a> 
                <a href="#slide1" className="btn btn-circle buttn">❯</a>
              </div>
            </div>
          </div>
                 </div>
              </div>
    );
};

export default Slider;