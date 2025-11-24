function AboutMe(){
    return(
       <>
        <p className="text-white text-[80px]    font-bold">About Me</p>
       <div className="md:flex w-full h-[1000px] ">
         
        <div className="w-full">  
                    <div className="w-4/5 md:ml-[60px] mb-[30px] mx-auto">
                        <dl className="md:flex leading-loose items-center">
                            <dt className="text-white text-[40px] font-bold opacity-50">名前</dt>
                            <dd className="text-white font-bold text-[30px] pl-[30px]">井上高</dd>
                        </dl>
                        <dl className="md:flex leading-loose items-center">
                            <dt className="text-white text-[40px] font-bold opacity-50">年齢</dt>
                            <dd className="text-white font-bold text-[30px] pl-[30px]">21</dd>
                        </dl>
                        <dl className="md:flex leading-loose items-center">
                            <dt className="text-white text-[40px] font-bold opacity-50">出身</dt>
                            <dd className="text-white font-bold text-[30px] pl-[30px]">兵庫県</dd>
                        </dl>
                        <dl className="md:flex leading-loose items-center">
                            <dt className="text-white text-[40px] font-bold opacity-50">大学</dt>
                            <dd className="text-white font-bold text-[30px] pl-[30px]">甲南大学経済学部経済学科</dd>
                        </dl>
                    </div>
        </div>
       <div className="w-full md:ml-[80px]">
            <p className="text-white text-[60px] font-bold !mb-[30px]">Hobbies</p>
            <ul className="md:flex">
                <li>
                    <img className=" w-[200px] h-[200px] object-cover border border-white rounded-full shadow-[0_0_20px_white] !mb-[10px] !mx-auto" src="./image/drone.png" alt="#" />
                    <p className="text-white text-[30px] text-center !mb-[30px] md:mb-[0px]">ドローン撮影</p>
                </li>
                <li className="md:ml-[60px]">
                    <img className="w-[200px] h-[200px] object-cover border border-white rounded-full shadow-[0_0_20px_white] !mb-[10px] !mx-auto" src="./image/golf.jpg" alt="#" />
                    <p className="text-white text-[30px] text-center !mb-[60px] md:mb-[0px]">ゴルフ</p>
                </li>
            </ul>
       </div>
       </div>
       </>
    )
}
export default AboutMe