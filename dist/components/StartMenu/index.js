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
import React, { useState, useEffect } from 'react';
import WindowsLogo from '../../assets/icons/windows_start.png';
import ShutDown from '../../assets/icons/shut_down.png';
import Standby from '../../assets/icons/standby.png';
import Run from '../../assets/icons/application_hourglass.png';
import Appwiz from '../../assets/icons/appwiz.png';
import { Container, StartButton, Menu, ContentMenu, Timer, BordaLeft, ItemMenu, Itens, ItemSeparator, ItensWindow, ItemWindow } from './styles';
const StartMenu = (_a) => {
    var { isOpen = false, windowsItens = [], menuItens = [] } = _a, props = __rest(_a, ["isOpen", "windowsItens", "menuItens"]);
    const [time, setTime] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        setIsMenuOpen(isOpen);
    }, [isOpen]);
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    function handleButtonStart() {
        setIsMenuOpen(!isMenuOpen);
    }
    function handleClickItemMenu(item) {
        setIsMenuOpen(false);
        item.click();
    }
    return (React.createElement(Container, Object.assign({}, props),
        React.createElement(StartButton, { isOpen: isMenuOpen, onClick: handleButtonStart },
            React.createElement("img", { src: WindowsLogo, alt: "logo" }),
            "Start"),
        isMenuOpen && (React.createElement(Menu, null,
            React.createElement(ContentMenu, null,
                React.createElement(BordaLeft, null),
                React.createElement(Itens, null,
                    menuItens.map(item => (React.createElement(ItemMenu, { key: item.title, onClick: () => handleClickItemMenu(item) },
                        item.icon,
                        React.createElement("span", null, item.title)))),
                    React.createElement(ItemMenu, { onClick: handleButtonStart },
                        React.createElement("img", { src: Run, alt: "run" }),
                        React.createElement("span", null, "Run...")),
                    React.createElement(ItemSeparator, null),
                    React.createElement(ItemMenu, { onClick: handleButtonStart },
                        React.createElement("img", { src: Standby, alt: "suspend" }),
                        React.createElement("span", null, "Suspend")),
                    React.createElement(ItemMenu, { onClick: handleButtonStart },
                        React.createElement("img", { src: ShutDown, alt: "shutdown" }),
                        React.createElement("span", null, "Shut Down")))))),
        React.createElement(ItensWindow, null, windowsItens.map(item => (React.createElement(ItemWindow, { key: item.title, active: item.active, onClick: item.click },
            React.createElement("img", { src: Appwiz }),
            React.createElement("span", null, item.title))))),
        React.createElement(Timer, null,
            React.createElement("span", null, time))));
};
export default StartMenu;
//# sourceMappingURL=index.js.map