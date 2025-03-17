import React, { useState } from 'react';
import { Modal } from 'antd';

const UsersHeader = () => {
    const [selectedChoice, setSelectedChoice] = useState('');
    const [selectedChoice1, setSelectedChoice1] = useState('');
    const [selectedChoice2, setSelectedChoice2] = useState('');
    const [selectedChoice3, setSelectedChoice3] = useState('');
    const [selectedChoice4, setSelectedChoice4] = useState('');
    const [selectedChoice5, setSelectedChoice5] = useState('');
    const [visible, setVisible] = useState(false);

    const [name, setName] = useState('');
    const [apartment, setApartment] = useState('');
    const [garageSpace, setGarageSpace] = useState('');
    const [carNumber, setCarNumber] = useState('');
    const [time, setTime] = useState('');
    const [amount, setAmount] = useState('');

    const handleSearchClick = () => {
        console.log("Axtarış funksiyası işlədi");
    };

    const clearButton = () => {
        setSelectedChoice('');
        setSelectedChoice1('');
        setSelectedChoice2('');
        setSelectedChoice3('');
        setSelectedChoice4('');
        setSelectedChoice5('');
    };

    const handleAddProductClick = () => {
        console.log("Yeni sakin əlavə edildi:", { name, apartment, garageSpace, carNumber, time, amount });
        setVisible(false); // Modalı bağlayır
    };

    return (
        <div className="residents-header">
            <button className="new-goods" onClick={() => setVisible(true)}>Yeni Sakin</button>
            
            <input className='input-group' value={selectedChoice} onChange={(e) => setSelectedChoice(e.target.value)} placeholder="Ad" type="text" />
            <input className='input-group' value={selectedChoice1} onChange={(e) => setSelectedChoice1(e.target.value)} placeholder="Mənzil" type="text" />
            <input className='input-group' value={selectedChoice2} onChange={(e) => setSelectedChoice2(e.target.value)} placeholder="Qaraj Yeri" type="text" />
            <input className='input-group' value={selectedChoice3} onChange={(e) => setSelectedChoice3(e.target.value)} placeholder="Maşın nömrəsi" type="text" />
            <input className='input-group' value={selectedChoice4} onChange={(e) => setSelectedChoice4(e.target.value)} placeholder="Vaxt" type="date"/>
            <input className='input-group' value={selectedChoice5} onChange={(e) => setSelectedChoice5(e.target.value)} placeholder="Məbləğ" type="text" />
            
            <button onClick={handleSearchClick} className="search-button">Axtar</button>
            <button onClick={clearButton} className="clear-button">Təmizlə</button>

            <Modal
                title="Yeni Sakin"
                open={visible}
                onCancel={() => setVisible(false)}
                footer={null}
                width={900}
                className="custom-modal"
            >
                <div className='modal-content'>
                    <input className='input-group one' type="text" placeholder="Ad" value={name} onChange={(e) => setName(e.target.value)} />
                    <input className='input-group group-one' type="text" placeholder="Mənzil" value={apartment} onChange={(e) => setApartment(e.target.value)} />
                    <input className='input-group group-two' type="text" placeholder="Qaraj yeri" value={garageSpace} onChange={(e) => setGarageSpace(e.target.value)} />
                    <input className='input-group group-three' type="text" placeholder="Maşın nömrəsi" value={carNumber} onChange={(e) => setCarNumber(e.target.value)} />
                    <input className='input-group group-four' type="date" placeholder="Vaxt" value={time} onChange={(e) => setTime(e.target.value)} />
                    <input className='input-group group-five' type="text" placeholder="Məbləğ" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <button className='add' onClick={handleAddProductClick}>Əlavə Et</button>
                </div>
            </Modal>
        </div>
    );
};

export default UsersHeader;
