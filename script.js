var display = document.getElementById('display');
var oprs = ['+','-','*','/','%','**'];

function isOpr(symbol)
{
    return(oprs.includes(symbol))
}

function allClear()
{
    const val = display.value.length;
    display.setSelectionRange(val, val);
    // display.focus();
    display.value=0;
}

function del()
{
    display.value = display.value.substring(0,display.value.length-1);
    if(display.value=='') { 
        display.value = '0'; 
    }
}

function displayUpdate(arg)
{
    if(arg=='.')
    {
        if(display.value="0") { 
            display.value+=arg; 
            return 0; 
        }
    }

    if(arg=='^')
    {
        if(display.value[0]=="=") { 
            display.value=display.value.substring(1);
        }

        try{
            display.value = "= "+eval(display.value+'**2');
        }
        catch(e)
        {
            if(e instanceof SyntaxError) display.value = "= Input Syntax Error";
        }

        return 0;
    }
    // clearing display from previous output or append for operation
    if(display.value[0]=='=')
    {
        if(isOpr(arg))
            display.value = display.value.substring(1);
        else
            display.value = "";
    }

    if(display.value.substring(0,1)=='0.') { 
        display.value+=arg; 
        return 0; 
    }

    if(display.value == 0) 
        display.value=arg; // remove leading zeros
    else  
        display.value+=arg;
}

function compute()
{
    try
    {
        var value = eval(display.value);

        if(value=='Infinity' || value=='-Infinity') 
        {
            display.value = "= Error: division by zero";
            alert("Cannot Divide by Zero");
            return 0;
        }

        display.value="= "+(Math.round(value*1000) / 1000);
    }
    catch(e)
    {
        if(display.value[0]=="=") { 
            display.value="0"; 
            return 0; 
        }
        // alert("invalid data");
        display.value="= Input Syntax Error";
    }
}

function keyDown(event)
{
    if (event.keyCode == 13) {
        compute();
    }
}

function displayHelp()
{
    var msg=
`+   :: Calculate Sum.\n
-    :: Calculate Difference\n
/    :: Calculate quotient\n
%    :: Calculate remainder\n
*    :: Calculate product\n
x^2  :: Calculate square`;
    alert(msg);
}