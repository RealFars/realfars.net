// Display a message suggesting the user to add the app to their home screen if not already done
    window.addEventListener('load', function () {
        if (!isPWA()) {
            const message = document.createElement('div');
            message.innerText = 'For a better experience, add this app to your home screen!';
            message.style.position = 'fixed';
            message.style.bottom = '20px';
            message.style.left = '50%';
            message.style.transform = 'translateX(-50%)';
            message.style.backgroundColor = '#333';
            message.style.color = '#fff';
            message.style.padding = '10px 20px';
            message.style.borderRadius = '8px';
            message.style.zIndex = '10000';
            message.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3)';
            message.style.fontFamily = 'sans-serif';

            document.body.appendChild(message);

            setTimeout(() => {
                message.remove();
            }, 120000);
            //remove after 2 minutes
        }
    });

    function isPWA() {
        return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    }