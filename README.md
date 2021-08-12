# What is this?

It's a simple Node.JS Binary to show in console Notifications with design.

# Installation

`npm i console-notifications --save`

Then...

```
var notifications = require('console-notifications'); // Importing Package

// Success
notifications.Sucess("Success notification"); // arg 1 = Message
notifications.Sucess("With Title", "Success notification"); // arg 1 = Message, arg 2 = Title

// Warning
notifications.Warning("Warning notification"); // arg 1 = Message
notifications.Warning("With Title", "Warning notification"); // arg 1 = Message, arg 2 = Title

// Error
notifications.Error("Error notification"); // arg 1 = Message
notifications.Error("With Title", "Error notification"); // arg 1 = Message, arg 2 = Title


// Example command
notifications.ExampleNotify();
```

## Options

Console Notifications supports only 2 arguments, The 2nd argument is optional.

* ``Message`` The first argument is message which is message of the Notification.
* ``Title`` The second argument is Title. Which is optional. It's title of Notificaiton.


## In Progress

Now i'm working on:
``Making the arguments be automatically sized``
