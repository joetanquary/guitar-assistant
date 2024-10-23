let notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

let strings = [{startingIndex: 4}, {startingIndex:9}, {startingIndex: 2}, {startingIndex: 7}, {startingIndex: 11}, {startingIndex: 4}]

const fretboard = document.querySelector('.fretboard');

for(string of strings) {
    let stringDiv = document.createElement('div');
    stringDiv.classList.add('string');

    for(let i = string.startingIndex; i < notes.length; i++) {
        let currDiv = document.createElement('div');
        currDiv.classList.add('note');
        currDiv.textContent = notes[i];
        stringDiv.appendChild(currDiv);

        console.log(notes[i]);
    }

    for(let j = 0; j < string.startingIndex; j++) {
        let currDiv = document.createElement('div');
        currDiv.classList.add('note');
        currDiv.textContent = notes[j];
        stringDiv.appendChild(currDiv);
        console.log(notes[j]);
    }

    fretboard.appendChild(stringDiv);


}



