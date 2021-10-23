const base_url = "https://jsa-t.herokuapp.com";
const cl = new ClientJS();

const data = {
    action: "fgp",
    fingerprint_uuid: cl.getFingerprint(),
    visit_url: window.location.href,
    device_data: {
    user_agent: cl.getUserAgent(),
    screen: cl.getScreenPrint(),
    os_name: cl.getOS(),
    os_version: cl.getOSVersion(),
    browser_name: cl.getBrowser(),
    browser_version: cl.getBrowserVersion(),
    cpu: cl.getCPU(),
    engine: cl.getEngine(),
    device: cl.getDevice(),
    languages: cl.getLanguage(),
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

sendRequest();