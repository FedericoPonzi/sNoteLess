import * as React from "react"

export type HelloProps = { 
    compiler: string 
    framework: string
}


export const Hello = (props: HelloProps) => <h1>Hello, world From {props.compiler} and {props.framework}!</h1>

