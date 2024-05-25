export type Theme = {
    components: {
        Button: {
            colorPrimary: string;
            colorPrimaryHover: string;
            colorTextDisabled: string;
            borderColorDisabled: string;
            primaryShadow: string;
            algorithm: boolean; 
        };
        Form: {
            labelColor: string;
        };
        Switch: {
            colorPrimary: string;
            colorPrimaryHover: string;
        };
        DatePicker: {
            colorPrimary: string;
            colorPrimaryHover: string;
        };
    };
};