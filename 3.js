function sortMarks(obj){
    const languageMarks = [];
    let i=0;
  
  for (let key in obj) {
    if (obj[key]>=60){
    languageMarks[i]={'lang':key,'mark':obj[key]}
    i++
    }
    }
  function compareMarks(a,b){
    return b.mark-a.mark
  }
  languageMarks.sort(compareMarks)
  let marks= languageMarks.map((p,i)=>p.lang)
  return(marks)
  }
  let newObj={"Java": 10, "Ruby": 80, "Python": 65,"Hindi": 60, "Dutch" : 93, "Greek": 71,"C++": 50, "ASM": 10, "Haskell": 20}
  console.log(sortMarks(newObj))

 /*Вам дан объект содержащий языки и оценки по этим языкам. Необходимо вернуть массив языков где оценки =>60, отсортированный в убывающем порядке по оценкам.
	
	Пример:

{"Java": 10, "Ruby": 80, "Python": 65,"Hindi": 60, "Dutch" : 93, "Greek": 71}    -->  ["Ruby", "Python"]
 	{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/



