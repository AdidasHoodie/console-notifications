var string = "";
var spaces = 36
var decimalspaces = 0;
const chalk = require('chalk')

function isdecimalint(integer) {
    return !Number.isInteger(integer);
}



// Success Notification
function Success(Message, Title) {
    if(!Title){
        if(Message.length <= 31) {
            console.log(chalk.green(''))
            console.log(".------------------------------------.")
            console.log("|                 ✔                  |")
            console.log(":------------------------------------:")
            
            string = "";
            spaces = 36;

            decimalspaces = 0;
            decimalspaces = spaces - Message.length;
            decimalspaces = decimalspaces / 2;

            if (isdecimalint(decimalspaces)) {
                decimalspaces = Number.parseInt(decimalspaces);
                for (i = 0; i != decimalspaces; i++)
                    string = string + " ";

                console.log("|" + string + Message + string + " |");
            }
            else {
                for (i = 0; i != decimalspaces; i++)
                    string = string + " ";

                console.log("|" + string + Message + string + "|");
            }
            spaces = 36;
            string = "";
            console.log("|                                    |")
            console.log("'------------------------------------'")
            chalk.stripColor()
        }
        else {
            console.log(chalk.red(''))
            console.log(".------------------------------------.")
            console.log("| 💥 |  An Error Has occured!        |")
            console.log("| 💥 |  The argumetns length are     |")
            console.log("| 💥 |  Too Much to make Notify run  |")
            console.log("'------------------------------------'")
            chalk.stripColor()
        }
    }
    else {
        if (Message.length <= 31 && Title.length <= 31) {
            console.log(chalk.green(''))
            console.log(".------------------------------------.")
            console.log("|                 ✔                  |")
            console.log(":------------------------------------:")
            spaces = 36;
            string = "";
            decimalspaces = 0;
            decimalspaces = spaces - Title.length;
            decimalspaces = decimalspaces / 2;
            if (isdecimalint(decimalspaces))
            {
                decimalspaces = Number.parseInt(decimalspaces);
                for (i = 0; i != decimalspaces; i++)
                    string = string + " ";
                console.log("|" + string + Title + string + " |");
                console.log("|                                    |")

                string = "";
                decimalspaces = 0;
                decimalspaces = spaces - Message.length;
                decimalspaces = decimalspaces / 2;
                if (isdecimalint(decimalspaces)) {
                    decimalspaces = Number.parseInt(decimalspaces);
                    for (i = 0; i != decimalspaces; i++)
                        string = string + " ";
                    console.log("|" + string + Message + string + " |");
                }
                else {
                    for (i = 0; i != decimalspaces; i++)
                        string = string + " ";
                    console.log("|" + string + Message + string + "|");
                }

                console.log("'------------------------------------'")
                decimalspaces = 0;
                string = "";
                chalk.stripColor()
            }
            else {
                for (i = 0; i != decimalspaces; i++)
                    string = string + " ";
                console.log("|" + string + Title + string + "|");
                console.log("|                                    |")
                string = "";
                decimalspaces = 0;
                decimalspaces = spaces - Message.length;
                decimalspaces = decimalspaces / 2;
                if (isdecimalint(decimalspaces)) {
                    decimalspaces = Number.parseInt(decimalspaces);
                    for (i = 0; i != decimalspaces; i++)
                        string = string + " ";
                    console.log("|" + string + Message + string + " |");
                }
                else {
                    for (i = 0; i != decimalspaces; i++)
                        string = string + " ";
                    console.log("|" + string + Message + string + "|");
                }
                //console.log("|" + string + Message + string + "|");



                console.log("'------------------------------------'")
                decimalspaces = 0;
                string = "";
                chalk.stripColor()
            }
            
        }
        else {
            console.log(chalk.red(''))
            console.log(".------------------------------------.")
            console.log("| 💥 |  An Error Has occured!        |")
            console.log("| 💥 |  The argumetns length are     |")
            console.log("| 💥 |  Too Much to make Notify run  |")
            console.log("'------------------------------------'")
            chalk.stripColor()
        }
    }
}


