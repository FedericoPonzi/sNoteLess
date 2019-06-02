import * as React from "react";
import * as ReactDOM from "react-dom";

import * as IPFS from "ipfs"
//import { OrbitDB } from 'orbit-db'
const OrbitDB = require('orbit-db')
import { Hello } from "./components/Hello";

// OrbitDB uses Pubsub which is an experimental feature
// and need to be turned on manually.
// Note that these options need to be passed to IPFS in
// all examples even if not specified so.
const ipfsOptions = {
    EXPERIMENTAL: {
      pubsub: true
    }
  }
  
  // Create IPFS instance
  const ipfs = new IPFS(ipfsOptions)
  ipfs.on('error', (e) => console.error(e))
  
  ipfs.on('ready', async () => {
    //console.log(`Orbit ${OrbitDB}`)
    const orbitdb = await OrbitDB.createInstance(ipfs)
  
    // Create / Open a database
    const db = await orbitdb.log('hello')
    console.log("db opened.")
    await db.load()
    console.log("Loaded.")
  
    // Listen for updates from peers
    db.events.on('replicated', (address: any) => {
      console.log(address)
      console.log(db.iterator({ limit: -1 }).collect())
    })
  
    // Add an entry
    const hash = await db.add('world')
    console.log(hash)
  
    // Query
    const result = db.iterator({ limit: -1 }).collect()
    console.log(JSON.stringify(result, null, 2))
    
  })
  
ReactDOM.render(
    <Hello compiler="Typescript" framework="React" />,
    document.getElementById("example")
);