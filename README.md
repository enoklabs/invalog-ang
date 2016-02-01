#Invalog App

Front-End Framework for Invalog using Angular.js


## Starting the app

Since this is AngularJS based application you need a server (Apache, IIS, xampp, etc) to serve the html files and perform http request to load all views.
 
  > Important! Opening the index.html with a double click (i.e. using file:// protocol) will show you only a blank page because there’s no server that response to the requests made for each view in order to display the app interface.
Basic server setup (requires nodejs)

This is simple solution for a basic server setup using nodejs that might help you. If don't have installed nodejs take a look at the Build section to learn about it
 
Install the http-server  (-g installs globally)
```sh
  npm install http-server -g  
```

Once it is installed move to the root folder of the theme (where index.html is located) and run:

```sh
  http-server . -a 127.0.0.1 -p 8080
```
 
If everything goes fine you can now access to the app at  http://127.0.0.1:8080/


## Build

  > Important! You only need to follow this instructions in case you want to work with JADE, LESS and concatenate all JS modules.
 
- **Node.js** is a platform built on Chrome’s JavaScript runtime for easily building fast, scalable network applications.
 
- **Gulp** is a task manager, you can define different tasks to run certain commands. Those commands does the compilation job for JADE and LESS, and concatenates the JS files.
 
- **Bower** is a dependency manager, it works by fetching and installing packages from all over, taking care of hunting, finding, downloading, and saving the stuff you’re looking for. Bower keeps track of these packages in a manifest file, bower.json.
 
The package includes under the master/ folder the file gulpfile.js, package.json and bower.json to install the required components to compile the source files.
 
 
 
### Installing tools
 
To install node and npm, go to http://nodejs.org/
To manage dependencies, run:
```sh
  npm install -g bower to install bower
```

Once you have all tools installed, 

**Open a terminal**

go the package **master/** folder, 

```sh
  $cd master
```

then run the command:
```sh
  npm install
```
This command will install **gulp** and **all project dependencies.**


Then, to install vendor dependencies, run:
```sh
  bower install
```

Finally, run: 
```sh
  gulp
```
to start the task manager.

If everything goes fine, you should see the messages in the terminal telling you that most the task are done ok. The task will watch for files to compile them automatically all files when change.
 
To enable the automatic page reload there is also included a LiveReload task that requires the <a href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en" target="_blank">Chrome plugin Livereload</a>

