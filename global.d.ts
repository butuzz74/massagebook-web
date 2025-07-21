export {};

declare global {
    interface Window {
        Telegram: {
            WebApp: {
                initData: string;
                initDataUnsafe: {
                    user?: {
                        id: number;
                        first_name: string;
                        last_name?: string;
                        username?: string;
                        language_code?: string;
                    };
                    [key: string]: any;
                };
                close: () => void;
                sendData: (data: string) => void;
                expand: () => void;
                isExpanded: boolean;
                isClosingConfirmationEnabled: boolean;
                enableClosingConfirmation: () => void;
                disableClosingConfirmation: () => void;
                MainButton: {
                    isVisible: boolean;
                    isProgressVisible: boolean;
                    setText: (text: string) => void;
                    show: () => void;
                    hide: () => void;
                    onClick: (callback: () => void) => void;
                };
                [key: string]: any;
            };
        };
    }
}
