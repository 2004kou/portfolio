function Work() {
  return (
    <div className="w-4/5 mx-auto mt-[300px] text-center md:text-left">
      {/* タイトル */}
      <p className="text-[55px] text-white md:text-[80px] font-bold md:leading-loose leading-snug whitespace-nowrap text-center">My Work</p>

      {/* コンテンツ枠 */}
      <div className="md:flex md:border-4 md:border-white md:rounded-md md:p-[60px]">
        {/* 左側：画像 */}
        <div>
          <img className="h-[400px] mx-auto" src="./image/mywork.jpg" alt="My Work Screenshot" />
        </div>

        {/* 右側：説明 */}
        <div className=" ml-[0px] md:w-2/5 md:ml-[60px] space-y-10 text-center w-5/5 !mx-auto">
          {/* プロジェクト名 */}
          <p className="text-white text-[30px] font-bold leading-loose">偏愛会議</p>
          <p className="text-gray-300 leading-relaxed !mt-2 !mb-5 md:!ml-[20px] ">「偏愛会議」は、趣味や関心の近いユーザー同士が集まり,
            会話ができるチャットアプリです。ジャンル別のルームを通じて同好のユーザーと交流できるほか、趣味がはっきりしないユーザーでも、自分と似た思考傾向を持つ人々の多いジャンルを探索できる機能を搭載しています。単なるチャットではなく、“興味の再発見”と“つながりのきっかけ”を生むコミュニケーション体験を目指しました。</p>

          {/* 担当範囲 */}
          <div>
            <h3 className="!text-xl font-semibold text-white !mb-2 md:text-left">担当範囲</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300 md:text-left md:!ml-[20px] md:leading-relaxed">
              <li>MySQLによるDB設計・接続管理</li>
              <li>ユーザー認証機能</li>
              <li>ジャンル検索機能</li>
              <li>プロフィール編集、表示機能</li>
              <li>ルーム消去機能</li>
              <li>ランキング機能</li>
              <li>レスポンシブ対応</li>
            </ul>
          </div>

          {/* 技術スタック */}
          <div>
            <h3 className="!text-xl font-semibold text-white !mb-2 md:text-left">技術スタック</h3>
            <div className="flex flex-wrap gap-3 text-sm text-gray-200 !pl-[40px] md:!ml-[20px]">
              <span className="bg-gray-800 px-3 py-1 rounded">Flask</span>
              <span className="bg-gray-800 px-3 py-1 rounded">MySQL</span>
              <span className="bg-gray-800 px-3 py-1 rounded">Docker</span>
              <span className="bg-gray-800 px-3 py-1 rounded">Git</span>
            </div>
          </div>

          {/* 工夫した点 */}
          <div>
            <h3 className="!text-xl font-semibold text-white !mb-2 md:text-left">工夫した点</h3>
            <p className="text-gray-300 leading-relaxed md:text-left md:!ml-[20px] ">
            安定したアプリ運用のために接続プールを用いたDB接続管理を実装し、
            セッション制御も明確化することで通信エラーの発生を抑えました。
            また、Blueprintを用いたルーティングとファイル分割によって
            コードの保守性と可読性を向上させています。

            さらに、主要機能についてテストコードを作成し、
            リファクタリング時にも動作保証ができる開発体制を整えました。
            </p>
          </div>

          {/* 問題と解決 */}
          <div>
            <h3 className="!text-xl font-semibold text-white !mb-2 md:text-left">問題と解決</h3>
            <p className="text-gray-300 leading-relaxed md:text-left md:!ml-[20px]">
              Docker環境でMySQLコンテナが起動しない問題に直面しましたが、
              ログ解析とYAML構成の見直しにより、サービス名の衝突とボリューム設定の不備を特定・修正しました。
            </p>
          </div>


          {/* チーム規模と期間 */}
          <div>
            <h3 className="!text-xl font-semibold text-white !mb-2 md:text-left">チーム規模と期間</h3>
            <p className="text-gray-300 md:text-left md:!ml-[20px] leading-relaxed">
              5人チーム（フロント2名 / バックエンド3名）でハッカソン期間中に開発開始。
              以降は個人で継続開発し、約3か月で完成。
            </p>
          </div>
          <div>
            <ul>
                <a href="http://35.77.104.142:55000/auth/signup"><li className="text-xl font-semibold text-white mb-2 border border-white text-white rounded-full px-6 py-3 
               flex items-center justify-center 
               transition-transform duration-200 hover:scale-105 ">サイトへ</li></a>
                <a href="https://github.com/2004kou/myapp"><li className="text-xl font-semibold text-white mb-2 border border-white text-white rounded-full px-6 py-3 
               flex items-center justify-center 
               transition-transform duration-200 hover:scale-105 ">Githubへ</li></a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;