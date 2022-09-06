import Head from 'next/head';
import useSWR from 'swr';

// const data = fetch('http://localhost/next-wp/graphql', {
//   headers: { 'Content-Type': 'application/json' },
//   method: 'POST',
//   body: JSON.stringify({ test: 'value' }),
// });
// console.log(data);
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Page() {
  const { data, error } = useSWR('/api/page/sample-page', fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data);
  return (
    <div>
      <Head>
        <title>Headless Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>{data.page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
      </main>
    </div>
  );
}
