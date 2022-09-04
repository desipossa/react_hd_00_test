import { useState } from "react";

const TopBanner = () => {
    // classList.add 구현
    const [TB, setTB] = useState(false);
    return (
        <div className={`TopBanner ${TB ? 'on' : ''}`}>
            <div className="w1200">
                <h2>
                    현대엘리베이트 스마트 테크놀로지 체험 <span>Green Technology</span>
                </h2>
                <p>
                    현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.
                </p>
                <div className="top_close_btn" onClick={() => setTB(!TB)}>
                    <i className="xi-close"></i>
                </div>
            </div>
        </div>
    )
}

export default TopBanner;