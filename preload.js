const { contextBridge, ipcRenderer } = require('electron')

const ipcPromise = async(route, ...args)=>{
    try {
        return await new Promise((resolve,reject)=>{                     
            ipcRenderer.send(route, ...args);
            ipcRenderer.once(route,(event, arg) => {
                resolve(arg)
              })
            setTimeout(()=>reject('Timeout'), 10000)
        })
    } catch (error) {
        console.log(error);
        return error
    }
}

contextBridge.exposeInMainWorld('electronAPI', {
    getSystem: () => ipcPromise('os:system', null),
    getCpu: () => ipcPromise('os:cpu', null),
    getGpu: () => ipcPromise('os:gpu', null),
    getMemoria: () => ipcPromise('os:memoria', null),
    // log: () => console.log('Batata')
})