function updateSuhu(value) {
    document.getElementById("suhuValue").textContent = `Suhu: ${value}K`;
    document.getElementById("suhu").value = value; 
    hitungTekanan(); 
}

function hitungTekanan() {
    const n = parseFloat(document.getElementById("mol").value); 
    const T = parseFloat(document.getElementById("suhu").value);  
    const V = parseFloat(document.getElementById("volume").value);  
    const R = 8.314472; 

    if (isNaN(n) || isNaN(T) || isNaN(V) || n <= 0 || T <= 0 || V <= 0) {
        document.getElementById("tekananOutput").textContent = "Mohon masukkan nilai yang valid.";
        return;
    }

    const tekanan = (n * R * T) / V;

    document.getElementById("tekananOutput").textContent = `${tekanan.toFixed(2)} Pa`;
}


document.getElementById("checkAnswerBtn").addEventListener("click", function () {
    
    const correctAnswers = {
        problem1: "a", // Doubles
        problem2: "b", // 124,710 Pa
        problem3: "a"  // 116,396 Pa
    };

    function checkProblem(problemIndex) {
        const correctAnswers = ['a', 'b', 'a'];
        const selectedAnswer = document.querySelector(`input[name="problem${problemIndex}"]:checked`);
    
        if (selectedAnswer) {
            const answerValue = selectedAnswer.value;
            const answerLabel = selectedAnswer.nextElementSibling;
    
            if (answerValue === correctAnswers[problemIndex - 1]) {
                answerLabel.style.backgroundColor = '#87bba2'; 
                answerLabel.style.color = 'white'; 
                document.getElementById(`result${problemIndex}`).textContent = "Correct!";
            } else {
                answerLabel.style.backgroundColor = '#a72c2a'; 
                answerLabel.style.color = 'white'; 
                document.getElementById(`result${problemIndex}`).textContent = "Incorrect!";
            }
        } else {
            document.getElementById(`result${problemIndex}`).textContent = "Please select an answer!";
        }
    }

    checkProblem(1, correctAnswers.problem1);
    checkProblem(2, correctAnswers.problem2);
    checkProblem(3, correctAnswers.problem3);
});
