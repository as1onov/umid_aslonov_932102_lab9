let a='';
let b='';
let sing='';
let finish=false;

const digit =['0','1','2','3','4','5','6','7','8','9','.'];
const action=['-','+','X','/']

const out =document.querySelector('.calc-screen p')
function cleaeAll(){
    a ='';
    b='';
    sing='';
    finish=false;
    out.textContent = 0;
}
document.querySelector('.ac').onclick = cleaeAll;
document.querySelector('.button').onclick =(event)=>{
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;
    out.textContent ='';
// 0-9 or
    const key = event.target.textContent

    if (digit.includes(key)){
            if (b===''&& sing===''){
        a += key;
        
        out.textContent = a;
    }
        else if (a!=='' && b!==''&& finish){
            b=key;
            finish=false;
            out.textContent=b;

        }
        else{
            b+=key;
            out.textContent = b;
        }
        console.log(a,b,sing);
        return;
    }
    if(action.includes(key)){
        sing = key;
        out.textContent=sing;
        console.log(a,b,sing);
        return;

    }

    //=
    if(key==='='){
        if (b==='')b=a;
        switch(sing){
            case"+":
                a=(+a)+(+b);
                break;
            case"-":
                a=a-b;
                break;
            case"X":
                a=a*b;
                break;
             case"/":
                if(b==='0'){
                    out.textContent='Error 404 '
                    a='';
                    b='';
                    sign='';
                    return;
                }
                a=a/b;
                break ;
        }
        finish=true;
        out.textContent=a;
        console.table(a,b,sing);
    }


}