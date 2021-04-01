import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen,faPlus,faThLarge } from '@fortawesome/free-solid-svg-icons'

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import ProductUpload from '../ProductUpload/ProductUpload';
import './Admin.css'
import ManageProduct from '../ManageProduct/ManageProduct';

const Admin = () => {
    const handleAdd=()=>{
        document.getElementById("manageProductDiv").style.display="none";
        document.getElementById("ProductUploadDiv").style.display="block";
    }
    const handleProductManagement=()=>{
        console.log("clicked add");
        document.getElementById("manageProductDiv").style.display="block";
        document.getElementById("ProductUploadDiv").style.display="none";
    }
    return (
        <div>
            <div id="ProductUploadDiv">
            <ProductUpload></ProductUpload>
            </div>
            <div id="manageProductDiv">
            <ManageProduct></ManageProduct>
            </div>
            <SideNav
            >
                
    <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="manageProduct">
                <NavIcon onClick={handleProductManagement}>
                <FontAwesomeIcon style={{ fontSize: '1.75em' }} icon={faThLarge} />
                </NavIcon>
                <NavText>
                    Manage Product
                </NavText>
            </NavItem>
            <NavItem eventKey="addProduct">
                <NavIcon onClick={handleAdd}>
                <FontAwesomeIcon style={{ fontSize: '1.75em' }} icon={faPlus} />
                </NavIcon>
                <NavText>
                    Add Product
                </NavText>
            </NavItem>
            <NavItem eventKey="edit">
                <NavIcon>
                <FontAwesomeIcon style={{ fontSize: '1.75em' }} icon={faPen} />
                </NavIcon>
                <NavText>
                    Edit Product
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
        </div>
    );
};

export default Admin;