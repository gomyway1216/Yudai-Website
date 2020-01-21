import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from 'gatsby-image'
import Title from '../Title'
import styles from '../../css/profile.module.scss'

const Profile = props => {
  return (
    <div className={styles.profile}>
      <Title title="about" subtitle="me" />
      {/* <SEO title="About me" /> */}
      {/* <StyledHero img={data.contactBcg.childImageSharp.fluid} /> */}
      <div className={styles.profileMain}>
        <div className={styles.left}>
          <div className={styles.imageContainer}>
            <Img
              fluid={props.profileImage.childImageSharp.fluid}
              alt="profile picture"
            />
          </div>
        </div>

        <div className={styles.right}>
          <div className={[styles.introduction, styles.item].join(' ')}>
            <h2>紹介</h2>

            <div>
              こんにちは。矢口雄大と申します。ウィスコンシン大学マディソン校でコンピューターサイエンスを専攻しながら数学と起業学をマイナーで勉強しています。
              沢山の人々の役に立つソフトウェアを開発できるエンジニアになりたいと思っております。
              <br />
              ナビゲーションバーに載っているソーシャルネットワーキング等をクリックしていただくか、またはContactページから気軽にご連絡ください。
              僕のウェブサイトに訪問いただき、ありがとうございます。
            </div>
            <br />
            <a
              href="https://drive.google.com/uc?export=download&id=1qho_ioHcWKb5sfXr9mX3A3JLmV2cImKi"
              className={styles.resumeLink}
            >
              英語版のレジュメのダウンロードリンクです。
            </a>
            <br />
          </div>

          <div className={[styles.research, styles.item].join(' ')}>
            <h3>学業</h3>
            <hr />
            <div className={styles.educationInfo}>
              <div className={styles.educationInfoMain}>
                <div className={styles.major}>
                  <span className={styles.boldText}>BS</span> in{' '}
                  <span className={styles.boldText}>Computer Science</span> with{' '}
                  <span className={styles.boldText}>Mathematics</span>,{' '}
                  <span className={styles.boldText}>Entrepreneurship</span>{' '}
                  minor
                </div>
                <div>
                  from{' '}
                  <span className={styles.boldText}>
                    ウィスコンシン大学マディソン校
                  </span>
                </div>
              </div>
              <div className={styles.educationSubInfo}>
                <div>Madison, WI</div>
                <div>
                  GPA: <span className={styles.boldText}>3.8</span>/4.0
                </div>
                <div>卒業予定日: 2020年5月</div>
              </div>
            </div>
          </div>

          <div className={[styles.research, styles.item].join(' ')}>
            <h3>プログラミング言語</h3>
            <hr />

            <div>
              Advanced : <span className={styles.boldText}>Java</span>,{' '}
              <span className={styles.boldText}>React</span>,{' '}
              <span className={styles.boldText}>JavaScript</span>, TypeScript,
              Android, Python, C
              <br />
              Intermediate : GIT, C++, HTML, CSS, XML, SQL, Node.js, R, GraphQL,
              Amazon AWS, Bash
            </div>
          </div>

          <div className={[styles.work, styles.item].join(' ')}>
            <h3>経歴</h3>
            <hr />
            <section>
              <div className={styles.information}>
                <div className={styles.position}>フルスタックエンジニア</div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>
                    ウィスコンシン大学マディソン校
                  </div>
                  <span className={styles.duration}>2019年4月 - 現在</span>
                  <span className={styles.location}>
                    ウィスコンシン州マディソン
                  </span>
                </div>
              </div>
              <div className={styles.skills}>React, JS</div>
              <p>
                チューターを管理するシステムのフロントエンドのコードを書いています。
                <br />
                <br />
                バックエンドにおける、リクエストを受け取った際のロジックとフロントエンド側のAPIレスポンスに対する処理を作成しています。
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>
                  フロントエンド/データサイエンスエンジニアインターン
                </div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>
                    SMN株式会社(旧ソネットメディアネットワークス)
                  </div>
                  <span className={styles.duration}>2019年5月 - 2019年8月</span>
                  <span className={styles.location}>東京</span>
                  <div className={styles.skills}>
                    React, Redux, JS, TS, Python
                  </div>
                </div>
              </div>
              <p>
                SMNが独自開発した、広告トラッキングシステムを用いて広告の用途などを表示、管理を行う、お客様用のコンソールの作成
                <br />
                <br />
                機械学習(サイキッドラーニング)を用いて、SMNの広告トラッキングシステムの改善や、集めたデータのより効率の良い使い方の研究
                <br />
                GitやBash、その他Terminalの使い方などをまとめたドキュメントを他のインターン生用に制作
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>
                  フルスタックエンジニアインターン
                </div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>Kinetikos</div>
                  <span className={styles.duration}>2018年6月 - 2018年8月</span>
                  <span className={styles.location}>ポルトガル、リスボン</span>
                </div>
              </div>
              <div className={styles.skills}>React, JS, Java</div>
              <p>
                HTML、CSS、JavaScript、TypeScript、Node.js、jQuery、React.js、GraphQLの強化プログラムを終了
                その知識を用いて、天気アプリやTwitterのクローンアプリ、レシピ紹介サイトを作成
                <br />
                <br />
                被験者の動きを記録、また健康状態をクイズ形式で聞いた上でサーバー上にデータを管理するAndroidアプリを作成。
                <br />
                また、そのアプリをボイスコマンドで動くように機能を追加
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>
                  テクニカルサポート、ビジネスマーケティングインターン
                </div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>ITA, Inc.</div>
                  <span className={styles.duration}>2018年5月 - 2018年6月</span>
                  <span className={styles.location}>イリノイ州アイタスカ</span>
                </div>
              </div>
              <div className={styles.skills}>Java, Marketing, Japanese</div>
              <p>
                コンピューターや電話、ネットワークシステムの設定や更新を中小企業において提供
                <br />
                <br />
                日本の企業のアメリカ進出における様々な情報を翻訳、法律、文化といった面でアメリカでの経験をもとに提供
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>アンバサダー</div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>Venture Café Tokyo</div>
                  <span className={styles.duration}>2019年6月 - 現在</span>
                  <span className={styles.location}>東京</span>
                </div>
              </div>
              <div className={styles.skills}>Marketing, Communication</div>
              <p>
                Venture Cafe
                Tokyoのミッションは、イノベーターたちを繋げ、次のビジネスに生み出し、加速していく環境づくりをしていくことです。
                私たちのイベントでは、様々な方に登壇していただくセッションといろいろな方と繋がることのできるソーシャルスペースを提供しています。
                運営の効率化のため、イベント参加者の飲んだ物を可視化し、管理するソフトウェアを作成しています。今後様々な機能を追加していく予定です。
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>家庭教師</div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>自営業</div>
                  <span className={styles.duration}>2016年5月 - 2016年8月</span>
                  <span className={styles.location}>東京</span>
                </div>
              </div>
              <div className={styles.skills}>Tutoring</div>
              <p>
                進学校に通っている高校生の家庭教師をしていました。ただ宿題を出すだけではなく、学校のスケジュール管理などを一緒に行い、全般的に勉強をサポートしました。
                <br />
                <br />
                結果的に一番下の方だったその生徒の成績が学年の真ん中まで上がりました。
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>塾講師</div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>エルヴェ学院</div>
                  <span className={styles.duration}>2016年4月 - 2016年8月</span>
                  <span className={styles.location}>東京</span>
                </div>
              </div>
              <div className={styles.skills}>Tutoring</div>
              <p>
                小学生から高校生までの指導をたくさんの科目にわたって指導しました。
              </p>
            </section>
          </div>

          <div className={[styles.research, styles.item].join(' ')}>
            <h3>プロジェクト</h3>
            <hr />
            <AniLink fade className={styles.projectLinkAll} to={`/projects/`}>
              全てのプロジェクトはこちらへ
            </AniLink>
            <br />
            <br />
            <section>
              <div className={styles.information}>
                <div className={styles.position}>
                  このポートフォリオとブログ
                </div>
                <div className={styles.subInformation}>
                  <span className={styles.duration}>2019年12月 - 現在</span>
                  <div className={styles.skills}>
                    React, GraphQL, Gatsby.js, Contentful
                  </div>
                </div>
              </div>
              <p>
                Gatsby.jsを利用した、Websiteの作成 (このWebsiteです!)
                <br />
                <br />
                データはContentfulにあり、GraphQLを使って持ってきています。
              </p>
            </section>
            <section>
              <div className={styles.information}>
                <div className={styles.position}>Study Timer</div>
                <div className={styles.subInformation}>
                  <span className={styles.duration}>
                    2018年12月 – 2019年2月
                  </span>
                  <div className={styles.skills}>Java, SQL, XML</div>
                </div>
              </div>
              <AniLink
                fade
                className={styles.projectLink}
                to={`/project/study-timer`}
              >
                プロジェクトページへ
              </AniLink>
              <p>
                Androidで動く、日常の様々な行動を記録し、その行動によって仮想のお金をためる楽しいアプリ。自分の行動を効率化する為に作成しました。
                <br />
                <br />
                グラフによって日々の行動と溜めたお金を可視化できます。
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>五目並べ</div>
                <div className={styles.subInformation}>
                  <span className={styles.duration}>2018年8月 – 2018年9月</span>
                  <div className={styles.skills}>Java, SQL, XML</div>
                </div>
              </div>
              <AniLink
                fade
                className={styles.projectLink}
                to={`/project/gomoku`}
              >
                プロジェクトページへ
              </AniLink>
              <p>
                Androidで動く、独自のアルゴリズムを使用した、強いAIを持つアプリを作りました。周りの約95％の人に勝つ事ができました。
                <br />
                <br />
                ボードサイズ、先攻後攻、AIのレベルの設定、また一手戻す機能を備えています。
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>オセロ</div>
                <div className={styles.subInformation}>
                  <span className={styles.duration}>2019年4月 – 2019年5月</span>
                  <div className={styles.skills}>C++</div>
                </div>
              </div>
              <AniLink
                fade
                className={styles.projectLink}
                to={`/project/othello`}
              >
                プロジェクトページへ
              </AniLink>
              <p>
                コンソール上で動く強いAI持ったオセロアプリを作成しました。
                <br />
                <br />
                将来、また新しいタイプのAIを作れるような簡単な設計にしました。
              </p>
            </section>
          </div>

          <div className={[styles.research, styles.item].join(' ')}>
            <h3>研究</h3>
            <hr />

            <section>
              <div className={styles.information}>
                <div className={styles.position}>機械学習研究</div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>
                    UW-Madison Department of Materials Science and Engineering
                  </div>
                  <span className={styles.duration}>2019年1月 - 2019年5月</span>
                  <span className={styles.location}>
                    ウィスコンシン州マディソン
                  </span>
                </div>
              </div>
              <div className={styles.skills}>Python, MATLAB</div>
              <AniLink fade className={styles.projectLink} to={`/project/yolo`}>
                プロジェクトページへ
              </AniLink>
              <p>
                YOLOv3アルゴリズムに合金の映像を与えることで,TEMビデオで欠陥を表示します。
                <br />
                見つかった欠陥の数と大きさやどうやって生まれたかを計測すると、95％の正確性と低い遅延を達成しました。
                <br />
                <br />
                これはTEMビデオで初めて深層学習を用いたプロジェクトで、様々な研究プロジェクトに応用する事が出来ます。
              </p>
              <a href={`https://skunkworks.engr.wisc.edu/`}>
                UW-Madison Informatics Skunkworksへのリンク
              </a>
            </section>
          </div>

          <div className={styles.organization}>
            <h3>オーガナイゼーション</h3>
            <hr />

            <section>
              <div className={styles.information}>
                <div className={styles.position}>テックチーム　リード</div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>Helios</div>
                  <span className={styles.duration}>2018年1月 - 2019年1月</span>
                  <span className={styles.location}>
                    ウィスコンシン州マディソン
                  </span>
                </div>
              </div>
              <p>
                学校に設置されたソーラーパネルから得られた、電力発生量などを表示するダッシュボードの作成
                <br />
                <br />
                テックチームのリーダーとして、アメリカ全土の電力についてのリサーチプロジェクトを引率
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>
                  副イベントリーダーとカメラマン
                </div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>
                    Kappa Eta Kappa Delta Chapter
                  </div>
                  <span className={styles.duration}>2018年1月 - 現在</span>
                  <span className={styles.location}>
                    ウィスコンシン州マディソン
                  </span>
                </div>
              </div>
              <p>
                KHKとはエンジニアを目指す生徒の同好会です。
                自分はキャンパスで少数の日本人を代表して、色々な人々の違いを尊重し、お互いに学ぶ環境づくりをKHKを通してしています。
              </p>
              <a href={`http://delta.khk.org/`}>KHKへのリンク</a>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>Active Member</div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>Bridge</div>
                  <span className={styles.duration}>2017年9月 - 2018年5月</span>
                  <span className={styles.location}>
                    ウィスコンシン州マディソン
                  </span>
                </div>
              </div>
              <p>
                ブリッジは、留学生とアメリカ人の生徒をつなぐ環境づくりを行うクラブです。
                <br />
                数ある中のチームのリーダーとして活動し、ブリッジの最も活躍した生徒に選ばれました。
              </p>
              <a href={`https://bridge.iss.wisc.edu/`}>Bridgeへのリンク</a>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
