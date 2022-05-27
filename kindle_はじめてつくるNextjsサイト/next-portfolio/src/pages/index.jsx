import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import * as style from '../styles/index.module.scss'

const Index = () => {
  return (
    <Layout>
      <div className={style.hero}>
        <Image
          src='/images/index-hero.jpg'
          alt='hero'
          layout='fill'
          objectFit='cover'
          quality={90}
        />
        <div className={style.textContainer}>
          <h1><span>おいしい焼肉が</span><span>食べたい</span></h1>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.profile}>
          <div>
            <h2>焼肉の可能性</h2>
            <p>
						「肉焼き」はお肉の種類や部位、大きさによって、その旨みを引き出す方法は実に100を超えるといわれる、実は奥が深い調理技法なのです。
            </p>
          </div>
          <Image
            src='/images/profile.jpg'
            alt='hero'
            height={1000}
            width={1000}
            quality={90}
          />
        </div>

        <div className={style.ctaButton}>
          <Link href='/contact'>
            <a>お問い合わせ</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