// Warning Notification
function Warning(Message, Title) {
    if(!Title){
        if(Message.length <= 31) {
            console.log(chalk.orange(''))
            console.log(".------------------------------------.")
            console.log("|                 ⚠                  |")
            console.log(":------------------------------------:")
            
            string = "";
            spaces = 36;

            decimalspaces = 0;
            decimalspaces = spaces - Message.length;
            decimalspaces = decimalspaces / 2;

            if (isdecimalint(decimalspaces)) {
                decimalspaces = Number.parseInt(decimalspaces);
                for (i = 0; i != decimalspaces; i++)
                    string = string + " ";

                console.log("|" + string + Message + string + " |");
            }
            else {
                for (i = 0; i != decimalspaces; i++)
                    string = string + " ";

                console.log("|" + string + Message + string + "|");
            }
            spaces = 36;
            console.log("|                                    |")
            console.log("'------------------------------------'")
            chalk.stripColor()
        }
        else {
            console.log(chalk.red(''))
            console.log(".------------------------------------.")
            console.log("| 💥 |  An Error Has occured!        |")
            console.log("| 💥 |  The argumetns length are     |")
            console.log("| 💥 |  Too Much to make Notify run  |")
            console.log("'------------------------------------'")
            chalk.stripColor()
        }
    }
    else {
        if (Message.length <= 31 && Title.length <= 31) {
            spaces = spaces - 2;
            spaces = spaces - Title.length;
            for (i = 0; i != spaces; i++)
                string = string + " ";
            spaces = 32;
            console.log(chalk.orange(''))
            console.log(".------------------------------------.")
            console.log("|                 ⚠                  |")
            console.log(":------------------------------------:")
            string = "";
            spaces = spaces - 2;
            spaces = spaces - Message.length;
            for (i = 0; i != spaces; i++)
                string = string + " ";
            spaces = 36;
            string = "";
            decimalspaces = 0;
            decimalspaces = spaces - Title.length;
            decimalspaces = decimalspaces / 2;
            if (isdecimalint(decimalspaces))
            {
                decimalspaces = Number.parseInt(decimalspaces);
                for (i = 0; i != decimalspaces; i++)
                    string = string + " ";
                console.log("|" + string + Title + string + " |");
                console.log("|                                    |")

                string = "";
                decimalspaces = 0;
                decimalspaces = spaces - Message.length;
                decimalspaces = decimalspaces / 2;
                if (isdecimalint(decimalspaces)) {
                    decimalspaces = Number.parseInt(decimalspaces);
                    for (i = 0; i != decimalspaces; i++)
                        string = string + " ";
                    console.log("|" + string + Message + string + " |");
                }
                else {
                    for (i = 0; i != decimalspaces; i++)
                        string = string + " ";
                    console.log("|" + string + Message + string + "|");
                }

                console.log("'------------------------------------'")
                decimalspaces = 0;
                string = "";
                chalk.stripColor()
            }
            else {
                for (i = 0; i != decimalspaces; i++)
                    string = string + " ";
                console.log("|" + string + Title + string + "|");
                console.log("|                                    |")
                string = "";
                decimalspaces = 0;
                decimalspaces = spaces - Message.length;
                decimalspaces = decimalspaces / 2;
                if (isdecimalint(decimalspaces)) {
                    decimalspaces = Number.parseInt(decimalspaces);
                    for (i = 0; i != decimalspaces; i++)
                        string = string + " ";
                    console.log("|" + string + Message + string + " |");
                }
                else {
                    for (i = 0; i != decimalspaces; i++)
                        string = string + " ";
                    console.log("|" + string + Message + string + "|");
                }
                //console.log("|" + string + Message + string + "|");



                console.log("'------------------------------------'")
                decimalspaces = 0;
                string = "";
                chalk.stripColor()
            }
            
        }
        else {
            console.log(chalk.red(''))
            console.log(".------------------------------------.")
            console.log("| 💥 |  An Error Has occured!        |")
            console.log("| 💥 |  The argumetns length are     |")
            console.log("| 💥 |  Too Much to make Notify run  |")
            console.log("'------------------------------------'")
            chalk.stripColor()
        }
    }
}


