# Reto 07 — Convertidor de Temperatura (C ↔ F)

Crea un programa de consola que:

1. Pregunte primero el tipo de temperatura que se va a calcular: C o F.
2. Pida luego el número de la temperatura.
3. Muestre el resultado en grados Celsius y en grados Fahrenheit.

No copies/pegues soluciones completas; sigue el paso a paso y completa `index.js`.

Archivos del reto:

- Código: `01.Retos/reto-07-convertidor-temperatura/index.js`
- Ayuda para leer por consola: `01.Retos/reto-07-convertidor-temperatura/helpers/input.js`

## Fórmulas

- Celsius a Fahrenheit: F = C × 9/5 + 32
- Fahrenheit a Celsius: C = (F − 32) × 5/9

## Reglas

- Primero pregunta por el tipo (C o F).
- Después pide la temperatura numérica.
- Muestra SIEMPRE ambos valores: en °C y en °F (conversión + el valor original).
- Acepta C/f y F/f (no distingas mayúsculas/minúsculas).
- Si hay entradas inválidas (tipo distinto a C/F o valor no numérico), muestra un mensaje y termina.

## Paso a paso sugerido

1. Leer el tipo

- Lee un texto: “¿Qué tipo de temperatura ingresarás? (C/F)”.
- Normaliza con trim y toUpperCase.
- Valida que el tipo sea exactamente 'C' o 'F'.
- Si no es válido, muestra un mensaje (“Tipo inválido: usa C o F”) y termina.

2. Leer la temperatura

- Lee el texto: “Ingresa la temperatura:”.
- Convierte a Number.
- Si es NaN, muestra “Temperatura inválida: ingresa un número” y termina.

3. Calcular ambos valores

- Si el tipo es 'C':
  - c = valor ingresado
  - f = c × 9/5 + 32
- Si el tipo es 'F':
  - f = valor ingresado
  - c = (f − 32) × 5/9

4. Mostrar resultados

- Imprime ambas unidades, por ejemplo:
  - “Celsius: 25°C”
  - “Fahrenheit: 77°F”
- Opcional: redondea a 1–2 decimales al mostrar (p. ej., con toFixed).

5. Estructura y limpieza (opcional, recomendado)

- Crea funciones pequeñas: isValidType(tipo), toF(c), toC(f).
- Usa “early return” para manejar errores rápido y mantener el flujo claro.

## Casos de prueba mínimos

- Entrada: tipo C, temp 0 → Salida: C=0, F=32
- Entrada: tipo C, temp 100 → Salida: C=100, F=212
- Entrada: tipo F, temp 32 → Salida: C=0, F=32
- Entrada: tipo F, temp 212 → Salida: C=100, F=212
- Entrada: tipo f (minúscula), temp 50 → Debe funcionar igual que 'F'
- Entrada: tipo X → Mensaje de error por tipo inválido
- Entrada: tipo C, temp “hola” → Mensaje de error por número inválido
- Bordes: negativos (p. ej., C = −40 → F = −40)

## Pistas (sin código)

- Normaliza el tipo con: convertir a mayúsculas + trim.
- Valida el tipo con comparaciones simples (ifs).
- Convierte la temperatura con Number() y verifica NaN.
- Las fórmulas sólo cambian según el tipo inicial; imprime ambos resultados siempre.

## Cómo ejecutar (PowerShell en Windows)

```powershell
# Ubícate en la carpeta del reto
cd "/2025-3-Javascript/01.Retos/reto-07-convertidor-temperatura"

# Ejecuta el programa
node index.js
```
