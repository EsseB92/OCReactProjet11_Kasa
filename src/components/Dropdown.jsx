import React, { useCallback, useState } from 'react';
import downArrow from '../assets/downArrow.png';
import upArrow from '../assets/upArrow.png';

const Dropdown = ({ title, desc }) => {
    const [collapsed, setCollapsed] = useState();

    const toggleCollapse = useCallback(() => {
        setCollapsed((oldcollapsed) => !oldcollapsed);
    }, []);

    const arrowImg = collapsed ? upArrow : downArrow;
    const dropdownContent = collapsed ? 'dropdown__content--collapsed' : '';

    return (
        <div className="dropdown">
            <div onClick={toggleCollapse} className="dropdown__header">
                <h2>{title}</h2>
                <img
                    src={arrowImg}
                    alt="Icône de flèche"
                    width="24px"
                    height="13.71px"
                />
            </div>

            <div className={`dropdown__content ${dropdownContent}`}>
                {Array.isArray(desc) ? (
                    desc.map((item, index) => <p key={index}>{item}</p>)
                ) : (
                    <p>{desc}</p>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
