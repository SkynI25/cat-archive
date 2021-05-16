import React from 'react';
import '../../styles/FolderLayout.css';

const FolderLayout = props => {
    return (
        <ul className="forderBorder">
            {props.children}
        </ul>
    );
};

export default FolderLayout;