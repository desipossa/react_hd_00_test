import { useEffect, useRef, useState } from "react";
import MainSlide from "react-slick";
import "slick-carousel/slick/slick.css";

const slidData = [
    {
        slideid: 1, content: "01 현대엘리베이트 스마트 테크놀로지 체험", s: "Green Technology", p: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다."
    },
    {
        slideid: 2, content: "02 현대엘리베이트 스마트 테크놀로지 체험", s: "Green Technology---", p: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다."
    },
    {
        slideid: 3, content: "03 현대엘리베이트 스마트 테크놀로지 체험", s: "Green Technology", p: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다."
    },
]

const MainVisual = () => {
    const [SLN, setSLN] = useState(null);
    const MAINSLISER = useRef(null);
    useEffect(() => {
        setSLN(0)
    }, [])
    return (
        <section className="MainVisual">
            <MainSlide className="main_slider" arrows={false} afterChange={(index) => setSLN(index)} ref={MAINSLISER}>
                {
                    slidData.map((slide, idx) => (
                        <figure className={`itm0${slide.slideid} ${(idx == (SLN)) && 'on'}`}>
                            <div className="w1200">
                                <h2>
                                    {slide.content}
                                    <span>{slide.s}</span>
                                </h2>
                                <p>
                                    {slide.p}
                                </p>
                                <a href="">바로가기</a>
                            </div>
                        </figure>
                    ))
                }

            </MainSlide>


            <ul className="slide_dots">
                {
                    slidData.map((dots, idx) => (
                        <li className={idx == SLN && 'on'} onClick={() => (setSLN(idx), MAINSLISER.current.slickGoTo(idx))}><span>{dots.s}</span></li>
                    ))
                }
            </ul>
            <div className="slide_handler">
                <button className="prev" onClick={() => MAINSLISER.current.slickPrev()}>prev</button>
                <button className="next" onClick={() => MAINSLISER.current.slickNext()}>next</button>
            </div>
            <div className="main_slider_num">
                0{SLN + 1} <span> / 0{slidData.length}</span>
            </div>
        </section>
    )
}

export default MainVisual;