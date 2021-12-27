import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from '@mui/material/Modal';
import logo from "../assets/images/logo.png";


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
    const [Error, setError] = useState(false);

    const InputEvent = (e) => {
        const { name, value } = e.target;
        setInputData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
        if(!value || value.length <= 2){
            setError(true)
         }
         else{
            setError(false)
         }
         if(!value || value.length <= 3){
            setError(true)
         }
         else{
            setError(false)
         }
    }
    const SelectService = (e) => {
        e.preventDefault();
        setServiceValue(e.target.value)
    }

    const getQuote = (e) => {
        e.preventDefault();
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

                                    </div>
                                </li>
                                <li className="nav_item"><NavLink exact="true" to="/Projects" >Projects</NavLink></li>
                                <li className="nav_item"><NavLink exact="true" to="/About" >About Us</NavLink></li>
                                <li className="nav_item"><NavLink exact="true" to="/Contact" >Contact</NavLink></li>
                            </ul>
                            <div className="cta">
                                <button type="button" onClick={handleOpen}>Get Quote</button>
                            </div>
                            <Modal open={open} onClose={handleClose} className="quote_modal">
                                <div className="modal_content">
                                    <div className="modal_header">
                                        <h1>Get Quotation Today</h1>
                                    </div>
                                    <div className="modal_body">
                                        <form className="quote_form" onSubmit={getQuote}>
                                            <div className="form_group">
                                                <input type="text" placeholder="Enter your name" name="fname" value={InputData.fname} onChange={InputEvent} />
                                                {Error ? <span>Not valid</span> : ""}
                                            </div>
                                            <div className="form_group">
                                                <input type="text" placeholder="Enter your phone no" name="phone" value={InputData.phone} onChange={InputEvent} />
                                                {/* {Error ? <span>Not valid Number</span> : ""} */}
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