const client = new ClientJS();

const today = new Date();
const date = today.getDate() + "/"
    + (today.getMonth()+1)  + "/"
    + today.getFullYear() + " @ "
    + today.getHours() + ":"
    + today.getMinutes() + ":"
    + today.getSeconds();


async function sendRequest() {
    if (!localStorage.hasOwnProperty('uuid')) {
        const response = await fetch('https://analytics-server32.herokuapp.com/api/id');
        const userId = await response.json();

        await localStorage.setItem('uuid', userId);
    }

    const userData = {
        uuid: localStorage.getItem('uuid'),
        user_agent: client.getUserAgent(),
        screen: client.getScreenPrint(),
        os_name: client.getOS(),
        os_version: client.getOSVersion(),
        browser_name: client.getBrowser(),
        browser_version: client.getBrowserVersion(),
        cpu: client.getCPU(),
        engine: client.getEngine(),
        device: client.getDevice(),
        languages: client.getLanguage(),
        date: date,
        mdate: Date.now()
    };

    const visitData = {
        uuid: localStorage.getItem('uuid'),
        url: window.location.href,
        date: date,
        mdate: Date.now()
    };


    await fetch('https://analytics-server33.herokuapp.com/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    await fetch('https://analytics-server32.herokuapp.com/api/visits', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(visitData)
    });
}


sendRequest();

