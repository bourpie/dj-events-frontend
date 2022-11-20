import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr-CA">
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        </Head>
      <body className='font-body prose prose-a:text-blue-600 hover:prose-a:text-blue-500 max-w-none sm:prose-sm  lg:prose-xl'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


