import React, { ReactNode } from 'react';
export interface Props {
    isOpen?: boolean;
    menuItens?: {
        title: string;
        icon: ReactNode;
        click: any;
    }[];
    windowsItens?: {
        title: string;
        active: boolean;
        click: any;
    }[];
}
declare const StartMenu: React.FC<Props>;
export default StartMenu;
//# sourceMappingURL=index.d.ts.map