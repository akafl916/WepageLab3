const synth = new Tone.Synth().toDestination()
const varsynth = new Tone.Synth().toDestination()

let naturals = ["C", "D", "E", "F", "G", "A", "B"]
let accientals = ["C#", "D#", "F#", "G#", "A#"]

document.onkeydown = function(e) {
  let a = e.key;
  
  switch (a) {
    case "z":
      varsynth.triggerAttackRelease("C3", '8n')
      break;
    case "s":
      varsynth.triggerAttackRelease("C#3", '8n')
      break;
    case "x":
      varsynth.triggerAttackRelease("D3", '8n')
      break;
    case "d":
      varsynth.triggerAttackRelease("D#3", '8n')
      break;
    case "c":
      varsynth.triggerAttackRelease("E3", '8n')
      break;
    case "v":
      varsynth.triggerAttackRelease("F3", '8n')
      break;
    case "g":
      varsynth.triggerAttackRelease("F#3", '8n')
      break;
    case "b":
      varsynth.triggerAttackRelease("G3", '8n')
      break;
    case "h":
      varsynth.triggerAttackRelease("G#3", '8n')
      break;
    case "n":
      varsynth.triggerAttackRelease("A3", '8n')
      break;
    case "j":
      varsynth.triggerAttackRelease("A#3", '8n')
      break;
    case "m":
      varsynth.triggerAttackRelease("B3", '8n')
      break;
    case ",":
      varsynth.triggerAttackRelease("C4", '8n')
      break;
    case "l":
      varsynth.triggerAttackRelease("C#4", '8n')
      break;
    case ".":
      varsynth.triggerAttackRelease("D4", '8n')
      break;
    case ";":
      varsynth.triggerAttackRelease("D#4", '8n')
      break;
    case "/":
      varsynth.triggerAttackRelease("E4", '8n')
      break;
    
    case "q":
      varsynth.triggerAttackRelease("C4", '8n')
      break;
    case "2":
      varsynth.triggerAttackRelease("C#4", '8n')
      break;
    case "w":
      varsynth.triggerAttackRelease("D4", '8n')
      break;
    case "3":
      varsynth.triggerAttackRelease("D#4", '8n')
      break;
    case "e":
      varsynth.triggerAttackRelease("E4", '8n')
      break;
    case "r":
      varsynth.triggerAttackRelease("F4", '8n')
      break;
    case "5":
      varsynth.triggerAttackRelease("F#4", '8n')
      break;
    case "t":
      varsynth.triggerAttackRelease("G4", '8n')
      break;
    case "6":
      varsynth.triggerAttackRelease("G#4", '8n')
      break;
    case "y":
      varsynth.triggerAttackRelease("A4", '8n')
      break;
    case "7":
      varsynth.triggerAttackRelease("A#4", '8n')
      break;
    case "u":
      varsynth.triggerAttackRelease("B4", '8n')
      break;
  }
}

for(var octave = 3; octave < 5; octave++) {

  for(var i = 0; i < 7; i++) {

    let note = naturals[i] + octave; // gets the note from the note arrays and octaves

    document.getElementById(note).addEventListener("click", function() {
      synth.triggerAttackRelease(note, '8n') // plays the synth at the calculated note
    });
  }

  for(var i = 0; i < 5; i++) {

    let note = accientals[i] + octave; // gets the note from the note arrays and octaves

    document.getElementById(note).addEventListener("click", function() {
      synth.triggerAttackRelease(note, '8n') // plays the synth at the calculated note
    });

  }

}