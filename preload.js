const { contextBridge, ipcRenderer } = require('electron')

const ipcPromise = async(route, ...args)=>{
    try {
        return await new Promise((resolve,reject)=>{
            setTimeout(()=>reject('Timeout'), 10000)
            ipcRenderer.send(route, ...args);
            ipcRenderer.once(route,(event, arg) => {
                resolve(arg)
              })
        })
    } catch (error) {
        console.log(error);
        return error
    }
}

contextBridge.exposeInMainWorld('electronAPI', {
    getCpu: () => ipcPromise('os:cpu', null),
    getGpu: () => ipcPromise('os:gpu', null)
    // log: () => console.log('Batata')
})