import React from 'react';
import "../../styles/Folder.css";

const Folder = props => {
    return (
        <li className="folder">
            {props.title}
        </li>
    );
};

export default Folder;