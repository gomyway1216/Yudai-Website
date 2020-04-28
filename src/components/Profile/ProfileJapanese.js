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
              ソフトウェアエンジニアを目指すために、大学在籍中はプロジェクトやインターンシップを通してアプリケーションを開発するためのスキルを身に着けることに力を注ぎました。
              様々なコンピューターサイエンスやビジネスのクラスを受講しそれぞれの学問を極めることで自分のスキルセットを広げたり、エンジニアの学生組織で再生可能エネルギーのプロジェクトにリーダーとして携わることで強固なチームワーク形成やコミュニケーションスキルを磨くことができました。プロジェクトを先導するにあたり、常にチームメンバーやプロジェクトに関わるステークホルダーと密にコミュニケションをとり、定期的にフィードバックを行うことに重点をおいて進めました。
              <br />
              <br />
              私が最も興味があるのは、フルスタックエンジニアやフロントエンドエンジニアとして働くことです。スキルを磨き多くの人に貢献するために、今現在Venture
              Café
              Tokyoにてボランティアとして飲み物を注文・カウントするためのシステムを構築しています。また、自分のポートフォリオやブログも定期的に更新し、私の留学生として、そしソフトウェア開発者としての経験をシェアしています。
              私と同様の境遇にある人たちにとって少しでも助けとなればと思い取り組んでおります。これらのプロジェクトでは、主に
              ReactやNode.js, GraphQL, JavaScriptなどを用いています。
              <br />
              <br />
              私は常に学びを得るために努力を惜しまない自分の姿勢を誇りに思っていると同時に、知識を増やすことそしてその知識や経験を他の人と共有することに喜びを感じています。
              私が働く会社では、それらの姿勢を持って全力で仕事に取り組んでいく所存です。
              <br />
              <br />
              僕は現在、アメリカで、ソフトウェアエンジニアのフルタイムを探しております。2020年5月に卒業予定で、その後はすぐに働けます。
              OPTというものが使えるので、3年間はスポンサー無しで働くことが出来ます。何か機会がありましたら、よろしくお願い致します。
              <br />
              <br />
              是非ご連絡をお待ちしております。僕のブログを拝見いただき、ありがとうございます。
            </div>
            <br />
            <a
              href="https://drive.google.com/file/d/1CpCYjR1ID50ACrqggUo-1DEUmFl6dPpL/view?usp=sharing"
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
                  <div className={styles.company}>Venture Café Tokyo</div>
                  <span className={styles.duration}>2019年12月 - 現在</span>
                  <span className={styles.location}>東京</span>
                </div>
              </div>
              <div className={styles.skills}>Marketing, Communication</div>
              <p>
                主催イベントにて、ユーザーのドリンクをトラッキングするためのQRコードを使ったシステムの作成
                <br />
                <br />
                フロントエンドは主にReact、JavaScript、バックエンドはGraphQL、Node.jsを使用
              </p>
            </section>
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
                学生がセッションの予約をしたり、管理者がチューターのスケジュール等を管理することのできるシステムのthick
                UIをReact、JavaScript、PHPを用いて作成
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
                広告を宣伝したい会社が使う用に広告のパフォーマンスを追跡するシステムをReact、Redux、TypeScriptを用いて作成
                <br />
                <br />
                会社が使用するアドセレクションの機械学習モデルの正確性を向上するために、PythonやData
                Science面でのコンサルティングを提供
              </p>
            </section>

            <section>
              <div className={styles.information}>
                <div className={styles.position}>
                  Androidエンジニアインターン
                </div>
                <div className={styles.subInformation}>
                  <div className={styles.company}>Kinetikos</div>
                  <span className={styles.duration}>2018年6月 - 2018年8月</span>
                  <span className={styles.location}>ポルトガル、リスボン</span>
                </div>
              </div>
              <div className={styles.skills}>React, JS, Java</div>
              <p>
                患者の状態をモニタリングしたり、患者のエンゲージメントを向上するためのボイスコマンドの機能を搭載したアンドロイドの患者ケアアプリをJavaとSQLを使って作成
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
                進学校に通っている高校生への、学校のスケジュール管理などを含む全面的なサポート
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
              <p>小学生から高校生までの様々な科目での個別指導</p>
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
                自分の経験をシェアするためにポートフォリオやブログをReact,
                GraphQL, GatsbyJSなどを用いてフルスタックで作成
                <br />
                <br />
                このWebsiteです！
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
                日常の様々なアクティビティを管理するためのバーチャルな報酬ベースのアンドロイドアプリをJavaやSQLを用いて作成
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
                Javaを用いて作成したカスタムAIの勝率が95%の五目並べのアプリをアンドロイドのプレイストアでリリース
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
                コマンドラインで調整可能なAIを搭載したオセロのボードゲームをC++で作成
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
                合金欠陥検出におけるディープラーニングの研究プロジェクトにおいて、PythonやMATLABを用いて画像解析などを行い、
                YOLOv3のアルゴリズムにて0.95 F1 scoresを達成
              </p>
              <a href={`https://skunkworks.engr.wisc.edu/`}>
                UW-Madison Informatics Skunkworksへのリンク
              </a>
            </section>
          </div>

          <div className={styles.organization}>
            <h3>課外活動</h3>
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
                ウェブサイト、太陽光発電のダッシュボードのプロトタイプの作成や新規部員の技術指導
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
