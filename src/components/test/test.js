let {AG, GL} = {
    AG: {
        goto: function() {
            console.log('win.goto')
        }
    },
    GL: {}
}

{
    let global = GL
    global.get = function() {
        console.log('GL.get')
    }
    AG.get = function() {
        console.log('AG.get')
    }
}
window.AG = AG
window.GL = GL

export {
    AG,
    GL
}
