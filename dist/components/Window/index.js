var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState, useEffect, useRef } from 'react';
import { FaRegWindowMinimize, FaRegWindowMaximize } from "react-icons/fa";
import Draggable from 'react-draggable';
import { MdClose } from 'react-icons/md';
import { Container, Header, Menu, Content, Footer, SmallInfos, LargeInfos } from './styles';
const Window = (_a) => {
    var { children, maxWidth, maxHeight, title = "Online Services", footerMessages = ["6 object(s)", "7,39kb"], headerBackgroundColor = "#00007B", headerTextColor = "#fff", maximize = false, visible = true, showFooter = true } = _a, props = __rest(_a, ["children", "maxWidth", "maxHeight", "title", "footerMessages", "headerBackgroundColor", "headerTextColor", "maximize", "visible", "showFooter"]);
    const [isMaximized, setIsMaximized] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const nodeRef = useRef(null);
    useEffect(() => {
        setIsVisible(visible);
    }, [visible]);
    function handleMaximize() {
        setIsMaximized(!isMaximized);
    }
    function close() {
        setIsVisible(false);
    }
    return isVisible ? (React.createElement(Draggable, { handle: ".handle", nodeRef: nodeRef },
        React.createElement(Container, Object.assign({ ref: nodeRef, maximize: isMaximized }, props),
            React.createElement(Header, { className: "handle", headerBackgroundColor: headerBackgroundColor, headerTextColor: headerTextColor },
                React.createElement("span", null, title),
                React.createElement("div", null,
                    React.createElement("button", null,
                        React.createElement(FaRegWindowMinimize, null)),
                    React.createElement("button", { onClick: handleMaximize },
                        React.createElement(FaRegWindowMaximize, null)),
                    React.createElement("button", { onClick: close },
                        React.createElement(MdClose, null)))),
            React.createElement(Menu, null,
                React.createElement("a", { href: "#" }, "File"),
                React.createElement("a", { href: "#" }, "Edit"),
                React.createElement("a", { href: "#" }, "View"),
                React.createElement("a", { href: "#" }, "Help")),
            React.createElement(Content, { maxHeight: maxHeight, maxWidth: maxWidth }, children),
            showFooter && (React.createElement(Footer, null,
                React.createElement(SmallInfos, null,
                    React.createElement("span", null, footerMessages[0])),
                React.createElement(LargeInfos, null,
                    React.createElement("span", null, footerMessages[1]))))))) : React.createElement("div", null);
};
export default Window;
//# sourceMappingURL=index.js.map