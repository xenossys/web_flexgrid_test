import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "NotoSansKR-Black";
        src: url(${require('assets/fonts/NotoSansKR-Black.otf')});
    }

    @font-face {
        font-family: "NotoSansKR-Bold";
        src: url(${require('assets/fonts/NotoSansKR-Bold.otf')});
    }

    @font-face {
        font-family: "NotoSansKR-DemiLight";
        src: url(${require('assets/fonts/NotoSansKR-DemiLight.otf')});
    }

    @font-face {
        font-family: "NotoSansKR-Light";
        src: url(${require('assets/fonts/NotoSansKR-Light.otf')});
    }

    @font-face {
        font-family: "NotoSansKR-Medium";
        src: url(${require('assets/fonts/NotoSansKR-Medium.otf')});
    }

    @font-face {
        font-family: "NotoSansKR-Regular";
        src: url(${require('assets/fonts/NotoSansKR-Regular.otf')});
    }

    @font-face {
        font-family: "SCDream1";
        src: url(${require('assets/fonts/SCDream1.otf')});
    }

    @font-face {
        font-family: "SCDream2";
        src: url(${require('assets/fonts/SCDream2.otf')});
    }

    @font-face {
        font-family: "SCDream3";
        src: url(${require('assets/fonts/SCDream3.otf')});
    }

    @font-face {
        font-family: "SCDream4";
        src: url(${require('assets/fonts/SCDream4.otf')});
    }

    @font-face {
        font-family: "SCDream5";
        src: url(${require('assets/fonts/SCDream5.otf')});
    }

    @font-face {
        font-family: "SCDream6";
        src: url(${require('assets/fonts/SCDream6.otf')});
    }

    @font-face {
        font-family: "SCDream7";
        src: url(${require('assets/fonts/SCDream7.otf')});
    }

    @font-face {
        font-family: "SCDream8";
        src: url(${require('assets/fonts/SCDream8.otf')});
    }

    @font-face {
        font-family: "SCDream9";
        src: url(${require('assets/fonts/SCDream9.otf')});
    }
    html,
    body {
        display: relative;
        margin: 0;
        height: 100%;
    }
`;

export default GlobalStyle;
