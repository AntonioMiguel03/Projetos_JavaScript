function createAbacus(numRods, numBeads, customValues) {
      const abacus = document.getElementById('abacus');

      for (let i = 0; i < numRods; i++) {
        const rod = document.createElement('div');
        rod.className = 'rod';

        for (let j = 0; j < numBeads; j++) {
          const bead = document.createElement('div');
          bead.className = 'bead';
          bead.addEventListener('click', moveBeadToOpposite);
          rod.appendChild(bead);
        }

        const customValue = document.createElement('div');
        customValue.className = 'custom-value';
        customValue.textContent = customValues[i];
        rod.appendChild(customValue);

        abacus.appendChild(rod);
      }

      const lastRod = abacus.lastChild;
      const numberContainer = document.createElement('div');
      numberContainer.className = 'number-container';
      for (let k = 10; k >= 1; k--) {
        const number = document.createElement('div');
        number.className = 'number';
        number.textContent = k;
        number.addEventListener('click', moveNumberToOpposite);
        numberContainer.appendChild(number);
      }
      lastRod.appendChild(numberContainer);
    }

    function moveBeadToOpposite(event) {
      const clickedBead = event.target;
      const rod = clickedBead.parentElement;
      const beads = Array.from(rod.querySelectorAll('.bead'));
      const clickedIndex = beads.indexOf(clickedBead);
      const beadWidth = clickedBead.offsetWidth;
      const rodWidth = rod.offsetWidth;

      clickedBead.style.left =
        parseFloat(clickedBead.style.left) < rodWidth / 2 - beadWidth / 2
          ? `${rodWidth - beadWidth - 465}px`
          : '0';

      beads.slice(clickedIndex + 1).forEach((frontBead, index) => {
        const frontBeadWidth = frontBead.offsetWidth;
        frontBead.style.left = `${rodWidth - frontBeadWidth - 465}px`;
      });

      checkForOverlapping(beads);
    }

    function checkForOverlapping(elements) {
      for (let i = 0; i < elements.length; i++) {
        for (let j = i + 1; j < elements.length; j++) {
          const rect1 = elements[i].getBoundingClientRect();
          const rect2 = elements[j].getBoundingClientRect();

          if (!(rect1.right < rect2.left || rect1.left > rect2.right)) {
            const overlapDistance = rect1.right - rect2.left;
            elements[j].style.left = `${parseFloat(elements[j].style.left) + overlapDistance}px`;
          }
        }
      }
    }

    function moveNumberToOpposite(event) {
      const clickedNumber = event.target;
      const numberContainer = clickedNumber.parentElement;
      const numbers = Array.from(numberContainer.querySelectorAll('.number'));
      const clickedIndex = numbers.indexOf(clickedNumber);
      const oppositeIndex = numbers.length - 1 - clickedIndex;
      const oppositeNumber = numbers[oppositeIndex];
      clickedNumber.style.marginLeft = `${oppositeIndex * 110}px`;
    }

    function populateSelect(numRods) {
      const selectRod = document.getElementById('selectRod');

      for (let i = 0; i <= numRods - 1; i++) {
        const option = document.createElement('option');
        option.value = i + 1;
        const vals = ['B', 'CMO', 'DMO', 'MO', 'CM', 'DM', 'M', 'C', 'D', 'U'];
        option.textContent = vals[i];
        selectRod.appendChild(option);
      }
    }

    document.getElementById('moveAllLeft').addEventListener('click', () => moveAllBeads('left'));
    document.getElementById('moveAllRight').addEventListener('click', () => moveAllBeads('right'));
    document.getElementById('moveSelectedLeft').addEventListener('click', () => moveSelectedBeads('left'));
    document.getElementById('moveSelectedRight').addEventListener('click', () => moveSelectedBeads('right'));

    function moveAllBeads(direction) {
      const selectedRodIndex = document.getElementById('selectRod').value - 1;
      const rods = document.querySelectorAll('.rod');
      const beadsToMove = Array.from(rods[selectedRodIndex].querySelectorAll('.bead'));

      beadsToMove.forEach(bead => {
        bead.style.left = direction === 'left' ? '0' : `${rods[selectedRodIndex].offsetWidth - bead.offsetWidth - 465}px`;
      });

      checkForOverlapping(beadsToMove);
    }

function moveSelectedBeads(direction) {
  const selectedRodIndex = document.getElementById('selectRod').value - 1;
  const selectedCount = parseInt(document.getElementById('selectCount').value, 10);

  const rods = document.querySelectorAll('.rod');
  const beadsToMove = Array.from(rods[selectedRodIndex].querySelectorAll('.bead')).slice(-selectedCount);

  beadsToMove.forEach(bead => {
    bead.style.left = direction === 'left' ? '0' : `${rods[selectedRodIndex].offsetWidth - bead.offsetWidth - 465}px`;
  });

  checkForOverlapping(beadsToMove);
}

function checkForOverlappingALL(elements) {
  const beadWidth = elements[0].offsetWidth;

  for (let i = 0; i < elements.length; i++) {
    for (let j = i + 1; j < elements.length; j++) {
      const rect1 = elements[i].getBoundingClientRect();
      const rect2 = elements[j].getBoundingClientRect();

      if (!(rect1.right < rect2.left || rect1.left > rect2.right)) {
        const overlapDistance = rect1.right - rect2.left;
        const correctedOverlap = overlapDistance - beadWidth; // Ajuste para corrigir a sobreposição
        elements[j].style.left = `${parseFloat(elements[j].style.left) + correctedOverlap}px`;
      }
    }
  }
}




	// Novas funções para mover todas as contas para a esquerda e para a direita
    document.getElementById('moveAllBeadsToLeft').addEventListener('click', () => moveAllAbacusBeads('left'));
    document.getElementById('moveAllBeadsToRight').addEventListener('click', () => moveAllAbacusBeads('right'));

    function moveAllAbacusBeads(direction) {
      const beadsToMove = Array.from(document.querySelectorAll('.bead'));

      beadsToMove.forEach(bead => {
        bead.style.left = direction === 'left' ? '0' : `${bead.parentElement.offsetWidth - bead.offsetWidth - 465}px`;
      });

      checkForOverlappingALL(beadsToMove);
    }


    const customValues = ['B', 'CMO', 'DMO', 'MO', 'CM', 'DM', 'M', 'C', 'D', 'U'];
    createAbacus(10, 10, customValues);
    populateSelect(10);