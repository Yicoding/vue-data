import {AG, GL} from './test'

let QueryString = {}

QueryString.AGget = function() {
    // console.log('AGget')
    AG.get()
}
QueryString.GLget = function() {
    GL.get()
    // console.log('GLget')
}
QueryString.goto = function() {
    AG.goto()
}
export let goto = function() {
    console.log('goto')
}

export default QueryString
