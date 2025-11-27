import { IconContext } from 'react-icons';
import { FaPython, FaHtml5, FaCss3 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiFlask } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiMysql } from 'react-icons/si';

const ReactIcons = () => {
  return (
    <div className="block w-4/5 text-center md:text-left mx-auto">
      {/* Languages */}
      <h3 className="text-white !text-[48px] font-extrabold !mb-6 tracking-wide border-b-4 border-blue-500 inline-block pb-2">
        Languages
      </h3>
      <IconContext.Provider value={{ size: 40, color: "#ffffff" }}>
        <ul className="flex flex-col gap-4 !mt-4 text-center md:text-left">
          <li className="text-white flex items-center text-lg">
            <FaHtml5 className="mr-3 text-orange-500 leading-relaxed" />
            HTML（静的ページを一通り作成可能）
          </li>
          <li className="text-white flex items-center text-lg">
            <FaCss3 className="mr-3 text-blue-400 leading-relaxed" />
            CSS（スタイル調整とレスポンシブ対応）
          </li>
          <li className="text-white flex items-center text-lg">
            <FaPython className="mr-3 text-yellow-400 leading-relaxed" />
            Python（FlaskでWebアプリ実装）
          </li>
          <li className="text-white flex items-center text-lg">
            <IoLogoJavascript className="mr-3 text-yellow-300 leading-relaxed" />
            JavaScript（DOM操作と簡単なUI実装）
          </li>
        </ul>
      </IconContext.Provider>

      {/* Frameworks */}
      <h3 className="text-white !text-[40px] font-extrabold !mt-12 !mb-6 tracking-wide border-b-4 border-green-500  pb-2 inline-block w-auto">
        Frameworks
      </h3>
      <IconContext.Provider value={{ size: 40, color: "#ffffff" }}>
        <ul className="flex flex-col gap-4 !mt-4 text-center">
          <li className="text-white flex items-center text-lg">
            <SiFlask className="mr-3 text-gray-300 leading-relaxed" />
            Flask（認証 / ルーティング / DB連携）
          </li>
          <li className="text-white flex items-center text-lg">
            <RiTailwindCssFill className="mr-3 text-teal-400 leading-relaxed" />
            Tailwind CSS（コンポーネントベースのUI構築）
          </li>
        </ul>
      </IconContext.Provider>

      {/* Tools */}
      <h3 className="text-white !text-[48px] font-extrabold !mt-12 !mb-6 tracking-wide border-b-4 border-purple-500 inline-block pb-2">
        Tools
      </h3>
      <IconContext.Provider value={{ size: 40, color: "#ffffff" }}>
        <ul className="flex flex-col gap-4 !mt-4 text-center">
          <li className="text-white flex items-center text-lg leading-relaxed">
            <SiMysql className="mr-3 text-blue-500" />
            MySQL（テーブル設計 / CRUD）
          </li>
        </ul>
      </IconContext.Provider>
    </div>
  );
};

export default ReactIcons;