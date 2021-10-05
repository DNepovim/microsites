/** @jsxImportSource @emotion/react */
import type { NextPage } from "next"
import Head from "next/head"
import { data } from "../data"
import { Navigation } from "../components/Navigation/Navigation"
import { Cover } from "../blocks/Cover/Cover"
import logo from "../images/logo.png"
import { css, Global } from "@emotion/react"
import { RichText } from "../blocks/RichText/RichText"
import { Video } from "../blocks/Video/Video"
import { Columns } from "../blocks/Columns/Columns"
import { Gallery } from "../blocks/Gallery/Gallery"
import { Quotation } from "../blocks/Quotation/Quotation"
import { Persons } from "../blocks/Persons/Persons"
import { theme } from "../theme"
import { Contacts } from "../blocks/Contacts/Contacts"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ČLK Insomnia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Global styles={css`
        @font-face {
          font-family: 'skautbold';
          src: url('../fonts/skaut-bold-webfont.eot');
          src: url('../fonts/skaut-bold-webfont.eot?#iefix') format('embedded-opentype'),
            url('../fonts/skaut-bold-webfont.woff2') format('woff2'),
            url('../fonts/skaut-bold-webfont.woff') format('woff'),
            url('../fonts/skaut-bold-webfont.ttf') format('truetype'),
            url('../fonts/skaut-bold-webfont.svg#skautbold') format('svg');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'themix';
          src: url('../fonts/themixc5-4_semilight-webfont.eot');
          src: url('../fonts/themixc5-4_semilight-webfont.eot?#iefix') format('embedded-opentype'),
            url('../fonts/themixc5-4_semilight-webfont.woff2') format('woff2'),
            url('../fonts/themixc5-4_semilight-webfont.woff') format('woff'),
            url('../fonts/themixc5-4_semilight-webfont.ttf') format('truetype'),
            url('../fonts/themixc5-4_semilight-webfont.svg#themix_c5semilight') format('svg');
          font-weight: normal;
          font-style: normal;
          font-display: auto;
        }

        @font-face {
          font-family: 'themix';
          src: url('../fonts/themixc5-4isemilightita-webfont.eot');
          src: url('../fonts/themixc5-4isemilightita-webfont.eot?#iefix') format('embedded-opentype'),
            url('../fonts/themixc5-4isemilightita-webfont.woff2') format('woff2'),
            url('../fonts/themixc5-4isemilightita-webfont.woff') format('woff'),
            url('../fonts/themixc5-4isemilightita-webfont.ttf') format('truetype'),
            url('../fonts/themixc5-4isemilightita-webfont.svg#themix_c5semilight_italic') format('svg');
          font-weight: normal;
          font-style: italic;
          font-display: auto;
        }

        @font-face {
          font-family: 'themix';
          src: url('../fonts/themixc5-7_bold-webfont.eot');
          src: url('../fonts/themixc5-7_bold-webfont.eot?#iefix') format('embedded-opentype'),
            url('../fonts/themixc5-7_bold-webfont.woff2') format('woff2'),
            url('../fonts/themixc5-7_bold-webfont.woff') format('woff'),
            url('../fonts/themixc5-7_bold-webfont.ttf') format('truetype'),
            url('../fonts/themixc5-7_bold-webfont.svg#themix_c5bold') format('svg');
          font-weight: bold;
          font-style: normal;
          font-display: auto;
        }

        @font-face {
          font-family: 'themix';
          src: url('../fonts/themixc5-7ibolditalic-webfont.eot');
          src: url('../fonts/themixc5-7ibolditalic-webfont.eot?#iefix') format('embedded-opentype'),
            url('../fonts/themixc5-7ibolditalic-webfont.woff2') format('woff2'),
            url('../fonts/themixc5-7ibolditalic-webfont.woff') format('woff'),
            url('../fonts/themixc5-7ibolditalic-webfont.ttf') format('truetype'),
            url('../fonts/themixc5-7ibolditalic-webfont.svg#themix_c5bold_italic') format('svg');
          font-weight: bold;
          font-style: italic;
          font-display: auto;
        }

        body {
          margin: 0;
          padding: 0;
          font-size: 18px;
          font-family: themix;
        }

        a {
          color: ${theme.color.brand};
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }

        ::selection {
          background-color: ${theme.color.brand};
        }


      `} />

      <main css={css`
        min-height: 300vh;
        padding-top: 96px;
      `}>
        {/* @ts-ignore */}
        <Navigation logo={logo} items={data.config.navigation} />
        {/* @ts-ignore */}
        <Cover id={data.config.navigation[0].link} {...data.pages.frontPage.blocks[0].fields} />
        {/* @ts-ignore */}
        <RichText id={data.config.navigation[1].link} {...data.pages.frontPage.blocks[1].fields} />
        {/* @ts-ignore */}
        <Video {...data.pages.frontPage.blocks[2].fields} />
        {/* @ts-ignore */}
        <Columns id={data.config.navigation[2].link} {...data.pages.frontPage.blocks[3].fields} />
        {/* @ts-ignore */}
        <Gallery {...data.pages.frontPage.blocks[4].fields} />
        {/* @ts-ignore */}
        <Quotation {...data.pages.frontPage.blocks[5].fields} />
        {/* @ts-ignore */}
        <Columns id={data.config.navigation[3].link} {...data.pages.frontPage.blocks[6].fields} />
        {/* @ts-ignore */}
        <Persons id={data.config.navigation[4].link} {...data.pages.frontPage.blocks[7].fields} />
        {/* @ts-ignore */}
        <Contacts id={data.config.navigation[5].link} {...data.pages.frontPage.blocks[8].fields} />
      </main>
    </div>
  )
}

export default Home
