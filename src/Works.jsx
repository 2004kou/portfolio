function Work() {
  return (
    <div className="w-4/5 mx-auto mt-[600px]">
      {/* タイトル */}
      <p className="text-white text-[80px] font-bold leading-loose">My Work</p>

      {/* コンテンツ枠 */}
      <div className="flex border-4 border-white rounded-md p-[60px]">
        {/* 左側：画像 */}
        <div>
          <img className="h-[400px]" src="./image/mywork.jpg" alt="My Work Screenshot" />
        </div>

        {/* 右側：説明 */}
        <div className="w-3/5 ml-[60px] space-y-10">
          {/* プロジェクト名 */}
          <p className="text-white text-[40px] font-bold leading-loose">偏愛会議 - Chatアプリ</p>

          {/* 担当範囲 */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">担当範囲</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
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
            <h3 className="text-xl font-semibold text-white mb-2">技術スタック</h3>
            <div className="flex flex-wrap gap-3 text-sm text-gray-200">
              <span className="bg-gray-800 px-3 py-1 rounded">Flask</span>
              <span className="bg-gray-800 px-3 py-1 rounded">MySQL</span>
              <span className="bg-gray-800 px-3 py-1 rounded">Docker</span>
              <span className="bg-gray-800 px-3 py-1 rounded">Git</span>
            </div>
          </div>

          {/* 工夫した点 */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">工夫した点</h3>
            <p className="text-gray-300 leading-relaxed">
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
            <h3 className="text-xl font-semibold text-white mb-2">問題と解決</h3>
            <p className="text-gray-300 leading-relaxed">
              Docker環境でMySQLコンテナが起動しない問題に直面しましたが、
              ログ解析とYAML構成の見直しにより、サービス名の衝突とボリューム設定の不備を特定・修正しました。
            </p>
          </div>


          {/* チーム規模と期間 */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">チーム規模と期間</h3>
            <p className="text-gray-300">
              5人チーム（フロント2名 / バックエンド3名）でハッカソン期間中に開発開始。
              以降は個人で継続開発し、約3か月で完成。
            </p>
          </div>
          <div>
            <ul>
                <li className="text-xl font-semibold text-white mb-2 border border-white text-white rounded-full px-6 py-3 
               flex items-center justify-center 
               transition-transform duration-200 hover:scale-105 "><a href="http://57.181.26.155:55000/auth/signup">サイトへ</a></li>
                <li className="text-xl font-semibold text-white mb-2 border border-white text-white rounded-full px-6 py-3 
               flex items-center justify-center 
               transition-transform duration-200 hover:scale-105 "><a href="https://github.com/2004kou/myapp">Githubへ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;