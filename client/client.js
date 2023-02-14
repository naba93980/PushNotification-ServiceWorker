const publicKey = 'BPwxqfo5cYRXXPxC7o_Ti3_Z2f_JoSbEUJdnt_WoMPMIpuDYFbsk_9fLEBxw8Lp1yiHzq2cp1NvhJ7RaOOcfLsI';

// check for service worker
if('serviceWorker' in navigator){
    send().catch(err=>console.log(err))   
}


// register SW, register PushSubscription, send Push notif req
async function send(){
 const register = await navigator.serviceWorker.register('./serviceWorker.js',{
    scope: '/'
 });

 const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: publicKey
 });

 // send push notif req
 await fetch('/subscribe',{
    method: 'POST',
    body: JSON.stringify(subscription),
    headers:{
        'content-type':'application/json'
    }
 });

}