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
import React from 'react';
import { Container } from './styles';
const Button = (_a) => {
    var { children, small = false, bold = false } = _a, props = __rest(_a, ["children", "small", "bold"]);
    return (React.createElement(Container, Object.assign({ bold: bold, small: small }, props), children));
};
export default Button;
//# sourceMappingURL=index.js.map