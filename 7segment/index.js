class SevenSegment {
    constructor(element, colorOn = 'rgba(0, 255, 0, .6', colorOff='rgba(0, 0, 0, .2)') {
        if (element.children.length !== 0) {
            throw new Error('SevenSegment element must be empty.');
        }
        this.colorOn = colorOn;
        this.colorOff = colorOff;
        element.classList.add('seven-segment');

        this.segments = Array.from(Array(7), () => {
            const segment = document.createElement('div');
            segment.style.backgroundColor = colorOff;
            element.appendChild(segment);
            return segment;
        });
    }

    set(index, on) {
        if (!(index >= 0 ) || !(index <= 6)) {
            throw new Error('Invalid segment index: ' + index);
        }
        this.segments[index].style.backgroundColor = on ? this.colorOn : this.colorOff;
    }
}