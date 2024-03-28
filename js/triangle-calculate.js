// *Objective: Get base, height of a triangle. Calculate the area by using the provided formula. And then display the area

// step-1: Get base value of the triangle.
// step-2: Added an id in the base input field
// step-3: use input field to access the input field.
// step-4: Get value from the input field.(value is string now)
// step-5: Convert the value to a number. use parsFloat()

function calculateTriangleArea(){
  // base
  const triangleBaseInput = document.getElementById('triangle-base');
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  console.log(base)

  // height
  const triangleHeightInput = document.getElementById('triangle-height');
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  console.log(height);

  // calculate triangle area
  const area = 0.5 * base * height;
  console.log('area of the triangle is:', area);

  // display triangle area
  const triangleAreaSpan = document.getElementById('triangle-area')
  triangleAreaSpan.innerText = area;
}

