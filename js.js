var merhaba="MERHABA",j=0;
while(1)
{
    setTimeout(() => { document.getElementById("merhaba").innerHTML+=merhaba[j]; j++;if(j=6){j=0}},8000) ;
}