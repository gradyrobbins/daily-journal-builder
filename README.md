
![C27icon](/c27.jpeg)

# Cohort 27 - Daily journal builder

## Start up instructions:  First, clone or fork this repository, then navigate to the directory in your terminal


This application requires **3 separate processes** running in your terminal:
1. **A json server as a database:**
    * cd api ```json-server -p 8088 database.json```.

    *  ```Command + T```  opens a new tab in your terminal
1. **A http-server window:**
    * cd dist ``` hs -o ```

    * ```Command + T```  opens a new tab in your terminal
1. **And, the grunt task runner:**
    * cd src/lib ```npm install```
    * ```npm start```
    * ```grunt```


### Current State:
------------------
![screengrab](/c27_dailyjournal_screengrab2point0.png)
### Earlier Version:
------------------
![screengrab](/c27_dailyjournal_screengrab.png)
