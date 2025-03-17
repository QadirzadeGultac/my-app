import React, { useState } from 'react';
import './Menyu.css';
import { useNavigate } from 'react-router-dom';
const Menyu = ({ onResidentsClick, closeResidentsClick, onUsersClick, closeUsersClick }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (menu) => {
    // Əgər artıq açıq olan menyuya kliklənibsə, onu bağlayırıq
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };
  return (
    <div className="menu">
      <div className={isMenuOpen ? "small-container" : "container"}>
        <div className="menu-header">
          <h1>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img className="burger" src="./src/assets/menu.png" alt="burger menu" />
            </button>
            {!isMenuOpen && "NM SOFT"}
          </h1>
        </div>

        {/* Sakinlər */}
        <div className="menu-main" onClick={() => { toggleMenu("residents"); onResidentsClick(); closeUsersClick(); closePriceListClick(); }}>
          <div className="residents-div">
            <img
              className="residents"
              src={activeMenu === "residents"
                ? "./src/assets/residents-blue.png"
                : "./src/assets/residents-black.png"}
              alt="residents"
            />
            {!isMenuOpen && (
              <p className={activeMenu === "residents" ? "menu-p active-text" : "menu-p inactive-text"}>
                Sakinlər
              </p>
            )}
          </div>
        </div>

        {/* İstifadəçilər */}
        <div className="menu-main" onClick={() => { toggleMenu("users"); closeResidentsClick(); onUsersClick(); closePriceListClick();}}>
          <div className="users-div">
            <img
              className="users"
              src={activeMenu === "users"
                ? "./src/assets/users-blue.png"
                : "./src/assets/users-black.png"}
              alt="users"
            />
            {!isMenuOpen && (
              <p className={activeMenu === "users" ? "menu-p active-text" : "menu-p inactive-text"}>
                İstifadəçilər
              </p>
            )}
          </div>
        </div>

        {/* Qiymət Cədvəli */}
        <div className="menu-main" onClick={() => { toggleMenu("price-list"); closeResidentsClick(); closeUsersClick(); onPriceListClick();}}>
          <div className="price-list-div">
            <img
              className="price-list"
              src={activeMenu === "price-list"
                ? "./src/assets/price-list-blue.png"
                : "./src/assets/price-list-black.png"}
              alt="price-list"
            />
            {!isMenuOpen && (
              <p className={activeMenu === "price-list" ? "menu-p active-text" : "menu-p inactive-text"}>
                Qiymət Cədvəli
              </p>
            )}
          </div>
        </div>

        {/* İcazələr */}
        <div className="menu-main" onClick={() => { toggleMenu("permissions"); closeResidentsClick(); closeUsersClick(); closePriceListClick();}}>
          <div className="permissions-div">
            <img
              className="permissions"
              src={activeMenu === "permissions"
                ? "./src/assets/permissions-blue.png"
                : "./src/assets/permissions-black.png"}
              alt="permissions"
            />
            {!isMenuOpen && (
              <p className={activeMenu === "permissions" ? "menu-p active-text" : "menu-p inactive-text"}>
                İcazələr
              </p>
            )}
          </div>
        </div>

        {/* Hesablamalar */}
        <div className="menu-main" onClick={() => { toggleMenu("calculations"); closeResidentsClick(); closeUsersClick(); closePriceListClick();}}>
          <div className="calculations-div">
            <img
              className="calculations"
              src={activeMenu === "calculations"
                ? "./src/assets/calculations-blue.png"
                : "./src/assets/calculations-black.png"}
              alt="calculations"
            />
            {!isMenuOpen && (
              <p className={activeMenu === "calculations" ? "menu-p active-text" : "menu-p inactive-text"}>
                Hesablamalar
              </p>
            )}
          </div>
        </div>

        {/* Hesabat */}
        <div className="menu-main" onClick={() => { toggleMenu("report"); closeResidentsClick(); closeUsersClick(); closePriceListClick();}}>
          <div className="report-div">
            <img
              className="report"
              src={activeMenu === "report"
                ? "./src/assets/report-blue.png"
                : "./src/assets/report-black.png"}
              alt="report"
            />
            {!isMenuOpen && (
              <p className={activeMenu === "report" ? "menu-p active-text" : "menu-p inactive-text"}>
                Hesabat
              </p>
            )}
          </div>
        </div>
        <div>
          {!isMenuOpen ? (
            <>
              <button className='log-out' onClick={() => {
                handleLogout();
                closeResidentsClick();
                closeUsersClick();
              }} >Log out
                <img className='log-out-img' src="./src/assets/logout.png" alt="log out" />
              </button>
            </>
          ) : (
            <img
              style={{ marginTop: "180px" }}
              className='log-out-img' onClick={() => {
                handleLogout();
                closeResidentsClick();
                closeUsersClick();
              }} src="./src/assets/logout.png" alt="log out" />
          )}
        </div>

      </div>
    </div>
  );
};

export default Menyu;
