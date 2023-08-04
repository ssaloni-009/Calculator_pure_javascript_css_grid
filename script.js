
class calculator{
    constructor(p_operandTextElement,c_operandTextElement){
        this.p_operandTextElement=p_operandTextElement;
        this.c_operandTextElement=c_operandTextElement;
        this.clear();
    }

    clear(){
       this.currentOperand='';
       this.previousOperand='';
       this.operation=undefined;
    }
    delete(){
         this.currentOperand=this.currentOperand.toString().slice(0,-1);
    }
    appendNumber(number){
        if(number ==='.'&&this.currentOperand.includes('.')) return;
        this.currentOperand=this.currentOperand.toString()+number.toString();
    }
    chooseOperation(operation){
            if(this.currentOperand ==='') return
            if(this.previousOperand!==''){
                this.compute();
            }
            this.operation=operation;
             this.previousOperand=this.currentOperand;
             this.currentOperand='';
    }
    compute(){
             let computation;
             const prev=parseFloat(this.previousOperand);
             const curr=parseFloat(this.currentOperand);
             if(isNaN(prev)||isNaN(curr))return;
              switch(this.operation){
                case '+': 
                    computation=prev+curr;
                    break;
                case '-': 
                    computation=prev-curr;
                    break;
                case '*': 
                    computation=prev*curr;
                    break;
                case '/': 
                    computation=prev/curr;
                    break;
              }
              this.currentOperand=computation;
              this.operation=undefined;
              this.previousOperand='';
    }
    updateDisplay(){
           
          this.c_operandTextElement.innerText=this.currentOperand;
          if(this.operation!=null){
            this.p_operandTextElement.innerText=` ${this.previousOperand} ${this.operation}`;
          }
         else{
            this.p_operandTextElement.innerText='';
         }
    }
}





const numberButton=document.querySelectorAll('[data-number]');
const operationButton=document.querySelectorAll('[data-operand]');
const deleteButton=document.querySelector('[data-delete]');
const allClearButton=document.querySelector('[data-all-clear]');
const equalButton=document.querySelector('[data-eqality]');
const p_operandTextElement=document.querySelector('[data-previous-operand]');
const c_operandTextElement=document.querySelector('[data-current-operand]');

const calci= new calculator(p_operandTextElement,c_operandTextElement);
 
numberButton.forEach(button =>{
    button.addEventListener('click',()=>{
        calci.appendNumber(button.innerText);
        calci.updateDisplay();
    })
})

operationButton.forEach(button=>{
    button.addEventListener('click',()=>{
        calci.chooseOperation(button.innerText)
        calci.updateDisplay();
    })
})

equalButton.addEventListener('click', button=>{
    calci.compute();
    calci.updateDisplay();
})

allClearButton.addEventListener('click', button=>{
    calci.clear();
    calci.updateDisplay();
})
deleteButton.addEventListener('click',()=>{
    calci.delete();
    calci.updateDisplay()
})