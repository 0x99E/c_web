const base_url = "https://jsa-t.herokuapp.com";
const client = new ClientJS();

const data = {
    action: "fgp",
    fingerprint_uuid: client.getFingerprint(),
    visit_url: window.location.href,
    device_data: {
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
    date: new Date().toISOString().slice(0, 10), 
    },
    raw_data: {
        browser_window: (window.innerWidth || document.documentElement.clientWidth || 
        document.body.clientWidth) + "x" + (window.innerHeight|| document.documentElement.clientHeight|| 
            document.body.clientHeight),
    }
}

async function sendRequest() {
    const response = await fetch(base_url + '/visit/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    // console.log(response)
}

console.log(data);
sendRequest();