// Error Notification
function Error(Message, Title) {
    if (!Title) {
        if (Message.length <= 31) {
            console.log(chalk.red(''))
            console.log(".------------------------------------.")
            console.log("|                 ❌                 |")
            console.log(":------------------------------------:")

            string = "";
            spaces = 36;

            decimalspaces = 0;
            decimalspaces = spaces - Message.length;
            decimalspaces = decimalspaces / 2;

            if (isdecimalint(decimalspaces)) {
                decimalspaces = Number.parseInt(decimalspaces);
                for (i = 0; i != decimalspaces; i++)
                    string = string + " ";

                console.log("|" + string + Message + string + " |");
            }
            else {
                for (i = 0; i != decimalspaces; i++)
                    string = string + " ";

                console.log("|" + string + Message + string + "|");
            }
            spaces = 36;
            console.log("|                                    |")
            console.log("'------------------------------------'")
            chalk.stripColor()
        }
        else {
            console.log(chalk.red(''))
            console.log(".------------------------------------.")
            console.log("| 💥 |  An Error Has occured!        |")
            console.log("| 💥 |  The argumetns length are     |")
            console.log("| 💥 |  Too Much to make Notify run  |")
            console.log("'------------------------------------'")
            chalk.stripColor()
        }
    }
    else {
        if (Message.length <= 31 && Title.length <= 31) {
            spaces = spaces - 2;
            spaces = spaces - Title.length;
            for (i = 0; i != spaces; i++)
                string = string + " ";
            spaces = 32;
            console.log(chalk.red(''))
            console.log(".------------------------------------.")
            console.log("|                 ❌                 |")
            console.log(":------------------------------------:")
            string = "";
            spaces = spaces - 2;
            spaces = spaces - Message.length;
            for (i = 0; i != spaces; i++)
                string = string + " ";
            spaces = 36;
            string = "";
            decimalspaces = 0;
            decimalspaces = spaces - Title.length;
            decimalspaces = decimalspaces / 2;
            if (isdecimalint(decimalspaces)) {
                decimalspaces = Number.parseInt(decimalspaces);
                for (i = 0; i != decimalspaces; i++)
                    string = string + " ";
                console.log("|" + string + Title + string + " |");
                console.log("|                                    |")

                string = "";
                decimalspaces = 0;
                decimalspaces = spaces - Message.length;
                decimalspaces = decimalspaces / 2;
                if (isdecimalint(decimalspaces)) {
                    decimalspaces = Number.parseInt(decimalspaces);
                    for (i = 0; i != decimalspaces; i++)
                        string = string + " ";
                    console.log("|" + string + Message + string + " |");
                }
                else {
                    for (i = 0; i != decimalspaces; i++)
                        string = string + " ";
                    console.log("|" + string + Message + string + "|");
                }

                console.log("'------------------------------------'")
                decimalspaces = 0;
                string = "";
                chalk.stripColor()
            }
            else {
                for (i = 0; i != decimalspaces; i++)
                    string = string + " ";
                console.log("|" + string + Title + string + "|");
                console.log("|                                    |")
                string = "";
                decimalspaces = 0;
                decimalspaces = spaces - Message.length;
                decimalspaces = decimalspaces / 2;
                if (isdecimalint(decimalspaces)) {
                    decimalspaces = Number.parseInt(decimalspaces);
                    for (i = 0; i != decimalspaces; i++)
                        string = string + " ";
                    console.log("|" + string + Message + string + " |");
                }
                else {
                    for (i = 0; i != decimalspaces; i++)
                        string = string + " ";
                    console.log("|" + string + Message + string + "|");
                }
                //console.log("|" + string + Message + string + "|");



                console.log("'------------------------------------'")
                decimalspaces = 0;
                string = "";
                chalk.stripColor()
            }

        }
        else {
            console.log(color.red(''))
            console.log(".------------------------------------.")
            console.log("| 💥 |  An Error Has occured!        |")
            console.log("| 💥 |  The argumetns length are     |")
            console.log("| 💥 |  Too Much to make Notify run  |")
            console.log("'------------------------------------'")
            chalk.stripColor()
        }
    }
}



//Notification test
//success("Test 1 Run Successflye");


//Notify Example Command
function NotificationExample() {
    Success("Example Notification");
    Success("With Title.", "Example Notification")
    Warning("Example Notification");
    Warning("With Title.", "Example Notification")
    Error("Example Notification");
    Error("With Title.", "Example Notification")
}


// Exports
module.exports.Sucesss = Success;
module.exports.Warning = Warning;
module.exports.Error = Error;
module.exports.ExampleNotify = NotificationExample;
