import img from "../../assets/sec1.png"


const Sec1 = () => {
  return (
    <div className="flex flex-col md:flex-row h-[400px] md:gap-20 lg:gap-50  w-full md:px-10 p-5 gap-10 md:p-25 items-center justify-center   " >
        
        <div>
            <h1 className="text-[30px] text-sky-400 font-bold text-center md:text-left " >Market Reform Champions</h1>
            <p className="md:w-[350px] text-center md:text-left " >We pioneered the Central Securities Clearing System (CSCS), Trade Alert, and e-transactions in Nigeria.</p>
        </div>
        
        <img src={img} alt="" className="md:h-[350px] md:w-[400px] h-[200] w-[200] " />

    </div>
  )
}

export default Sec1