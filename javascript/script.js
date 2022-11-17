let osc = ["fatsawtooth", "sawtooth", "sine", "square", "triangle"];
let oscnum = 0;



const synth = new Tone.PolySynth(
  {},
  {
    oscillator: {
      type: osc[oscnum]
    }
  }
)
synth.connect(Tone.Destination);
const varsynth = new Tone.PolySynth(
  {},
  {
    oscillator: {
      type: osc[oscnum]
    }
  }
)
varsynth.connect(Tone.Destination);
const notelength = "2n";

let naturals = ["C", "D", "E", "F", "G", "A", "B"]
let accientals = ["C#", "D#", "F#", "G#", "A#"]

document.onkeydown = function(e) {
  let a = e.key;
  
  switch (a) {
    case "z":
      varsynth.triggerAttackRelease("C3", notelength)
      break;
    case "s":
      varsynth.triggerAttackRelease("C#3", notelength)
      break;
    case "x":
      varsynth.triggerAttackRelease("D3", notelength)
      break;
    case "d":
      varsynth.triggerAttackRelease("D#3", notelength)
      break;
    case "c":
      varsynth.triggerAttackRelease("E3", notelength)
      break;
    case "v":
      varsynth.triggerAttackRelease("F3", notelength)
      break;
    case "g":
      varsynth.triggerAttackRelease("F#3", notelength)
      break;
    case "b":
      varsynth.triggerAttackRelease("G3", notelength)
      break;
    case "h":
      varsynth.triggerAttackRelease("G#3", notelength)
      break;
    case "n":
      varsynth.triggerAttackRelease("A3", notelength)
      break;
    case "j":
      varsynth.triggerAttackRelease("A#3", notelength)
      break;
    case "m":
      varsynth.triggerAttackRelease("B3", notelength)
      break;
    case ",":
      varsynth.triggerAttackRelease("C4", notelength)
      break;
    case "l":
      varsynth.triggerAttackRelease("C#4", notelength)
      break;
    case ".":
      varsynth.triggerAttackRelease("D4", notelength)
      break;
    case ";":
      varsynth.triggerAttackRelease("D#4", notelength)
      break;
    case "/":
      varsynth.triggerAttackRelease("E4", notelength)
      break;
    
    case "q":
      varsynth.triggerAttackRelease("C4", notelength)
      break;
    case "2":
      varsynth.triggerAttackRelease("C#4", notelength)
      break;
    case "w":
      varsynth.triggerAttackRelease("D4", notelength)
      break;
    case "3":
      varsynth.triggerAttackRelease("D#4", notelength)
      break;
    case "e":
      varsynth.triggerAttackRelease("E4", notelength)
      break;
    case "r":
      varsynth.triggerAttackRelease("F4", notelength)
      break;
    case "5":
      varsynth.triggerAttackRelease("F#4", notelength)
      break;
    case "t":
      varsynth.triggerAttackRelease("G4", notelength)
      break;
    case "6":
      varsynth.triggerAttackRelease("G#4", notelength)
      break;
    case "y":
      varsynth.triggerAttackRelease("A4", notelength)
      break;
    case "7":
      varsynth.triggerAttackRelease("A#4", notelength)
      break;
    case "u":
      varsynth.triggerAttackRelease("B4", notelength)
      break;
    case "i":
      varsynth.triggerAttackRelease("C5", notelength)
      break;
    case "9":
      varsynth.triggerAttackRelease("C#5", notelength)
      break;
    case "o":
      varsynth.triggerAttackRelease("D5", notelength)
      break;
    case "0":
      varsynth.triggerAttackRelease("D#5", notelength)
      break;
    case "p":
      varsynth.triggerAttackRelease("E5", notelength)
      break;
    case "[":
      varsynth.triggerAttackRelease("F5", notelength)
      break;
    case "=":
      varsynth.triggerAttackRelease("F#5", notelength)
      break;
    case "]":
      varsynth.triggerAttackRelease("G5", notelength)
      break;
  }
}

for(var octave = 3; octave < 5; octave++) {

  for(var i = 0; i < 7; i++) {

    let note = naturals[i] + octave; // gets the note from the note arrays and octaves

    document.getElementById(note).addEventListener("click", function() {
      synth.triggerAttackRelease(note, notelength) // plays the synth at the calculated note
    });
  }

  for(var i = 0; i < 5; i++) {

    let note = accientals[i] + octave; // gets the note from the note arrays and octaves

    document.getElementById(note).addEventListener("click", function() {
      synth.triggerAttackRelease(note, notelength) // plays the synth at the calculated note
    });

  }

}