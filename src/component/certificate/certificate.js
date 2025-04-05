import React from "react"
import './certificate.css'
import ULogo from '../../assets/U.png'
import { motion } from "framer-motion";

const Main = () => {
    return (<>

        <div className="main">
            <div className="container pt-3 text-center">
                <div className="box">
                    <div className="text-box">
                        <motion.div
                            className="content"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}>
                            <h1 className="text-primary">Hard Work Rewards</h1>
                        </motion.div>
                        <motion.div
                            className="content"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}>
                            <img className="uimg" src={ULogo} alt="U Logo" />
                        </motion.div>

                    </div>
                    <motion.h3
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
                        className="mb-4"
                    >
                        Your Verification Code
                    </motion.h3>
                </div>
                <div className="input-group mb-3 code-box">
                    <input type="text" className="input" id="basic-url" aria-describedby="basic-addon3" placeholder="Enter Your Code" />
                    <button className="btn btn-primary" type="button"><i className="bi bi-arrow-right text-light"></i></button>
                </div>
            </div>
        </div >
    </>
    )
}
export default Main;