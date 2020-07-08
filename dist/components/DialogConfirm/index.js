import React from 'react';
import { MdClose } from 'react-icons/md';
import Draggable from 'react-draggable';
import Warning from '../../assets/icons/warning.png';
import Button from '../Button';
import { Container, Header, Content, Footer } from './styles';
const DialogConfirm = () => {
    return (React.createElement(Draggable, { handle: ".handle" },
        React.createElement(Container, null,
            React.createElement(Header, { className: "handle" },
                React.createElement("span", null, "Confirm Folder Delete"),
                React.createElement("button", { onClick: close },
                    React.createElement(MdClose, null))),
            React.createElement(Content, null,
                React.createElement("img", { src: Warning, alt: "warning" }),
                React.createElement("span", null, "Are you sure want to remove the folder ?")),
            React.createElement(Footer, null,
                React.createElement(Button, null, "Yes"),
                React.createElement(Button, null, "No")))));
};
export default DialogConfirm;
//# sourceMappingURL=index.js.map