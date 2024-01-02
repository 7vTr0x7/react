# crossorigin

--> The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

# npm

--> npm is package manager
--> npm manages all packages we installed in system
--> sometime this packages is also known as dependencies

--> bundler packages an app so it can shipped to production

# dependencies

--> two types of dependencies
--> 1. dev dependencies
--> 2. normal dependencies

--> dev dependencies is required in development phase

--> if we want to install something as dev dependency

--> npm install -D

# package.json & package-lock.json

--> package.json & package-lock.json

--> package.json is configuration for npm it keeps track of version of installed packages if there is a minor update in dependencies it updates them

--> package-lock.json keep a track of exact version of dependencies

--> node_modules contain data of dependencies

# npx

--> npx is used to execute a package

# parcel

--> dev build
--> local server
--> HMR - Hot Module Replacement
--> file watching algo - written in c++
--> caching - faster builds
--> image optimization
--> minification , bundling , compressing of file
--> consistent hashing
--> code spitting
--> differential bundling - supports older browser
--> diagnostic
--> error handling
--> https
--> tree shaking - removes unused code
--> different dev and production bundles
