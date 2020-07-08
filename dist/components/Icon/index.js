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
import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import { Container } from './styles';
const Icon = (_a) => {
    var { title, iconName, customicon = null, click = () => { } } = _a, props = __rest(_a, ["title", "iconName", "customicon", "click"]);
    const [isDragging, setIsDragging] = useState(false);
    let icon;
    if (iconName) {
        const icons = require.context('../../assets/icons', true);
        icon = icons(`./${iconName}.png`);
    }
    const nodeRef = useRef(null);
    function handleClickIcon() {
        click();
    }
    function onStop() {
        if (isDragging) {
            setIsDragging(false);
        }
        else {
            handleClickIcon();
        }
    }
    function onDrag() {
        setIsDragging(true);
    }
    return (React.createElement(Draggable, { onStop: onStop, onDrag: onDrag, nodeRef: nodeRef },
        React.createElement(Container, Object.assign({ ref: nodeRef }, props),
            icon && (React.createElement("img", { src: icon, draggable: "false", alt: "icon" })),
            customicon && (customicon),
            React.createElement("span", null, title))));
};
export default Icon;
//# sourceMappingURL=index.js.map