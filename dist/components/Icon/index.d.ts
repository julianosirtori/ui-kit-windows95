import React, { ReactNode } from 'react';
export interface Props {
    title: string;
    iconName?: string;
    customicon?: ReactNode;
    click?: () => void;
}
declare const Icon: React.FC<Props>;
export default Icon;
//# sourceMappingURL=index.d.ts.map