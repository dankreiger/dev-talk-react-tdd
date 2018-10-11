const between = (count, min, max) => count >= min && count <= max;

export const veryLongConditional = (count) => {
  return (
    between(count, 5, 10)
    ? 'Höf auf damit'
    : between(count, 11, 14)
      ? 'Ich warne dich'
      : between(count, 15, 24)
        ? 'wie du willst...'
        : between(count, 25, 44)
          ? 'Fass!'
          : between(count, 45, 64)
            ? 'Fass?'
            : between(count, 65, 79)
              ? 'Wo ist mein Hund?'
              : between(count, 80, 99)
                ? 'Ok tough guy.'
                : between(count, 100, 129)
                  ? 'Fass!'
                  : between(count, 130, 149)
                    ? 'Ok you won'
                    : between(count, 150, 169)
                      ? 'Könnten Sie bitte abhauen?'
                      : between(count, 170, 199)
                        ? 'Seriously we are done here'
                        : between(count, 200, 269)
                          ? "Don't make me win this"
                          : between(count, 270, 299)
                            ? 'Alright then'
                            : count >= 300
                              ? 'I won'
                              : 'Click Me'
  )
}