interface LinearReg {
    weight: number; 
    bias: number; 
    learningRate: number;
    epochs: number; 
}

const x = [1, 2, 3, 4, 5], y = x.map(item => item * 2 + 1),
MSE_Grad = (predictions: number[], labels: number[]) => predictions.map((prediction, i) => 2 * (prediction - labels[i])),
linearReg: LinearReg = { weight: Math.random(), bias: Math.random(), learningRate: 0.01, epochs: 100 };
for (let i = 1; i <= linearReg.epochs; i++) {
    const predictions = x.map(input => linearReg.weight * input + linearReg.bias);
    linearReg.weight -= linearReg.learningRate * MSE_Grad(predictions, y).map((a_i, i) => a_i * x[i]).reduce((a, b) => a + b, 0) / predictions.length;
    linearReg.bias -= linearReg.learningRate * MSE_Grad(predictions, y).reduce((a, b) => a + b, 0) / predictions.length;
    console.log(`Epoch ${i}: MSE = ${predictions.map((prediction, i) => (prediction - y[i]**2)).reduce((a, b) => a + b, 0) / predictions.length}`);
}
