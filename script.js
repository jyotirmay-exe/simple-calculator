var display = document.getElementById('display');

function allClear()
{
    display.value=0;
}

function del()
{
    display.value = display.value.substring(0,display.value.length-1);
}

function displayUpdate(arg)
{
    if(arg=='^')
    {
        if(display.value[0]=="=") display.value=display.value.substring(1);
        display.value = "= "+eval(display.value+'**2');
        return 0;
    }
    if(display.value[0]=='=') display.value=display.value.substring(1); // clear display from previous output

    if(display.value == 0) display.value=arg; // remove leading zeros
    else display.value+=arg;
}

function compute()
{
    try
    {
        var value = eval(display.value);

        if(value=='Infinity') 
        {
            alert("Cannot Divide by Zero");
            display.value=0
            return 0;
        }

        display.value="= "+value;
    }
    catch(e)
    {
        // alert("invalid data");
        
    }
}