import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from '@mui/material/Modal';
import logo from "../assets/images/logo.png";
import dropdownImg1 from "../assets/images/dropdown-img1.png";
import dropdownImg2 from "../assets/images/dropdown-img2.png";
import dropdownImg3 from "../assets/images/dropdown-img3.png";
import dropdownImg4 from "../assets/images/dropdown-img4.png";


const Header = () => {
    // modal state
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // modal form state
    const [serviceValue, setServiceValue] = useState();
    const [InputData, setInputData] = useState(
        {
            fname: "",
            phone: ""
        }
    );

    // Form error msg
    const [error, setError] = useState({});

    const InputEvent = (e) => {
        const { name, value } = e.target;
        setInputData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })

        const newError = { ...error }
        if (name == 'fname') {
            const specials = /[*|\":.<>[\]{}`\\()';@&$!0-9]/;
            if (!value || value.length <= 2 || specials.test(value)) {
                newError.fname = 'Please enter a valid name'
            }
            else {
                newError.fname = undefined;
            }
        }
        if (name == 'phone') {
            if (!value || value.length < 10 || value.length > 10 || isNaN(value)) {
                newError.phone = 'Please enter a valid phone number'
            }
            else {
                newError.phone = undefined;
            }
        }
        setError(newError)
        console.log(newError);
    }
    const SelectService = (e) => {
        e.preventDefault();
        setServiceValue(e.target.value)
    }

    const getQuote = (e) => {
        e.preventDefault();
        console.log(InputData);
    }


    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="main_header">
                        <div className="header_left">
                            <NavLink exact="true" to="/" className="logo">
                                <img src={logo} alt="logo" />
                            </NavLink>
                        </div>
                        <div className="header_right">
                            <ul>
                                <li className="nav_item">
                                    <NavLink exact="true" to="/Services" >Services</NavLink>
                                    <div className="header_dropdown">
                                        <div className="dropdown_left">
                                            <div className="dropdown_img">
                                                <img src={dropdownImg1} alt="dropdown image" />
                                            </div>
                                        </div>
                                        <div className="dropdown_right">
                                            <div className="dropdown_right_content-wrap row_reverse">
                                                <div className="dropdown_right_content">
                                                    <h2>Lorem Ipsum Dolor Sit</h2>
                                                    <p>amet, consectetuer adipiscing elit, sed diam nonummy nibh amet,</p>
                                                </div>
                                            </div>
                                            <div className="dropdown_right_content-wrap">
                                                <div className="dropdown_right_content">
                                                    <h2>Lorem Ipsum Dolor Sit</h2>
                                                    <p>amet, consectetuer adipiscing elit, sed diam nonummy nibh amet,</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav_item">
                                    <NavLink exact="true" to="/Projects" >Projects</NavLink>
                                    <div className="header_dropdown">
                                        <div className="dropdown_left">
                                            <div className="dropdown_img">
                                                <img src={dropdownImg2} alt="dropdown image" />
                                            </div>
                                        </div>
                                        <div className="dropdown_right">
                                            <div className="dropdown_right_content-wrap row_reverse">
                                                <div className="dropdown_right_content">
                                                    <h2>Lorem Ipsum Dolor Sit</h2>
                                                    <p>amet, consectetuer adipiscing elit, sed diam nonummy nibh amet,</p>
                                                </div>
                                            </div>
                                            <div className="dropdown_right_content-wrap">
                                                <div className="dropdown_right_content">
                                                    <h2>Lorem Ipsum Dolor Sit</h2>
                                                    <p>amet, consectetuer adipiscing elit, sed diam nonummy nibh amet,</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav_item">
                                    <NavLink exact="true" to="/About" >About Us</NavLink>
                                    <div className="header_dropdown">
                                        <div className="dropdown_left">
                                            <div className="dropdown_img">
                                                <img src={dropdownImg3} alt="dropdown image" />
                                            </div>
                                        </div>
                                        <div className="dropdown_right">
                                            <div className="dropdown_right_content-wrap row_reverse">
                                                <div className="dropdown_right_content">
                                                    <h2>Lorem Ipsum Dolor Sit</h2>
                                                    <p>amet, consectetuer adipiscing elit, sed diam nonummy nibh amet,</p>
                                                </div>
                                            </div>
                                            <div className="dropdown_right_content-wrap">
                                                <div className="dropdown_right_content">
                                                    <h2>Lorem Ipsum Dolor Sit</h2>
                                                    <p>amet, consectetuer adipiscing elit, sed diam nonummy nibh amet,</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav_item">
                                    <NavLink exact="true" to="/Contact" >Contact</NavLink>
                                    <div className="header_dropdown">
                                        <div className="dropdown_left">
                                            <div className="dropdown_img">
                                                <img src={dropdownImg4} alt="dropdown image" />
                                            </div>
                                        </div>
                                        <div className="dropdown_right">
                                            <div className="dropdown_right_content-wrap row_reverse">
                                                <div className="dropdown_right_content">
                                                    <h2>Lorem Ipsum Dolor Sit</h2>
                                                    <p>amet, consectetuer adipiscing elit, sed diam nonummy nibh amet,</p>
                                                </div>
                                            </div>
                                            <div className="dropdown_right_content-wrap">
                                                <div className="dropdown_right_content">
                                                    <h2>Lorem Ipsum Dolor Sit</h2>
                                                    <p>amet, consectetuer adipiscing elit, sed diam nonummy nibh amet,</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="cta">
                                <button type="button" onClick={handleOpen}>Get Quote</button>
                            </div>
                            <Modal open={open} onClose={handleClose} className="quote_modal">
                                <div className="modal_content">
                                    <div className="modal_header">
                                        <h1>Get Quotation Today</h1>
                                        <button onClick={handleClose} className="close_btn"><i className="icon-close"></i></button>
                                    </div>
                                    <div className="modal_body">
                                        <form className="quote_form" onSubmit={getQuote}>
                                            <div className="form_group">
                                                <input type="text" placeholder="Enter your name" name="fname" value={InputData.fname} onChange={InputEvent} />
                                                {error.fname ? <span> {error.fname}</span> : ""}
                                            </div>
                                            <div className="form_group">
                                                <input type="text" placeholder="Enter your phone no" name="phone" value={InputData.phone} onChange={InputEvent} />
                                                {error.phone ? <span> {error.phone}</span> : ""}
                                            </div>
                                            <div className="form_group">
                                                <select value={serviceValue} onChange={SelectService}>
                                                    <option disabled>Select service</option>
                                                    <option value="GIS">GIS</option>
                                                    <option value="Web">Web</option>
                                                    <option value="App">App</option>
                                                </select>
                                            </div>
                                            <button className="btn_submit" type="submit">Get Quote</button>
                                        </form>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;