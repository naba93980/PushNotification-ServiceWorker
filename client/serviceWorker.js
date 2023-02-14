self.addEventListener('push',e=>{
    const data=e.data.json();
    self.registration.showNotification(data.title,{
        title: 'hello....',
        body: 'how is it going',
        vibrate: [200, 200, 200, 200]
    })
})