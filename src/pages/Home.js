import React from 'react'
import Navbar from '../component/Navbar';
import Style from "../static/home.module.css"
import img1 from "../assets/assets 1.png"
const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className={Style.about}>
                <div className={Style.row}>
                    <div className={Style.left}>
                        <p className={Style.title}>
                            Software Developer
                        </p>
                        <h1 className='heading'>Samishan Thapa Chhetri</h1>
                        <p className={Style.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dignissimos rem,
                            officia ratione molestias omnis minus, unde aliquam, totam inventore quis quasi sit.
                            Dolor, id mollitia. Nostrum omnis vitae sunt.
                        </p>
                        <div className="btns">
                            <button className={Style.btn}>Read More</button>
                        </div>
                    </div>
                    <div className={Style.right}>
                        <div >
                            <img className={Style.img1} src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.skill}>
                <div className="top">
                    <h1 className={Style.skillh1}>
                        My Skill
                    </h1>
                    <p className={Style.skillp}>Mint Silk using Secret Tokens such as Shade. Stake Shade to enjoy passive rewards accrued from Shade Protocol dApps.</p>
                </div>
                {/* <div className={Style.line}></div> */}
                <div className={Style.bottom}>
                    <div className={Style.col}>
                        <h1>Web Development</h1>
                        <p>Deposit Secret Tokens into ShadeLend to mint Silk - an overcollateralized privacy-preserving stablecoin. ShadeLend empowers users with privacy-preserving leverage.</p>
                    </div>
                    <div className={Style.col}>
                        <h1>Mobile App</h1>
                        <p>Deposit Secret Tokens into ShadeLend to mint Silk - an overcollateralized privacy-preserving stablecoin. ShadeLend empowers users with privacy-preserving leverage.</p>
                    </div>
                    <div className={Style.col}>
                        <h1>Algo Expert</h1>
                        <p>Deposit Secret Tokens into ShadeLend to mint Silk - an overcollateralized privacy-preserving stablecoin. ShadeLend empowers users with privacy-preserving leverage.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home