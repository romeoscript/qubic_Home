import  { useEffect } from 'react';

const PureChatWidget = () => {
    useEffect(() => {
        window.purechatApi = { l: [], t: [], on: function () { this.l.push(arguments); } };

        const script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript';

        let done = false;
        script.onload = script.onreadystatechange = function () {
            if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
                new window.PCWidget({ c: 'c1563eec-cac4-43e4-996b-10d6d8a66f9a', f: true });
                done = true;
            }
        };

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return null;
};

export default PureChatWidget;
