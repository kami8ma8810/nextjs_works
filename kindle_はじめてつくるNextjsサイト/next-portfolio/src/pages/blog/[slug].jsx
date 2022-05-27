import Image from 'next/image';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown'; //マークダウンファイルの本文部分の表示に必要
import Link from 'next/link';

import Layout from '../../components/layout';
import * as style from '../../styles/singleBlog.module.scss';

const SingleBlog = (props) => {
  return (
    <Layout>
      <div className={style.hero}>
        <div className={style.heroInner}>
          <Image
            src={props.frontmatter.image}
            alt='blog-image'
            height={1000}
            width={1000}
            layout={`raw`}
          />
        </div>
      </div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>{props.frontmatter.title}</h1>
          <p className={style.date}>
            <time>{props.frontmatter.date}</time>
          </p>
          <ReactMarkdown>{props.markdownBody}</ReactMarkdown>
          <div style={{marginTop:'2em'}}>
            <div className={style.btnRev}>
              <Link href='/blog'>
                <a>一覧へ戻る</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
			<style jsx>{`
			.
			`}</style>
    </Layout>
  );
};

export default SingleBlog;

// URLの生成と登録をする（slugを生成）
export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
      return slug;
    });
    return data;
  })(require.context('../../data', true, /\.md$/));

  // pathsで使うために配列に変換する
  const paths = blogSlugs.map((blogSlug) => `/blog/${blogSlug}`);
  return {
    paths: paths,
    fallback: false, //pathsに入っているslug以外のパス名は404にする
  };
}

// マークダウンデータを読み込む
export async function getStaticProps(context) {
  const { slug } = context.params;
  const data = await import(`../../data/${slug}.md`);
  const singleDocument = matter(data.default); //マークダウンデータの中身
  return {
    // singleBlogコンポーネントにデータを渡す
    props: {
      frontmatter: singleDocument.data,
      markdownBody: singleDocument.content,
    },
  };
}
