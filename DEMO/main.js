var question=[
    {
        que:'Which county capital is islamabad',
      answer:[
            {
                ans:'Bangladesh',correct:false},
               { ans:'India',correct:true},
                {ans:'pakistan',correct:false},
                {ans:'Norway',correct:false}
            
        ]
        
    }, 
    {
        que:'Which county capital is istambul',
      answer:[
            {
                ans:'Bangladesh',correct:false},
               { ans:'India',correct:true},
                {ans:'pakistan',correct:false},
                {ans:'Norway',correct:false}
            
        ]
        
    }, 
    {
        que:'Which county capital is dhaka',
      answer:[
            {
                ans:'Bangladesh',correct:false},
               { ans:'India',correct:true},
                {ans:'pakistan',correct:false},
                {ans:'Norway',correct:false}
            
        ]
        
    }, 
    
]

const questionBox=document.querySelector('.questionBox h2');
const answer_box=document.querySelector('.row');
const next_button=document.getElementById('next_btn');
let index=0;
let count=0;

function startQuiz(){
    index=0;
    count=0;
    next_button.innerHTML='next';
    showQuestion()

}
function showQuestion(){
    remove()
let current_question=question[index];
let questionNo=index+1;
console.log(current_question)
questionBox.innerHTML=questionNo +'.'+current_question.que;
current_question.answer.forEach(answer=>{
    const button=document.createElement('button');
    button.innerHTML=answer.ans;
    button.classList.add('btn');
    answer_box.appendChild(button);


   if(answer.correct){
    button.dataset.correct=answer.correct;
   }
    button.addEventListener('click',(E)=>{
        const selectBtn=E.target;
        const isCorrect=selectBtn.dataset.correct==='true';
        if(isCorrect){
            selectBtn.classList.add("correct");
            count++
           
        }else{
            selectBtn.classList.add('incorrect');
        }

        Array.from(answer_box.children).forEach(button=>{
            if(button.dataset.correct=='true'){
                button.classList.add('correct')
            }
            button.disabled='true';
        });
        next_button.style.display='block'
    })
})
}

function remove(){
    next_button.style.display='none';
    while(answer_box.firstChild){
        answer_box.removeChild(answer_box.firstChild);
    }
}


next_button.addEventListener('click',()=>{
    if(index<question.length){

        index++;
        if(index<question.length){
            showQuestion();
           
               
            
            
        }else{
            remove();
            questionBox.innerHTML=`your score is ${count}`;
        }
    }else{
        startQuiz()
    }
})
startQuiz()