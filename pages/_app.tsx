import '../styles/custom.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import {Provider} from "react-redux";
import {persistor, store} from "../redux/store";
import {PersistGate} from "redux-persist/integration/react";
import Lenis from '@studio-freight/lenis'
import React, {useEffect} from "react";
import {Toaster} from "react-hot-toast";
import Modal from "../components/Modal/Modal";
import LampModal from "../components/Modal/LampModal";
import VaseModal from "../components/Modal/VaseModal";
import CarpetModal from "../components/Modal/CarpetModal";

import dynamic from 'next/dynamic'
{/*@ts-ignore*/}
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});


import Router from 'next/router';
{/*@ts-ignore*/}
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {

    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.6,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            direction: 'vertical', // vertical, horizontal
            gestureDirection: 'vertical', // vertical, horizontal, both
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: true,
            touchMultiplier: 2,
            infinite: false,
        })

//get scroll value
        {/*@ts-ignore*/}
        lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
            console.log({ scroll, limit, velocity, direction, progress })
        })

        function raf(time:any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    })
  return (
      <>
          <Provider store={store}>
              <Toaster />
              <div className='text-white wrapper noise'>
                  {/*@ts-ignore*/}
                  <AnimatedCursor innerSize={8}
                      outerSize={8}
                      color='255, 255, 255'
                      outerAlpha={0.2}
                      innerScale={0}
                      outerScale={4}
                      clickables={[
                          'a',
                          'input[type="text"]',
                          'input[type="email"]',
                          'input[type="number"]',
                          'input[type="submit"]',
                          'input[type="image"]',
                          'label[for]',
                          'select',
                          'textarea',
                          'button',
                          '.link'
                      ]}
                  />
                  <Modal/>
                  <LampModal/>
                  <VaseModal/>
                  <CarpetModal/>

                  <Component {...pageProps} />
              </div>
          </Provider>
      </>
  )
}
