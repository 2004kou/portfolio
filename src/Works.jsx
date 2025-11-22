import { IconContext } from 'react-icons'
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Work(){
    return(
       <div className='w-3/5 h-[500px] mx-auto mt-[600px]'>
       <p className="text-white text-[80px] font-bold leading-loose">My Work</p>
       <div className="flex border border-white rounded-md border-4 p-[60px]">
        <div>
            <img className='h-[400px]' src="./image/mywork.jpg" alt="#" />
        </div>
        <div className='w-3/5 ml-[60px]'>
            <p className="text-white text-[40px] font-bold leading-loose">偏愛会議</p>
             <IconContext.Provider value={{ size:30, color:"#ffffffff"}}>
            <ul className="flex mt-[30px]">
                <li className='border border-white rounded-full p-[10px] leading-loose'><FaPython/></li>
                <li className="ml-[10px] text-white border border-white rounded-full p-[10px] leading-loose"><SiFlask /></li>
            </ul>
            
            <p className="text-white leading-loose mt-[60px]">本作品は、ハッカソンで5人チームとして開発を開始したチャットアプリです。私はFlaskを用いたバックエンド設計とデータベース構築を担当しました。ハッカソン終了後は、アプリを完成させるために個人で開発を継続し、機能改善やUI調整などを行いました。チームでの協働と個人での自主開発の両方を経験できたことが大きな学びとなりました。</p>
            <ul>
                <li className="bg-gray-900 text-white px-5 py-2 rounded border border-gray-700 hover:bg-gray-800 hover:border-gray-600 shadow-none block mx-auto my-4 text-center"><a   href="http://57.181.26.155:55000/auth/signup">サイトへ</a></li>
                <li className="bg-gray-900 text-white px-5 py-2 rounded border border-gray-700 hover:bg-gray-800 hover:border-gray-600 shadow-none block mx-auto my-4"><a  href="https://github.com/2004kou/myapp"><FaGithub className='mx-auto' /></a></li>
            </ul>
            </IconContext.Provider>
        </div>
       </div>
       </div>
    )
}
export default Work