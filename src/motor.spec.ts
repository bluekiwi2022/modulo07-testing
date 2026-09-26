import {
  obtenerMensajePlantado,
  generarNumeroCarta,
  obtenerPuntosCarta,
} from "./motor";
import * as modelo from "./modelo";
describe("obtenerMensajePlantado", () => {
  it("Deberia devolver Has sido muy conservador cuando la puntuacion es menor de 4", () => {
    //Arrange
    const mensajeEsperado = "Has sido muy conservador";
    const puntuacion: number = 3;

    //Act
    const resultado = obtenerMensajePlantado(puntuacion);

    //Assert
    expect(resultado).toBe(mensajeEsperado);
  });

  it("Deberia devolver Te ha entrado el canguelo,¿eh? cuando la puntuacion es igual a 5", () => {
    //Arrange
    const mensajeEsperado = "Te ha entrado el canguelo, ¿eh?";
    const puntuacion: number = 5;

    //Act
    const resultado = obtenerMensajePlantado(puntuacion);

    //Assert
    expect(resultado).toBe(mensajeEsperado);
  });

  it("Deberia devolver Casi,casi... cuando la puntuacion es mayor o igual a 6 y menor o igual a 7", () => {
    //Arrange
    const mensajeEsperado = "Casi, casi...";
    const puntuacion: number = 6;

    //Act
    const resultado = obtenerMensajePlantado(puntuacion);

    //Assert
    expect(resultado).toBe(mensajeEsperado);
  });

  it("Deberia devolver Lo has clavado ¡Enhorabuena! si la puntuacion es 7.5", () => {
    //Arrange
    const mensajeEsperado = "¡Lo has clavado! ¡Enhorabuena!";
    const puntuacion: number = 7.5;

    //Act
    const resultado = obtenerMensajePlantado(puntuacion);

    //Assert
    expect(resultado).toBe(mensajeEsperado);
  });

  it("Deberia devolver Game Over,has perdido si te pasas de 7.5", () => {
    //Arrange
    const mensajeEsperado = "Game Over, has perdido";
    const puntuacion: number = 8;

    //Act
    const resultado = obtenerMensajePlantado(puntuacion);

    //Assert
    expect(resultado).toBe(mensajeEsperado);
  });
});

describe(generarNumeroCarta, () => {
  it("Deberia comprobar que numeroAlea es mayor que 7 ", () => {
    //Arrange

    const numeroAlea = 9;

    //Act
    const resultado = generarNumeroCarta(numeroAlea);

    //Assert
    expect(resultado).toBe(numeroAlea + 2);
  });

  it("Deberia comprobar que el numero es menor que 7 ó 7", () => {
    //Arrange
    const numeroAlea = 7;
    //Act
    const resultado = generarNumeroCarta(numeroAlea);
    //Assert
    expect(resultado).toBe(numeroAlea);
  });
});

describe(obtenerPuntosCarta, () => {
  it("Debería obtener el valor de la carta si es mayor de 7, es 0.5", () => {
    //Arrange
    const puntuacionEsperada = 0.5;
    const numeroCarta = 10;
    //Act
    const resultado = obtenerPuntosCarta(numeroCarta);
    //Assert
    expect(resultado).toBe(puntuacionEsperada);
  });
  it("Debería obtener el valor de la carta si es menor o igual a  7,su valor", () => {
    //Arrange

    const numeroCarta = 7;
    //Act
    const resultado = obtenerPuntosCarta(numeroCarta);
    //Assert
    expect(resultado).toBe(numeroCarta);
  });
});
