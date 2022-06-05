function compressBoxestwice(boxes, boxes2) {
    boxes.forEach((boxes) => {
        console.log(boxes);
    });

    boxes2.forEach((boxes) => {
        console.log(boxes);
    });
}

// O(a + b) because boxes and boxes2 are 2 different inputs and can be a random length 
// O(boxes + boxes2)