function AboutMe(){
    return(
       <>
        <p className="text-white md:text-[60px] md:leading-relaxed   font-bold  !text-[50px]">About Me</p>
       <div className="md:flex w-full h-[900px] md:h-[600px]">
         
        <div className="w-full">  
                    <div className="md:w-4/5 md:ml-[60px] mb-[30px] mx-auto w-5/5">
                        <dl className="flex md:leading-loose items-center leading-snug">
                            <dt className="text-white md:text-[40px] font-bold opacity-50 text-[30px]">名前</dt>
                            <dd className="text-white font-bold md:text-[30px] pl-[30px] text-[20px]">井上高</dd>
                        </dl>
                        <dl className="flex md:leading-loose items-center leading-snug">
                            <dt className="text-white md:text-[40px] font-bold opacity-50 text-[30px]">年齢</dt>
                            <dd className="text-white font-bold md:text-[30px] pl-[30px] text-[20px]">21</dd>
                        </dl>
                        <dl className="flex md:leading-loose items-center leading-snug">
                            <dt className="text-white md:text-[40px] font-bold opacity-50 text-[30px]">出身</dt>
                            <dd className="text-white font-bold md:text-[30px] pl-[30px] text-[20px]">兵庫県</dd>
                        </dl>
                        <dl className="flex md:leading-loose items-center leading-snug">
                            <dt className="text-white md:text-[40px] font-bold opacity-50 text-[30px]">大学</dt>
                            <dd className="text-white font-bold md:text-[30px] pl-[30px] text-[15px] whitespace-nowrap">甲南大学経済学部経済学科</dd>
                        </dl>
                    </div>
        </div>
       <div className="w-full md:ml-[80px] text-center">
            <p className="text-white md:text-[60px] font-bold !mb-[30px] !text-[30px] md:text-left">Hobbies</p>
            <ul className="md:flex">
                <li>
                    <img className=" w-[200px] h-[200px] object-cover border border-white rounded-full shadow-[0_0_20px_white] !mb-[10px] !mx-auto" src="./image/drone.png" alt="#" />
                    <p className="text-white md:text-[30px] text-center !mb-[30px] md:mb-[0px] text-[20px]">ドローン撮影</p>
                </li>
                <li className="md:ml-[60px] ">
                    <img className="w-[200px] h-[200px] object-cover border border-white rounded-full shadow-[0_0_20px_white] !mb-[10px] !mx-auto" src="./image/golf.jpg" alt="#" />
                    <p className="text-white md:text-[30px] text-center !mb-[60px] md:mb-[0px] text-[20px]">ゴルフ</p>
                </li>
            </ul>
       </div>
       </div>
       </>
    )
}
export default AboutMe