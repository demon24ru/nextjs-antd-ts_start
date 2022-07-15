import Document, {Html, Head, Main, NextScript} from "next/document";
import React from "react";


export default class extends Document {
    render() {
        return (
            <Html lang="ru">
            <Head>
                <meta charSet="utf-8" />
                <meta name="theme-color" content="#ffffff"/>
                <link rel="manifest" href="/manifest.json"/>
                <link rel="icon" href="/favicon.ico" />
                <style>{`
                      body {
                        margin: 0;
                        padding: 0;
                        height: 100%;
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
                        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
                        sans-serif;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                      }

                      code {
                        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
                        monospace;
                      }
                      .preloader {
                        height: 100%;
                      }
                
                      .loader-container {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background-color: #fafafa;
                      }
                
                      .spinner {
                        width: 100px;
                        height: 100px;
                        margin: 300px auto;
                        border-radius: 100%;
                        -webkit-animation: sk-scaleout 2s infinite ease-in-out;
                        animation: sk-scaleout 2s infinite ease-in-out;
                      }
                
                      @-webkit-keyframes sk-scaleout {
                        0% { -webkit-transform: scale(0.85) }
                        50% {
                          -webkit-transform: scale(1);
                          opacity: 0.5;
                        }
                        100% {
                          -webkit-transform: scale(0.85);
                          opacity: 1;
                        }
                      }
                
                      @keyframes sk-scaleout {
                        0% {
                          -webkit-transform: scale(0.85);
                          transform: scale(0.85);
                        }
                        50% {
                          -webkit-transform: scale(1);
                          transform: scale(1);
                          opacity: 0.5;
                        }
                        100% {
                          -webkit-transform: scale(0.85);
                          transform: scale(0.85);
                          opacity: 1;
                        }
                      }
                `}</style>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
        );
    }
}
